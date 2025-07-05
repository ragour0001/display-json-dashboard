"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import GoalsAssessment from "./components/GoalsAssessment";
import MyCarePlan from "./components/MyCarePlan";
import TherapistCoach from "./components/TherapistCoach";
import Progress from "./components/Progress";
import MicroLearnings from "./components/MicroLearnings";
import Resources from "./components/Resources";
import Settings from "./components/Settings";
import NeedHelp from "./components/NeedHelp";

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "goals-assessment":
        return <GoalsAssessment onSectionChange={handleSectionChange} />;
      case "my-care-plan":
        return <MyCarePlan />;
      case "therapist-coach":
        return <TherapistCoach />;
      case "progress":
        return <Progress />;
      case "micro-learnings":
        return <MicroLearnings />;
      case "resources":
        return <Resources />;
      case "settings":
        return <Settings />;
      case "need-help":
        return <NeedHelp />;
      default:
        return <MainContent onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <>
      <style>{`
        /* Dashboard Layout */
        .dashboard-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .dashboard-content {
          display: flex;
          flex: 1;
          margin-top: 100px; /* Account for fixed navbar height */
          height: calc(100vh - 100px);
          overflow: hidden;
        }

        /* Scrollable content wrapper for main content and right sidebar */
        .content-wrapper {
          display: flex;
          flex: 1;
          margin-left: 72px;
          transition: margin-left 0.3s ease;
          overflow-y: auto;
          overflow-x: hidden;
          height: 100%;
        }

        /* Dynamic main content adjustment for sidebar expansion */
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
          .dashboard-content {
            flex-direction: column;
            margin-top: 80px;
            height: calc(100vh - 80px);
          }

          .content-wrapper {
            flex-direction: column;
            margin-left: 0;
            margin-top: 60px;
            height: calc(100vh - 140px);
          }
        }
      `}</style>
      <div className="dashboard-layout">
        <Navbar />
        <div
          className={`dashboard-content ${isSidebarExpanded ? "sidebar-expanded-layout" : ""}`}
        >
          <Sidebar
            onToggle={handleSidebarToggle}
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
          <div className="content-wrapper">
            {renderContent()}
            {activeSection === "home" && <RightSidebar />}
          </div>
        </div>
      </div>
    </>
  );
}
