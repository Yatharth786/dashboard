# server_py/dataforseo_amazon.py - INTEGRATED VERSION (No external client.py needed)
import os
import sys
import time
import logging
import requests
import json
from typing import Optional, Dict, Any, List
from datetime import datetime
from dotenv import load_dotenv

# Add parent directory to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server_py.database_config import SessionLocal
from server_py.models import DataForSEOTask, AmazonProduct

load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# ==================== INTEGRATED REST CLIENT ====================
class RestClient:
    """
    REST client for DataForSEO API
    Integrated directly to avoid external dependencies
    """
    
    domain = "api.dataforseo.com"
    
    def __init__(self, username: str, password: str):
        self.username = username
        self.password = password
    
    def request(
        self, 
        path: str, 
        method: str = 'get', 
        data: Optional[Dict[str, Any]] = None
    ) -> Optional[Dict[str, Any]]:
        """Make API request"""
        url = f"https://{self.domain}{path}"
        
        try:
            if method.lower() == 'get':
                response = requests.get(
                    url, 
                    auth=(self.username, self.password),
                    timeout=30
                )
            elif method.lower() == 'post':
                response = requests.post(
                    url,
                    auth=(self.username, self.password),
                    json=data,
                    headers={'Content-Type': 'application/json'},
                    timeout=30
                )
            else:
                raise ValueError(f"Unsupported method: {method}")
            
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.Timeout:
            logger.error(f"❌ Request timeout for {path}")
            return None
        except requests.exceptions.RequestException as e:
            logger.error(f"❌ Request failed for {path}: {e}")
            return None
        except json.JSONDecodeError:
            logger.error(f"❌ Invalid JSON response from {path}")
            return None
    
    def get(self, path: str) -> Optional[Dict[str, Any]]:
        """Make GET request"""
        return self.request(path, method='get')
    
    def post(self, path: str, data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Make POST request"""
        return self.request(path, method='post', data=data)


# ==================== DATAFORSEO COLLECTOR ====================
class DataForSEOAmazonCollector:
    """DataForSEO Amazon data collector with DATABASE storage"""

    def __init__(self):
        self.login = os.getenv("DATAFORSEO_LOGIN")
        self.password = os.getenv("DATAFORSEO_PASSWORD")
        
        if not self.login or not self.password:
            raise ValueError("DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD must be set in .env")
        
        self.client = RestClient(self.login, self.password)
        logger.info(f"✅ DataForSEO client ready for {self.login}")

    def submit_products_task(self, keyword: str, location_code: int = 2840,
                            language_code: str = "en_US", depth: int = 100,
                            sort_by: str = "relevance") -> Optional[str]:
        """Submit task to fetch Amazon products"""
        endpoint = "/v3/merchant/amazon/products/task_post"
        
        task_data = [{
            "keyword": keyword,
            "location_code": location_code,
            "language_code": language_code,
            "depth": depth,
            "sort_by": sort_by
        }]
        
        logger.info(f"📤 Submitting task for: {keyword}")
        
        try:
            response = self.client.post(endpoint, task_data)
            
            if response.get('status_code') == 20000:
                task_id = response['tasks'][0].get('id')
                logger.info(f"✅ Task submitted: {task_id}")
                return task_id
            else:
                logger.error(f"❌ Failed: {response.get('status_message')}")
                return None
        except Exception as e:
            logger.error(f"❌ Error: {e}")
            return None

    def get_task_results(self, task_id: str) -> Optional[Dict]:
        """Get results for completed task"""
        endpoint = f"/v3/merchant/amazon/products/task_get/advanced/{task_id}"
        
        try:
            response = self.client.get(endpoint)
            
            if response.get('status_code') == 20000:
                task = response['tasks'][0]
                if task.get('status_code') == 20000 and task.get('result'):
                    return response
                else:
                    logger.warning(f"⏳ Task {task_id} not ready")
                    return None
            else:
                logger.error(f"❌ Failed: {response.get('status_message')}")
                return None
        except Exception as e:
            logger.error(f"❌ Error: {e}")
            return None

    def save_task_to_db(self, task_id: str, keyword: str, location_code: int,
                        language_code: str, db):
        """Save task to database"""
        try:
            task = DataForSEOTask(
                id=task_id,
                keyword=keyword,
                location_code=location_code,
                language_code=language_code,
                status_code=20100,
                status_message="Task Created",
                cost=0.003
            )
            db.merge(task)
            db.commit()
            logger.info(f"💾 Task saved to DB: {task_id}")
        except Exception as e:
            logger.error(f"❌ Error saving task: {e}")
            db.rollback()

    def extract_and_save_products(self, task_id: str, results: Dict, 
                                   keyword: str, db) -> int:
        """Extract products from results and save to database"""
        count = 0
        
        try:
            tasks = results.get('tasks', [])
            
            for task in tasks:
                result_list = task.get('result', [])
                
                for result in result_list:
                    items = result.get('items', [])
                    
                    for item in items:
                        # Extract product data
                        product_data = self.extract_product_data(
                            item, task_id, keyword
                        )
                        
                        if product_data:
                            # Save to database
                            product = AmazonProduct(**product_data)
                            db.add(product)
                            count += 1
            
            db.commit()
            logger.info(f"✅ Saved {count} products to database")
            
            # Update task with result count
            task = db.query(DataForSEOTask).filter(
                DataForSEOTask.id == task_id
            ).first()
            if task:
                task.result_count = count
                task.completed_at = datetime.utcnow()
                db.commit()
            
            return count
            
        except Exception as e:
            logger.error(f"❌ Error saving products: {e}")
            db.rollback()
            return 0

    def extract_product_data(self, item: Dict, task_id: str, 
                            keyword: str) -> Optional[Dict]:
        """Extract product data from API response item"""
        try:
            asin = item.get('data_asin')
            if not asin:
                return None
            
            rating = item.get('rating') or {}
            delivery = item.get('delivery_info') or {}
            
            return {
                'task_id': task_id,
                'asin': asin,
                'keyword': keyword,
                'type': item.get('type', 'unknown'),
                'title': item.get('title'),
                'url': item.get('url'),
                'image_url': item.get('image_url'),
                'price_from': item.get('price_from'),
                'price_to': item.get('price_to'),
                'currency': item.get('currency', 'USD'),
                'special_offers': item.get('special_offers'),
                'rating_value': rating.get('value'),
                'rating_votes': rating.get('votes_count'),
                'bought_past_month': item.get('bought_past_month'),
                'rank_group': item.get('rank_group'),
                'rank_absolute': item.get('rank_absolute'),
                'position': str(item.get('position', '')),
                'is_amazon_choice': item.get('is_amazon_choice', False),
                'is_best_seller': item.get('is_best_seller', False),
                'delivery_info': delivery
            }
        except Exception as e:
            logger.error(f"❌ Error extracting product: {e}")
            return None

    def collect_and_store(self, keyword: str, wait_time: int = 90,
                         db=None, **kwargs) -> Dict[str, Any]:
        """Main workflow: submit, wait, fetch, store in DATABASE"""
        
        logger.info("=" * 70)
        logger.info(f"🚀 Starting collection: {keyword}")
        logger.info(f"📊 Will store in DATABASE at: 122.176.108.253")
        logger.info("=" * 70)
        
        # Create DB session if not provided
        if db is None:
            db = SessionLocal()
            close_db = True
        else:
            close_db = False
        
        try:
            # Submit task
            task_id = self.submit_products_task(
                keyword=keyword,
                location_code=kwargs.get('location_code', 2840),
                language_code=kwargs.get('language_code', 'en_US'),
                depth=kwargs.get('depth', 100)
            )
            
            if not task_id:
                return {"success": False, "error": "Task submission failed"}
            
            # Save task to database
            self.save_task_to_db(
                task_id, keyword,
                kwargs.get('location_code', 2840),
                kwargs.get('language_code', 'en_US'),
                db
            )
            
            # Wait
            logger.info(f"⏳ Waiting {wait_time} seconds...")
            time.sleep(wait_time)
            
            # Get results
            results = self.get_task_results(task_id)
            if not results:
                return {"success": False, "error": "Task not ready or failed"}
            
            # Extract and save products to database
            products_stored = self.extract_and_save_products(
                task_id, results, keyword, db
            )
            
            logger.info(f"✅ Completed! {products_stored} products saved to DATABASE")
            logger.info("=" * 70 + "\n")
            
            return {
                "success": True,
                "task_id": task_id,
                "products_stored": products_stored
            }
            
        finally:
            if close_db:
                db.close()


# Global instance
dataforseo_collector = DataForSEOAmazonCollector()