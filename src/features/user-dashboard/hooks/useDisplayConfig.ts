import { useState, useEffect } from 'react';

export interface DisplayConfig {
  id: number;
  fullName: string;
  email: string;
  role: string;
  status: string;
  theme: string;
  profileCompleted: boolean;
  accountCreatedAt: string;
  lastLoginAt: string;
  assessment: {
    taken: boolean;
    completionPercentage: number;
    lastTakenAt: string | null;
    nextDueAt: string;
    isOverdue: boolean;
    reminderCount: number;
  };
  subscription: {
    plan: string;
    status: string;
    trialDaysLeft: number;
    upgradeEligible: boolean;
  };
  rewards: {
    joined: boolean;
    points: number;
    level: string;
    achievements: any[];
  };
  notifications: {
    unreadCount: number;
    hasImportantUpdates: boolean;
    lastChecked: string;
  };
  onboarding: {
    showOnboardingBanner: boolean;
    progress: {
      totalSteps: number;
      completedSteps: number;
      percentageComplete: number;
      status: string;
    };
    nextSteps: Array<{
      stepNumber: number;
      title: string;
      completed: boolean;
      completedAt?: string;
      priority?: string;
      overdue?: boolean;
    }>;
    sidebarMenu: Array<{
      label: string;
      icon: string;
      iconSvg: string;
      path: string;
      visible: boolean;
      roles: string[];
      active: boolean;
      componentType: string;
      badge?: string;
      badgeColor?: string;
      description: string;
    }>;
    ctaText: string;
    ctaAction: string;
    ctaPriority: string;
  };
  layout: {
    defaultComponent: string;
    components: Array<{
      type: string;
      props?: Record<string, any>;
      content?: Array<{
        type: string;
        props?: Record<string, any>;
        className?: string;
        style?: React.CSSProperties;
        children?: Array<{
          type: string;
          props?: Record<string, any>;
          className?: string;
          style?: React.CSSProperties;
        }>;
      }>;
    }>;
  };
  profile: {
    profileCompleted: boolean;
    profileCompleteness: number;
    profilePictureUrl: string;
    isAnonymous: boolean;
    nickName: string;
    bio: string;
    country: string;
    timezone: string;
    preferences: {
      communicationStyle: string;
      sessionFormat: string;
      availableHours: string;
    };
  };
  wellnessGoals: Array<{
    id: number;
    title: string;
    selected: boolean;
    progress: number;
    targetDate: string;
  }>;
  availableGoals: Array<{
    id: number;
    title: string;
    emoji: string;
    imageUrl: string;
    description: string;
    category: string;
    difficulty: string;
  }>;
  dailyStreak: {
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: string | null;
    streakGoal: number;
  };
  upcomingEvents: Array<{
    id: number;
    eventType: string;
    date: string;
    title: string;
    priority: string;
    overdue?: boolean;
  }>;
  learningProgress: {
    completedLessons: number;
    totalLessons: number;
    currentCourse: string | null;
    certificates: any[];
  };
  therapistPreferences: {
    gender: string | null;
    specializations: any[];
    sessionType: string;
    availability: string;
  };
  navbar: {
    logo: {
      imageUrl: string;
      alt: string;
    };
    search: {
      showSearch: boolean;
      placeholder: string;
    };
    notifications: {
      showNotificationIcon: boolean;
      showBellIcon: boolean;
    };
    profile: {
      avatar: {
        initial: string;
        backgroundColor: string;
      };
      name: string;
      role: string;
    };
  };
}

export function useDisplayConfig() {
  const [config, setConfig] = useState<DisplayConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to import the config directly since it's a static file
        const configModule = await import('../data/display-config.json');
        setConfig(configModule.default);
      } catch (err) {
        console.error('Error loading display config:', err);
        setError(err instanceof Error ? err : new Error('Failed to load configuration'));
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  const updateConfig = (newConfig: Partial<DisplayConfig>) => {
    if (config) {
      setConfig({ ...config, ...newConfig });
    }
  };

  const getComponentConfig = (componentType: string) => {
    return config?.layout.components.find(comp => comp.type === componentType);
  };

  const getSidebarMenuItems = () => {
    return config?.onboarding.sidebarMenu.filter(item => item.visible) || [];
  };

  const getActiveMenuItem = () => {
    return config?.onboarding.sidebarMenu.find(item => item.active);
  };

  const getUserData = () => {
    if (!config) return null;
    
    return {
      id: config.id,
      fullName: config.fullName,
      email: config.email,
      role: config.role,
      profile: config.profile,
      subscription: config.subscription,
      notifications: config.notifications,
    };
  };

  return {
    config,
    loading,
    error,
    updateConfig,
    getComponentConfig,
    getSidebarMenuItems,
    getActiveMenuItem,
    getUserData,
  };
} 