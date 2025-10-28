#!/usr/bin/env python3
"""
DataForSEO Scheduler Service
Runs the data collection on a schedule using APScheduler
"""

import logging
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger
from datetime import datetime
import subprocess
import os
import sys

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('scheduler.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

def run_dataforseo_collection():
    """
    Run the dataforseo_cron.py script
    """
    try:
        logger.info("=" * 70)
        logger.info(f"[SCHEDULER] Starting DataForSEO collection at {datetime.now()}")
        logger.info("=" * 70)
        
        # Path to the script
        script_path = os.path.join(os.path.dirname(__file__), 'dataforseo_cron.py')
        
        # Run the script
        result = subprocess.run(
            [sys.executable, script_path, '--run-once'],
            capture_output=True,
            text=True,
            cwd=os.path.dirname(__file__)
        )
        
        # Log output
        if result.stdout:
            logger.info(f"[OUTPUT]\n{result.stdout}")
        if result.stderr:
            logger.error(f"[ERROR]\n{result.stderr}")
        
        if result.returncode == 0:
            logger.info("[SCHEDULER] ✅ Collection completed successfully")
        else:
            logger.error(f"[SCHEDULER] ❌ Collection failed with code {result.returncode}")
            
    except Exception as e:
        logger.error(f"[SCHEDULER] ❌ Error running collection: {e}", exc_info=True)

def main():
    """
    Main scheduler function
    """
    scheduler = BlockingScheduler()
    
    # Schedule options (choose one):
    
    # Option 1: Daily at 2 AM
    scheduler.add_job(
        run_dataforseo_collection,
        CronTrigger(hour=2, minute=0),
        id='daily_collection',
        name='Daily DataForSEO Collection at 2 AM'
    )
    
    # Option 2: Every 6 hours
    # scheduler.add_job(
    #     run_dataforseo_collection,
    #     CronTrigger(hour='*/6'),
    #     id='every_6_hours',
    #     name='DataForSEO Collection Every 6 Hours'
    # )
    
    # Option 3: Twice daily (2 AM and 2 PM)
    # scheduler.add_job(
    #     run_dataforseo_collection,
    #     CronTrigger(hour='2,14', minute=0),
    #     id='twice_daily',
    #     name='DataForSEO Collection Twice Daily'
    # )
    
    logger.info("=" * 70)
    logger.info("🚀 DATAFORSEO SCHEDULER STARTED")
    logger.info("=" * 70)
    logger.info("\nScheduled jobs:")
    for job in scheduler.get_jobs():
        logger.info(f"  - {job.name} (Next run: {job.next_run_time})")
    logger.info("\n" + "=" * 70)
    logger.info("Press Ctrl+C to stop the scheduler")
    logger.info("=" * 70 + "\n")
    
    try:
        scheduler.start()
    except (KeyboardInterrupt, SystemExit):
        logger.info("\n[SCHEDULER] Shutting down...")
        scheduler.shutdown()
        logger.info("[SCHEDULER] Stopped")

if __name__ == "__main__":
    # Optional: Run immediately on startup
    logger.info("[SCHEDULER] Running initial collection...")
    run_dataforseo_collection()
    
    # Then start the scheduler
    main()