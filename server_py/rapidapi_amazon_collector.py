 
#!/usr/bin/env python3
"""
RapidAPI Amazon Data Collector with FIXED Analytics
Now calculates realistic price ranges and sales predictions
"""
 
import os
import sys
import time
import json
import csv
import logging
import re
from datetime import datetime
from typing import Dict, List, Optional, Tuple
from dotenv import load_dotenv
 
try:
    import psycopg2
    from psycopg2.extras import execute_values, Json
    DB_AVAILABLE = True
except Exception:
    DB_AVAILABLE = False
 
# Import your RapidAPI client
try:
    from rest_client import RapidAPIClient
except Exception:
    import http.client
    class RapidAPIClient:
        def __init__(self, api_key: str, host: str):
            self.api_key = api_key
            self.host = host
            self.headers = {'x-rapidapi-key': api_key, 'x-rapidapi-host': host}
        def _make_request(self, endpoint: str, method: str = "GET") -> Optional[Dict]:
            try:
                conn = http.client.HTTPSConnection(self.host, timeout=30)
                conn.request(method, endpoint, headers=self.headers)
                resp = conn.getresponse()
                data = resp.read()
                if resp.status == 200:
                    return json.loads(data.decode("utf-8"))
                else:
                    logging.error(f"RapidAPI HTTP {resp.status}: {data[:500]}")
                    return None
            except Exception as e:
                logging.error(f"RapidAPI error: {e}")
                return None
            finally:
                try:
                    conn.close()
                except:
                    pass
        def get_products_by_category(self, category_id: str, page: int = 1, country: str = "IN",
                                     sort_by: str = "RELEVANCE", product_condition: str = "ALL",
                                     is_prime: str = "false", deals_and_discounts: str = "NONE"):
            endpoint = (f"/products-by-category?category_id={category_id}&page={page}"
                        f"&country={country}&sort_by={sort_by}&product_condition={product_condition}"
                        f"&is_prime={is_prime}&deals_and_discounts={deals_and_discounts}")
            return self._make_request(endpoint, method="GET")
 
logging.basicConfig(level=logging.INFO,
                    format="%(asctime)s - %(levelname)s - %(message)s",
                    handlers=[
                        logging.FileHandler("rapidapi_amazon.log", encoding="utf-8"),
                        logging.StreamHandler(sys.stdout)
                    ])
logger = logging.getLogger(__name__)
 
 
class ProductAnalytics:
    """FIXED: Calculate intelligent product analytics"""
   
    @staticmethod
    def parse_sales_volume(sales_text: str) -> Optional[float]:
        """Parse sales volume - FIXED multiplier logic"""
        if not sales_text:
            return None
        try:
            text = str(sales_text).upper()
            match = re.search(r'(\d+\.?\d*)', text)
            if not match:
                return None
            number = float(match.group(1))
            # FIXED: Check M before K to prevent wrong multiplication
            if 'M' in text:
                number *= 1_000_000
            elif 'K' in text:
                number *= 1_000
            return number
        except:
            return None
   
    @staticmethod
    def calculate_price_range(current_price: Optional[float],
                            original_price: Optional[float]) -> Tuple[Optional[float], Optional[float], Optional[float]]:
        """Calculate realistic price range"""
        if not current_price:
            return None, None, None
       
        current = float(current_price)
        original = float(original_price) if original_price else None
        discount_margin = 0.15  # 15% typical variance
       
        if original and original > current:
            # Discounted product
            avg_price = (current + original) / 2
            min_price = max(current * (1 - discount_margin), 1.0)
            max_price = original
        else:
            # No discount info
            avg_price = current
            min_price = max(current * (1 - discount_margin), 1.0)
            max_price = current * (1 + discount_margin)
       
        return (round(avg_price, 2), round(min_price, 2), round(max_price, 2))
   
    @staticmethod
    def estimate_sales_range(current_sales: Optional[float],
                           is_best_seller: bool = False,
                           is_prime: bool = False) -> Tuple[Optional[float], Optional[float], Optional[float]]:
        """Estimate sales range based on product attributes"""
        if not current_sales:
            return None, None, None
       
        sales = float(current_sales)
       
        # Variance based on product type
        if is_best_seller:
            variance = 0.50  # Bestsellers have volatile sales
        elif is_prime:
            variance = 0.30  # Prime products are stable
        else:
            variance = 0.20  # Regular products
       
        avg_sales = sales
        min_sales = sales * (1 - variance)
        max_sales = sales * (1 + variance)
       
        return (round(avg_sales, 2), round(min_sales, 2), round(max_sales, 2))
 
 
class Config:
    def __init__(self):
        load_dotenv()
        self.DATABASE_URL = os.getenv("DATABASE_URL")
        self.RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
        self.RAPIDAPI_HOST = os.getenv("RAPIDAPI_HOST", "real-time-amazon-data.p.rapidapi.com")
        self.COUNTRY = os.getenv("COUNTRY", "IN")
        self.SORT_BY = os.getenv("SORT_BY", "RELEVANCE")
        self.PRODUCT_CONDITION = os.getenv("PRODUCT_CONDITION", "ALL")
        self.IS_PRIME = os.getenv("IS_PRIME", "false")
        self.DEALS_AND_DISCOUNTS = os.getenv("DEALS_AND_DISCOUNTS", "NONE")
        self.MAX_PAGES = int(os.getenv("MAX_PAGES", "5"))
        self.OUTPUT_DIR = os.getenv("OUTPUT_DIR", "data_output")
        self.DB_CONNECT_TIMEOUT = int(os.getenv("DB_CONNECT_TIMEOUT", "10"))
        self.DB_MAX_RETRIES = int(os.getenv("DB_MAX_RETRIES", "3"))
        self.CATEGORIES = self._load_categories()
        if not self.RAPIDAPI_KEY:
            raise ValueError("Missing RAPIDAPI_KEY")
        logger.info("[CONFIG] ✓ Loaded")
 
    def _load_categories(self):
        categories_env = os.getenv("CATEGORIES")
        if categories_env:
            categories = {}
            for cat in categories_env.split(","):
                if ":" in cat:
                    cat_id, cat_name = cat.split(":", 1)
                    categories[cat_id.strip()] = cat_name.strip()
            return categories
        return {
            "1350380031": "Baby Products",
            "976419031": "Electronics",
            "976392031": "Computers & Accessories",
            "1389401031": "Cell Phones",
            "1350387031": "Toys & Games",
            "1350384031": "Health & Personal Care"
        }
 
 
class Database:
    def __init__(self, url: str, timeout: int = 10, max_retries: int = 3):
        self.url = url
        self.timeout = timeout
        self.max_retries = max_retries
        self.conn = None
        self.available = False
 
    def connect(self) -> bool:
        if not self.url or not DB_AVAILABLE:
            logger.warning("[DB] Not available")
            return False
        for attempt in range(1, self.max_retries + 1):
            try:
                logger.info(f"[DB] Connecting ({attempt}/{self.max_retries})...")
                self.conn = psycopg2.connect(self.url, connect_timeout=self.timeout)
                self.conn.autocommit = False
                self.available = True
                logger.info("[DB] ✓ Connected")
                return True
            except Exception as e:
                logger.error(f"[DB] Error: {e}")
                if attempt < self.max_retries:
                    time.sleep(attempt * 2)
        return False
 
    def disconnect(self):
        if self.conn:
            try:
                self.conn.close()
            except:
                pass
            self.conn = None
            self.available = False
            logger.info("[DB] Disconnected")
 
    def create_tables(self) -> bool:
        if not self.available:
            return False
       
        create_sql = """
        CREATE TABLE IF NOT EXISTS rapidapi_amazon_products (
            id SERIAL PRIMARY KEY,
            asin VARCHAR(50) NOT NULL,
            category_id VARCHAR(50),
            category_name VARCHAR(200),
            product_title TEXT,
            product_url TEXT,
            product_photo TEXT,
            product_price TEXT,
            product_price_numeric DECIMAL(10,2),
            product_original_price TEXT,
            product_original_price_numeric DECIMAL(10,2),
            product_star_rating TEXT,
            product_star_rating_numeric DECIMAL(3,2),
            product_num_ratings INTEGER,
            is_best_seller BOOLEAN DEFAULT FALSE,
            is_amazon_choice BOOLEAN DEFAULT FALSE,
            is_prime BOOLEAN DEFAULT FALSE,
            sales_volume TEXT,
            country VARCHAR(10),
            raw_data JSONB,
           
            -- Analytics columns
            avg_price DECIMAL(10,2),
            min_price DECIMAL(10,2),
            max_price DECIMAL(10,2),
            avg_sales_volume DECIMAL(15,2),
            min_sales_volume DECIMAL(15,2),
            max_sales_volume DECIMAL(15,2),
           
            created_at TIMESTAMPTZ DEFAULT now(),
            updated_at TIMESTAMPTZ DEFAULT now(),
            UNIQUE (asin, category_id, country)
        );
       
        CREATE INDEX IF NOT EXISTS idx_rapidapi_asin ON rapidapi_amazon_products(asin);
        CREATE INDEX IF NOT EXISTS idx_rapidapi_category ON rapidapi_amazon_products(category_id);
        """
       
        alter_sql = """
        DO $$
        BEGIN
            ALTER TABLE rapidapi_amazon_products
            ADD COLUMN IF NOT EXISTS min_sales_volume DECIMAL(15,2),
            ADD COLUMN IF NOT EXISTS max_sales_volume DECIMAL(15,2);
        END $$;
        """
       
        try:
            with self.conn.cursor() as cur:
                cur.execute(create_sql)
                cur.execute(alter_sql)
            self.conn.commit()
            logger.info("[DB] ✓ Tables ready")
            return True
        except Exception as e:
            logger.error(f"[DB] Table error: {e}")
            if self.conn:
                self.conn.rollback()
            return False
 
    def save_products(self, products: List[Dict]) -> int:
        """Save products with FIXED analytics"""
        if not self.available or not products:
            return 0
 
        tuples = []
        for p in products:
            try:
                # FIXED: Calculate analytics properly
                current_price = p.get("product_price_numeric")
                original_price = p.get("product_original_price_numeric")
               
                # Price analytics
                avg_price, min_price, max_price = ProductAnalytics.calculate_price_range(
                    current_price, original_price
                )
               
                # Sales analytics - FIXED parsing
                current_sales = ProductAnalytics.parse_sales_volume(p.get("sales_volume"))
                avg_sales, min_sales, max_sales = ProductAnalytics.estimate_sales_range(
                    current_sales,
                    p.get("is_best_seller", False),
                    p.get("is_prime", False)
                )
               
                tuples.append((
                    p.get("asin"),
                    p.get("category_id"),
                    p.get("category_name"),
                    p.get("product_title"),
                    p.get("product_url"),
                    p.get("product_photo"),
                    p.get("product_price"),
                    p.get("product_price_numeric"),
                    p.get("product_original_price"),
                    p.get("product_original_price_numeric"),
                    p.get("product_star_rating"),
                    p.get("product_star_rating_numeric"),
                    int(p.get("product_num_ratings")) if p.get("product_num_ratings") not in (None, "") else None,
                    bool(p.get("is_best_seller", False)),
                    bool(p.get("is_amazon_choice", False)),
                    bool(p.get("is_prime", False)),
                    p.get("sales_volume"),
                    p.get("country"),
                    Json(p.get("raw_data", {})),
                    avg_price, min_price, max_price,
                    avg_sales, min_sales, max_sales
                ))
            except Exception as e:
                logger.debug(f"[DB] Skip product {p.get('asin')}: {e}")
                continue
 
        if not tuples:
            return 0
 
        insert_sql = """
        INSERT INTO rapidapi_amazon_products (
            asin, category_id, category_name, product_title, product_url,
            product_photo, product_price, product_price_numeric,
            product_original_price, product_original_price_numeric,
            product_star_rating, product_star_rating_numeric,
            product_num_ratings, is_best_seller, is_amazon_choice,
            is_prime, sales_volume, country, raw_data,
            avg_price, min_price, max_price,
            avg_sales_volume, min_sales_volume, max_sales_volume
        )
        VALUES %s
        ON CONFLICT (asin, category_id, country) DO UPDATE
        SET
            product_price = EXCLUDED.product_price,
            product_price_numeric = EXCLUDED.product_price_numeric,
            avg_price = EXCLUDED.avg_price,
            min_price = EXCLUDED.min_price,
            max_price = EXCLUDED.max_price,
            avg_sales_volume = EXCLUDED.avg_sales_volume,
            min_sales_volume = EXCLUDED.min_sales_volume,
            max_sales_volume = EXCLUDED.max_sales_volume,
            updated_at = now()
        ;
        """
        try:
            with self.conn.cursor() as cur:
                execute_values(cur, insert_sql, tuples, page_size=100)
            self.conn.commit()
            logger.info(f"[DB] ✓ Saved {len(tuples)} products with analytics")
            return len(tuples)
        except Exception as e:
            logger.error(f"[DB] Save error: {e}")
            if self.conn:
                self.conn.rollback()
            return 0
 
    def get_stats(self):
        if not self.available:
            return None
        try:
            with self.conn.cursor() as cur:
                cur.execute("""
                    SELECT COUNT(*) as total,
                           COUNT(DISTINCT asin) as unique_asins,
                           COUNT(DISTINCT category_id) as categories,
                           AVG(avg_price) as overall_avg_price,
                           AVG(avg_sales_volume) as overall_avg_sales
                    FROM rapidapi_amazon_products
                    WHERE country = %s
                """, ('IN',))
                r = cur.fetchone()
            return {
                "total": r[0],
                "unique_asins": r[1],
                "categories": r[2],
                "avg_price": float(r[3]) if r[3] else None,
                "avg_sales": float(r[4]) if r[4] else None
            }
        except:
            return None
 
 
class AmazonDataCollector:
    def __init__(self, config: Config):
        self.config = config
        self.api = RapidAPIClient(config.RAPIDAPI_KEY, config.RAPIDAPI_HOST)
        self.db = Database(config.DATABASE_URL, config.DB_CONNECT_TIMEOUT, config.DB_MAX_RETRIES)
 
    def _parse_price(self, price_str) -> Optional[float]:
        if not price_str:
            return None
        try:
            return float(re.sub(r'[^\d.]', '', str(price_str)))
        except:
            return None
 
    def _parse_rating(self, rating_str) -> Optional[float]:
        if not rating_str:
            return None
        try:
            match = re.search(r'(\d+(\.\d+)?)', str(rating_str))
            return float(match.group(1)) if match else None
        except:
            return None
 
    def extract_products(self, response: Dict, category_id: str, category_name: str) -> List[Dict]:
        products = []
        if not response or response.get("status") != "OK":
            return products
       
        for item in response.get("data", {}).get("products", []):
            if not item.get("asin"):
                continue
            products.append({
                "asin": item.get("asin"),
                "category_id": category_id,
                "category_name": category_name,
                "product_title": item.get("product_title"),
                "product_url": item.get("product_url"),
                "product_photo": item.get("product_photo"),
                "product_price": item.get("product_price"),
                "product_price_numeric": self._parse_price(item.get("product_price")),
                "product_original_price": item.get("product_original_price"),
                "product_original_price_numeric": self._parse_price(item.get("product_original_price")),
                "product_star_rating": item.get("product_star_rating"),
                "product_star_rating_numeric": self._parse_rating(item.get("product_star_rating")),
                "product_num_ratings": item.get("product_num_ratings", 0),
                "is_best_seller": item.get("is_best_seller", False),
                "is_amazon_choice": item.get("is_amazon_choice", False),
                "is_prime": item.get("is_prime", False),
                "sales_volume": item.get("sales_volume"),
                "country": self.config.COUNTRY,
                "raw_data": item
            })
        return products
 
    def collect_category(self, category_id: str, category_name: str):
        logger.info(f"\n{'='*70}\n[COLLECT] {category_name}")
        total = 0
        for page in range(1, self.config.MAX_PAGES + 1):
            logger.info(f"[PAGE] {page}/{self.config.MAX_PAGES}...")
            response = self.api.get_products_by_category(
                category_id=category_id, page=page, country=self.config.COUNTRY
            )
            if not response:
                break
            products = self.extract_products(response, category_id, category_name)
            if not products:
                break
            saved = self.db.save_products(products)
            total += saved
            if saved > 0:
                logger.info(f"[SAVED] ✓ {saved} products")
            if page < self.config.MAX_PAGES:
                time.sleep(2)
        logger.info(f"[RESULT] {total} products saved")
        return {"success": total > 0, "count": total}
 
    def collect_all(self):
        results = []
        logger.info("[START] Collection starting")
        if self.db.connect() and self.db.create_tables():
            logger.info("[MODE] Using DATABASE")
        else:
            logger.error("[FATAL] Database required")
            return results
 
        for i, (cat_id, cat_name) in enumerate(self.config.CATEGORIES.items(), 1):
            logger.info(f"\n[PROGRESS] Category {i}/{len(self.config.CATEGORIES)}")
            res = self.collect_category(cat_id, cat_name)
            results.append(res)
            if i < len(self.config.CATEGORIES):
                time.sleep(3)
        return results
 
 
def main():
    try:
        cfg = Config()
        collector = AmazonDataCollector(cfg)
        results = collector.collect_all()
 
        stats = collector.db.get_stats()
        if stats:
            logger.info(f"\n[STATS] Products: {stats['total']}, ASINs: {stats['unique_asins']}")
            if stats.get('avg_price'):
                logger.info(f"[ANALYTICS] Avg Price: ₹{stats['avg_price']:.2f}")
            if stats.get('avg_sales'):
                logger.info(f"[ANALYTICS] Avg Sales: {stats['avg_sales']:,.0f}")
 
        total = sum(r.get("count", 0) for r in results)
        logger.info(f"[COMPLETE] {total} products collected")
 
    except KeyboardInterrupt:
        logger.info("\n[STOP] Interrupted")
    except Exception as e:
        logger.error(f"[ERROR] {e}", exc_info=True)
    finally:
        try:
            collector.db.disconnect()
        except:
            pass
 
 
if __name__ == "__main__":
    main()
 