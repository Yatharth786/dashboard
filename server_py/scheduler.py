# from apscheduler.schedulers.background import BackgroundScheduler
# from apscheduler.triggers.cron import CronTrigger
# from apscheduler.triggers.interval import IntervalTrigger
# from datetime import datetime
# import logging

# from server_py import amazon_data_sync

# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
# )
# logger = logging.getLogger(__name__)

# scheduler = BackgroundScheduler(timezone='Asia/Kolkata')

# def sync_all_data():
#     logger.info("\n" + "="*70)
#     logger.info(f"ðŸ”„ SCHEDULED DATA SYNC STARTED - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
#     logger.info("="*70)
#     try:
#         result = amazon_data_sync.full_sync()
#         logger.info("\n" + "="*70)
#         logger.info("âœ… SCHEDULED DATA SYNC COMPLETED SUCCESSFULLY")
#         logger.info(f"ðŸ“Š Total items synced: {result.get('total', 0)}")
#         logger.info(f"â±ï¸  Duration: {result.get('duration', 0):.2f} seconds")
#         logger.info("="*70 + "\n")
#     except Exception as e:
#         logger.error("\n" + "="*70)
#         logger.error(f"âŒ SCHEDULED DATA SYNC FAILED: {str(e)}")
#         logger.error("="*70 + "\n")
#         import traceback
#         logger.error(traceback.format_exc())

# def sync_amazon_only():
#     logger.info("ðŸ”„ Quick Amazon sync started...")
#     try:
#         amazon_data_sync.sync_amazon_products_by_search()
#         logger.info("âœ… Quick Amazon sync completed")
#     except Exception as e:
#         logger.error(f"âŒ Amazon sync failed: {e}")

# def sync_flipkart_only():
#     logger.info("ðŸ”„ Quick Flipkart sync started...")
#     try:
#         # Placeholder: implement flipkart sync similarly
#         logger.info("âœ… Quick Flipkart sync completed")
#     except Exception as e:
#         logger.error(f"âŒ Flipkart sync failed: {e}")

# def start_scheduler():
#     logger.info("\n" + "="*70)
#     logger.info("ðŸš€ STARTING SCHEDULER SERVICE")
#     logger.info("="*70)
    
#     scheduler.add_job(
#         func=sync_all_data,
#         trigger=CronTrigger(hour='9,21', minute=0),
#         id='full_sync_twice_daily',
#         name='Full Data Sync (Amazon + Flipkart)',
#         replace_existing=True,
#         max_instances=1
#     )
    
#     scheduler.add_job(
#         func=sync_amazon_only,
#         trigger=IntervalTrigger(hours=6),
#         id='amazon_sync_6h',
#         name='Quick Amazon Sync',
#         replace_existing=True,
#         max_instances=1
#     )
    
#     scheduler.add_job(
#         func=sync_flipkart_only,
#         trigger=IntervalTrigger(hours=8),
#         id='flipkart_sync_8h',
#         name='Quick Flipkart Sync',
#         replace_existing=True,
#         max_instances=1
#     )
    
#     scheduler.start()
    
#     logger.info("\nðŸ“… Next Scheduled Runs:")
#     for job in scheduler.get_jobs():
#         logger.info(f"  - {job.name}: {job.next_run_time}")
#     logger.info("\nâœ… Scheduler started successfully!")
#     logger.info("="*70 + "\n")

# def stop_scheduler():
#     try:
#         if scheduler.running:
#             scheduler.shutdown(wait=True)
#             logger.info("\n" + "="*70)
#             logger.info("ðŸ›‘ SCHEDULER STOPPED")
#             logger.info("="*70 + "\n")
#     except Exception as e:
#         logger.error(f"Error stopping scheduler: {e}")

# def get_scheduler_status():
#     if not scheduler.running:
#         return {"running": False, "message": "Scheduler is not running", "jobs": []}
#     jobs_info = []
#     for job in scheduler.get_jobs():
#         jobs_info.append({
#             "id": job.id,
#             "name": job.name,
#             "next_run": str(job.next_run_time),
#             "trigger": str(job.trigger)
#         })
#     return {"running": True, "message": "Scheduler is running", "total_jobs": len(jobs_info), "jobs": jobs_info}

# def trigger_manual_sync():
#     logger.info("ðŸ”§ Manual sync triggered")
#     sync_all_data()

# server_py/schedule.py - MINIMAL VERSION
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
import logging

logger = logging.getLogger(__name__)
scheduler = BackgroundScheduler()

def dummy_job():
    logger.info("✅ Scheduler is working!")

def start_scheduler():
    scheduler.add_job(
        dummy_job,
        CronTrigger(hour=2, minute=0),
        id='daily_test',
        replace_existing=True
    )
    scheduler.start()
    logger.info("✅ Scheduler started")
    return scheduler

def get_scheduler():
    return scheduler