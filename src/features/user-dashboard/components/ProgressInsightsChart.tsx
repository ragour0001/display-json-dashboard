"use client";

import { useState } from "react";

export default function ProgressInsightsChart() {
  const [activeTab, setActiveTab] = useState("this-month");

  const tabs = [
    { id: "this-month", label: "This Month", active: true },
    { id: "april", label: "April", active: false },
    { id: "march", label: "March", active: false },
    { id: "feb", label: "Feb", active: false },
    { id: "jan", label: "Jan", active: false },
    { id: "view-all", label: "View all", active: false },
  ];

  return (
    <>
      <style>{`
        .progress-insights-chart {
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

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .chart-header h2 {
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

        .chart-menu {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .chart-tabs-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .chart-tabs {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px solid #ebeff2;
        }

        .chart-tab {
          display: flex;
          height: 48px;
          padding: 0px 8px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border-bottom: 3px solid transparent;
        }

        .chart-tab.active {
          border-bottom: 3px solid #003a5d;
        }

        .chart-tab span {
          color: #999;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
        }

        .chart-tab.active span {
          color: #003a5d;
        }

        .chart-controls {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
        }

        .chart-type-toggle {
          display: flex;
          align-items: flex-start;
          border-radius: 6px;
        }

        .chart-type-btn {
          display: flex;
          padding: 6px;
          align-items: center;
          gap: 10px;
          border-radius: 8px 0px 0px 8px;
          border-top: 1px solid rgba(0, 58, 93, 0.2);
          border-bottom: 1px solid rgba(0, 58, 93, 0.2);
          border-left: 1px solid rgba(0, 58, 93, 0.2);
          background: #fff;
          cursor: pointer;
        }

        .chart-type-btn.active {
          background: #f4f4f4;
        }

        .chart-type-btn:last-child {
          border-right: 1px solid rgba(0, 58, 93, 0.2);
          border-radius: 0px 8px 8px 0px;
        }

        .chart-type-divider {
          width: 1px;
          align-self: stretch;
          background: #ccc;
        }

        .plan-dropdown {
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

        .plan-dropdown span {
          color: #999;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }

        .chart-container {
          display: flex;
          height: 229px;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }

        .chart-y-axis {
          display: flex;
          width: 1001px;
          height: 143px;
          flex-direction: column;
          align-items: flex-start;
          flex-shrink: 0;
          position: relative;
          margin-left: 50px;
        }

        .y-axis-label {
          color: #999;
          text-align: right;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 135%;
          position: absolute;
          left: -35px;
          width: 27px;
          height: 16px;
        }

        .y-axis-label:nth-child(1) {
          top: 0px;
        }
        .y-axis-label:nth-child(2) {
          top: 28.6px;
        }
        .y-axis-label:nth-child(3) {
          top: 57.2px;
        }
        .y-axis-label:nth-child(4) {
          top: 85.8px;
        }
        .y-axis-label:nth-child(5) {
          top: 114.4px;
        }
        .y-axis-label:nth-child(6) {
          top: 143px;
          left: -16px;
          width: 8px;
        }

        .chart-main {
          display: flex;
          width: 1000px;
          height: 143px;
          justify-content: center;
          align-items: flex-start;
          flex-shrink: 0;
          position: relative;
          margin-left: 50px;
        }

        .chart-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .grid-line {
          width: 100%;
          height: 1px;
          background: #e6e6e6;
          border: 1px dashed #e6e6e6;
        }

        .chart-bars {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: flex-start;
        }

        .bar-group {
          flex: 1 0 0;
          align-self: stretch;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bar {
          width: 16px;
          border-radius: 2px 2px 0px 0px;
          position: absolute;
          bottom: 20px;
        }

        .bar.expected {
          background: #999;
          left: 26px;
        }

        .bar.reality {
          background: #ccc;
          left: 42px;
        }

        .bar-label {
          width: 60px;
          height: 32px;
          flex-shrink: 0;
          overflow: hidden;
          color: #999;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 135%;
          position: absolute;
          bottom: -16px;
        }

        .chart-legend {
          display: flex;
          padding-left: 45px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 2px;
        }

        .legend-color.expected {
          background: #999;
        }

        .legend-color.reality {
          background: #ccc;
        }

        .legend-item span {
          color: #666;
          text-align: center;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }

        @media (max-width: 768px) {
          .progress-insights-chart {
            padding: 16px 12px;
          }

          .chart-header h2 {
            width: 100%;
            font-size: 18px;
          }

          .chart-tabs-container {
            flex-direction: column;
            gap: 16px;
          }

          .chart-tabs {
            width: 100%;
            overflow-x: auto;
          }

          .chart-y-axis {
            width: 100%;
            margin-left: 30px;
          }

          .chart-main {
            width: 100%;
            margin-left: 30px;
          }

          .y-axis-label {
            left: -25px;
          }
        }
      `}</style>
      <div className="progress-insights-chart">
        <div className="chart-header">
          <h2>My Progress & Insights</h2>
          <div className="chart-menu">
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
          </div>
        </div>

        <div className="chart-tabs-container">
          <div className="chart-tabs">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`chart-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
              </div>
            ))}
          </div>

          <div className="chart-controls">
            <div className="chart-type-toggle">
              <div className="chart-type-btn active">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 15.625H16.875V3.125C16.875 2.95924 16.8092 2.80027 16.6919 2.68306C16.5747 2.56585 16.4158 2.5 16.25 2.5H11.875C11.7092 2.5 11.5503 2.56585 11.4331 2.68306C11.3158 2.80027 11.25 2.95924 11.25 3.125V6.25H7.5C7.33424 6.25 7.17527 6.31585 7.05806 6.43306C6.94085 6.55027 6.875 6.70924 6.875 6.875V10H3.75C3.58424 10 3.42527 10.0658 3.30806 10.1831C3.19085 10.3003 3.125 10.4592 3.125 10.625V15.625H2.5C2.33424 15.625 2.17527 15.6908 2.05806 15.8081C1.94085 15.9253 1.875 16.0842 1.875 16.25C1.875 16.4158 1.94085 16.5747 2.05806 16.6919C2.17527 16.8092 2.33424 16.875 2.5 16.875H17.5C17.6658 16.875 17.8247 16.8092 17.9419 16.6919C18.0592 16.5747 18.125 16.4158 18.125 16.25C18.125 16.0842 18.0592 15.9253 17.9419 15.8081C17.8247 15.6908 17.6658 15.625 17.5 15.625ZM12.5 3.75H15.625V15.625H12.5V3.75ZM8.125 7.5H11.25V15.625H8.125V7.5ZM4.375 11.25H6.875V15.625H4.375V11.25Z"
                    fill="#003A5D"
                  />
                </svg>
              </div>
              <div className="chart-type-divider"></div>
              <div className="chart-type-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18.125 16.25C18.125 16.4158 18.0592 16.5747 17.9419 16.6919C17.8247 16.8092 17.6658 16.875 17.5 16.875H2.5C2.33424 16.875 2.17527 16.8092 2.05806 16.6919C1.94085 16.5747 1.875 16.4158 1.875 16.25V3.75C1.875 3.58424 1.94085 3.42527 2.05806 3.30806C2.17527 3.19085 2.33424 3.125 2.5 3.125C2.66576 3.125 2.82473 3.19085 2.94194 3.30806C3.05915 3.42527 3.125 3.58424 3.125 3.75V12.2414L7.05781 8.30781C7.11586 8.2497 7.18479 8.2036 7.26066 8.17215C7.33654 8.1407 7.41787 8.12451 7.5 8.12451C7.58213 8.12451 7.66346 8.1407 7.73934 8.17215C7.81521 8.2036 7.88414 8.2497 7.94219 8.30781L10 10.3664L14.1164 6.25H12.5C12.3342 6.25 12.1753 6.18415 12.0581 6.06694C11.9408 5.94973 11.875 5.79076 11.875 5.625C11.875 5.45924 11.9408 5.30027 12.0581 5.18306C12.1753 5.06585 12.3342 5 12.5 5H15.625C15.7908 5 15.9497 5.06585 16.0669 5.18306C16.1842 5.30027 16.25 5.45924 16.25 5.625V8.75C16.25 8.91576 16.1842 9.07473 16.0669 9.19194C15.9497 9.30915 15.7908 9.375 15.625 9.375C15.4592 9.375 15.3003 9.30915 15.1831 9.19194C15.0658 9.07473 15 8.91576 15 8.75V7.13359L10.4422 11.6922C10.3841 11.7503 10.3152 11.7964 10.2393 11.8279C10.1635 11.8593 10.0821 11.8755 10 11.8755C9.91786 11.8755 9.83654 11.8593 9.76066 11.8279C9.68479 11.7964 9.61586 11.7503 9.55781 11.6922L7.5 9.63359L3.125 14.0086V15.625H17.5C17.6658 15.625 17.8247 15.6908 17.9419 15.8081C18.0592 15.9253 18.125 16.0842 18.125 16.25Z"
                    fill="#999999"
                  />
                </svg>
              </div>
            </div>

            <div className="plan-dropdown">
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

        <div className="chart-container">
          <div className="chart-y-axis">
            <div className="y-axis-label">25hr</div>
            <div className="y-axis-label">20hr</div>
            <div className="y-axis-label">15hr</div>
            <div className="y-axis-label">10hr</div>
            <div className="y-axis-label">5hr</div>
            <div className="y-axis-label">0</div>
          </div>

          <div className="chart-main">
            <div className="chart-grid">
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
            </div>

            <div className="chart-bars">
              {[
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
              ].map((month, index) => (
                <div key={month} className="bar-group">
                  <div className="bar expected" style={{ height: "2px" }}></div>
                  <div className="bar reality" style={{ height: "2px" }}></div>
                  <div className="bar-label">{month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color expected"></div>
            <span>Expected</span>
          </div>
          <div className="legend-item">
            <div className="legend-color reality"></div>
            <span>Reality</span>
          </div>
        </div>
      </div>
    </>
  );
}
