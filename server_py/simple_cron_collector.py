#!/usr/bin/env python3
"""
Simple standalone cron job for DataForSEO Amazon data collection
Place this in: server_py/simple_cron_collector.py

Run manually: python -m server_py.simple_cron_collector
Or add to crontab: 0 2 * * * cd /path/to/project && python -m server_py.simple_cron_collector >> logs/cron.log 2>&1
"""

import os
import sys
import logging
from datetime import datetime
from dotenv import load_dotenv

# Add project root to Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server_py.database_config import SessionLocal
from server_py.dataforseo_amazon import dataforseo_collector

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ==================== CONFIGURATION ====================
KEYWORDS = [
    "laptop",
    "smartphone", 
    "headphones",
    "smartwatch",
    "tablet"
]

LOCATION_CODE = 2840  # USA
LANGUAGE_CODE = "en_US"
DEPTH = 100
WAIT_TIME = 90

# ==================== MAIN COLLECTION FUNCTION ====================
def collect_data():
    """Main function to collect Amazon product data"""
    
    load_dotenv()
    
    # Check required environment variables
    required_vars = ['DATABASE_URL', 'DATAFORSEO_LOGIN', 'DATAFORSEO_PASSWORD']
    missing = [v for v in required_vars if not os.getenv(v)]
    
    if missing:
        logger.error(f"❌ Missing environment variables: {', '.join(missing)}")
        logger.error("Please set them in .env file")
        return False
    
    logger.info("=" * 70)
    logger.info(f"🚀 CRON JOB STARTED - {datetime.now()}")
    logger.info(f"📋 Keywords: {', '.join(KEYWORDS)}")
    logger.info("=" * 70)
    
    db = SessionLocal()
    total_products = 0
    successful_keywords = 0
    failed_keywords = []
    
    try:
        for keyword in KEYWORDS:
            logger.info(f"\n{'='*70}")
            logger.info(f"🔍 Processing: {keyword}")
            logger.info(f"{'='*70}")
            
            try:
                result = dataforseo_collector.collect_and_store(
                    keyword=keyword,
                    wait_time=WAIT_TIME,
                    location_code=LOCATION_CODE,
                    language_code=LANGUAGE_CODE,
                    depth=DEPTH,
                    db=db
                )
                
                if result.get('success'):
                    products_count = result.get('products_stored', 0)
                    total_products += products_count
                    successful_keywords += 1
                    logger.info(f"✅ Success: {products_count} products collected for '{keyword}'")
                else:
                    error = result.get('error', 'Unknown error')
                    failed_keywords.append(f"{keyword} ({error})")
                    logger.error(f"❌ Failed: {keyword} - {error}")
                    
            except Exception as e:
                failed_keywords.append(f"{keyword} ({str(e)})")
                logger.error(f"❌ Exception for '{keyword}': {e}", exc_info=True)
        
        # Summary
        logger.info("\n" + "=" * 70)
        logger.info("📊 CRON JOB SUMMARY")
        logger.info("=" * 70)
        logger.info(f"✅ Successful keywords: {successful_keywords}/{len(KEYWORDS)}")
        logger.info(f"📦 Total products collected: {total_products}")
        
        if failed_keywords:
            logger.warning(f"❌ Failed keywords: {len(failed_keywords)}")
            for failed in failed_keywords:
                logger.warning(f"   • {failed}")
        
        logger.info(f"⏱️  Completed at: {datetime.now()}")
        logger.info("=" * 70 + "\n")
        
        return successful_keywords > 0
        
    except Exception as e:
        logger.error(f"❌ Critical error in cron job: {e}", exc_info=True)
        return False
        
    finally:
        db.close()


# ==================== ENTRY POINT ====================
if __name__ == "__main__":
    try:
        success = collect_data()
        exit_code = 0 if success else 1
        sys.exit(exit_code)
        
    except KeyboardInterrupt:
        logger.info("\n⚠️  Interrupted by user")
        sys.exit(1)
        
    except Exception as e:
        logger.error(f"❌ Fatal error: {e}", exc_info=True)
        sys.exit(1)