import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare let gtag: Function;

interface GoogleAnalyticsContextType {
  trackSectionView: (sectionName: string) => void;
  trackFeatureClick: (featureId: string) => void;
  trackCTAClick: (ctaId: string, sectionName: string) => void;
  trackTabChange: (tabName: string, sectionName: string) => void;
  trackServiceSelection: (serviceName: string) => void;
  trackDownload: (appType: string) => void;
  trackFormSubmission: (formName: string, isValid: boolean) => void;
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
}

const GoogleAnalyticsContext = createContext<GoogleAnalyticsContextType | undefined>(undefined);

export const GoogleAnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    if (typeof gtag === 'function') {
      gtag('config', 'G-MVQPD8G5H2', {
        'page_path': location.pathname + location.search
      });
    }
  }, [location]);

  const checkGtag = (): boolean => {
    return typeof window !== 'undefined' && typeof gtag === 'function';
  };

  // Track section views
  const trackSectionView = (sectionName: string) => {
    if (checkGtag()) {
      gtag('event', 'view_section', {
        'section_name': sectionName
      });
    }
  };

  // Track feature clicks
  const trackFeatureClick = (featureId: string) => {
    if (checkGtag()) {
      gtag('event', 'select_feature', {
        'feature_id': featureId
      });
    }
  };

  // Track CTA clicks
  const trackCTAClick = (ctaId: string, sectionName: string) => {
    if (checkGtag()) {
      gtag('event', 'click_cta', {
        'cta_id': ctaId,
        'section_name': sectionName
      });
    }
  };

  // Track tab changes
  const trackTabChange = (tabName: string, sectionName: string) => {
    if (checkGtag()) {
      gtag('event', 'change_tab', {
        'tab_name': tabName,
        'section_name': sectionName
      });
    }
  };

  // Track service selections
  const trackServiceSelection = (serviceName: string) => {
    if (checkGtag()) {
      gtag('event', 'select_service', {
        'service_name': serviceName
      });
    }
  };

  // Track app downloads
  const trackDownload = (appType: string) => {
    if (checkGtag()) {
      gtag('event', 'download_app', {
        'app_type': appType
      });
    }
  };

  // Track form submissions
  const trackFormSubmission = (formName: string, isValid: boolean) => {
    if (checkGtag()) {
      gtag('event', 'form_submission', {
        'form_name': formName,
        'is_valid': isValid
      });
    }
  };

  // Track generic events
  const trackEvent = (action: string, category: string, label: string = '', value: number = 0) => {
    if (checkGtag()) {
      gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value
      });
    }
  };

  const value: GoogleAnalyticsContextType = {
    trackSectionView,
    trackFeatureClick,
    trackCTAClick,
    trackTabChange,
    trackServiceSelection,
    trackDownload,
    trackFormSubmission,
    trackEvent
  };

  return (
    <GoogleAnalyticsContext.Provider value={value}>
      {children}
    </GoogleAnalyticsContext.Provider>
  );
};

export const useGoogleAnalytics = (): GoogleAnalyticsContextType => {
  const context = useContext(GoogleAnalyticsContext);
  if (context === undefined) {
    throw new Error('useGoogleAnalytics must be used within a GoogleAnalyticsProvider');
  }
  return context;
}; 