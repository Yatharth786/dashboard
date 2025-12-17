
from fastapi import FastAPI, Depends, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text, inspect
from typing import List, Optional, Dict, Any
import subprocess, json
from pydantic import BaseModel
import uvicorn
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.preprocessing import MinMaxScaler
import re, random, hashlib
import numpy as np
import pandas as pd
from server_py.crud import lstm_forecast
from datetime import datetime, timedelta
from . import crud, schemas, models
from .database_config import get_db, engine
import requests, traceback
models.Base.metadata.create_all(bind=engine)
from .models import AmazonProductDetails
app = FastAPI(title="API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # TODO: restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AIQuery(BaseModel):
    question: str
    source: str  # "flipkart" or "amazon"
    limit: Optional[int] = None
    filters: Optional[Dict[str, Any]] = {}

class AIChartAnalysis(BaseModel):
    question: str
    source: str
    chartData: List[Dict[str, Any]]  # ✅ Exact data from frontend charts
    filters: Optional[Dict[str, Any]] = {}

# def decimal_to_float(obj):
#     if isinstance(obj, (int, float)):
#         return obj
#     try:
#         return float(obj)
#     except Exception:
#         return str(obj)

@app.get("/")
def read_root():
    return {"message": "API running"}

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
#     # ✅ REMOVED: limit = query.limit or 50
#     source = query.source.lower()

#     # -------------------- FLIPKART --------------------
#     if source == "flipkart":
#         rows = db.execute(
#             text("""
#             SELECT id, category, brand, title, price, rating, reviews
#             FROM flipkart
#             ORDER BY reviews DESC
#             """)  # ✅ NO LIMIT
#         ).all()
#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "Flipkart"

#     # -------------------- RAPIDAPI AMAZON PRODUCTS --------------------
#     elif source == "rapidapi_amazon_products":
#         rows = db.execute(
#             text("""
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
#             """)  # ✅ NO LIMIT
#         ).all()

#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "RapidAPI Amazon Products"

#     # -------------------- INVALID SOURCE --------------------
#     else:
#         return {"error": "Invalid source. Use 'flipkart' or 'rapidapi_amazon_products'."}

#     # Convert data to JSON for AI model
#     data_json = json.dumps(data_list, indent=2, default=decimal_to_float)

#     # Build AI prompt
#     prompt = f"""
# We have {len(data_list)} records in the {table_name} table.

# Data:
# {data_json[:3000]}  # ✅ First 3000 chars to avoid token limits

# Question: {query.question}
# Answer in 2 clear, concise lines using only the data above.
# """

#     try:
#         # Run Ollama Mistral
#         result = subprocess.run(
#             ["ollama", "run", "mistral"],
#             input=prompt,
#             capture_output=True,
#             text=True,
#             encoding="utf-8",
#             errors="ignore",
#             timeout=30
#         )

#         raw_output = (result.stdout or result.stderr or "").strip()

#         # Clean output
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
#         answer = "AI response timed out. Please try again."
#     except FileNotFoundError:
#         answer = "AI service unavailable. Ollama not found."
#     except Exception as e:
#         answer = f"Error generating summary: {str(e)}"

#     # ✅ NO PRINT STATEMENTS
#     return {"answer": answer}

def build_where_clause(filters: Dict[str, Any], source: str) -> str:
    """Build SQL WHERE clause from filters"""
    conditions = []
    
    # Category filter
    if filters.get("category") and filters["category"] != "All Categories":
        category = filters["category"].replace("'", "''")  # Escape single quotes
        if source == "flipkart":
            conditions.append(f"category = '{category}'")
        else:  # Amazon
            conditions.append(f"category_name = '{category}'")
    
    # Price range filter
    price_range = filters.get("priceRange", [0, 5000000])
    price_min = price_range[0] if isinstance(price_range, list) else 0
    price_max = price_range[1] if isinstance(price_range, list) else 5000000
    
    if price_min > 0:
        price_field = "price" if source == "flipkart" else "product_price_numeric"
        conditions.append(f"{price_field} >= {price_min}")
    
    if price_max < 5000000:
        price_field = "price" if source == "flipkart" else "product_price_numeric"
        conditions.append(f"{price_field} <= {price_max}")
    
    # Rating filter
    rating = filters.get("rating", 0)
    if rating > 0:
        if source == "flipkart":
            conditions.append(f"rating >= {rating}")
        else:  # Amazon
            conditions.append(f"product_star_rating_numeric >= {rating}")
    
    # Trending only filter (only for Amazon with sales data)
    if filters.get("showTrendingOnly") and source != "flipkart":
        conditions.append("sales_volume IS NOT NULL AND sales_volume != ''")
    
    return " AND ".join(conditions) if conditions else "1=1"



# @app.post("/ai/query")
# def ask_ai(query: AIQuery, db: Session = Depends(get_db)):
#     source = query.source.lower()
#     filters = query.filters or {}
    
#     # Build WHERE clause
#     where_clause = build_where_clause(filters, source)
    
#     print(f"🔍 AI Query - Source: {source}")
#     print(f"📊 Filters: {filters}")
#     print(f"📝 WHERE clause: {where_clause}")

#     # -------------------- FLIPKART --------------------
#     if source == "flipkart":
#         sql = f"""
#             SELECT id, category, brand, title, price, rating, reviews
#             FROM flipkart
#             WHERE {where_clause}
#             ORDER BY reviews DESC
#         """
        
#         rows = db.execute(text(sql)).all()
#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "Flipkart"

#     # -------------------- RAPIDAPI AMAZON PRODUCTS --------------------
#     elif source == "rapidapi_amazon_products":
#         sql = f"""
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
#             WHERE product_title IS NOT NULL AND {where_clause}
#             GROUP BY product_title, category_name
#             HAVING SUM(product_num_ratings) IS NOT NULL
#             ORDER BY total_reviews DESC NULLS LAST
#         """
        
#         rows = db.execute(text(sql)).all()
#         data_list = [dict(row._mapping) for row in rows]
#         table_name = "RapidAPI Amazon Products"

#     # -------------------- INVALID SOURCE --------------------
#     else:
#         return {"error": "Invalid source. Use 'flipkart' or 'rapidapi_amazon_products'."}

#     # Convert data to JSON for AI model
#     data_json = json.dumps(data_list, indent=2, default=decimal_to_float)
    
#     # ✅ Include filter context in prompt
#     filter_text = ""
#     if filters:
#         filter_parts = []
#         if filters.get("category") and filters["category"] != "All Categories":
#             filter_parts.append(f"Category: {filters['category']}")
#         if filters.get("priceRange"):
#             pr = filters["priceRange"]
#             if isinstance(pr, list) and len(pr) == 2:
#                 if pr[0] > 0 or pr[1] < 5000000:
#                     filter_parts.append(f"Price: ₹{pr[0]:,} - ₹{pr[1]:,}")
#         if filters.get("rating", 0) > 0:
#             filter_parts.append(f"Min Rating: {filters['rating']}★")
#         if filters.get("showTrendingOnly"):
#             filter_parts.append("Trending products only")
        
#         if filter_parts:
#             filter_text = f"\n\nFilters Applied: {', '.join(filter_parts)}"

#     # Build AI prompt with filter context
#     prompt = f"""
# We have {len(data_list)} records in the {table_name} table.{filter_text}

# Data:
# {data_json[:3000]}

# Question: {query.question}
# Answer in 2 clear, concise lines using only the filtered data above.
# """

#     try:
#         # Run Ollama Mistral
#         result = subprocess.run(
#             ["ollama", "run", "mistral"],
#             input=prompt,
#             capture_output=True,
#             text=True,
#             encoding="utf-8",
#             errors="ignore",
#             timeout=30
#         )

#         raw_output = (result.stdout or result.stderr or "").strip()

#         # Clean output
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
#         answer = "AI response timed out. Please try again."
#     except FileNotFoundError:
#         answer = "AI service unavailable. Ollama not found."
#     except Exception as e:
#         answer = f"Error generating summary: {str(e)}"

#     return {"answer": answer}

@app.post("/ai/query")
def ask_ai(query: AIQuery, db: Session = Depends(get_db)):
    source = query.source.lower()
    filters = query.filters or {}
    
    print(f"🔍 AI Query - Source: {source}")
    print(f"📊 Filters received: {filters}")

    # -------------------- RAPIDAPI FLIPKART PRODUCTS --------------------
    if source == "flipkart" or source == "rapidapi_flipkart_products":
        where_conditions = ["product_title IS NOT NULL"]
        
        # Category filter
        if filters.get("category") and filters["category"] != "All Categories":
            where_conditions.append(f"LOWER(category_name) = LOWER('{filters['category']}')")
        
        # Price range filter
        if filters.get("priceRange"):
            price_range = filters["priceRange"]
            if isinstance(price_range, list) and len(price_range) == 2:
                min_price, max_price = price_range
                if min_price > 0:
                    where_conditions.append(f"product_price >= {min_price}")
                if max_price < 5000000:
                    where_conditions.append(f"product_price <= {max_price}")
        
        # Rating filter
        if filters.get("rating"):
            where_conditions.append(f"product_star_rating >= {filters['rating']}")
        
        where_clause = " AND ".join(where_conditions)
        
        sql = f"""
            SELECT 
                product_title,
                category_name,
                brand,
                ROUND(AVG(product_star_rating), 2) AS avg_rating,
                SUM(product_review_count) AS total_reviews,
                ROUND(AVG(product_price), 2) AS avg_price,
                ROUND(AVG(product_mrp), 2) AS avg_mrp,
                COUNT(*) AS product_variants,
                MAX(sales_volume) AS sales_volume,
                MAX(estimated_sales) AS daily_sales
            FROM rapidapi_flipkart_products
            WHERE {where_clause}
            GROUP BY product_title, category_name, brand
            HAVING SUM(product_review_count) IS NOT NULL
            ORDER BY total_reviews DESC NULLS LAST
            LIMIT 100
        """
        
        print(f"📝 SQL: {sql}")
        
        rows = db.execute(text(sql)).all()
        data_list = [dict(row._mapping) for row in rows]
        table_name = "RapidAPI Flipkart Products"

    # -------------------- RAPIDAPI AMAZON PRODUCTS --------------------
    elif source == "amazon" or source == "rapidapi_amazon_products":
        where_conditions = ["product_title IS NOT NULL"]
        
        # Category filter
        if filters.get("category") and filters["category"] != "All Categories":
            where_conditions.append(f"LOWER(category_name) = LOWER('{filters['category']}')")
        
        # Price range filter
        if filters.get("priceRange"):
            price_range = filters["priceRange"]
            if isinstance(price_range, list) and len(price_range) == 2:
                min_price, max_price = price_range
                if min_price > 0:
                    where_conditions.append(f"product_price_numeric >= {min_price}")
                if max_price < 5000000:
                    where_conditions.append(f"product_price_numeric <= {max_price}")
        
        # Rating filter
        if filters.get("rating"):
            where_conditions.append(f"product_star_rating_numeric >= {filters['rating']}")
        
        where_clause = " AND ".join(where_conditions)
        
        sql = f"""
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
            WHERE {where_clause}
            GROUP BY product_title, category_name
            HAVING SUM(product_num_ratings) IS NOT NULL
            ORDER BY total_reviews DESC NULLS LAST
            LIMIT 100
        """
        
        print(f"📝 SQL: {sql}")
        
        rows = db.execute(text(sql)).all()
        data_list = [dict(row._mapping) for row in rows]
        table_name = "RapidAPI Amazon Products"

    else:
        return {"error": "Invalid source. Use 'flipkart', 'amazon', 'rapidapi_flipkart_products', or 'rapidapi_amazon_products'."}

    # Convert data to JSON for AI model
    data_json = json.dumps(data_list[:50], indent=2, default=decimal_to_float)  # Limit to 50 for token efficiency
    
    # Build filter context for AI prompt
    filter_text = ""
    if filters:
        filter_parts = []
        if filters.get("category") and filters["category"] != "All Categories":
            filter_parts.append(f"Category: {filters['category']}")
        if filters.get("priceRange"):
            pr = filters["priceRange"]
            if isinstance(pr, list) and len(pr) == 2:
                if pr[0] > 0 or pr[1] < 5000000:
                    filter_parts.append(f"Price Range: ₹{pr[0]:,} - ₹{pr[1]:,}")
        if filters.get("rating"):
            filter_parts.append(f"Minimum Rating: {filters['rating']}★")
        
        if filter_parts:
            filter_text = f"\n\nActive Filters: {', '.join(filter_parts)}"
            filter_text += f"\n(Showing {len(data_list)} products matching these filters)"

    # Build AI prompt with filter context
    prompt = f"""You are analyzing {table_name} e-commerce data.

Dataset: {len(data_list)} products found{filter_text}

Sample Data (first 50 products):
{data_json}

User Question: {query.question}

Instructions:
- Answer based ONLY on the filtered dataset above
- Be specific and mention actual product names/prices when relevant
- If filters are active, acknowledge them in your response
- Keep response conversational and helpful (2-4 sentences)
- Include numbers and statistics when available

Answer:"""

    try:
        result = subprocess.run(
            ["ollama", "run", "mistral"],
            input=prompt,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore",
            timeout=30
        )

        raw_output = (result.stdout or result.stderr or "").strip()

        clean_output = (
            raw_output.replace("<|MODEL_RESPONSE|>", "")
            .replace("</s>", "")
            .replace("```", "")
            .replace("json", "")
            .replace("Output:", "")
            .replace("Response:", "")
            .strip()
        )

        answer = clean_output if clean_output else "No insights available for the selected filters."

    except subprocess.TimeoutExpired:
        answer = "AI response timed out. Please try again."
    except FileNotFoundError:
        answer = "AI service unavailable. Ollama not found."
    except Exception as e:
        answer = f"Error generating summary: {str(e)}"

    return {"answer": answer}

@app.post("/ai/analyze-chart")
def analyze_chart_data(request: AIChartAnalysis):
    """
    NLP-powered natural language chart analysis
    """
    
    chart_data = request.chartData
    data_count = len(chart_data)
    
    if data_count == 0:
        return {"answer": "No data available for the selected filters."}
    
    source_name = "Flipkart" if request.source == "flipkart" else "Amazon"
    
    # Detect chart type
    first_item = chart_data[0] if chart_data else {}
    chart_type = detect_chart_type(first_item, request.question)
    
    print(f"📊 NLP Mode | Type: {chart_type} | Items: {data_count}")
    print(f"   Question: {request.question}")
    
    try:
        # Generate natural language summary
        answer = generate_nlp_summary(chart_data, chart_type, request.question, source_name)
        print(f"✅ NLP summary generated")
    
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        import traceback
        traceback.print_exc()
        answer = f"I couldn't analyze this data right now. {str(e)[:60]}"

    return {"answer": answer}


def detect_chart_type(first_item: dict, question: str) -> str:
    """Detect chart type from data structure"""
    keys_lower = {k.lower() for k in first_item.keys()}
    
    # Top products
    if any(k in keys_lower for k in ['title', 'product_title', 'name']):
        if any(k in keys_lower for k in ['price', 'avg_price', 'reviews', 'total_ratings']):
            return "top_products"
    
    # Daily sales
    if 'daily_sales' in keys_lower:
        return "daily_sales"
    
    # Rating distribution
    if 'rating' in keys_lower and 'count' in keys_lower:
        if not any(k in keys_lower for k in ['title', 'product_title', 'asin']):
            return "rating_distribution"
    
    # Sentiment
    if 'sentiment' in keys_lower and 'count' in keys_lower:
        return "sentiment_distribution"
    
    # Category distribution
    if any(k in keys_lower for k in ['category', 'category_name']):
        if 'count' in keys_lower:
            if not any(k in keys_lower for k in ['title', 'product_title', 'price']):
                return "category_distribution"
    
    return "generic"


def generate_nlp_summary(data: list, chart_type: str, question: str, source: str) -> str:
    """Generate natural language summary using NLP approach"""
    
    # Prepare structured data narrative
    if chart_type == "top_products":
        data_narrative = create_product_narrative(data, source)
        analysis_focus = "product recommendations and market insights"
        
    elif chart_type == "category_distribution":
        data_narrative = create_category_narrative(data, source)
        analysis_focus = "category trends and market distribution"
        
    elif chart_type == "rating_distribution":
        data_narrative = create_rating_narrative(data, source)
        analysis_focus = "quality assessment and customer satisfaction"
        
    elif chart_type == "sentiment_distribution":
        data_narrative = create_sentiment_narrative(data, source)
        analysis_focus = "customer sentiment and feedback patterns"
        
    elif chart_type == "daily_sales":
        data_narrative = create_sales_narrative(data, source)
        analysis_focus = "sales performance and top sellers"
        
    else:
        data_narrative = f"{len(data)} data points from {source}"
        analysis_focus = "general patterns"
    
    # Create conversational NLP prompt
    prompt = f"""You are having a conversation with someone exploring {source} data. They asked: "{question}"

Here's what you're looking at:
{data_narrative}

Your task: Respond naturally as if you're chatting with a friend who asked about this data. 

Guidelines:
- Write 2-3 short sentences (like you're texting)
- Be conversational: "Looking at this...", "What stands out is...", "I'd recommend..."
- Mention specific numbers/products to be helpful
- Sound enthusiastic about interesting findings
- NO bullet points, NO formal structure, just natural speech

Think about {analysis_focus} and respond conversationally:"""

    try:
        result = subprocess.run(
            ["ollama", "run", "mistral"],
            input=prompt,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore",
            timeout=30
        )

        raw_output = (result.stdout or result.stderr or "").strip()
        
        # Clean AI output
        clean_output = (
            raw_output
            .replace("<|MODEL_RESPONSE|>", "")
            .replace("</s>", "")
            .replace("```", "")
            .replace("Answer:", "")
            .replace("Response:", "")
            .strip()
        )
        
        # Take first paragraph or first 2-3 sentences
        sentences = []
        for line in clean_output.split('\n'):
            line = line.strip()
            if line and not line.startswith('#') and not line.startswith('*'):
                # Split by sentence endings
                for sentence in line.replace('! ', '!|').replace('. ', '.|').replace('? ', '?|').split('|'):
                    s = sentence.strip()
                    if s and len(s) > 15:
                        sentences.append(s)
                    if len(sentences) >= 3:
                        break
            if len(sentences) >= 3:
                break
        
        if len(sentences) >= 2:
            # Join 2-3 sentences naturally
            response = ' '.join(sentences[:3])
            # Ensure it doesn't end abruptly
            if not response[-1] in '.!?':
                response += '.'
            return response
        
        # Fallback to natural language generation
        return generate_natural_fallback(data, chart_type, source)
    
    except subprocess.TimeoutExpired:
        print("   ⏱️ AI timeout, generating natural summary")
        return generate_natural_fallback(data, chart_type, source)
    
    except Exception as e:
        print(f"   ❌ AI error: {e}")
        return generate_natural_fallback(data, chart_type, source)


def create_product_narrative(data: list, source: str) -> str:
    """Create natural narrative for products"""
    narratives = [f"Looking at the top {len(data)} {source} products:\n"]
    
    for i, item in enumerate(data[:3], 1):
        name = (item.get('product_title') or item.get('title') or item.get('name', 'Unknown'))[:60]
        price = item.get('price') or item.get('avg_price') or item.get('product_price') or 0
        rating = item.get('rating') or item.get('avg_rating') or item.get('product_star_rating') or 0
        reviews = item.get('reviews') or item.get('total_ratings') or 0
        sales = item.get('daily_sales') or item.get('sales_volume') or ''
        
        if isinstance(price, str):
            price = float(price.replace('₹', '').replace(',', '').strip()) if price else 0
        
        narrative = f"#{i}: {name} costs ₹{float(price):,.0f}, rated {rating}★ with {reviews:,} reviews"
        if sales:
            narrative += f" (selling {sales})"
        narratives.append(narrative)
    
    # Add aggregate insights
    avg_price = sum(float(p.get('price', 0) or p.get('avg_price', 0) or 0) for p in data[:3]) / min(3, len(data))
    avg_rating = sum(float(p.get('rating', 0) or p.get('avg_rating', 0) or 0) for p in data[:3]) / min(3, len(data))
    
    narratives.append(f"\nPrice range: ₹{avg_price*0.5:,.0f}-₹{avg_price*1.8:,.0f}, average rating: {avg_rating:.1f}★")
    
    return "\n".join(narratives)


def create_category_narrative(data: list, source: str) -> str:
    """Create natural narrative for categories"""
    cat_field = get_category_field(data[0])
    val_field = get_value_field(data[0])
    
    if not cat_field or not val_field:
        return f"{len(data)} {source} categories"
    
    total = sum(item.get(val_field, 0) for item in data)
    sorted_data = sorted(data, key=lambda x: x.get(val_field, 0), reverse=True)[:5]
    
    narratives = [f"{source} has {total:,} products spread across {len(data)} categories.\n"]
    
    for i, item in enumerate(sorted_data, 1):
        cat = item.get(cat_field, 'Unknown')
        count = item.get(val_field, 0)
        pct = (count / total * 100) if total > 0 else 0
        narratives.append(f"#{i} {cat}: {count:,} products ({pct:.0f}% of total)")
    
    # Add insight about distribution
    top_3_share = sum(item.get(val_field, 0) for item in sorted_data[:3]) / total * 100 if total > 0 else 0
    narratives.append(f"\nThe top 3 categories represent {top_3_share:.0f}% of all products.")
    
    return "\n".join(narratives)


def create_rating_narrative(data: list, source: str) -> str:
    """Create natural narrative for ratings"""
    total = sum(item.get('count', 0) for item in data)
    total_points = sum(float(item.get('rating', 0)) * item.get('count', 0) for item in data)
    avg_rating = total_points / total if total > 0 else 0
    
    high_rated = sum(item.get('count', 0) for item in data if float(item.get('rating', 0)) >= 4.0)
    high_pct = (high_rated / total * 100) if total > 0 else 0
    
    low_rated = sum(item.get('count', 0) for item in data if float(item.get('rating', 0)) < 3.0)
    low_pct = (low_rated / total * 100) if total > 0 else 0
    
    narratives = [
        f"{source} rating analysis across {total:,} products:",
        f"Average rating: {avg_rating:.2f}★",
        f"High quality (4★+): {high_rated:,} products ({high_pct:.0f}%)",
        f"Needs improvement (<3★): {low_rated:,} products ({low_pct:.0f}%)"
    ]
    
    # Most common rating
    most_common = max(data, key=lambda x: x.get('count', 0))
    narratives.append(f"\nMost products are rated {most_common.get('rating')}★ ({most_common.get('count'):,} products)")
    
    return "\n".join(narratives)


def create_sentiment_narrative(data: list, source: str) -> str:
    """Create natural narrative for sentiment"""
    sentiment_map = {str(item.get('sentiment', '')).lower(): item.get('count', 0) for item in data}
    total = sum(sentiment_map.values())
    
    positive = sentiment_map.get('positive', 0)
    negative = sentiment_map.get('negative', 0)
    neutral = sentiment_map.get('neutral', 0)
    
    pos_pct = (positive / total * 100) if total > 0 else 0
    neg_pct = (negative / total * 100) if total > 0 else 0
    
    narratives = [
        f"Customer sentiment analysis for {total:,} {source} products:",
        f"😊 Positive: {positive:,} ({pos_pct:.0f}%)",
        f"😐 Neutral: {neutral:,} ({(neutral/total*100) if total > 0 else 0:.0f}%)",
        f"😞 Negative: {negative:,} ({neg_pct:.0f}%)"
    ]
    
    # Overall sentiment interpretation
    if pos_pct > 70:
        narratives.append(f"\nOverall vibe: Very positive! Customers are happy.")
    elif pos_pct > 50:
        narratives.append(f"\nOverall vibe: Mostly positive with some mixed feedback.")
    else:
        narratives.append(f"\nOverall vibe: Mixed reactions, worth investigating concerns.")
    
    return "\n".join(narratives)


def create_sales_narrative(data: list, source: str) -> str:
    """Create natural narrative for sales"""
    return create_product_narrative(data, source)


def generate_natural_fallback(data: list, chart_type: str, source: str) -> str:
    """Generate natural language fallback"""
    
    if chart_type == "top_products":
        top = data[0]
        name = (top.get('product_title') or top.get('title', 'the top product'))[:50]
        reviews = top.get('reviews') or top.get('total_ratings') or 0
        rating = top.get('rating') or top.get('avg_rating') or 0
        price = top.get('price') or top.get('avg_price') or 0
        
        if isinstance(price, str):
            price = float(price.replace('₹', '').replace(',', '').strip()) if price else 0
        
        return f"Looking at the top {len(data)} {source} products, {name} really stands out with {reviews:,} reviews and a {rating}★ rating at ₹{float(price):,.0f}. The quality across this selection is solid, with most items hitting 4+ stars."
    
    elif chart_type == "category_distribution":
        cat_field = get_category_field(data[0])
        val_field = get_value_field(data[0])
        
        if cat_field and val_field:
            total = sum(item.get(val_field, 0) for item in data)
            top = max(data, key=lambda x: x.get(val_field, 0))
            top_name = top.get(cat_field, 'the leading category')
            top_pct = (top.get(val_field, 0) / total * 100) if total > 0 else 0
            
            return f"Across {total:,} {source} products in {len(data)} categories, {top_name} clearly dominates with {top_pct:.0f}% of the market. It's interesting to see how concentrated the product selection is in just a few key categories."
        else:
            return f"{source} has products spread across {len(data)} different categories. There's good variety here for shoppers."
    
    elif chart_type == "rating_distribution":
        total = sum(item.get('count', 0) for item in data)
        high = sum(item.get('count', 0) for item in data if float(item.get('rating', 0)) >= 4.0)
        pct = (high / total * 100) if total > 0 else 0
        
        total_points = sum(float(item.get('rating', 0)) * item.get('count', 0) for item in data)
        avg = total_points / total if total > 0 else 0
        
        return f"Looking at {total:,} {source} products, the quality is pretty impressive - {pct:.0f}% are rated 4 stars or higher with an average of {avg:.1f}★. That's a good sign that customers are generally satisfied with their purchases."
    
    elif chart_type == "sentiment_distribution":
        sentiment_map = {str(item.get('sentiment', '')).lower(): item.get('count', 0) for item in data}
        total = sum(sentiment_map.values())
        positive = sentiment_map.get('positive', 0)
        pos_pct = (positive / total * 100) if total > 0 else 0
        
        vibe = "really positive" if pos_pct > 70 else "mostly positive" if pos_pct > 50 else "mixed"
        return f"Customer feedback across {total:,} {source} products is {vibe} - {pos_pct:.0f}% positive sentiment. {'People seem happy with their purchases!' if pos_pct > 60 else 'There is room for improvement based on customer feedback.'}"
    
    return f"I analyzed {len(data)} {source} data points. The chart shows some interesting patterns worth exploring further!"


def get_category_field(item: dict) -> str:
    """Find category field name"""
    for key in item.keys():
        if 'category' in key.lower():
            return key
    return None


def get_value_field(item: dict) -> str:
    """Find value/count field name"""
    for key in item.keys():
        if key.lower() in ['count', 'value', 'products']:
            return key
    return None


def decimal_to_float(obj):
    """Convert Decimal to float"""
    from decimal import Decimal
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError(f"Type {type(obj)} not JSON serializable")


# @app.get("/top")
# def get_top_items(
#     table: str = Query(..., description="Choose 'flipkart' or 'rapidapi_amazon_products'"),
#     n: int = Query(10, description="Number of top items to fetch"),
#     category: Optional[str] = Query(None, description="Filter by category"),
#     min_price: Optional[float] = Query(None, description="Minimum price"),
#     max_price: Optional[float] = Query(None, description="Maximum price"),
#     min_rating: Optional[float] = Query(None, description="Minimum rating"),
#     date_range: Optional[str] = Query(None, description="Date range filter"),
#     trending_only: Optional[bool] = Query(False, description="Show only trending products"),
#     sort_by: Optional[str] = Query("sales_desc", description="Sort option"),
#     db: Session = Depends(get_db),
# ):
#     table = table.lower()

#     # ----------------------------- #
#     # 🔹 Flipkart
#     # ----------------------------- #
#     if table == "flipkart":
#         # Build WHERE clause
#         where_conditions = ["title IS NOT NULL", "rating IS NOT NULL"]
#         params = {"n": n}
        
#         if category and category != "All Categories":
#             where_conditions.append("LOWER(category) = LOWER(:category)")
#             params["category"] = category
        
#         if min_price is not None:
#             where_conditions.append("price >= :min_price")
#             params["min_price"] = min_price
        
#         if max_price is not None:
#             where_conditions.append("price <= :max_price")
#             params["max_price"] = max_price
        
#         if min_rating is not None:
#             where_conditions.append("rating >= :min_rating")
#             params["min_rating"] = min_rating
        
#         # Build ORDER BY clause
#         order_by = "reviews DESC, rating DESC"
#         if sort_by == "sales_asc":
#             order_by = "reviews ASC"
#         elif sort_by == "profit_desc":
#             order_by = "price DESC"
#         elif sort_by == "profit_asc":
#             order_by = "price ASC"
#         elif sort_by == "rating_desc":
#             order_by = "rating DESC"
#         elif sort_by == "price_desc":
#             order_by = "price DESC"
#         elif sort_by == "price_asc":
#             order_by = "price ASC"
        
#         where_clause = " AND ".join(where_conditions)
        
#         query = text(f"""
#             SELECT 
#                 id,
#                 title,
#                 category,
#                 brand,
#                 price,
#                 rating,
#                 reviews,
#                 last_updated
#             FROM flipkart
#             WHERE {where_clause}
#             ORDER BY {order_by}
#             LIMIT :n
#         """)
        
#         result = db.execute(query, params).mappings().all()
#         data = [dict(r) for r in result]
        
#         return {"table": "flipkart", "count": len(data), "data": data}

#     # ----------------------------- #
#     # 🔹 RapidAPI Amazon Products
#     # ----------------------------- #
#     elif table == "rapidapi_amazon_products":
#         # Build WHERE clause
#         where_conditions = [
#             "product_title IS NOT NULL",
#             "product_title != ''",
#             "product_star_rating_numeric IS NOT NULL",
#             "product_price_numeric IS NOT NULL"
#         ]
#         params = {"n": n}
        
#         if category and category != "All Categories":
#             where_conditions.append("LOWER(category_name) = LOWER(:category)")
#             params["category"] = category
        
#         if min_price is not None:
#             where_conditions.append("product_price_numeric >= :min_price")
#             params["min_price"] = min_price
        
#         if max_price is not None:
#             where_conditions.append("product_price_numeric <= :max_price")
#             params["max_price"] = max_price
        
#         if min_rating is not None:
#             where_conditions.append("product_star_rating_numeric >= :min_rating")
#             params["min_rating"] = min_rating
        
#         # Build ORDER BY clause
#         order_by = "reviews DESC, rating DESC"
#         if sort_by == "sales_asc":
#             order_by = "reviews ASC"
#         elif sort_by == "rating_desc":
#             order_by = "rating DESC"
#         elif sort_by == "price_desc":
#             order_by = "price DESC"
#         elif sort_by == "price_asc":
#             order_by = "price ASC"
        
#         where_clause = " AND ".join(where_conditions)
        
#         query = text(f"""
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
#             WHERE {where_clause}
#             ORDER BY {order_by}
#             LIMIT :n
#         """)
        
#         result = db.execute(query, params).mappings().all()
#         rows = [dict(r) for r in result]
        
#         # Merge duplicates by ASIN
#         merged = {}
#         for row in rows:
#             key = row["asin"] or row["product_title"].strip()
#             if key in merged:
#                 m = merged[key]
#                 m["rating"] = (m["rating"] + row["rating"]) / 2 if row["rating"] else m["rating"]
#                 m["price"] = (m["price"] + row["price"]) / 2 if row["price"] else m["price"]
#                 m["reviews"] = (m["reviews"] or 0) + (row["reviews"] or 0)
#             else:
#                 merged[key] = row
        
#         top_items = list(merged.values())[:n]
        
#         return {
#             "table": "rapidapi_amazon_products",
#             "count": len(top_items),
#             "data": top_items
#         }

#     else:
#         return {
#             "error": "Invalid table. Use 'flipkart' or 'rapidapi_amazon_products'."
#         }

@app.get("/top")
def get_top_items(
    table: str = Query(..., description="Choose 'rapidapi_flipkart_products' or 'rapidapi_amazon_products'"),
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
    # 🔹 RapidAPI Flipkart Products
    # ----------------------------- #
    if table == "rapidapi_flipkart_products":
        # Build WHERE clause
        where_conditions = [
            "product_title IS NOT NULL",
            "product_title != ''",
            "product_star_rating IS NOT NULL",
            "product_price IS NOT NULL"
        ]
        params = {"n": n}
        
        if category and category != "All Categories":
            where_conditions.append("LOWER(category_name) = LOWER(:category)")
            params["category"] = category
        
        if min_price is not None:
            where_conditions.append("product_price >= :min_price")
            params["min_price"] = min_price
        
        if max_price is not None:
            where_conditions.append("product_price <= :max_price")
            params["max_price"] = max_price
        
        if min_rating is not None:
            where_conditions.append("product_star_rating >= :min_rating")
            params["min_rating"] = min_rating
        
        # Build ORDER BY clause
        order_by = "product_review_count DESC, product_star_rating DESC"
        if sort_by == "sales_asc":
            order_by = "sales_volume ASC"
        elif sort_by == "sales_desc":
            order_by = "sales_volume DESC"
        elif sort_by == "profit_desc":
            order_by = "product_price DESC"
        elif sort_by == "profit_asc":
            order_by = "product_price ASC"
        elif sort_by == "rating_desc":
            order_by = "product_star_rating DESC"
        elif sort_by == "price_desc":
            order_by = "product_price DESC"
        elif sort_by == "price_asc":
            order_by = "product_price ASC"
        
        where_clause = " AND ".join(where_conditions)
        
        query = text(f"""
            SELECT 
                id,
                pid,
                product_title,
                category_name,
                brand,
                product_url,
                product_photo,
                product_price,
                product_mrp,
                product_star_rating AS rating,
                product_rating_count,
                product_review_count AS reviews,
                sales_volume,
                estimated_sales,
                stock_status,
                avg_price,
                min_price,
                max_price,
                updated_at
            FROM rapidapi_flipkart_products
            WHERE {where_clause}
            ORDER BY {order_by}
            LIMIT :n
        """)
        
        result = db.execute(query, params).mappings().all()
        rows = [dict(r) for r in result]
        
        # Merge duplicates by PID (similar to ASIN logic)
        merged = {}
        for row in rows:
            key = row["pid"] or row["product_title"].strip()
            if key in merged:
                m = merged[key]
                m["rating"] = (m["rating"] + row["rating"]) / 2 if row["rating"] else m["rating"]
                m["product_price"] = (m["product_price"] + row["product_price"]) / 2 if row["product_price"] else m["product_price"]
                m["reviews"] = (m["reviews"] or 0) + (row["reviews"] or 0)
            else:
                merged[key] = row
        
        top_items = list(merged.values())[:n]
        
        return {
            "table": "rapidapi_flipkart_products",
            "count": len(top_items),
            "data": top_items
        }

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
            "error": "Invalid table. Use 'rapidapi_flipkart_products' or 'rapidapi_amazon_products'."
        }

@app.get("/forecast_all_products")
def forecast_all_products(n_forecast_days: int = Query(30, description="Days to forecast"),
                          db: Session = Depends(get_db)):
    forecast_list = crud.get_forecast_all_products(db, n_forecast_days)
    return forecast_list

# Replace your /notifications endpoint with this fixed version

# @app.get("/notifications")
# def get_notifications(
#     table: str = Query("flipkart", description="Choose 'flipkart' or 'amazon_reviews'"),
#     limit: int = Query(5, description="Number of recent notifications"),
#     db: Session = Depends(get_db),
# ):
#     table = table.lower()

#     try:
#         if table == "flipkart":
#             query = text(f"""
#                 SELECT id, title AS message, category, price
#                 FROM flipkart
#                 ORDER BY id DESC
#                 LIMIT {limit}
#             """)
#             rows = db.execute(query).fetchall()
#             data = [
#                 {
#                     "id": row.id,
#                     "message": f"New product added: {row.message[:50]}... (₹{row.price:.2f})",
#                     "time": "Just now",
#                 }
#                 for row in rows
#             ]
            
#         elif table == "amazon_reviews":
#             # ✅ FIXED: Use correct columns from rapidapi_amazon_products table
#             query = text(f"""
#                 SELECT 
#                     product_title, 
#                     sales_volume, 
#                     product_num_ratings,
#                     product_star_rating_numeric
#                 FROM rapidapi_amazon_products
#                 WHERE product_title IS NOT NULL
#                   AND sales_volume IS NOT NULL
#                 ORDER BY product_num_ratings DESC
#                 LIMIT {limit}
#             """)
#             rows = db.execute(query).fetchall()
            
#             data = [
#                 {
#                     "id": i + 1,
#                     "message": f"Trending: {row.product_title[:60]}... ({row.sales_volume} sales)",
#                     "time": f"{row.product_num_ratings} ratings · {row.product_star_rating_numeric}★",
#                 }
#                 for i, row in enumerate(rows)
#             ]
            
#         else:
#             return {"error": "Invalid table. Use 'flipkart' or 'amazon_reviews'."}

#         return {"table": table, "count": len(data), "data": data}
        
#     except Exception as e:
#         print(f"❌ Notification Error: {str(e)}")
#         return {
#             "table": table, 
#             "count": 0, 
#             "data": [],
#             "error": str(e)
#         }

@app.get("/notifications")
def get_notifications(
    table: str = Query("rapidapi_flipkart_products", description="Choose 'rapidapi_flipkart_products' or 'rapidapi_amazon_products'"),
    limit: int = Query(5, description="Number of recent notifications"),
    db: Session = Depends(get_db),
):
    table = table.lower()

    try:
        if table == "flipkart":
            query = text(f"""
                SELECT id, product_title AS message, category_name, product_price, sales_volume, product_rating_count
                FROM rapidapi_flipkart_products
                WHERE product_title IS NOT NULL
                ORDER BY product_rating_count DESC
                LIMIT {limit}
            """)
            rows = db.execute(query).fetchall()
            data = [
                {
                    "id": row.id,
                    "message": f"Trending: {row.message[:60]}... ({row.sales_volume or 'N/A'} sales)",
                    "time": f"{row.product_rating_count or 0} ratings · ₹{row.product_price:.2f}",
                }
                for row in rows
            ]
            
        elif table == "amazon":
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
            return {"error": "Invalid table. Use 'rapidapi_flipkart_products' or 'rapidapi_amazon_products'."}

        return {"table": table, "count": len(data), "data": data}
        
    except Exception as e:
        print(f"❌ Notification Error: {str(e)}")
        return {
            "table": table, 
            "count": 0, 
            "data": [],
            "error": str(e)
        }

# @app.get("/category/products/{category_name}")
# def get_category_products(
#     category_name: str,
#     source: str,  # must be 'amazon' or 'flipkart'
#     limit: Optional[int] = None,
#     offset: int = 0,
#     db: Session = Depends(get_db)
# ):
#     category_name = category_name.strip().lower()

#     # ✅ Flipkart Query (min_price and max_price are returned as NULL)
#     flipkart_query = """
#         SELECT 
#             title AS product_name,
#             ROUND(AVG(price), 2) AS avg_price,
#             NULL AS min_price,
#             NULL AS max_price,
#             SUM(reviews) AS total_reviews,
#             ROUND(AVG(rating), 2) AS avg_rating,
#             'Flipkart' AS source
#         FROM flipkart
#         WHERE LOWER(category) = LOWER(:category_name)
#           AND title IS NOT NULL
#           AND rating IS NOT NULL
#           AND reviews IS NOT NULL
#         GROUP BY title
#         ORDER BY total_reviews DESC
#         LIMIT :limit OFFSET :offset
#     """

#     # ✅ Amazon Query (uses your real min_price and max_price columns)
#     amazon_query = """
#         SELECT 
#             product_title AS product_name,
#             ROUND(AVG(product_price_numeric), 2) AS avg_price,
#             ROUND(AVG(min_price), 2) AS min_price,
#             ROUND(AVG(max_price), 2) AS max_price,
#             SUM(product_num_ratings) AS total_reviews,
#             ROUND(AVG(product_star_rating_numeric), 2) AS avg_rating,
#             'Amazon' AS source
#         FROM "rapidapi_amazon_products"
#         WHERE LOWER(category_name) = LOWER(:category_name)
#           AND product_title IS NOT NULL
#           AND min_price IS NOT NULL
#           AND max_price IS NOT NULL
#           AND product_star_rating_numeric IS NOT NULL
#           AND product_num_ratings IS NOT NULL
#         GROUP BY product_title
#         ORDER BY total_reviews DESC
#         LIMIT :limit OFFSET :offset
#     """

#     # ✅ Select Query based on Source
#     if source.lower() == "flipkart":
#         query = flipkart_query
#     elif source.lower() == "amazon":
#         query = amazon_query
#     else:
#         raise HTTPException(
#             status_code=400,
#             detail="Invalid source. Must be either 'amazon' or 'flipkart'."
#         )

#     # ✅ Execute Query
#     try:
#         rows = db.execute(
#             text(query),
#             {"category_name": category_name, "limit": limit, "offset": offset}
#         ).fetchall()
#     except Exception as e:
#         print(f"❌ SQL Error: {e}")
#         raise HTTPException(status_code=500, detail=str(e))

#     products = [dict(row._mapping) for row in rows]

#     # ✅ Response
#     return {
#         "category": category_name,
#         "source": source,
#         "total_products": len(products),
#         "products": products
#     }
@app.get("/category/products/{category_name}")
def get_category_products(
    category_name: str,
    source: str,  # must be 'amazon' or 'flipkart'
    limit: Optional[int] = None,
    offset: int = 0,
    db: Session = Depends(get_db)
):
    category_name = category_name.strip().lower()

    # ✅ Flipkart Query (using rapidapi_flipkart_products)
    flipkart_query = """
        SELECT 
            product_title AS product_name,
            ROUND(AVG(product_price), 2) AS avg_price,
            ROUND(AVG(min_price), 2) AS min_price,
            ROUND(AVG(max_price), 2) AS max_price,
            SUM(product_review_count) AS total_reviews,
            ROUND(AVG(product_star_rating), 2) AS avg_rating,
            'Flipkart' AS source
        FROM rapidapi_flipkart_products
        WHERE LOWER(category_name) = LOWER(:category_name)
          AND product_title IS NOT NULL
          AND product_star_rating IS NOT NULL
          AND product_review_count IS NOT NULL
        GROUP BY product_title
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
        FROM rapidapi_amazon_products
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

# @app.get("/product/{product_name:path}")
# def get_product_details(product_name: str, db: Session = Depends(get_db)):

#     clean_name = product_name.strip().strip('"').strip("'").strip()

#     # -----------------------------------------------------------
#     # 🔍 1. Try Flipkart
#     # -----------------------------------------------------------
#     try:
#         flipkart_query = text("""
#             SELECT
#                 title AS product_name,
#                 image_url,
#                 ROUND(AVG(price), 2) AS avg_price,
#                 ROUND(AVG(rating), 2) AS avg_rating,
#                 SUM(reviews) AS total_reviews
#             FROM flipkart
#             WHERE LOWER(title) ILIKE LOWER(:product_name)
#             GROUP BY title, image_url
#             ORDER BY SUM(reviews) DESC
#             LIMIT 1
#         """)

#         result = db.execute(
#             flipkart_query,
#             {"product_name": f"%{clean_name}%"}
#         ).fetchone()

#         if result:
#             return {
#                 "product_name": result.product_name,
#                 "product_id": None,
#                 "image": result.image_url,   # 👈 Added image
#                 "avg_price": float(result.avg_price) if result.avg_price else None,
#                 "min_price": None,
#                 "max_price": None,
#                 "avg_rating": float(result.avg_rating) if result.avg_rating else None,
#                 "total_reviews": int(result.total_reviews) if result.total_reviews else None,
#                 "source": "flipkart"
#             }

#     except Exception as e:
#         print("Flipkart Query Error:", str(e))

#     # -----------------------------------------------------------
#     # 🔍 2. Try Amazon (rapidapi_amazon_products)
#     # -----------------------------------------------------------
#     try:
#         amazon_query = text("""
#             SELECT
#                 product_title AS product_name,
#                 asin AS product_id,
#                 product_photo,
#                 ROUND(AVG(product_star_rating_numeric), 2) AS avg_rating,
#                 SUM(product_num_ratings) AS total_reviews,
#                 ROUND(AVG(avg_price), 2) AS avg_price,
#                 ROUND(AVG(min_price), 2) AS min_price,
#                 ROUND(AVG(max_price), 2) AS max_price
#             FROM rapidapi_amazon_products
#             WHERE product_title ILIKE :product_name
#             GROUP BY product_title, asin, product_photo
#             ORDER BY SUM(product_num_ratings) DESC
#             LIMIT 1
#         """)

#         result = db.execute(
#             amazon_query,
#             {"product_name": f"%{clean_name}%"}
#         ).fetchone()

#         if result:
#             return {
#                 "product_name": result.product_name,
#                 "product_id": result.product_id,
#                 "image": result.product_photo,   # 👈 Added image
#                 "avg_price": float(result.avg_price) if result.avg_price else None,
#                 "min_price": float(result.min_price) if result.min_price else None,
#                 "max_price": float(result.max_price) if result.max_price else None,
#                 "avg_rating": float(result.avg_rating) if result.avg_rating else None,
#                 "total_reviews": int(result.total_reviews) if result.total_reviews else None,
#                 "source": "amazon"
#             }

#     except Exception as e:
#         print("Amazon Query Error:", str(e))

#     raise HTTPException(status_code=404, detail="Product not found")

@app.get("/product/{product_name:path}")
def get_product_details(product_name: str, db: Session = Depends(get_db)):

    clean_name = product_name.strip().strip('"').strip("'").strip()

    # -----------------------------------------------------------
    # 🔍 1. Try Flipkart (rapidapi_flipkart_products)
    # -----------------------------------------------------------
    try:
        flipkart_query = text("""
            SELECT
                product_title AS product_name,
                product_photo,
                ROUND(AVG(product_price), 2) AS avg_price,
                ROUND(AVG(min_price), 2) AS min_price,
                ROUND(AVG(max_price), 2) AS max_price,
                ROUND(AVG(product_star_rating), 2) AS avg_rating,
                SUM(product_review_count) AS total_reviews
            FROM rapidapi_flipkart_products
            WHERE LOWER(product_title) ILIKE LOWER(:product_name)
            GROUP BY product_title, product_photo
            ORDER BY SUM(product_review_count) DESC
            LIMIT 1
        """)

        result = db.execute(
            flipkart_query,
            {"product_name": f"%{clean_name}%"}
        ).fetchone()

        if result:
            return {
                "product_name": result.product_name,
                "product_id": None,
                "image": result.product_photo,
                "avg_price": float(result.avg_price) if result.avg_price else None,
                "min_price": float(result.min_price) if result.min_price else None,
                "max_price": float(result.max_price) if result.max_price else None,
                "avg_rating": float(result.avg_rating) if result.avg_rating else None,
                "total_reviews": int(result.total_reviews) if result.total_reviews else None,
                "source": "flipkart"
            }

    except Exception as e:
        print("Flipkart Query Error:", str(e))

    # -----------------------------------------------------------
    # 🔍 2. Try Amazon (rapidapi_amazon_products)
    # -----------------------------------------------------------
    try:
        amazon_query = text("""
            SELECT
                product_title AS product_name,
                asin AS product_id,
                product_photo,
                ROUND(AVG(product_star_rating_numeric), 2) AS avg_rating,
                SUM(product_num_ratings) AS total_reviews,
                ROUND(AVG(avg_price), 2) AS avg_price,
                ROUND(AVG(min_price), 2) AS min_price,
                ROUND(AVG(max_price), 2) AS max_price
            FROM rapidapi_amazon_products
            WHERE product_title ILIKE :product_name
            GROUP BY product_title, asin, product_photo
            ORDER BY SUM(product_num_ratings) DESC
            LIMIT 1
        """)

        result = db.execute(
            amazon_query,
            {"product_name": f"%{clean_name}%"}
        ).fetchone()

        if result:
            return {
                "product_name": result.product_name,
                "product_id": result.product_id,
                "image": result.product_photo,
                "avg_price": float(result.avg_price) if result.avg_price else None,
                "min_price": float(result.min_price) if result.min_price else None,
                "max_price": float(result.max_price) if result.max_price else None,
                "avg_rating": float(result.avg_rating) if result.avg_rating else None,
                "total_reviews": int(result.total_reviews) if result.total_reviews else None,
                "source": "amazon"
            }

    except Exception as e:
        print("Amazon Query Error:", str(e))

    raise HTTPException(status_code=404, detail="Product not found")

@app.get("/categories")
def get_categories(table: str = Query("flipkart"), db: Session = Depends(get_db)):
    """
    Return a list of distinct categories for a given table
    """
    table = table.lower()
    if table == "flipkart":
        return crud.get_flipkart_categories(db)  # Should return list of dicts with 'category' key
    elif table == "amazon":
        return crud.get_amazon_categories(db)
    else:
        return {"error": "Invalid table"}
    

# @app.get("/flipkart/categories")
# def get_flipkart_categories_distribution(
#     category: Optional[str] = Query(None),
#     min_price: Optional[float] = Query(None),
#     max_price: Optional[float] = Query(None),
#     min_rating: Optional[float] = Query(None),
#     db: Session = Depends(get_db)
# ):
#     # Build WHERE conditions
#     where_conditions = ["category IS NOT NULL"]
#     params = {}
    
#     if category and category != "All Categories":
#         where_conditions.append("LOWER(category) = LOWER(:category)")
#         params["category"] = category
    
#     if min_price is not None:
#         where_conditions.append("price >= :min_price")
#         params["min_price"] = min_price
    
#     if max_price is not None:
#         where_conditions.append("price <= :max_price")
#         params["max_price"] = max_price
    
#     if min_rating is not None:
#         where_conditions.append("rating >= :min_rating")
#         params["min_rating"] = min_rating
    
#     where_clause = " AND ".join(where_conditions)
    
#     query = text(f"""
#         SELECT 
#             category,
#             COUNT(*) as count
#         FROM flipkart
#         WHERE {where_clause}
#         GROUP BY category
#         ORDER BY count DESC
#     """)
    
#     rows = db.execute(query, params).fetchall()
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
    where_conditions = ["category_name IS NOT NULL"]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    query = text(f"""
        SELECT 
            category_name,
            COUNT(*) as count
        FROM rapidapi_flipkart_products
        WHERE {where_clause}
        GROUP BY category_name
        ORDER BY count DESC
    """)
    
    rows = db.execute(query, params).fetchall()
    categories = [{"category": row.category_name, "count": row.count} for row in rows]
    
    return categories

# @app.get("/lstm_forecast/flipkart/{product_name}")
# def forecast_flipkart(product_name: str):
#     query = text('SELECT last_updated, price FROM flipkart WHERE title ILIKE :title ORDER BY last_updated')
#     df = pd.read_sql_query(query, engine, params={"title": f"%{product_name}%"})

#     if df.empty:
#         return {"error": "No data found for this product"}

#     # Convert date column to datetime
#     df["last_updated"] = pd.to_datetime(df["last_updated"], errors="coerce")
#     last_date = df["last_updated"].max()

#     result = lstm_forecast(df["price"], last_date)
#     return result

# def parse_sales_volume(value):
#     if value is None:
#         return np.nan
#     value = str(value).lower()
#     try:
#         if "k" in value:
#             return float(value.replace("k", "").replace("+", "").strip()) * 1000
#         elif "m" in value:
#             return float(value.replace("m", "").replace("+", "").strip()) * 1000000
#         else:
#             digits = ''.join([c for c in value if c.isdigit()])
#             return float(digits) if digits else np.nan
#     except:
#         return np.nan

@app.get("/lstm_forecast/flipkart/{product_name}")
def forecast_flipkart(product_name: str):
    """Forecast Flipkart product sales using LSTM"""
    clean_product_name = product_name.strip().strip('"')
    
    # Try by PID first
    query = text('''
        SELECT created_at, sales_volume, estimated_sales
        FROM rapidapi_flipkart_products 
        WHERE pid = :product_name 
        ORDER BY created_at
    ''')
    df = pd.read_sql_query(query, engine, params={"product_name": clean_product_name})
    
    # Try by product title if PID search fails
    if df.empty:
        query = text('''
            SELECT created_at, sales_volume, estimated_sales
            FROM rapidapi_flipkart_products 
            WHERE product_title ILIKE :title 
            ORDER BY created_at
        ''')
        df = pd.read_sql_query(query, engine, params={"title": f"%{clean_product_name}%"})
    
    # Generate dummy data if no records found
    if df.empty:
        today = pd.Timestamp.today()
        periods = 30
        df = pd.DataFrame({
            "created_at": pd.date_range(end=today, periods=periods),
            "sales_volume": [random.randint(500, 5000) for _ in range(periods)]
        })
    else:
        # Parse sales_volume (handles "10K+", "5M+" format)
        df["sales_volume"] = df["sales_volume"].apply(parse_sales_volume)
        
        # If sales_volume is null, try estimated_sales
        if df["sales_volume"].isna().all() and "estimated_sales" in df.columns:
            df["sales_volume"] = df["estimated_sales"].apply(parse_sales_volume)
        
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
    
    # Add historical sales data
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

# @app.get("/rapidapi/flipkart/top-sales")
# def get_flipkart_top_sales_products(
#     limit: int = 10,
#     category: Optional[str] = Query(None),
#     min_price: Optional[float] = Query(None),
#     max_price: Optional[float] = Query(None),
#     min_rating: Optional[float] = Query(None),
#     db: Session = Depends(get_db)
# ):
#     # Build WHERE conditions for the CTE
#     where_conditions = [
#         "sales_volume IS NOT NULL",
#         "product_star_rating IS NOT NULL",
#         "product_price IS NOT NULL",
#         "product_review_count IS NOT NULL",
#         "product_review_count > 0"
#     ]
#     params = {"limit": limit}
    
#     if category and category != "All Categories":
#         where_conditions.append("LOWER(category_name) = LOWER(:category)")
#         params["category"] = category
    
#     if min_price is not None:
#         where_conditions.append("product_price >= :min_price")
#         params["min_price"] = min_price
    
#     if max_price is not None:
#         where_conditions.append("product_price <= :max_price")
#         params["max_price"] = max_price
    
#     if min_rating is not None:
#         where_conditions.append("product_star_rating >= :min_rating")
#         params["min_rating"] = min_rating
    
#     where_clause = " AND ".join(where_conditions)
    
#     try:
#         query = text(f"""
#         WITH sales_data AS (
#             SELECT 
#                 product_title,
#                 category_name,
#                 product_url,
#                 product_photo,
#                 product_price,
#                 product_mrp,
#                 product_star_rating,
#                 product_review_count,
#                 sales_volume,
#                 estimated_sales,
#                 brand,
#                 sales_volume as daily_sales
#             FROM rapidapi_flipkart_products
#             WHERE {where_clause}
#         )
#         SELECT 
#             product_title,
#             STRING_AGG(DISTINCT category_name, ', ') as categories,
#             MAX(product_url) as product_url,
#             MAX(product_photo) as product_photo,
#             MAX(brand) as brand,
#             ROUND(CAST(AVG(product_price) AS NUMERIC), 2) as avg_price,
#             ROUND(CAST(AVG(product_mrp) AS NUMERIC), 2) as avg_mrp,
#             ROUND(CAST(AVG(product_star_rating) AS NUMERIC), 2) as avg_rating,
#             SUM(product_review_count) as total_reviews,
#             MAX(sales_volume) as sales_volume,
#             MAX(estimated_sales) as estimated_sales,
#             ROUND(CAST(MAX(estimated_sales) AS NUMERIC), 0) as total_daily_sales,
#             COUNT(*) as variant_count
#         FROM sales_data
#         WHERE daily_sales IS NOT NULL
#         GROUP BY product_title
#         ORDER BY total_daily_sales DESC NULLS LAST
#         LIMIT :limit
#         """)
        
#         rows = db.execute(query, params).fetchall()
        
#         products = []
#         for row in rows:
#             product = dict(row._mapping)
#             product['daily_sales'] = product.pop('total_daily_sales')
#             product['category_name'] = product.pop('categories')
#             product['product_price_display'] = f"₹{product['avg_price']:.2f}" if product['avg_price'] else None
#             product['product_star_rating'] = product['avg_rating']
            
#             if product['variant_count'] > 1:
#                 product['is_merged'] = True
#                 product['merged_info'] = f"{product['variant_count']} variants combined"
#             else:
#                 product['is_merged'] = False
            
#             products.append(product)
        
#         return {"data": products, "count": len(products)}
        
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error fetching Flipkart top sales products: {str(e)}")

@app.get("/rapidapi/flipkart/top-sales")
def get_flipkart_top_sales_products(
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
        "product_star_rating IS NOT NULL",
        "product_price IS NOT NULL",
        "product_review_count IS NOT NULL",
        "product_review_count > 0"
    ]
    params = {"limit": limit}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
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
                product_price,
                product_mrp,
                product_star_rating,
                product_review_count,
                sales_volume,
                estimated_sales,
                brand,
                CASE 
                    WHEN sales_volume LIKE '%M+%' THEN 
                        (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000000) / 30
                    WHEN sales_volume LIKE '%K+%' THEN 
                        (CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) * 1000) / 30
                    ELSE 
                        CAST(REGEXP_REPLACE(sales_volume, '[^0-9.]', '', 'g') AS FLOAT) / 30
                END as daily_sales
            FROM rapidapi_flipkart_products
            WHERE {where_clause}
        )
        SELECT 
            product_title,
            STRING_AGG(DISTINCT category_name, ', ') as categories,
            MAX(product_url) as product_url,
            MAX(product_photo) as product_photo,
            MAX(brand) as brand,
            ROUND(CAST(AVG(product_price) AS NUMERIC), 2) as avg_price,
            ROUND(CAST(AVG(product_mrp) AS NUMERIC), 2) as avg_mrp,
            ROUND(CAST(AVG(product_star_rating) AS NUMERIC), 2) as avg_rating,
            SUM(product_review_count) as total_reviews,
            MAX(sales_volume) as sales_volume,
            MAX(estimated_sales) as estimated_sales,
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
            product['product_price_display'] = f"₹{product['avg_price']:.2f}" if product['avg_price'] else None
            product['product_star_rating'] = product['avg_rating']
            
            if product['variant_count'] > 1:
                product['is_merged'] = True
                product['merged_info'] = f"{product['variant_count']} variants combined"
            else:
                product['is_merged'] = False
            
            products.append(product)
        
        return {"data": products, "count": len(products)}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching Flipkart top sales products: {str(e)}")

@app.get("/rapidapi_flipkart_products/categories")
def get_flipkart_categories(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions
    where_conditions = [
        "category_name IS NOT NULL",
        "product_star_rating IS NOT NULL",
        "product_title IS NOT NULL"
    ]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    try:
        query = text(f"""
            SELECT category_name, COUNT(*) as count
            FROM rapidapi_flipkart_products
            WHERE {where_clause}
            GROUP BY category_name
            ORDER BY count DESC
        """)
        result = db.execute(query, params).mappings().all()
        return [dict(row) for row in result]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/rapidapi_flipkart_products/ratings")
def get_flipkart_ratings(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions
    where_conditions = [
        "product_star_rating IS NOT NULL",
        "product_star_rating > 0",
        "product_title IS NOT NULL",
        "product_review_count IS NOT NULL"
    ]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    try:
        query = text(f"""
            SELECT 
                CAST(product_star_rating AS FLOAT) AS rating,
                COUNT(*) AS count,
                SUM(product_review_count) AS total_user_reviews
            FROM rapidapi_flipkart_products
            WHERE {where_clause}
            GROUP BY product_star_rating
            ORDER BY product_star_rating DESC
        """)
        result = db.execute(query, params).mappings().all()
        return [dict(row) for row in result]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/rapidapi_flipkart_products/sentiment")
def get_flipkart_sentiment(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    # Build WHERE conditions
    where_conditions = ["product_star_rating IS NOT NULL"]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params["category"] = category
    
    if min_price is not None:
        where_conditions.append("product_price >= :min_price")
        params["min_price"] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price <= :max_price")
        params["max_price"] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params["min_rating"] = min_rating
    
    where_clause = " AND ".join(where_conditions)
    
    try:
        query = text(f"""
            SELECT
                CASE
                    WHEN product_star_rating >= 4 THEN 'positive'
                    WHEN product_star_rating = 3 THEN 'neutral'
                    ELSE 'negative'
                END as sentiment,
                COUNT(*) as count
            FROM rapidapi_flipkart_products
            WHERE {where_clause}
            GROUP BY sentiment
        """)
        result = db.execute(query, params).mappings().all()
        return [dict(row) for row in result]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/rapidapi_flipkart_products/top")
def get_flipkart_top_products(n: int = 10, db: Session = Depends(get_db)):
    try:
        query = text(f"""
            SELECT pid, product_title, product_price, 
                   product_star_rating, product_review_count, category_name, brand
            FROM rapidapi_flipkart_products
            WHERE product_title IS NOT NULL 
              AND product_price IS NOT NULL 
              AND product_star_rating IS NOT NULL
            ORDER BY product_star_rating DESC, product_review_count DESC
            LIMIT :n
        """)
        result = db.execute(query, {"n": n}).mappings().all()
        return {"data": [dict(row) for row in result]}
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
 
# Helper function (keep this as is)
def parse_sales_volume(sales_text: str) -> float:
    """
    Convert sales_volume text like '10K+' or '2M+' into a numeric value
    """
    if not sales_text:
        return 0
    match = re.search(r'([\d,.]+)([KM]?)', sales_text.replace(',', ''))
    if not match:
        return 0
    number, suffix = match.groups()
    number = float(number)
    if suffix == 'K':
        number *= 1_000
    elif suffix == 'M':
        number *= 1_000_000
    return number


# 1️⃣ Price Distribution per Category (WITH FILTERS - SECURE)
@app.get("/rapidapi_amazon_products/price_distribution")
def price_distribution(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    date_range: Optional[str] = Query(None),
    trending_only: Optional[bool] = Query(False),
    db: Session = Depends(get_db)
):
    # Build WHERE clause with parameterized queries
    where_conditions = ["product_price_numeric IS NOT NULL"]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("category_name = :category")
        params['category'] = category
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params['min_price'] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params['max_price'] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params['min_rating'] = min_rating
    
    if date_range and date_range != "all":
        days_map = {"7d": 7, "30d": 30, "90d": 90, "180d": 180, "365d": 365}
        if date_range in days_map:
            where_conditions.append(f"created_at >= NOW() - INTERVAL '{days_map[date_range]} days'")
    
    if trending_only:
        where_conditions.append("(is_best_seller = TRUE OR is_amazon_choice = TRUE)")
    
    where_clause = " AND ".join(where_conditions)
    
    query = text(f"""
        SELECT category_name AS category, product_price_numeric AS price, COUNT(*) AS count
        FROM rapidapi_amazon_products
        WHERE {where_clause}
        GROUP BY category_name, product_price_numeric
        ORDER BY category_name, product_price_numeric
    """)
    
    result = db.execute(query, params)
    data = []
    for row in result:
        data.append({
            "category": row.category,
            "price": float(row.price),
            "count": int(row.count)
        })
    return {"data": data}


# 2️⃣ Sales Volume vs Price (WITH FILTERS - SECURE)
@app.get("/rapidapi_amazon_products/sales_vs_price_daily")
def sales_vs_price_daily(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    date_range: Optional[str] = Query(None),
    trending_only: Optional[bool] = Query(False),
    db: Session = Depends(get_db)
):
    where_conditions = ["product_price_numeric IS NOT NULL", "sales_volume IS NOT NULL"]
    params = {}
    
    if category and category != "All Categories":
        where_conditions.append("category_name = :category")
        params['category'] = category
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params['min_price'] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params['max_price'] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params['min_rating'] = min_rating
    
    if date_range and date_range != "all":
        days_map = {"7d": 7, "30d": 30, "90d": 90, "180d": 180, "365d": 365}
        if date_range in days_map:
            where_conditions.append(f"created_at >= NOW() - INTERVAL '{days_map[date_range]} days'")
    
    if trending_only:
        where_conditions.append("(is_best_seller = TRUE OR is_amazon_choice = TRUE)")
    
    where_clause = " AND ".join(where_conditions)
    
    query = text(f"""
        SELECT product_price_numeric AS price,
               sales_volume,
               created_at,
               updated_at
        FROM rapidapi_amazon_products
        WHERE {where_clause}
    """)
    
    result = db.execute(query, params)
    data = []
    for row in result:
        total_sales = parse_sales_volume(row.sales_volume)
        days = max((row.updated_at - row.created_at).days, 1)
        daily_sales = total_sales / days
        data.append({
            "price": float(row.price),
            "daily_sales": daily_sales
        })
    return {"data": data}


# 3️⃣ Best Seller / Amazon Choice Count per Category (WITH FILTERS - SECURE)
@app.get("/rapidapi_amazon_products/bestseller_count")
def bestseller_count(
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    date_range: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    where_conditions = ["(is_best_seller = TRUE OR is_amazon_choice = TRUE)"]
    params = {}
    
    # CRITICAL FIX: Check if specific category is selected
    if category and category != "All Categories":
        where_conditions.append("LOWER(category_name) = LOWER(:category)")
        params['category'] = category
        print(f"🔍 DEBUG: Filtering by category = {category}")
    else:
        print(f"🔍 DEBUG: No category filter (showing all categories)")
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params['min_price'] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params['max_price'] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params['min_rating'] = min_rating
    
    if date_range and date_range != "all":
        days_map = {"7d": 7, "30d": 30, "90d": 90, "180d": 180, "365d": 365, "1y": 365}
        if date_range in days_map:
            where_conditions.append(f"created_at >= NOW() - INTERVAL '{days_map[date_range]} days'")
    
    where_clause = " AND ".join(where_conditions)
    
    print(f"🔍 DEBUG: WHERE clause = {where_clause}")
    print(f"🔍 DEBUG: Query params = {params}")
    
    query = text(f"""
        SELECT category_name AS category, 
               COUNT(*) AS count
        FROM rapidapi_amazon_products
        WHERE {where_clause}
        GROUP BY category_name
        ORDER BY count DESC
    """)
    
    result = db.execute(query, params)
    data = []
    for row in result:
        data.append({
            "category": row.category,
            "count": int(row.count)
        })
    
    print(f"🔍 DEBUG: Results count = {len(data)}")
    print(f"🔍 DEBUG: Results = {data}")
    
    return {"data": data}


# 4️⃣ Sales Efficiency (Sales per Review) (WITH FILTERS - SECURE)
@app.get("/rapidapi_amazon_products/sales-efficiency")
def sales_efficiency(
    top_n: int = Query(10),
    category: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    date_range: Optional[str] = Query(None),
    trending_only: Optional[bool] = Query(False),
    db: Session = Depends(get_db)
):
    where_conditions = ["sales_volume IS NOT NULL"]
    params = {'top_n': top_n}
    
    if category and category != "All Categories":
        where_conditions.append("category_name = :category")
        params['category'] = category
    
    if min_price is not None:
        where_conditions.append("product_price_numeric >= :min_price")
        params['min_price'] = min_price
    
    if max_price is not None:
        where_conditions.append("product_price_numeric <= :max_price")
        params['max_price'] = max_price
    
    if min_rating is not None:
        where_conditions.append("product_star_rating >= :min_rating")
        params['min_rating'] = min_rating
    
    if date_range and date_range != "all":
        days_map = {"7d": 7, "30d": 30, "90d": 90, "180d": 180, "365d": 365}
        if date_range in days_map:
            where_conditions.append(f"created_at >= NOW() - INTERVAL '{days_map[date_range]} days'")
    
    if trending_only:
        where_conditions.append("(is_best_seller = TRUE OR is_amazon_choice = TRUE)")
    
    where_clause = " AND ".join(where_conditions)
    
    query = text(f"""
        SELECT 
            product_title,
            sales_volume,
            COALESCE(product_num_ratings, 0) AS num_ratings
        FROM rapidapi_amazon_products
        WHERE {where_clause}
        LIMIT :top_n
    """)
    
    result = db.execute(query, params)
    data = []
    for row in result:
        sales = parse_sales_volume(row.sales_volume)
        num_ratings = int(row.num_ratings)
        efficiency_score = sales / num_ratings if num_ratings else 0
        data.append({
            "product_title": row.product_title,
            "sales": sales,
            "num_ratings": num_ratings,
            "efficiency_score": efficiency_score
        })
    data.sort(key=lambda x: x["efficiency_score"], reverse=True)
    return data

class ProductTrackerRequest(BaseModel):
    product_name: str
    category: str
    source: str  # 'flipkart' or 'amazon'
    base_cost: float  # Seller's cost price

class PricingInsights(BaseModel):
    recommended_price: float
    min_price: float
    max_price: float
    profit_margin: float
    confidence: str

class SalesInsights(BaseModel):
    estimated_monthly_sales: str
    estimated_daily_sales: float
    market_demand: str

class CompetitorInsights(BaseModel):
    total_competitors: int
    avg_competitor_price: float
    avg_competitor_rating: float
    top_competitor: Optional[Dict[str, Any]]

class LocationInsight(BaseModel):
    country: str
    market_share: str
    demand_level: str

class ProductTrackerResponse(BaseModel):
    success: bool
    product_name: str
    category: str
    source: str
    pricing: PricingInsights
    sales: SalesInsights
    competition: CompetitorInsights
    location_insights: List[LocationInsight]
    ai_strategy: str
    warnings: List[str]


# ============================================
# Product Tracker Endpoint
# ============================================

# @app.post("/product-tracker/analyze", response_model=ProductTrackerResponse)
# def analyze_product_opportunity(request: ProductTrackerRequest, db: Session = Depends(get_db)):
#     """
#     AI-powered market analysis for new product listings.
#     Analyzes similar products to recommend optimal pricing, predict sales, and provide competitive insights.
#     Results are automatically saved to database for history tracking.
#     """
    
#     print(f"🔍 Analyzing market for: {request.product_name} in {request.category}")
    
#     # Get user email from request (you can get this from auth token)
#     user_email = request.dict().get('user_email', None)  # Add this to request model if needed
    
#     try:
#         # Get similar products from market
#         similar_products = get_similar_products(
#             db, 
#             request.product_name, 
#             request.category, 
#             request.source
#         )
        
#         if not similar_products or len(similar_products) == 0:
#             raise HTTPException(
#                 status_code=404, 
#                 detail=f"No similar products found in {request.category} category on {request.source}"
#             )
        
#         print(f"📊 Found {len(similar_products)} similar products")
        
#         # Analyze pricing
#         pricing_insights = analyze_pricing(similar_products, request.base_cost)
        
#         # Analyze sales potential
#         sales_insights = analyze_sales_potential(similar_products, request.source)
        
#         # Analyze competition
#         competition_insights = analyze_competition(similar_products)
        
#         # Generate location insights
#         location_insights = generate_location_insights(similar_products)
        
#         # Generate AI-powered strategy
#         ai_strategy = generate_ai_strategy(
#             pricing_insights,
#             sales_insights,
#             competition_insights,
#             request.base_cost,
#             request.product_name,
#             request.category
#         )
        
#         # Generate warnings
#         warnings = generate_warnings(pricing_insights, competition_insights, request.base_cost)
        
#         response = ProductTrackerResponse(
#             success=True,
#             product_name=request.product_name,
#             category=request.category,
#             source=request.source.capitalize(),
#             pricing=PricingInsights(**pricing_insights),
#             sales=SalesInsights(**sales_insights),
#             competition=CompetitorInsights(**competition_insights),
#             location_insights=location_insights,
#             ai_strategy=ai_strategy,
#             warnings=warnings
#         )
        
#         # ✅ SAVE TO DATABASE
#         try:
#             analysis_data = {
#                 'product_name': request.product_name,
#                 'category': request.category,
#                 'source': request.source,
#                 'base_cost': request.base_cost,
#                 'pricing': pricing_insights,
#                 'sales': sales_insights,
#                 'competition': competition_insights,
#                 'location_insights': [
#                     {
#                         'country': loc.country,
#                         'market_share': loc.market_share,
#                         'demand_level': loc.demand_level
#                     } for loc in location_insights
#                 ],
#                 'ai_strategy': ai_strategy,
#                 'warnings': warnings,
#                 'similar_products': similar_products,
#                 'success': True
#             }
            
#             saved_analysis = crud.create_tracker_analysis(db, user_email, analysis_data)
#             print(f"💾 Analysis saved to database with ID: {saved_analysis.id}")
            
#         except Exception as e:
#             print(f"⚠️ Failed to save analysis to database: {str(e)}")
#             # Don't fail the whole request if DB save fails
        
#         return response
        
#     except HTTPException:
#         raise
#     except Exception as e:
#         print(f"❌ Error in product tracker: {str(e)}")
#         import traceback
#         traceback.print_exc()
#         raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")


# # ============================================
# # Helper Functions
# # ============================================

# def get_similar_products(db: Session, product_name: str, category: str, source: str) -> List[Dict]:
#     """
#     Find similar products in the market based on category
#     """
    
#     if source.lower() == "amazon":
#         query = text("""
#             SELECT 
#                 product_title,
#                 category_name,
#                 product_price_numeric as price,
#                 product_star_rating_numeric as rating,
#                 product_num_ratings as reviews,
#                 sales_volume,
#                 country,
#                 is_best_seller,
#                 is_amazon_choice,
#                 is_prime,
#                 raw_data
#             FROM rapidapi_amazon_products
#             WHERE LOWER(category_name) = LOWER(:category)
#             AND product_title IS NOT NULL
#             AND product_price_numeric > 0
#             AND product_star_rating_numeric > 0
#             ORDER BY product_num_ratings DESC
#             LIMIT 200
#         """)
        
#         results = db.execute(query, {"category": category}).fetchall()
        
#     else:  # flipkart
#         query = text("""
#             SELECT 
#                 title as product_title,
#                 category as category_name,
#                 price,
#                 rating,
#                 reviews,
#                 brand,
#                 availability,
#                 raw_data
#             FROM flipkart
#             WHERE LOWER(category) = LOWER(:category)
#             AND title IS NOT NULL
#             AND price > 0
#             AND rating > 0
#             ORDER BY reviews DESC
#             LIMIT 200
#         """)
        
#         results = db.execute(query, {"category": category}).fetchall()
    
#     return [dict(row._mapping) for row in results]


# def analyze_pricing(products: List[Dict], base_cost: float) -> Dict:
#     """
#     Analyze pricing from similar products and recommend optimal price
#     """
#     prices = [float(p.get('price', 0)) for p in products if p.get('price', 0) > 0]
    
#     if not prices:
#         # Fallback pricing if no data
#         return {
#             'recommended_price': round(base_cost * 2.5, 2),
#             'min_price': round(base_cost * 1.8, 2),
#             'max_price': round(base_cost * 3.2, 2),
#             'profit_margin': 60.0,
#             'confidence': 'Low'
#         }
    
#     # Calculate market statistics
#     avg_price = sum(prices) / len(prices)
#     min_market = min(prices)
#     max_market = max(prices)
#     sorted_prices = sorted(prices)
#     median_price = sorted_prices[len(prices) // 2]
    
#     # Calculate quartiles for better pricing strategy
#     q1_price = sorted_prices[len(prices) // 4]
#     q3_price = sorted_prices[3 * len(prices) // 4]
    
#     # Recommended price: slightly below median for competitive advantage
#     recommended = median_price * 0.95
    
#     # Ensure profitability (minimum 30% margin)
#     min_profitable_price = base_cost * 1.3
#     if recommended < min_profitable_price:
#         recommended = min_profitable_price
    
#     # Set price range
#     min_price = max(base_cost * 1.3, q1_price * 0.9)  # At least 30% markup
#     max_price = min(q3_price * 1.1, median_price * 1.2)  # Don't overprice
    
#     # Calculate profit margin
#     profit_margin = ((recommended - base_cost) / recommended) * 100
    
#     # Determine confidence based on data quality
#     if len(prices) > 50 and profit_margin > 25:
#         confidence = "High"
#     elif len(prices) > 20 and profit_margin > 15:
#         confidence = "Medium"
#     else:
#         confidence = "Low"
    
#     return {
#         'recommended_price': round(recommended, 2),
#         'min_price': round(min_price, 2),
#         'max_price': round(max_price, 2),
#         'profit_margin': round(profit_margin, 2),
#         'confidence': confidence
#     }


# def analyze_sales_potential(products: List[Dict], source: str) -> Dict:
#     """
#     Estimate sales potential based on similar products
#     """
#     if source.lower() == "amazon":
#         # Parse sales volume from Amazon data
#         total_sales = 0
#         valid_sales_count = 0
        
#         for p in products:
#             sales_vol = p.get('sales_volume', '')
#             if sales_vol:
#                 parsed_sales = parse_sales_volume(str(sales_vol))
#                 if parsed_sales > 0:
#                     total_sales += parsed_sales
#                     valid_sales_count += 1
        
#         if valid_sales_count > 0:
#             avg_monthly_sales = total_sales / valid_sales_count
#             avg_daily_sales = avg_monthly_sales / 30
#         else:
#             # Estimate based on reviews
#             avg_reviews = sum(p.get('reviews', 0) for p in products) / len(products) if products else 0
#             avg_monthly_sales = avg_reviews * 10  # Rough estimate
#             avg_daily_sales = avg_monthly_sales / 30
#     else:
#         # Flipkart: estimate from reviews
#         avg_reviews = sum(p.get('reviews', 0) for p in products) / len(products) if products else 0
#         avg_monthly_sales = avg_reviews * 8  # Conservative estimate
#         avg_daily_sales = avg_monthly_sales / 30
    
#     # Categorize demand
#     if avg_monthly_sales > 10000:
#         demand = "High"
#         sales_range = f"{int(avg_monthly_sales * 0.7):,} - {int(avg_monthly_sales * 1.3):,}"
#     elif avg_monthly_sales > 1000:
#         demand = "Medium"
#         sales_range = f"{int(avg_monthly_sales * 0.6):,} - {int(avg_monthly_sales * 1.4):,}"
#     else:
#         demand = "Low"
#         sales_range = f"{int(avg_monthly_sales * 0.5):,} - {int(avg_monthly_sales * 1.5):,}"
    
#     return {
#         'estimated_monthly_sales': sales_range,
#         'estimated_daily_sales': round(avg_daily_sales, 2),
#         'market_demand': demand
#     }


# def analyze_competition(products: List[Dict]) -> Dict:
#     """
#     Analyze competitive landscape
#     """
#     if not products:
#         return {
#             'total_competitors': 0,
#             'avg_competitor_price': 0.0,
#             'avg_competitor_rating': 0.0,
#             'top_competitor': None
#         }
    
#     prices = [float(p.get('price', 0)) for p in products if p.get('price', 0) > 0]
#     ratings = [float(p.get('rating', 0)) for p in products if p.get('rating', 0) > 0]
    
#     avg_price = sum(prices) / len(prices) if prices else 0
#     avg_rating = sum(ratings) / len(ratings) if ratings else 0
    
#     # Find top competitor (highest reviews * rating)
#     top_competitor = None
#     max_score = 0
    
#     for p in products:
#         reviews = p.get('reviews', 0) or 0
#         rating = p.get('rating', 0) or 0
#         score = reviews * rating
        
#         if score > max_score:
#             max_score = score
#             top_competitor = {
#                 'name': str(p.get('product_title', ''))[:60],
#                 'price': float(p.get('price', 0)),
#                 'rating': float(rating),
#                 'reviews': int(reviews)
#             }
    
#     return {
#         'total_competitors': len(products),
#         'avg_competitor_price': round(avg_price, 2),
#         'avg_competitor_rating': round(avg_rating, 2),
#         'top_competitor': top_competitor
#     }


# def generate_location_insights(products: List[Dict]) -> List[LocationInsight]:
#     """
#     Generate DYNAMIC location insights using AI to analyze product patterns.
#     Since no explicit location data exists, we use AI to predict high-demand cities
#     based on product category, price points, ratings, and sales volume patterns.
#     """
    
#     if not products or len(products) == 0:
#         return []
    
#     # Gather market intelligence from products
#     category = products[0].get('category_name') or products[0].get('category', 'General')
    
#     total_sales = 0
#     total_reviews = 0
#     avg_price = 0
#     avg_rating = 0
#     premium_count = 0
#     budget_count = 0
    
#     for p in products:
#         sales_vol = p.get('sales_volume', '')
#         if sales_vol:
#             total_sales += parse_sales_volume(str(sales_vol))
        
#         reviews = p.get('reviews', 0) or p.get('product_num_ratings', 0) or 0
#         total_reviews += reviews
        
#         price = float(p.get('price', 0) or 0)
#         avg_price += price
        
#         rating = float(p.get('rating', 0) or p.get('product_star_rating_numeric', 0) or 0)
#         avg_rating += rating
        
#         # Classify price segments
#         if price > 2000:
#             premium_count += 1
#         elif price < 500:
#             budget_count += 1
    
#     product_count = len(products)
#     avg_price = avg_price / product_count if product_count > 0 else 0
#     avg_rating = avg_rating / product_count if product_count > 0 else 0
    
#     # Build context for AI
#     market_profile = f"""Category: {category}
# Total Products Analyzed: {product_count}
# Average Price: ₹{avg_price:.0f}
# Average Rating: {avg_rating:.1f}★
# Total Reviews: {total_reviews:,}
# Estimated Monthly Sales: {total_sales:,.0f}
# Premium Products (>₹2000): {premium_count}
# Budget Products (<₹500): {budget_count}
# Price Segment: {"Premium" if avg_price > 2000 else "Budget" if avg_price < 500 else "Mid-range"}"""

#     # Use AI to predict location patterns
#     prompt = f"""Based on Indian e-commerce data, predict the top 6 cities with highest demand for this product category.

# {market_profile}

# Respond with ONLY a JSON array, no other text:
# [
#   {{"city": "City, State", "share": 28.5, "demand": "Very High"}},
#   {{"city": "City, State", "share": 24.2, "demand": "High"}},
#   ...
# ]

# Rules:
# - Total shares must sum to 100
# - Use real Indian cities (Mumbai, Delhi NCR, Bangalore, etc.)
# - Premium products → tech hubs (Bangalore, Pune)
# - Budget products → tier-2 cities included
# - Fashion/Beauty → Mumbai, Delhi bias
# - Electronics → Bangalore, Hyderabad bias
# - High sales → metro concentration
# - demand levels: "Very High", "High", "Medium", "Moderate"
# """

#     try:
#         result = subprocess.run(
#             ["ollama", "run", "mistral"],
#             input=prompt,
#             capture_output=True,
#             text=True,
#             encoding="utf-8",
#             errors="ignore",
#             timeout=30
#         )
        
#         output = (result.stdout or result.stderr or "").strip()
        
#         # Extract JSON from output
#         json_match = re.search(r'\[.*\]', output, re.DOTALL)
#         if json_match:
#             locations_data = json.loads(json_match.group())
            
#             insights = []
#             for loc in locations_data[:6]:
#                 insights.append(LocationInsight(
#                     country=loc.get('city', 'Mumbai, Maharashtra'),
#                     market_share=f"{loc.get('share', 0):.1f}%",
#                     demand_level=loc.get('demand', 'Medium')
#                 ))
            
#             if insights:
#                 return insights
        
#     except Exception as e:
#         print(f"❌ AI location prediction failed: {e}")
    
#     # Fallback: Rule-based prediction
#     return generate_rule_based_locations(category, avg_price, avg_rating, total_sales, product_count)


# def generate_rule_based_locations(category: str, avg_price: float, avg_rating: float, 
#                                    total_sales: float, product_count: int) -> List[LocationInsight]:
#     """
#     Fallback rule-based location prediction when AI fails
#     """
    
#     category_lower = category.lower()
    
#     # Electronics - Tech hub bias
#     if any(term in category_lower for term in ['electronic', 'mobile', 'computer', 'tech', 'gadget']):
#         if avg_price > 2000:  # Premium electronics
#             return [
#                 LocationInsight(country="Bangalore, Karnataka", market_share="28.5%", demand_level="Very High"),
#                 LocationInsight(country="Mumbai, Maharashtra", market_share="24.2%", demand_level="High"),
#                 LocationInsight(country="Delhi NCR, Delhi", market_share="21.3%", demand_level="High"),
#                 LocationInsight(country="Hyderabad, Telangana", market_share="14.8%", demand_level="Medium"),
#                 LocationInsight(country="Pune, Maharashtra", market_share="7.2%", demand_level="Medium"),
#                 LocationInsight(country="Chennai, Tamil Nadu", market_share="4.0%", demand_level="Moderate"),
#             ]
#         else:  # Budget electronics
#             return [
#                 LocationInsight(country="Delhi NCR, Delhi", market_share="26.5%", demand_level="Very High"),
#                 LocationInsight(country="Mumbai, Maharashtra", market_share="23.8%", demand_level="High"),
#                 LocationInsight(country="Bangalore, Karnataka", market_share="19.2%", demand_level="High"),
#                 LocationInsight(country="Kolkata, West Bengal", market_share="12.5%", demand_level="Medium"),
#                 LocationInsight(country="Pune, Maharashtra", market_share="10.0%", demand_level="Medium"),
#                 LocationInsight(country="Ahmedabad, Gujarat", market_share="8.0%", demand_level="Moderate"),
#             ]
    
#     # Fashion, Beauty, Personal Care
#     elif any(term in category_lower for term in ['fashion', 'clothing', 'beauty', 'personal', 'cosmetic']):
#         if avg_price > 1500:  # Premium fashion/beauty
#             return [
#                 LocationInsight(country="Mumbai, Maharashtra", market_share="32.5%", demand_level="Very High"),
#                 LocationInsight(country="Delhi NCR, Delhi", market_share="28.3%", demand_level="Very High"),
#                 LocationInsight(country="Bangalore, Karnataka", market_share="18.2%", demand_level="High"),
#                 LocationInsight(country="Pune, Maharashtra", market_share="10.5%", demand_level="Medium"),
#                 LocationInsight(country="Hyderabad, Telangana", market_share="6.5%", demand_level="Medium"),
#                 LocationInsight(country="Chennai, Tamil Nadu", market_share="4.0%", demand_level="Moderate"),
#             ]
#         else:  # Budget fashion/beauty
#             return [
#                 LocationInsight(country="Mumbai, Maharashtra", market_share="25.0%", demand_level="High"),
#                 LocationInsight(country="Delhi NCR, Delhi", market_share="24.0%", demand_level="High"),
#                 LocationInsight(country="Kolkata, West Bengal", market_share="15.5%", demand_level="Medium"),
#                 LocationInsight(country="Bangalore, Karnataka", market_share="14.0%", demand_level="Medium"),
#                 LocationInsight(country="Ahmedabad, Gujarat", market_share="12.5%", demand_level="Medium"),
#                 LocationInsight(country="Pune, Maharashtra", market_share="9.0%", demand_level="Moderate"),
#             ]
    
#     # Home, Kitchen, Furniture
#     elif any(term in category_lower for term in ['home', 'kitchen', 'furniture', 'appliance']):
#         return [
#             LocationInsight(country="Mumbai, Maharashtra", market_share="27.5%", demand_level="Very High"),
#             LocationInsight(country="Delhi NCR, Delhi", market_share="25.0%", demand_level="Very High"),
#             LocationInsight(country="Bangalore, Karnataka", market_share="20.5%", demand_level="High"),
#             LocationInsight(country="Hyderabad, Telangana", market_share="13.0%", demand_level="Medium"),
#             LocationInsight(country="Pune, Maharashtra", market_share="9.0%", demand_level="Medium"),
#             LocationInsight(country="Chennai, Tamil Nadu", market_share="5.0%", demand_level="Moderate"),
#         ]
    
#     # Sports, Fitness, Health
#     elif any(term in category_lower for term in ['sport', 'fitness', 'health', 'gym', 'yoga']):
#         return [
#             LocationInsight(country="Bangalore, Karnataka", market_share="29.0%", demand_level="Very High"),
#             LocationInsight(country="Mumbai, Maharashtra", market_share="26.5%", demand_level="Very High"),
#             LocationInsight(country="Delhi NCR, Delhi", market_share="22.0%", demand_level="High"),
#             LocationInsight(country="Pune, Maharashtra", market_share="12.5%", demand_level="Medium"),
#             LocationInsight(country="Hyderabad, Telangana", market_share="7.0%", demand_level="Medium"),
#             LocationInsight(country="Chennai, Tamil Nadu", market_share="3.0%", demand_level="Moderate"),
#         ]
    
#     # Books, Education, Stationery
#     elif any(term in category_lower for term in ['book', 'education', 'stationery', 'study']):
#         return [
#             LocationInsight(country="Delhi NCR, Delhi", market_share="30.5%", demand_level="Very High"),
#             LocationInsight(country="Bangalore, Karnataka", market_share="24.0%", demand_level="High"),
#             LocationInsight(country="Mumbai, Maharashtra", market_share="20.5%", demand_level="High"),
#             LocationInsight(country="Kolkata, West Bengal", market_share="12.0%", demand_level="Medium"),
#             LocationInsight(country="Pune, Maharashtra", market_share="8.0%", demand_level="Medium"),
#             LocationInsight(country="Hyderabad, Telangana", market_share="5.0%", demand_level="Moderate"),
#         ]
    
#     # Default for unknown categories
#     else:
#         # Adjust based on price point
#         if avg_price > 2000:  # Premium general
#             return [
#                 LocationInsight(country="Mumbai, Maharashtra", market_share="29.0%", demand_level="Very High"),
#                 LocationInsight(country="Bangalore, Karnataka", market_share="26.0%", demand_level="Very High"),
#                 LocationInsight(country="Delhi NCR, Delhi", market_share="23.0%", demand_level="High"),
#                 LocationInsight(country="Hyderabad, Telangana", market_share="12.0%", demand_level="Medium"),
#                 LocationInsight(country="Pune, Maharashtra", market_share="7.0%", demand_level="Medium"),
#                 LocationInsight(country="Chennai, Tamil Nadu", market_share="3.0%", demand_level="Moderate"),
#             ]
#         else:  # Budget/Mid-range general
#             return [
#                 LocationInsight(country="Delhi NCR, Delhi", market_share="26.0%", demand_level="High"),
#                 LocationInsight(country="Mumbai, Maharashtra", market_share="25.0%", demand_level="High"),
#                 LocationInsight(country="Bangalore, Karnataka", market_share="20.0%", demand_level="High"),
#                 LocationInsight(country="Kolkata, West Bengal", market_share="12.0%", demand_level="Medium"),
#                 LocationInsight(country="Pune, Maharashtra", market_share="10.0%", demand_level="Medium"),
#                 LocationInsight(country="Ahmedabad, Gujarat", market_share="7.0%", demand_level="Moderate"),
#             ]


# def generate_ai_strategy(pricing: Dict, sales: Dict, competition: Dict, 
#                         base_cost: float, product_name: str, category: str) -> str:
#     """
#     Generate AI-powered pricing and market entry strategy using Ollama
#     """
    
#     prompt = f"""You're a market analyst helping a seller launch "{product_name}" in the {category} category in India.

# Market Data:
# - Recommended Price: ₹{pricing['recommended_price']}
# - Expected Monthly Sales: {sales['estimated_monthly_sales']} units
# - Market Demand: {sales['market_demand']}
# - Competition: {competition['total_competitors']} competitors
# - Average Competitor Price: ₹{competition['avg_competitor_price']}
# - Your Cost: ₹{base_cost}
# - Profit Margin: {pricing['profit_margin']}%
# - Top Markets: Metro cities like Mumbai, Delhi NCR, Bangalore

# Give a 3-4 sentence strategy in conversational tone covering:
# 1. Pricing approach (competitive/premium/budget)
# 2. One key market opportunity (mention specific Indian cities if relevant)
# 3. One actionable tip to stand out

# Be natural and direct, like advising a friend about selling in India."""

#     try:
#         result = subprocess.run(
#             ["ollama", "run", "mistral"],
#             input=prompt,
#             capture_output=True,
#             text=True,
#             encoding="utf-8",
#             errors="ignore",
#             timeout=30
#         )
        
#         ai_output = (result.stdout or result.stderr or "").strip()
        
#         # Clean AI output
#         clean = (
#             ai_output
#             .replace("<|MODEL_RESPONSE|>", "")
#             .replace("</s>", "")
#             .replace("```", "")
#             .strip()
#         )
        
#         # Take first 3-4 sentences
#         sentences = []
#         for line in clean.split('\n'):
#             line = line.strip()
#             if line and not line.startswith('#') and not line.startswith('*'):
#                 for sentence in line.replace('. ', '.|').split('|'):
#                     s = sentence.strip()
#                     if s and len(s) > 20:
#                         sentences.append(s)
#                         if len(sentences) >= 4:
#                             break
#             if len(sentences) >= 4:
#                 break
        
#         if len(sentences) >= 2:
#             return ' '.join(sentences[:4])
#         else:
#             return generate_fallback_strategy(pricing, sales, competition, base_cost)
            
#     except Exception as e:
#         print(f"❌ AI strategy generation failed: {e}")
#         return generate_fallback_strategy(pricing, sales, competition, base_cost)


# def generate_fallback_strategy(pricing: Dict, sales: Dict, competition: Dict, base_cost: float) -> str:
#     """
#     Generate fallback strategy if AI fails
#     """
#     margin = pricing['profit_margin']
#     demand = sales['market_demand']
#     competitors = competition['total_competitors']
    
#     if margin > 40 and demand == "High":
#         return f"You're in a great position! With {margin:.0f}% profit margin and {demand.lower()} demand, price at ₹{pricing['recommended_price']} to stay competitive. Metro cities like Bangalore and Mumbai show strongest demand for this category. Focus on quality images and detailed descriptions to stand out from {competitors} competitors."
#     elif margin < 20:
#         return f"Tight margins ahead - you'll make {margin:.0f}% profit at ₹{pricing['recommended_price']}. With {competitors} competitors, differentiate through excellent customer service and fast shipping. Target tier-1 cities first where customers value quality. Consider testing ₹{pricing['max_price']} for premium positioning."
#     else:
#         return f"Solid opportunity with {margin:.0f}% margins in {demand.lower()}-demand market. Price at ₹{pricing['recommended_price']} to balance competitiveness and profitability. Delhi NCR and Mumbai typically drive 45-50% of sales in this category. Stand out with compelling product photos and responsive customer support among {competitors} competitors."


# def generate_warnings(pricing: Dict, competition: Dict, base_cost: float) -> List[str]:
#     """
#     Generate warning messages for potential issues
#     """
#     warnings = []
    
#     # Low profit margin warning
#     if pricing['profit_margin'] < 20:
#         warnings.append(f"⚠️ Low profit margin ({pricing['profit_margin']:.1f}%). Consider reducing costs or targeting premium segment.")
    
#     # High competition warning
#     if competition['total_competitors'] > 80:
#         warnings.append(f"⚠️ Very competitive market ({competition['total_competitors']} competitors). Strong differentiation required.")
    
#     # Price below cost warning
#     if pricing['recommended_price'] < base_cost * 1.2:
#         warnings.append("⚠️ Recommended price is close to cost. Verify your base cost calculations.")
    
#     # Low confidence warning
#     if pricing['confidence'] == "Low":
#         warnings.append("⚠️ Limited market data available. Pricing recommendations have lower confidence.")
    
#     # No warnings
#     if not warnings:
#         warnings.append("✅ No major concerns detected. Market conditions look favorable.")
    
#     return warnings


# # ============================================
# # NEW ENDPOINTS FOR HISTORY & ANALYTICS
# # ============================================

# @app.get("/product-tracker/history")
# def get_tracker_history(
#     user_email: str = Query(..., description="User's email"),
#     limit: int = Query(20, description="Number of results"),
#     offset: int = Query(0, description="Pagination offset"),
#     db: Session = Depends(get_db)
# ):
#     """
#     Get user's product tracker analysis history
#     """
#     try:
#         history = crud.get_user_tracker_history(db, user_email, limit, offset)
        
#         return {
#             "success": True,
#             "count": len(history),
#             "data": [
#                 {
#                     "id": h.id,
#                     "product_name": h.product_name,
#                     "category": h.category,
#                     "source": h.source,
#                     "base_cost": float(h.base_cost),
#                     "recommended_price": float(h.recommended_price) if h.recommended_price else None,
#                     "profit_margin": float(h.profit_margin) if h.profit_margin else None,
#                     "market_demand": h.market_demand,
#                     "created_at": h.created_at.isoformat()
#                 }
#                 for h in history
#             ]
#         }
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


# @app.get("/product-tracker/analysis/{analysis_id}")
# def get_analysis_details(
#     analysis_id: int,
#     db: Session = Depends(get_db)
# ):
#     """
#     Get detailed analysis by ID
#     """
#     try:
#         analysis = crud.get_tracker_analysis_by_id(db, analysis_id)
        
#         if not analysis:
#             raise HTTPException(status_code=404, detail="Analysis not found")
        
#         return {
#             "success": True,
#             "data": {
#                 "id": analysis.id,
#                 "product_name": analysis.product_name,
#                 "category": analysis.category,
#                 "source": analysis.source,
#                 "base_cost": float(analysis.base_cost),
#                 "pricing": {
#                     "recommended_price": float(analysis.recommended_price) if analysis.recommended_price else None,
#                     "min_price": float(analysis.min_price) if analysis.min_price else None,
#                     "max_price": float(analysis.max_price) if analysis.max_price else None,
#                     "profit_margin": float(analysis.profit_margin) if analysis.profit_margin else None,
#                     "confidence": analysis.pricing_confidence
#                 },
#                 "sales": {
#                     "estimated_monthly_sales": f"{analysis.estimated_monthly_sales_min:,} - {analysis.estimated_monthly_sales_max:,}",
#                     "estimated_daily_sales": float(analysis.estimated_daily_sales) if analysis.estimated_daily_sales else None,
#                     "market_demand": analysis.market_demand
#                 },
#                 "competition": {
#                     "total_competitors": analysis.total_competitors,
#                     "avg_competitor_price": float(analysis.avg_competitor_price) if analysis.avg_competitor_price else None,
#                     "avg_competitor_rating": float(analysis.avg_competitor_rating) if analysis.avg_competitor_rating else None,
#                     "top_competitor": {
#                         "name": analysis.top_competitor_name,
#                         "price": float(analysis.top_competitor_price) if analysis.top_competitor_price else None
#                     } if analysis.top_competitor_name else None
#                 },
#                 "location_insights": analysis.location_insights,
#                 "ai_strategy": analysis.ai_strategy,
#                 "warnings": analysis.warnings,
#                 "created_at": analysis.created_at.isoformat()
#             }
#         }
#     except HTTPException:
#         raise
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


# @app.delete("/product-tracker/analysis/{analysis_id}")
# def delete_analysis(
#     analysis_id: int,
#     user_email: str = Query(..., description="User's email for verification"),
#     db: Session = Depends(get_db)
# ):
#     """
#     Delete an analysis (only if it belongs to the user)
#     """
#     try:
#         success = crud.delete_tracker_analysis(db, analysis_id, user_email)
        
#         if success:
#             return {"success": True, "message": "Analysis deleted successfully"}
#         else:
#             raise HTTPException(status_code=404, detail="Analysis not found or unauthorized")
            
#     except HTTPException:
#         raise
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


# @app.get("/product-tracker/stats")
# def get_tracker_stats(db: Session = Depends(get_db)):
#     """
#     Get overall product tracker statistics
#     """
#     try:
#         # Total analyses
#         total_analyses = db.query(models.ProductTrackerAnalysis).count()
        
#         # Popular categories
#         popular_categories = crud.get_popular_categories(db, limit=5)
        
#         # Recent analyses
#         recent = db.query(models.ProductTrackerAnalysis)\
#             .order_by(models.ProductTrackerAnalysis.created_at.desc())\
#             .limit(5)\
#             .all()
        
#         # Average profit margin
#         from sqlalchemy import func
#         avg_margin = db.query(func.avg(models.ProductTrackerAnalysis.profit_margin)).scalar()
        
#         return {
#             "success": True,
#             "stats": {
#                 "total_analyses": total_analyses,
#                 "average_profit_margin": round(float(avg_margin), 2) if avg_margin else 0,
#                 "popular_categories": popular_categories,
#                 "recent_analyses": [
#                     {
#                         "product_name": r.product_name,
#                         "category": r.category,
#                         "created_at": r.created_at.isoformat()
#                     }
#                     for r in recent
#                 ]
#             }
#         }
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

STOPWORDS = {
    "for", "with", "and", "the", "a", "an", "usb", "type", "inch", "in"
}

def extract_keywords(product_name: str) -> list[str]:
    """
    Industry-grade keyword extractor.
    Automatically extracts meaningful keywords from product titles.
    """
    clean = re.sub(r"[^a-zA-Z0-9 ]", " ", product_name.lower())
    tokens = [t.strip() for t in clean.split() if t.strip()]
    keywords = [t for t in tokens if t not in STOPWORDS and len(t) > 2]
    return keywords


# @app.post("/product-tracker/analyze", response_model=ProductTrackerResponse)
# def analyze_product_opportunity(request: ProductTrackerRequest, db: Session = Depends(get_db)):
#     """
#     AI-powered market analysis for new product listings.
#     Analyzes similar products to recommend optimal pricing, predict sales, and provide competitive insights.
#     Results are automatically saved to database for history tracking.
#     """
    
#     print(f"🔍 Analyzing market for: {request.product_name} in {request.category}")
    
#     # Get user email from request (you can get this from auth token)
#     user_email = request.dict().get('user_email', None)  # Add this to request model if needed
    
#     try:
#         # Get similar products from market
#         similar_products = get_similar_products(
#             db, 
#             request.product_name, 
#             request.category, 
#             request.source
#         )
        
#         if not similar_products or len(similar_products) == 0:
#             raise HTTPException(
#                 status_code=404, 
#                 detail=f"No similar products found in {request.category} category on {request.source}"
#             )
        
#         print(f"📊 Found {len(similar_products)} similar products")
        
#         # 🚨 VALIDATE USER INPUT AGAINST MARKET REALITY
#         prices = [float(p.get('price', 0)) for p in similar_products if p.get('price', 0) > 0]
#         market_avg = sum(prices) / len(prices) if prices else 0
#         market_max = max(prices) if prices else 0
#         market_min = min(prices) if prices else 0
        
#         # Check if user's cost is unrealistically high
#         if request.base_cost > market_max * 2:
#             raise HTTPException(
#                 status_code=400,
#                 detail=f"❌ Invalid Cost: Your cost (₹{request.base_cost:,.0f}) seems incorrect. Market prices range from ₹{market_min:,.0f} to ₹{market_max:,.0f}. Please verify your cost price. Did you accidentally add extra zeros?"
#             )
        
#         # Warn if cost is very high but technically possible
#         if request.base_cost > market_max:
#             raise HTTPException(
#                 status_code=400,
#                 detail=f"⚠️ Cost Too High: Your cost (₹{request.base_cost:,.0f}) is higher than the maximum market price (₹{market_max:,.0f}). This product cannot be sold profitably. Please check your cost or choose a different product."
#             )
        
#         # Analyze pricing
#         pricing_insights = analyze_pricing(similar_products, request.base_cost)
        
#         # Analyze sales potential
#         sales_insights = analyze_sales_potential(similar_products, request.source)
        
#         # Analyze competition
#         competition_insights = analyze_competition(similar_products)
        
#         # Generate location insights
#         location_insights = generate_location_insights(similar_products)
        
#         # Generate AI-powered strategy
#         ai_strategy = generate_ai_strategy(
#             pricing_insights,
#             sales_insights,
#             competition_insights,
#             request.base_cost,
#             request.product_name,
#             request.category
#         )
        
#         # Generate warnings
#         warnings = generate_warnings(pricing_insights, competition_insights, request.base_cost)
        
#         response = ProductTrackerResponse(
#             success=True,
#             product_name=request.product_name,
#             category=request.category,
#             source=request.source.capitalize(),
#             pricing=PricingInsights(**pricing_insights),
#             sales=SalesInsights(**sales_insights),
#             competition=CompetitorInsights(**competition_insights),
#             location_insights=location_insights,
#             ai_strategy=ai_strategy,
#             warnings=warnings
#         )
        
#         # ✅ SAVE TO DATABASE
#         try:
#             analysis_data = {
#                 'product_name': request.product_name,
#                 'category': request.category,
#                 'source': request.source,
#                 'base_cost': request.base_cost,
#                 'pricing': pricing_insights,
#                 'sales': sales_insights,
#                 'competition': competition_insights,
#                 'location_insights': [
#                     {
#                         'country': loc.country,
#                         'market_share': loc.market_share,
#                         'demand_level': loc.demand_level
#                     } for loc in location_insights
#                 ],
#                 'ai_strategy': ai_strategy,
#                 'warnings': warnings,
#                 'similar_products': similar_products,
#                 'success': True
#             }
            
#             saved_analysis = crud.create_tracker_analysis(db, user_email, analysis_data)
#             print(f"💾 Analysis saved to database with ID: {saved_analysis.id}")
            
#         except Exception as e:
#             print(f"⚠️ Failed to save analysis to database: {str(e)}")
#             # Don't fail the whole request if DB save fails
        
#         return response
        
#     except HTTPException:
#         raise
#     except Exception as e:
#         print(f"❌ Error in product tracker: {str(e)}")
#         import traceback
#         traceback.print_exc()
#         raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

@app.post("/product-tracker/analyze", response_model=ProductTrackerResponse)
def analyze_product_opportunity(request: ProductTrackerRequest, db: Session = Depends(get_db)):
    print(f"🔍 Analyzing market for: {request.product_name} in {request.category}")
    user_email = request.dict().get('user_email', None)
    
    try:
        similar_products = get_similar_products(db, request.product_name, request.category, request.source)
        if not similar_products:
            raise HTTPException(404, f"No similar products found in {request.category} on {request.source}")
        print(f"📊 Found {len(similar_products)} similar products")
        
        prices = [float(p.get('price', 0)) for p in similar_products if p.get('price', 0) > 0]
        market_max = max(prices) if prices else 0
        market_min = min(prices) if prices else 0
        
        if request.base_cost > market_max * 2:
            raise HTTPException(400, f"❌ Invalid Cost: Your cost (₹{request.base_cost:,.0f}) seems incorrect. Market range: ₹{market_min:,.0f}-₹{market_max:,.0f}")
        if request.base_cost > market_max:
            raise HTTPException(400, f"⚠️ Cost Too High: ₹{request.base_cost:,.0f} > market max ₹{market_max:,.0f}")
        
        pricing_insights = analyze_pricing(similar_products, request.base_cost)
        sales_insights = analyze_sales_potential(similar_products, request.source)
        competition_insights = analyze_competition(similar_products)
        location_insights = generate_location_insights(similar_products)
        ai_strategy = generate_ai_strategy(pricing_insights, sales_insights, competition_insights, request.base_cost, request.product_name, request.category)
        warnings = generate_warnings(pricing_insights, competition_insights, request.base_cost)
        
        response = ProductTrackerResponse(
            success=True,
            product_name=request.product_name,
            category=request.category,
            source=request.source.capitalize(),
            pricing=PricingInsights(**pricing_insights),
            sales=SalesInsights(**sales_insights),
            competition=CompetitorInsights(**competition_insights),
            location_insights=location_insights,
            ai_strategy=ai_strategy,
            warnings=warnings
        )
        
        try:
            analysis_data = {
                'product_name': request.product_name,
                'category': request.category,
                'source': request.source,
                'base_cost': request.base_cost,
                'pricing': pricing_insights,
                'sales': sales_insights,
                'competition': competition_insights,
                'location_insights': [{'country': loc.country,'market_share': loc.market_share,'demand_level': loc.demand_level} for loc in location_insights],
                'ai_strategy': ai_strategy,
                'warnings': warnings,
                'similar_products': similar_products,
                'success': True
            }
            saved_analysis = crud.create_tracker_analysis(db, user_email, analysis_data)
            print(f"💾 Analysis saved to database ID: {saved_analysis.id}")
        except Exception as e:
            print(f"⚠️ Failed to save analysis: {str(e)}")
        
        return response
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Error in product tracker: {str(e)}")
        import traceback; traceback.print_exc()
        raise HTTPException(500, f"Analysis failed: {str(e)}")


# ============================================
# Helper Functions
# ============================================

# def get_similar_products(db: Session, product_name: str, category: str, source: str) -> List[Dict]:
#     """
#     Find similar products in the market based on category
#     """
    
#     if source.lower() == "amazon":
#         query = text("""
#             SELECT 
#                 product_title,
#                 category_name,
#                 product_price_numeric as price,
#                 product_star_rating_numeric as rating,
#                 product_num_ratings as reviews,
#                 sales_volume,
#                 country,
#                 is_best_seller,
#                 is_amazon_choice,
#                 is_prime,
#                 raw_data
#             FROM rapidapi_amazon_products
#             WHERE LOWER(category_name) = LOWER(:category)
#             AND product_title IS NOT NULL
#             AND product_price_numeric > 0
#             AND product_star_rating_numeric > 0
#             ORDER BY product_num_ratings DESC
#             LIMIT 200
#         """)
        
#         results = db.execute(query, {"category": category}).fetchall()
        
#     else:  # flipkart
#         query = text("""
#             SELECT 
#                 title as product_title,
#                 category as category_name,
#                 price,
#                 rating,
#                 reviews,
#                 brand,
#                 availability,
#                 raw_data
#             FROM flipkart
#             WHERE LOWER(category) = LOWER(:category)
#             AND title IS NOT NULL
#             AND price > 0
#             AND rating > 0
#             ORDER BY reviews DESC
#             LIMIT 200
#         """)
        
#         results = db.execute(query, {"category": category}).fetchall()
    
#     return [dict(row._mapping) for row in results]

def get_similar_products(db: Session, product_name: str, category: str, source: str):
    """
    Fully dynamic competitor finder.
    Uses NLP keyword extraction + multi-keyword DB search.
    No hardcoded keywords. Scales automatically.
    """

    keywords = extract_keywords(product_name)

    if len(keywords) == 0:
        keywords = [category.lower()]  # fallback

    # build dynamic SQL pattern like:
    # title LIKE '%mouse%' AND title LIKE '%gaming%' AND title LIKE '%wireless%'
    like_clauses = " AND ".join([f"LOWER(product_title) LIKE '%{k}%'" for k in keywords])

    print(f"🔎 Matching competitors using keywords: {keywords}")

    if source.lower() == "amazon":
        query = text(f"""
            SELECT 
                product_title,
                category_name,
                product_price_numeric as price,
                product_star_rating_numeric as rating,
                product_num_ratings as reviews,
                sales_volume,
                country,
                is_best_seller,
                is_amazon_choice,
                is_prime,
                raw_data
            FROM rapidapi_amazon_products
            WHERE {like_clauses}
            AND product_price_numeric > 0
            AND product_star_rating_numeric > 0
            ORDER BY product_num_ratings DESC
            LIMIT 200
        """)
    else:
        query = text(f"""
            SELECT 
                title as product_title,
                category as category_name,
                price,
                rating,
                reviews,
                brand,
                availability,
                raw_data
            FROM flipkart
            WHERE {like_clauses}
            AND price > 0
            AND rating > 0
            ORDER BY reviews DESC
            LIMIT 200
        """)

    results = db.execute(query).fetchall()

    return [dict(row._mapping) for row in results]


# def analyze_pricing(products: List[Dict], base_cost: float) -> Dict:
#     """
#     Analyze pricing from similar products and recommend optimal price
#     """
#     prices = [float(p.get('price', 0)) for p in products if p.get('price', 0) > 0]
    
#     if not prices:
#         # Fallback pricing if no data
#         return {
#             'recommended_price': round(base_cost * 2.5, 2),
#             'min_price': round(base_cost * 1.8, 2),
#             'max_price': round(base_cost * 3.2, 2),
#             'profit_margin': 60.0,
#             'confidence': 'Low',
#             'market_avg_price': round(base_cost * 2.5, 2),
#             'market_min_price': round(base_cost * 1.5, 2),
#             'market_max_price': round(base_cost * 4.0, 2)
#         }
    
#     # Calculate market statistics
#     avg_price = sum(prices) / len(prices)
#     min_market = min(prices)
#     max_market = max(prices)
#     sorted_prices = sorted(prices)
#     median_price = sorted_prices[len(prices) // 2]
    
#     # Calculate quartiles for better pricing strategy
#     q1_price = sorted_prices[len(prices) // 4]
#     q3_price = sorted_prices[3 * len(prices) // 4]
    
#     # ⚠️ CRITICAL: Check if cost is higher than market prices
#     if base_cost > median_price:
#         # Cost is HIGHER than market median - SERIOUS PROBLEM
#         recommended = base_cost * 1.05  # Minimal markup just to cover
#         profit_margin = ((recommended - base_cost) / recommended) * 100
        
#         return {
#             'recommended_price': round(recommended, 2),
#             'min_price': round(base_cost, 2),
#             'max_price': round(max_market, 2),
#             'profit_margin': round(profit_margin, 2),
#             'confidence': 'Critical',
#             'market_avg_price': round(avg_price, 2),
#             'market_min_price': round(min_market, 2),
#             'market_max_price': round(max_market, 2)
#         }
    
#     if base_cost > avg_price * 0.8:
#         # Cost is close to or above average market price - WARNING
#         recommended = max(base_cost * 1.15, median_price * 0.95)
#         profit_margin = ((recommended - base_cost) / recommended) * 100
        
#         return {
#             'recommended_price': round(recommended, 2),
#             'min_price': round(base_cost * 1.05, 2),
#             'max_price': round(q3_price * 1.1, 2),
#             'profit_margin': round(profit_margin, 2),
#             'confidence': 'Low',
#             'market_avg_price': round(avg_price, 2),
#             'market_min_price': round(min_market, 2),
#             'market_max_price': round(max_market, 2)
#         }
    
#     # Normal pricing logic
#     # Recommended price: slightly below median for competitive advantage
#     recommended = median_price * 0.95
    
#     # Ensure profitability (minimum 30% margin)
#     min_profitable_price = base_cost * 1.3
#     if recommended < min_profitable_price:
#         recommended = min_profitable_price
    
#     # Set price range
#     min_price = max(base_cost * 1.3, q1_price * 0.9)  # At least 30% markup
#     max_price = min(q3_price * 1.1, median_price * 1.2)  # Don't overprice
    
#     # Calculate profit margin
#     profit_margin = ((recommended - base_cost) / recommended) * 100
    
#     # Determine confidence based on data quality
#     if len(prices) > 50 and profit_margin > 25:
#         confidence = "High"
#     elif len(prices) > 20 and profit_margin > 15:
#         confidence = "Medium"
#     else:
#         confidence = "Low"
    
#     return {
#         'recommended_price': round(recommended, 2),
#         'min_price': round(min_price, 2),
#         'max_price': round(max_price, 2),
#         'profit_margin': round(profit_margin, 2),
#         'confidence': confidence,
#         'market_avg_price': round(avg_price, 2),
#         'market_min_price': round(min_market, 2),
#         'market_max_price': round(max_market, 2)
#     }

def analyze_pricing(products: List[Dict], base_cost: float) -> Dict:
    """
    INDUSTRY-GRADE pricing engine
    - Recommended price = MARKET driven
    - Cost used ONLY for profitability & warnings
    """

    prices = [float(p.get("price", 0)) for p in products if p.get("price", 0) > 0]

    if not prices:
        return {
            "recommended_price": 0,
            "min_price": 0,
            "max_price": 0,
            "profit_margin": 0,
            "confidence": "Low",
            "market_avg_price": 0,
            "market_min_price": 0,
            "market_max_price": 0
        }

    prices.sort()
    avg_price = sum(prices) / len(prices)
    median_price = prices[len(prices) // 2]
    q1 = prices[len(prices) // 4]
    q3 = prices[(3 * len(prices)) // 4]

    # 🎯 MARKET SELLABLE PRICE (KEY FIX)
    recommended_price = round(median_price * 0.95, 2)

    min_price = round(q1 * 0.9, 2)
    max_price = round(q3 * 1.1, 2)

    # 💰 PROFIT / LOSS
    profit = recommended_price - base_cost
    profit_margin = (profit / recommended_price) * 100

    # 🧠 CONFIDENCE LOGIC
    if profit_margin < 0:
        confidence = "Critical"
    elif profit_margin < 10:
        confidence = "Low"
    elif profit_margin < 25:
        confidence = "Medium"
    else:
        confidence = "High"

    return {
        "recommended_price": round(recommended_price),
        "min_price": round(min_price),
        "max_price": round(max_price),
        "profit_margin": round(profit_margin, 1),
        "confidence": confidence,
        "market_avg_price": round(avg_price),
        "market_min_price": round(min(prices)),
        "market_max_price": round(max(prices))
    }


def analyze_sales_potential(products: List[Dict], source: str) -> Dict:
    """
    Estimate sales potential based on similar products
    """
    if source.lower() == "amazon":
        # Parse sales volume from Amazon data
        total_sales = 0
        valid_sales_count = 0
        
        for p in products:
            sales_vol = p.get('sales_volume', '')
            if sales_vol:
                parsed_sales = parse_sales_volume(str(sales_vol))
                if parsed_sales > 0:
                    total_sales += parsed_sales
                    valid_sales_count += 1
        
        if valid_sales_count > 0:
            avg_monthly_sales = total_sales / valid_sales_count
            avg_daily_sales = avg_monthly_sales / 30
        else:
            # Estimate based on reviews
            avg_reviews = sum(p.get('reviews', 0) for p in products) / len(products) if products else 0
            avg_monthly_sales = avg_reviews * 10  # Rough estimate
            avg_daily_sales = avg_monthly_sales / 30
    else:
        # Flipkart: estimate from reviews
        avg_reviews = sum(p.get('reviews', 0) for p in products) / len(products) if products else 0
        avg_monthly_sales = avg_reviews * 8  # Conservative estimate
        avg_daily_sales = avg_monthly_sales / 30
    
    # Categorize demand
    if avg_monthly_sales > 10000:
        demand = "High"
        sales_range = f"{int(avg_monthly_sales * 0.7):,} - {int(avg_monthly_sales * 1.3):,}"
    elif avg_monthly_sales > 1000:
        demand = "Medium"
        sales_range = f"{int(avg_monthly_sales * 0.6):,} - {int(avg_monthly_sales * 1.4):,}"
    else:
        demand = "Low"
        sales_range = f"{int(avg_monthly_sales * 0.5):,} - {int(avg_monthly_sales * 1.5):,}"
    
    return {
        'estimated_monthly_sales': sales_range,
        'estimated_daily_sales': round(avg_daily_sales, 2),
        'market_demand': demand
    }


def analyze_competition(products: List[Dict]) -> Dict:
    """
    Analyze competitive landscape
    """
    if not products:
        return {
            'total_competitors': 0,
            'avg_competitor_price': 0.0,
            'avg_competitor_rating': 0.0,
            'top_competitor': None
        }
    
    prices = [float(p.get('price', 0)) for p in products if p.get('price', 0) > 0]
    ratings = [float(p.get('rating', 0)) for p in products if p.get('rating', 0) > 0]
    
    avg_price = sum(prices) / len(prices) if prices else 0
    avg_rating = sum(ratings) / len(ratings) if ratings else 0
    
    # Find top competitor (highest reviews * rating)
    top_competitor = None
    max_score = 0
    
    for p in products:
        reviews = p.get('reviews', 0) or 0
        rating = p.get('rating', 0) or 0
        score = reviews * rating
        
        if score > max_score:
            max_score = score
            top_competitor = {
                'name': str(p.get('product_title', ''))[:60],
                'price': float(p.get('price', 0)),
                'rating': float(rating),
                'reviews': int(reviews)
            }
    
    return {
        'total_competitors': len(products),
        'avg_competitor_price': round(avg_price, 2),
        'avg_competitor_rating': round(avg_rating, 2),
        'top_competitor': top_competitor
    }


def generate_location_insights(products: List[Dict]) -> List[LocationInsight]:
    """
    Generate DYNAMIC location insights using AI to analyze product patterns.
    Since no explicit location data exists, we use AI to predict high-demand cities
    based on product category, price points, ratings, and sales volume patterns.
    """
    
    if not products or len(products) == 0:
        return []
    
    # Gather market intelligence from products
    category = products[0].get('category_name') or products[0].get('category', 'General')
    
    total_sales = 0
    total_reviews = 0
    avg_price = 0
    avg_rating = 0
    premium_count = 0
    budget_count = 0
    
    for p in products:
        sales_vol = p.get('sales_volume', '')
        if sales_vol:
            total_sales += parse_sales_volume(str(sales_vol))
        
        reviews = p.get('reviews', 0) or p.get('product_num_ratings', 0) or 0
        total_reviews += reviews
        
        price = float(p.get('price', 0) or 0)
        avg_price += price
        
        rating = float(p.get('rating', 0) or p.get('product_star_rating_numeric', 0) or 0)
        avg_rating += rating
        
        # Classify price segments
        if price > 2000:
            premium_count += 1
        elif price < 500:
            budget_count += 1
    
    product_count = len(products)
    avg_price = avg_price / product_count if product_count > 0 else 0
    avg_rating = avg_rating / product_count if product_count > 0 else 0
    
    # Build context for AI
    market_profile = f"""Category: {category}
Total Products Analyzed: {product_count}
Average Price: ₹{avg_price:.0f}
Average Rating: {avg_rating:.1f}★
Total Reviews: {total_reviews:,}
Estimated Monthly Sales: {total_sales:,.0f}
Premium Products (>₹2000): {premium_count}
Budget Products (<₹500): {budget_count}
Price Segment: {"Premium" if avg_price > 2000 else "Budget" if avg_price < 500 else "Mid-range"}"""

    # Use AI to predict location patterns
    prompt = f"""Based on Indian e-commerce data, predict the top 6 cities with highest demand for this product category.

{market_profile}

Respond with ONLY a JSON array, no other text:
[
  {{"city": "City, State", "share": 28.5, "demand": "Very High"}},
  {{"city": "City, State", "share": 24.2, "demand": "High"}},
  ...
]

Rules:
- Total shares must sum to 100
- Use real Indian cities (Mumbai, Delhi NCR, Bangalore, etc.)
- Premium products → tech hubs (Bangalore, Pune)
- Budget products → tier-2 cities included
- Fashion/Beauty → Mumbai, Delhi bias
- Electronics → Bangalore, Hyderabad bias
- High sales → metro concentration
- demand levels: "Very High", "High", "Medium", "Moderate"
"""

    try:
        result = subprocess.run(
            ["ollama", "run", "mistral"],
            input=prompt,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore",
            timeout=30
        )
        
        output = (result.stdout or result.stderr or "").strip()
        
        # Extract JSON from output
        json_match = re.search(r'\[.*\]', output, re.DOTALL)
        if json_match:
            locations_data = json.loads(json_match.group())
            
            insights = []
            for loc in locations_data[:6]:
                insights.append(LocationInsight(
                    country=loc.get('city', 'Mumbai, Maharashtra'),
                    market_share=f"{loc.get('share', 0):.1f}%",
                    demand_level=loc.get('demand', 'Medium')
                ))
            
            if insights:
                return insights
        
    except Exception as e:
        print(f"❌ AI location prediction failed: {e}")
    
    # Fallback: Rule-based prediction
    return generate_rule_based_locations(category, avg_price, avg_rating, total_sales, product_count)


def generate_rule_based_locations(category: str, avg_price: float, avg_rating: float, 
                                   total_sales: float, product_count: int) -> List[LocationInsight]:
    """
    Fallback rule-based location prediction when AI fails
    """
    
    category_lower = category.lower()
    
    # Electronics - Tech hub bias
    if any(term in category_lower for term in ['electronic', 'mobile', 'computer', 'tech', 'gadget']):
        if avg_price > 2000:  # Premium electronics
            return [
                LocationInsight(country="Bangalore, Karnataka", market_share="28.5%", demand_level="Very High"),
                LocationInsight(country="Mumbai, Maharashtra", market_share="24.2%", demand_level="High"),
                LocationInsight(country="Delhi NCR, Delhi", market_share="21.3%", demand_level="High"),
                LocationInsight(country="Hyderabad, Telangana", market_share="14.8%", demand_level="Medium"),
                LocationInsight(country="Pune, Maharashtra", market_share="7.2%", demand_level="Medium"),
                LocationInsight(country="Chennai, Tamil Nadu", market_share="4.0%", demand_level="Moderate"),
            ]
        else:  # Budget electronics
            return [
                LocationInsight(country="Delhi NCR, Delhi", market_share="26.5%", demand_level="Very High"),
                LocationInsight(country="Mumbai, Maharashtra", market_share="23.8%", demand_level="High"),
                LocationInsight(country="Bangalore, Karnataka", market_share="19.2%", demand_level="High"),
                LocationInsight(country="Kolkata, West Bengal", market_share="12.5%", demand_level="Medium"),
                LocationInsight(country="Pune, Maharashtra", market_share="10.0%", demand_level="Medium"),
                LocationInsight(country="Ahmedabad, Gujarat", market_share="8.0%", demand_level="Moderate"),
            ]
    
    # Fashion, Beauty, Personal Care
    elif any(term in category_lower for term in ['fashion', 'clothing', 'beauty', 'personal', 'cosmetic']):
        if avg_price > 1500:  # Premium fashion/beauty
            return [
                LocationInsight(country="Mumbai, Maharashtra", market_share="32.5%", demand_level="Very High"),
                LocationInsight(country="Delhi NCR, Delhi", market_share="28.3%", demand_level="Very High"),
                LocationInsight(country="Bangalore, Karnataka", market_share="18.2%", demand_level="High"),
                LocationInsight(country="Pune, Maharashtra", market_share="10.5%", demand_level="Medium"),
                LocationInsight(country="Hyderabad, Telangana", market_share="6.5%", demand_level="Medium"),
                LocationInsight(country="Chennai, Tamil Nadu", market_share="4.0%", demand_level="Moderate"),
            ]
        else:  # Budget fashion/beauty
            return [
                LocationInsight(country="Mumbai, Maharashtra", market_share="25.0%", demand_level="High"),
                LocationInsight(country="Delhi NCR, Delhi", market_share="24.0%", demand_level="High"),
                LocationInsight(country="Kolkata, West Bengal", market_share="15.5%", demand_level="Medium"),
                LocationInsight(country="Bangalore, Karnataka", market_share="14.0%", demand_level="Medium"),
                LocationInsight(country="Ahmedabad, Gujarat", market_share="12.5%", demand_level="Medium"),
                LocationInsight(country="Pune, Maharashtra", market_share="9.0%", demand_level="Moderate"),
            ]
    
    # Home, Kitchen, Furniture
    elif any(term in category_lower for term in ['home', 'kitchen', 'furniture', 'appliance']):
        return [
            LocationInsight(country="Mumbai, Maharashtra", market_share="27.5%", demand_level="Very High"),
            LocationInsight(country="Delhi NCR, Delhi", market_share="25.0%", demand_level="Very High"),
            LocationInsight(country="Bangalore, Karnataka", market_share="20.5%", demand_level="High"),
            LocationInsight(country="Hyderabad, Telangana", market_share="13.0%", demand_level="Medium"),
            LocationInsight(country="Pune, Maharashtra", market_share="9.0%", demand_level="Medium"),
            LocationInsight(country="Chennai, Tamil Nadu", market_share="5.0%", demand_level="Moderate"),
        ]
    
    # Sports, Fitness, Health
    elif any(term in category_lower for term in ['sport', 'fitness', 'health', 'gym', 'yoga']):
        return [
            LocationInsight(country="Bangalore, Karnataka", market_share="29.0%", demand_level="Very High"),
            LocationInsight(country="Mumbai, Maharashtra", market_share="26.5%", demand_level="Very High"),
            LocationInsight(country="Delhi NCR, Delhi", market_share="22.0%", demand_level="High"),
            LocationInsight(country="Pune, Maharashtra", market_share="12.5%", demand_level="Medium"),
            LocationInsight(country="Hyderabad, Telangana", market_share="7.0%", demand_level="Medium"),
            LocationInsight(country="Chennai, Tamil Nadu", market_share="3.0%", demand_level="Moderate"),
        ]
    
    # Books, Education, Stationery
    elif any(term in category_lower for term in ['book', 'education', 'stationery', 'study']):
        return [
            LocationInsight(country="Delhi NCR, Delhi", market_share="30.5%", demand_level="Very High"),
            LocationInsight(country="Bangalore, Karnataka", market_share="24.0%", demand_level="High"),
            LocationInsight(country="Mumbai, Maharashtra", market_share="20.5%", demand_level="High"),
            LocationInsight(country="Kolkata, West Bengal", market_share="12.0%", demand_level="Medium"),
            LocationInsight(country="Pune, Maharashtra", market_share="8.0%", demand_level="Medium"),
            LocationInsight(country="Hyderabad, Telangana", market_share="5.0%", demand_level="Moderate"),
        ]
    
    # Default for unknown categories
    else:
        # Adjust based on price point
        if avg_price > 2000:  # Premium general
            return [
                LocationInsight(country="Mumbai, Maharashtra", market_share="29.0%", demand_level="Very High"),
                LocationInsight(country="Bangalore, Karnataka", market_share="26.0%", demand_level="Very High"),
                LocationInsight(country="Delhi NCR, Delhi", market_share="23.0%", demand_level="High"),
                LocationInsight(country="Hyderabad, Telangana", market_share="12.0%", demand_level="Medium"),
                LocationInsight(country="Pune, Maharashtra", market_share="7.0%", demand_level="Medium"),
                LocationInsight(country="Chennai, Tamil Nadu", market_share="3.0%", demand_level="Moderate"),
            ]
        else:  # Budget/Mid-range general
            return [
                LocationInsight(country="Delhi NCR, Delhi", market_share="26.0%", demand_level="High"),
                LocationInsight(country="Mumbai, Maharashtra", market_share="25.0%", demand_level="High"),
                LocationInsight(country="Bangalore, Karnataka", market_share="20.0%", demand_level="High"),
                LocationInsight(country="Kolkata, West Bengal", market_share="12.0%", demand_level="Medium"),
                LocationInsight(country="Pune, Maharashtra", market_share="10.0%", demand_level="Medium"),
                LocationInsight(country="Ahmedabad, Gujarat", market_share="7.0%", demand_level="Moderate"),
            ]


def generate_ai_strategy(pricing: Dict, sales: Dict, competition: Dict, 
                        base_cost: float, product_name: str, category: str) -> str:
    """
    Generate FULLY DYNAMIC AI-powered strategy using comprehensive market analysis
    AI receives COMPLETE market context to generate intelligent, actionable strategy
    """
    
    # Extract ALL market intelligence
    margin = pricing['profit_margin']
    recommended = pricing['recommended_price']
    market_avg = pricing.get('market_avg_price', 0)
    market_min = pricing.get('market_min_price', 0)
    market_max = pricing.get('market_max_price', 0)
    confidence = pricing['confidence']
    
    monthly_sales = sales['estimated_monthly_sales']
    daily_sales = sales['estimated_daily_sales']
    demand = sales['market_demand']
    
    total_competitors = competition['total_competitors']
    avg_comp_price = competition['avg_competitor_price']
    avg_comp_rating = competition['avg_competitor_rating']
    
    top_comp = competition.get('top_competitor', {})
    top_comp_name = top_comp.get('name', 'N/A') if top_comp else 'N/A'
    top_comp_price = top_comp.get('price', 0) if top_comp else 0
    top_comp_reviews = top_comp.get('reviews', 0) if top_comp else 0
    
    # Calculate advanced metrics
    cost_to_market_ratio = (base_cost / market_avg * 100) if market_avg > 0 else 0
    price_vs_avg = ((recommended - avg_comp_price) / avg_comp_price * 100) if avg_comp_price > 0 else 0
    profit_per_unit = recommended - base_cost
    monthly_revenue_potential = profit_per_unit * daily_sales * 30
    
    # Determine market position
    if base_cost < market_min * 0.6:
        cost_position = "ULTRA_LOW"
    elif base_cost < market_avg * 0.5:
        cost_position = "VERY_LOW"
    elif base_cost < market_avg * 0.7:
        cost_position = "LOW"
    elif base_cost < market_avg * 0.9:
        cost_position = "COMPETITIVE"
    elif base_cost < market_avg:
        cost_position = "SLIGHTLY_HIGH"
    elif base_cost < market_max:
        cost_position = "HIGH"
    else:
        cost_position = "CRITICAL"
    
    # Competition intensity
    if total_competitors > 150:
        comp_level = "EXTREME"
    elif total_competitors > 80:
        comp_level = "VERY_HIGH"
    elif total_competitors > 40:
        comp_level = "HIGH"
    elif total_competitors > 20:
        comp_level = "MODERATE"
    else:
        comp_level = "LOW"

    # Build COMPREHENSIVE prompt for AI with ALL context
    prompt = f"""You are an expert e-commerce consultant analyzing a product for Indian marketplace. Generate a PERSONALIZED 4-5 sentence strategy based on this COMPLETE market data:

PRODUCT: {product_name} in {category}

COST ANALYSIS:
- User's Cost: ₹{base_cost:,.0f}
- Market Average: ₹{market_avg:,.0f}
- Market Range: ₹{market_min:,.0f} - ₹{market_max:,.0f}
- Cost Position: {cost_position} ({cost_to_market_ratio:.0f}% of market avg)
- Recommended Selling Price: ₹{recommended:,.0f}
- Profit Per Unit: ₹{profit_per_unit:,.0f}
- Profit Margin: {margin:.1f}%

COMPETITION:
- Total Competitors: {total_competitors} ({comp_level} competition)
- Average Competitor Price: ₹{avg_comp_price:,.0f}
- Average Rating: {avg_comp_rating:.1f}★
- Top Competitor: {top_comp_name[:50]}
- Top Competitor Price: ₹{top_comp_price:,.0f} with {top_comp_reviews:,} reviews
- Your Price vs Average: {price_vs_avg:+.0f}%

MARKET DEMAND:
- Demand Level: {demand}
- Estimated Monthly Sales: {monthly_sales} units
- Daily Sales: {daily_sales:.0f} units
- Monthly Revenue Potential: ₹{monthly_revenue_potential:,.0f}

CONFIDENCE: {confidence}

Based on this data, provide a 4-5 sentence strategy that:
1. Addresses whether this is VIABLE (considering cost vs market)
2. Gives SPECIFIC pricing recommendation with reasoning
3. Mentions TOP 2-3 Indian cities for launch (Mumbai/Delhi/Bangalore/Hyderabad based on category)
4. Provides ONE actionable differentiation tactic (based on competition level)
5. Sets realistic expectations (timeline, sales targets)

Be direct, honest, and practical. If margins are thin, say so. If cost is too high, warn clearly. Use conversational Hindi-English mix tone."""

    try:
        result = subprocess.run(
            ["ollama", "run", "mistral"],
            input=prompt,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore",
            timeout=30
        )
        
        ai_output = (result.stdout or result.stderr or "").strip()
        
        # Clean AI output
        clean = (
            ai_output
            .replace("<|MODEL_RESPONSE|>", "")
            .replace("</s>", "")
            .replace("```", "")
            .replace("**", "")
            .strip()
        )
        
        # Extract meaningful sentences
        sentences = []
        for line in clean.split('\n'):
            line = line.strip()
            if line and not line.startswith('#') and not line.startswith('*') and not line.startswith('-'):
                # Split by periods but keep sentence structure
                for sentence in line.replace('. ', '.|').split('|'):
                    s = sentence.strip()
                    if s and len(s) > 30 and not s.lower().startswith('here'):
                        sentences.append(s)
                        if len(sentences) >= 5:
                            break
            if len(sentences) >= 5:
                break
        
        if len(sentences) >= 3:
            strategy = ' '.join(sentences[:5])
            # Add context if AI didn't mention key points
            if margin < 15 and "margin" not in strategy.lower():
                strategy += f" ⚠️ Note: At {margin:.0f}% margin, profitability is challenging after platform fees."
            return strategy
        else:
            print(f"⚠️ AI output too short, using enhanced fallback")
            return generate_enhanced_fallback_strategy(
                pricing, sales, competition, base_cost, 
                cost_position, comp_level, profit_per_unit, monthly_revenue_potential
            )
            
    except Exception as e:
        print(f"❌ AI strategy generation failed: {e}")
        return generate_enhanced_fallback_strategy(
            pricing, sales, competition, base_cost,
            cost_position, comp_level, profit_per_unit, monthly_revenue_potential
        )


def generate_enhanced_fallback_strategy(pricing: Dict, sales: Dict, competition: Dict, 
                                       base_cost: float, cost_position: str, comp_level: str,
                                       profit_per_unit: float, monthly_revenue: float) -> str:
    """
    Enhanced fallback with full market awareness - used when AI fails
    """
    margin = pricing['profit_margin']
    demand = sales['market_demand']
    competitors = competition['total_competitors']
    market_avg = pricing.get('market_avg_price', 0)
    recommended = pricing['recommended_price']
    daily_sales = sales['estimated_daily_sales']
    
    # CRITICAL: Cost too high scenario
    if margin < 10 or cost_position in ["CRITICAL", "HIGH"]:
        return f"❌ CRITICAL ALERT: Your cost (₹{base_cost:,.0f}) vs market avg (₹{market_avg:,.0f}) gives only {margin:.1f}% margin. After Amazon/Flipkart fees (15-20%), shipping costs, and potential returns, you'll face NET LOSSES. With {competitors} competitors selling at ₹{market_avg:,.0f}, you cannot compete. Action needed: Negotiate supplier cost down by 40%+ to ₹{base_cost * 0.6:.0f}, find bulk discounts, or pivot to different product category. Current monthly revenue potential is ₹{monthly_revenue:,.0f} but actual profit will be NEGATIVE."
    
    # LOW MARGIN: Warning scenario
    if margin < 20 or cost_position == "SLIGHTLY_HIGH":
        return f"⚠️ TIGHT MARGINS: Your {margin:.1f}% margin (₹{profit_per_unit:,.0f}/unit) is risky in {comp_level.lower()} competition market with {competitors} sellers. After platform fees (15-20% = ₹{recommended * 0.18:.0f}), shipping (₹50-100), returns (5-10%), actual profit drops to ₹{profit_per_unit * 0.65:.0f}/unit. Need {int(30000 / (profit_per_unit * 0.65)):.0f} monthly sales just for ₹30k income. Strategy: Price at ₹{recommended:,.0f}, target Tier-1 cities (Mumbai, Delhi NCR, Bangalore) first, invest in professional photos (₹5000), get 15+ reviews through launch offers. Test with 50 units before scaling. Expected timeline: 3-4 months to break even."
    
    # EXCELLENT: High margin + good demand
    if margin > 40 and demand == "High" and cost_position in ["ULTRA_LOW", "VERY_LOW", "LOW"]:
        return f"🎯 GOLDMINE OPPORTUNITY: You've hit the jackpot! {margin:.0f}% margin (₹{profit_per_unit:,.0f}/unit) in {demand.lower()}-demand market with your cost advantage. Even with {competitors} competitors, you can undercut average price (₹{market_avg:,.0f}) and still profit big. Price aggressively at ₹{recommended:,.0f} to grab market share fast. Target cities: Bangalore (tech buyers), Mumbai (high volume), Delhi NCR (brand conscious). Launch strategy: Start with 100 units, run sponsored ads (₹500/day budget), aim for 4.5★+ rating. Monthly potential: {daily_sales * 30:.0f} sales = ₹{monthly_revenue:,.0f} profit. Scale to 500+ units by month 3. Your cost position is your MOAT - exploit it!"
    
    # GOOD: Decent margin + moderate competition
    if margin > 30 and comp_level in ["LOW", "MODERATE"]:
        return f"✅ SOLID PLAY: {margin:.0f}% margin (₹{profit_per_unit:,.0f}/unit) with {comp_level.lower()} competition ({competitors} sellers) is workable. Your cost (₹{base_cost:,.0f}) vs market (₹{market_avg:,.0f}) gives you flexibility. Price at ₹{recommended:,.0f} for {demand.lower()} demand. Focus on top 3 metros: Mumbai (25-30% sales), Delhi NCR (20-25%), Bangalore (15-20%). Differentiation: Since rating avg is {competition['avg_competitor_rating']:.1f}★, aim for 4.5+★ through quality control and fast shipping. Investment: ₹10k for photos/listing, ₹5k for initial inventory. Expected: {daily_sales * 30:.0f} monthly sales = ₹{monthly_revenue:,.0f} profit by month 2-3. Sustainable business with 6-month horizon."
    
    # MODERATE: Average scenario
    if comp_level in ["HIGH", "VERY_HIGH"]:
        return f"⚡ COMPETITIVE BATTLEGROUND: {competitors} sellers fighting for customers at ₹{market_avg:,.0f} average. Your {margin:.0f}% margin (₹{profit_per_unit:,.0f}/unit) is okay but you need smart positioning. DON'T compete on price alone - that's a race to bottom. Strategy: Create unique angle (e.g., 'Premium for offices', 'Eco-friendly variant', 'Bundle with accessories'). Price at ₹{recommended:,.0f}, target Tier-1 cities initially. Use A+ content, video demos, respond within 2 hours to queries. Expected: Slow start (20-30 units/month initially), ramp to {daily_sales * 30:.0f} units by month 4-5 with ₹{monthly_revenue:,.0f} monthly profit. Requires patience and differentiation - not a get-rich-quick product."
    
    # DEFAULT: Balanced scenario
    return f"📊 BALANCED OPPORTUNITY: {margin:.0f}% margin (₹{profit_per_unit:,.0f} profit/unit) in {demand.lower()}-demand market with {comp_level.lower()} competition. Your cost position is {cost_position.lower().replace('_', ' ')}. Recommended price: ₹{recommended:,.0f} (market avg: ₹{market_avg:,.0f}). Target: Mumbai, Delhi NCR, Bangalore (70% of sales). Realistic timeline: Month 1-2 (test with 50 units, optimize listing), Month 3-4 (scale to 100+ units with reviews), Month 5+ (steady {daily_sales * 30:.0f} monthly sales). Invest in: Professional photos (₹5000), early reviews strategy, responsive customer service. Monthly profit potential: ₹{monthly_revenue:,.0f} once established. Not explosive growth but steady income stream with proper execution."


def generate_fallback_strategy(pricing: Dict, sales: Dict, competition: Dict, base_cost: float) -> str:
    """
    Generate fallback strategy if AI fails - DYNAMIC based on market conditions
    """
    margin = pricing['profit_margin']
    demand = sales['market_demand']
    competitors = competition['total_competitors']
    market_avg = pricing.get('market_avg_price', 0)
    recommended = pricing['recommended_price']
    
    # CRITICAL: Cost too high scenario
    if margin < 10:
        return f"❌ CRITICAL ALERT: With only {margin:.1f}% profit margin, this product is NOT viable for e-commerce. Your cost (₹{base_cost:,.0f}) is too high compared to market average (₹{market_avg:,.0f}). You MUST reduce sourcing costs by at least 40% or abandon this product. After platform fees (15-20%), shipping, returns, and ads, you'll face losses. Explore bulk ordering, direct manufacturers, or different suppliers immediately."
    
    # LOW MARGIN: Warning scenario
    if margin < 20:
        return f"⚠️ RISKY VENTURE: At {margin:.1f}% margin, you're walking a tightrope. Market has {competitors} competitors at avg ₹{market_avg:,.0f}. After Amazon/Flipkart fees (15-20%), shipping (₹50-100), and potential returns (5-10%), your actual profit per unit will be just ₹{(recommended * margin/100 * 0.7):.0f}. You need to sell {int(30000 / (recommended * margin/100 * 0.7))} units monthly just to make ₹30k. Recommendation: Negotiate cost down to ₹{base_cost * 0.7:.0f} OR find a different category with better margins."
    
    # HIGH MARGIN + HIGH DEMAND: Excellent opportunity
    if margin > 40 and demand == "High":
        return f"🎯 EXCELLENT OPPORTUNITY: You're sitting on a goldmine! {margin:.0f}% profit margin in a {demand.lower()}-demand market with {competitors} competitors. Price aggressively at ₹{recommended:,.0f} to capture market share fast. Metro cities (Bangalore, Mumbai, Delhi) will drive 60-70% of sales. Strategy: Launch with 5-10 products for reviews, run sponsored ads at ₹200-500/day budget, and scale to 50-100 units monthly within 3 months. Your cost advantage means you can undercut competition and still profit ₹{(recommended - base_cost):.0f} per unit!"
    
    # GOOD MARGIN + MEDIUM DEMAND: Solid opportunity
    if margin > 30 and demand in ["High", "Medium"]:
        return f"✅ SOLID OPPORTUNITY: {margin:.0f}% margin in {demand.lower()}-demand market gives you ₹{(recommended - base_cost):.0f} profit per unit. With {competitors} competitors, you're not first but not late. Price at ₹{recommended:,.0f} (5% below market avg). Target Tier-1 cities first where customers value quality. Invest in 5-star photos (₹2000-5000), get 10-15 early reviews through friends/family, then scale. Expect 30-50 orders monthly after 2-3 months. Avoid price wars - compete on trust and service."
    
    # HIGH COMPETITION: Strategy needed
    if competitors > 80:
        return f"⚠️ CROWDED MARKET: {competitors} sellers competing for same customers at ₹{market_avg:,.0f}. Your {margin:.0f}% margin gives room to maneuver but you'll need smart positioning. Don't compete on price alone (race to bottom). Strategy: Create unique bundle (e.g., product + accessories), offer extended warranty, focus on specific customer segment (e.g., 'Premium for offices' or 'Budget for students'). Use A+ content, video demos, and respond to every query within 2 hours. Differentiation = survival in crowded markets."
    
    # MEDIUM MARGIN + MEDIUM COMPETITION: Balanced
    if margin > 25 and competitors < 60:
        return f"⚡ BALANCED PLAY: {margin:.0f}% margins with {competitors} competitors is a sweet spot. Market isn't overcrowded yet but opportunity is known. Price at ₹{recommended:,.0f} for {demand.lower()} demand. Your profit of ₹{(recommended - base_cost):.0f} per unit means breaking even at ~20-30 units monthly (covering fixed costs). Scale plan: Month 1 (test with 10-20 units), Month 2-3 (optimize listing, get reviews, scale to 50 units), Month 4+ (100+ units with sponsored ads). Delhi NCR and Mumbai typically contribute 45-50% of revenue in this category."
    
    # DEFAULT: General strategy
    return f"📊 STANDARD OPPORTUNITY: {margin:.0f}% profit margin in {demand.lower()}-demand market with {competitors} competitors. Price competitively at ₹{recommended:,.0f} (near market average ₹{market_avg:,.0f}). Focus on fundamentals: professional product photos (hire photographer, ₹3000-5000), detailed descriptions highlighting benefits, 10+ initial reviews for trust. Start with small inventory (20-30 units) to test market response. Expect 2-3 months to gain momentum. Key metrics: aim for 4+ star rating, <2% return rate, and respond to customers within 24 hours. Scale gradually based on demand."


def generate_warnings(pricing: Dict, competition: Dict, base_cost: float) -> List[str]:
    """
    Generate warning messages for potential issues - DYNAMIC & INTELLIGENT
    """
    warnings = []
    
    market_avg = pricing.get('market_avg_price', 0)
    market_min = pricing.get('market_min_price', 0)
    market_max = pricing.get('market_max_price', 0)
    profit_margin = pricing['profit_margin']
    recommended_price = pricing['recommended_price']
    
    # 🚨 CRITICAL: Cost higher than market prices
    if base_cost > market_avg:
        loss_percentage = ((base_cost - market_avg) / market_avg) * 100
        warnings.append(f"🚨 CRITICAL: Your cost (₹{base_cost:,.0f}) is {loss_percentage:.0f}% HIGHER than market average (₹{market_avg:,.0f})! You CANNOT compete profitably in this market.")
        warnings.append(f"💡 Solution: Reduce your sourcing cost to under ₹{market_avg * 0.6:,.0f} to achieve 40% profit margin, or find a different product category.")
        return warnings  # Return immediately - this is critical
    
    # ⚠️ HIGH ALERT: Cost close to market average
    if base_cost > market_avg * 0.8:
        warnings.append(f"⚠️ HIGH RISK: Your cost (₹{base_cost:,.0f}) is very close to market average (₹{market_avg:,.0f}). Profit margin will be only {profit_margin:.1f}%.")
        warnings.append(f"💡 Recommendation: Try to negotiate cost down to ₹{market_avg * 0.5:,.0f} for healthier 50% margins.")
        
    # ⚠️ Cost higher than minimum market price
    if base_cost > market_min:
        warnings.append(f"⚠️ WARNING: Your cost (₹{base_cost:,.0f}) is higher than cheapest competitor (₹{market_min:,.0f}). Difficult to compete on price.")
        warnings.append(f"💡 Strategy: Focus on premium positioning, quality, or unique features to justify higher prices.")
    
    # Low profit margin warning
    if profit_margin < 10:
        warnings.append(f"🔴 DANGER: Only {profit_margin:.1f}% profit margin! This is unsustainable for e-commerce (fees, returns, ads eat into profit).")
        warnings.append(f"💡 Action: You need at least 30-40% margin. Reduce cost or find higher-priced category.")
    elif profit_margin < 20:
        warnings.append(f"⚠️ LOW MARGIN: {profit_margin:.1f}% profit is risky. After platform fees (15-20%), shipping, and returns, actual profit will be minimal.")
        warnings.append(f"💡 Tip: Aim for 35-50% margin for sustainable e-commerce business.")
    
    # High competition warning with dynamic threshold
    if competition['total_competitors'] > 100:
        warnings.append(f"⚠️ EXTREMELY COMPETITIVE: {competition['total_competitors']} competitors! Very hard to get visibility.")
        warnings.append(f"💡 Strategy: Consider niche variations, unique bundles, or focus on underserved sub-categories.")
    elif competition['total_competitors'] > 50:
        warnings.append(f"⚠️ High competition ({competition['total_competitors']} sellers). You'll need strong differentiation and marketing.")
        warnings.append(f"💡 Tip: Invest in quality photos, A+ content, and early customer reviews to stand out.")
    
    # Price positioning warnings
    if recommended_price > market_avg * 1.3:
        warnings.append(f"⚠️ PRICING RISK: Recommended price (₹{recommended_price:,.0f}) is {((recommended_price/market_avg - 1) * 100):.0f}% above market average. May be hard to sell.")
        warnings.append(f"💡 Option: Start at market average (₹{market_avg:,.0f}) then increase price once you get reviews and trust.")
    
    # Competitive positioning
    avg_competitor_price = competition['avg_competitor_price']
    if base_cost > avg_competitor_price * 0.7:
        warnings.append(f"⚠️ COST DISADVANTAGE: Competitors likely source at ₹{avg_competitor_price * 0.5:,.0f}-{avg_competitor_price * 0.6:,.0f}. Your cost (₹{base_cost:,.0f}) puts you at disadvantage.")
        warnings.append(f"💡 Action: Explore bulk ordering, different suppliers, or direct manufacturer sourcing to reduce costs.")
    
    # Low confidence warning
    if pricing['confidence'] == "Critical":
        warnings.append("🚨 CRITICAL: This product is NOT viable with your current cost structure. Do not proceed without reducing costs significantly.")
    elif pricing['confidence'] == "Low":
        warnings.append("⚠️ Limited market data or poor fit. Recommendations may not be accurate. Consider testing with small inventory first.")
    
    # Good scenario
    if not warnings and profit_margin > 35:
        warnings.append(f"✅ EXCELLENT OPPORTUNITY: {profit_margin:.0f}% profit margin with {competition['total_competitors']} competitors. Good balance!")
        warnings.append(f"💡 Strategy: Price at ₹{recommended_price:,.0f}, invest in quality listing, and scale quickly before market saturates.")
    elif not warnings:
        warnings.append(f"✅ VIABLE PRODUCT: {profit_margin:.1f}% margin. Market conditions are acceptable.")
        warnings.append(f"💡 Focus: Quality photos, competitive shipping, and excellent customer service to maximize conversions.")
    
    return warnings


# ============================================
# NEW ENDPOINTS FOR HISTORY & ANALYTICS
# ============================================

@app.get("/product-tracker/history")
def get_tracker_history(
    user_email: str = Query(..., description="User's email"),
    limit: int = Query(20, description="Number of results"),
    offset: int = Query(0, description="Pagination offset"),
    db: Session = Depends(get_db)
):
    """
    Get user's product tracker analysis history
    """
    try:
        history = crud.get_user_tracker_history(db, user_email, limit, offset)
        
        return {
            "success": True,
            "count": len(history),
            "data": [
                {
                    "id": h.id,
                    "product_name": h.product_name,
                    "category": h.category,
                    "source": h.source,
                    "base_cost": float(h.base_cost),
                    "recommended_price": float(h.recommended_price) if h.recommended_price else None,
                    "profit_margin": float(h.profit_margin) if h.profit_margin else None,
                    "market_demand": h.market_demand,
                    "created_at": h.created_at.isoformat()
                }
                for h in history
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/product-tracker/analysis/{analysis_id}")
def get_analysis_details(
    analysis_id: int,
    db: Session = Depends(get_db)
):
    """
    Get detailed analysis by ID
    """
    try:
        analysis = crud.get_tracker_analysis_by_id(db, analysis_id)
        
        if not analysis:
            raise HTTPException(status_code=404, detail="Analysis not found")
        
        return {
            "success": True,
            "data": {
                "id": analysis.id,
                "product_name": analysis.product_name,
                "category": analysis.category,
                "source": analysis.source,
                "base_cost": float(analysis.base_cost),
                "pricing": {
                    "recommended_price": float(analysis.recommended_price) if analysis.recommended_price else None,
                    "min_price": float(analysis.min_price) if analysis.min_price else None,
                    "max_price": float(analysis.max_price) if analysis.max_price else None,
                    "profit_margin": float(analysis.profit_margin) if analysis.profit_margin else None,
                    "confidence": analysis.pricing_confidence
                },
                "sales": {
                    "estimated_monthly_sales": f"{analysis.estimated_monthly_sales_min:,} - {analysis.estimated_monthly_sales_max:,}",
                    "estimated_daily_sales": float(analysis.estimated_daily_sales) if analysis.estimated_daily_sales else None,
                    "market_demand": analysis.market_demand
                },
                "competition": {
                    "total_competitors": analysis.total_competitors,
                    "avg_competitor_price": float(analysis.avg_competitor_price) if analysis.avg_competitor_price else None,
                    "avg_competitor_rating": float(analysis.avg_competitor_rating) if analysis.avg_competitor_rating else None,
                    "top_competitor": {
                        "name": analysis.top_competitor_name,
                        "price": float(analysis.top_competitor_price) if analysis.top_competitor_price else None
                    } if analysis.top_competitor_name else None
                },
                "location_insights": analysis.location_insights,
                "ai_strategy": analysis.ai_strategy,
                "warnings": analysis.warnings,
                "created_at": analysis.created_at.isoformat()
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.delete("/product-tracker/analysis/{analysis_id}")
def delete_analysis(
    analysis_id: int,
    user_email: str = Query(..., description="User's email for verification"),
    db: Session = Depends(get_db)
):
    """
    Delete an analysis (only if it belongs to the user)
    """
    try:
        success = crud.delete_tracker_analysis(db, analysis_id, user_email)
        
        if success:
            return {"success": True, "message": "Analysis deleted successfully"}
        else:
            raise HTTPException(status_code=404, detail="Analysis not found or unauthorized")
            
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/product-tracker/stats")
def get_tracker_stats(db: Session = Depends(get_db)):
    """
    Get overall product tracker statistics
    """
    try:
        # Total analyses
        total_analyses = db.query(models.ProductTrackerAnalysis).count()
        
        # Popular categories
        popular_categories = crud.get_popular_categories(db, limit=5)
        
        # Recent analyses
        recent = db.query(models.ProductTrackerAnalysis)\
            .order_by(models.ProductTrackerAnalysis.created_at.desc())\
            .limit(5)\
            .all()
        
        # Average profit margin
        from sqlalchemy import func
        avg_margin = db.query(func.avg(models.ProductTrackerAnalysis.profit_margin)).scalar()
        
        return {
            "success": True,
            "stats": {
                "total_analyses": total_analyses,
                "average_profit_margin": round(float(avg_margin), 2) if avg_margin else 0,
                "popular_categories": popular_categories,
                "recent_analyses": [
                    {
                        "product_name": r.product_name,
                        "category": r.category,
                        "created_at": r.created_at.isoformat()
                    }
                    for r in recent
                ]
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))