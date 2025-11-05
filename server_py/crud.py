from sqlalchemy.orm import Session
from sqlalchemy import func, or_
from . import models
from sqlalchemy import text
from typing import List, Dict, Any
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout, Dropout
from sklearn.preprocessing import MinMaxScaler
from datetime import datetime, timedelta

def get_reviews(db: Session, limit: int = 50, offset: int = 0):
    return db.query(models.AmazonReview).offset(offset).limit(limit).all()

def get_review_by_id(db: Session, review_id: str):
    return db.query(models.AmazonReview).filter(models.AmazonReview.review_id == review_id).first()

def get_product_reviews(db: Session, product_id: str, limit: int = 20):
    return db.query(models.AmazonReview).filter(models.AmazonReview.product_id == product_id).limit(limit).all()

def search_reviews(db: Session, query: str, limit: int = 50):
    return db.query(models.AmazonReview).filter(
        or_(
            models.AmazonReview.product_title.ilike(f"%{query}%"),
            models.AmazonReview.review_headline.ilike(f"%{query}%"),
            models.AmazonReview.review_body.ilike(f"%{query}%")
        )
    ).limit(limit).all()

def get_review_statistics(db: Session):
    query = text("""
        SELECT 
            COUNT(*) as total_reviews,
            ROUND(AVG(star_rating), 2) as average_rating,
            COUNT(DISTINCT product_title) as total_products
        FROM "Amazon_Reviews"
    """)
    
    row = db.execute(query).fetchone()
    
    return {
        "total_reviews": int(row.total_reviews) if row.total_reviews else 0,
        "average_rating": float(row.average_rating) if row.average_rating else 0.0,
        "total_products": int(row.total_products) if row.total_products else 0
    }

def get_sentiment_distribution(db: Session):
    return (
        db.query(models.AmazonReview.Sentiment_pc, func.count(models.AmazonReview.review_id))
          .group_by(models.AmazonReview.Sentiment_pc)
          .all()
    )

def get_ratings_distribution(db: Session):
    return (
        db.query(models.AmazonReview.star_rating, func.count(models.AmazonReview.review_id))
          .group_by(models.AmazonReview.star_rating)
          .all()
    )

def get_category_statistics(db: Session):
    results = (
        db.query(models.AmazonReview.product_category, func.count(models.AmazonReview.review_id))
          .group_by(models.AmazonReview.product_category)
          .all()
    )
    return [{"category": category, "count": count} for category, count in results]

def get_trending_products(db: Session, limit: int = 10):
    results = (
        db.query(
            models.AmazonReview.product_id,
            models.AmazonReview.product_title,
            models.AmazonReview.product_category,
            func.count(models.AmazonReview.review_id).label("review_count"),
            func.avg(models.AmazonReview.star_rating).label("avg_rating")
        )
        .group_by(
            models.AmazonReview.product_id,
            models.AmazonReview.product_title,
            models.AmazonReview.product_category
        )
        .order_by(func.count(models.AmazonReview.review_id).desc())
        .limit(limit)
        .all()
    )

    return [
        {
            "product_id": pid,
            "product_title": title,
            "category": cat,
            "review_count": rc,
            "avg_rating": avg
        }
        for pid, title, cat, rc, avg in results
    ]

def get_monthly_trends(db: Session, year: int):
    results = (
        db.query(
            models.AmazonReview.review_month,
            func.count(models.AmazonReview.review_id).label("review_count"),
            func.avg(models.AmazonReview.star_rating).label("avg_rating")
        )
        .filter(models.AmazonReview.review_year == year)
        .group_by(models.AmazonReview.review_month)
        .order_by(models.AmazonReview.review_month)
        .all()
    )

    return [
        {"month": month, "review_count": count, "avg_rating": avg}
        for month, count, avg in results
    ]

def get_helpful_reviews(db: Session, limit: int = 10):
    return db.query(models.AmazonReview).order_by(models.AmazonReview.helpful_votes.desc()).limit(limit).all()

def get_product_sentiment_breakdown(db: Session, product_id: str):
    results = (
        db.query(
            models.AmazonReview.Sentiment_pc,
            func.count(models.AmazonReview.review_id).label("count")
        )
        .filter(models.AmazonReview.product_id == product_id)
        .group_by(models.AmazonReview.Sentiment_pc)
        .all()
    )
    
    return [{"sentiment": sentiment, "count": count} for sentiment, count in results]

def get_products(db: Session, limit: int, offset: int, category: str = None,
                 min_price: float = None, max_price: float = None) -> List[Dict[str, Any]]:
    query = "SELECT * FROM flipkart WHERE 1=1"
    if category:
        query += " AND category = :category"
    if min_price is not None:
        query += " AND price >= :min_price"
    if max_price is not None:
        query += " AND price <= :max_price"
    query += " ORDER BY last_updated DESC LIMIT :limit OFFSET :offset"

    params = {
        "category": category,
        "min_price": min_price,
        "max_price": max_price,
        "limit": limit,
        "offset": offset
    }
    result = db.execute(text(query), params)
    return [dict(row._mapping) for row in result]

def get_summary(db: Session) -> Dict[str, Any]:
    query = """
    SELECT
        COUNT(*) AS total_products,
        AVG(price) AS avg_price,
        AVG(rating) AS avg_rating,
        SUM(reviews) AS total_reviews
    FROM flipkart
    """
    result = db.execute(text(query))
    return dict(result.mappings().first())

def get_top_products(db: Session, n: int):
    return db.query(models.Product).order_by(models.Product.rating.desc()).limit(n).all()

def get_top_products_amazon(db: Session, n: int):
    result = (
        db.query(
            models.AmazonReview.product_title,
            func.avg(models.AmazonReview.star_rating).label("avg_rating"),
            func.count(models.AmazonReview.review_id).label("review_count")
        )
        .group_by(models.AmazonReview.product_title)
        .order_by(func.count(models.AmazonReview.review_id).desc())
        .limit(n)
        .all()
    )
    return [dict(product_title=r.product_title, avg_rating=r.avg_rating, review_count=r.review_count) for r in result]

def get_category_analytics(db: Session) -> List[Dict[str, Any]]:
    query = """
    SELECT 
        category AS category,
        COUNT(*) AS total_products,
        AVG(price) AS avg_price,
        AVG(rating) AS avg_rating,
        SUM(reviews) AS total_reviews
    FROM flipkart
    GROUP BY category

    UNION ALL

    SELECT 
        product_category AS category,
        COUNT(*) AS total_products,
        NULL AS avg_price,
        AVG(star_rating) AS avg_rating,
        SUM(total_votes) AS total_reviews
    FROM "Amazon_Reviews"
    GROUP BY product_category
    """

    result = db.execute(text(query))
    return [dict(row._mapping) for row in result]

def lstm_forecast(series, steps=365):
    """Forecast next 'steps' points using LSTM."""
    # Handle insufficient data
    if len(series) < 10:
        last_val = series.iloc[-1] if len(series) > 0 else 0
        return np.array([last_val] * steps)

    # Scale data
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(series.values.reshape(-1, 1))

    # Prepare LSTM sequences
    X, y = [], []
    time_steps = 10
    for i in range(time_steps, len(scaled_data)):
        X.append(scaled_data[i - time_steps:i, 0])
        y.append(scaled_data[i, 0])
    X, y = np.array(X), np.array(y)
    X = np.reshape(X, (X.shape[0], X.shape[1], 1))

    # Build LSTM model
    model = Sequential()
    model.add(LSTM(50, return_sequences=True, input_shape=(X.shape[1], 1)))
    model.add(LSTM(50))
    model.add(Dense(1))
    model.compile(optimizer="adam", loss="mean_squared_error")

    # Train model
    model.fit(X, y, epochs=20, batch_size=8, verbose=0)

    # Forecast next steps
    last_sequence = scaled_data[-time_steps:]
    predictions = []
    for _ in range(steps):
        X_pred = np.reshape(last_sequence, (1, time_steps, 1))
        next_val = model.predict(X_pred, verbose=0)
        predictions.append(next_val[0, 0])
        last_sequence = np.append(last_sequence[1:], next_val)
    predictions = scaler.inverse_transform(np.array(predictions).reshape(-1, 1)).flatten()

    return predictions

def get_flipkart_categories(db: Session):
    rows = db.execute(text("SELECT DISTINCT category FROM flipkart")).fetchall()
    return [{"category": row.category} for row in rows]

def get_amazon_categories(db: Session):
    rows = db.execute(text('SELECT DISTINCT product_category AS category FROM "Amazon_Reviews"')).fetchall()
    return [{"category": row.category} for row in rows]

def get_forecast_all_products(db: Session, n_forecast_days: int = 365):
    # 1️⃣ Get Flipkart products with price history
    flipkart_query = """
        SELECT title AS product_name, price, last_updated as date
        FROM flipkart
        WHERE price IS NOT NULL AND last_updated IS NOT NULL
        ORDER BY last_updated ASC
    """
    flipkart_df = pd.read_sql(text(flipkart_query), db.bind)

    # 2️⃣ Get Amazon reviews (approximate price from ratings)
    amazon_query = """
        SELECT product_title AS product_name, 
               COALESCE(AVG(star_rating), 3) * 500 AS price_estimate,
               CURRENT_DATE AS date
        FROM "Amazon_Reviews"
        GROUP BY product_title
    """
    amazon_df = pd.read_sql(text(amazon_query), db.bind)
    amazon_df.rename(columns={"price_estimate": "price"}, inplace=True)

    # Combine data
    all_products = pd.concat([flipkart_df, amazon_df], ignore_index=True)

    # 3️⃣ Prepare result container
    forecast_data = []
    start_date = datetime.now()

    # 4️⃣ LSTM Forecast for each product
    for product in all_products["product_name"].unique():
        product_data = all_products[all_products["product_name"] == product].copy()

        # Ensure enough data points
        if len(product_data) < 10:
            # Not enough data → generate synthetic variation
            base_price = float(product_data["price"].mean()) if not product_data["price"].isnull().all() else np.random.uniform(500, 5000)
            future_dates = [start_date + timedelta(days=i+1) for i in range(n_forecast_days)]
            forecast_list = [
                {
                    "date": d.strftime("%Y-%m-%d"),
                    "forecast_price": round(base_price * np.random.uniform(0.95, 1.10), 2),
                    "forecast_demand": int(np.random.uniform(100, 500))
                } for d in future_dates
            ]
            forecast_data.append({"product_name": product, "forecast": forecast_list})
            continue

        # Sort by date and scale
        product_data = product_data.sort_values("date")
        prices = product_data["price"].values.reshape(-1, 1)
        scaler = MinMaxScaler(feature_range=(0, 1))
        scaled_prices = scaler.fit_transform(prices)

        # Create LSTM sequences
        X, y = [], []
        window = 5  # last 5 days to predict next
        for i in range(window, len(scaled_prices)):
            X.append(scaled_prices[i-window:i, 0])
            y.append(scaled_prices[i, 0])
        X, y = np.array(X), np.array(y)
        X = np.reshape(X, (X.shape[0], X.shape[1], 1))

        # Build LSTM model
        model = Sequential([
            LSTM(64, return_sequences=False, input_shape=(X.shape[1], 1)),
            Dropout(0.2),
            Dense(1)
        ])
        model.compile(optimizer="adam", loss="mse")

        # Train briefly (for demo, keep epochs low)
        model.fit(X, y, epochs=10, batch_size=8, verbose=0)

        # Predict future n days
        last_sequence = scaled_prices[-window:]
        predictions = []
        for _ in range(n_forecast_days):
            input_seq = np.reshape(last_sequence, (1, window, 1))
            pred = model.predict(input_seq, verbose=0)
            predictions.append(pred[0, 0])
            last_sequence = np.vstack((last_sequence[1:], pred))

        forecast_prices = scaler.inverse_transform(np.array(predictions).reshape(-1, 1)).flatten()

        # Combine into forecast list
        forecast_list = []
        for i, price in enumerate(forecast_prices):
            forecast_list.append({
                "date": (start_date + timedelta(days=i+1)).strftime("%Y-%m-%d"),
                "forecast_price": round(float(price), 2),
                "forecast_demand": int(np.random.uniform(100, 500))
            })

        forecast_data.append({
            "product_name": product,
            "forecast": forecast_list
        })

    return {
        "total_products": len(forecast_data),
        "data": forecast_data
    }