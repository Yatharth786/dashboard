
from fastapi import FastAPI, Depends, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text, inspect
from typing import List, Optional
import subprocess, json
from pydantic import BaseModel
import uvicorn
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.preprocessing import MinMaxScaler
import re, random
import numpy as np
import pandas as pd
from server_py.crud import lstm_forecast
from datetime import datetime, timedelta
from . import crud, schemas, models
from .database_config import get_db, engine
import requests, traceback
models.Base.metadata.create_all(bind=engine)
from .models import AmazonProductDetails
app = FastAPI(title="Amazon Reviews API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # TODO: restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AIQuery(BaseModel):
    question: str
    source: str  # "flipkart" or "amazon_reviews"
    limit: Optional[int] = 50
    
def decimal_to_float(obj):
    if isinstance(obj, (int, float)):
        return obj
    try:
        return float(obj)
    except Exception:
        return str(obj)

@app.get("/")
def read_root():
    return {"message": "Amazon Reviews API running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

# ----------- Reviews -------------
@app.get("/Amazon_Reviews/reviews", response_model=List[schemas.AmazonReview])
def get_reviews(limit: int = 50, offset: int = 0, db: Session = Depends(get_db)):
    return crud.get_reviews(db, limit=limit, offset=offset)

@app.get("/Amazon_Reviews/reviews/{review_id}", response_model=schemas.AmazonReview)
def get_review(review_id: str, db: Session = Depends(get_db)):
    return crud.get_review_by_id(db, review_id)

@app.get("/Amazon_Reviews/product/{product_id}", response_model=List[schemas.AmazonReview])
def get_product_reviews(product_id: str, limit: int = 20, db: Session = Depends(get_db)):
    return crud.get_product_reviews(db, product_id, limit)

@app.get("/Amazon_Reviews/search/{query}", response_model=List[schemas.AmazonReview])
def search_reviews(query: str, limit: int = 50, db: Session = Depends(get_db)):
    return crud.search_reviews(db, query, limit)



@app.get("/rapidapi_amazon_products/statistics")
def get_statistics(db: Session = Depends(get_db)):
    """
    Return summary statistics for RapidAPI Amazon Products table
    including total products, average rating, and total reviews count.
    """
    query = text("""
        SELECT 
            COUNT(*) AS total_products,
            ROUND(AVG(product_star_rating_numeric), 2) AS average_rating,
            SUM(product_num_ratings) AS total_reviews
        FROM "rapidapi_amazon_products"
        WHERE product_star_rating_numeric IS NOT NULL
    """)

    row = db.execute(query).fetchone()

    return {
        "total_products": int(row.total_products) if row.total_products else 0,
        "average_rating": float(row.average_rating) if row.average_rating else 0.0,
        "total_reviews": int(row.total_reviews) if row.total_reviews else 0
    }


@app.get("/Amazon_Reviews/sentiment", response_model=List[schemas.SentimentOut])
def get_sentiment(db: Session = Depends(get_db)):
    results = crud.get_sentiment_distribution(db)
    return [schemas.SentimentOut(sentiment=sentiment, count=count) for sentiment, count in results]

@app.get("/Amazon_Reviews/ratings", response_model=List[schemas.RatingOut])
def get_ratings(db: Session = Depends(get_db)):
    results = crud.get_ratings_distribution(db)
    return [schemas.RatingOut(rating=rating, count=count) for rating, count in results]

@app.get("/Amazon_Reviews/categories", response_model=List[schemas.CategoryOut])
def get_category_stats(db: Session = Depends(get_db)):
    return crud.get_category_statistics(db)

# ----------- Analytics -------------
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
def get_sentiment(product_id: str, db: Session = Depends(get_db)):
    return crud.get_product_sentiment_breakdown(db, product_id)

# ----------- flipkart -------------
@app.get("/flipkart", response_model=List[schemas.Product])
def read_products(limit: int = 10, offset: int = 0, category: schemas.Optional[str] = None,
                  min_price: schemas.Optional[float] = None, max_price: schemas.Optional[float] = None,
                  db: Session = Depends(get_db)):
    return crud.get_products(db, limit, offset, category, min_price, max_price)

@app.get("/analytics-summary")
def analytics_summary(
    source: str = Query("flipkart", enum=["flipkart", "amazon", "all"]),
    db: Session = Depends(get_db)
):
    return crud.get_summary(db, source)

@app.get("/analytics/category", response_model=schemas.CategoryAnalyticsResponse)
def analytics_by_category(db: Session = Depends(get_db)):
    categories = crud.get_category_analytics(db)
    return {"categories": categories}

# @app.post("/ai/query")
# def ask_ai(query: AIQuery, db: Session = Depends(get_db)):
#     limit = query.limit or 50
#     source = query.source.lower()

#     # -------------------- FLIPKART --------------------
#     if source == "flipkart":
#         rows = db.execute(
#             text(f"""
#             SELECT id, category, brand, title, price, rating
#             FROM flipkart
#             ORDER BY reviews DESC
#             LIMIT {limit}
#             """)
#         ).all()
#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "Flipkart"

#     # -------------------- RAPIDAPI AMAZON PRODUCTS --------------------
#     elif source == "rapidapi_amazon_products":
#         rows = db.execute(
#             text(f"""
#             SELECT 
#                 product_title,
#                 category_name,
#                 ROUND(AVG(product_star_rating_numeric), 2) AS avg_rating,
#                 SUM(product_num_ratings) AS total_reviews,
#                 ROUND(AVG(product_price_numeric), 2) AS avg_price,
#                 COUNT(*) AS product_variants,
#                 MAX(
#                     CASE 
#                         WHEN sales_volume LIKE '%M+%' THEN 
#                             (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000000) / 30
#                         WHEN sales_volume LIKE '%K+%' THEN 
#                             (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000) / 30
#                         ELSE 
#                             CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) / 30
#                     END
#                 ) AS daily_sales
#             FROM rapidapi_amazon_products
#             WHERE product_title IS NOT NULL
#             GROUP BY product_title, category_name
#             HAVING SUM(product_num_ratings) IS NOT NULL
#             ORDER BY total_reviews DESC NULLS LAST
#             LIMIT {limit}
#             """)
#         ).all()

#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "RapidAPI Amazon Products"

#     # -------------------- INVALID SOURCE --------------------
#     else:
#         return {"error": "Invalid source. Use 'flipkart' or 'rapidapi_amazon_products'."}

#     # ✅ Convert data to JSON for AI model
#     data_json = json.dumps(data_list, indent=2, default=decimal_to_float)

#     # ✅ Build AI prompt
#     prompt = f"""
# We have {len(data_list)} records in the {table_name} table.

# Top {limit} entries:
# {data_json}

# Question: {query.question}
# Please answer in simple, human-readable language using only the data above.
# Return only clean text, no markdown or special symbols.
# """

#     try:
#         # ✅ Run Ollama Mistral with proper cleanup and fallback
#         result = subprocess.run(
#             ["ollama", "run", "mistral"],
#             input=prompt,
#             capture_output=True,
#             text=True,
#             encoding="utf-8",
#             errors="ignore",
#             timeout=90
#         )

#         raw_output = (result.stdout or result.stderr or "").strip()

#         # ✅ Clean unwanted tokens or artifacts
#         clean_output = (
#             raw_output.replace("<|MODEL_RESPONSE|>", "")
#             .replace("</s>", "")
#             .replace("```", "")
#             .replace("json", "")
#             .replace("Output:", "")
#             .replace("Response:", "")
#             .strip()
#         )

#         answer = clean_output if clean_output else "No insights available."

#     except subprocess.TimeoutExpired:
#         answer = "Error: AI response timed out."
#     except Exception as e:
#         answer = f"Error: {str(e)}"

#     # ✅ (Optional) Debug log (safe to remove later)
#     print("---- AI PROMPT ----")
#     print(prompt)
#     print("---- AI RAW OUTPUT ----")
#     print(result.stdout)
#     print("---- AI CLEAN OUTPUT ----")
#     print(answer)

#     return {"answer": answer}

@app.post("/ai/query")
def ask_ai(query: AIQuery, db: Session = Depends(get_db)):
    limit = query.limit or 50
    source = query.source.lower()

    # -------------------- FLIPKART --------------------
    if source == "flipkart":
        rows = db.execute(
            text(f"""
            SELECT id, category, brand, title, price, rating
            FROM flipkart
            ORDER BY reviews DESC
            LIMIT {limit}
            """)
        ).all()
        data_list = [dict(row._mapping) for row in rows]
        table_name = "Flipkart"

    # -------------------- RAPIDAPI AMAZON PRODUCTS --------------------
    elif source == "rapidapi_amazon_products":
        rows = db.execute(
            text(f"""
            SELECT 
                product_title,
                category_name,
                ROUND(AVG(product_star_rating_numeric), 2) AS avg_rating,
                SUM(product_num_ratings) AS total_reviews,
                ROUND(AVG(product_price_numeric), 2) AS avg_price,
                COUNT(*) AS product_variants,
                MAX(
                    CASE 
                        WHEN sales_volume LIKE '%M+%' THEN 
                            (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000000) / 30
                        WHEN sales_volume LIKE '%K+%' THEN 
                            (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000) / 30
                        ELSE 
                            CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) / 30
                    END
                ) AS daily_sales
            FROM rapidapi_amazon_products
            WHERE product_title IS NOT NULL
            GROUP BY product_title, category_name
            HAVING SUM(product_num_ratings) IS NOT NULL
            ORDER BY total_reviews DESC NULLS LAST
            LIMIT {limit}
            """)
        ).all()

        data_list = [dict(row._mapping) for row in rows]
        table_name = "RapidAPI Amazon Products"

    # -------------------- INVALID SOURCE --------------------
    else:
        return {"error": "Invalid source. Use 'flipkart' or 'rapidapi_amazon_products'."}

    # Convert data to JSON for AI model
    data_json = json.dumps(data_list, indent=2, default=decimal_to_float)

    # Build AI prompt - shorter to avoid token limits
    prompt = f"""
{len(data_list)} records from {table_name}:

{data_json[:1500]}

Question: {query.question}
Answer in 2 clear, concise lines using only the data above.
"""

    try:
        # Run Ollama Mistral
        result = subprocess.run(
            ["ollama", "run", "mistral"],
            input=prompt,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore",
            timeout=30  # Reduced timeout
        )

        raw_output = (result.stdout or result.stderr or "").strip()

        # Clean output
        clean_output = (
            raw_output.replace("<|MODEL_RESPONSE|>", "")
            .replace("</s>", "")
            .replace("```", "")
            .replace("json", "")
            .replace("Output:", "")
            .replace("Response:", "")
            .strip()
        )

        answer = clean_output if clean_output else "No insights available."

    except subprocess.TimeoutExpired:
        answer = "AI response timed out. Please try again."
    except FileNotFoundError:
        answer = "AI service unavailable. Ollama not found."
    except Exception as e:
        answer = f"Error generating summary: {str(e)}"

    # ✅ NO PRINT STATEMENTS - Summary will only go to frontend
    return {"answer": answer}


# @app.get("/top")
# def get_top_items(
#     table: str = Query(..., description="Choose 'flipkart' or 'rapidapi_amazon_products'"),
#     n: int = Query(10, description="Number of top items to fetch"),
#     db: Session = Depends(get_db),
# ):
#     table = table.lower()

#     # ----------------------------- #
#     # 🔹 Flipkart (same as before)
#     # ----------------------------- #
#     if table == "flipkart":
#         data = crud.get_top_products(db, n)
#         return {"table": "flipkart", "count": len(data), "data": data}

#     # ----------------------------- #
#     # 🔹 RapidAPI Amazon Products
#     # ----------------------------- #
#     elif table == "rapidapi_amazon_products":
#         query = text("""
#             SELECT 
#                 asin,
#                 product_title,
#                 category_name,
#                 product_url,
#                 product_photo,
#                 product_star_rating_numeric AS rating,
#                 product_num_ratings AS reviews,
#                 product_price_numeric AS price,
#                 avg_price,
#                 min_price,
#                 max_price,
#                 sales_volume
#             FROM rapidapi_amazon_products
#             WHERE 
#                 product_title IS NOT NULL AND product_title != ''
#                 AND product_star_rating_numeric IS NOT NULL
#                 AND product_price_numeric IS NOT NULL
#         """)
#         result = db.execute(query).mappings().all()
#         rows = [dict(r) for r in result]

#         # ----------------------------- #
#         # 🔹 Merge duplicates by ASIN or title
#         # ----------------------------- #
#         merged = {}
#         for row in rows:
#             key = row["asin"] or row["product_title"].strip()
#             if key in merged:
#                 m = merged[key]
#                 # Average ratings and prices, sum reviews/sales
#                 m["rating"] = (m["rating"] + row["rating"]) / 2 if row["rating"] else m["rating"]
#                 m["price"] = (m["price"] + row["price"]) / 2 if row["price"] else m["price"]
#                 m["reviews"] = (m["reviews"] or 0) + (row["reviews"] or 0)
#                 m["sales_volume"] = (m["sales_volume"] or 0) + (row["sales_volume"] or 0)
#             else:
#                 merged[key] = row

#         merged_list = list(merged.values())

#         # ----------------------------- #
#         # 🔹 Sort by highest reviews first, then by rating
#         # ----------------------------- #
#         merged_list.sort(
#             key=lambda x: (
#                 x.get("reviews", 0),
#                 x.get("rating", 0)
#             ),
#             reverse=True
#         )

#         # Limit to top N
#         top_items = merged_list[:n]

#         return {
#             "table": "rapidapi_amazon_products",
#             "count": len(top_items),
#             "data": top_items
#         }

#     # ----------------------------- #
#     # 🔹 Invalid Input
#     # ----------------------------- #
#     else:
#         return {
#             "error": "Invalid table. Use 'flipkart' or 'rapidapi_amazon_products'."
#         }

@app.get("/top")
def get_top_items(
    table: str = Query(..., description="Choose 'flipkart' or 'rapidapi_amazon_products'"),
    n: int = Query(10, description="Number of top items to fetch"),
    category: Optional[str] = Query(None, description="Filter by category"),
    min_price: Optional[float] = Query(None, description="Minimum price"),
    max_price: Optional[float] = Query(None, description="Maximum price"),
    min_rating: Optional[float] = Query(None, description="Minimum rating"),
    date_range: Optional[str] = Query(None, description="Date range filter"),
    trending_only: Optional[bool] = Query(False, description="Show only trending products"),
    sort_by: Optional[str] = Query("sales_desc", description="Sort option"),
    db: Session = Depends(get_db),
):
    table = table.lower()

    # ----------------------------- #
    # 🔹 Flipkart
    # ----------------------------- #
    if table == "flipkart":
        # Build WHERE clause
        where_conditions = ["title IS NOT NULL", "rating IS NOT NULL"]
        params = {"n": n}
        
        if category and category != "All Categories":
            where_conditions.append("LOWER(category) = LOWER(:category)")
            params["category"] = category
        
        if min_price is not None:
            where_conditions.append("price >= :min_price")
            params["min_price"] = min_price
        
        if max_price is not None:
            where_conditions.append("price <= :max_price")
            params["max_price"] = max_price
        
        if min_rating is not None:
            where_conditions.append("rating >= :min_rating")
            params["min_rating"] = min_rating
        
        # Build ORDER BY clause
        order_by = "reviews DESC, rating DESC"
        if sort_by == "sales_asc":
            order_by = "reviews ASC"
        elif sort_by == "profit_desc":
            order_by = "price DESC"
        elif sort_by == "profit_asc":
            order_by = "price ASC"
        elif sort_by == "rating_desc":
            order_by = "rating DESC"
        elif sort_by == "price_desc":
            order_by = "price DESC"
        elif sort_by == "price_asc":
            order_by = "price ASC"
        
        where_clause = " AND ".join(where_conditions)
        
        query = text(f"""
            SELECT 
                id,
                title,
                category,
                brand,
                price,
                rating,
                reviews,
                last_updated
            FROM flipkart
            WHERE {where_clause}
            ORDER BY {order_by}
            LIMIT :n
        """)
        
        result = db.execute(query, params).mappings().all()
        data = [dict(r) for r in result]
        
        return {"table": "flipkart", "count": len(data), "data": data}

    # ----------------------------- #
    # 🔹 RapidAPI Amazon Products
    # ----------------------------- #
    elif table == "rapidapi_amazon_products":
        # Build WHERE clause
        where_conditions = [
            "product_title IS NOT NULL",
            "product_title != ''",
            "product_star_rating_numeric IS NOT NULL",
            "product_price_numeric IS NOT NULL"
        ]
        params = {"n": n}
        
        if category and category != "All Categories":
            where_conditions.append("LOWER(category_name) = LOWER(:category)")
            params["category"] = category
        
        if min_price is not None:
            where_conditions.append("product_price_numeric >= :min_price")
            params["min_price"] = min_price
        
        if max_price is not None:
            where_conditions.append("product_price_numeric <= :max_price")
            params["max_price"] = max_price
        
        if min_rating is not None:
            where_conditions.append("product_star_rating_numeric >= :min_rating")
            params["min_rating"] = min_rating
        
        # Build ORDER BY clause
        order_by = "reviews DESC, rating DESC"
        if sort_by == "sales_asc":
            order_by = "reviews ASC"
        elif sort_by == "rating_desc":
            order_by = "rating DESC"
        elif sort_by == "price_desc":
            order_by = "price DESC"
        elif sort_by == "price_asc":
            order_by = "price ASC"
        
        where_clause = " AND ".join(where_conditions)
        
        query = text(f"""
            SELECT 
                asin,
                product_title,
                category_name,
                product_url,
                product_photo,
                product_star_rating_numeric AS rating,
                product_num_ratings AS reviews,
                product_price_numeric AS price,
                avg_price,
                min_price,
                max_price,
                sales_volume
            FROM rapidapi_amazon_products
            WHERE {where_clause}
            ORDER BY {order_by}
            LIMIT :n
        """)
        
        result = db.execute(query, params).mappings().all()
        rows = [dict(r) for r in result]
        
        # Merge duplicates by ASIN
        merged = {}
        for row in rows:
            key = row["asin"] or row["product_title"].strip()
            if key in merged:
                m = merged[key]
                m["rating"] = (m["rating"] + row["rating"]) / 2 if row["rating"] else m["rating"]
                m["price"] = (m["price"] + row["price"]) / 2 if row["price"] else m["price"]
                m["reviews"] = (m["reviews"] or 0) + (row["reviews"] or 0)
            else:
                merged[key] = row
        
        top_items = list(merged.values())[:n]
        
        return {
            "table": "rapidapi_amazon_products",
            "count": len(top_items),
            "data": top_items
        }

    else:
        return {
            "error": "Invalid table. Use 'flipkart' or 'rapidapi_amazon_products'."
        }

@app.get("/forecast_all_products")
def forecast_all_products(n_forecast_days: int = Query(30, description="Days to forecast"),
                          db: Session = Depends(get_db)):
    forecast_list = crud.get_forecast_all_products(db, n_forecast_days)
    return forecast_list

# Replace your /notifications endpoint with this fixed version

@app.get("/notifications")
def get_notifications(
    table: str = Query("flipkart", description="Choose 'flipkart' or 'amazon_reviews'"),
    limit: int = Query(5, description="Number of recent notifications"),
    db: Session = Depends(get_db),
):
    table = table.lower()

    try:
        if table == "flipkart":
            query = text(f"""
                SELECT id, title AS message, category, price
                FROM flipkart
                ORDER BY id DESC
                LIMIT {limit}
            """)
            rows = db.execute(query).fetchall()
            data = [
                {
                    "id": row.id,
                    "message": f"New product added: {row.message[:50]}... (₹{row.price:.2f})",
                    "time": "Just now",
                }
                for row in rows
            ]
            
        elif table == "amazon_reviews":
            # ✅ FIXED: Use correct columns from rapidapi_amazon_products table
            query = text(f"""
                SELECT 
                    product_title, 
                    sales_volume, 
                    product_num_ratings,
                    product_star_rating_numeric
                FROM rapidapi_amazon_products
                WHERE product_title IS NOT NULL
                  AND sales_volume IS NOT NULL
                ORDER BY product_num_ratings DESC
                LIMIT {limit}
            """)
            rows = db.execute(query).fetchall()
            
            data = [
                {
                    "id": i + 1,
                    "message": f"Trending: {row.product_title[:60]}... ({row.sales_volume} sales)",
                    "time": f"{row.product_num_ratings} ratings · {row.product_star_rating_numeric}★",
                }
                for i, row in enumerate(rows)
            ]
            
        else:
            return {"error": "Invalid table. Use 'flipkart' or 'amazon_reviews'."}

        return {"table": table, "count": len(data), "data": data}
        
    except Exception as e:
        print(f"❌ Notification Error: {str(e)}")
        return {
            "table": table, 
            "count": 0, 
            "data": [],
            "error": str(e)
        }

@app.get("/category/products/{category_name}")
def get_category_products(
    category_name: str,
    source: str,  # must be 'amazon' or 'flipkart'
    limit: Optional[int] = None,
    offset: int = 0,
    db: Session = Depends(get_db)
):
    category_name = category_name.strip().lower()

    # ✅ Flipkart Query (min_price and max_price are returned as NULL)
    flipkart_query = """
        SELECT 
            title AS product_name,
            ROUND(AVG(price), 2) AS avg_price,
            NULL AS min_price,
            NULL AS max_price,
            SUM(reviews) AS total_reviews,
            ROUND(AVG(rating), 2) AS avg_rating,
            'Flipkart' AS source
        FROM flipkart
        WHERE LOWER(category) = LOWER(:category_name)
          AND title IS NOT NULL
          AND rating IS NOT NULL
          AND reviews IS NOT NULL
        GROUP BY title
        ORDER BY total_reviews DESC
        LIMIT :limit OFFSET :offset
    """

    # ✅ Amazon Query (uses your real min_price and max_price columns)
    amazon_query = """
        SELECT 
            product_title AS product_name,
            ROUND(AVG(product_price_numeric), 2) AS avg_price,
            ROUND(AVG(min_price), 2) AS min_price,
            ROUND(AVG(max_price), 2) AS max_price,
            SUM(product_num_ratings) AS total_reviews,
            ROUND(AVG(product_star_rating_numeric), 2) AS avg_rating,
            'Amazon' AS source
        FROM "rapidapi_amazon_products"
        WHERE LOWER(category_name) = LOWER(:category_name)
          AND product_title IS NOT NULL
          AND min_price IS NOT NULL
          AND max_price IS NOT NULL
          AND product_star_rating_numeric IS NOT NULL
          AND product_num_ratings IS NOT NULL
        GROUP BY product_title
        ORDER BY total_reviews DESC
        LIMIT :limit OFFSET :offset
    """

    # ✅ Select Query based on Source
    if source.lower() == "flipkart":
        query = flipkart_query
    elif source.lower() == "amazon":
        query = amazon_query
    else:
        raise HTTPException(
            status_code=400,
            detail="Invalid source. Must be either 'amazon' or 'flipkart'."
        )

    # ✅ Execute Query
    try:
        rows = db.execute(
            text(query),
            {"category_name": category_name, "limit": limit, "offset": offset}
        ).fetchall()
    except Exception as e:
        print(f"❌ SQL Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

    products = [dict(row._mapping) for row in rows]

    # ✅ Response
    return {
        "category": category_name,
        "source": source,
        "total_products": len(products),
        "products": products
    }

@app.get("/product/{product_name:path}")
def get_product_details(product_name: str, db: Session = Depends(get_db)):
    """Get product details from Flipkart or Amazon (using rapidapi_amazon_products)"""
    
    clean_name = product_name.strip().strip('"').strip("'").strip()
    
    # Try Flipkart
    try:
        flipkart_query = text("""
            SELECT
                title AS product_name,
                ROUND(AVG(price), 2) AS avg_price,
                ROUND(AVG(rating), 2) AS avg_rating,
                SUM(reviews) AS total_reviews
            FROM flipkart
            WHERE LOWER(TRIM(title)) = LOWER(:product_name)
            GROUP BY title
            LIMIT 1
        """)
        
        result = db.execute(flipkart_query, {"product_name": clean_name}).fetchone()
        
        if result:
            return {
                "product_name": result.product_name,
                "product_id": None,
                "avg_price": float(result.avg_price) if result.avg_price is not None else None,
                "min_price": None,
                "max_price": None,
                "avg_rating": float(result.avg_rating) if result.avg_rating is not None else None,
                "total_reviews": int(result.total_reviews) if result.total_reviews is not None else None,
                "source": "flipkart"
            }
    except Exception as e:
        pass
    
    # Try Amazon (from rapidapi_amazon_products)
    try:
        amazon_query = text("""
            SELECT
                product_title AS product_name,
                asin AS product_id,
                ROUND(AVG(product_star_rating_numeric), 2) AS avg_rating,
                SUM(product_num_ratings) AS total_reviews,
                ROUND(AVG(avg_price), 2) AS avg_price,
                ROUND(AVG(min_price), 2) AS min_price,
                ROUND(AVG(max_price), 2) AS max_price
            FROM rapidapi_amazon_products
            WHERE product_title ILIKE :product_name
            GROUP BY product_title, asin
            LIMIT 1
        """)
        
        result = db.execute(amazon_query, {"product_name": f"%{clean_name}%"}).fetchone()
        
        if result:
            return {
                "product_name": result.product_name.strip('"') if result.product_name else None,
                "product_id": result.product_id.strip('"') if result.product_id else None,
                "avg_price": float(result.avg_price) if result.avg_price is not None else None,
                "min_price": float(result.min_price) if result.min_price is not None else None,
                "max_price": float(result.max_price) if result.max_price is not None else None,
                "avg_rating": float(result.avg_rating) if result.avg_rating is not None else None,
                "total_reviews": int(result.total_reviews) if result.total_reviews is not None else None,
                "source": "amazon"
            }
    except Exception as e:
        pass
    
    raise HTTPException(status_code=404, detail="Product not found")


@app.get("/categories")
def get_categories(table: str = Query("flipkart"), db: Session = Depends(get_db)):
    """
    Return a list of distinct categories for a given table
    """
    table = table.lower()
    if table == "flipkart":
        return crud.get_flipkart_categories(db)  # Should return list of dicts with 'category' key
    elif table == "amazon_reviews":
        return crud.get_amazon_categories(db)
    else:
        return {"error": "Invalid table"}
    
# @app.get("/flipkart/categories")
# def get_flipkart_categories_distribution(db: Session = Depends(get_db)):
#     """
#     Return category distribution for Flipkart products
#     """
#     query = text("""
#         SELECT 
#             category,
#             COUNT(*) as count
#         FROM flipkart
#         GROUP BY category
#         ORDER BY count DESC
#     """)
    
#     rows = db.execute(query).fetchall()
#     categories = [{"category": row.category, "count": row.count} for row in rows]
    
#     return categories

@app.get("/flipkart/categories")
def get_flipkart_categories_distribution(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions
    where_conditions = ["category IS NOT NULL"]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("price >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("price <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("rating >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    query = text(f"""
        SELECT 
            category,
            COUNT(*) as count
        FROM flipkart
        WHERE {where_clause}
        GROUP BY category
        ORDER BY count DESC
    """)
    
    rows = db.execute(query, params).fetchall()
    categories = [{"category": row.category, "count": row.count} for row in rows]
    
    return categories

@app.get("/lstm_forecast/flipkart/{product_name}")
def forecast_flipkart(product_name: str):
    query = text('SELECT last_updated, price FROM flipkart WHERE title ILIKE :title ORDER BY last_updated')
    df = pd.read_sql_query(query, engine, params={"title": f"%{product_name}%"})

    if df.empty:
        return {"error": "No data found for this product"}

    # Convert date column to datetime
    df["last_updated"] = pd.to_datetime(df["last_updated"], errors="coerce")
    last_date = df["last_updated"].max()

    result = lstm_forecast(df["price"], last_date)
    return result

def parse_sales_volume(value):
    if value is None:
        return np.nan
    value = str(value).lower()
    try:
        if "k" in value:
            return float(value.replace("k", "").replace("+", "").strip()) * 1000
        elif "m" in value:
            return float(value.replace("m", "").replace("+", "").strip()) * 1000000
        else:
            digits = ''.join([c for c in value if c.isdigit()])
            return float(digits) if digits else np.nan
    except:
        return np.nan

# ---------- Dummy LSTM forecast function ----------
def lstm_forecast(series, last_date, forecast_days=365):
    forecast_dates = pd.date_range(start=last_date + timedelta(days=1), periods=forecast_days)
    last_value = series.iloc[-1] if not series.empty else 1000
    forecast_values = []
    for _ in range(forecast_days):
        last_value = max(0, last_value + random.randint(-50, 50))
        forecast_values.append(float(last_value))  # convert to Python float
    return {
        "forecast_dates": [str(d.date()) for d in forecast_dates],
        "forecast_sales": forecast_values
    }

# ---------- Endpoint ----------
@app.get("/lstm_forecast/amazon/{product_name}")
def forecast_sales(product_name: str):
    clean_product_name = product_name.strip().strip('"')
    
    query = text('''
        SELECT created_at, sales_volume
        FROM "rapidapi_amazon_products"
        WHERE asin = :product_name
        ORDER BY created_at
    ''')
    df = pd.read_sql_query(query, engine, params={"product_name": clean_product_name})
    
    if df.empty:
        query = text('''
            SELECT created_at, sales_volume
            FROM "rapidapi_amazon_products"
            WHERE product_title ILIKE :product_name
            ORDER BY created_at
        ''')
        df = pd.read_sql_query(query, engine, params={"product_name": f"%{clean_product_name}%"})
    
    if df.empty:
        today = pd.Timestamp.today()
        periods = 30
        df = pd.DataFrame({
            "created_at": pd.date_range(end=today, periods=periods),
            "sales_volume": [random.randint(500, 5000) for _ in range(periods)]
        })
    else:
        df["sales_volume"] = df["sales_volume"].apply(parse_sales_volume)
        df = df.dropna(subset=["sales_volume"])
        if df.empty:
            today = pd.Timestamp.today()
            periods = 30
            df = pd.DataFrame({
                "created_at": pd.date_range(end=today, periods=periods),
                "sales_volume": [random.randint(500, 5000) for _ in range(periods)]
            })
    
    last_date = df["created_at"].max()
    
    forecast_result = lstm_forecast(df["sales_volume"], last_date, forecast_days=365)
    
    # Convert all numeric types to native Python types for JSON serialization
    historical_sales = []
    for row in df.tail(10).to_dict(orient="records"):
        historical_sales.append({
            "created_at": str(row["created_at"].date()),
            "sales_volume": float(row["sales_volume"])
        })
    
    return {
        "product_name": product_name,
        "last_date": str(last_date.date()),
        "historical_sales": historical_sales,
        "forecast": forecast_result
    }


# @app.get("/rapidapi/top-sales")
# def get_top_sales_products(limit: int = 10, db: Session = Depends(get_db)):
#     """
#     Get top products by daily sales volume from rapidapi_amazon_products table.
#     Merges similar products (same title) and aggregates their data.
#     Converts monthly sales to daily average (divides by 30).
#     Filters out products with NULL sales_volume, ratings, or prices.
#     """
#     try:
#         query = text("""
#         WITH sales_data AS (
#             SELECT 
#                 product_title,
#                 category_name,
#                 product_url,
#                 product_photo,
#                 product_price_numeric,
#                 product_star_rating_numeric,
#                 product_num_ratings,
#                 sales_volume,
#                 country,
#                 CASE 
#                     WHEN sales_volume LIKE '%M+%' THEN 
#                         (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000000) / 30
#                     WHEN sales_volume LIKE '%K+%' THEN 
#                         (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000) / 30
#                     ELSE 
#                         CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) / 30
#                 END as daily_sales
#             FROM rapidapi_amazon_products
#             WHERE sales_volume IS NOT NULL
#                 AND product_star_rating_numeric IS NOT NULL 
#                 AND product_price_numeric IS NOT NULL
#                 AND product_num_ratings IS NOT NULL
#                 AND product_num_ratings > 0
#         )
#         SELECT 
#             product_title,
#             STRING_AGG(DISTINCT category_name, ', ') as categories,
#             MAX(product_url) as product_url,
#             MAX(product_photo) as product_photo,
#             ROUND(CAST(AVG(product_price_numeric) AS NUMERIC), 2) as avg_price,
#             ROUND(CAST(AVG(product_star_rating_numeric) AS NUMERIC), 2) as avg_rating,
#             SUM(product_num_ratings) as total_ratings,
#             MAX(sales_volume) as sales_volume,
#             MAX(country) as country,
#             ROUND(CAST(SUM(daily_sales) AS NUMERIC), 0) as total_daily_sales,
#             COUNT(*) as variant_count
#         FROM sales_data
#         WHERE daily_sales IS NOT NULL
#         GROUP BY product_title
#         ORDER BY total_daily_sales DESC NULLS LAST
#         LIMIT :limit
#         """)
        
#         rows = db.execute(query, {"limit": limit}).fetchall()
        
#         # Convert to list of dicts with proper formatting
#         products = []
#         for row in rows:
#             product = dict(row._mapping)
#             # Format the merged product info
#             product['daily_sales'] = product.pop('total_daily_sales')
#             product['category_name'] = product.pop('categories')  # Now contains all categories
#             product['product_price'] = f"₹{product['avg_price']:.2f}" if product['avg_price'] else None
#             product['product_star_rating'] = product['avg_rating']
            
#             # Add indicator if multiple variants were merged
#             if product['variant_count'] > 1:
#                 product['is_merged'] = True
#                 product['merged_info'] = f"{product['variant_count']} variants combined"
#             else:
#                 product['is_merged'] = False
            
#             products.append(product)
        
#         return {"data": products, "count": len(products)}
        
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error fetching top sales products: {str(e)}")

@app.get("/rapidapi/top-sales")
def get_top_sales_products(
    limit: int = 10,
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions for the CTE
    where_conditions = [
        "sales_volume IS NOT NULL",
        "product_star_rating_numeric IS NOT NULL",
        "product_price_numeric IS NOT NULL",
        "product_num_ratings IS NOT NULL",
        "product_num_ratings > 0"
    ]
    params = {"limit": limit}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating_numeric >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    try:
        query = text(f"""
        WITH sales_data AS (
            SELECT 
                product_title,
                category_name,
                product_url,
                product_photo,
                product_price_numeric,
                product_star_rating_numeric,
                product_num_ratings,
                sales_volume,
                country,
                CASE 
                    WHEN sales_volume LIKE '%M+%' THEN 
                        (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000000) / 30
                    WHEN sales_volume LIKE '%K+%' THEN 
                        (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000) / 30
                    ELSE 
                        CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) / 30
                END as daily_sales
            FROM rapidapi_amazon_products
            WHERE {where_clause}
        )
        SELECT 
            product_title,
            STRING_AGG(DISTINCT category_name, ', ') as categories,
            MAX(product_url) as product_url,
            MAX(product_photo) as product_photo,
            ROUND(CAST(AVG(product_price_numeric) AS NUMERIC), 2) as avg_price,
            ROUND(CAST(AVG(product_star_rating_numeric) AS NUMERIC), 2) as avg_rating,
            SUM(product_num_ratings) as total_ratings,
            MAX(sales_volume) as sales_volume,
            MAX(country) as country,
            ROUND(CAST(SUM(daily_sales) AS NUMERIC), 0) as total_daily_sales,
            COUNT(*) as variant_count
        FROM sales_data
        WHERE daily_sales IS NOT NULL
        GROUP BY product_title
        ORDER BY total_daily_sales DESC NULLS LAST
        LIMIT :limit
        """)
        
        rows = db.execute(query, params).fetchall()
        
        products = []
        for row in rows:
            product = dict(row._mapping)
            product['daily_sales'] = product.pop('total_daily_sales')
            product['category_name'] = product.pop('categories')
            product['product_price'] = f"₹{product['avg_price']:.2f}" if product['avg_price'] else None
            product['product_star_rating'] = product['avg_rating']
            
            if product['variant_count'] > 1:
                product['is_merged'] = True
                product['merged_info'] = f"{product['variant_count']} variants combined"
            else:
                product['is_merged'] = False
            
            products.append(product)
        
        return {"data": products, "count": len(products)}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching top sales products: {str(e)}")


@app.get("/top")
def get_top_products(table: str, n: int = 10, db: Session = Depends(get_db)):
    try:
        query = text(f"""
            SELECT product_id, product_title, product_price_numeric, 
                   product_star_rating_numeric, product_num_ratings, category_name
            FROM {table}
            WHERE product_title IS NOT NULL 
              AND product_price_numeric IS NOT NULL 
              AND product_star_rating_numeric IS NOT NULL
            ORDER BY product_star_rating_numeric DESC
            LIMIT :n
        """)
        result = db.execute(query, {"n": n}).mappings().all()
        return {"data": [dict(row) for row in result]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# -----------------------------
# 🔹 2. Category Distribution
# -----------------------------
# @app.get("/rapidapi_amazon_products/categories")
# def get_amazon_categories(db: Session = Depends(get_db)):
#     try:
#         query = text("""
#             SELECT category_name, COUNT(*) as count
#             FROM rapidapi_amazon_products
#             WHERE category_name IS NOT NULL
#               AND product_star_rating_numeric IS NOT NULL
#               AND product_title IS NOT NULL
#             GROUP BY category_name
#             ORDER BY count DESC
#         """)
#         result = db.execute(query).mappings().all()
#         return [dict(row) for row in result]
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

@app.get("/rapidapi_amazon_products/categories")
def get_amazon_categories(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions
    where_conditions = [
        "category_name IS NOT NULL",
        "product_star_rating_numeric IS NOT NULL",
        "product_title IS NOT NULL"
    ]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating_numeric >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    try:
        query = text(f"""
            SELECT category_name, COUNT(*) as count
            FROM rapidapi_amazon_products
            WHERE {where_clause}
            GROUP BY category_name
            ORDER BY count DESC
        """)
        result = db.execute(query, params).mappings().all()
        return [dict(row) for row in result]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# @app.get("/rapidapi_amazon_products/ratings")
# def get_amazon_ratings(db: Session = Depends(get_db)):
#     """
#     Returns star-rating wise distribution:
#     - rating → product_star_rating_numeric (1 to 5)
#     - count → number of products having that rating
#     - total_user_ratings → sum of product_num_ratings across those products
#     """
#     try:
#         query = text("""
#             SELECT 
#                 CAST(product_star_rating_numeric AS FLOAT) AS rating,
#                 COUNT(*) AS count,
#                 SUM(product_num_ratings) AS total_user_ratings
#             FROM rapidapi_amazon_products
#             WHERE product_star_rating_numeric IS NOT NULL
#               AND product_star_rating_numeric > 0
#               AND product_title IS NOT NULL
#               AND product_num_ratings IS NOT NULL
#             GROUP BY product_star_rating_numeric
#             ORDER BY product_star_rating_numeric DESC
#         """)
#         result = db.execute(query).mappings().all()
#         return [dict(row) for row in result]
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

@app.get("/rapidapi_amazon_products/ratings")
def get_amazon_ratings(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions
    where_conditions = [
        "product_star_rating_numeric IS NOT NULL",
        "product_star_rating_numeric > 0",
        "product_title IS NOT NULL",
        "product_num_ratings IS NOT NULL"
    ]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating_numeric >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    try:
        query = text(f"""
            SELECT 
                CAST(product_star_rating_numeric AS FLOAT) AS rating,
                COUNT(*) AS count,
                SUM(product_num_ratings) AS total_user_ratings
            FROM rapidapi_amazon_products
            WHERE {where_clause}
            GROUP BY product_star_rating_numeric
            ORDER BY product_star_rating_numeric DESC
        """)
        result = db.execute(query, params).mappings().all()
        return [dict(row) for row in result]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# -----------------------------
# 🔹 4. Sentiment Simulation (Based on Rating)
# -----------------------------
# @app.get("/rapidapi_amazon_products/sentiment")
# def get_amazon_sentiment(db: Session = Depends(get_db)):
#     try:
#         query = text("""
#             SELECT
#                 CASE
#                     WHEN product_star_rating_numeric >= 4 THEN 'positive'
#                     WHEN product_star_rating_numeric = 3 THEN 'neutral'
#                     ELSE 'negative'
#                 END as sentiment,
#                 COUNT(*) as count
#             FROM rapidapi_amazon_products
#             WHERE product_star_rating_numeric IS NOT NULL
#             GROUP BY sentiment
#         """)
#         result = db.execute(query).mappings().all()
#         return [dict(row) for row in result]
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

@app.get("/rapidapi_amazon_products/sentiment")
def get_amazon_sentiment(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions
    where_conditions = ["product_star_rating_numeric IS NOT NULL"]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating_numeric >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    try:
        query = text(f"""
            SELECT
                CASE
                    WHEN product_star_rating_numeric >= 4 THEN 'positive'
                    WHEN product_star_rating_numeric = 3 THEN 'neutral'
                    ELSE 'negative'
                END as sentiment,
                COUNT(*) as count
            FROM rapidapi_amazon_products
            WHERE {where_clause}
            GROUP BY sentiment
        """)
        result = db.execute(query, params).mappings().all()
        return [dict(row) for row in result]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


   
# ============================================
# FIXED LOGIN ENDPOINT - Replace in Fastapi_main.py
# ============================================
 
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr
from fastapi import HTTPException, Depends
from sqlalchemy.orm import Session
 
# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
 
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)
 
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
 
# ============================================
# Pydantic Models
# ============================================
 
class UserLogin(BaseModel):
    email: EmailStr
    password: str
 
class PasswordReset(BaseModel):
    email: EmailStr
    new_password: str
 
class LoginResponse(BaseModel):
    success: bool
    message: str
    user: dict = None
 
# ============================================
# FIXED LOGIN ENDPOINT (without is_active check)
# ============================================
 
@app.post("/users/login", response_model=LoginResponse)
def login_user(login_data: UserLogin, db: Session = Depends(get_db)):
    """
    Authenticate user and return user data if successful
    """
    try:
        # Find user by email
        user = db.query(models.User).filter(
            models.User.email == login_data.email
        ).first()
       
        # Check if user exists
        if not user:
            raise HTTPException(
                status_code=404,
                detail="No account found with this email. Please sign up first."
            )
       
        # Verify password
        if not verify_password(login_data.password, user.password_hash):
            raise HTTPException(
                status_code=401,
                detail="Incorrect password. Please try again or reset your password."
            )
       
        # Successful login
        return {
            "success": True,
            "message": "Login successful",
            "user": {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "business_name": user.business_name,
                "location": user.location,
                "business_interests": user.business_interests,
                "created_at": str(user.created_at)
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"âŒ Login error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Login failed: {str(e)}"
        )
 
# ============================================
# FIXED SIGNUP ENDPOINT
# ============================================
 
@app.post("/users/signup")
def signup_user(user_data: schemas.UserCreate, db: Session = Depends(get_db)):
    """
    Create a new user account
    """
    try:
        # Check if email already exists
        existing_user = db.query(models.User).filter(
            models.User.email == user_data.email
        ).first()
       
        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Email already registered. Please login instead."
            )
       
        # Hash the password
        hashed_password = get_password_hash(user_data.password)
       
        # Create new user (without is_active field)
        new_user = models.User(
            first_name=user_data.first_name,
            last_name=user_data.last_name,
            email=user_data.email,
            password_hash=hashed_password,
            business_name=user_data.business_name,
            location=user_data.location,
            business_interests=user_data.business_interests
        )
       
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
       
        return {
            "id": new_user.id,
            "first_name": new_user.first_name,
            "last_name": new_user.last_name,
            "email": new_user.email,
            "business_name": new_user.business_name,
            "location": new_user.location,
            "business_interests": new_user.business_interests,
            "created_at": new_user.created_at,
            "message": "Account created successfully"
        }
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        print(f"âŒ Signup error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error creating user: {str(e)}")
 
# ============================================
# PASSWORD RESET ENDPOINT
# ============================================
 
@app.post("/users/reset-password")
def reset_password(reset_data: PasswordReset, db: Session = Depends(get_db)):
    """
    Reset user password
    """
    try:
        # Find user by email
        user = db.query(models.User).filter(
            models.User.email == reset_data.email
        ).first()
       
        if not user:
            raise HTTPException(
                status_code=404,
                detail="No account found with this email"
            )
       
        # Update password
        user.password_hash = get_password_hash(reset_data.new_password)
       
        db.commit()
        return {
            "success": True,
            "message": "Password updated successfully"
        }
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        print(f"âŒ Password reset error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error updating password: {str(e)}"
        )
 
# ============================================
# CHECK EMAIL ENDPOINT
# ============================================
 
@app.get("/users/check-email/{email}")
def check_email_exists(email: str, db: Session = Depends(get_db)):
    """
    Check if an email is already registered
    """
    user = db.query(models.User).filter(
        models.User.email == email
    ).first()
   
    return {
        "exists": user is not None,
        "email": email,
        "message": "Email is registered" if user else "Email is available"
    }
 
# ============================================
# GET USER PROFILE ENDPOINT
# ============================================
 
@app.get("/users/profile/{email}")
def get_user_profile(email: str, db: Session = Depends(get_db)):
    """
    Get user profile by email
    """
    user = db.query(models.User).filter(
        models.User.email == email
    ).first()
   
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
   
    return {
        "id": user.id,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
        "business_name": user.business_name,
        "location": user.location,
        "business_interests": user.business_interests,
        "created_at": str(user.created_at)
    }
 