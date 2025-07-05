"use client";

import { useState, useEffect } from "react";
import { DisplayConfig } from "../hooks/useDisplayConfig";

interface SidebarMenuItem {
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
}

interface SidebarProps {
  config?: DisplayConfig;
  menuItems?: SidebarMenuItem[];
  onToggle?: (expanded: boolean) => void;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export default function Sidebar({
  menuItems = [],
  onToggle,
  activeSection = "home",
  onSectionChange,
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    if (onToggle) {
      onToggle(newExpanded);
    }
  };

  const handleSectionClick = (section: string) => {
    if (section === "home") {
      // For Home tab, toggle sidebar instead of switching sections
      toggleSidebar();
      if (onSectionChange) {
        onSectionChange("home");
      }
    } else {
      // For other tabs, switch sections
      if (onSectionChange) {
        onSectionChange(section);
      }
    }
  };

  // Helper function to get badge color
  const getBadgeColor = (color?: string): string => {
    const colors: Record<string, string> = {
      red: "#FF4444",
      green: "#00C851",
      blue: "#007AFF",
      orange: "#FF8C00",
      purple: "#6F42C1",
      yellow: "#FFC107",
    };
    return colors[color || "blue"] || "#007AFF";
  };

  // Helper function to render icons based on iconSvg name
  const getIconByName = (iconName: string, isActive: boolean): JSX.Element => {
    const iconColor = isActive ? "#006B5F" : "#666666";
    
    // Common icon props
    const iconProps = {
      className: "nav-icon",
      width: "24",
      height: "24",
      fill: "none",
      stroke: iconColor,
      strokeWidth: "2",
    };

    switch (iconName) {
      case "lucide:home":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
        );
      case "lucide:heart-pulse":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" />
            <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3h5.28" />
          </svg>
        );
      case "lucide:clipboard-list":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
          </svg>
        );
      case "lucide:bar-chart-3":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M3 3v18h18" />
            <path d="M18 17V9" />
            <path d="M13 17V5" />
            <path d="M8 17v-3" />
          </svg>
        );
      case "lucide:user-heart":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65L12 20.58l8.42-8.35a5.4 5.4 0 000-7.65z" />
          </svg>
        );
      case "lucide:book-open":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
          </svg>
        );
      case "lucide:file-text":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
          </svg>
        );
      case "lucide:user":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "lucide:settings":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        );
      case "lucide:help-circle":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        );
      case "lucide:lightbulb":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M9 21h6" />
            <path d="M12 17v4" />
            <path d="M12 3c5 0 9 4 9 9 0 2.3-.8 4.4-2.1 6.1-.4.5-.9 1-.9 1.6V21h-12v-1.3c0-.6-.5-1.1-.9-1.6C3.8 16.4 3 14.3 3 12c0-5 4-9 9-9z" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  useEffect(() => {
    if (onToggle) {
      onToggle(isExpanded);
    }
  }, [isExpanded, onToggle]);

  return (
    <>
      <style>{`
        .sidebar {
          display: flex;
          width: 72px;
          height: calc(100vh - 100px);
          padding-top: 20px;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
          transition: width 0.3s ease, padding 0.3s ease;
          position: fixed;
          top: 100px;
          left: 0;
          z-index: 900;
          overflow-y: auto;
        }

        .sidebar-expanded {
          width: 250px;
          align-items: flex-start;
          padding-left: 16px;
          padding-right: 16px;
        }

        .sidebar-collapsed {
          width: 72px;
          align-items: center;
        }

        .sidebar-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 1 0 0;
          align-self: stretch;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          flex-grow: 1;
          align-self: stretch;
        }

        .nav-items {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          align-self: stretch;
        }

        .nav-item {
          display: flex;
          width: 48px;
          height: 48px;
          align-items: flex-start;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s, width 0.3s ease;
        }

        .sidebar-expanded .nav-item {
          width: 100%;
        }

        .nav-item.active {
          background: #effbfa;
        }

        .nav-item:hover:not(.active) {
          background: #f7f9fa;
        }

        .nav-item-inner {
          display: flex;
          width: 48px;
          padding: 12px;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          align-self: stretch;
          border-radius: 12px;
          transition: width 0.3s ease, gap 0.3s ease;
        }

        .sidebar-expanded .nav-item-inner {
          width: 100%;
          gap: 12px;
          justify-content: flex-start;
        }

        .nav-label {
          color: #666666;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease 0.1s;
        }

        .sidebar-expanded .nav-label {
          opacity: 1;
        }

        .sidebar-expanded .nav-item.active .nav-label {
          color: #006b5f;
          font-weight: 600;
        }

        .nav-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .nav-label-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          width: 100%;
        }

        .nav-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 2px 6px;
          border-radius: 10px;
          color: white;
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
          min-width: 18px;
          height: 16px;
          margin-left: 8px;
        }

        .sidebar-footer {
          display: flex;
          padding: 20px 0px;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          align-self: stretch;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .sidebar-expanded .sidebar-footer {
          align-items: flex-start;
        }

        .profile-avatar {
          display: flex;
          width: 48px;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background: #ebeff2;
          transition: width 0.3s ease;
          cursor: pointer;
        }

        .sidebar-expanded .profile-avatar {
          width: 100%;
          justify-content: flex-start;
        }

        .avatar-container {
          display: flex;
          width: 48px;
          padding: 12px;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          align-self: stretch;
          border-radius: 12px;
          transition: width 0.3s ease, gap 0.3s ease;
        }

        .sidebar-expanded .avatar-container {
          width: 100%;
          gap: 12px;
          justify-content: flex-start;
        }

        .profile-icon {
          width: 16px;
          height: 18px;
          flex-shrink: 0;
        }

        .sidebar-expanded-layout .content-wrapper {
          margin-left: 250px;
        }

        .sidebar-expanded-layout .main-content {
          max-width: calc(100vw - 250px - 333px);
        }

        @media (max-width: 1200px) {
          .sidebar-expanded-layout .main-content {
            max-width: calc(100vw - 250px - 280px);
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            top: 80px;
            width: 100%;
            height: 60px;
            flex-direction: row;
            padding: 10px 20px;
            z-index: 900;
          }

          .sidebar-nav {
            flex-direction: row;
          }

          .nav-items {
            flex-direction: row;
          }

          .content-wrapper {
            flex-direction: column;
            margin-left: 0;
            margin-top: 60px;
            height: calc(100vh - 140px);
          }

          .main-content {
            max-width: 100%;
            padding: 20px;
          }
        }
      `}</style>
      <aside
        className={`sidebar ${isExpanded ? "sidebar-expanded" : "sidebar-collapsed"}`}
      >
      <div className="sidebar-content">
        <div className="sidebar-nav">
          <div className="nav-items">
            {menuItems.map((item) => {
              const isActive = activeSection === item.componentType;
              const badgeColor = getBadgeColor(item.badgeColor);
              
              return (
                <div
                  key={item.componentType}
                  className={`nav-item ${isActive ? "active" : ""}`}
                  onClick={() => handleSectionClick(item.componentType)}
                  title={item.description}
                >
                  <div className="nav-item-inner">
                    <div className="nav-icon-container">
                      {getIconByName(item.iconSvg, isActive)}
                    </div>
                    {isExpanded && (
                      <div className="nav-label-container">
                        <span className="nav-label">{item.label}</span>
                        {item.badge && (
                          <span 
                            className="nav-badge" 
                            style={{ backgroundColor: badgeColor }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="profile-avatar">
            <div className="avatar-container">
              <svg
                className="profile-icon"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.318 12.1183C2.16189 11.2744 3.30646 10.8003 4.49992 10.8003H11.6998C12.8932 10.8003 14.0378 11.2744 14.8817 12.1183C15.7256 12.9622 16.1997 14.1068 16.1997 15.3002V17.1002C16.1997 17.5972 15.7968 18.0002 15.2997 18.0002C14.8027 18.0002 14.3997 17.5972 14.3997 17.1002V15.3002C14.3997 14.5841 14.1153 13.8974 13.6089 13.3911C13.1026 12.8847 12.4159 12.6003 11.6998 12.6003H4.49992C3.78385 12.6003 3.0971 12.8847 2.59076 13.3911C2.08443 13.8974 1.79997 14.5841 1.79997 15.3002V17.1002C1.79997 17.5972 1.39703 18.0002 0.899984 18.0002C0.402936 18.0002 0 17.5972 0 17.1002V15.3002C0 14.1068 0.474097 12.9622 1.318 12.1183Z"
                  fill="#006B5F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.1005 1.79997C6.60936 1.79997 5.40055 3.00878 5.40055 4.49992C5.40055 5.99106 6.60936 7.19987 8.1005 7.19987C9.59165 7.19987 10.8005 5.99106 10.8005 4.49992C10.8005 3.00878 9.59165 1.79997 8.1005 1.79997ZM3.60059 4.49992C3.60059 2.01468 5.61527 0 8.1005 0C10.5857 0 12.6004 2.01468 12.6004 4.49992C12.6004 6.98515 10.5857 8.99984 8.1005 8.99984C5.61527 8.99984 3.60059 6.98515 3.60059 4.49992Z"
                  fill="#006B5F"
                />
              </svg>
              {isExpanded && <span className="nav-label">Profile</span>}
            </div>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
