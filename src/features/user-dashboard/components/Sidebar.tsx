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
  // Sidebar defaults to expanded
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    if (onToggle) {
      onToggle(newExpanded);
    }
  };

  // Remove toggle from Home click, just change section
  const handleSectionClick = (section: string) => {
    if (onSectionChange) {
      onSectionChange(section);
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
          <svg
            className="nav-icon"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M15.5692 6.78153L8.9025 0.365188C8.89924 0.362288 8.89618 0.359164 8.89333 0.355838C8.64788 0.128131 8.32802 0.00195313 7.99625 0.00195312C7.66448 0.00195313 7.34462 0.128131 7.09917 0.355838L7.09 0.365188L0.430833 6.78153C0.294998 6.90895 0.18657 7.06374 0.11241 7.23611C0.0382493 7.40848 -2.80357e-05 7.59468 1.54065e-08 7.78292V15.6418C1.54065e-08 16.0026 0.140476 16.3485 0.390524 16.6036C0.640573 16.8587 0.979711 17.002 1.33333 17.002H5.33333C5.68696 17.002 6.02609 16.8587 6.27614 16.6036C6.52619 16.3485 6.66667 16.0026 6.66667 15.6418V11.5615H9.33333V15.6418C9.33333 16.0026 9.47381 16.3485 9.72386 16.6036C9.97391 16.8587 10.313 17.002 10.6667 17.002H14.6667C15.0203 17.002 15.3594 16.8587 15.6095 16.6036C15.8595 16.3485 16 16.0026 16 15.6418V7.78292C16 7.59468 15.9618 7.40848 15.8876 7.23611C15.8134 7.06374 15.705 6.90895 15.5692 6.78153ZM14.6667 15.6418H10.6667V11.5615C10.6667 11.2008 10.5262 10.8548 10.2761 10.5997C10.0261 10.3447 9.68696 10.2014 9.33333 10.2014H6.66667C6.31305 10.2014 5.97391 10.3447 5.72386 10.5997C5.47381 10.8548 5.33333 11.2008 5.33333 11.5615V15.6418H1.33333V7.78292L1.3425 7.77442L8 1.36062L14.6583 7.77272L14.6675 7.78122L14.6667 15.6418Z"
              fill={activeSection === "home" ? "#006B5F" : "#666666"}
            />
          </svg>

          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          //   <polyline points="9,22 9,12 15,12 15,22" />
          // </svg>
        );
      case "lucide:heart-pulse":
        return (
          <svg
            className="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0017 19.5C8.68775 19.5 7.45267 19.2507 6.2965 18.752C5.14033 18.2533 4.13467 17.5766 3.2795 16.7218C2.42433 15.8669 1.74725 14.8617 1.24825 13.706C0.749417 12.5503 0.5 11.3156 0.5 10.0017C0.5 8.68775 0.749333 7.45267 1.248 6.2965C1.74667 5.14033 2.42342 4.13467 3.27825 3.2795C4.13308 2.42433 5.13833 1.74725 6.294 1.24825C7.44967 0.749417 8.68442 0.5 9.99825 0.5C11.3123 0.5 12.5473 0.749333 13.7035 1.248C14.8597 1.74667 15.8653 2.42342 16.7205 3.27825C17.5757 4.13308 18.2528 5.13833 18.7518 6.294C19.2506 7.44967 19.5 8.68442 19.5 9.99825C19.5 11.3123 19.2507 12.5473 18.752 13.7035C18.2533 14.8597 17.5766 15.8653 16.7218 16.7205C15.8669 17.5757 14.8617 18.2528 13.706 18.7518C12.5503 19.2506 11.3156 19.5 10.0017 19.5ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18ZM10.0022 15.5C8.47508 15.5 7.17625 14.9655 6.10575 13.8965C5.03525 12.8275 4.5 11.5294 4.5 10.0022C4.5 8.47508 5.0345 7.17625 6.1035 6.10575C7.1725 5.03525 8.47058 4.5 9.99775 4.5C11.5249 4.5 12.8238 5.0345 13.8943 6.1035C14.9648 7.1725 15.5 8.47058 15.5 9.99775C15.5 11.5249 14.9655 12.8238 13.8965 13.8943C12.8275 14.9648 11.5294 15.5 10.0022 15.5ZM10 14C11.1 14 12.0417 13.6083 12.825 12.825C13.6083 12.0417 14 11.1 14 10C14 8.9 13.6083 7.95833 12.825 7.175C12.0417 6.39167 11.1 6 10 6C8.9 6 7.95833 6.39167 7.175 7.175C6.39167 7.95833 6 8.9 6 10C6 11.1 6.39167 12.0417 7.175 12.825C7.95833 13.6083 8.9 14 10 14ZM10 11.5C9.591 11.5 9.23875 11.3523 8.94325 11.0568C8.64775 10.7613 8.5 10.409 8.5 10C8.5 9.591 8.64775 9.23875 8.94325 8.94325C9.23875 8.64775 9.591 8.5 10 8.5C10.409 8.5 10.7613 8.64775 11.0568 8.94325C11.3523 9.23875 11.5 9.591 11.5 10C11.5 10.409 11.3523 10.7613 11.0568 11.0568C10.7613 11.3523 10.409 11.5 10 11.5Z"
              fill={
                activeSection === "goals-assessment"
                  ? "#006B5F"
                  : "#666666"
              }
            />
          </svg>

          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" />
          //   <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3h5.28" />
          // </svg>
        );
      case "lucide:clipboard-list":
        return (
          <svg
            className="nav-icon"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              d="M16.95 12.819L14.4557 10.3497L15.525 9.29599L16.95 10.7055L20.475 7.18048L21.5443 8.22473L16.95 12.819ZM10 17.3265L7.83475 15.3805C6.47442 14.1433 5.32667 13.0612 4.3915 12.1342C3.45617 11.2074 2.69975 10.361 2.12225 9.59499C1.54458 8.82899 1.12983 8.10873 0.878 7.43423C0.626 6.7599 0.5 6.06507 0.5 5.34973C0.5 3.93057 0.9785 2.74498 1.9355 1.79298C2.89267 0.841151 4.08083 0.365234 5.5 0.365234C6.373 0.365234 7.198 0.569401 7.975 0.977734C8.752 1.38607 9.427 1.97165 10 2.73448C10.573 1.97165 11.248 1.38607 12.025 0.977734C12.802 0.569401 13.627 0.365234 14.5 0.365234C15.7538 0.365234 16.8118 0.734735 17.674 1.47374C18.5362 2.2129 19.0955 3.13823 19.352 4.24973H17.775C17.5455 3.50623 17.1262 2.9229 16.5173 2.49973C15.9082 2.07657 15.2358 1.86498 14.5 1.86498C13.6692 1.86498 12.9342 2.09415 12.2952 2.55248C11.6561 3.01082 11.0538 3.6599 10.4885 4.49973H9.5115C8.95 3.65357 8.3385 3.0029 7.677 2.54773C7.01533 2.09257 6.28967 1.86498 5.5 1.86498C4.53717 1.86498 3.71317 2.19582 3.028 2.85748C2.34267 3.51898 2 4.34973 2 5.34973C2 5.90607 2.11667 6.47082 2.35 7.04398C2.58333 7.61698 3 8.27757 3.6 9.02573C4.2 9.77374 5.01667 10.65 6.05 11.6545C7.08333 12.659 8.4 13.8741 10 15.2997C10.4718 14.8779 10.977 14.4298 11.5155 13.9555C12.0538 13.4812 12.5077 13.0677 12.877 12.7152L13.946 13.7842C13.5667 14.1369 13.1145 14.5447 12.5895 15.0075C12.0645 15.4703 11.5693 15.9126 11.1038 16.3342L10 17.3265Z"
              fill={
                activeSection === "my-care-plan" ? "#006B5F" : "#666666"
              }
            />
          </svg>

          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          //   <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
          //   <path d="M12 11h4" />
          //   <path d="M12 16h4" />
          //   <path d="M8 11h.01" />
          //   <path d="M8 16h.01" />
          // </svg>
        );
      case "lucide:bar-chart-3":
        return (
          <svg
            className="nav-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12 15.5V9.59625H15.5V15.5H12ZM6.25 15.5V0.5H9.75V15.5H6.25ZM0.5 15.5V5.404H4V15.5H0.5Z"
              fill={activeSection === "progress" ? "#006B5F" : "#666666"}
            />
          </svg>

          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <path d="M3 3v18h18" />
          //   <path d="M18 17V9" />
          //   <path d="M13 17V5" />
          //   <path d="M8 17v-3" />
          // </svg>
        );
      case "lucide:user-heart":
        return (
          <svg
            className="nav-icon"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <path
              d="M4.85 11.823C5.29483 12.2678 5.84108 12.4902 6.48875 12.4902C7.13625 12.4902 7.68358 12.2678 8.13075 11.823L11.8215 8.1325C12.2673 7.6865 12.4902 7.13967 12.4902 6.492C12.4902 5.8445 12.2678 5.29717 11.823 4.85C11.3758 4.40517 10.8285 4.18275 10.181 4.18275C9.53333 4.18275 8.98708 4.40517 8.54225 4.85C7.97692 4.64617 7.41667 4.59942 6.8615 4.70975C6.30633 4.81992 5.8365 5.06733 5.452 5.452C5.06733 5.8365 4.81992 6.30633 4.70975 6.8615C4.59942 7.41667 4.64617 7.97692 4.85 8.54225C4.40517 8.98942 4.18275 9.53675 4.18275 10.1842C4.18275 10.8319 4.40517 11.3782 4.85 11.823ZM3.5 19.5V15.4693C2.55 14.6026 1.8125 13.6093 1.2875 12.4895C0.7625 11.3695 0.5 10.204 0.5 8.993C0.5 6.63383 1.32642 4.62858 2.97925 2.97725C4.63192 1.32575 6.63883 0.5 9 0.5C10.9423 0.5 12.6792 1.0805 14.2105 2.2415C15.742 3.40233 16.7366 4.90842 17.1943 6.75975L18.3625 11.3743C18.4375 11.6594 18.3846 11.9183 18.2038 12.151C18.0231 12.3837 17.7821 12.5 17.4807 12.5H15.5V15.6923C15.5 16.1894 15.323 16.615 14.969 16.969C14.615 17.323 14.1894 17.5 13.6923 17.5H11.5V19.5H10V16H13.6923C13.7821 16 13.8558 15.9712 13.9135 15.9135C13.9712 15.8558 14 15.7821 14 15.6923V11H16.7L15.75 7.125C15.3667 5.602 14.5468 4.36708 13.2905 3.42025C12.034 2.47342 10.6038 2 9 2C7.06667 2 5.41667 2.67592 4.05 4.02775C2.68333 5.37958 2 7.0235 2 8.9595C2 9.958 2.20417 10.9065 2.6125 11.805C3.02083 12.7035 3.6 13.5022 4.35 14.201L5 14.8V19.5H3.5Z"
              fill={
                activeSection === "therapist-coach"
                  ? "#006B5F"
                  : "#666666"
              }
            />
          </svg>

          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          //   <circle cx="9" cy="7" r="4" />
          //   <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65L12 20.58l8.42-8.35a5.4 5.4 0 000-7.65z" />
          // </svg>
        );
      case "lucide:book-open":
        return (
          <svg
            className="nav-icon"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              d="M2.16925 17.4754C1.55642 16.7139 1.08333 15.871 0.75 14.9467C0.416667 14.0222 0.25 13.0401 0.25 12.0004C0.25 9.5646 1.09933 7.49726 2.798 5.79843C4.49683 4.09976 6.56417 3.25043 9 3.25043H9.80575L7.94625 1.39093L8.9905 0.34668L12.6443 4.00043L8.9905 7.65418L7.92125 6.58493L9.75575 4.75043H9C6.99617 4.75043 5.28683 5.45776 3.872 6.87243C2.45733 8.28726 1.75 9.9966 1.75 12.0004C1.75 12.8376 1.88108 13.6296 2.14325 14.3764C2.40542 15.1233 2.77367 15.7998 3.248 16.4062L2.16925 17.4754ZM8.13475 17.3467C8.10258 16.9055 7.96217 16.4958 7.7135 16.1177C7.46483 15.7395 7.19492 15.3591 6.90375 14.9764C6.61275 14.5938 6.35092 14.1976 6.11825 13.7879C5.88558 13.3783 5.76925 12.9298 5.76925 12.4427C5.76925 11.553 6.08525 10.7922 6.71725 10.1602C7.34942 9.52801 8.11033 9.21193 9 9.21193C9.88967 9.21193 10.6506 9.52801 11.2828 10.1602C11.9148 10.7922 12.2308 11.553 12.2308 12.4427C12.2308 12.9298 12.1144 13.3767 11.8818 13.7832C11.6491 14.1895 11.3872 14.5857 11.0962 14.9717C10.8051 15.3575 10.5352 15.7395 10.2865 16.1177C10.0378 16.4958 9.89742 16.9055 9.86525 17.3467H8.13475ZM8.15375 19.8467V18.5389H9.84625V19.8467H8.15375ZM15.8307 17.4754L14.752 16.4062C15.2263 15.7998 15.5946 15.1233 15.8568 14.3764C16.1189 13.6296 16.25 12.8376 16.25 12.0004C16.25 10.9133 16.0321 9.90043 15.5962 8.96193C15.1602 8.02343 14.5583 7.22476 13.7905 6.56593L14.8595 5.49668C15.7557 6.30435 16.4615 7.2636 16.977 8.37443C17.4923 9.48543 17.75 10.6941 17.75 12.0004C17.75 13.0401 17.5833 14.0222 17.25 14.9467C16.9167 15.871 16.4436 16.7139 15.8307 17.4754Z"
              fill={
                activeSection === "micro-learnings"
                  ? "#006B5F"
                  : "#666666"
              }
            />
          </svg>

          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
          //   <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
          // </svg>
        );
      case "lucide:clipboard-assignments":
        return (
          <img
            src="/assets/user-dashboard/sidebar/assignment.svg"
            alt="bar_chart icon"
            width="24"
            height="24"
          />
          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          //   <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
          //   <path d="M12 11h4" />
          //   <path d="M12 16h4" />
          //   <path d="M8 11h.01" />
          //   <path d="M8 16h.01" />
          // </svg>
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
          <svg
            className="nav-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0002 17.2492C11.3785 17.2492 10.8753 16.7453 10.8753 16.1243C10.8753 14.6709 11.8892 13.3427 13.8068 12.286C15.2355 11.4986 15.975 9.93789 15.6892 8.31048C15.4253 6.80832 14.1916 5.57464 12.6894 5.31065C11.6057 5.12016 10.5408 5.37965 9.68883 6.04111C8.85263 6.69132 8.32691 7.66402 8.24741 8.71021C8.20016 9.32893 7.65869 9.7939 7.04073 9.74665C6.42126 9.6994 5.95704 9.15943 6.00429 8.53997C6.13178 6.86231 6.97173 5.3039 8.30891 4.26521C9.66783 3.20852 11.362 2.79379 13.0779 3.09452C15.4958 3.519 17.4809 5.50414 17.9054 7.922C18.3531 10.4711 17.1419 13.0172 14.8928 14.2569C13.7859 14.8666 13.1251 15.5648 13.1251 16.1243C13.1251 16.7453 12.6219 17.2492 12.0002 17.2492ZM10.8753 19.8741C10.8753 20.4951 11.3792 20.999 12.0002 20.999C12.6212 20.999 13.1251 20.4951 13.1251 19.8741C13.1251 19.2531 12.6212 18.7491 12.0002 18.7491C11.3792 18.7491 10.8753 19.2531 10.8753 19.8741Z"
              fill={activeSection === "need-help" ? "#006B5F" : "#666666"}
            />
          </svg>

          // <svg {...iconProps} viewBox="0 0 24 24">
          //   <circle cx="12" cy="12" r="10" />
          //   <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          //   <path d="M12 17h.01" />
          // </svg>
        );
      case "lucide:lightbulb":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M9 21h6" />
            <path d="M12 17v4" />
            <path d="M12 3c5 0 9 4 9 9 0 2.3-.8 4.4-2.1 6.1-.4.5-.9 1-.9 1.6V21h-12v-1.3c0-.6-.5-1.1-.9-1.6C3.8 16.4 3 14.3 3 12c0-5 4-9 9-9z" />
          </svg>
        );
      case "lucide:message-chat":
        // Custom chat icon: chat bubble with three horizontal lines
        return (
          <img
            src="/assets/user-dashboard/sidebar/chat.svg"
            alt="bar_chart icon"
            width="24"
            height="24"
          />
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
        .sidebar-toggle-btn {
          position: initial;
          top: 20px;
          right: -18px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: #f7f9fa;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          z-index: 1001;
          transition: background 0.2s, right 0.3s;
        }
        .sidebar-expanded .sidebar-toggle-btn {
          right: -18px;
          margin-left: 14vw;
        }
        .sidebar-collapsed .sidebar-toggle-btn {
          right: -18px;
        }
        @media (min-width: 769px) {
          .sidebar-expanded .sidebar-toggle-btn {
            right: 0;
          }
        }
        .sidebar-toggle-btn:hover {
          background: #e0e7ef;
        }
      `}</style>
      <aside
        className={`sidebar ${isExpanded ? "sidebar-expanded" : "sidebar-collapsed"}`}
      >
        <div className="sidebar-content">
          {/* Toggle button at the top */}
          <button
            className="sidebar-toggle-btn"
            onClick={toggleSidebar}
            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
            type="button"
          >
            {/* Chevron icon: left if expanded, right if collapsed */}
            {isExpanded ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#006B5F" strokeWidth="2"><polyline points="13 16 7 10 13 4" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#006B5F" strokeWidth="2"><polyline points="7 4 13 10 7 16" /></svg>
            )}
          </button>
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
                          {/* {item.badge && (
                            <span
                              className="nav-badge"
                              style={{ backgroundColor: badgeColor }}
                            >
                              {item.badge}
                            </span>
                          )} */}
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
