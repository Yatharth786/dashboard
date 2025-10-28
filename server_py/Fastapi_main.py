# from fastapi import FastAPI, Depends, Query
# from fastapi.middleware.cors import CORSMiddleware
# from sqlalchemy.orm import Session
# from typing import List, Optional
# from sqlalchemy import text, func
# import subprocess, json
# from pydantic import BaseModel
# import uvicorn
# from sklearn.preprocessing import MinMaxScaler
# import requests
# from datetime import datetime
# from contextlib import asynccontextmanager

# # Correct imports
# from server_py import crud, schemas, models
# from server_py.database_config import get_db, engine, Base
# from server_py.rapidapi_amazon import amazon_api  # ✅ Correct import
# from server_py.amazon_data_sync import amazon_sync as data_sync_service
# from server_py.schedule import start_scheduler

# start_scheduler()


# # Create tables
# Base.metadata.create_all(bind=engine)
# # Global cache
# CACHE = {
#     "last_updated": None,
#     "data": {}
# }


# # --------------------------
# # DB initialization
# # --------------------------
# models.Base.metadata.create_all(bind=engine)

# app = FastAPI(title="Product API", version="1.1.0")

# # --------------------------
# # Middleware
# # --------------------------
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"], 
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
# # --------------------------
# # Health & Root
# # --------------------------
# """class AIQuery(BaseModel):
#     question: str"""
# class AIQuery(BaseModel):
#     question: str
#     source: str  # "products" or "amazon_reviews"
#     limit: Optional[int] = 50
    
# def decimal_to_float(obj):
#     if isinstance(obj, (int, float)):
#         return obj
#     try:
#         return float(obj)
#     except Exception:
#         return str(obj)

# @app.get("/")
# def read_root():
#     return {"message": "Product API running"}

# @app.get("/health")
# def health_check():
#     return {"status": "healthy"}


# # --------------------------
# # Amazon Reviews Endpoints
# # --------------------------
# @app.get("/Amazon_Reviews/reviews", response_model=List[schemas.AmazonReview])
# def get_reviews(limit: int = 50, offset: int = 0, db: Session = Depends(get_db)):
#     return crud.get_reviews(db, limit=limit, offset=offset)

# @app.get("/Amazon_Reviews/reviews/{review_id}", response_model=schemas.AmazonReview)
# def get_review(review_id: str, db: Session = Depends(get_db)):
#     return crud.get_review_by_id(db, review_id)

# @app.get("/Amazon_Reviews/product/{product_id}", response_model=List[schemas.AmazonReview])
# def get_product_reviews(product_id: str, limit: int = 20, db: Session = Depends(get_db)):
#     return crud.get_product_reviews(db, product_id, limit)

# @app.get("/Amazon_Reviews/search/{query}", response_model=List[schemas.AmazonReview])
# def search_reviews(query: str, limit: int = 50, db: Session = Depends(get_db)):
#     return crud.search_reviews(db, query, limit)


# # --------------------------
# # Statistics Endpoints
# # --------------------------
# @app.get("/Amazon_Reviews/statistics")
# def get_statistics(db: Session = Depends(get_db)):
#     return crud.get_review_statistics(db)

# @app.get("/Amazon_Reviews/sentiment", response_model=List[schemas.SentimentOut])
# def get_sentiment(db: Session = Depends(get_db)):
#     results = crud.get_sentiment_distribution(db)
#     return [schemas.SentimentOut(sentiment=sentiment, count=count) for sentiment, count in results]

# @app.get("/Amazon_Reviews/ratings", response_model=List[schemas.RatingOut])
# def get_ratings(db: Session = Depends(get_db)):
#     results = crud.get_ratings_distribution(db)
#     return [schemas.RatingOut(rating=rating, count=count) for rating, count in results]

# @app.get("/Amazon_Reviews/categories", response_model=List[schemas.CategoryOut])
# def get_category_stats(db: Session = Depends(get_db)):
#     return crud.get_category_statistics(db)

# # ----------- Analytics -------------

# # --------------------------
# # Analytics Endpoints
# # --------------------------
# @app.get("/Amazon_Reviews/trending", response_model=List[schemas.TrendingProductOut])
# def get_trending(limit: int = 10, db: Session = Depends(get_db)):
#     return crud.get_trending_products(db, limit)

# @app.get("/Amazon_Reviews/trends/monthly", response_model=List[schemas.MonthlyTrendOut])
# def monthly_trends(year: int, db: Session = Depends(get_db)):
#     return crud.get_monthly_trends(db, year)

# @app.get("/Amazon_Reviews/helpful")
# def get_helpful(limit: int = 10, db: Session = Depends(get_db)):
#     return crud.get_helpful_reviews(db, limit)

# @app.get("/Amazon_Reviews/sentiment/{product_id}", response_model=List[schemas.SentimentOut])
# def get_sentiment(product_id: str, db: Session = Depends(get_db)):
#     return crud.get_product_sentiment_breakdown(db, product_id)

# # ----------- Products -------------
# @app.get("/products", response_model=List[schemas.Product])
# def read_products(
#     limit: int = 10,
#     offset: int = 0,
#     category: Optional[str] = None,
#     min_price: Optional[float] = None,
#     max_price: Optional[float] = None,
#     db: Session = Depends(get_db)
# ):
#     return crud.get_products(db, limit, offset, category, min_price, max_price)

# # --------------------------
# # Products Endpoints
# # --------------------------
# @app.get("/products", response_model=List[schemas.Product])
# def read_products(
#     limit: int = 10,
#     offset: int = 0,
#     category: Optional[str] = None,
#     min_price: Optional[float] = None,
#     max_price: Optional[float] = None,
#     db: Session = Depends(get_db)
# ):
#     return crud.get_products(db, limit, offset, category, min_price, max_price)

# @app.get("/analytics/summary", response_model=schemas.Summary)
# def analytics_summary(db: Session = Depends(get_db)):
#     return crud.get_summary(db)

# @app.get("/analytics/category", response_model=schemas.CategoryAnalyticsResponse)
# def analytics_by_category(db: Session = Depends(get_db)):
#     categories = crud.get_category_analytics(db)
#     return {"categories": categories}

# # --------------------------
# # AI Query Endpoint
# # --------------------------
# @app.post("/ai/query")
# def ask_ai(query: AIQuery, db: Session = Depends(get_db)):
#     limit = query.limit or 50  # default 50 if not provided
#     source = query.source.lower()

#     if source == "products":
#         # Fetch top products only
#         rows = db.execute(
#             text(f"""
#             SELECT id, category, brand, title, price, rating
#             FROM products
#             ORDER BY reviews DESC
#             LIMIT {limit}
#             """)
#         ).all()
#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "Products"
#     elif source == "amazon_reviews":
#         # Fetch recent Amazon reviews only
#         rows = db.execute(
#             text(f"""
#             SELECT product_title, star_rating, review_headline, review_body, review_date
#             FROM "Amazon_Reviews"
#             ORDER BY review_date DESC
#             LIMIT {limit}
#             """)
#         ).all()
#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "Amazon Reviews"
#     else:
#         return {"error": "Invalid source. Use 'products' or 'amazon_reviews'."}

#     # Convert to JSON safe for AI
#     data_json = json.dumps(data_list, indent=2, default=decimal_to_float)

#     prompt = f"""
#     We have {len(data_list)} records in the {table_name} table.

#     Top {limit} entries:
#     {data_json}

#     Question: {query.question}
#     Answer in simple, human-readable text using the above context.
#     """

#     try:
#         result = subprocess.run(
#             ["ollama", "run", "mistral"],
#             input=prompt,
#             capture_output=True,
#             text=True,
#             encoding="utf-8",
#             errors="ignore"
#         )
#         answer = result.stdout.strip()
#     except Exception as e:
#         answer = f"Error: {str(e)}"

#     return {"answer": answer}

# # --------------------------
# # Forecast Endpoints
# # --------------------------
# @app.get("/top")
# def get_top_items(
#     table: str = Query(..., description="Choose 'products' or 'amazon_reviews'"),
#     n: int = Query(10, description="Number of top items to fetch"),
#     db: Session = Depends(get_db),
# ):
#     """
#     Fetch top N entries from either products or Amazon_Reviews table.
#     Use ?table=products or ?table=amazon_reviews
#     """
#     table = table.lower()
    
#     if table == "products":
#         data = crud.get_top_products(db, n)
#         return {"table": "products", "count": len(data), "data": data}
#     elif table == "amazon_reviews":
#         data = crud.get_top_products_amazon(db, n)
#         return {"table": "amazon_reviews", "count": len(data), "data": data}
#     else:
#         return {"error": "Invalid table. Use 'products' or 'amazon_reviews'."}
    
# @app.get("/top_forecast")
# def top_forecasted_products(n: int = Query(10, description="Number of top products"), db: Session = Depends(get_db)):
#     """
#     Fetch top N products by forecasted next price
#     """
#     forecast_list = crud.get_top_forecasted_products(db, n)
#     return {"table": "products_forecast", "count": len(forecast_list), "data": forecast_list} 

# @app.get("/notifications")
# def get_notifications(
#     table: str = Query("products", description="Choose 'products' or 'amazon_reviews'"),
#     limit: int = Query(5, description="Number of recent notifications"),
#     db: Session = Depends(get_db),
# ):
#     """
#     Fetch latest product/review updates for notification bell.
#     """
#     table = table.lower()

#     if table == "products":
#         query = text(f"""
#             SELECT id, title AS message, category, price
#             FROM products
#             ORDER BY id DESC
#             LIMIT {limit}
#         """)
#         rows = db.execute(query).fetchall()
#         data = [
#             {
#                 "id": row.id,
#                 "message": f"New product added: {row.message} (₹{row.price})",
#                 "time": "Just now",
#             }
#             for row in rows
#         ]
#     elif table == "amazon_reviews":
#         query = text(f"""
#             SELECT product_title, review_headline, review_date
#             FROM "Amazon_Reviews"
#             ORDER BY review_date DESC
#             LIMIT {limit}
#         """)
#         rows = db.execute(query).fetchall()
#         data = [
#             {
#                 "id": i + 1,
#                 "message": f"New review: {row.review_headline} on {row.product_title}",
#                 "time": str(row.review_date),
#             }
#             for i, row in enumerate(rows)
#         ]
#     else:
#         return {"error": "Invalid table. Use 'products' or 'amazon_reviews'."}

# @app.get("/top_forecast")
# def top_forecasted_products(n: int = Query(10, description="Number of top products"), db: Session = Depends(get_db)):
#     """
#     Fetch top N products by forecasted next price
#     """
#     forecast_list = crud.get_top_forecasted_products(db, n)
#     return {"table": "products_forecast", "count": len(forecast_list), "data": forecast_list}    

# # --------------------------
# # signup/login Endpoints
# # --------------------------
# from .routers import users
# app.include_router(users.router, prefix="/users")

# # Add these endpoints to your Fastapi_main.py

# # --------------------------
# # Filter Options Endpoint
# # --------------------------
# @app.get("/Amazon_Reviews/filter-options")
# def get_filter_options(db: Session = Depends(get_db)):
#     """
#     Get available filter options (categories, ratings, price range)
#     """
#     try:
#         # Get unique categories from Amazon_Reviews
#         categories_query = db.query(models.AmazonReview.product_category)\
#             .distinct()\
#             .filter(models.AmazonReview.product_category.isnot(None))\
#             .filter(models.AmazonReview.product_category != '')\
#             .all()
#         category_list = sorted([cat[0] for cat in categories_query if cat[0]])
        
#         # Get unique star ratings from Amazon_Reviews
#         ratings_query = db.query(models.AmazonReview.star_rating)\
#             .distinct()\
#             .filter(models.AmazonReview.star_rating.isnot(None))\
#             .order_by(models.AmazonReview.star_rating)\
#             .all()
#         rating_list = sorted([int(r[0]) for r in ratings_query if r[0] and r[0] > 0])
        
#         # Get price range from products table
#         price_stats = db.query(
#             func.min(models.Product.price).label('min_price'),
#             func.max(models.Product.price).label('max_price')
#         ).filter(models.Product.price.isnot(None)).first()
        
#         min_price = float(price_stats.min_price) if price_stats and price_stats.min_price else 0
#         max_price = float(price_stats.max_price) if price_stats and price_stats.max_price else 100000
        
#         return {
#             "categories": category_list,
#             "ratings": rating_list,
#             "price_range": {
#                 "min": int(min_price),
#                 "max": int(max_price)
#             }
#         }
#     except Exception as e:
#         print(f"Error fetching filter options: {e}")
#         return {
#             "error": str(e),
#             "categories": [],
#             "ratings": [1, 2, 3, 4, 5],
#             "price_range": {"min": 0, "max": 100000}
#         }


# # --------------------------
# # Filtered Analytics Endpoint
# # --------------------------
# @app.get("/Amazon_Reviews/analytics/filtered")
# def get_filtered_analytics(
#     category: Optional[str] = None,
#     min_rating: Optional[int] = None,
#     date_range: Optional[str] = "all",
#     db: Session = Depends(get_db)
# ):
#     """
#     Get analytics data based on applied filters for charts
#     """
#     try:
#         # Base query
#         query = db.query(models.AmazonReview)
        
#         # Apply filters
#         if category and category != "All Categories":
#             query = query.filter(models.AmazonReview.product_category == category)
        
#         if min_rating and min_rating > 0:
#             query = query.filter(models.AmazonReview.star_rating >= min_rating)
        
#         # Date range filter
#         if date_range != "all":
#             from datetime import datetime, timedelta
#             today = datetime.now()
            
#             if date_range == "7d":
#                 start_year = today.year
#                 # Simple approximation - filter by year
#             elif date_range == "30d":
#                 start_year = today.year
#             elif date_range == "90d":
#                 start_year = today.year
#             elif date_range == "1y":
#                 start_year = today.year - 1
#             else:
#                 start_year = None
            
#             if start_year:
#                 query = query.filter(models.AmazonReview.review_year >= start_year)
        
#         # Get sentiment distribution
#         sentiment_dist = query.with_entities(
#             models.AmazonReview.Sentiment_pc,
#             func.count(models.AmazonReview.review_id).label('count')
#         ).group_by(models.AmazonReview.Sentiment_pc).all()
        
#         # Get rating distribution
#         rating_dist = query.with_entities(
#             models.AmazonReview.star_rating,
#             func.count(models.AmazonReview.review_id).label('count')
#         ).group_by(models.AmazonReview.star_rating).all()
        
#         # Get category stats
#         category_stats = query.with_entities(
#             models.AmazonReview.product_category,
#             func.count(models.AmazonReview.review_id).label('count'),
#             func.avg(models.AmazonReview.star_rating).label('avg_rating')
#         ).group_by(models.AmazonReview.product_category).all()
        
#         # Get top products
#         top_products = query.with_entities(
#             models.AmazonReview.product_title,
#             func.count(models.AmazonReview.review_id).label('review_count'),
#             func.avg(models.AmazonReview.star_rating).label('avg_rating')
#         ).group_by(models.AmazonReview.product_title)\
#          .order_by(func.count(models.AmazonReview.review_id).desc())\
#          .limit(10).all()
        
#         return {
#             "sentiment_distribution": [
#                 {"sentiment": s[0], "count": s[1]} for s in sentiment_dist
#             ],
#             "rating_distribution": [
#                 {"rating": r[0], "count": r[1]} for r in rating_dist
#             ],
#             "category_stats": [
#                 {
#                     "category": c[0],
#                     "count": c[1],
#                     "avg_rating": float(c[2]) if c[2] else 0
#                 } for c in category_stats
#             ],
#             "top_products": [
#                 {
#                     "product_title": p[0],
#                     "review_count": p[1],
#                     "avg_rating": float(p[2]) if p[2] else 0
#                 } for p in top_products
#             ],
#             "total_reviews": query.count(),
#             "average_rating": float(query.with_entities(
#                 func.avg(models.AmazonReview.star_rating)
#             ).scalar() or 0)
#         }
        
#     except Exception as e:
#         print(f"Error getting filtered analytics: {e}")
#         return {"error": str(e)}


# from fastapi import FastAPI, HTTPException, Query
# from typing import Optional
# from server_py.rapidapi_amazon import amazon_api
# from server_py.amazon_data_sync import amazon_sync
# import logging

# logger = logging.getLogger(__name__)
# app = FastAPI(title="Amazon Data API")

# # ---------------------------
# # SEARCH PRODUCTS
# # ---------------------------
# @app.get("/amazon/search")
# def search_amazon(query: str = Query(..., description="Search term"), page: int = 1, country: str = "US"):
#     result = amazon_api.search_products(query=query, page=page, country=country)
#     if not result.get("success"):
#         raise HTTPException(status_code=400, detail=result.get("error", "Failed to fetch products"))
#     return result

# # ---------------------------
# # GET PRODUCT DETAILS
# # ---------------------------
# @app.get("/amazon/product/{asin}")
# def get_product_details(asin: str, country: str = "US"):
#     result = amazon_api.get_product_details(asin=asin, country=country)
#     if not result.get("success"):
#         raise HTTPException(status_code=404, detail=result.get("error", "Product not found"))
#     return result

# # ---------------------------
# # GET PRODUCT REVIEWS
# # ---------------------------
# @app.get("/amazon/product/{asin}/reviews")
# def get_product_reviews(asin: str, country: str = "US"):
#     result = amazon_api.get_product_reviews(asin=asin, country=country)
#     if not result.get("success"):
#         raise HTTPException(status_code=404, detail=result.get("error", "Reviews not found"))
#     return result

# # ---------------------------
# # GET DEALS
# # ---------------------------
# @app.get("/amazon/deals")
# def get_amazon_deals(country: str = "US"):
#     result = amazon_api.get_deals(country=country)
#     if not result.get("success"):
#         raise HTTPException(status_code=404, detail=result.get("error", "Deals not found"))
#     return result

# # ---------------------------
# # SYNC PRODUCTS (DB)
# # ---------------------------
# @app.post("/sync/amazon/products")
# def sync_amazon_products(query: str = Query(..., description="Search term to sync")):
#     try:
#         count = amazon_sync.sync_amazon_products_by_search(query=query)
#         return {"success": True, "synced_count": count}
#     except Exception as e:
#         logger.error(f"Error syncing products: {e}")
#         raise HTTPException(status_code=500, detail=str(e))

# # ---------------------------
# # SYNC DEALS (DB)
# # ---------------------------
# @app.post("/sync/amazon/deals")
# def sync_amazon_deals():
#     try:
#         count = amazon_sync.sync_amazon_deals()
#         return {"success": True, "synced_count": count}
#     except Exception as e:
#         logger.error(f"Error syncing deals: {e}")
#         raise HTTPException(status_code=500, detail=str(e))



# if __name__ == "__main__":
#     uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)


#!/usr/bin/env python3
"""
DataForSEO Amazon Product Collector - Standalone Cron Job
Updated: improved polling, defensive parsing, optional priority queue
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
    print("ERROR: rest_client.py not found! Get it from DataForSEO examples zip.")
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
    
    LOCATION_CODES = {
        2356: "India",
        2840: "United States", 
        2826: "United Kingdom",
        2036: "Australia",
        2124: "Canada"
    }
    
    def __init__(self):
        load_dotenv()

        # Database
        self.DATABASE_URL = os.getenv("DATABASE_URL")
        
        # DataForSEO API
        self.DATAFORSEO_LOGIN = os.getenv("DATAFORSEO_LOGIN")
        self.DATAFORSEO_PASSWORD = os.getenv("DATAFORSEO_PASSWORD")
        
        # Location Settings (using codes, not names)
        self.LOCATION_CODE = int(os.getenv("LOCATION_CODE", "2356"))  # Default: India
        self.LANGUAGE_CODE = os.getenv("LANGUAGE_CODE", "en")
        
        # Collection Settings
        self.DEPTH = int(os.getenv("DEPTH", "100"))
        self.WAIT_TIME = int(os.getenv("WAIT_TIME", "180"))  # initial wait before first poll
        # Switch to priority queue faster turnaround: set USE_PRIORITY_QUEUE=true in .env
        self.USE_PRIORITY_QUEUE = os.getenv("USE_PRIORITY_QUEUE", "false").lower() == "true"
        self.MAX_RETRIES = int(os.getenv("MAX_RETRIES", "10"))
        self.RETRY_INTERVAL = int(os.getenv("RETRY_INTERVAL", "300"))
        # total timeout for blocking wait_for_task (seconds). Default 45 minutes
        self.TASK_TIMEOUT = int(os.getenv("TASK_TIMEOUT", str(45 * 60)))
        
        # Database Connection
        self.DB_CONNECT_TIMEOUT = int(os.getenv("DB_CONNECT_TIMEOUT", "10"))
        self.DB_MAX_RETRIES = int(os.getenv("DB_MAX_RETRIES", "3"))
        
        # Keywords
        self.DEFAULT_KEYWORDS = [k.strip() for k in os.getenv("KEYWORDS", "laptop,smartphone,headphones").split(",")]

        self.validate()
        self.log_config()

    def validate(self):
        missing = [
            var for var in ["DATABASE_URL", "DATAFORSEO_LOGIN", "DATAFORSEO_PASSWORD"]
            if not getattr(self, var)
        ]
        if missing:
            raise ValueError(f"Missing required environment variables: {', '.join(missing)}")

    def log_config(self):
        location_name = self.LOCATION_CODES.get(self.LOCATION_CODE, f"Unknown (Code: {self.LOCATION_CODE})")
        logger.info("=" * 70)
        logger.info("[CONFIG] DataForSEO Collection Settings")
        logger.info(f"[CONFIG] Location: {location_name} (Code: {self.LOCATION_CODE})")
        logger.info(f"[CONFIG] Language: {self.LANGUAGE_CODE}")
        logger.info(f"[CONFIG] Depth: {self.DEPTH} products per keyword")
        logger.info(f"[CONFIG] Queue: {'Priority ($0.002/product)' if self.USE_PRIORITY_QUEUE else 'Standard ($0.001/product)'}")
        logger.info(f"[CONFIG] Keywords: {', '.join(self.DEFAULT_KEYWORDS)}")
        logger.info("=" * 70)


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
                logger.info("[DB] ✓ Connection successful")
                return True
            except psycopg2.OperationalError as e:
                logger.error(f"[DB ERROR] {e}")
                if attempt < self.max_retries:
                    wait_time = attempt * 2
                    logger.info(f"[DB] Retrying in {wait_time}s...")
                    time.sleep(wait_time)
                else:
                    logger.error("[DB] ✗ All connection attempts failed")
                    return False
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
                location_code INTEGER,
                created_at TIMESTAMP DEFAULT NOW(),
                UNIQUE(task_id, asin)
            )
        """)
        self.conn.commit()
        logger.info("[DB] Tables verified")

    def save_products(self, products: List[Dict]):
        """Save products to database. Returns number of records attempted to save."""
        if not products:
            return 0
        
        cursor = self.conn.cursor()
        try:
            execute_values(cursor, """
                INSERT INTO amazon_products 
                (task_id, asin, keyword, title, url, image_url, price_from, price_to, currency, 
                 rating_value, rating_votes, is_best_seller, location_code)
                VALUES %s ON CONFLICT (task_id, asin) DO NOTHING
            """, [
                (
                    p.get("task_id"), p.get("asin"), p.get("keyword"), p.get("title"),
                    p.get("url"), p.get("image_url"), p.get("price_from"), p.get("price_to"),
                    p.get("currency"), p.get("rating_value"), p.get("rating_votes"),
                    p.get("is_best_seller", False), p.get("location_code")
                )
                for p in products
            ])
            self.conn.commit()
            # execute_values' cursor.rowcount is not always reliable with ON CONFLICT DO NOTHING,
            # so return len(products) as attempted inserts for reporting clarity.
            return len(products)
        except Exception as e:
            logger.error(f"[DB ERROR] Failed to save products: {e}", exc_info=True)
            self.conn.rollback()
            return 0


# ==================== DATAFORSEO CLIENT ====================

class DataForSEOClient:
    """DataForSEO API client wrapper"""
    
    def __init__(self, login: str, password: str):
        self.client = RestClient(login, password)
        logger.info("[API] Initialized")

    def submit_task(self, keyword: str, location_code: int, language_code: str, depth: int = 100, priority: bool = False) -> Optional[str]:
        """Submit a task to DataForSEO API. Returns task_id or None."""
        try:
            endpoint = "/v3/merchant/amazon/products/task_post"
            if priority:
                endpoint = "/v3/merchant/amazon/products/priority/task_post"
                logger.info("[PRIORITY] Using priority queue ($0.002/product)")
            else:
                logger.info("[STANDARD] Using standard queue ($0.001/product)")
            
            payload = [{
                "keyword": keyword,
                "location_code": location_code,
                "language_code": language_code,
                "depth": depth
            }]
            
            logger.info(f"[API] Submitting task for keyword='{keyword}'")
            response = self.client.post(endpoint, payload)
            
            if not response or not isinstance(response, dict):
                logger.error("[API] No or invalid response on submit")
                return None

            # Response shapes can vary; be defensive
            # Successful contract often contains 'status_code'==20000 and 'tasks' list
            if response.get("status_code") == 20000 and response.get("tasks"):
                t = response["tasks"][0]
                task_id = t.get("id") or t.get("task_id") or t.get("result_id")
                if task_id:
                    logger.info(f"[API] ✓ Task submitted successfully. task_id={task_id}")
                    return task_id

            # some wrappers return full HTTP-like body under 'data' or 'tasks'
            tasks = response.get("tasks") or response.get("data") or []
            if isinstance(tasks, list) and len(tasks) > 0:
                t = tasks[0]
                task_id = t.get("id") or t.get("task_id")
                if task_id:
                    logger.info(f"[API] ✓ Task submitted successfully. task_id={task_id}")
                    return task_id

            # fallback: look for id in any nested dict
            for v in response.values():
                if isinstance(v, list):
                    for item in v:
                        if isinstance(item, dict) and ("id" in item or "task_id" in item):
                            task_id = item.get("id") or item.get("task_id")
                            if task_id:
                                logger.info(f"[API] ✓ Task submitted (fallback). task_id={task_id}")
                                return task_id
            
            logger.error(f"[API] Task submission failed, response: {response}")
            return None
            
        except Exception as e:
            logger.error(f"[API ERROR] Exception during task submission: {e}", exc_info=True)
            return None

    def get_results(self, task_id: str) -> Optional[Dict]:
        """Get results for a submitted task. Returns response dict if completed, else None."""
        try:
            endpoint = f"/v3/merchant/amazon/products/task_get/advanced/{task_id}"
            response = self.client.get(endpoint)
            
            if not response or not isinstance(response, dict):
                logger.warning(f"[API] No/invalid response for task {task_id}")
                return None
            
            # Defensive parsing
            status_code = response.get("status_code") or None
            if status_code and status_code != 20000:
                status_msg = response.get("status_message", "Unknown")
                # 40401 or 40602 often means task not ready
                logger.debug(f"[API] task {task_id} status_code: {status_code} ({status_msg})")
                # if it's explicitly an error (not pending) log
                if status_code not in (40401, 40602):
                    logger.warning(f"[API] Unexpected status {status_code} for task {task_id}: {status_msg}")
                return None

            # Now inspect tasks array for status and result
            tasks = response.get("tasks") or []
            if not tasks:
                # Some responses put result directly under 'data' or 'result'
                # Check for 'result' at top level
                if response.get("result"):
                    logger.info(f"[API] Task {task_id} returned top-level result")
                    return response
                logger.debug(f"[API] No 'tasks' in response for {task_id}")
                return None

            task = tasks[0] if isinstance(tasks, list) else tasks
            task_status = task.get("status_code") or task.get("status")
            # 20000 = finished
            if task_status == 20000:
                if task.get("result") or response.get("result"):
                    logger.info(f"[SUCCESS] Task {task_id} completed")
                    return response
                else:
                    # Completed but empty
                    logger.info(f"[SUCCESS] Task {task_id} completed but no result payload")
                    return response

            # still pending
            if task_status in (40401, 40602) or task_status is None:
                logger.info(f"[PENDING] Task {task_id} still processing (status: {task_status})")
                return None

            # otherwise unknown status
            logger.warning(f"[STATUS] Task {task_id} status: {task_status}")
            return None

        except Exception as e:
            logger.error(f"[API ERROR] Exception while fetching results: {e}", exc_info=True)
            return None

    def wait_for_task(self, task_id: str, timeout: int = 45*60, initial_wait: Optional[int] = None,
                      retry_interval: int = 30) -> Optional[Dict]:
        """
        Wait for a task to complete, using exponential backoff up to a maximum interval.
        Returns the response dict on success, or None on timeout.
        """
        start = time.time()
        if initial_wait:
            logger.info(f"[WAIT] Sleeping initial {initial_wait}s before polling task {task_id}")
            time.sleep(initial_wait)

        interval = retry_interval
        max_interval = 300  # don't wait more than 5 minutes between polls
        attempt = 0

        while True:
            attempt += 1
            elapsed = time.time() - start
            if elapsed > timeout:
                logger.error(f"[TIMEOUT] Task {task_id} not ready after {timeout}s")
                return None

            logger.info(f"[CHECK] Poll attempt {attempt}. Elapsed: {int(elapsed)}s. Polling for task {task_id}...")
            res = self.get_results(task_id)
            if res:
                logger.info(f"[DONE] Task {task_id} finished after {int(elapsed)}s (attempt {attempt})")
                return res

            logger.info(f"[WAITING] Task {task_id} not ready. Sleeping {interval}s before next poll...")
            time.sleep(interval)
            interval = min(int(interval * 1.8), max_interval)


# ==================== COLLECTOR ====================

class AmazonDataCollector:
    """Main collector class that orchestrates data collection"""
    
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

    def extract_products(self, results: Dict, task_id: str, keyword: str, location_code: int):
        """Extract products from API response"""
        products = []
        # Defensive traversal: tasks -> result -> items
        tasks = results.get("tasks") or []
        if tasks:
            for task in tasks:
                for result in task.get("result", []) or []:
                    for item in result.get("items", []) or []:
                        if not item or not isinstance(item, dict):
                            continue
                        asin = item.get("data_asin") or item.get("asin") or item.get("id")
                        if not asin:
                            continue
                        rating = item.get("rating") or {}
                        products.append({
                            "task_id": task_id,
                            "asin": asin,
                            "keyword": keyword,
                            "title": item.get("title") or item.get("name"),
                            "url": item.get("url"),
                            "image_url": item.get("image_url") or item.get("image"),
                            "price_from": item.get("price_from") or item.get("price"),
                            "price_to": item.get("price_to"),
                            "currency": item.get("currency"),
                            "rating_value": rating.get("value"),
                            "rating_votes": rating.get("votes_count") or rating.get("votes"),
                            "is_best_seller": item.get("is_best_seller", False),
                            "location_code": location_code
                        })
        else:
            # fallback if results put items at top-level
            for result in (results.get("result") or []):
                for item in (result.get("items") or []):
                    asin = item.get("data_asin") or item.get("asin") or item.get("id")
                    if not asin:
                        continue
                    rating = item.get("rating") or {}
                    products.append({
                        "task_id": task_id,
                        "asin": asin,
                        "keyword": keyword,
                        "title": item.get("title") or item.get("name"),
                        "url": item.get("url"),
                        "image_url": item.get("image_url") or item.get("image"),
                        "price_from": item.get("price_from") or item.get("price"),
                        "price_to": item.get("price_to"),
                        "currency": item.get("currency"),
                        "rating_value": rating.get("value"),
                        "rating_votes": rating.get("votes_count") or rating.get("votes"),
                        "is_best_seller": item.get("is_best_seller", False),
                        "location_code": location_code
                    })

        logger.info(f"[EXTRACT] Found {len(products)} products")
        return products

    def collect_keyword(self, keyword: str):
        """Collect data for a single keyword"""
        location_name = Config.LOCATION_CODES.get(
            self.config.LOCATION_CODE, 
            f"Code {self.config.LOCATION_CODE}"
        )
        
        logger.info(f"[COLLECT] Keyword: {keyword}")
        logger.info(f"[COLLECT] Location: {location_name} (code: {self.config.LOCATION_CODE})")
        logger.info(f"[COLLECT] Language: {self.config.LANGUAGE_CODE}")
        logger.info(f"[COLLECT] Depth: {self.config.DEPTH}")
        
        # Submit task
        task_id = self.api.submit_task(
            keyword=keyword,
            location_code=self.config.LOCATION_CODE,
            language_code=self.config.LANGUAGE_CODE,
            depth=self.config.DEPTH,
            priority=self.config.USE_PRIORITY_QUEUE
        )
        
        if not task_id:
            logger.error(f"[FAILED] Could not submit task for '{keyword}'")
            return {"success": False, "keyword": keyword}
        
        # Wait for results (blocking) with configurable timeout and backoff
        initial_wait = self.config.WAIT_TIME
        total_timeout = self.config.TASK_TIMEOUT
        retry_interval = 30 if self.config.USE_PRIORITY_QUEUE else self.config.RETRY_INTERVAL

        logger.info(f"[WAIT] Waiting for task {task_id} (timeout={total_timeout}s)...")
        results = self.api.wait_for_task(task_id, timeout=total_timeout, initial_wait=initial_wait, retry_interval=retry_interval)
        
        if not results:
            logger.error(f"[FAILED] Could not retrieve results for '{keyword}' after waiting {total_timeout}s")
            return {"success": False, "keyword": keyword, "task_id": task_id}
        
        # Extract and save products
        products = self.extract_products(
            results, 
            task_id, 
            keyword,
            self.config.LOCATION_CODE
        )
        
        saved = self.db.save_products(products)
        logger.info(f"[SUCCESS] Saved {saved} products for '{keyword}'")
        
        return {
            "success": True,
            "keyword": keyword,
            "task_id": task_id,
            "count": saved,
            "total_found": len(products)
        }

    def collect_all(self, keywords: List[str]):
        """Collect data for all keywords"""
        results = []
        total_keywords = len(keywords)
        
        for idx, keyword in enumerate(keywords, 1):
            logger.info("")
            logger.info(f"[PROGRESS] Processing keyword {idx}/{total_keywords}")
            logger.info("=" * 70)
            
            result = self.collect_keyword(keyword.strip())
            results.append(result)
            
            # Small delay between keywords to avoid overwhelming the API
            if idx < total_keywords:
                time.sleep(2)
        
        return results


# ==================== MAIN ====================

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(
        description="DataForSEO Amazon Product Collector for India market"
    )
    parser.add_argument(
        "--run-once",
        action="store_true",
        help="Run once and exit (default: continuous)"
    )
    args = parser.parse_args()

    try:
        # Initialize
        config = Config()
        collector = AmazonDataCollector(config)
        
        # Connect to database
        if not collector.db.connect():
            logger.error("[EXIT] Database connection failed")
            sys.exit(1)
        
        collector.db.create_tables()
        
        # Collect data
        logger.info("")
        logger.info("=" * 70)
        logger.info("[START] Starting data collection...")
        logger.info("=" * 70)
        start_time = datetime.now()
        
        results = collector.collect_all(config.DEFAULT_KEYWORDS)
        
        # Disconnect
        collector.db.disconnect()
        
        # Summary
        end_time = datetime.now()
        duration = (end_time - start_time).total_seconds()
        
        successful = sum(1 for r in results if r.get("success"))
        failed = len(results) - successful
        total_products = sum(r.get("count", 0) for r in results)
        
        # Calculate estimated cost
        cost_per_product = 0.002 if config.USE_PRIORITY_QUEUE else 0.001
        estimated_cost = total_products * cost_per_product
        
        logger.info("")
        logger.info("=" * 70)
        logger.info("[COMPLETE] Data collection finished")
        logger.info(f"[STATS] Successful: {successful}/{len(results)}")
        logger.info(f"[STATS] Failed: {failed}")
        logger.info(f"[STATS] Total products saved: {total_products}")
        logger.info(f"[STATS] Estimated cost: ${estimated_cost:.3f}")
        logger.info(f"[STATS] Queue type: {'Priority' if config.USE_PRIORITY_QUEUE else 'Standard'}")
        logger.info(f"[STATS] Duration: {duration:.0f} seconds ({duration/60:.1f} minutes)")
        logger.info("=" * 70)
        
        if failed > 0:
            logger.info("")
            logger.info("Failed keywords:")
            for r in results:
                if not r.get("success"):
                    logger.info(f"  - {r['keyword']}")
        
    except KeyboardInterrupt:
        logger.info("")
        logger.info("[STOP] Stopped by user")
        sys.exit(0)
        
    except Exception as e:
        logger.error(f"[ERROR] Fatal error: {e}", exc_info=True)
        sys.exit(1)


if __name__ == "__main__":
    main()
