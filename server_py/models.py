from sqlalchemy import Column, String, Text, Integer, Float, Boolean, JSON, TIMESTAMP, ARRAY, DateTime
from .database_config import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"
 
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    email = Column(String(100), unique=True, index=True)
    password_hash = Column(String)
    business_name = Column(String(100))
    location = Column(String(50))
    business_interests = Column(ARRAY(String))
    created_at = Column(TIMESTAMP, default=datetime.utcnow)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, onupdate=datetime.utcnow)

class AmazonReview(Base):
    __tablename__ = "Amazon_Reviews"   

    review_id = Column(String, primary_key=True, index=True)
    product_id = Column(String, index=True)
    market_place = Column(Text)
    customer_id = Column(String)
    product_parent = Column(String)
    product_title = Column(Text)
    product_category = Column(Text)
    star_rating = Column(Integer)
    helpful_votes = Column(Integer)
    total_votes = Column(Integer)
    vine = Column(Text)
    verified_purchase = Column(Text)
    review_headline = Column(Text)
    review_body = Column(Text)
    review_date = Column(Text)
    Sentiment_pc = Column(Text)
    review_month = Column(Text)
    review_day = Column(Text)
    review_year = Column(Integer)
    rating_1 = Column("1 rating", Integer)
    rating_2 = Column("2 ratings", Integer)
    rating_3 = Column("3 ratings", Integer)
    rating_4 = Column("4 rating", Integer)
    rating_5 = Column("5 rating", Integer)

class Product(Base):
    __tablename__ = "flipkart"  
 
    id = Column(Integer, primary_key=True, index=True)
    asin = Column(String(20), unique=True, nullable=True)
    title = Column(Text, nullable=False)
    brand = Column(Text, nullable=True)
    category = Column(Text, nullable=True)
    price = Column(Float, nullable=True)
    currency = Column(String(5), nullable=True)
    rating = Column(Float, nullable=True)
    reviews = Column(Integer, nullable=True)
    availability = Column(Boolean, nullable=True)
    variation = Column(JSON, nullable=True)
    image_url = Column(Text, nullable=True)
    last_updated = Column(TIMESTAMP, nullable=True)

class AmazonProductDetails(Base):
    __tablename__ = "amazon_product_details"
    
    id = Column(Integer, primary_key=True, index=True)
    asin = Column(String(20), unique=True, index=True, nullable=False)
    product_title = Column(Text)
    product_url = Column(Text)
    product_photo = Column(Text)
    product_price = Column(String(50))
    product_price_numeric = Column(Float)
    product_star_rating = Column(String(10))
    product_star_rating_numeric = Column(Float)
    product_num_ratings = Column(Integer)
    category_name = Column(String(200))
    sales_volume = Column(String(50))
    country = Column(String(10))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class IndianProduct(Base):
    __tablename__ = "indian_products"
    
    id = Column(Integer, primary_key=True, index=True)
    asin = Column(String(20), unique=True, index=True, nullable=False)
    title = Column(Text, nullable=False)
    brand = Column(String(200))
    manufacturer = Column(String(200))
    description = Column(Text)
    key_features = Column(ARRAY(Text))
    image_urls = Column(ARRAY(Text))
    url = Column(Text)
    
    # Pricing
    price = Column(Float)
    mrp = Column(Float)
    discount_percentage = Column(Float)
    
    # Sales estimates
    sales_estimate_low = Column(Integer)
    sales_estimate_high = Column(Integer)
    revenue_estimate_low = Column(Float)
    revenue_estimate_high = Column(Float)
    
    # Ratings
    rating = Column(Float)
    number_of_ratings = Column(Integer)
    
    # Category
    main_category = Column(String(200))
    category = Column(Text)
    bsr = Column(Integer)
    
    # Specifications
    model_number = Column(String(100))
    color = Column(String(50))
    size = Column(String(50))
    weight = Column(String(50))
    dimensions = Column(String(100))
    
    # Seller info
    number_of_sellers = Column(Integer)
    is_prime = Column(Boolean, default=False)
    is_amazon_fulfilled = Column(Boolean, default=False)
    availability = Column(String(100))
    
    # Deals
    has_deal = Column(Boolean, default=False)
    deal_type = Column(String(100))
    promo_codes = Column(ARRAY(String))
    
    # Amazon fees
    referral_fee = Column(Float)
    fba_fee = Column(Float)
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    last_scraped_at = Column(DateTime)