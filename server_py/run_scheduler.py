#!/usr/bin/env python3
"""
Standalone Scheduler Runner
Run this independently from the main FastAPI server to have a dedicated cron job process

Usage:
    python run_scheduler.py              # Run with default config
    python run_scheduler.py --keywords laptop smartphone  # Custom keywords
    python run_scheduler.py --daily 3 0  # Daily at 3:00 AM UTC
"""

import sys
import os
import argparse
import logging
import time
from datetime import datetime

# Add project root to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server_py.scheduler import get_scheduler
from dotenv import load_dotenv

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('scheduler.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

def parse_args():
    """Parse command line arguments"""
    parser = argparse.ArgumentParser(
        description='DataForSEO Scheduler - Automated Data Collection'
    )
    
    parser.add_argument(
        '--keywords',
        nargs='+',
        help='Keywords to collect (space separated)',
        default=None
    )
    
    parser.add_argument(
        '--daily',
        nargs=2,
        metavar=('HOUR', 'MINUTE'),
        help='Schedule daily at HH MM (24-hour format)',
        type=int
    )
    
    parser.add_argument(
        '--interval',
        nargs=2,
        metavar=('HOURS', 'MINUTES'),
        help='Schedule at intervals of H M',
        type=int
    )
    
    parser.add_argument(
        '--location',
        type=int,
        default=2840,
        help='Location code (default: 2840 = USA)'
    )
    
    parser.add_argument(
        '--depth',
        type=int,
        default=100,
        help='Number of products to collect (default: 100)'
    )
    
    parser.add_argument(
        '--run-once',
        action='store_true',
        help='Run collection once and exit (no scheduling)'
    )
    
    return parser.parse_args()

def main():
    """Main entry point"""
    # Load environment variables
    load_dotenv()
    
    # Check required environment variables
    required_vars = ['DATABASE_URL', 'DATAFORSEO_LOGIN', 'DATAFORSEO_PASSWORD']
    missing = [v for v in required_vars if not os.getenv(v)]
    
    if missing:
        logger.error(f"❌ Missing environment variables: {', '.join(missing)}")
        logger.error("Please set them in .env file")
        sys.exit(1)
    
    # Parse arguments
    args = parse_args()
    
    logger.info("=" * 70)
    logger.info("🚀 DATAFORSEO SCHEDULER - STANDALONE MODE")
    logger.info("=" * 70)
    logger.info(f"Started at: {datetime.now()}")
    
    # Get scheduler instance
    scheduler = get_scheduler()
    
    # Determine keywords
    keywords = args.keywords or scheduler.config['default_keywords']
    logger.info(f"Keywords: {', '.join(keywords)}")
    
    # Run once mode
    if args.run_once:
        logger.info("⚡ Running in ONE-TIME mode (no scheduling)")
        logger.info("=" * 70)
        
        try:
            from server_py.database_config import SessionLocal
            db = SessionLocal()
            
            for keyword in keywords:
                logger.info(f"\n🔍 Collecting: {keyword}")
                scheduler._collect_data_job(
                    keyword=keyword,
                    location_code=args.location,
                    depth=args.depth,
                    job_id='manual_run'
                )
            
            db.close()
            logger.info("\n✅ One-time collection completed!")
            logger.info("=" * 70)
            
        except Exception as e:
            logger.error(f"❌ Collection failed: {e}", exc_info=True)
            sys.exit(1)
        
        return
    
    # Scheduling mode
    logger.info("📅 Setting up scheduled jobs...")
    
    try:
        # Add daily job
        if args.daily:
            hour, minute = args.daily
            job_id = scheduler.add_daily_job(
                keywords=keywords,
                hour=hour,
                minute=minute,
                location_code=args.location,
                depth=args.depth
            )
            logger.info(f"✅ Daily job scheduled: {hour:02d}:{minute:02d} UTC (Job ID: {job_id})")
        
        # Add interval job
        elif args.interval:
            hours, minutes = args.interval
            job_id = scheduler.add_interval_job(
                keywords=keywords,
                hours=hours,
                minutes=minutes,
                location_code=args.location,
                depth=args.depth
            )
            logger.info(f"✅ Interval job scheduled: every {hours}h {minutes}m (Job ID: {job_id})")
        
        # Default: daily at 2 AM
        else:
            job_id = scheduler.add_daily_job(
                keywords=keywords,
                hour=2,
                minute=0,
                location_code=args.location,
                depth=args.depth
            )
            logger.info(f"✅ Default daily job scheduled: 02:00 UTC (Job ID: {job_id})")
        
        # Start scheduler
        scheduler.start()
        
        logger.info("\n" + "=" * 70)
        logger.info("✅ SCHEDULER IS NOW RUNNING")
        logger.info("=" * 70)
        
        # Display next runs
        jobs = scheduler.get_jobs()
        logger.info("\n📋 Scheduled Jobs:")
        for job in jobs:
            logger.info(f"  • {job['name']}")
            logger.info(f"    Next run: {job['next_run_time']}")
        
        logger.info("\n💡 Press Ctrl+C to stop the scheduler")
        logger.info("=" * 70 + "\n")
        
        # Keep running
        while True:
            time.sleep(60)
            
            # Log status every hour
            if datetime.now().minute == 0:
                logger.info(f"⏰ Scheduler status check at {datetime.now()}")
                logger.info(f"   Active jobs: {len(scheduler.get_jobs())}")
                logger.info(f"   Status: {'Running' if scheduler.is_running else 'Stopped'}")
    
    except KeyboardInterrupt:
        logger.info("\n" + "=" * 70)
        logger.info("🛑 STOPPING SCHEDULER (Ctrl+C pressed)")
        logger.info("=" * 70)
        
        scheduler.stop()
        
        logger.info("✅ Scheduler stopped successfully")
        logger.info("=" * 70)
        
    except Exception as e:
        logger.error(f"\n❌ SCHEDULER ERROR: {e}", exc_info=True)
        
        try:
            scheduler.stop()
        except:
            pass
        
        sys.exit(1)

if __name__ == "__main__":
    main()