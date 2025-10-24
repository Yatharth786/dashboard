#!/usr/bin/env python3
"""
DataForSEO Amazon Product Collector - Standalone Cron Job
(Updated to use a RestClient that accepts timeout and robust retry/backoff)

Usage:
    python dataforseo_cron.py --run-once
"""

import os
import sys
import time
import json
import logging
import argparse
from datetime import datetime
from typing import Optional, Dict, Any, List
import psycopg2
from psycopg2.extras import execute_values
from dotenv import load_dotenv
import requests  # needed to catch requests.Timeout

try:
    from rest_client import RestClient
except ImportError:
    print("ERROR: rest_client.py not found! Get it from DataForSEO examples zip or use the provided rest_client.py.")
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
    def __init__(self):
        load_dotenv()

        self.DATABASE_URL = os.getenv("DATABASE_URL")
        self.DATAFORSEO_LOGIN = os.getenv("DATAFORSEO_LOGIN")
        self.DATAFORSEO_PASSWORD = os.getenv("DATAFORSEO_PASSWORD")
        self.LOCATION_NAME = os.getenv("LOCATION_NAME", "United States")
        self.LANGUAGE_NAME = os.getenv("LANGUAGE_NAME", "English (United States)")
        self.DEPTH = int(os.getenv("DEPTH", "100"))
        self.WAIT_TIME = int(os.getenv("WAIT_TIME", "90"))
        self.TIMEOUT = int(os.getenv("DATAFORSEO_TIMEOUT", "60"))
        self.DB_CONNECT_TIMEOUT = int(os.getenv("DB_CONNECT_TIMEOUT", "10"))
        self.DB_MAX_RETRIES = int(os.getenv("DB_MAX_RETRIES", "3"))
        self.DEFAULT_KEYWORDS = os.getenv("KEYWORDS", "laptop,smartphone,headphones").split(",")

        self.validate()

    def validate(self):
        missing = [
            var for var in ["DATABASE_URL", "DATAFORSEO_LOGIN", "DATAFORSEO_PASSWORD"]
            if not getattr(self, var)
        ]
        if missing:
            raise ValueError(f"Missing required environment variables: {', '.join(missing)}")


# ==================== DATABASE ====================

class Database:
    def __init__(self, database_url: str, connect_timeout: int = 10, max_retries: int = 3):
        self.database_url = database_url
        self.connect_timeout = connect_timeout
        self.max_retries = max_retries
        self.conn = None

    def connect(self):
        for attempt in range(1, self.max_retries + 1):
            try:
                logger.info(f"[DB] Connecting to database (attempt {attempt}/{self.max_retries})...")
                conn_url = (
                    f"{self.database_url}&connect_timeout={self.connect_timeout}"
                    if "?" in self.database_url
                    else f"{self.database_url}?connect_timeout={self.connect_timeout}"
                )
                self.conn = psycopg2.connect(conn_url)
                logger.info("[DB] Connection successful")
                return True
            except psycopg2.OperationalError as e:
                logger.error(f"[DB ERROR] {e}")
                if attempt < self.max_retries:
                    time.sleep(attempt * 2)
                else:
                    return False
        return False

    def disconnect(self):
        if self.conn:
            self.conn.close()
            logger.info("[DB] Disconnected")

    def create_tables(self):
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
                created_at TIMESTAMP DEFAULT NOW(),
                UNIQUE(task_id, asin)
            )
        """)
        self.conn.commit()
        logger.info("[DB] Tables verified")

    def save_products(self, products: List[Dict]):
        if not products:
            return 0
        cursor = self.conn.cursor()
        execute_values(cursor, """
            INSERT INTO amazon_products 
            (task_id, asin, keyword, title, url, image_url, price_from, price_to, currency, 
             rating_value, rating_votes, is_best_seller)
            VALUES %s ON CONFLICT (task_id, asin) DO NOTHING
        """, [
            (
                p.get("task_id"), p.get("asin"), p.get("keyword"), p.get("title"),
                p.get("url"), p.get("image_url"), p.get("price_from"), p.get("price_to"),
                p.get("currency"), p.get("rating_value"), p.get("rating_votes"),
                p.get("is_best_seller", False)
            )
            for p in products
        ])
        self.conn.commit()
        return cursor.rowcount


# ==================== DATAFORSEO CLIENT ====================

class DataForSEOClient:
    """
    Wrapper for RestClient that passes timeout down to RestClient.post/get.
    It handles retries + backoff for transient network errors.
    """

    def __init__(self, login: str, password: str, timeout: int = 60):
        self.client = RestClient(login, password)
        self.timeout = timeout
        logger.info(f"[API] Initialized with {timeout}s timeout")

    def _safe_request(self, func, *args, retries: int = 3, backoff: float = 2.0, **kwargs):
        """
        Call func (RestClient.post/get) with retries. The RestClient supports a `timeout` kwarg,
        and we add it automatically here from self.timeout.
        """
        attempt = 0
        while attempt < retries:
            attempt += 1
            try:
                # pass the timeout down to RestClient which will forward to requests
                return func(*args, **kwargs, timeout=self.timeout)
            except requests.exceptions.Timeout as e:
                logger.warning(f"[TIMEOUT] Attempt {attempt}/{retries} timed out: {e}")
                if attempt < retries:
                    sleep_for = backoff ** attempt
                    logger.info(f"[API] Retrying after {sleep_for:.1f}s...")
                    time.sleep(sleep_for)
                    continue
                else:
                    logger.error(f"[API] Exhausted timeout retries: {e}")
                    return None
            except Exception as e:
                # For other exceptions, log and decide whether to retry based on attempt count
                logger.error(f"[API ERROR] Attempt {attempt}/{retries} failed: {e}")
                if attempt < retries:
                    sleep_for = backoff ** attempt
                    logger.info(f"[API] Retrying after {sleep_for:.1f}s...")
                    time.sleep(sleep_for)
                    continue
                return None

    def submit_task(self, keyword: str, location: str, language: str, depth: int = 100, **extra):
        """
        Submit a single products task. Returns task_id string on success, else None.
        extra allows priority/tag/pingback_url etc. to be passed if needed.
        """
        post_data = {0: {"keyword": keyword, "location_name": location, "language_name": language, "depth": depth}}
        if extra:
            post_data[0].update(extra)

        endpoint = "/v3/merchant/amazon/products/task_post"
        logger.info(f"[API] Submitting task for keyword='{keyword}'")
        response = self._safe_request(self.client.post, endpoint, post_data)
        if not response:
            logger.error(f"[API] Task submission failed for '{keyword}' (no response)")
            return None

        status_code = response.get("status_code")
        if status_code != 20000:
            logger.error(f"[API] Task post failed (code={status_code}) msg={response.get('status_message')}")
            return None

        tasks = response.get("tasks") or []
        if not tasks:
            logger.error("[API] No tasks returned in response")
            return None

        task_id = tasks[0].get("id")
        logger.info(f"[API] Task submitted successfully. task_id={task_id}")
        return task_id

    def get_results(self, task_id: str, poll: bool = False, max_wait: int = 300, interval: int = 10):
        """
        Fetch task results. If poll=True, keep polling until task has status_code==20000 and result present.
        """
        endpoint = f"/v3/merchant/amazon/products/task_get/advanced/{task_id}"

        if not poll:
            logger.info(f"[API] Fetching results for task_id={task_id}")
            response = self._safe_request(self.client.get, endpoint)
            if not response or response.get("status_code") != 20000:
                logger.debug(f"[API] get_results no valid response for task_id={task_id}: {response}")
                return None
            return response

        logger.info(f"[API] Polling for results (task_id={task_id}) up to {max_wait}s, interval={interval}s")
        waited = 0
        while waited <= max_wait:
            response = self._safe_request(self.client.get, endpoint)
            if response is None:
                logger.warning(f"[API] No response while polling task_id={task_id}")
            else:
                tasks = response.get("tasks") or []
                if tasks:
                    t = tasks[0]
                    task_status = t.get("status_code")
                    if task_status == 20000 and t.get("result"):
                        logger.info(f"[API] Task {task_id} completed.")
                        return response
                    else:
                        logger.info(f"[API] Task {task_id} status_code={task_status}; still processing.")
                else:
                    logger.debug(f"[API] Poll response missing tasks for task_id={task_id}: {response}")

            time.sleep(interval)
            waited += interval

        logger.error(f"[API] Polling timed out after {max_wait}s for task_id={task_id}")
        return None


# ==================== COLLECTOR ====================

class AmazonDataCollector:
    def __init__(self, config: Config):
        self.config = config
        self.db = Database(config.DATABASE_URL)
        self.api = DataForSEOClient(config.DATAFORSEO_LOGIN, config.DATAFORSEO_PASSWORD, config.TIMEOUT)

    def extract_products(self, results: Dict, task_id: str, keyword: str):
        products = []
        for task in results.get("tasks", []):
            for result in task.get("result", []):
                for item in result.get("items", []):
                    asin = item.get("data_asin")
                    if not asin:
                        continue
                    products.append({
                        "task_id": task_id,
                        "asin": asin,
                        "keyword": keyword,
                        "title": item.get("title"),
                        "url": item.get("url"),
                        "image_url": item.get("image_url"),
                        "price_from": item.get("price_from"),
                        "price_to": item.get("price_to"),
                        "currency": item.get("currency"),
                        "rating_value": (item.get("rating") or {}).get("value"),
                        "rating_votes": (item.get("rating") or {}).get("votes_count"),
                        "is_best_seller": item.get("is_best_seller", False)
                    })
        return products

    def collect_keyword(self, keyword: str):
        logger.info(f"[COLLECT] Keyword: {keyword}")
        task_id = self.api.submit_task(keyword, self.config.LOCATION_NAME, self.config.LANGUAGE_NAME, self.config.DEPTH)
        if not task_id:
            return {"success": False}
        # Option A: simple sleep then single get (your previous behavior)
        time.sleep(self.config.WAIT_TIME)
        results = self.api.get_results(task_id)
        # Option B: use polling instead (uncomment if you want)
        # results = self.api.get_results(task_id, poll=True, max_wait=600, interval=8)
        if not results:
            return {"success": False}
        products = self.extract_products(results, task_id, keyword)
        saved = self.db.save_products(products)
        logger.info(f"[DONE] {saved} products saved for '{keyword}'")
        return {"success": True, "count": saved}


# ==================== MAIN ====================

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--run-once", action="store_true")
    args = parser.parse_args()

    config = Config()
    collector = AmazonDataCollector(config)
    if not collector.db.connect():
        logger.error("[EXIT] Database connection failed")
        sys.exit(1)
    collector.db.create_tables()
    for kw in config.DEFAULT_KEYWORDS:
        collector.collect_keyword(kw.strip())
    collector.db.disconnect()
    logger.info("[COMPLETE] Data collection finished successfully")


if __name__ == "__main__":
    main()
