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


# server_py/Fastapi_main.py - CLEAN VERSION
from fastapi import FastAPI, Depends, HTTPException, Query, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import func, text
from typing import List, Optional
from contextlib import asynccontextmanager
import subprocess, json, logging, sys, os
from datetime import datetime
from uuid import uuid4
from dotenv import load_dotenv

from server_py import crud, schemas, models
from server_py.database_config import get_db, engine, Base, SessionLocal
from server_py.dataforseo_amazon import dataforseo_collector
from server_py.scheduler import start_scheduler, get_scheduler  # ✅ FIXED

# Remove all the commented code above this line

# -------------------
# Logging
# -------------------
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# -------------------
# Load environment
# -------------------
load_dotenv()

REQUIRED_ENV = ["DATABASE_URL", "DATAFORSEO_LOGIN", "DATAFORSEO_PASSWORD"]

def check_environment() -> bool:
    missing = []
    logger.info("=" * 70)
    logger.info("🔍 CHECKING ENVIRONMENT VARIABLES")
    logger.info("=" * 70)
    for v in REQUIRED_ENV:
        val = os.getenv(v)
        if val:
            if "PASSWORD" in v or "KEY" in v:
                display = "*" * 8
            else:
                display = val if len(val) <= 30 else val[:30] + "..."
            logger.info(f"  ✓ {v}: {display}")
        else:
            logger.warning(f"  ✗ {v}: NOT SET")
            missing.append(v)
    if missing:
        logger.warning(f"Missing env vars: {', '.join(missing)}")
    else:
        logger.info("All environment variables present.")
    logger.info("=" * 70 + "\n")
    return len(missing) == 0

def test_connection() -> bool:
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return True
    except Exception as e:
        logger.error(f"DB connection test failed: {e}")
        return False

def initialize_database() -> bool:
    logger.info("=" * 70)
    logger.info("🔧 INITIALIZING DATABASE")
    logger.info("=" * 70)
    try:
        if not test_connection():
            logger.error("❌ Database connection failed!")
            return False

        Base.metadata.create_all(bind=engine)
        tables = list(Base.metadata.tables.keys())
        logger.info(f"✅ Database initialized with {len(tables)} tables")
        for t in sorted(tables):
            logger.info(f"  - {t}")
        logger.info("=" * 70 + "\n")
        return True
    except Exception as e:
        logger.error(f"❌ Database initialization failed: {e}", exc_info=True)
        return False

# -------------------
# Lifespan context (startup/shutdown)
# -------------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown events"""
    # Startup
    logger.info("\n" + "=" * 70)
    logger.info("🎯 TRENDSENSEI API - STARTING UP")
    logger.info("=" * 70 + "\n")
    
    env_ok = check_environment()
    db_ok = initialize_database()
    
    if not env_ok or not db_ok:
        logger.warning("⚠️ Server starting with some issues")
    else:
        logger.info("🎉 All startup checks passed!")
    
    # ✅ START SCHEDULER
    try:
        scheduler = start_scheduler()
        logger.info("✅ Scheduler started successfully")
    except Exception as e:
        logger.error(f"❌ Failed to start scheduler: {e}")
    
    yield  # Server runs here
    
    # Shutdown
    logger.info("\n" + "=" * 70)
    logger.info("🛑 SHUTTING DOWN")
    logger.info("=" * 70)
    
    try:
        scheduler = get_scheduler()
        scheduler.stop()
        logger.info("✅ Scheduler stopped")
    except Exception as e:
        logger.error(f"Error stopping scheduler: {e}")

# -------------------
# FastAPI app with lifespan
# -------------------
app = FastAPI(
    title="TrendSensei Product API",
    version="2.0.0",
    lifespan=lifespan  # ✅ Enable lifespan events
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------
# Helper functions
# -------------------
def decimal_to_float(obj):
    if isinstance(obj, (int, float)):
        return obj
    try:
        return float(obj)
    except Exception:
        return str(obj)

# -------------------
# Ollama task store
# -------------------
ollama_results = {}

def run_ollama_task(task_id: str, prompt: str):
    try:
        result = subprocess.run(
            ["ollama", "run", "mistral", prompt],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore",
            timeout=120,
        )
        ollama_results[task_id] = {"output": result.stdout.strip(), "error": result.stderr.strip(), "status": "completed"}
    except subprocess.TimeoutExpired:
        ollama_results[task_id] = {"error": "Timeout", "status": "failed"}
    except Exception as e:
        logger.error(f"Ollama error: {e}")
        ollama_results[task_id] = {"error": str(e), "status": "failed"}

# -------------------
# Root & Health
# -------------------
@app.get("/")
def read_root():
    return {
        "message": "TrendSensei API is running",
        "version": "2.0.0",
        "status": "healthy",
        "scheduler": "enabled",
        "docs": "/docs"
    }

@app.get("/health")
def health_check():
    health_status = {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "database": "connected" if test_connection() else "disconnected",
        "scheduler": "running",
        "environment": "configured"
    }
    
    try:
        scheduler = get_scheduler()
        health_status["scheduler"] = "running" if scheduler.is_running else "stopped"
    except:
        health_status["scheduler"] = "error"
    
    missing = [v for v in REQUIRED_ENV if not os.getenv(v)]
    if missing:
        health_status["environment"] = f"missing: {', '.join(missing)}"
        health_status["status"] = "degraded"
    
    return health_status

@app.get("/status")
def system_status():
    try:
        db = next(get_db())
        table_counts = {}
        for table_name in Base.metadata.tables.keys():
            try:
                count = db.execute(text(f"SELECT COUNT(*) FROM {table_name}")).scalar()
                table_counts[table_name] = count
            except:
                table_counts[table_name] = "error"
        db.close()
        
        # Get scheduler status
        try:
            scheduler = get_scheduler()
            scheduler_status = {
                "running": scheduler.is_running,
                "jobs": len(scheduler.get_jobs())
            }
        except:
            scheduler_status = {"running": False, "jobs": 0}
        
        return {
            "server": {"status": "running", "version": "2.0.0"},
            "database": {
                "status": "connected" if test_connection() else "disconnected",
                "tables": table_counts
            },
            "scheduler": scheduler_status,
            "environment": {
                v: ("✓ set" if os.getenv(v) else "✗ missing")
                for v in REQUIRED_ENV
            }
        }
    except Exception as e:
        logger.error(f"Status check error: {e}", exc_info=True)
        return {"error": str(e)}

# -------------------
# SCHEDULER ENDPOINTS
# -------------------
@app.get("/scheduler/status")
def get_scheduler_status():
    """Get scheduler status"""
    try:
        scheduler = get_scheduler()
        return {
            "is_running": scheduler.is_running,
            "jobs": scheduler.get_jobs()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/scheduler/jobs/daily")
def create_daily_job(
    keywords: List[str] = Query(...),
    hour: int = Query(2, ge=0, le=23),
    minute: int = Query(0, ge=0, le=59),
    location_code: int = Query(2840),
    depth: int = Query(100)
):
    """Create a daily scheduled job"""
    try:
        scheduler = get_scheduler()
        job_id = scheduler.add_daily_job(
            keywords=keywords,
            hour=hour,
            minute=minute,
            location_code=location_code,
            depth=depth
        )
        return {
            "success": True,
            "job_id": job_id,
            "message": f"Daily job scheduled at {hour:02d}:{minute:02d} UTC"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/scheduler/jobs/interval")
def create_interval_job(
    keywords: List[str] = Query(...),
    hours: int = Query(0, ge=0),
    minutes: int = Query(0, ge=0),
    location_code: int = Query(2840),
    depth: int = Query(100)
):
    """Create an interval-based job"""
    try:
        if hours == 0 and minutes == 0:
            raise HTTPException(
                status_code=400,
                detail="Either hours or minutes must be > 0"
            )
        
        scheduler = get_scheduler()
        job_id = scheduler.add_interval_job(
            keywords=keywords,
            hours=hours,
            minutes=minutes,
            location_code=location_code,
            depth=depth
        )
        return {
            "success": True,
            "job_id": job_id,
            "message": f"Interval job scheduled every {hours}h {minutes}m"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/scheduler/jobs/{job_id}/pause")
def pause_job(job_id: str):
    """Pause a scheduled job"""
    try:
        scheduler = get_scheduler()
        scheduler.pause_job(job_id)
        return {"success": True, "message": f"Job {job_id} paused"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/scheduler/jobs/{job_id}/resume")
def resume_job(job_id: str):
    """Resume a paused job"""
    try:
        scheduler = get_scheduler()
        scheduler.resume_job(job_id)
        return {"success": True, "message": f"Job {job_id} resumed"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/scheduler/jobs/{job_id}")
def delete_job(job_id: str):
    """Delete a scheduled job"""
    try:
        scheduler = get_scheduler()
        scheduler.remove_job(job_id)
        return {"success": True, "message": f"Job {job_id} deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/scheduler/jobs/{job_id}/run-now")
def run_job_now(job_id: str):
    """Run a job immediately"""
    try:
        scheduler = get_scheduler()
        scheduler.run_job_now(job_id)
        return {"success": True, "message": f"Job {job_id} triggered"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# -------------------
# Products endpoints
# -------------------
@app.get("/products", response_model=List[schemas.Product])
def read_products(limit: int = 10, offset: int = 0, category: Optional[str] = None, min_price: Optional[float] = None, max_price: Optional[float] = None, db: Session = Depends(get_db)):
    return crud.get_products(db, limit, offset, category, min_price, max_price)

@app.get("/analytics/summary", response_model=schemas.Summary)
def analytics_summary(db: Session = Depends(get_db)):
    return crud.get_summary(db)

@app.get("/analytics/category", response_model=schemas.CategoryAnalyticsResponse)
def analytics_by_category(db: Session = Depends(get_db)):
    categories = crud.get_category_analytics(db)
    return {"categories": categories}

# -------------------
# Amazon Reviews endpoints
# -------------------
@app.get("/Amazon_Reviews/reviews", response_model=List[schemas.AmazonReview])
def get_reviews(limit: int = 50, offset: int = 0, db: Session = Depends(get_db)):
    return crud.get_reviews(db, limit=limit, offset=offset)

@app.get("/Amazon_Reviews/reviews/{review_id}", response_model=schemas.AmazonReview)
def get_review(review_id: str, db: Session = Depends(get_db)):
    review = crud.get_review_by_id(db, review_id)
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    return review

@app.get("/Amazon_Reviews/product/{product_id}", response_model=List[schemas.AmazonReview])
def get_product_reviews(product_id: str, limit: int = 20, db: Session = Depends(get_db)):
    return crud.get_product_reviews(db, product_id, limit)

@app.get("/Amazon_Reviews/search/{query}", response_model=List[schemas.AmazonReview])
def search_reviews(query: str, limit: int = 50, db: Session = Depends(get_db)):
    return crud.search_reviews(db, query, limit)

# -------------------
# Statistics endpoints
# -------------------
@app.get("/Amazon_Reviews/statistics")
def get_statistics(db: Session = Depends(get_db)):
    return crud.get_review_statistics(db)

@app.get("/Amazon_Reviews/sentiment", response_model=List[schemas.SentimentOut])
def get_sentiment(db: Session = Depends(get_db)):
    results = crud.get_sentiment_distribution(db)
    return [schemas.SentimentOut(sentiment=s, count=c) for s, c in results]

@app.get("/Amazon_Reviews/ratings", response_model=List[schemas.RatingOut])
def get_ratings(db: Session = Depends(get_db)):
    results = crud.get_ratings_distribution(db)
    return [schemas.RatingOut(rating=r, count=c) for r, c in results]

@app.get("/Amazon_Reviews/categories", response_model=List[schemas.CategoryOut])
def get_category_stats(db: Session = Depends(get_db)):
    return crud.get_category_statistics(db)

# -------------------
# Analytics endpoints
# -------------------
@app.get("/Amazon_Reviews/trending", response_model=List[schemas.TrendingProductOut])
def get_trending(limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_trending_products(db, limit)

@app.get("/Amazon_Reviews/trends/monthly", response_model=List[schemas.MonthlyTrendOut])
def monthly_trends(year: int, db: Session = Depends(get_db)):
    return crud.get_monthly_trends(db, year)

@app.get("/Amazon_Reviews/helpful")
def get_helpful(limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_helpful_reviews(db, limit)

@app.get("/Amazon_Reviews/sentiment/{product_id}", response_model=List[schemas.SentimentOut])
def get_product_sentiment(product_id: str, db: Session = Depends(get_db)):
    return crud.get_product_sentiment_breakdown(db, product_id)

# -------------------
# Forecast & top endpoints
# -------------------
@app.get("/top")
def get_top_items(table: str = Query(..., description="Choose 'products' or 'amazon_reviews'"), n: int = Query(10), db: Session = Depends(get_db)):
    table = table.lower()
    if table == "products":
        data = crud.get_top_products(db, n)
        return {"table": "products", "count": len(data), "data": data}
    elif table == "amazon_reviews":
        data = crud.get_top_products_amazon(db, n)
        return {"table": "amazon_reviews", "count": len(data), "data": data}
    else:
        return {"error": "Invalid table"}

@app.get("/top_forecast")
def top_forecasted_products(n: int = Query(10), db: Session = Depends(get_db)):
    forecast_list = crud.get_top_forecasted_products(db, n)
    return {"table": "products_forecast", "count": len(forecast_list), "data": forecast_list}

@app.get("/notifications")
def get_notifications(table: str = Query("products"), limit: int = Query(5), db: Session = Depends(get_db)):
    table = table.lower()
    if table == "products":
        query = text(f"SELECT id, title AS message, category, price FROM products ORDER BY id DESC LIMIT {limit}")
        rows = db.execute(query).fetchall()
        data = [{"id": row.id, "message": f"New product: {row.message} (₹{row.price})", "time": "Just now"} for row in rows]
    elif table == "amazon_reviews":
        query = text(f'SELECT product_title, review_headline, review_date FROM "Amazon_Reviews" ORDER BY review_date DESC LIMIT {limit}')
        rows = db.execute(query).fetchall()
        data = [{"id": i+1, "message": f"New review: {row.review_headline}", "time": str(row.review_date)} for i, row in enumerate(rows)]
    else:
        return {"error": "Invalid table"}
    return {"notifications": data}

# -------------------
# AI endpoints
# -------------------
@app.post("/ai/ollama")
def run_ollama_async(prompt: str, background_tasks: BackgroundTasks):
    task_id = str(uuid4())
    ollama_results[task_id] = {"status": "running"}
    background_tasks.add_task(run_ollama_task, task_id, prompt)
    return {"task_id": task_id, "status": "running"}

@app.get("/ai/ollama/{task_id}")
def get_ollama_result(task_id: str):
    result = ollama_results.get(task_id)
    if not result:
        return {"error": "Task ID not found"}
    return result

class AIQuery(schemas.BaseModel):
    question: str
    source: str
    limit: Optional[int] = 50

@app.post("/ai/query")
def ask_ai(query: AIQuery, db: Session = Depends(get_db)):
    limit = query.limit or 50
    source = query.source.lower()
    if source == "products":
        rows = db.execute(text(f"SELECT id, category, brand, title, price, rating FROM products ORDER BY reviews DESC LIMIT {limit}")).all()
        data_list = [dict(r._mapping) for r in rows]
        table_name = "Products"
    elif source == "amazon_reviews":
        rows = db.execute(text(f'SELECT product_title, star_rating, review_headline, review_body, review_date FROM "Amazon_Reviews" ORDER BY review_date DESC LIMIT {limit}')).all()
        data_list = [dict(r._mapping) for r in rows]
        table_name = "Amazon Reviews"
    else:
        return {"error": "Invalid source"}

    data_json = json.dumps(data_list, indent=2, default=decimal_to_float)
    prompt = f"We have {len(data_list)} records in {table_name}.\n\n{data_json}\n\nQuestion: {query.question}\nAnswer:"
    try:
        result = subprocess.run(["ollama", "run", "mistral"], input=prompt, capture_output=True, text=True, encoding="utf-8", errors="ignore")
        answer = result.stdout.strip()
    except Exception as e:
        answer = f"Error: {str(e)}"
    return {"answer": answer}

# -------------------
# DataForSEO endpoints
# -------------------
@app.post("/dataforseo/amazon")
async def collect_amazon_data(
    keyword: str = Query(...),
    location_code: int = Query(2840),
    language_code: str = Query("en_US"),
    depth: int = Query(100),
    wait_time: int = Query(90),
    db: Session = Depends(get_db)
):
    try:
        logger.info(f"🔥 DataForSEO request: {keyword}")
        result = dataforseo_collector.collect_and_store(
            keyword=keyword,
            wait_time=wait_time,
            location_code=location_code,
            language_code=language_code,
            depth=depth,
            db=db
        )
        if result.get("success"):
            return {
                "status": "success",
                "message": f"Collected {result.get('products_stored')} products",
                "data": result
            }
        else:
            raise HTTPException(status_code=500, detail=result.get("error"))
    except Exception as e:
        logger.error(f"❌ Error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/dataforseo/amazon/batch")
async def collect_batch(request: schemas.BatchKeywordsRequest, db: Session = Depends(get_db)):
    try:
        results = []
        for keyword in request.keywords:
            result = dataforseo_collector.collect_and_store(
                keyword=keyword,
                location_code=request.location_code,
                depth=request.depth,
                db=db
            )
            results.append(result)
        return {
            "status": "success",
            "message": f"Processed {len(request.keywords)} keywords",
            "data": results
        }
    except Exception as e:
        logger.error(f"❌ Batch error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/dataforseo/products")
def get_dataforseo_products(
    keyword: Optional[str] = None,
    limit: int = Query(50, le=500),
    offset: int = Query(0, ge=0),
    min_rating: Optional[float] = None,
    db: Session = Depends(get_db)
):
    try:
        query = db.query(models.AmazonProduct)
        if keyword:
            query = query.filter(models.AmazonProduct.keyword.ilike(f"%{keyword}%"))
        if min_rating:
            query = query.filter(models.AmazonProduct.rating >= min_rating)
        total = query.count()
        products = query.order_by(models.AmazonProduct.created_at.desc()).offset(offset).limit(limit).all()
        return {
            "total": total,
            "limit": limit,
            "offset": offset,
            "products": [{
                "id": p.id,
                "asin": p.asin,
                "title": p.title,
                "price": p.price,
                "currency": p.currency,
                "rating": p.rating,
                "url": p.url,
                "image_url": p.image_url,
                "keyword": p.keyword,
                "is_bestseller": p.is_bestseller
            } for p in products]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/dataforseo/stats")
def get_stats(db: Session = Depends(get_db)):
    total_products = db.query(func.count(models.AmazonProduct.id)).scalar()
    total_tasks = db.query(func.count(models.DataForSEOTask.id)).scalar()
    total_cost = db.query(func.sum(models.DataForSEOTask.cost)).scalar() or 0
    return {
        "overview": {
            "total_products": total_products or 0,
            "total_tasks": total_tasks or 0,
            "total_cost_usd": round(total_cost, 2)
        }
    }

# -------------------
# Filter options
# -------------------
@app.get("/Amazon_Reviews/filter-options")
def get_filter_options(db: Session = Depends(get_db)):
    try:
        categories_query = db.query(models.AmazonReview.product_category).distinct().filter(
            models.AmazonReview.product_category.isnot(None)
        ).all()
        category_list = sorted([cat[0] for cat in categories_query if cat[0]])
        
        ratings_query = db.query(models.AmazonReview.star_rating).distinct().filter(
            models.AmazonReview.star_rating.isnot(None)
        ).all()
        rating_list = sorted([int(r[0]) for r in ratings_query if r[0]])
        
        return {"categories": category_list, "ratings": rating_list}
    except Exception as e:
        return {"error": str(e), "categories": [], "ratings": [1,2,3,4,5]}

@app.get("/Amazon_Reviews/analytics/filtered")
def get_filtered_analytics(
    category: Optional[str] = None,
    min_rating: Optional[int] = None,
    db: Session = Depends(get_db)
):
    try:
        query = db.query(models.AmazonReview)
        if category and category != "All Categories":
            query = query.filter(models.AmazonReview.product_category == category)
        if min_rating and min_rating > 0:
            query = query.filter(models.AmazonReview.star_rating >= min_rating)
        
        sentiment_dist = query.with_entities(
            models.AmazonReview.Sentiment_pc,
            func.count(models.AmazonReview.review_id).label('count')
        ).group_by(models.AmazonReview.Sentiment_pc).all()
        
        return {
            "sentiment_distribution": [{"sentiment": s[0], "count": s[1]} for s in sentiment_dist],
            "total_reviews": query.count()
        }
    except Exception as e:
        return {"error": str(e)}

# -------------------
# Entry point
# -------------------
if __name__ == "__main__":
    import uvicorn
    logger.info("🚀 STARTING FASTAPI SERVER WITH SCHEDULER")
    try:
        uvicorn.run(
            "server_py.Fastapi_main:app",
            host="0.0.0.0",
            port=8000,
            reload=True,
            log_level="info"
        )
    except KeyboardInterrupt:
        logger.info("Server stopped by user")
    except Exception as e:
        logger.error(f"Server failed: {e}", exc_info=True)
        sys.exit(1)