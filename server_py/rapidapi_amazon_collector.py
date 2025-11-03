# # #!/usr/bin/env python3
# # """
# # RapidAPI Amazon Data Collector - CSV Fallback Mode
# # Works even when database is unavailable
# # """

# # import os
# # import sys
# # import time
# # import json
# # import csv
# # import logging
# # import re
# # from datetime import datetime
# # from typing import Dict, List, Optional
# # from dotenv import load_dotenv
# # from rest_client import RapidAPIClient

# # try:
# #     import psycopg2
# #     from psycopg2.extras import execute_values
# #     DB_AVAILABLE = True
# # except ImportError:
# #     DB_AVAILABLE = False
# #     print("Warning: psycopg2 not installed. Using CSV mode only.")

# # # Logging setup
# # logging.basicConfig(
# #     level=logging.INFO,
# #     format="%(asctime)s - %(levelname)s - %(message)s",
# #     handlers=[
# #         logging.FileHandler("rapidapi_amazon.log", encoding="utf-8"),
# #         logging.StreamHandler(sys.stdout)
# #     ]
# # )
# # logger = logging.getLogger(__name__)

# # if sys.platform == "win32":
# #     try:
# #         sys.stdout.reconfigure(encoding="utf-8")
# #     except:
# #         pass


# # class Config:
# #     """Configuration from environment variables"""
    
# #     def __init__(self):
# #         load_dotenv()
        
# #         self.DATABASE_URL = os.getenv("DATABASE_URL")
# #         self.RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
# #         self.RAPIDAPI_HOST = "real-time-amazon-data.p.rapidapi.com"
# #         self.COUNTRY = os.getenv("COUNTRY", "IN")
# #         self.SORT_BY = os.getenv("SORT_BY", "RELEVANCE")
# #         self.PRODUCT_CONDITION = os.getenv("PRODUCT_CONDITION", "ALL")
# #         self.IS_PRIME = os.getenv("IS_PRIME", "false")
# #         self.DEALS_AND_DISCOUNTS = os.getenv("DEALS_AND_DISCOUNTS", "NONE")
# #         self.CATEGORIES = self._load_categories()
# #         self.MAX_PAGES = int(os.getenv("MAX_PAGES", "5"))
# #         self.OUTPUT_DIR = os.getenv("OUTPUT_DIR", "data_output")
        
# #         self.validate()
    
# #     def _load_categories(self):
# #         categories_env = os.getenv("CATEGORIES")
# #         if categories_env:
# #             categories = {}
# #             for cat in categories_env.split(","):
# #                 if ":" in cat:
# #                     cat_id, cat_name = cat.split(":", 1)
# #                     categories[cat_id.strip()] = cat_name.strip()
# #             return categories
        
# #         return {
# #             "1350380031": "Baby Products",
# #             "976419031":"Electronics",
# #             "976392031":"Computers & Accessories"

# #         }
    
# #     def validate(self):
# #         if not self.RAPIDAPI_KEY:
# #             raise ValueError("Missing RAPIDAPI_KEY in environment variables")


# # class CSVStorage:
# #     """Store products in CSV files when database is unavailable"""
    
# #     def __init__(self, output_dir: str):
# #         self.output_dir = output_dir
# #         os.makedirs(output_dir, exist_ok=True)
# #         logger.info(f"[CSV] Output directory: {output_dir}")
    
# #     def save_products(self, products: List[Dict], category_id: str, category_name: str, 
# #                      country: str):
# #         """Save products to CSV file"""
# #         if not products:
# #             return 0
        
# #         # Create filename with timestamp
# #         timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
# #         safe_category = category_name.replace(" ", "_").replace("/", "_")
# #         filename = f"{safe_category}_{country}_{timestamp}.csv"
# #         filepath = os.path.join(self.output_dir, filename)
        
# #         try:
# #             # CSV headers
# #             headers = [
# #                 'asin', 'product_title', 'product_url', 'product_photo',
# #                 'product_price', 'product_price_numeric', 'product_original_price',
# #                 'product_star_rating', 'product_num_ratings', 'is_prime',
# #                 'is_best_seller', 'is_amazon_choice', 'sales_volume',
# #                 'category_id', 'category_name', 'country'
# #             ]
            
# #             with open(filepath, 'w', newline='', encoding='utf-8') as f:
# #                 writer = csv.DictWriter(f, fieldnames=headers, extrasaction='ignore')
# #                 writer.writeheader()
# #                 writer.writerows(products)
            
# #             logger.info(f"[CSV] ✓ Saved {len(products)} products to {filename}")
# #             return len(products)
            
# #         except Exception as e:
# #             logger.error(f"[CSV ERROR] Failed to save: {e}")
# #             return 0
    
# #     def create_summary(self, all_results: List[Dict]):
# #         """Create a summary JSON file"""
# #         timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
# #         summary_file = os.path.join(self.output_dir, f"summary_{timestamp}.json")
        
# #         summary = {
# #             "timestamp": datetime.now().isoformat(),
# #             "total_categories": len(all_results),
# #             "total_products": sum(r.get("count", 0) for r in all_results),
# #             "categories": all_results
# #         }
        
# #         with open(summary_file, 'w', encoding='utf-8') as f:
# #             json.dump(summary, f, indent=2)
        
# #         logger.info(f"[CSV] ✓ Summary saved to {summary_file}")


# # class Database:
# #     """PostgreSQL database handler with fallback"""
    
# #     def __init__(self, url: str = None):
# #         self.url = url
# #         self.conn = None
# #         self.available = False
    
# #     def connect(self):
# #         """Try to connect to database"""
# #         if not self.url or not DB_AVAILABLE:
# #             logger.warning("[DB] Database not configured or psycopg2 not available")
# #             return False
        
# #         try:
# #             logger.info("[DB] Attempting to connect...")
# #             self.conn = psycopg2.connect(self.url + "?connect_timeout=10")
# #             self.available = True
# #             logger.info("[DB] ✓ Connection successful")
# #             return True
# #         except Exception as e:
# #             logger.error(f"[DB] Connection failed: {e}")
# #             logger.warning("[DB] Will use CSV fallback mode")
# #             return False
    
# #     def disconnect(self):
# #         if self.conn:
# #             self.conn.close()
# #             logger.info("[DB] Disconnected")
    
# #     def create_tables(self):
# #         if not self.available:
# #             return
        
# #         cursor = self.conn.cursor()
# #         cursor.execute("""
# #             CREATE TABLE IF NOT EXISTS rapidapi_amazon_products (
# #                 id SERIAL PRIMARY KEY,
# #                 asin VARCHAR(50) UNIQUE NOT NULL,
# #                 category_id VARCHAR(50),
# #                 category_name VARCHAR(200),
# #                 product_title TEXT,
# #                 product_url TEXT,
# #                 product_photo TEXT,
# #                 product_price VARCHAR(50),
# #                 product_price_numeric DECIMAL(10,2),
# #                 product_original_price VARCHAR(50),
# #                 product_original_price_numeric DECIMAL(10,2),
# #                 product_star_rating VARCHAR(10),
# #                 product_star_rating_numeric DECIMAL(3,2),
# #                 product_num_ratings INTEGER,
# #                 is_best_seller BOOLEAN DEFAULT FALSE,
# #                 is_amazon_choice BOOLEAN DEFAULT FALSE,
# #                 is_prime BOOLEAN DEFAULT FALSE,
# #                 sales_volume VARCHAR(200),
# #                 country VARCHAR(10),
# #                 raw_data JSONB,
# #                 created_at TIMESTAMP DEFAULT NOW(),
# #                 updated_at TIMESTAMP DEFAULT NOW()
# #             )
# #         """)
# #         cursor.execute("CREATE INDEX IF NOT EXISTS idx_rapidapi_asin ON rapidapi_amazon_products(asin)")
# #         cursor.execute("CREATE INDEX IF NOT EXISTS idx_rapidapi_category ON rapidapi_amazon_products(category_id)")
# #         self.conn.commit()
# #         logger.info("[DB] ✓ Tables created")
    
# #     def save_products(self, products: List[Dict], category_id: str, category_name: str, country: str):
# #         if not self.available or not products:
# #             return 0
        
# #         cursor = self.conn.cursor()
# #         try:
# #             execute_values(cursor, """
# #                 INSERT INTO rapidapi_amazon_products 
# #                 (asin, category_id, category_name, product_title, product_url, product_photo,
# #                  product_price, product_price_numeric, product_original_price, 
# #                  product_original_price_numeric, product_star_rating, product_star_rating_numeric,
# #                  product_num_ratings, is_best_seller, is_amazon_choice, is_prime,
# #                  sales_volume, country, raw_data)
# #                 VALUES %s 
# #                 ON CONFLICT (asin) DO UPDATE SET
# #                     product_price = EXCLUDED.product_price,
# #                     product_price_numeric = EXCLUDED.product_price_numeric,
# #                     updated_at = NOW()
# #             """, [
# #                 (
# #                     p.get("asin"), category_id, category_name, p.get("product_title"),
# #                     p.get("product_url"), p.get("product_photo"), p.get("product_price"),
# #                     p.get("product_price_numeric"), p.get("product_original_price"),
# #                     p.get("product_original_price_numeric"), p.get("product_star_rating"),
# #                     p.get("product_star_rating_numeric"), p.get("product_num_ratings"),
# #                     p.get("is_best_seller", False), p.get("is_amazon_choice", False),
# #                     p.get("is_prime", False), p.get("sales_volume"), country,
# #                     json.dumps(p.get("raw_data", {}))
# #                 )
# #                 for p in products
# #             ])
# #             self.conn.commit()
# #             return len(products)
# #         except Exception as e:
# #             logger.error(f"[DB ERROR] {e}")
# #             self.conn.rollback()
# #             return 0


# # class AmazonDataCollector:
# #     """Main collector with database and CSV fallback"""
    
# #     def __init__(self, config: Config):
# #         self.config = config
# #         self.api = RapidAPIClient(config.RAPIDAPI_KEY, config.RAPIDAPI_HOST)
# #         self.db = Database(config.DATABASE_URL)
# #         self.csv = CSVStorage(config.OUTPUT_DIR)
# #         self.use_csv = False
    
# #     def extract_products(self, response: Dict) -> List[Dict]:
# #         """Extract products from API response"""
# #         products = []
        
# #         if response.get("status") != "OK":
# #             return products
        
# #         product_list = response.get("data", {}).get("products", [])
        
# #         for item in product_list:
# #             if not item.get("asin"):
# #                 continue
            
# #             products.append({
# #                 "asin": item.get("asin"),
# #                 "product_title": item.get("product_title"),
# #                 "product_url": item.get("product_url"),
# #                 "product_photo": item.get("product_photo"),
# #                 "product_price": item.get("product_price"),
# #                 "product_price_numeric": self._parse_price(item.get("product_price")),
# #                 "product_original_price": item.get("product_original_price"),
# #                 "product_original_price_numeric": self._parse_price(item.get("product_original_price")),
# #                 "product_star_rating": item.get("product_star_rating"),
# #                 "product_star_rating_numeric": self._parse_rating(item.get("product_star_rating")),
# #                 "product_num_ratings": item.get("product_num_ratings", 0),
# #                 "is_best_seller": item.get("is_best_seller", False),
# #                 "is_amazon_choice": item.get("is_amazon_choice", False),
# #                 "is_prime": item.get("is_prime", False),
# #                 "sales_volume": item.get("sales_volume"),
# #                 "category_id": "",
# #                 "category_name": "",
# #                 "country": "",
# #                 "raw_data": item
# #             })
        
# #         return products
    
# #     def _parse_price(self, price_str) -> Optional[float]:
# #         if not price_str:
# #             return None
# #         try:
# #             price_clean = re.sub(r'[^\d.]', '', str(price_str))
# #             return float(price_clean) if price_clean else None
# #         except:
# #             return None
    
# #     def _parse_rating(self, rating_str) -> Optional[float]:
# #         if not rating_str:
# #             return None
# #         try:
# #             match = re.search(r'(\d+\.?\d*)', str(rating_str))
# #             return float(match.group(1)) if match else None
# #         except:
# #             return None
    
# #     def collect_category(self, category_id: str, category_name: str):
# #         """Collect data for one category"""
# #         logger.info("")
# #         logger.info("=" * 70)
# #         logger.info(f"[COLLECT] {category_name} (ID: {category_id})")
# #         logger.info("=" * 70)
        
# #         total_saved = 0
        
# #         for page in range(1, self.config.MAX_PAGES + 1):
# #             logger.info(f"[PAGE] Fetching page {page}/{self.config.MAX_PAGES}...")
            
# #             response = self.api.get_products_by_category(
# #                 category_id=category_id, page=page, country=self.config.COUNTRY,
# #                 sort_by=self.config.SORT_BY, product_condition=self.config.PRODUCT_CONDITION,
# #                 is_prime=self.config.IS_PRIME, deals_and_discounts=self.config.DEALS_AND_DISCOUNTS
# #             )
            
# #             if not response:
# #                 logger.error(f"[FAILED] Could not fetch page {page}")
# #                 break
            
# #             products = self.extract_products(response)
            
# #             if not products:
# #                 logger.info(f"[INFO] No products on page {page}")
# #                 break
            
# #             # Add category info
# #             for p in products:
# #                 p['category_id'] = category_id
# #                 p['category_name'] = category_name
# #                 p['country'] = self.config.COUNTRY
            
# #             # Save to database or CSV
# #             if self.use_csv:
# #                 saved = self.csv.save_products(products, category_id, category_name, self.config.COUNTRY)
# #             else:
# #                 saved = self.db.save_products(products, category_id, category_name, self.config.COUNTRY)
            
# #             total_saved += saved
# #             logger.info(f"[SAVED] ✓ {saved} products from page {page}")
            
# #             if page < self.config.MAX_PAGES:
# #                 time.sleep(2)
        
# #         logger.info(f"[SUCCESS] ✓ Total {total_saved} products saved")
# #         return {"success": True, "category_id": category_id, "category_name": category_name, "count": total_saved}
    
# #     def collect_all(self):
# #         """Collect all categories"""
# #         results = []
        
# #         logger.info("=" * 70)
# #         logger.info("[START] RapidAPI Amazon Data Collection")
# #         logger.info("=" * 70)
        
# #         # Try database first
# #         if self.db.connect():
# #             self.db.create_tables()
# #             self.use_csv = False
# #             logger.info("[MODE] Using DATABASE storage")
# #         else:
# #             self.use_csv = True
# #             logger.info("[MODE] Using CSV storage (database unavailable)")
        
# #         for i, (cat_id, cat_name) in enumerate(self.config.CATEGORIES.items(), 1):
# #             logger.info(f"\n[PROGRESS] Category {i}/{len(self.config.CATEGORIES)}")
# #             result = self.collect_category(cat_id, cat_name)
# #             results.append(result)
            
# #             if i < len(self.config.CATEGORIES):
# #                 time.sleep(3)
        
# #         if self.use_csv:
# #             self.csv.create_summary(results)
        
# #         return results


# # def main():
# #     try:
# #         config = Config()
# #         collector = AmazonDataCollector(config)
# #         results = collector.collect_all()
# #         collector.db.disconnect()
        
# #         total_products = sum(r.get("count", 0) for r in results)
        
# #         logger.info("")
# #         logger.info("=" * 70)
# #         logger.info("[COMPLETE] Data Collection Finished")
# #         logger.info(f"[STATS] Total products: {total_products}")
# #         if collector.use_csv:
# #             logger.info(f"[OUTPUT] Files saved to: {config.OUTPUT_DIR}/")
# #         logger.info("=" * 70)
        
# #     except KeyboardInterrupt:
# #         logger.info("\n[STOP] Stopped by user")
# #         sys.exit(0)
# #     except Exception as e:
# #         logger.error(f"[ERROR] {e}", exc_info=True)
# #         sys.exit(1)


# # if __name__ == "__main__":
# #     main()


# #!/usr/bin/env python3
# """
# Fixed RapidAPI Amazon Data Collector
# - Robust Postgres connection (psycopg2)
# - CSV fallback
# - Saves after each page
# """

# import os
# import sys
# import time
# import json
# import csv
# import logging
# import re
# from datetime import datetime
# from typing import Dict, List, Optional
# from dotenv import load_dotenv

# # Try importing psycopg2 and helpers
# try:
#     import psycopg2
#     from psycopg2.extras import execute_values, Json
#     DB_AVAILABLE = True
# except Exception:
#     DB_AVAILABLE = False

# # Import RapidAPI client (either from rest_client.py or use the class below)
# try:
#     from rest_client import RapidAPIClient
# except Exception:
#     # Fallback minimal RapidAPI client (copy of your supplied client)
#     import http.client
#     class RapidAPIClient:
#         def __init__(self, api_key: str, host: str):
#             self.api_key = api_key
#             self.host = host
#             self.headers = {
#                 'x-rapidapi-key': api_key,
#                 'x-rapidapi-host': host
#             }
#         def _make_request(self, endpoint: str, method: str = "GET") -> Optional[Dict]:
#             try:
#                 conn = http.client.HTTPSConnection(self.host, timeout=30)
#                 conn.request(method, endpoint, headers=self.headers)
#                 resp = conn.getresponse()
#                 data = resp.read()
#                 if resp.status == 200:
#                     return json.loads(data.decode("utf-8"))
#                 else:
#                     logging.error(f"RapidAPI HTTP {resp.status}: {resp.reason} - {data[:500]}")
#                     return None
#             except Exception as e:
#                 logging.error(f"RapidAPI request error: {e}")
#                 return None
#             finally:
#                 try:
#                     conn.close()
#                 except:
#                     pass
#         def get_products_by_category(self, category_id: str, page: int = 1, country: str = "IN",
#                                      sort_by: str = "RELEVANCE", product_condition: str = "ALL",
#                                      is_prime: str = "false", deals_and_discounts: str = "NONE"):
#             endpoint = (f"/products-by-category?category_id={category_id}&page={page}"
#                         f"&country={country}&sort_by={sort_by}&product_condition={product_condition}"
#                         f"&is_prime={is_prime}&deals_and_discounts={deals_and_discounts}")
#             return self._make_request(endpoint, method="GET")

# # Logging
# logging.basicConfig(level=logging.INFO,
#                     format="%(asctime)s - %(levelname)s - %(message)s",
#                     handlers=[
#                         logging.FileHandler("rapidapi_amazon.log", encoding="utf-8"),
#                         logging.StreamHandler(sys.stdout)
#                     ])
# logger = logging.getLogger(__name__)


# class Config:
#     def __init__(self):
#         load_dotenv()
#         self.DATABASE_URL = os.getenv("DATABASE_URL")
#         self.RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
#         self.RAPIDAPI_HOST = os.getenv("RAPIDAPI_HOST", "real-time-amazon-data.p.rapidapi.com")
#         self.COUNTRY = os.getenv("COUNTRY", "IN")
#         self.SORT_BY = os.getenv("SORT_BY", "RELEVANCE")
#         self.PRODUCT_CONDITION = os.getenv("PRODUCT_CONDITION", "ALL")
#         self.IS_PRIME = os.getenv("IS_PRIME", "false")
#         self.DEALS_AND_DISCOUNTS = os.getenv("DEALS_AND_DISCOUNTS", "NONE")
#         self.MAX_PAGES = int(os.getenv("MAX_PAGES", "5"))
#         self.OUTPUT_DIR = os.getenv("OUTPUT_DIR", "data_output")
#         self.DB_CONNECT_TIMEOUT = int(os.getenv("DB_CONNECT_TIMEOUT", "10"))
#         self.DB_MAX_RETRIES = int(os.getenv("DB_MAX_RETRIES", "3"))
#         self.CATEGORIES = self._load_categories()
#         if not self.RAPIDAPI_KEY:
#             raise ValueError("Missing RAPIDAPI_KEY in environment variables")
#         logger.info("[CONFIG] Configuration loaded")

#     def _load_categories(self):
#         categories_env = os.getenv("CATEGORIES")
#         if categories_env:
#             categories = {}
#             for cat in categories_env.split(","):
#                 if ":" in cat:
#                     cat_id, cat_name = cat.split(":", 1)
#                     categories[cat_id.strip()] = cat_name.strip()
#             return categories
#         return {
#             "1350380031": "Baby Products",
#             "976419031": "Electronics",
#             "976392031": "Computers & Accessories",
#             "1389401031":"Cell Phones",
#             "1350387031":"Toys & Games",
#             "1350384031": "Health & Personal Care"
#         }


# class Database:
#     def __init__(self, url: str, timeout: int = 10, max_retries: int = 3):
#         self.url = url
#         self.timeout = timeout
#         self.max_retries = max_retries
#         self.conn: Optional[psycopg2.extensions.connection] = None
#         self.available = False

#     def connect(self) -> bool:
#         if not self.url or not DB_AVAILABLE:
#             logger.warning("[DB] psycopg2 not available or DATABASE_URL missing")
#             return False

#         last_exc = None
#         for attempt in range(1, self.max_retries + 1):
#             try:
#                 logger.info(f"[DB] Attempt {attempt}/{self.max_retries} connecting to DB...")
#                 # Pass connect_timeout as a kwarg — safer than appending to URL
#                 self.conn = psycopg2.connect(self.url, connect_timeout=self.timeout)
#                 # Optional: set autocommit False (we commit manually)
#                 self.conn.autocommit = False
#                 self.available = True
#                 logger.info("[DB] Connected to Postgres")
#                 return True
#             except Exception as e:
#                 last_exc = e
#                 logger.error(f"[DB] Connect error: {e}")
#                 if attempt < self.max_retries:
#                     backoff = attempt * 2
#                     logger.info(f"[DB] Retrying in {backoff}s...")
#                     time.sleep(backoff)
#         logger.error(f"[DB] Could not connect after {self.max_retries} attempts. Last error: {last_exc}")
#         return False

#     def disconnect(self):
#         if self.conn:
#             try:
#                 self.conn.close()
#             except Exception as e:
#                 logger.debug(f"[DB] Error closing connection: {e}")
#             finally:
#                 self.conn = None
#                 self.available = False
#                 logger.info("[DB] Disconnected")

#     def create_tables(self) -> bool:
#         if not self.available:
#             return False
#         create_sql = """
#         CREATE TABLE IF NOT EXISTS rapidapi_amazon_products (
#             id SERIAL PRIMARY KEY,
#             asin VARCHAR(50) NOT NULL,
#             category_id VARCHAR(50),
#             category_name VARCHAR(200),
#             product_title TEXT,
#             product_url TEXT,
#             product_photo TEXT,
#             product_price TEXT,
#             product_price_numeric DECIMAL(10,2),
#             product_original_price TEXT,
#             product_original_price_numeric DECIMAL(10,2),
#             product_star_rating TEXT,
#             product_star_rating_numeric DECIMAL(3,2),
#             product_num_ratings INTEGER,
#             is_best_seller BOOLEAN DEFAULT FALSE,
#             is_amazon_choice BOOLEAN DEFAULT FALSE,
#             is_prime BOOLEAN DEFAULT FALSE,
#             sales_volume TEXT,
#             country VARCHAR(10),
#             raw_data JSONB,
#             created_at TIMESTAMPTZ DEFAULT now(),
#             updated_at TIMESTAMPTZ DEFAULT now(),
#             UNIQUE (asin, category_id, country)
#         );
#         CREATE INDEX IF NOT EXISTS idx_rapidapi_asin ON rapidapi_amazon_products(asin);
#         CREATE INDEX IF NOT EXISTS idx_rapidapi_category ON rapidapi_amazon_products(category_id);
#         CREATE INDEX IF NOT EXISTS idx_rapidapi_country ON rapidapi_amazon_products(country);
#         """
#         try:
#             with self.conn.cursor() as cur:
#                 cur.execute(create_sql)
#             self.conn.commit()
#             logger.info("[DB] Tables ensured/created")
#             return True
#         except Exception as e:
#             logger.error(f"[DB] create_tables error: {e}", exc_info=True)
#             if self.conn:
#                 self.conn.rollback()
#             return False

#     def save_products(self, products: List[Dict]) -> int:
#         if not self.available or not products:
#             return 0

#         # Clean & build tuples
#         tuples = []
#         for p in products:
#             try:
#                 tuples.append((
#                     p.get("asin"),
#                     p.get("category_id"),
#                     p.get("category_name"),
#                     p.get("product_title"),
#                     p.get("product_url"),
#                     p.get("product_photo"),
#                     p.get("product_price"),
#                     p.get("product_price_numeric"),
#                     p.get("product_original_price"),
#                     p.get("product_original_price_numeric"),
#                     p.get("product_star_rating"),
#                     p.get("product_star_rating_numeric"),
#                     int(p.get("product_num_ratings")) if p.get("product_num_ratings") not in (None, "") else None,
#                     bool(p.get("is_best_seller", False)),
#                     bool(p.get("is_amazon_choice", False)),
#                     bool(p.get("is_prime", False)),
#                     p.get("sales_volume"),
#                     p.get("country"),
#                     Json(p.get("raw_data", {}))
#                 ))
#             except Exception as e:
#                 logger.debug(f"[DB] Skipping product due to parse error: {e} - {p.get('asin')}")
#                 continue

#         if not tuples:
#             return 0

#         insert_sql = """
#         INSERT INTO rapidapi_amazon_products (
#             asin, category_id, category_name, product_title, product_url,
#             product_photo, product_price, product_price_numeric,
#             product_original_price, product_original_price_numeric,
#             product_star_rating, product_star_rating_numeric,
#             product_num_ratings, is_best_seller, is_amazon_choice,
#             is_prime, sales_volume, country, raw_data
#         )
#         VALUES %s
#         ON CONFLICT (asin, category_id, country) DO UPDATE
#         SET
#             product_price = EXCLUDED.product_price,
#             product_price_numeric = EXCLUDED.product_price_numeric,
#             product_original_price = EXCLUDED.product_original_price,
#             product_original_price_numeric = EXCLUDED.product_original_price_numeric,
#             product_star_rating = EXCLUDED.product_star_rating,
#             product_star_rating_numeric = EXCLUDED.product_star_rating_numeric,
#             product_num_ratings = EXCLUDED.product_num_ratings,
#             is_best_seller = EXCLUDED.is_best_seller,
#             is_amazon_choice = EXCLUDED.is_amazon_choice,
#             is_prime = EXCLUDED.is_prime,
#             sales_volume = EXCLUDED.sales_volume,
#             updated_at = now(),
#             raw_data = EXCLUDED.raw_data
#         ;
#         """
#         try:
#             with self.conn.cursor() as cur:
#                 execute_values(cur, insert_sql, tuples, page_size=100)
#             self.conn.commit()
#             logger.info(f"[DB] Saved {len(tuples)} products")
#             return len(tuples)
#         except Exception as e:
#             logger.error(f"[DB] save_products error: {e}", exc_info=True)
#             if self.conn:
#                 self.conn.rollback()
#             return 0

#     def get_stats(self):
#         if not self.available:
#             return None
#         try:
#             with self.conn.cursor() as cur:
#                 cur.execute("""
#                     SELECT COUNT(*) as total_products, COUNT(DISTINCT category_id) as total_categories,
#                            COUNT(DISTINCT asin) as unique_asins
#                     FROM rapidapi_amazon_products
#                     WHERE country = %s
#                 """, ('IN',))
#                 r = cur.fetchone()
#             return {"total_products": r[0], "total_categories": r[1], "unique_asins": r[2]}
#         except Exception as e:
#             logger.error(f"[DB] stats error: {e}")
#             return None


# class CSVStorage:
#     def __init__(self, output_dir: str):
#         self.output_dir = output_dir
#         os.makedirs(output_dir, exist_ok=True)
#         self.master_file = os.path.join(output_dir, f"all_products_IN_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv")
#         self.initialized = False
#         logger.info(f"[CSV] Output directory: {output_dir}")

#     def save_products(self, products: List[Dict]) -> int:
#         if not products:
#             return 0
#         headers = [
#             'asin', 'product_title', 'product_url', 'product_photo',
#             'product_price', 'product_price_numeric', 'product_original_price',
#             'product_star_rating', 'product_num_ratings', 'is_prime',
#             'is_best_seller', 'is_amazon_choice', 'sales_volume',
#             'category_id', 'category_name', 'country'
#         ]
#         mode = 'w' if not self.initialized else 'a'
#         write_header = not self.initialized
#         try:
#             with open(self.master_file, mode, newline='', encoding='utf-8') as f:
#                 writer = csv.DictWriter(f, fieldnames=headers, extrasaction='ignore')
#                 if write_header:
#                     writer.writeheader()
#                 writer.writerows(products)
#             self.initialized = True
#             logger.info(f"[CSV] Saved {len(products)} products to {self.master_file}")
#             return len(products)
#         except Exception as e:
#             logger.error(f"[CSV] save error: {e}")
#             return 0

#     def create_summary(self, all_results: List[Dict]):
#         ts = datetime.now().strftime("%Y%m%d_%H%M%S")
#         summary = {
#             "timestamp": datetime.now().isoformat(),
#             "country": "IN",
#             "total_categories": len(all_results),
#             "total_products": sum(r.get("count", 0) for r in all_results),
#             "categories": all_results,
#             "csv_file": os.path.basename(self.master_file)
#         }
#         summary_file = os.path.join(self.output_dir, f"summary_{ts}.json")
#         with open(summary_file, 'w', encoding='utf-8') as f:
#             json.dump(summary, f, indent=2)
#         logger.info(f"[CSV] Summary saved to {summary_file}")


# class AmazonDataCollector:
#     def __init__(self, config: Config):
#         self.config = config
#         self.api = RapidAPIClient(config.RAPIDAPI_KEY, config.RAPIDAPI_HOST)
#         self.db = Database(config.DATABASE_URL, config.DB_CONNECT_TIMEOUT, config.DB_MAX_RETRIES)
#         self.csv = CSVStorage(config.OUTPUT_DIR)
#         self.use_csv = False

#     def _parse_price(self, price_str) -> Optional[float]:
#         if not price_str:
#             return None
#         try:
#             price_clean = re.sub(r'[^\d.]', '', str(price_str))
#             return float(price_clean) if price_clean else None
#         except:
#             return None

#     def _parse_rating(self, rating_str) -> Optional[float]:
#         if not rating_str:
#             return None
#         try:
#             match = re.search(r'(\d+(\.\d+)?)', str(rating_str))
#             return float(match.group(1)) if match else None
#         except:
#             return None

#     def extract_products(self, response: Dict, category_id: str, category_name: str) -> List[Dict]:
#         products = []
#         if not response or response.get("status") != "OK":
#             return products
#         product_list = response.get("data", {}).get("products", [])
#         for item in product_list:
#             if not item.get("asin"):
#                 continue
#             products.append({
#                 "asin": item.get("asin"),
#                 "category_id": category_id,
#                 "category_name": category_name,
#                 "product_title": item.get("product_title"),
#                 "product_url": item.get("product_url"),
#                 "product_photo": item.get("product_photo"),
#                 "product_price": item.get("product_price"),
#                 "product_price_numeric": self._parse_price(item.get("product_price")),
#                 "product_original_price": item.get("product_original_price"),
#                 "product_original_price_numeric": self._parse_price(item.get("product_original_price")),
#                 "product_star_rating": item.get("product_star_rating"),
#                 "product_star_rating_numeric": self._parse_rating(item.get("product_star_rating")),
#                 "product_num_ratings": item.get("product_num_ratings", 0),
#                 "is_best_seller": item.get("is_best_seller", False),
#                 "is_amazon_choice": item.get("is_amazon_choice", False),
#                 "is_prime": item.get("is_prime", False),
#                 "sales_volume": item.get("sales_volume"),
#                 "country": self.config.COUNTRY,
#                 "raw_data": item
#             })
#         return products

#     def collect_category(self, category_id: str, category_name: str):
#         logger.info("\n" + "=" * 70)
#         logger.info(f"[COLLECT] {category_name} (ID: {category_id})")
#         total_saved = 0
#         for page in range(1, self.config.MAX_PAGES + 1):
#             logger.info(f"[PAGE] Fetching page {page}/{self.config.MAX_PAGES}...")
#             response = self.api.get_products_by_category(
#                 category_id=category_id, page=page, country=self.config.COUNTRY,
#                 sort_by=self.config.SORT_BY, product_condition=self.config.PRODUCT_CONDITION,
#                 is_prime=self.config.IS_PRIME, deals_and_discounts=self.config.DEALS_AND_DISCOUNTS
#             )
#             if not response:
#                 logger.error(f"[PAGE] Failed to fetch page {page}. Stopping this category.")
#                 break
#             products = self.extract_products(response, category_id, category_name)
#             if not products:
#                 logger.info(f"[PAGE] No products on page {page}.")
#                 break
#             if self.use_csv:
#                 saved = self.csv.save_products(products)
#             else:
#                 saved = self.db.save_products(products)
#             total_saved += saved
#             if saved > 0:
#                 logger.info(f"[SAVED] {saved} products from page {page}")
#             else:
#                 logger.error(f"[SAVED] Failed to save page {page}")
#             if page < self.config.MAX_PAGES:
#                 time.sleep(2)
#         logger.info(f"[RESULT] Saved {total_saved} products for category {category_name}")
#         return {"success": total_saved > 0, "category_id": category_id, "category_name": category_name, "count": total_saved}

#     def collect_all(self):
#         results = []
#         logger.info("[START] Collector starting")
#         # Try DB first
#         if self.db.connect():
#             if self.db.create_tables():
#                 self.use_csv = False
#                 logger.info("[MODE] Using DATABASE storage")
#             else:
#                 logger.warning("[MODE] Table creation failed — falling back to CSV")
#                 self.use_csv = True
#         else:
#             logger.warning("[MODE] DB unavailable — using CSV storage")
#             self.use_csv = True

#         for i, (cat_id, cat_name) in enumerate(self.config.CATEGORIES.items(), 1):
#             logger.info(f"[PROGRESS] Category {i}/{len(self.config.CATEGORIES)}")
#             res = self.collect_category(cat_id, cat_name)
#             results.append(res)
#             if i < len(self.config.CATEGORIES):
#                 time.sleep(3)

#         if self.use_csv:
#             self.csv.create_summary(results)
#         return results


# def main():
#     try:
#         cfg = Config()
#         collector = AmazonDataCollector(cfg)
#         results = collector.collect_all()

#         if not collector.use_csv:
#             stats = collector.db.get_stats()
#             if stats:
#                 logger.info(f"[DB STATS] Total products: {stats['total_products']}, Unique ASINs: {stats['unique_asins']}, Categories: {stats['total_categories']}")

#         total = sum(r.get("count", 0) for r in results)
#         success_count = sum(1 for r in results if r.get("success"))
#         logger.info(f"[COMPLETE] Collected {total} products; {success_count}/{len(results)} categories succeeded.")

#         if collector.use_csv:
#             logger.info(f"[OUTPUT] CSV: {collector.csv.master_file}")
#         else:
#             logger.info("[OUTPUT] Data saved to DB (rapidapi_amazon_products)")

#     except KeyboardInterrupt:
#         logger.info("Stopped by user")
#     except Exception as e:
#         logger.error(f"Fatal error: {e}", exc_info=True)
#     finally:
#         try:
#             collector.db.disconnect()
#         except:
#             pass


# if __name__ == "__main__":
#     main()



#!/usr/bin/env python3
"""
Enhanced RapidAPI Amazon Data Collector
Now with automated price and sales analytics
Tracks: avg_price, min_price, max_price, avg_sales_volume
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
                    logging.error(f"RapidAPI HTTP {resp.status}: {resp.reason} - {data[:500]}")
                    return None
            except Exception as e:
                logging.error(f"RapidAPI request error: {e}")
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
            raise ValueError("Missing RAPIDAPI_KEY in environment variables")
        logger.info("[CONFIG] Configuration loaded")

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
            "1350384031": "Health & Personal Care",
            "976442031": "Home & Kitchen"
        }


class Database:
    def __init__(self, url: str, timeout: int = 10, max_retries: int = 3):
        self.url = url
        self.timeout = timeout
        self.max_retries = max_retries
        self.conn: Optional[psycopg2.extensions.connection] = None
        self.available = False

    def connect(self) -> bool:
        if not self.url or not DB_AVAILABLE:
            logger.warning("[DB] psycopg2 not available or DATABASE_URL missing")
            return False

        last_exc = None
        for attempt in range(1, self.max_retries + 1):
            try:
                logger.info(f"[DB] Attempt {attempt}/{self.max_retries} connecting to DB...")
                self.conn = psycopg2.connect(self.url, connect_timeout=self.timeout)
                self.conn.autocommit = False
                self.available = True
                logger.info("[DB] ✓ Connected to Postgres")
                return True
            except Exception as e:
                last_exc = e
                logger.error(f"[DB] Connect error: {e}")
                if attempt < self.max_retries:
                    backoff = attempt * 2
                    logger.info(f"[DB] Retrying in {backoff}s...")
                    time.sleep(backoff)
        logger.error(f"[DB] Could not connect after {self.max_retries} attempts. Last error: {last_exc}")
        return False

    def disconnect(self):
        if self.conn:
            try:
                self.conn.close()
            except Exception as e:
                logger.debug(f"[DB] Error closing connection: {e}")
            finally:
                self.conn = None
                self.available = False
                logger.info("[DB] Disconnected")

    def create_tables(self) -> bool:
        """Create/update tables with new analytics columns"""
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
            
            -- NEW ANALYTICS COLUMNS
            avg_price DECIMAL(10,2),
            min_price DECIMAL(10,2),
            max_price DECIMAL(10,2),
            avg_sales_volume DECIMAL(15,2),
            
            created_at TIMESTAMPTZ DEFAULT now(),
            updated_at TIMESTAMPTZ DEFAULT now(),
            UNIQUE (asin, category_id, country)
        );
        
        CREATE INDEX IF NOT EXISTS idx_rapidapi_asin ON rapidapi_amazon_products(asin);
        CREATE INDEX IF NOT EXISTS idx_rapidapi_category ON rapidapi_amazon_products(category_id);
        CREATE INDEX IF NOT EXISTS idx_rapidapi_country ON rapidapi_amazon_products(country);
        CREATE INDEX IF NOT EXISTS idx_rapidapi_price ON rapidapi_amazon_products(product_price_numeric);
        """
        
        # Add columns if they don't exist (for existing tables)
        alter_sql = """
        DO $$ 
        BEGIN
            -- Add avg_price if not exists
            IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                          WHERE table_name='rapidapi_amazon_products' AND column_name='avg_price') THEN
                ALTER TABLE rapidapi_amazon_products ADD COLUMN avg_price DECIMAL(10,2);
            END IF;
            
            -- Add min_price if not exists
            IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                          WHERE table_name='rapidapi_amazon_products' AND column_name='min_price') THEN
                ALTER TABLE rapidapi_amazon_products ADD COLUMN min_price DECIMAL(10,2);
            END IF;
            
            -- Add max_price if not exists
            IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                          WHERE table_name='rapidapi_amazon_products' AND column_name='max_price') THEN
                ALTER TABLE rapidapi_amazon_products ADD COLUMN max_price DECIMAL(10,2);
            END IF;
            
            -- Add avg_sales_volume if not exists
            IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                          WHERE table_name='rapidapi_amazon_products' AND column_name='avg_sales_volume') THEN
                ALTER TABLE rapidapi_amazon_products ADD COLUMN avg_sales_volume DECIMAL(15,2);
            END IF;
        END $$;
        """
        
        try:
            with self.conn.cursor() as cur:
                cur.execute(create_sql)
                cur.execute(alter_sql)
            self.conn.commit()
            logger.info("[DB] ✓ Tables created/updated with analytics columns")
            return True
        except Exception as e:
            logger.error(f"[DB] create_tables error: {e}", exc_info=True)
            if self.conn:
                self.conn.rollback()
            return False

    def get_product_stats(self, asin: str, country: str) -> Tuple[Optional[float], Optional[float], Optional[float], Optional[float]]:
        """Calculate avg/min/max price and avg sales for an ASIN"""
        if not self.available:
            return None, None, None, None
        
        try:
            with self.conn.cursor() as cur:
                # Get price statistics
                cur.execute("""
                    SELECT 
                        AVG(product_price_numeric) as avg_price,
                        MIN(product_price_numeric) as min_price,
                        MAX(product_price_numeric) as max_price
                    FROM rapidapi_amazon_products
                    WHERE asin = %s 
                      AND country = %s 
                      AND product_price_numeric IS NOT NULL
                """, (asin, country))
                
                price_result = cur.fetchone()
                avg_price = float(price_result[0]) if price_result[0] else None
                min_price = float(price_result[1]) if price_result[1] else None
                max_price = float(price_result[2]) if price_result[2] else None
                
                # Get sales volume statistics (extract numeric from text)
                cur.execute("""
                    SELECT sales_volume
                    FROM rapidapi_amazon_products
                    WHERE asin = %s 
                      AND country = %s 
                      AND sales_volume IS NOT NULL
                      AND sales_volume != ''
                """, (asin, country))
                
                sales_rows = cur.fetchall()
                sales_numbers = []
                for row in sales_rows:
                    if row[0]:
                        # Extract numeric value from sales_volume text (e.g., "10K+ bought" -> 10000)
                        sales_num = self._parse_sales_volume(row[0])
                        if sales_num:
                            sales_numbers.append(sales_num)
                
                avg_sales = sum(sales_numbers) / len(sales_numbers) if sales_numbers else None
                
                return avg_price, min_price, max_price, avg_sales
                
        except Exception as e:
            logger.error(f"[DB] get_product_stats error: {e}")
            return None, None, None, None

    def _parse_sales_volume(self, sales_text: str) -> Optional[float]:
        """Parse sales volume text into numeric value"""
        if not sales_text:
            return None
        
        try:
            # Extract numbers and multipliers (e.g., "10K+" -> 10000, "5M+" -> 5000000)
            text = str(sales_text).upper()
            
            # Find number
            match = re.search(r'(\d+\.?\d*)', text)
            if not match:
                return None
            
            number = float(match.group(1))
            
            # Apply multiplier
            if 'M' in text:
                number *= 1000000
            elif 'K' in text:
                number *= 1000
            
            return number
        except:
            return None

    def save_products(self, products: List[Dict]) -> int:
        """Save products with calculated analytics"""
        if not self.available or not products:
            return 0

        tuples = []
        for p in products:
            try:
                # Get historical statistics for this ASIN
                avg_price, min_price, max_price, avg_sales = self.get_product_stats(
                    p.get("asin"), 
                    p.get("country")
                )
                
                # Include current price in calculations
                current_price = p.get("product_price_numeric")
                if current_price:
                    if avg_price is None:
                        avg_price = min_price = max_price = current_price
                    else:
                        # Update stats with current price
                        avg_price = (avg_price + current_price) / 2
                        min_price = min(min_price, current_price) if min_price else current_price
                        max_price = max(max_price, current_price) if max_price else current_price
                
                # Parse current sales volume
                current_sales = self._parse_sales_volume(p.get("sales_volume"))
                if current_sales:
                    if avg_sales is None:
                        avg_sales = current_sales
                    else:
                        avg_sales = (avg_sales + current_sales) / 2
                
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
                    # NEW: Analytics columns
                    avg_price,
                    min_price,
                    max_price,
                    avg_sales
                ))
            except Exception as e:
                logger.debug(f"[DB] Skipping product due to parse error: {e} - {p.get('asin')}")
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
            avg_price, min_price, max_price, avg_sales_volume
        )
        VALUES %s
        ON CONFLICT (asin, category_id, country) DO UPDATE
        SET
            product_price = EXCLUDED.product_price,
            product_price_numeric = EXCLUDED.product_price_numeric,
            product_original_price = EXCLUDED.product_original_price,
            product_original_price_numeric = EXCLUDED.product_original_price_numeric,
            product_star_rating = EXCLUDED.product_star_rating,
            product_star_rating_numeric = EXCLUDED.product_star_rating_numeric,
            product_num_ratings = EXCLUDED.product_num_ratings,
            is_best_seller = EXCLUDED.is_best_seller,
            is_amazon_choice = EXCLUDED.is_amazon_choice,
            is_prime = EXCLUDED.is_prime,
            sales_volume = EXCLUDED.sales_volume,
            avg_price = EXCLUDED.avg_price,
            min_price = EXCLUDED.min_price,
            max_price = EXCLUDED.max_price,
            avg_sales_volume = EXCLUDED.avg_sales_volume,
            updated_at = now(),
            raw_data = EXCLUDED.raw_data
        ;
        """
        try:
            with self.conn.cursor() as cur:
                execute_values(cur, insert_sql, tuples, page_size=100)
            self.conn.commit()
            logger.info(f"[DB] ✓ Saved {len(tuples)} products with analytics")
            return len(tuples)
        except Exception as e:
            logger.error(f"[DB] save_products error: {e}", exc_info=True)
            if self.conn:
                self.conn.rollback()
            return 0

    def get_stats(self):
        if not self.available:
            return None
        try:
            with self.conn.cursor() as cur:
                cur.execute("""
                    SELECT COUNT(*) as total_products, 
                           COUNT(DISTINCT category_id) as total_categories,
                           COUNT(DISTINCT asin) as unique_asins,
                           AVG(avg_price) as overall_avg_price,
                           COUNT(*) FILTER (WHERE avg_price IS NOT NULL) as products_with_analytics
                    FROM rapidapi_amazon_products
                    WHERE country = %s
                """, ('IN',))
                r = cur.fetchone()
            return {
                "total_products": r[0], 
                "total_categories": r[1], 
                "unique_asins": r[2],
                "overall_avg_price": float(r[3]) if r[3] else None,
                "products_with_analytics": r[4]
            }
        except Exception as e:
            logger.error(f"[DB] stats error: {e}")
            return None


class CSVStorage:
    def __init__(self, output_dir: str):
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
        self.master_file = os.path.join(output_dir, f"all_products_IN_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv")
        self.initialized = False
        logger.info(f"[CSV] Output directory: {output_dir}")

    def save_products(self, products: List[Dict]) -> int:
        if not products:
            return 0
        headers = [
            'asin', 'product_title', 'product_url', 'product_photo',
            'product_price', 'product_price_numeric', 'product_original_price',
            'product_star_rating', 'product_num_ratings', 'is_prime',
            'is_best_seller', 'is_amazon_choice', 'sales_volume',
            'category_id', 'category_name', 'country',
            'avg_price', 'min_price', 'max_price', 'avg_sales_volume'
        ]
        mode = 'w' if not self.initialized else 'a'
        write_header = not self.initialized
        try:
            with open(self.master_file, mode, newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=headers, extrasaction='ignore')
                if write_header:
                    writer.writeheader()
                writer.writerows(products)
            self.initialized = True
            logger.info(f"[CSV] Saved {len(products)} products")
            return len(products)
        except Exception as e:
            logger.error(f"[CSV] save error: {e}")
            return 0

    def create_summary(self, all_results: List[Dict]):
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        summary = {
            "timestamp": datetime.now().isoformat(),
            "country": "IN",
            "total_categories": len(all_results),
            "total_products": sum(r.get("count", 0) for r in all_results),
            "categories": all_results,
            "csv_file": os.path.basename(self.master_file)
        }
        summary_file = os.path.join(self.output_dir, f"summary_{ts}.json")
        with open(summary_file, 'w', encoding='utf-8') as f:
            json.dump(summary, f, indent=2)
        logger.info(f"[CSV] Summary saved")


class AmazonDataCollector:
    def __init__(self, config: Config):
        self.config = config
        self.api = RapidAPIClient(config.RAPIDAPI_KEY, config.RAPIDAPI_HOST)
        self.db = Database(config.DATABASE_URL, config.DB_CONNECT_TIMEOUT, config.DB_MAX_RETRIES)
        self.csv = CSVStorage(config.OUTPUT_DIR)
        self.use_csv = False

    def _parse_price(self, price_str) -> Optional[float]:
        if not price_str:
            return None
        try:
            price_clean = re.sub(r'[^\d.]', '', str(price_str))
            return float(price_clean) if price_clean else None
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
        product_list = response.get("data", {}).get("products", [])
        for item in product_list:
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
        logger.info("\n" + "=" * 70)
        logger.info(f"[COLLECT] {category_name} (ID: {category_id})")
        total_saved = 0
        for page in range(1, self.config.MAX_PAGES + 1):
            logger.info(f"[PAGE] Fetching page {page}/{self.config.MAX_PAGES}...")
            response = self.api.get_products_by_category(
                category_id=category_id, page=page, country=self.config.COUNTRY,
                sort_by=self.config.SORT_BY, product_condition=self.config.PRODUCT_CONDITION,
                is_prime=self.config.IS_PRIME, deals_and_discounts=self.config.DEALS_AND_DISCOUNTS
            )
            if not response:
                logger.error(f"[PAGE] Failed to fetch page {page}")
                break
            products = self.extract_products(response, category_id, category_name)
            if not products:
                logger.info(f"[PAGE] No products on page {page}")
                break
            if self.use_csv:
                saved = self.csv.save_products(products)
            else:
                saved = self.db.save_products(products)
            total_saved += saved
            if saved > 0:
                logger.info(f"[SAVED] {saved} products from page {page}")
            else:
                logger.error(f"[SAVED] Failed to save page {page}")
            if page < self.config.MAX_PAGES:
                time.sleep(2)
        logger.info(f"[RESULT] Saved {total_saved} products for {category_name}")
        return {"success": total_saved > 0, "category_id": category_id, "category_name": category_name, "count": total_saved}

    def collect_all(self):
        results = []
        logger.info("[START] Collector starting")
        if self.db.connect():
            if self.db.create_tables():
                self.use_csv = False
                logger.info("[MODE] Using DATABASE with analytics")
            else:
                logger.warning("[MODE] Table creation failed – CSV fallback")
                self.use_csv = True
        else:
            logger.warning("[MODE] DB unavailable – CSV storage")
            self.use_csv = True

        for i, (cat_id, cat_name) in enumerate(self.config.CATEGORIES.items(), 1):
            logger.info(f"[PROGRESS] Category {i}/{len(self.config.CATEGORIES)}")
            res = self.collect_category(cat_id, cat_name)
            results.append(res)
            if i < len(self.config.CATEGORIES):
                time.sleep(3)

        if self.use_csv:
            self.csv.create_summary(results)
        return results


def main():
    try:
        cfg = Config()
        collector = AmazonDataCollector(cfg)
        results = collector.collect_all()

        if not collector.use_csv:
            stats = collector.db.get_stats()
            if stats:
                logger.info(f"[DB STATS] Products: {stats['total_products']}, "
                          f"Unique ASINs: {stats['unique_asins']}, "
                          f"Categories: {stats['total_categories']}")
                if stats.get('overall_avg_price'):
                    logger.info(f"[ANALYTICS] Overall Avg Price: ₹{stats['overall_avg_price']:.2f}")
                    logger.info(f"[ANALYTICS] Products with analytics: {stats['products_with_analytics']}")

        total = sum(r.get("count", 0) for r in results)
        success_count = sum(1 for r in results if r.get("success"))
        logger.info(f"[COMPLETE] Collected {total} products; {success_count}/{len(results)} categories succeeded")

        if collector.use_csv:
            logger.info(f"[OUTPUT] CSV: {collector.csv.master_file}")
        else:
            logger.info("[OUTPUT] Data saved to DB with analytics columns")

    except KeyboardInterrupt:
        logger.info("Stopped by user")
    except Exception as e:
        logger.error(f"Fatal error: {e}", exc_info=True)
    finally:
        try:
            collector.db.disconnect()
        except:
            pass


if __name__ == "__main__":
    main()