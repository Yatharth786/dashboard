import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useSubscriptionLimits } from './useSubscriptionLimits';

const API_BASE_URL = "http://localhost:8000";

interface SubscriptionUpdatePayload {
  user_id: number;
  subscription_tier: string;
  ai_chat_used?: number;
  ai_chat_month?: string;
}

export function useSubscriptionSync() {
  const [location] = useLocation();
  const { currentTier, limits } = useSubscriptionLimits();

  // Get user from localStorage
  const getUserFromStorage = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        return JSON.parse(userString);
      } catch {
        return null;
      }
    }
    return null;
  };

  // Update subscription tier in database AND localStorage
  const updateSubscriptionInDB = async (tier: string) => {
    const user = getUserFromStorage();
    
    if (!user?.id) {
      console.warn('No user ID available for subscription update');
      throw new Error('User not logged in');
    }

    try {
      const payload: SubscriptionUpdatePayload = {
        user_id: user.id,
        subscription_tier: tier,
      };

      console.log(`🔄 Updating subscription to ${tier} for user ${user.id}`);

      const response = await fetch(`${API_BASE_URL}/users/${user.id}/subscription`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Backend error:', errorText);
        throw new Error(`Failed to update subscription: ${response.statusText}`);
      }

      const data = await response.json();
      
      // ✅ UPDATE LOCALSTORAGE IMMEDIATELY
      user.subscriptionTier = tier;
      localStorage.setItem('user', JSON.stringify(user));

      console.log('✅ Subscription updated in database AND localStorage:', tier);
      return data;
    } catch (error) {
      console.error('❌ Failed to sync subscription to database:', error);
      throw error;
    }
  };

  // Track AI chat usage
  const trackAIChatUsage = async () => {
    const user = getUserFromStorage();
    
    if (!user?.id) return;

    try {
      const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
      
      const response = await fetch(`${API_BASE_URL}/users/${user.id}/ai-usage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id,
          increment: 1,
          month: currentMonth,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to track AI usage: ${response.statusText}`);
      }

      const data = await response.json();
      
      // ✅ UPDATE LOCALSTORAGE
      user.aiChatUsed = data.ai_chat_used || 0;
      user.aiChatMonth = data.ai_chat_month || currentMonth;
      localStorage.setItem('user', JSON.stringify(user));

      console.log('✅ AI usage tracked and synced:', data);
      return data;
    } catch (error) {
      console.error('❌ Failed to track AI usage:', error);
      throw error;
    }
  };

  // Get current AI usage for the month
  const getAIUsage = async (): Promise<{ used: number; limit: number; month: string }> => {
    const user = getUserFromStorage();
    
    if (!user?.id) {
      return { used: 0, limit: limits.maxAIChatMessagesPerMonth, month: '' };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/${user.id}/ai-usage`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        // If endpoint fails, fall back to localStorage
        console.warn('Failed to fetch AI usage from backend, using localStorage');
        return {
          used: user.aiChatUsed || 0,
          limit: limits.maxAIChatMessagesPerMonth,
          month: user.aiChatMonth || new Date().toISOString().slice(0, 7)
        };
      }

      const data = await response.json();
      
      // Update localStorage with latest data
      user.aiChatUsed = data.ai_chat_used || 0;
      user.aiChatMonth = data.ai_chat_month || '';
      localStorage.setItem('user', JSON.stringify(user));
      
      return {
        used: data.ai_chat_used || 0,
        limit: limits.maxAIChatMessagesPerMonth,
        month: data.ai_chat_month || '',
      };
    } catch (error) {
      console.error('❌ Failed to get AI usage:', error);
      // Return from localStorage as fallback
      return { 
        used: user.aiChatUsed || 0, 
        limit: limits.maxAIChatMessagesPerMonth, 
        month: user.aiChatMonth || '' 
      };
    }
  };

  // Check if user can use AI features
  const canUseAIFeature = async (): Promise<boolean> => {
    const usage = await getAIUsage();
    if (limits.maxAIChatMessagesPerMonth === Infinity) return true;
    return usage.used < usage.limit;
  };

  return {
    updateSubscriptionInDB,
    trackAIChatUsage,
    getAIUsage,
    canUseAIFeature,
    currentTier,
    limits,
  };
}






