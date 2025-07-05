"use client";

import { useState } from "react";

export default function ResourceFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All", active: true },
    { id: "article", label: "Article", active: false },
    { id: "video", label: "Video", active: false },
    { id: "podcasts", label: "Podcasts", active: false },
  ];

  const tags = [
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
  ];

  return (
    <>
      <style>{`
        .resource-filters {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .filter-tabs {
          display: flex;
          align-items: flex-start;
          gap: 0;
          border-radius: 8px;
          border: 1px solid #e6e6e6;
          background: #fff;
          overflow: hidden;
        }

        .filter-tab {
          display: flex;
          height: 48px;
          padding: 0px 16px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background: #fff;
          border: none;
          position: relative;
        }

        .filter-tab.active {
          background: #f0f8f6;
        }

        .filter-tab.tab-start {
          border-radius: 8px 0 0 8px;
        }

        .filter-tab.tab-end {
          border-radius: 0 8px 8px 0;
        }

        .filter-tab.tab-middle {
          border-radius: 0;
        }

        .filter-tab:not(:last-child) {
          border-right: 1px solid #e6e6e6;
        }

        .tab-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tab-state-layer {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .check-icon {
          width: 13px;
          height: 10px;
        }

        .tab-label {
          color: #666;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
        }

        .filter-tab.active .tab-label {
          color: #006b5f;
          font-weight: 600;
        }

        .filter-tags {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-tag {
          display: flex;
          padding: 8px 12px;
          align-items: center;
          border-radius: 20px;
          border: 1px solid #e6e6e6;
          background: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tag:hover {
          background: #f0f8f6;
          border-color: #006b5f;
        }

        .filter-tag span {
          color: #666;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }

        @media (max-width: 768px) {
          .filter-tabs {
            width: 100%;
            overflow-x: auto;
          }

          .filter-tab {
            min-width: 80px;
            padding: 0px 12px;
          }

          .filter-tags {
            justify-content: center;
          }
        }
      `}</style>
      <div className="resource-filters">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterTabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`filter-tab ${tab.id === "all" ? "active" : ""} ${
                index === 0
                  ? "tab-start"
                  : index === filterTabs.length - 1
                    ? "tab-end"
                    : "tab-middle"
              }`}
              onClick={() => setActiveFilter(tab.id)}
            >
              <div className="tab-container">
                <div className="tab-state-layer">
                  {tab.id === "all" && (
                    <svg
                      className="check-icon"
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                    >
                      <path
                        d="M4.66172 9.74922L0.386719 5.47422L1.45547 4.40547L4.66172 7.61172L11.543 0.730469L12.6117 1.79922L4.66172 9.74922Z"
                        fill="#06201C"
                      />
                    </svg>
                  )}
                  <span className="tab-label">{tab.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="filter-tags">
          {tags.map((tag, index) => (
            <div key={index} className="filter-tag">
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
