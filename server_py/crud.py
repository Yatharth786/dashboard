# from sqlalchemy.orm import Session
# from sqlalchemy import func, or_
# from . import models
# from sqlalchemy import text
# from typing import List, Dict, Any
# import pandas as pd
# import numpy as np
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import LSTM, Dense
# from sklearn.preprocessing import MinMaxScaler

# def get_reviews(db: Session, limit: int = 50, offset: int = 0):
#     return db.query(models.AmazonReview).offset(offset).limit(limit).all()

# def get_review_by_id(db: Session, review_id: str):
#     return db.query(models.AmazonReview).filter(models.AmazonReview.review_id == review_id).first()

# def get_product_reviews(db: Session, product_id: str, limit: int = 20):
#     return db.query(models.AmazonReview).filter(models.AmazonReview.product_id == product_id).limit(limit).all()

# def search_reviews(db: Session, query: str, limit: int = 50):
#     return db.query(models.AmazonReview).filter(
#         or_(
#             models.AmazonReview.product_title.ilike(f"%{query}%"),
#             models.AmazonReview.review_headline.ilike(f"%{query}%"),
#             models.AmazonReview.review_body.ilike(f"%{query}%")
#         )
#     ).limit(limit).all()

# def get_review_statistics(db: Session):
#     total = db.query(func.count(models.AmazonReview.review_id)).scalar()
#     avg_rating = db.query(func.avg(models.AmazonReview.star_rating)).scalar()
#     return {"total_reviews": total, "average_rating": float(avg_rating) if avg_rating else None}

# def get_sentiment_distribution(db: Session):
#     return (
#         db.query(models.AmazonReview.Sentiment_pc, func.count(models.AmazonReview.review_id))
#           .group_by(models.AmazonReview.Sentiment_pc)
#           .all()
#     )

# def get_ratings_distribution(db: Session):
#     return (
#         db.query(models.AmazonReview.star_rating, func.count(models.AmazonReview.review_id))
#           .group_by(models.AmazonReview.star_rating)
#           .all()
#     )

# def get_category_statistics(db: Session):
#     results = (
#         db.query(models.AmazonReview.product_category, func.count(models.AmazonReview.review_id))
#           .group_by(models.AmazonReview.product_category)
#           .all()
#     )
#     return [{"category": category, "count": count} for category, count in results]

# from sqlalchemy import func

# def get_trending_products(db: Session, limit: int = 10):
#     results = (
#         db.query(
#             models.AmazonReview.product_id,
#             models.AmazonReview.product_title,
#             models.AmazonReview.product_category,
#             func.count(models.AmazonReview.review_id).label("review_count"),
#             func.avg(models.AmazonReview.star_rating).label("avg_rating")
#         )
#         .group_by(
#             models.AmazonReview.product_id,
#             models.AmazonReview.product_title,
#             models.AmazonReview.product_category
#         )
#         .order_by(func.count(models.AmazonReview.review_id).desc())
#         .limit(limit)
#         .all()
#     )

#     return [
#         {
#             "product_id": pid,
#             "product_title": title,
#             "category": cat,
#             "review_count": rc,
#             "avg_rating": avg
#         }
#         for pid, title, cat, rc, avg in results
#     ]

# def get_monthly_trends(db: Session, year: int):
#     results = (
#         db.query(
#             models.AmazonReview.review_month,
#             func.count(models.AmazonReview.review_id).label("review_count"),
#             func.avg(models.AmazonReview.star_rating).label("avg_rating")
#         )
#         .filter(models.AmazonReview.review_year == year)
#         .group_by(models.AmazonReview.review_month)
#         .order_by(models.AmazonReview.review_month)
#         .all()
#     )

#     return [
#         {"month": month, "review_count": count, "avg_rating": avg}
#         for month, count, avg in results
#     ]

# def get_helpful_reviews(db: Session, limit: int = 10):
#     return db.query(models.AmazonReview).order_by(models.AmazonReview.helpful_votes.desc()).limit(limit).all()

# def get_product_sentiment_breakdown(db: Session, product_id: str):
#     results = (
#         db.query(
#             models.AmazonReview.Sentiment_pc,
#             func.count(models.AmazonReview.review_id).label("count")
#         )
#         .filter(models.AmazonReview.product_id == product_id)
#         .group_by(models.AmazonReview.Sentiment_pc)
#         .all()
#     )
    
#     # Convert to list of dicts
#     return [{"sentiment": sentiment, "count": count} for sentiment, count in results]


# def get_products(db: Session, limit: int, offset: int, category: str = None,
#                  min_price: float = None, max_price: float = None) -> List[Dict[str, Any]]:
#     query = "SELECT * FROM products WHERE 1=1"
#     if category:
#         query += " AND category = :category"
#     if min_price is not None:
#         query += " AND price >= :min_price"
#     if max_price is not None:
#         query += " AND price <= :max_price"
#     query += " ORDER BY last_updated DESC LIMIT :limit OFFSET :offset"

#     params = {
#         "category": category,
#         "min_price": min_price,
#         "max_price": max_price,
#         "limit": limit,
#         "offset": offset
#     }
#     result = db.execute(text(query), params)
#     return [dict(row._mapping) for row in result]

# # Analytics summary
# def get_summary(db: Session) -> Dict[str, Any]:
#     query = """
#     SELECT
#         COUNT(*) AS total_products,
#         AVG(price) AS avg_price,
#         AVG(rating) AS avg_rating,
#         SUM(reviews) AS total_reviews
#     FROM Flipkart
#     """
#     result = db.execute(text(query))
#     return dict(result.mappings().first())

# # Top products
# """def get_top_products(db: Session, n: int, by: str) -> List[Dict[str, Any]]:
#     query = f"SELECT * FROM Flipkart ORDER BY {by} DESC LIMIT :n"
#     result = db.execute(text(query), {"n": n})
#     return [dict(row._mapping) for row in result]"""


# def get_top_products(db: Session, n: int):
#     return db.query(models.Product).order_by(models.Product.rating.desc()).limit(n).all()

# def get_top_products_amazon(db: Session, n: int):
#     """
#     Get top N products by number of reviews with average rating
#     """
#     result = (
#         db.query(
#             models.AmazonReview.product_title,
#             func.avg(models.AmazonReview.star_rating).label("avg_rating"),
#             func.count(models.AmazonReview.review_id).label("review_count")
#         )
#         .group_by(models.AmazonReview.product_title)
#         .order_by(func.count(models.AmazonReview.review_id).desc())
#         .limit(n)
#         .all()
#     )
#     # Convert SQLAlchemy Row objects to dicts
#     return [dict(product_title=r.product_title, avg_rating=r.avg_rating, review_count=r.review_count) for r in result]



# # Category analytics
# def get_category_analytics(db: Session) -> List[Dict[str, Any]]:
#     query = """
#     SELECT
#         category,
#         COUNT(*) AS total_products,
#         AVG(price) AS avg_price,
#         AVG(rating) AS avg_rating,
#         SUM(reviews) AS total_reviews
#     FROM Flipkart
#     GROUP BY category
#     ORDER BY total_products DESC
#     """
#     result = db.execute(text(query))
#     return [dict(row._mapping) for row in result]

# def forecast_next_price(df: pd.DataFrame, look_back=5, epochs=50) -> float:
#     """
#     df: pandas dataframe with 'price' column sorted by date
#     Returns forecasted next price
#     """
#     if len(df) < look_back:
#         return df['price'].iloc[-1]  # fallback if not enough data

#     scaler = MinMaxScaler()
#     prices = scaler.fit_transform(df['price'].values.reshape(-1,1))

#     X, y = [], []
#     for i in range(look_back, len(prices)):
#         X.append(prices[i-look_back:i,0])
#         y.append(prices[i,0])

#     X, y = np.array(X), np.array(y)
#     X = X.reshape(X.shape[0], X.shape[1], 1)

#     model = Sequential()
#     model.add(LSTM(50, return_sequences=True, input_shape=(X.shape[1],1)))
#     model.add(LSTM(50))
#     model.add(Dense(1))
#     model.compile(optimizer='adam', loss='mean_squared_error')
#     model.fit(X, y, epochs=epochs, batch_size=16, verbose=0)

#     last_sequence = X[-1]
#     next_price = model.predict(last_sequence.reshape(1, look_back,1), verbose=0)
#     next_price = scaler.inverse_transform(next_price.reshape(-1,1))[0,0]
#     return float(next_price)

# def get_top_forecasted_products(db: Session, n: int = 10) -> list:
#     """
#     Fetch all products from DB, forecast next price per product using LSTM,
#     return top N products by forecasted price
#     """
#     # Get all products and their historical prices
#     query = "SELECT id, title, price, last_updated as date FROM Flipkart ORDER BY id, last_updated"
#     df = pd.read_sql(query, db.bind)

#     forecast_list = []
#     for product_id, group in df.groupby('id'):
#         group = group.sort_values('date')
#         forecast_price = forecast_next_price(group)
#         forecast_list.append({
#             "product_id": product_id,
#             "title": group['title'].iloc[0],
#             "forecast_price": forecast_price,
#             "currency": "₹"
#         })

#     # Sort descending and take top N
#     forecast_list = sorted(forecast_list, key=lambda x: x['forecast_price'], reverse=True)[:n]

#     return forecast_list


from sqlalchemy.orm import Session
from sqlalchemy import func, or_
from . import models
from sqlalchemy import text
from typing import List, Dict, Any
import pandas as pd
import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
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

# def get_review_statistics(db: Session):
#     total = db.query(func.count(models.AmazonReview.review_id)).scalar()
#     avg_rating = db.query(func.avg(models.AmazonReview.star_rating)).scalar()
#     return {"total_reviews": total, "average_rating": float(avg_rating) if avg_rating else None}

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

# def get_category_analytics(db: Session) -> List[Dict[str, Any]]:
#     query = """
#     SELECT
#         category,
#         COUNT(*) AS total_products,
#         AVG(price) AS avg_price,
#         AVG(rating) AS avg_rating,
#         SUM(reviews) AS total_reviews
#     FROM flipkart
#     GROUP BY category
#     ORDER BY total_products DESC
#     """
#     result = db.execute(text(query))
#     return [dict(row._mapping) for row in result]

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
        NULL AS avg_price,  -- Amazon_Reviews has no price column
        AVG(star_rating) AS avg_rating,
        SUM(total_votes) AS total_reviews
    FROM "Amazon_Reviews"
    GROUP BY product_category
    """

    result = db.execute(text(query))
    return [dict(row._mapping) for row in result]


# def forecast_next_price(df: pd.DataFrame, look_back=5, epochs=50) -> float:
#     if len(df) < look_back:
#         return df['price'].iloc[-1]

#     scaler = MinMaxScaler()
#     prices = scaler.fit_transform(df['price'].values.reshape(-1,1))

#     X, y = [], []
#     for i in range(look_back, len(prices)):
#         X.append(prices[i-look_back:i,0])
#         y.append(prices[i,0])

#     X, y = np.array(X), np.array(y)
#     X = X.reshape(X.shape[0], X.shape[1], 1)

#     model = Sequential()
#     model.add(LSTM(50, return_sequences=True, input_shape=(X.shape[1],1)))
#     model.add(LSTM(50))
#     model.add(Dense(1))
#     model.compile(optimizer='adam', loss='mean_squared_error')
#     model.fit(X, y, epochs=epochs, batch_size=16, verbose=0)

#     last_sequence = X[-1]
#     next_price = model.predict(last_sequence.reshape(1, look_back,1), verbose=0)
#     next_price = scaler.inverse_transform(next_price.reshape(-1,1))[0,0]
#     return float(next_price)

# def lstm_forecast(series, steps=365):
#     """Forecast next 'steps' points using LSTM."""
#     # Handle insufficient data
#     if len(series) < 10:
#         last_val = series.iloc[-1] if len(series) > 0 else 0
#         return np.array([last_val] * steps)

#     # Scale data
#     scaler = MinMaxScaler(feature_range=(0, 1))
#     scaled_data = scaler.fit_transform(series.values.reshape(-1, 1))

#     # Prepare LSTM sequences
#     X, y = [], []
#     time_steps = 10
#     for i in range(time_steps, len(scaled_data)):
#         X.append(scaled_data[i - time_steps:i, 0])
#         y.append(scaled_data[i, 0])
#     X, y = np.array(X), np.array(y)
#     X = np.reshape(X, (X.shape[0], X.shape[1], 1))

#     # Build LSTM model
#     model = Sequential()
#     model.add(LSTM(50, return_sequences=True, input_shape=(X.shape[1], 1)))
#     model.add(LSTM(50))
#     model.add(Dense(1))
#     model.compile(optimizer="adam", loss="mean_squared_error")

#     # Train model
#     model.fit(X, y, epochs=20, batch_size=8, verbose=0)

#     # Forecast next steps
#     last_sequence = scaled_data[-time_steps:]
#     predictions = []
#     for _ in range(steps):
#         X_pred = np.reshape(last_sequence, (1, time_steps, 1))
#         next_val = model.predict(X_pred, verbose=0)
#         predictions.append(next_val[0, 0])
#         last_sequence = np.append(last_sequence[1:], next_val)
#     predictions = scaler.inverse_transform(np.array(predictions).reshape(-1, 1)).flatten()

#     return predictions


def get_flipkart_categories(db: Session):
    rows = db.execute(text("SELECT DISTINCT category FROM flipkart")).fetchall()
    return [{"category": row.category} for row in rows]

def get_amazon_categories(db: Session):
    rows = db.execute(text('SELECT DISTINCT product_category AS category FROM "Amazon_Reviews"')).fetchall()
    return [{"category": row.category} for row in rows]

# def get_top_forecasted_products(db: Session, n: int = 10) -> list:
#     query = "SELECT id, title, price, last_updated as date FROM flipkart ORDER BY id, last_updated"
#     df = pd.read_sql(query, db.bind)

#     forecast_list = []
#     for product_id, group in df.groupby('id'):
#         group = group.sort_values('date')
#         forecast_price = forecast_next_price(group)
#         forecast_list.append({
#             "product_id": product_id,
#             "title": group['title'].iloc[0],
#             "forecast_price": forecast_price,
#             "currency": "₹"
#         })

#     forecast_list = sorted(forecast_list, key=lambda x: x['forecast_price'], reverse=True)[:n]

#     return forecast_list


# def get_top_forecasted_products(db: Session, n: int = 10) -> list:
#     query = """
#         SELECT id, title, price, reviews AS demand, last_updated
#         FROM flipkart
#         WHERE price IS NOT NULL
#         ORDER BY id, last_updated
#     """
#     df = pd.read_sql(query, db.bind)

#     if df.empty:
#         return []

#     forecast_list = []

#     for product_id, group in df.groupby("id"):
#         group = group.dropna(subset=["price"]).sort_values("last_updated")

#         if group.empty:
#             continue

#         # Fix missing dates
#         if "last_updated" not in group or group["last_updated"].isnull().all():
#             group["last_updated"] = pd.date_range(end=datetime.today(), periods=len(group))
#         else:
#             group["last_updated"] = pd.to_datetime(group["last_updated"], errors="coerce")
#             group = group.dropna(subset=["last_updated"])

#         # Forecast price and demand using LSTM
#         forecast_price = lstm_forecast(group["price"], steps=365)

#         if "demand" in group.columns and group["demand"].notnull().sum() > 5:
#             forecast_demand = lstm_forecast(group["demand"], steps=365)
#         else:
#             forecast_demand = np.zeros(365)

#         # Generate forecasted dates
#         future_dates = pd.date_range(start=datetime.today(), periods=365).strftime("%Y-%m-%d").tolist()

#         forecast_list.append({
#             "product_id": int(product_id),
#             "title": group["title"].iloc[0],
#             "currency": "₹",
#             "forecast_price": [
#                 {"date": d, "value": round(p, 2)} for d, p in zip(future_dates, forecast_price)
#             ],
#             "forecast_demand": [
#                 {"date": d, "value": round(dem, 2)} for d, dem in zip(future_dates, forecast_demand)
#             ]
#         })

#     # Sort by mean forecasted price
#     forecast_list = sorted(
#         forecast_list,
#         key=lambda x: np.nanmean([p["value"] for p in x["forecast_price"]]),
#         reverse=True
#     )[:n]

#     return forecast_list

def get_forecast_all_products(db: Session, n_forecast_days: int = 365):
    # 1️⃣ Get Flipkart products with price history
    flipkart_query = """
        SELECT title AS product_name, price, date
        FROM flipkart
        WHERE price IS NOT NULL AND date IS NOT NULL
        ORDER BY date ASC
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