export const useGoogleAnalytics = () => {
  const trackSectionView = (section: string) => {
    // Replace with actual analytics logic
    console.log(`Section viewed: ${section}`);
    
    // Example Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'section_view', {
        section_name: section,
        event_category: 'engagement',
        event_label: section
      });
    }
  };

  const trackTabChange = (tabLabel: string, section: string) => {
    console.log(`Tab changed: ${tabLabel} in ${section}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'tab_change', {
        tab_name: tabLabel,
        section_name: section,
        event_category: 'interaction',
        event_label: `${section}_${tabLabel}`
      });
    }
  };

  const trackServiceSelection = (serviceName: string) => {
    console.log(`Service selected: ${serviceName}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_selection', {
        service_name: serviceName,
        event_category: 'engagement',
        event_label: serviceName
      });
    }
  };

  const trackFeatureClick = (featureName: string) => {
    console.log(`Feature clicked: ${featureName}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'feature_click', {
        feature_name: featureName,
        event_category: 'interaction',
        event_label: featureName
      });
    }
  };

  const trackDownload = (downloadType: string) => {
    console.log(`Download clicked: ${downloadType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        download_type: downloadType,
        event_category: 'conversion',
        event_label: downloadType
      });
    }
  };

  return {
    trackSectionView,
    trackTabChange,
    trackServiceSelection,
    trackFeatureClick,
    trackDownload
  };
}; 