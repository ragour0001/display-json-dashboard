import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { DynamicComponentRenderer } from "./components/ComponentRegistry";
import LearnMoreScreen from "./components/LearnMoreScreen";
import { useDisplayConfig } from "./hooks/useDisplayConfig";
import { USER_DASHBOARD_CSS_FILES, loadCssFile, removeCssFile } from "./cssConfig";

export default function UserDashboardApp() {
  const { config, loading, error, getSidebarMenuItems, getActiveMenuItem } = useDisplayConfig();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // State to track selected goals from Home tab
  const [selectedGoals, setSelectedGoals] = useState<any[]>([]);
  
  // State for sliding Learn More screen
  const [showLearnMore, setShowLearnMore] = useState(false);

  // Debug selectedGoals changes
  useEffect(() => {
    console.log('🎯 UserDashboardApp: selectedGoals state changed to:', selectedGoals);
  }, [selectedGoals]);

  // Initialize active section from config when loaded (only if not already set)
  useEffect(() => {
    if (config && activeSection === "home") {
      const activeItem = getActiveMenuItem();
      if (activeItem) {
        setActiveSection(activeItem.componentType);
      } else {
        setActiveSection(config.layout.defaultComponent);
      }
    }
  }, [config, getActiveMenuItem]);

  useEffect(() => {
    // TARGETED CSS ISOLATION: Disable specific conflicting stylesheets
    const conflictingStylesheets = document.querySelectorAll('link[rel="stylesheet"], style');
    const disabledElements: { element: HTMLLinkElement | HTMLStyleElement; wasDisabled: boolean }[] = [];
    
    conflictingStylesheets.forEach((element) => {
      const linkElement = element as HTMLLinkElement;
      const styleElement = element as HTMLStyleElement;
      
      // Skip our own user-dashboard CSS
      if (element.id && element.id.includes('user-dashboard')) {
        return;
      }
      
      // Check if this stylesheet contains conflicting CSS
      const href = linkElement.href || '';
      const isConflicting = href.includes('Dashboard.scss') || 
                           href.includes('SetNewPassword.scss') || 
                           href.includes('Verification.scss') ||
                           href.includes('index.css') ||
                           href.includes('main.css') ||
                           href.includes('global.css');
      
      if (isConflicting) {
        const wasDisabled = linkElement.disabled || styleElement.disabled || false;
        disabledElements.push({ element: element as HTMLLinkElement | HTMLStyleElement, wasDisabled });
        
        if (linkElement.href) {
          linkElement.disabled = true;
        } else if (styleElement) {
          styleElement.disabled = true;
        }
      }
    });

    // Load only user-dashboard specific CSS files
    const globalsCssLink = loadCssFile(USER_DASHBOARD_CSS_FILES.globals, 'user-dashboard-globals-css');

    // Load component CSS files
    const loadedComponentLinks: HTMLLinkElement[] = [];
    USER_DASHBOARD_CSS_FILES.components.forEach((cssFile, index) => {
      const link = loadCssFile(cssFile, `user-dashboard-component-css-${index}`);
      loadedComponentLinks.push(link);
    });

    return () => {
      // Re-enable previously disabled CSS
      disabledElements.forEach(({ element, wasDisabled }) => {
        if (!wasDisabled) {
          element.disabled = false;
        }
      });
      
      // Clean up user-dashboard specific CSS
      removeCssFile(globalsCssLink);
      loadedComponentLinks.forEach(link => {
        removeCssFile(link);
      });
    };
  }, []);

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  const handleSectionChange = (section: string, data?: any) => {
    console.log(`🔄 Navigation: Switching to ${section}`, data);
    
    // Handle goal completion from home page
    if (section === 'goals-completed' && data && Array.isArray(data)) {
      console.log('✅ UserDashboardApp: Goals completed, saving:', data);
      setSelectedGoals(data);
      console.log('✅ UserDashboardApp: selectedGoals state updated to:', data);
      // Don't change active section, keep user on current page
      return;
    }
    
    // Handle Learn More action - trigger sliding animation
    if (section === 'learn-more') {
      console.log('📖 UserDashboardApp: Showing Learn More screen');
      setShowLearnMore(true);
      return;
    }
    
    setActiveSection(section);
  };
  
  // Handler for going back from Learn More screen
  const handleBackFromLearnMore = () => {
    console.log('🔙 UserDashboardApp: Going back from Learn More screen');
    setShowLearnMore(false);
  };

  // Show loading state while config is being loaded
  if (loading) {
    return (
      <div className="dashboard-loading" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
      }}>
        <div className="loading-spinner" style={{ fontSize: '18px', color: '#666' }}>
          Loading dashboard...
        </div>
      </div>
    );
  }

  // Show error state if config failed to load
  if (error) {
    return (
      <div className="dashboard-error" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
      }}>
        <h2 style={{ color: '#d32f2f', marginBottom: '16px' }}>Error loading dashboard</h2>
        <p>{error.message}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '12px 24px',
            background: '#006b5f',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            marginTop: '16px'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  // Don't render if config is not loaded
  if (!config) {
    return null;
  }



  return (
    <>
      <style id="user-dashboard-inline-styles">{`
        /* User Dashboard Specific Styles - High Priority */
        
        /* Dashboard Layout - Isolated Styles */
        body:has(.dashboard-layout) .dashboard-layout,
        .dashboard-layout {
          display: flex !important;
          flex-direction: column !important;
          min-height: 100vh !important;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif !important;
          background: #fff !important;
          color: #1c1c1c !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }

        body:has(.dashboard-layout) .user-dashboard-content,
        .dashboard-layout .user-dashboard-content {
          display: flex !important;
          flex: 1 !important;
          margin-top: 100px !important; /* Account for fixed navbar height */
          height: calc(100vh - 100px) !important;
          overflow: hidden !important;
        }

        /* Content Wrapper - MAXIMUM SPECIFICITY OVERRIDE */
        body:has(.dashboard-layout) .content-wrapper,
        .dashboard-layout .content-wrapper,
        .dashboard-layout .user-dashboard-content .content-wrapper,
        div.dashboard-layout div.content-wrapper {
          /* Override Dashboard.scss properties */
          align-self: unset !important;
          width: auto !important;
          max-width: none !important;
          
          /* Override SetNewPassword.scss and Verification.scss properties */
          flex-direction: row !important;
          align-items: unset !important;
          justify-content: unset !important;
          
          /* Apply our dashboard-specific styles */
          display: flex !important;
          flex: 1 !important;
          transition: margin-left 0.3s ease !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          height: 100% !important;
          box-sizing: border-box !important;
          
          /* Ensure no external padding/borders interfere */
          padding: 0 !important;
          border: none !important;
          background: transparent !important;
          position: relative !important;
          
          /* Default margin for collapsed sidebar (72px) */
          margin-left: 72px !important;
        }

        /* Sidebar expansion adjustments - Fixed targeting */
        .dashboard-layout .user-dashboard-content.sidebar-expanded-layout .content-wrapper,
        .dashboard-layout .sidebar-expanded-layout .content-wrapper {
          margin-left: 250px !important;
          transition: margin-left 0.3s ease !important;
        }

        /* Main content expands to full width */
        .dashboard-layout .user-dashboard-content.sidebar-expanded-layout .main-content,
        .dashboard-layout .sidebar-expanded-layout .main-content {
          max-width: calc(100vw - 250px) !important;
          transition: max-width 0.3s ease !important;
        }

        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) .main-content {
          max-width: calc(100vw - 72px) !important;
          transition: max-width 0.3s ease !important;
        }

        /* When sidebar is collapsed, ensure proper spacing */
        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) .content-wrapper {
          margin-left: 72px !important;
        }

        /* Ensure smooth transitions for sidebar toggle */
        .dashboard-layout .content-wrapper {
          transition: margin-left 0.3s ease !important;
        }
        
        .dashboard-layout .main-content {
          transition: max-width 0.3s ease !important;
        }

        body:has(.dashboard-layout) .main-content,
        .dashboard-layout .main-content {
          flex: 1 !important;
          padding: 0 !important;
          margin: 0 !important;
          display: block !important;
        }

        /* Reset potential global interference */
        .dashboard-layout * {
          box-sizing: border-box !important;
        }

        /* Responsive Design - Fixed sidebar expansion */
        @media (max-width: 1200px) {
          .dashboard-layout .user-dashboard-content.sidebar-expanded-layout .main-content,
          .dashboard-layout .sidebar-expanded-layout .main-content {
            max-width: calc(100vw - 250px) !important;
          }
        }

        @media (max-width: 768px) {
          .dashboard-layout .user-dashboard-content {
            flex-direction: column !important;
            margin-top: 80px !important;
            height: calc(100vh - 80px) !important;
          }

          .dashboard-layout .content-wrapper {
            flex-direction: column !important;
            margin-left: 0 !important;
            margin-top: 60px !important;
            height: calc(100vh - 140px) !important;
          }

          /* Override sidebar expansion on mobile */
          .dashboard-layout .user-dashboard-content.sidebar-expanded-layout .content-wrapper,
          .dashboard-layout .sidebar-expanded-layout .content-wrapper {
            margin-left: 0 !important;
          }

          .dashboard-layout .main-content {
            max-width: 100% !important;
          }
        }

        /* Override any global styles that might interfere */
        .dashboard-layout .prose,
        .dashboard-layout [data-aos],
        .dashboard-layout .slick-list {
          all: initial !important;
          display: block !important;
        }

        /* NUCLEAR OVERRIDE: Final .content-wrapper isolation with sidebar support */
        body div.dashboard-layout div.user-dashboard-content div.content-wrapper,
        html body div.dashboard-layout div.content-wrapper,
        .dashboard-layout .content-wrapper[class*="content-wrapper"] {
          /* Reset ALL potentially conflicting properties */
          align-self: unset !important;
          width: auto !important;
          max-width: none !important;
          padding: 0 !important;
          border: none !important;
          background: transparent !important;
          text-align: left !important;
          
          /* Force our layout properties */
          display: flex !important;
          flex: 1 !important;
          flex-direction: row !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          height: 100% !important;
          box-sizing: border-box !important;
          position: relative !important;
          z-index: 1 !important;
          
          /* Default margin for collapsed sidebar - will be overridden by sidebar expansion */
          margin-left: 72px !important;
          transition: margin-left 0.3s ease !important;
        }

        /* Sidebar expansion override - highest specificity */
        .dashboard-layout .user-dashboard-content.sidebar-expanded-layout .content-wrapper {
          margin-left: 250px !important;
        }


        
        /* Additional fallback selectors for sidebar states */
        .dashboard-layout .sidebar-expanded-layout > .content-wrapper {
          margin-left: 250px !important;
        }
        
        .dashboard-layout .sidebar-expanded-layout > .content-wrapper > .main-content {
          max-width: calc(100vw - 250px) !important;
        }

        /* Collapsed sidebar fallback selectors */
        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) > .content-wrapper {
          margin-left: 72px !important;
        }
        
        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) > .content-wrapper > .main-content {
          max-width: calc(100vw - 72px) !important;
        }

        /* Sliding Animation Styles */
        .sliding-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
        }

        .home-screen {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.4s ease-in-out;
          flex-shrink: 0;
        }

        .learn-more-screen-container {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.4s ease-in-out;
          flex-shrink: 0;
        }

        /* Default position - Home screen visible */
        .sliding-container .home-screen {
          transform: translateX(0);
        }

        .sliding-container .learn-more-screen-container {
          transform: translateX(100%);
        }

        /* Learn More active - slide home to left, learn more to center */
        .sliding-container.learn-more-active .home-screen {
          transform: translateX(-100%);
        }

        .sliding-container.learn-more-active .learn-more-screen-container {
          transform: translateX(-100%);
        }

        /* Learn More Screen Styles */
        .learn-more-screen {
          width: 100%;
          height: 100%;
          padding: 0;
          background: #fff;
          overflow-y: auto;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .learn-more-header {
          padding: 20px 40px;
          border-bottom: 1px solid #f1f1f1;
        }

        .learn-more-back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #006B5F;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          padding: 8px 0;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .learn-more-back-btn:hover {
          background-color: #f0f9ff;
          padding: 8px 12px;
        }

        .learn-more-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px;
        }

        .learn-more-hero {
          text-align: left;
          margin-bottom: 40px;
        }

        .learn-more-title {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.2;
        }

        /* Discover Section */
        .discover-section {
          margin-bottom: 60px;
        }

        .discover-subtitle {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
          margin-top: 40px;
        }

        .discover-description {
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 24px;
        }

        .discover-includes {
          font-size: 16px;
          color: #4a5568;
          margin-bottom: 16px;
          margin-top: 24px;
        }

        .includes-list {
          margin-left: 0;
        }

        .include-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 16px;
          color: #006B5F;
          font-weight: 500;
        }

        .include-number {
          color: #006B5F;
          font-weight: 600;
        }

        .include-text {
          color: #006B5F;
        }

        /* Step Sections */
        .step-section {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          margin-bottom: 60px;
          align-items: start;
        }

        .step-content {
          padding-right: 40px;
        }

        .step-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .step-description {
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 16px;
        }

        .step-preferences {
          font-size: 16px;
          color: #4a5568;
          margin-bottom: 12px;
          margin-top: 16px;
        }

        .step-benefits {
          margin: 16px 0;
          padding-left: 0;
          list-style: none;
        }

        .step-benefits li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          font-size: 16px;
          color: #4a5568;
          line-height: 1.5;
        }

        .step-benefits li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #4a5568;
          font-weight: bold;
        }

        .step-time {
          margin-top: 24px;
        }

        .time-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #4a5568;
        }

        .green-dot {
          width: 8px;
          height: 8px;
          background-color: #10B981;
          border-radius: 50%;
        }

        /* Visual Elements */
        .step-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        /* Goals Visual */
        .goals-visual {
          align-items: flex-start;
        }

        .goal-pills {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .goal-pill {
          padding: 12px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          color: #1a1a1a;
        }

        .goal-pill.orange {
          background-color: #FED7AA;
        }

        .goal-pill.yellow {
          background-color: #FEF3C7;
        }

        .goal-pill.green {
          background-color: #A7F3D0;
        }

        /* Assessment Visual */
        .assessment-visual {
          align-items: center;
          gap: 20px;
        }

        .progress-circle {
          margin-bottom: 16px;
        }

        .progress-text {
          font-size: 24px;
          font-weight: 700;
          fill: #006B5F;
        }

        .progress-bars {
          display: flex;
          gap: 8px;
          flex-direction: column;
        }

        .mini-bar {
          width: 120px;
          height: 8px;
          background-color: #E5E7EB;
          border-radius: 4px;
        }

        .mini-bar:nth-child(1) {
          background-color: #00C7B2;
        }

        .mini-bar:nth-child(2) {
          background-color: #00C7B2;
          width: 90px;
        }

        /* Preferences Visual */
        .preferences-visual {
          width: 100%;
        }

        .preferences-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .preferences-header {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 20px;
          text-align: center;
        }

        .preferences-progress {
          margin-bottom: 24px;
        }

        .progress-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #E5E7EB;
        }

        .dot.active {
          background-color: #006B5F;
        }

        .preferences-field {
          margin-bottom: 24px;
        }

        .preferences-field label {
          display: block;
          font-size: 14px;
          color: #4a5568;
          margin-bottom: 8px;
        }

        .select-field {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
        }

        .select-field span {
          color: #9CA3AF;
          font-size: 14px;
        }

        .preferences-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .pref-btn {
          padding: 8px 24px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid;
          transition: all 0.2s ease;
        }

        .pref-btn.exit {
          background: #fff;
          border-color: #10B981;
          color: #10B981;
        }

        .pref-btn.back {
          background: #006B5F;
          border-color: #006B5F;
          color: #fff;
        }

        /* Why It Matters Section */
        .why-matters-section {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%);
          border-radius: 16px;
          padding: 32px;
          margin: 60px 0;
          position: relative;
        }

        .why-matters-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .why-matters-title {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        .help-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
        }

        .why-matters-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .matter-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .matter-number {
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          min-width: 24px;
        }

        .matter-text {
          color: #fff;
          font-size: 16px;
          line-height: 1.5;
        }

        /* New Platform Section */
        .new-platform-section {
          background: #F7FAFC;
          border-radius: 16px;
          padding: 40px;
          margin-top: 40px;
        }

        .platform-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 40px;
          align-items: center;
        }

        .platform-label {
          font-size: 14px;
          color: #006B5F;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .platform-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .download-section {
          margin-top: 20px;
        }

        .download-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .download-buttons {
          display: flex;
          gap: 12px;
        }

        .download-btn {
          height: 48px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .download-btn:hover {
          transform: translateY(-2px);
        }

        .platform-phones {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
        }

        .phone-img {
          max-height: 200px;
          width: auto;
        }

        .phone-1 {
          z-index: 2;
        }

        .phone-2 {
          z-index: 1;
          margin-left: -20px;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 968px) {
          .step-section {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .step-content {
            padding-right: 0;
          }

          .platform-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .platform-phones {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .learn-more-content {
            padding: 20px;
          }

          .learn-more-header {
            padding: 16px 20px;
          }

          .learn-more-title {
            font-size: 28px;
          }

          .discover-subtitle {
            font-size: 20px;
          }

          .step-title {
            font-size: 24px;
          }

          .step-section {
            margin-bottom: 40px;
          }

          .why-matters-section {
            padding: 24px;
            margin: 40px 0;
          }

          .why-matters-title {
            font-size: 20px;
          }

          .new-platform-section {
            padding: 24px;
          }

          .platform-title {
            font-size: 18px;
          }

          .phone-img {
            max-height: 150px;
          }

          .download-buttons {
            justify-content: center;
          }
        }

                 @media (max-width: 480px) {
           .goal-pills {
             align-items: center;
           }

           .preferences-card {
             padding: 16px;
           }

           .platform-phones {
             flex-direction: column;
             gap: 8px;
           }

           .phone-2 {
             margin-left: 0;
           }
         }


      `}</style>
          <div className="dashboard-layout">
        <Navbar />
        <div
          className={`user-dashboard-content ${isSidebarExpanded ? "sidebar-expanded-layout" : ""}`}
        >
          <Sidebar
            config={config}
            menuItems={getSidebarMenuItems()}
            onToggle={handleSidebarToggle}
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
          <div className="content-wrapper">
            <div className={`sliding-container ${showLearnMore ? 'learn-more-active' : ''}`}>
              <div className="home-screen">
                <div className="main-content">
                  <DynamicComponentRenderer
                    componentType={activeSection}
                    config={config}
                    onSectionChange={handleSectionChange}
                    additionalProps={{
                      selectedGoals
                    }}
                  />
                </div>
              </div>
              
              {showLearnMore && (
                <div className="learn-more-screen-container">
                  <LearnMoreScreen onBack={handleBackFromLearnMore} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 