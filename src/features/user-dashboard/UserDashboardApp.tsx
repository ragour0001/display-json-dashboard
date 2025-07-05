import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import { DynamicComponentRenderer } from "./components/ComponentRegistry";
import { useDisplayConfig } from "./hooks/useDisplayConfig";
import { USER_DASHBOARD_CSS_FILES, loadCssFile, removeCssFile } from "./cssConfig";

export default function UserDashboardApp() {
  const { config, loading, error, getSidebarMenuItems, getActiveMenuItem } = useDisplayConfig();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  const handleSectionChange = (section: string) => {
    console.log(`🔄 Navigation: Switching to ${section}`);
    setActiveSection(section);
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

  // Determine if right sidebar should show based on config
  const shouldShowRightSidebar = config.layout.showRightSidebar && 
    config.layout.rightSidebarComponents.includes(activeSection);

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

        .dashboard-layout .user-dashboard-content.sidebar-expanded-layout .main-content,
        .dashboard-layout .sidebar-expanded-layout .main-content {
          max-width: calc(100vw - 250px - 333px) !important;
          transition: max-width 0.3s ease !important;
        }

        /* When sidebar is collapsed, ensure proper spacing */
        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) .content-wrapper {
          margin-left: 72px !important;
        }
        
        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) .main-content {
          max-width: calc(100vw - 72px - 333px) !important;
          transition: max-width 0.3s ease !important;
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
            max-width: calc(100vw - 250px - 280px) !important;
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

          .dashboard-layout .user-dashboard-content.sidebar-expanded-layout .main-content,
          .dashboard-layout .sidebar-expanded-layout .main-content {
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
          max-width: calc(100vw - 250px - 333px) !important;
        }

        /* Collapsed sidebar fallback selectors */
        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) > .content-wrapper {
          margin-left: 72px !important;
        }
        
        .dashboard-layout .user-dashboard-content:not(.sidebar-expanded-layout) > .content-wrapper > .main-content {
          max-width: calc(100vw - 72px - 333px) !important;
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
            <div className="main-content">
              <DynamicComponentRenderer
                componentType={activeSection}
                config={config}
                onSectionChange={handleSectionChange}
              />
            </div>
            {shouldShowRightSidebar && <RightSidebar config={config} />}
          </div>
        </div>
      </div>
    </>
  );
} 