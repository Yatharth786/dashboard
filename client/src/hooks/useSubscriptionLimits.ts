// import { useMemo } from 'react';
// import { useAuth } from '@/App';

// export interface SubscriptionLimits {
//   productTrackingLimit: number;
//   hasAdvancedAI: boolean;
//   hasRealTimeData: boolean;
//   hasRealTimeAlerts: boolean;
//   hasPrioritySupport: boolean;
//   hasAdvancedAnalytics: boolean;
//   hasCustomIntegrations: boolean;
//   hasCompetitorAnalysis: boolean;
//   reportFrequency: 'weekly' | 'daily' | 'realtime';
//   hasAIChatbot: boolean;
//   hasDedicatedManager: boolean;
//   canExportData: boolean;
//   maxDashboardWidgets: number;
//   maxSavedReports: number;
//   maxTopN: number; // NEW: Limit for Top N products filter
//   hasChartAISummaries: boolean; // NEW: AI summaries on charts
//   maxNotifications: number; // NEW: Real-time notifications limit
//   maxFullAnalysesPerMonth: number;
//   maxAIChatMessagesPerMonth: number;


// }

// const TIER_LIMITS: Record<string, SubscriptionLimits> = {
//   free: {
//     productTrackingLimit: 100,
//     hasAdvancedAI: false,
//     hasRealTimeData: false,
//     hasRealTimeAlerts: false,
//     hasPrioritySupport: false,
//     hasAdvancedAnalytics: false,
//     hasCustomIntegrations: false,
//     hasCompetitorAnalysis: false,
//     reportFrequency: 'weekly',
//     hasAIChatbot: true,
//     hasDedicatedManager: false,
//     canExportData: false,
//     maxDashboardWidgets: 4,
//     maxSavedReports: 3,
//     maxTopN: 5, // Free users can only see top 5
//     hasChartAISummaries: false, // No AI summaries
//     maxNotifications: 5, // Limited notifications
//     maxFullAnalysesPerMonth: 5,
//     maxAIChatMessagesPerMonth: 5,


//   },
//   basic: {
//     productTrackingLimit: 1000,
//     hasAdvancedAI: true,
//     hasRealTimeData: false,
//     hasRealTimeAlerts: false,
//     hasPrioritySupport: false,
//     hasAdvancedAnalytics: false,
//     hasCustomIntegrations: false,
//     hasCompetitorAnalysis: true,
//     reportFrequency: 'daily',
//     hasAIChatbot: true,
//     hasDedicatedManager: false,
//     canExportData: true,
//     maxDashboardWidgets: 8,
//     maxSavedReports: 10,
//     maxTopN: 20, // Basic users can see top 20
//     hasChartAISummaries: true, // Basic AI summaries
//     maxNotifications: 15, // More notifications
//     maxFullAnalysesPerMonth: 20,
//     maxAIChatMessagesPerMonth: 20,


//   },
//   premium: {
//     productTrackingLimit: Infinity,
//     hasAdvancedAI: true,
//     hasRealTimeData: true,
//     hasRealTimeAlerts: true,
//     hasPrioritySupport: true,
//     hasAdvancedAnalytics: true,
//     hasCustomIntegrations: true,
//     hasCompetitorAnalysis: true,
//     reportFrequency: 'realtime',
//     hasAIChatbot: true,
//     hasDedicatedManager: false,
//     canExportData: true,
//     maxDashboardWidgets: Infinity,
//     maxSavedReports: Infinity,
//     maxTopN: 100, // Premium users can see top 100
//     hasChartAISummaries: true, // Full AI summaries
//     maxNotifications: Infinity, // Unlimited notifications
//     maxFullAnalysesPerMonth: Infinity,
//     maxAIChatMessagesPerMonth: Infinity,

//   },
//   enterprise: {
//     productTrackingLimit: Infinity,
//     hasAdvancedAI: true,
//     hasRealTimeData: true,
//     hasRealTimeAlerts: true,
//     hasPrioritySupport: true,
//     hasAdvancedAnalytics: true,
//     hasCustomIntegrations: true,
//     hasCompetitorAnalysis: true,
//     reportFrequency: 'realtime',
//     hasAIChatbot: true,
//     hasDedicatedManager: true,
//     canExportData: true,
//     maxDashboardWidgets: Infinity,
//     maxSavedReports: Infinity,
//     maxTopN: Infinity, // No limits
//     hasChartAISummaries: true,
//     maxNotifications: Infinity,
//     maxFullAnalysesPerMonth: Infinity,
//     maxAIChatMessagesPerMonth: Infinity,

//   },
// };

// export function useSubscriptionLimits() {
//   const { user } = useAuth();
  
//   const currentTier = useMemo(() => {
//     if (user?.subscriptionTier) {
//       return user.subscriptionTier;
//     }
    
//     const userString = localStorage.getItem('user');
//     if (userString) {
//       try {
//         const userData = JSON.parse(userString);
//         return userData.subscriptionTier || 'free';
//       } catch {
//         return 'free';
//       }
//     }
    
//     return 'free';
//   }, [user]);

//   const limits = useMemo(() => {
//     return TIER_LIMITS[currentTier] || TIER_LIMITS.free;
//   }, [currentTier]);

//   const canAccessFeature = (feature: keyof SubscriptionLimits): boolean => {
//     const value = limits[feature];
//     if (typeof value === 'boolean') {
//       return value;
//     }
//     return true;
//   };

//   const isAtLimit = (currentCount: number, limitType: 'products' | 'widgets' | 'reports'): boolean => {
//     switch (limitType) {
//       case 'products':
//         return currentCount >= limits.productTrackingLimit;
//       case 'widgets':
//         return currentCount >= limits.maxDashboardWidgets;
//       case 'reports':
//         return currentCount >= limits.maxSavedReports;
//       default:
//         return false;
//     }
//   };

//   const getRemainingCount = (currentCount: number, limitType: 'products' | 'widgets' | 'reports'): number | null => {
//     let limit: number;
//     switch (limitType) {
//       case 'products':
//         limit = limits.productTrackingLimit;
//         break;
//       case 'widgets':
//         limit = limits.maxDashboardWidgets;
//         break;
//       case 'reports':
//         limit = limits.maxSavedReports;
//         break;
//       default:
//         return null;
//     }
    
//     if (limit === Infinity) return null;
//     return Math.max(0, limit - currentCount);
//   };

//   return {
//     currentTier,
//     limits,
//     canAccessFeature,
//     isAtLimit,
//     getRemainingCount,
//   };
// }






import { useMemo } from 'react';
import { useAuth } from '@/App';

export interface SubscriptionLimits {
  productTrackingLimit: number;
  hasAdvancedAI: boolean;
  hasRealTimeData: boolean;
  hasRealTimeAlerts: boolean;
  hasPrioritySupport: boolean;
  hasAdvancedAnalytics: boolean;
  hasCustomIntegrations: boolean;
  hasCompetitorAnalysis: boolean;
  reportFrequency: 'weekly' | 'daily' | 'realtime';
  hasAIChatbot: boolean;
  hasDedicatedManager: boolean;
  canExportData: boolean;
  maxDashboardWidgets: number;
  maxSavedReports: number;
  maxTopN: number;
  hasChartAISummaries: boolean;
  maxNotifications: number;
  maxFullAnalysesPerMonth: number;
  maxAIChatMessagesPerMonth: number;
}

const TIER_LIMITS: Record<string, SubscriptionLimits> = {
  free: {
    productTrackingLimit: 100,
    hasAdvancedAI: false,
    hasRealTimeData: false,
    hasRealTimeAlerts: false,
    hasPrioritySupport: false,
    hasAdvancedAnalytics: false,
    hasCustomIntegrations: false,
    hasCompetitorAnalysis: false,
    reportFrequency: 'weekly',
    hasAIChatbot: true,
    hasDedicatedManager: false,
    canExportData: false,
    maxDashboardWidgets: 4,
    maxSavedReports: 3,
    maxTopN: 5,
    hasChartAISummaries: false,
    maxNotifications: 5,
    maxFullAnalysesPerMonth: 5,
    maxAIChatMessagesPerMonth: 5,
  },
  basic: {
    productTrackingLimit: 1000,
    hasAdvancedAI: true,
    hasRealTimeData: false,
    hasRealTimeAlerts: false,
    hasPrioritySupport: false,
    hasAdvancedAnalytics: false,
    hasCustomIntegrations: false,
    hasCompetitorAnalysis: true,
    reportFrequency: 'daily',
    hasAIChatbot: true,
    hasDedicatedManager: false,
    canExportData: true,
    maxDashboardWidgets: 8,
    maxSavedReports: 10,
    maxTopN: 20,
    hasChartAISummaries: true,
    maxNotifications: 15,
    maxFullAnalysesPerMonth: 20,
    maxAIChatMessagesPerMonth: 20,
  },
  premium: {
    productTrackingLimit: Infinity,
    hasAdvancedAI: true,
    hasRealTimeData: true,
    hasRealTimeAlerts: true,
    hasPrioritySupport: true,
    hasAdvancedAnalytics: true,
    hasCustomIntegrations: true,
    hasCompetitorAnalysis: true,
    reportFrequency: 'realtime',
    hasAIChatbot: true,
    hasDedicatedManager: false,
    canExportData: true,
    maxDashboardWidgets: Infinity,
    maxSavedReports: Infinity,
    maxTopN: 100,
    hasChartAISummaries: true,
    maxNotifications: Infinity,
    maxFullAnalysesPerMonth: Infinity,
    maxAIChatMessagesPerMonth: Infinity,
  },
  enterprise: {
    productTrackingLimit: Infinity,
    hasAdvancedAI: true,
    hasRealTimeData: true,
    hasRealTimeAlerts: true,
    hasPrioritySupport: true,
    hasAdvancedAnalytics: true,
    hasCustomIntegrations: true,
    hasCompetitorAnalysis: true,
    reportFrequency: 'realtime',
    hasAIChatbot: true,
    hasDedicatedManager: true,
    canExportData: true,
    maxDashboardWidgets: Infinity,
    maxSavedReports: Infinity,
    maxTopN: Infinity,
    hasChartAISummaries: true,
    maxNotifications: Infinity,
    maxFullAnalysesPerMonth: Infinity,
    maxAIChatMessagesPerMonth: Infinity,
  },
};

export function useSubscriptionLimits() {
  const { user } = useAuth();

  // Determine current subscription tier
  const currentTier = useMemo(() => {
    return user?.subscriptionTier || 'free';
  }, [user]);

  // Get subscription limits
  const limits = useMemo(() => {
    return TIER_LIMITS[currentTier] || TIER_LIMITS.free;
  }, [currentTier]);

  // Check if a boolean feature is enabled
  const canAccessFeature = (feature: keyof SubscriptionLimits): boolean => {
    const value = limits[feature];
    if (typeof value === 'boolean') return value;
    console.warn(`Feature ${feature} is not boolean in subscription limits.`);
    return true;
  };

  // Check if a usage type has reached its limit
  const isAtLimit = (
    currentCount: number,
    limitType: 'products' | 'widgets' | 'reports' | 'topN' | 'AIChatMessages'
  ): boolean => {
    switch (limitType) {
      case 'products':
        return currentCount >= limits.productTrackingLimit;
      case 'widgets':
        return currentCount >= limits.maxDashboardWidgets;
      case 'reports':
        return currentCount >= limits.maxSavedReports;
      case 'topN':
        return currentCount >= limits.maxTopN;
      case 'AIChatMessages':
        return currentCount >= limits.maxAIChatMessagesPerMonth;
      default:
        return false;
    }
  };

  // Get remaining count for a usage type
  const getRemainingCount = (
    currentCount: number,
    limitType: 'products' | 'widgets' | 'reports' | 'topN' | 'AIChatMessages'
  ): number | null => {
    let limit: number;
    switch (limitType) {
      case 'products':
        limit = limits.productTrackingLimit;
        break;
      case 'widgets':
        limit = limits.maxDashboardWidgets;
        break;
      case 'reports':
        limit = limits.maxSavedReports;
        break;
      case 'topN':
        limit = limits.maxTopN;
        break;
      case 'AIChatMessages':
        limit = limits.maxAIChatMessagesPerMonth;
        break;
      default:
        return null;
    }
    if (limit === Infinity) return null;
    return Math.max(0, limit - currentCount);
  };

  return {
    currentTier,
    limits,
    canAccessFeature,
    isAtLimit,
    getRemainingCount,
  };
}



