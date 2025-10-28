#!/usr/bin/env python3
"""
DataForSEO Amazon Product Collector - Working Version
Based on October 24th successful implementation
"""

import os
import sys
import time
import logging
import argparse
from datetime import datetime
from typing import Dict, Any, List, Optional
import psycopg2
from psycopg2.extras import execute_values
from dotenv import load_dotenv

try:
    from rest_client import RestClient
except ImportError:
    print("ERROR: rest_client.py not found!")
    sys.exit(1)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler("dataforseo_cron.log", encoding="utf-8"),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except:
        pass


# ==================== CONFIG ====================

class Config:
    """Configuration for DataForSEO API and Database"""
    
    def __init__(self):
        load_dotenv()

        # Database
        self.DATABASE_URL = os.getenv("DATABASE_URL")
        
        # DataForSEO API
        self.DATAFORSEO_LOGIN = os.getenv("DATAFORSEO_LOGIN")
        self.DATAFORSEO_PASSWORD = os.getenv("DATAFORSEO_PASSWORD")
        
        # Location Settings - Using names like the working version
        self.LOCATION_NAME = os.getenv("LOCATION_NAME", "United States")
        self.LANGUAGE_NAME = os.getenv("LANGUAGE_NAME", "English (United States)")
        
        # Collection Settings
        self.DEPTH = int(os.getenv("DEPTH", "100"))
        self.INITIAL_WAIT = int(os.getenv("WAIT_TIME", "180"))  # 3 minutes initial wait
        
        # Database Connection
        self.DB_CONNECT_TIMEOUT = int(os.getenv("DB_CONNECT_TIMEOUT", "10"))
        self.DB_MAX_RETRIES = int(os.getenv("DB_MAX_RETRIES", "3"))
        
        # Keywords
        self.DEFAULT_KEYWORDS = [k.strip() for k in os.getenv("KEYWORDS", "laptop,smartphone,headphones").split(",")]

        self.validate()

    def validate(self):
        missing = [
            var for var in ["DATABASE_URL", "DATAFORSEO_LOGIN", "DATAFORSEO_PASSWORD"]
            if not getattr(self, var)
        ]
        if missing:
            raise ValueError(f"Missing required environment variables: {', '.join(missing)}")


# ==================== DATABASE ====================

class Database:
    """Database handler for PostgreSQL"""
    
    def __init__(self, database_url: str, connect_timeout: int = 10, max_retries: int = 3):
        self.database_url = database_url
        self.connect_timeout = connect_timeout
        self.max_retries = max_retries
        self.conn = None

    def connect(self):
        """Connect to database with retry logic"""
        for attempt in range(1, self.max_retries + 1):
            try:
                logger.info(f"[DB] Connecting to database (attempt {attempt}/{self.max_retries})...")
                conn_url = (
                    f"{self.database_url}&connect_timeout={self.connect_timeout}"
                    if "?" in self.database_url
                    else f"{self.database_url}?connect_timeout={self.connect_timeout}"
                )
                self.conn = psycopg2.connect(conn_url)
                logger.info("[DB] Connection successful")
                return True
            except psycopg2.OperationalError as e:
                logger.error(f"[DB ERROR] {e}")
                if attempt < self.max_retries:
                    wait_time = attempt * 2
                    time.sleep(wait_time)
        return False

    def disconnect(self):
        """Close database connection"""
        if self.conn:
            self.conn.close()
            logger.info("[DB] Disconnected")

    def create_tables(self):
        """Create necessary tables if they don't exist"""
        cursor = self.conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS amazon_products (
                id SERIAL PRIMARY KEY,
                task_id VARCHAR(100),
                asin VARCHAR(50),
                keyword VARCHAR(200),
                title TEXT,
                url TEXT,
                image_url TEXT,
                price_from FLOAT,
                price_to FLOAT,
                currency VARCHAR(10),
                rating_value FLOAT,
                rating_votes INTEGER,
                is_best_seller BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT NOW(),
                UNIQUE(task_id, asin)
            )
        """)
        self.conn.commit()
        logger.info("[DB] Tables verified")

    def save_products(self, products: List[Dict]):
        """Save products to database"""
        if not products:
            return 0
        
        cursor = self.conn.cursor()
        try:
            execute_values(cursor, """
                INSERT INTO amazon_products 
                (task_id, asin, keyword, title, url, image_url, price_from, price_to, currency, 
                 rating_value, rating_votes, is_best_seller)
                VALUES %s ON CONFLICT (task_id, asin) DO NOTHING
            """, [
                (
                    p.get("task_id"), p.get("asin"), p.get("keyword"), p.get("title"),
                    p.get("url"), p.get("image_url"), p.get("price_from"), p.get("price_to"),
                    p.get("currency"), p.get("rating_value"), p.get("rating_votes"),
                    p.get("is_best_seller", False)
                )
                for p in products
            ])
            self.conn.commit()
            return len(products)
        except Exception as e:
            logger.error(f"[DB ERROR] Failed to save products: {e}")
            self.conn.rollback()
            return 0


# ==================== DATAFORSEO CLIENT ====================

class DataForSEOClient:
    """DataForSEO API client wrapper - matching October 24th working version"""
    
    def __init__(self, login: str, password: str):
        self.client = RestClient(login, password)
        logger.info("[API] Initialized with 60s timeout")

    def submit_task(self, keyword: str, location_name: str, language_name: str, depth: int = 100):
        """Submit a task to DataForSEO API"""
        try:
            logger.info(f"[API] Submitting task for keyword='{keyword}'")
            
            # Using the exact format that worked on October 24th
            post_data = [{
                "keyword": keyword,
                "location_name": location_name,
                "language_name": language_name,
                "depth": depth
            }]
            
            # Call the API
            response = self.client.post("/v3/merchant/amazon/products/task_post", post_data, timeout=60)
            
            if not response:
                logger.error("[API] No response from API")
                return None
            
            # Check status
            if response.get("status_code") != 20000:
                logger.error(f"[API] API error: {response.get('status_message', 'Unknown error')}")
                return None
            
            # Extract task ID
            tasks = response.get("tasks", [])
            if not tasks:
                logger.error("[API] No tasks in response")
                return None
            
            task_id = tasks[0].get("id")
            if task_id:
                logger.info(f"[API] Task submitted successfully. task_id={task_id}")
                return task_id
            
            logger.error("[API] No task ID in response")
            return None
            
        except Exception as e:
            logger.error(f"[API ERROR] {e}")
            return None

    def get_results(self, task_id: str):
        """Get results for a submitted task"""
        try:
            logger.info(f"[API] Fetching results for task_id={task_id}")
            
            response = self.client.get(
                f"/v3/merchant/amazon/products/task_get/advanced/{task_id}",
                timeout=60
            )
            
            if not response:
                return None
            
            # Check if task is complete
            if response.get("status_code") == 20000:
                tasks = response.get("tasks", [])
                if tasks and tasks[0].get("result"):
                    return response
            
            return None
            
        except Exception as e:
            logger.error(f"[API ERROR] {e}")
            return None


# ==================== COLLECTOR ====================

class AmazonDataCollector:
    """Main collector class"""
    
    def __init__(self, config: Config):
        self.config = config
        self.db = Database(
            config.DATABASE_URL,
            config.DB_CONNECT_TIMEOUT,
            config.DB_MAX_RETRIES
        )
        self.api = DataForSEOClient(
            config.DATAFORSEO_LOGIN,
            config.DATAFORSEO_PASSWORD
        )

    def extract_products(self, results: Dict, task_id: str, keyword: str):
        """Extract products from API response"""
        products = []
        
        for task in results.get("tasks", []):
            for result in task.get("result", []):
                for item in result.get("items", []):
                    asin = item.get("data_asin") or item.get("asin")
                    if not asin:
                        continue
                    
                    rating = item.get("rating") or {}
                    
                    products.append({
                        "task_id": task_id,
                        "asin": asin,
                        "keyword": keyword,
                        "title": item.get("title"),
                        "url": item.get("url"),
                        "image_url": item.get("image_url"),
                        "price_from": item.get("price_from"),
                        "price_to": item.get("price_to"),
                        "currency": item.get("currency"),
                        "rating_value": rating.get("value") if isinstance(rating, dict) else None,
                        "rating_votes": rating.get("votes_count") if isinstance(rating, dict) else None,
                        "is_best_seller": item.get("is_best_seller", False)
                    })
        
        return products

    def collect_keyword(self, keyword: str):
        """Collect data for a single keyword - matching October 24th logic"""
        logger.info(f"[COLLECT] Keyword: {keyword}")
        
        # Submit task
        task_id = self.api.submit_task(
            keyword=keyword,
            location_name=self.config.LOCATION_NAME,
            language_name=self.config.LANGUAGE_NAME,
            depth=self.config.DEPTH
        )
        
        if not task_id:
            logger.error(f"[FAILED] Could not submit task for '{keyword}'")
            return {"success": False, "keyword": keyword}
        
        # Wait for initial processing (same as October 24th)
        time.sleep(self.config.INITIAL_WAIT)
        
        # Get results
        results = self.api.get_results(task_id)
        
        if not results:
            logger.error(f"[FAILED] Could not retrieve results for '{keyword}'")
            return {"success": False, "keyword": keyword, "task_id": task_id}
        
        # Extract and save products
        products = self.extract_products(results, task_id, keyword)
        saved = self.db.save_products(products)
        
        logger.info(f"[DONE] {saved} products saved for '{keyword}'")
        
        return {
            "success": True,
            "keyword": keyword,
            "task_id": task_id,
            "count": saved
        }

    def collect_all(self, keywords: List[str]):
        """Collect data for all keywords"""
        results = []
        
        for keyword in keywords:
            result = self.collect_keyword(keyword.strip())
            results.append(result)
        
        return results


# ==================== MAIN ====================

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(description="DataForSEO Amazon Product Collector")
    parser.add_argument("--run-once", action="store_true", help="Run once and exit")
    args = parser.parse_args()

    try:
        config = Config()
        collector = AmazonDataCollector(config)
        
        if not collector.db.connect():
            logger.error("[EXIT] Database connection failed")
            sys.exit(1)
        
        collector.db.create_tables()
        
        results = collector.collect_all(config.DEFAULT_KEYWORDS)
        
        collector.db.disconnect()
        
        # Summary
        successful = sum(1 for r in results if r.get("success"))
        total_products = sum(r.get("count", 0) for r in results)
        
        logger.info("=" * 70)
        logger.info(f"[COMPLETE] Successful: {successful}/{len(results)}")
        logger.info(f"[STATS] Total products: {total_products}")
        logger.info("=" * 70)
        
    except KeyboardInterrupt:
        logger.info("\n[STOP] Stopped by user")
        sys.exit(0)
        
    except Exception as e:
        logger.error(f"[ERROR] {e}", exc_info=True)
        sys.exit(1)


if __name__ == "__main__":
    main()