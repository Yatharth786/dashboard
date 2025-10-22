# server_py/models.py - CORRECTED VERSION
from sqlalchemy import Column, Integer, String, DateTime, Boolean, JSON, Float, Text, TIMESTAMP, ARRAY
from sqlalchemy.sql import func
from datetime import datetime
from server_py.database_config import Base

# ==================== EXISTING MODELS ====================

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
    __tablename__ = "products"  

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(String(100), unique=True, index=True, nullable=True)
    asin = Column(String(20), nullable=True)
    title = Column(Text, nullable=False)
    brand = Column(String(200), nullable=True)
    category = Column(String(200), nullable=True)
    price = Column(Float, nullable=True)
    currency = Column(String(5), nullable=True)
    original_price = Column(Float, nullable=True)
    discount = Column(Float, nullable=True)
    rating = Column(Float, nullable=True)
    reviews = Column(Integer, nullable=True)
    reviews_count = Column(Integer, nullable=True)
    availability = Column(Boolean, nullable=True)
    is_bestseller = Column(Boolean, default=False)
    is_deal = Column(Boolean, default=False)
    variation = Column(JSON, nullable=True)
    image_url = Column(Text, nullable=True)
    product_url = Column(String(500), nullable=True)
    description = Column(Text, nullable=True)
    features = Column(JSON, nullable=True)
    specifications = Column(JSON, nullable=True)
    last_updated = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)

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
    is_active = Column(Boolean, default=True)

# ==================== DATAFORSEO MODELS (ADDED) ====================

class DataForSEOTask(Base):
    """Model for storing DataForSEO task information"""
    __tablename__ = "dataforseo_tasks"
    
    id = Column(String(100), primary_key=True, index=True)  # Task ID from API
    keyword = Column(String(200), nullable=False, index=True)
    location_code = Column(Integer, default=2840)
    language_code = Column(String(10), default='en_US')
    depth = Column(Integer, default=100)
    
    # Task status
    status_code = Column(Integer)
    status_message = Column(Text)
    
    # Results
    result_count = Column(Integer, default=0)
    cost = Column(Float, default=0.0)  # API cost in USD
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    completed_at = Column(DateTime(timezone=True))
    
    # Metadata
    error_message = Column(Text)

class AmazonProduct(Base):
    """Model for storing Amazon products from DataForSEO"""
    __tablename__ = "amazon_products"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    task_id = Column(String(100), nullable=False, index=True)
    
    # Product identifiers
    asin = Column(String(20), nullable=False, index=True)
    keyword = Column(String(200), nullable=False, index=True)
    
    # Product details
    type = Column(String(50))  # 'amazon_product', etc.
    title = Column(Text)
    url = Column(Text)
    image_url = Column(Text)
    
    # Pricing
    price_from = Column(Float)
    price_to = Column(Float)
    currency = Column(String(5), default='USD')
    special_offers = Column(JSON)
    
    # Ratings & Reviews
    rating_value = Column(Float)
    rating_votes = Column(Integer)
    bought_past_month = Column(Integer)
    
    # Rankings
    rank_group = Column(Integer)
    rank_absolute = Column(Integer)
    position = Column(String(20))
    
    # Badges
    is_amazon_choice = Column(Boolean, default=False)
    is_best_seller = Column(Boolean, default=False)
    
    # Additional info
    delivery_info = Column(JSON)
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class ScheduledTask(Base):
    """Model for scheduled cron jobs"""
    __tablename__ = "scheduled_tasks"
    
    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(String(100), unique=True, nullable=False, index=True)
    name = Column(String(200), nullable=False)
    description = Column(Text)
    
    # Schedule configuration
    schedule_type = Column(String(20))  # 'daily', 'weekly', 'interval', 'cron'
    schedule_config = Column(JSON)  # Stores trigger configuration
    
    # Job configuration
    keywords = Column(JSON)  # List of keywords
    location_code = Column(Integer, default=2840)
    language_code = Column(String(10), default='en_US')
    depth = Column(Integer, default=100)
    wait_time = Column(Integer, default=90)
    
    # Status
    is_active = Column(Boolean, default=True)
    is_paused = Column(Boolean, default=False)
    
    # Statistics
    total_runs = Column(Integer, default=0)
    successful_runs = Column(Integer, default=0)
    failed_runs = Column(Integer, default=0)
    last_run_at = Column(DateTime(timezone=True))
    last_success_at = Column(DateTime(timezone=True))
    last_error = Column(Text)
    next_run_at = Column(DateTime(timezone=True))
    
    # Metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    created_by = Column(String(100))

class TaskExecution(Base):
    """Model for tracking individual task executions"""
    __tablename__ = "task_executions"
    
    id = Column(Integer, primary_key=True, index=True)
    scheduled_task_id = Column(Integer, nullable=False, index=True)
    job_id = Column(String(100), nullable=False, index=True)
    
    # Execution details
    started_at = Column(DateTime(timezone=True), server_default=func.now())
    completed_at = Column(DateTime(timezone=True))
    duration_seconds = Column(Float)
    
    # Results
    status = Column(String(20))  # 'running', 'completed', 'failed', 'cancelled'
    keywords_processed = Column(JSON)
    products_collected = Column(Integer, default=0)
    api_cost = Column(Float, default=0.0)
    
    # Error handling
    error_message = Column(Text)
    error_traceback = Column(Text)
    retry_count = Column(Integer, default=0)
    
    # Metadata
    execution_log = Column(JSON)

class DataCollectionStats(Base):
    """Model for tracking daily/hourly collection statistics"""
    __tablename__ = "data_collection_stats"
    
    id = Column(Integer, primary_key=True, index=True)
    date = Column(DateTime(timezone=True), nullable=False, index=True)
    hour = Column(Integer)  # 0-23 for hourly stats
    
    # Collection metrics
    total_tasks = Column(Integer, default=0)
    successful_tasks = Column(Integer, default=0)
    failed_tasks = Column(Integer, default=0)
    products_collected = Column(Integer, default=0)
    unique_products = Column(Integer, default=0)
    
    # Cost metrics
    total_api_cost = Column(Float, default=0.0)
    
    # Performance metrics
    avg_duration_seconds = Column(Float)
    min_duration_seconds = Column(Float)
    max_duration_seconds = Column(Float)
    
    # Popular keywords
    top_keywords = Column(JSON)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())