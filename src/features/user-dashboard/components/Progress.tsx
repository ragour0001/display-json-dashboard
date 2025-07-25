"use client";

import { useState } from "react";

interface ProgressTabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ProgressTab({ id, label, isActive, onClick }: ProgressTabProps) {
  return (
    <div
      className={`progress-tab ${isActive ? "progress-tab-active" : ""}`}
      onClick={onClick}
    >
      <span>{label}</span>
    </div>
  );
}

function WellnessJourneyBanner() {
  return (
    <div className="wellness-banner">
      <div className="wellness-banner-content">
        <div className="wellness-banner-header">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="wellness-icon"
          >
            <path
              d="M12 0C12.4504 0 12.8944 0.0244001 13.332 0.0732001C13.4886 0.0905346 13.6403 0.138552 13.7784 0.214511C13.9165 0.290469 14.0383 0.392882 14.1368 0.515901C14.2353 0.63892 14.3086 0.780137 14.3525 0.931487C14.3964 1.08284 14.4101 1.24136 14.3928 1.398C14.3755 1.55464 14.3274 1.70633 14.2515 1.84442C14.1755 1.9825 14.0731 2.10427 13.9501 2.20278C13.8271 2.30128 13.6859 2.37459 13.5345 2.41852C13.3832 2.46245 13.2246 2.47613 13.068 2.4588C11.0905 2.23757 9.09303 2.63633 7.35201 3.59991C5.61099 4.56349 4.21243 6.04427 3.34976 7.83744C2.48709 9.6306 2.20296 11.6475 2.53667 13.6092C2.87038 15.5709 3.80543 17.3805 5.21249 18.7875C6.61955 20.1946 8.42907 21.1296 10.3908 21.4633C12.3525 21.797 14.3694 21.5129 16.1626 20.6502C17.9557 19.7876 19.4365 18.389 20.4001 16.648C21.3637 14.907 21.7624 12.9095 21.5412 10.932C21.5239 10.7754 21.5376 10.6168 21.5815 10.4655C21.6254 10.3141 21.6987 10.1729 21.7972 10.0499C21.9962 9.80145 22.2857 9.64221 22.602 9.6072C22.9184 9.57219 23.2357 9.66429 23.4841 9.86322C23.6071 9.96173 23.7095 10.0835 23.7855 10.2216C23.8615 10.3597 23.9095 10.5114 23.9268 10.668C23.9748 11.1056 23.9992 11.5496 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM11.9616 7.0524C12.0407 7.36047 11.9942 7.68733 11.8325 7.96117C11.6707 8.23501 11.4068 8.43342 11.0988 8.5128C10.2526 8.73445 9.51604 9.2564 9.02645 9.98125C8.53685 10.7061 8.3277 11.5843 8.43804 12.452C8.54838 13.3198 8.97066 14.1177 9.62609 14.6969C10.2815 15.2762 11.1253 15.5972 12 15.6C12.7984 15.6003 13.5742 15.3353 14.2055 14.8465C14.8367 14.3578 15.2876 13.673 15.4872 12.9C15.5723 12.598 15.7722 12.3414 16.0442 12.185C16.3162 12.0287 16.6386 11.985 16.9423 12.0635C17.2461 12.1419 17.507 12.3362 17.6693 12.6047C17.8316 12.8732 17.8822 13.1946 17.8104 13.5C17.4423 14.9111 16.573 16.1399 15.365 16.9569C14.157 17.7739 12.6928 18.1231 11.2461 17.9394C9.79939 17.7557 8.46904 17.0515 7.50361 15.9585C6.53817 14.8655 6.00368 13.4583 6 12C5.99979 10.6697 6.44172 9.37699 7.2563 8.32521C8.07088 7.27342 9.21191 6.52218 10.5 6.1896C10.6526 6.15026 10.8115 6.14138 10.9676 6.16345C11.1236 6.18552 11.2738 6.23812 11.4095 6.31824C11.5452 6.39836 11.6639 6.50444 11.7586 6.6304C11.8533 6.75637 11.9223 6.89977 11.9616 7.0524ZM19.8048 0.1524C20.0238 0.243215 20.2111 0.396884 20.3428 0.594011C20.4746 0.791138 20.545 1.02289 20.5452 1.26C20.5452 2.47216 21.5278 3.456 22.74 3.456C22.9773 3.45605 23.2093 3.52646 23.4066 3.65832C23.6038 3.79018 23.7576 3.97757 23.8484 4.19681C23.9392 4.41605 23.963 4.65729 23.9167 4.89004C23.8704 5.12278 23.7562 5.33658 23.5884 5.5044L19.344 9.744C19.119 9.96906 18.8138 10.0955 18.4956 10.0956C16.6416 10.0956 14.8637 10.8323 13.5531 12.1437L13.4064 12.2904C13.1812 12.5156 12.8758 12.6421 12.5574 12.6421C12.239 12.6421 11.9336 12.5156 11.7084 12.2904C11.4832 12.0652 11.3567 11.7598 11.3567 11.4414C11.3567 11.123 11.4832 10.8176 11.7084 10.5924L11.8537 10.4472C13.1659 9.13649 13.9032 7.35788 13.9032 5.5032C13.9033 5.18497 14.0297 4.87979 14.2548 4.6548L18.4968 0.4116C18.6646 0.243681 18.8785 0.12931 19.1113 0.0829577C19.3441 0.0366053 19.5855 0.0603541 19.8048 0.1512M18.1452 4.6548C18.1452 4.47069 17.9225 4.37855 17.7924 4.50882L16.5725 5.73032C16.4001 5.90301 16.3032 6.13708 16.3032 6.38114V6.49682C16.3032 7.15955 16.8405 7.6968 17.5032 7.6968H17.6187C17.8628 7.6968 18.097 7.59985 18.2697 7.42726L19.4909 6.20682C19.6209 6.07696 19.5289 5.8548 19.3452 5.8548C19.0269 5.8548 18.7217 5.72837 18.4967 5.50333C18.2716 5.27828 18.1452 4.97306 18.1452 4.6548Z"
              fill="#006B5F"
            />
          </svg>
          <h2 className="wellness-title">
            You're just getting started – Let's kick off your Wellness Journey!
          </h2>
        </div>

        <div className="progress-info-section">
          <div className="progress-indicator-container">
            <div className="progress-bar-main">
              <div className="progress-track">
                <div className="progress-dots-container">
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                </div>
              </div>
            </div>
            <div className="progress-percentage">0% Completed</div>
          </div>
        </div>

        <div className="banner-actions">
          <button className="faq-link-btn">Take me to FAQ</button>
          <button className="complete-assessment-btn">
            Complete your Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

function ProgressHeader() {
  return (
    <div className="progress-header-section">
      <h1 className="progress-main-title">Progress</h1>
      <p className="progress-subtitle">
        Designed to help you achieve your goals
      </p>
    </div>
  );
}

function ProgressInsightsCard() {
  const [activeTab, setActiveTab] = useState("this-month");
  const [chartType, setChartType] = useState("bar");

  const tabs = [
    { id: "this-month", label: "This Month" },
    { id: "april", label: "April" },
    { id: "march", label: "March" },
    { id: "feb", label: "Feb" },
    { id: "jan", label: "Jan" },
    { id: "view-all", label: "View all" },
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="progress-insights-card">
      <div className="insights-header">
        <div className="insights-title-section">
          <h2 className="insights-title">My Progress & Insights</h2>
          <button className="insights-menu-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 4.5C9.82843 4.5 10.5 3.82843 10.5 3C10.5 2.17157 9.82843 1.5 9 1.5C8.17157 1.5 7.5 2.17157 7.5 3C7.5 3.82843 8.17157 4.5 9 4.5Z"
                fill="#999999"
              />
              <path
                d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"
                fill="#999999"
              />
              <path
                d="M9 16.5C9.82843 16.5 10.5 15.8284 10.5 15C10.5 14.1716 9.82843 13.5 9 13.5C8.17157 13.5 7.5 14.1716 7.5 15C7.5 15.8284 8.17157 16.5 9 16.5Z"
                fill="#999999"
              />
            </svg>
          </button>
        </div>

        <div className="insights-controls">
          <div className="tabs-section">
            <div className="insights-tabs">
              {tabs.map((tab) => (
                <ProgressTab
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </div>

          <div className="chart-controls">
            <div className="chart-type-toggles">
              <button
                className={`chart-toggle ${chartType === "bar" ? "active" : ""}`}
                onClick={() => setChartType("bar")}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 15.625H16.875V3.125C16.875 2.95924 16.8092 2.80027 16.6919 2.68306C16.5747 2.56585 16.4158 2.5 16.25 2.5H11.875C11.7092 2.5 11.5503 2.56585 11.4331 2.68306C11.3158 2.80027 11.25 2.95924 11.25 3.125V6.25H7.5C7.33424 6.25 7.17527 6.31585 7.05806 6.43306C6.94085 6.55027 6.875 6.70924 6.875 6.875V10H3.75C3.58424 10 3.42527 10.0658 3.30806 10.1831C3.19085 10.3003 3.125 10.4592 3.125 10.625V15.625H2.5C2.33424 15.625 2.17527 15.6908 2.05806 15.8081C1.94085 15.9253 1.875 16.0842 1.875 16.25C1.875 16.4158 1.94085 16.5747 2.05806 16.6919C2.17527 16.8092 2.33424 16.875 2.5 16.875H17.5C17.6658 16.875 17.8247 16.8092 17.9419 16.6919C18.0592 16.5747 18.125 16.4158 18.125 16.25C18.125 16.0842 18.0592 15.9253 17.9419 15.8081C17.8247 15.6908 17.6658 15.625 17.5 15.625ZM12.5 3.75H15.625V15.625H12.5V3.75ZM8.125 7.5H11.25V15.625H8.125V7.5ZM4.375 11.25H6.875V15.625H4.375V11.25Z"
                    fill={chartType === "bar" ? "#003A5D" : "#999999"}
                  />
                </svg>
              </button>
              <div className="toggle-divider"></div>
              <button
                className={`chart-toggle ${chartType === "line" ? "active" : ""}`}
                onClick={() => setChartType("line")}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18.125 16.25C18.125 16.4158 18.0592 16.5747 17.9419 16.6919C17.8247 16.8092 17.6658 16.875 17.5 16.875H2.5C2.33424 16.875 2.17527 16.8092 2.05806 16.6919C1.94085 16.5747 1.875 16.4158 1.875 16.25V3.75C1.875 3.58424 1.94085 3.42527 2.05806 3.30806C2.17527 3.19085 2.33424 3.125 2.5 3.125C2.66576 3.125 2.82473 3.19085 2.94194 3.30806C3.05915 3.42527 3.125 3.58424 3.125 3.75V12.2414L7.05781 8.30781C7.11586 8.2497 7.18479 8.2036 7.26066 8.17215C7.33654 8.1407 7.41787 8.12451 7.5 8.12451C7.58213 8.12451 7.66346 8.1407 7.73934 8.17215C7.81521 8.2036 7.88414 8.2497 7.94219 8.30781L10 10.3664L14.1164 6.25H12.5C12.3342 6.25 12.1753 6.18415 12.0581 6.06694C11.9408 5.94973 11.875 5.79076 11.875 5.625C11.875 5.45924 11.9408 5.30027 12.0581 5.18306C12.1753 5.06585 12.3342 5 12.5 5H15.625C15.7908 5 15.9497 5.06585 16.0669 5.18306C16.1842 5.30027 16.25 5.45924 16.25 5.625V8.75C16.25 8.91576 16.1842 9.07473 16.0669 9.19194C15.9497 9.30915 15.7908 9.375 15.625 9.375C15.4592 9.375 15.3003 9.30915 15.1831 9.19194C15.0658 9.07473 15 8.91576 15 8.75V7.13359L10.4422 11.6922C10.3841 11.7503 10.3152 11.7964 10.2393 11.8279C10.1635 11.8593 10.0821 11.8755 10 11.8755C9.91786 11.8755 9.83654 11.8593 9.76066 11.8279C9.68479 11.7964 9.61586 11.7503 9.55781 11.6922L7.5 9.63359L3.125 14.0086V15.625H17.5C17.6658 15.625 17.8247 15.6908 17.9419 15.8081C18.0592 15.9253 18.125 16.0842 18.125 16.25Z"
                    fill={chartType === "line" ? "#003A5D" : "#999999"}
                  />
                </svg>
              </button>
            </div>

            <div className="plan-filter">
              <span>No plan</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.16737 6.16737C4.39052 5.94421 4.75233 5.94421 4.97549 6.16737L8 9.19188L11.0245 6.16737C11.2477 5.94421 11.6095 5.94421 11.8326 6.16737C12.0558 6.39052 12.0558 6.75233 11.8326 6.97549L8.40406 10.4041C8.1809 10.6272 7.8191 10.6272 7.59594 10.4041L4.16737 6.97549C3.94421 6.75233 3.94421 6.39052 4.16737 6.16737Z"
                  fill="#999999"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-area">
        <div className="chart-y-axis">
          <span className="y-label">25hr</span>
          <span className="y-label">20hr</span>
          <span className="y-label">15hr</span>
          <span className="y-label">10hr</span>
          <span className="y-label">5hr</span>
          <span className="y-label">0</span>
        </div>

        <div className="chart-content">
          <div className="chart-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="grid-line"></div>
            ))}
          </div>

          <div className="chart-bars-container">
            {months.map((month, index) => (
              <div key={month} className="month-bar-group">
                <div className="bars-wrapper">
                  <div
                    className="bar expected-bar"
                    style={{ height: "2px" }}
                  ></div>
                  <div
                    className="bar reality-bar"
                    style={{ height: "2px" }}
                  ></div>
                </div>
                <span className="month-label">{month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color expected-color"></div>
          <span>Expected</span>
        </div>
        <div className="legend-item">
          <div className="legend-color reality-color"></div>
          <span>Reality</span>
        </div>
      </div>
    </div>
  );
}

function AssessmentWarning() {
  return (
    <div className="assessment-warning-banner">
      <div className="warning-content">
        <div className="warning-icon-text">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="warning-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3429 4.80333C11.6961 4.60447 12.0947 4.5 12.5 4.5C12.9053 4.5 13.3039 4.60447 13.6571 4.80333C14.0103 5.0022 14.3063 5.28874 14.5165 5.63531L14.5188 5.63904L21.184 16.7662C21.39 17.1228 21.4988 17.5272 21.5 17.939C21.5011 18.3508 21.3944 18.7558 21.1905 19.1136C20.9866 19.4713 20.6925 19.7695 20.3376 19.9783C19.9827 20.1872 19.5792 20.2994 19.1674 20.304L19.1588 20.3041L5.83257 20.304C5.42077 20.2995 5.01734 20.1872 4.66241 19.9783C4.30748 19.7695 4.01342 19.4713 3.80949 19.1136C3.60555 18.7558 3.49886 18.3508 3.50001 17.939C3.50116 17.5272 3.61013 17.1229 3.81606 16.7662L3.82236 16.7553L10.4835 5.6353C10.6937 5.28873 10.9897 5.0022 11.3429 4.80333ZM12.5 6.07232C12.3649 6.07232 12.232 6.10715 12.1143 6.17344C11.9971 6.23942 11.8988 6.33437 11.8288 6.4492L5.17508 17.557C5.10812 17.6748 5.07271 17.8079 5.07233 17.9434C5.07194 18.0807 5.10751 18.2157 5.17549 18.3349C5.24346 18.4542 5.34149 18.5536 5.45979 18.6232C5.57707 18.6922 5.71023 18.7296 5.84623 18.7317H19.1538C19.2898 18.7296 19.4229 18.6922 19.5402 18.6232C19.6585 18.5536 19.7565 18.4542 19.8245 18.3349C19.8925 18.2157 19.9281 18.0807 19.9277 17.9434C19.9273 17.8079 19.8919 17.6748 19.8249 17.5571L13.1722 6.45076C13.1719 6.45024 13.1715 6.44972 13.1712 6.4492C13.1012 6.33437 13.0029 6.23942 12.8857 6.17344C12.768 6.10715 12.6351 6.07232 12.5 6.07232Z"
              fill="#FFBF00"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4971 9.29883C12.9313 9.29883 13.2833 9.6508 13.2833 10.085V13.2296C13.2833 13.6638 12.9313 14.0158 12.4971 14.0158C12.0629 14.0158 11.7109 13.6638 11.7109 13.2296V10.085C11.7109 9.6508 12.0629 9.29883 12.4971 9.29883Z"
              fill="#FFBF00"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7109 16.3741C11.7109 15.9399 12.0629 15.5879 12.4971 15.5879H12.505C12.9391 15.5879 13.2911 15.9399 13.2911 16.3741C13.2911 16.8082 12.9391 17.1602 12.505 17.1602H12.4971C12.0629 17.1602 11.7109 16.8082 11.7109 16.3741Z"
              fill="#FFBF00"
            />
          </svg>
          <p className="warning-text">
            You haven't taken the assessment yet – take it to set your goal and
            begin your journey.
          </p>
        </div>
        <button className="take-assessment-btn">Take Assessment</button>
      </div>
    </div>
  );
}

function NewPlatformSection() {
  return (
    <div className="new-platform-section">
      <div className="platform-background">
        <div className="phone-mockups">
          <div className="phone-overlays">
            <div className="phone-bg phone-bg-1"></div>
            <div className="phone-bg phone-bg-2"></div>
            <div className="phone-bg phone-bg-3"></div>
            <div className="phone-bg phone-bg-4"></div>
          </div>
          <div className="phone-content">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="app-header">
                  <div className="app-logo"></div>
                  <div className="app-title-section">
                    <h3 className="app-title">My Care</h3>
                    <p className="app-subtitle">
                      Find the right support to guide your journey.
                    </p>
                  </div>
                </div>

                <div className="app-content">
                  <div className="today-section">
                    <div className="today-header">
                      <div className="today-indicator">
                        <div className="today-dot"></div>
                        <span>Today (2)</span>
                      </div>
                      <div className="today-line"></div>
                      <button className="expand-btn">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.0318 5.66797L7.7151 9.98464L3.39844 5.66797"
                            stroke="#5D6A85"
                            strokeWidth="1.3875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="session-card">
                      <div className="session-date">
                        <span className="month">NOV</span>
                        <div className="date-circle">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="session-details">
                        <div className="session-time">
                          <span>10:00 - 10:30 AM</span>
                          <button className="join-btn">Join Now</button>
                        </div>
                        <p className="session-duration">30 min session</p>
                        <div className="therapist-info">
                          <div className="therapist-avatar"></div>
                          <div className="therapist-details">
                            <span className="therapist-role">Therapist</span>
                            <span className="therapist-name">
                              Mridhula Sharma
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="session-summary">
                      <div className="summary-avatar"></div>
                      <div className="summary-details">
                        <span className="summary-role">Therapist</span>
                        <span className="summary-name">Riya Agarwal</span>
                      </div>
                      <div className="booking-status">
                        <p>2 of 5 sessions booked.</p>
                        <button className="schedule-btn">Schedule Next</button>
                      </div>
                    </div>

                    <div className="confirmation-card">
                      <p className="confirmation-title">
                        Your booking is confirmed.
                      </p>
                      <p className="confirmation-text">
                        Your request has been accepted by the Therapist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="platform-info">
          <div className="platform-header">
            <span className="platform-label">New Platform</span>
            <h2 className="platform-title">
              Get one of our Refill Health apps, which is only available on
            </h2>
          </div>

          <div className="download-section">
            <h3 className="download-title">Download Apps:</h3>
            <div className="download-buttons">
              <button className="app-store-btn">
                <div className="store-btn-content">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                      fill="white"
                    />
                  </svg>
                  <div className="store-text">
                    <span className="store-line1">Download on the</span>
                    <span className="store-line2">App Store</span>
                  </div>
                </div>
              </button>
              <button className="google-play-btn">
                <div className="store-btn-content">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3.6 2.45L13.85 12.7 3.6 23C3.3 22.85 3.1 22.55 3.1 22.2V2.8C3.1 2.45 3.3 2.15 3.6 2.45M20.4 10.8L17.55 9.25L15.2 11.6L17.55 13.95L20.4 12.4C20.8 12.15 21 11.7 21 11.2C21 10.7 20.8 10.25 20.4 10.8M14.5 12.35L4.25 22.6C4.35 22.75 4.5 22.85 4.7 22.9L15.9 13.7L14.5 12.35M4.7 1.1C4.5 1.15 4.35 1.25 4.25 1.4L14.5 11.65L15.9 10.3L4.7 1.1Z"
                      fill="white"
                    />
                  </svg>
                  <div className="store-text">
                    <span className="store-line1">GET IT ON</span>
                    <span className="store-line2">Google Play</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Progress() {
  return (
    <>
      <style>{`
        .progress-page-main {
          display: flex;
          width: 100%;
          background: #fff;
          flex-direction: column;
        }

        .progress-container {
          display: flex;
          width: 100%;
          padding: 40px 0px 0px 40px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 53px;
        }

        .progress-header-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }

        .progress-main-title {
          color: #171d1b;
          font-family: Roboto, -apple-system, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 0px;
          margin: 0;
        }

        .progress-subtitle {
          align-self: stretch;
          color: #171d1b;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .wellness-banner {
          width: 100%;
          border-radius: 16px;
        }

        .wellness-banner-content {
          display: flex;
          padding: 26px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          border-radius: 8px;
          border: 1px solid #e94545;
          background: #fff6f6;
        }

        .wellness-banner-header {
          display: flex;
          align-items: center;
          gap: 12px;
          align-self: stretch;
        }

        .wellness-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .wellness-title {
          flex: 1;
          color: #006b5f;
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          margin: 0;
        }

        .progress-info-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          align-self: stretch;
        }

        .progress-indicator-container {
          width: 100%;
          max-width: 100%;
        }

        .progress-bar-main {
          width: 100%;
        }

        .progress-track {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .progress-dots-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 20px;
          position: relative;
        }

        .progress-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #a8a8a8;
          position: absolute;
        }

        .progress-dot:nth-child(1) {
          left: 39px;
        }

        .progress-dot:nth-child(2) {
          left: 179px;
        }

        .progress-dot:nth-child(3) {
          left: 345px;
        }

        .progress-dot:nth-child(4) {
          left: 588px;
        }

        .progress-percentage {
          color: #232323;
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 110%;
          letter-spacing: -0.5px;
        }

        .banner-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .faq-link-btn {
          color: #006b5f;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .faq-link-btn:hover {
          text-decoration: underline;
        }

        .complete-assessment-btn {
          display: flex;
          width: 232px;
          height: 40px;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          background: #fff;
          color: #00201c;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0.1px;
          border: none;
          cursor: pointer;
        }

        .complete-assessment-btn:hover {
          background: #f5f5f5;
          transform: translateY(-1px);
        }

        .progress-insights-card {
          display: flex;
          padding: 24px 16px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          align-self: stretch;
          border-radius: 16px;
          border: 1px solid #e6e6e6;
          background: #fff;
        }

        .insights-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .insights-title-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .insights-title {
          width: 520px;
          color: #003a5d;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: -0.44px;
          margin: 0;
        }

        .insights-menu-btn {
          width: 18px;
          height: 18px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .insights-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .tabs-section {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .insights-tabs {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px solid #ebeff2;
        }

        .progress-tab {
          display: flex;
          height: 48px;
          padding: 0px 8px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border-bottom: 3px solid transparent;
        }

        .progress-tab-active {
          border-bottom: 3px solid #003a5d;
        }

        .progress-tab span {
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
        }

        .progress-tab-active span {
          color: #003a5d;
        }

        .chart-controls {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
        }

        .chart-type-toggles {
          display: flex;
          align-items: flex-start;
          border-radius: 6px;
          border: 1px solid rgba(0, 58, 93, 0.2);
          background: #fff;
        }

        .chart-toggle {
          display: flex;
          padding: 6px;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .chart-toggle.active {
          background: #f4f4f4;
        }

        .chart-toggle:first-child {
          border-radius: 6px 0 0 6px;
        }

        .chart-toggle:last-child {
          border-radius: 0 6px 6px 0;
        }

        .toggle-divider {
          width: 1px;
          height: 24px;
          background: #ccc;
        }

        .plan-filter {
          display: flex;
          height: 36px;
          padding: 8px 12px;
          align-items: center;
          gap: 3px;
          border-radius: 8px;
          border: 1px solid rgba(0, 58, 93, 0.2);
          background: #fefefe;
          cursor: pointer;
        }

        .plan-filter span {
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }

        .chart-area {
          display: flex;
          height: 229px;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          position: relative;
        }

        .chart-y-axis {
          position: absolute;
          left: 0;
          top: 21px;
          height: 143px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 35px;
        }

        .y-label {
          color: #999;
          text-align: right;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 135%;
        }

        .assessment-warning-banner {
          display: flex;
          width: 978px;
          height: 67px;
          padding: 0px 12px;
          justify-content: space-between;
          align-items: center;
          border-radius: 6px;
          border: 1px solid #f5dc60;
          background: #fffbe4;
        }

        .warning-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .warning-icon {
          width: 25px;
          height: 25px;
          flex-shrink: 0;
        }

        .warning-text {
          color: #5f4b00;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          margin: 0;
        }

        .take-assessment-btn {
          display: flex;
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          background: #ffbf00;
          color: #5f4b00;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
          border: none;
          cursor: pointer;
        }

        .take-assessment-btn:hover {
          background: #e6ac00;
          transform: translateY(-1px);
        }

        .new-platform-section {
          height: 350px;
          align-self: stretch;
          position: relative;
          border-radius: 10px;
          background: #f6f6f6;
        }

        .platform-background {
          display: flex;
          width: 100%;
          height: 100%;
          position: relative;
        }

        .platform-info {
          display: flex;
          width: 415px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          padding: 56px 28px;
        }

        .platform-label {
        color: var(--5742-a-9, #5742A9);
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
         
        }

        .platform-title {
          color: #000;
          font-family: Lato, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 30px;
          margin: 0;
        }

        .download-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-top: 24px;
        }

        .download-title {
          color: #003a5d;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          margin: 0;
        }

        .download-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .app-store-btn,
        .google-play-btn {
          display: flex;
          padding: 8px 12px;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          background: #000;
          border: none;
          cursor: pointer;
        }

        .store-btn-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .store-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .store-line1 {
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: 12px;
        }

        .store-line2 {
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 16px;
        }
      `}</style>
      <main className="progress-page-main">
      <div className="progress-container">
        <WellnessJourneyBanner />
        <ProgressHeader />
        <ProgressInsightsCard />
        <AssessmentWarning />
        <NewPlatformSection />
      </div>
    </main>
    </>
  );
}
