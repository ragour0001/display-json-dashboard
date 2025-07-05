"use client";

import { useState } from "react";

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <style>{`
        .resources-page {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          background: #fff;
        }

        .resources-main-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          gap: 32px;
          flex: 1;
        }

        .resources-container {
          display: flex;
          width: 100%;
          max-width: 1117px;
          padding: 0 32px;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          position: relative;
        }

        .resources-content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          align-self: stretch;
          position: relative;
        }

        .resources-header-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          align-self: stretch;
          position: relative;
        }

        .resources-welcome-container {
          display: flex;
          width: 100%;
          padding: 10px 10px 0;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          position: relative;
        }

        .resources-welcome-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 135%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          margin: 0;
        }

        .resources-description-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
          align-self: stretch;
          position: relative;
        }

        .resources-description-text {
          transform: rotate(0.11deg);
          color: #11263c;
          font-feature-settings: "liga" off, "clig" off;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          position: relative;
          display: flex;
          height: 19.251px;
          justify-content: center;
          align-items: center;
          gap: 9px;
          margin: 0;
        }

        .resources-search-section {
          display: flex;
          align-items: center;
          gap: 24px;
          align-self: stretch;
          position: relative;
        }

        .resources-search-field {
          display: flex;
          height: 44px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
          flex: 1 0 0;
          position: relative;
          max-width: 40%;
        }

        .resources-search-field-inner {
          display: flex;
          padding: 8px 16px 8px 12px;
          align-items: center;
          gap: 12px;
          flex: 1 0 0;
          align-self: stretch;
          border-radius: 8px;
          border: 1px solid #ccd8df;
          background: #fefefe;
          position: relative;
        }

        .resources-search-content {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .resources-search-icon {
          width: 24px;
          height: 24px;
          position: relative;
          color: #222;
        }

        .resources-search-input {
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          border: none;
          outline: none;
          background: transparent;
          flex: 1;
        }

        .resources-search-input::placeholder {
          color: #999;
        }

        .resources-search-button {
          display: flex;
          height: 44px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 4px;
          border-radius: 8px;
          background: #006b5f;
          border: none;
          cursor: pointer;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 135%;
          letter-spacing: 0.8px;
          text-transform: capitalize;
          position: relative;
        }

        .resources-search-button:hover {
          background: #005a4f;
        }

        .resources-search-button-content {
          display: flex;
          align-items: center;
          gap: 4px;
          position: relative;
        }

        .resources-search-button-icon {
          width: 16px;
          height: 16px;
          position: relative;
        }

        .resources-search-button-text {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 135%;
          letter-spacing: 0.8px;
          text-transform: capitalize;
          position: relative;
        }

        .resources-content-main {
          display: flex;
          height: 1558px;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          position: relative;
        }

        .resources-filters-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
        }

        .resources-filters-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 58px;
          position: relative;
        }

        .resources-segmented-button {
          display: flex;
          width: 413px;
          height: 48px;
          justify-content: center;
          align-items: center;
          gap: -1px;
          position: relative;
        }

        .resources-segment {
          display: flex;
          height: 48px;
          padding: 4px 0;
          justify-content: center;
          align-items: center;
          flex: 1 0 0;
          position: relative;
          cursor: pointer;
        }

        .resources-segment-start .resources-segment-container {
          border-radius: 100px 0 0 100px;
        }

        .resources-segment-end .resources-segment-container {
          border-radius: 0 100px 100px 0;
        }

        .resources-segment-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1 0 0;
          align-self: stretch;
          border: 1px solid #6f7976;
          position: relative;
          background: transparent;
        }

        .resources-segment.active .resources-segment-container {
          background: #cde8e1;
        }

        .resources-segment-state-layer {
          display: flex;
          padding: 10px 12px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex: 1 0 0;
          align-self: stretch;
          position: relative;
        }

        .resources-selected-icon {
          width: 18px;
          height: 18px;
          position: relative;
        }

        .resources-segment-label {
          color: #171d1b;
          text-align: center;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.1px;
          position: relative;
        }

        .resources-segment.active .resources-segment-label {
          color: #06201c;
        }

        .resources-tag-filters {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          flex-wrap: wrap;
        }

        .resources-tag-filter {
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          line-clamp: 1;
          overflow: hidden;
          color: #006b5f;
          text-overflow: ellipsis;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          position: relative;
          padding: 8px 14px;
          align-items: center;
          gap: 4px;
          border-radius: 6px;
          border: 1px solid #cde8e1;
          background: #fff;
          cursor: pointer;
        }

        .resources-tag-filter:hover {
          background: #f9fdfb;
        }

        .resources-content-cards {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          position: relative;
        }

        .resources-blog-card {
          display: flex;
          width: 1077px;
          height: 290px;
          padding: 24px;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          border-radius: 12px;
          border: 1px solid #e5e7e9;
          background: #fff;
          position: relative;
        }

        .resources-blog-card-content {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          flex: 1 0 0;
          align-self: stretch;
          position: relative;
        }

        .resources-article-image {
          width: 406px;
          height: 240px;
          border-radius: 8px;
          object-fit: cover;
          position: relative;
        }

        .resources-article-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          flex: 1 0 0;
          align-self: stretch;
          position: relative;
        }

        .resources-article-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
          position: relative;
        }

        .resources-content-type {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%;
          position: relative;
        }

        .resources-article-title-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
          position: relative;
        }

        .resources-title-with-arrow {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          position: relative;
        }

        .resources-article-title {
          flex: 1 0 0;
          color: #181d27;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px;
          position: relative;
          margin: 0;
        }

        .resources-arrow-icon-wrapper {
          display: flex;
          padding-top: 4px;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }

        .resources-arrow-icon {
          width: 24px;
          height: 24px;
          position: relative;
        }

        .resources-article-description {
          align-self: stretch;
          color: #535862;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          position: relative;
          margin: 0;
        }

        .resources-article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          position: relative;
        }

        .resources-author-group {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .resources-author-avatar {
          display: flex;
          width: 40px;
          height: 40px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 200px;
          position: relative;
          object-fit: cover;
        }

        .resources-author-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }

        .resources-author-name {
          color: #181d27;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          position: relative;
        }

        .resources-publish-date {
          color: #535862;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          position: relative;
        }

        .resources-bookmark-wrapper {
          width: 40px;
          height: 40px;
          position: relative;
          cursor: pointer;
        }

        .resources-bookmark-icon {
          width: 26px;
          height: 29px;
          position: relative;
        }

        .resources-video-image {
          width: 100%;
          align-self: stretch;
          border-radius: 8px;
          object-fit: cover;
          position: relative;
        }
      `}</style>
      <div className="resources-page">
      <div className="resources-main-content">
        {/* Header Section */}
        {/* <div className="resources-header-section"> */}
          <div className="resources-container">
            <div className="resources-content-wrapper">
              <div className="resources-header-content">
                <div className="resources-welcome-container">
                  <h1 className="resources-welcome-title">
                    Hi, Imdad. Here's what you can learn today
                  </h1>
                </div>
                <div className="resources-description-container">
                  <p className="resources-description-text">
                    Stay informed with the latest articles, blogs, and tools on
                    wellness, therapy, productivity, and more.
                  </p>
                </div>
              </div>

              {/* Search Section */}
              <div className="resources-search-section">
                <div className="resources-search-field">
                  <div className="resources-search-field-inner">
                    <div className="resources-search-content">
                      <svg
                        className="resources-search-icon"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0998 5.04996C7.62052 5.04996 4.79996 7.87052 4.79996 11.3498C4.79996 14.8292 7.62052 17.6497 11.0998 17.6497C14.5792 17.6497 17.3997 14.8292 17.3997 11.3498C17.3997 7.87052 14.5792 5.04996 11.0998 5.04996ZM3 11.3498C3 6.87642 6.62642 3.25 11.0998 3.25C15.5733 3.25 19.1997 6.87642 19.1997 11.3498C19.1997 15.8233 15.5733 19.4497 11.0998 19.4497C6.62642 19.4497 3 15.8233 3 11.3498Z"
                          fill="#CCCCCC"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5488 15.7988C15.9002 15.4473 16.4701 15.4473 16.8215 15.7988L20.7364 19.7137C21.0879 20.0651 21.0879 20.635 20.7364 20.9864C20.385 21.3379 19.8151 21.3379 19.4637 20.9864L15.5488 17.0715C15.1973 16.7201 15.1973 16.1502 15.5488 15.7988Z"
                          fill="#CCCCCC"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search articles, topics, or symptoms..."
                        className="resources-search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button className="resources-search-button">
                  <div className="resources-search-button-content">
                    <svg
                      className="resources-search-button-icon"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M5.93198 10.2624C4.50892 10.2624 3.30378 9.76885 2.31656 8.78177C1.32948 7.79455 0.835938 6.58941 0.835938 5.16635C0.835938 3.7433 1.32948 2.53816 2.31656 1.55094C3.30378 0.563854 4.50892 0.0703125 5.93198 0.0703125C7.35503 0.0703125 8.56017 0.563854 9.5474 1.55094C10.5345 2.53816 11.028 3.7433 11.028 5.16635C11.028 5.76149 10.9282 6.3299 10.7284 6.87156C10.5286 7.41323 10.262 7.88434 9.92865 8.2849L14.7236 13.0799C14.8391 13.1952 14.8981 13.3402 14.9007 13.5149C14.9034 13.6896 14.8443 13.8373 14.7236 13.958C14.603 14.0787 14.4566 14.1391 14.2845 14.1391C14.1125 14.1391 13.9662 14.0787 13.8455 13.958L9.05052 9.16302C8.63385 9.50705 8.15469 9.77628 7.61302 9.97073C7.07135 10.1652 6.51101 10.2624 5.93198 10.2624ZM5.93198 9.0126C7.00573 9.0126 7.91517 8.63997 8.66031 7.89469C9.40559 7.14955 9.77823 6.2401 9.77823 5.16635C9.77823 4.0926 9.40559 3.18316 8.66031 2.43802C7.91517 1.69274 7.00573 1.3201 5.93198 1.3201C4.85823 1.3201 3.94878 1.69274 3.20365 2.43802C2.45837 3.18316 2.08573 4.0926 2.08573 5.16635C2.08573 6.2401 2.45837 7.14955 3.20365 7.89469C3.94878 8.63997 4.85823 9.0126 5.93198 9.0126Z"
                        fill="white"
                      />
                    </svg>
                    <span className="resources-search-button-text">Search</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="resources-content-main">
              <div className="resources-filters-content">
                {/* Filter Buttons */}
                <div className="resources-filters-section">
                  <div className="resources-segmented-button">
                    <div
                      className={`resources-segment resources-segment-start ${
                        activeFilter === "All" ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange("All")}
                    >
                      <div className="resources-segment-container">
                        <div className="resources-segment-state-layer">
                          {activeFilter === "All" && (
                            <svg
                              className="resources-selected-icon"
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
                          <span className="resources-segment-label">All</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`resources-segment resources-segment-middle ${
                        activeFilter === "Article" ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange("Article")}
                    >
                      <div className="resources-segment-container">
                        <div className="resources-segment-state-layer">
                          <span className="resources-segment-label">
                            Article
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`resources-segment resources-segment-middle ${
                        activeFilter === "Video" ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange("Video")}
                    >
                      <div className="resources-segment-container">
                        <div className="resources-segment-state-layer">
                          <span className="resources-segment-label">Video</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`resources-segment resources-segment-end ${
                        activeFilter === "Podcasts" ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange("Podcasts")}
                    >
                      <div className="resources-segment-container">
                        <div className="resources-segment-state-layer">
                          <span className="resources-segment-label">
                            Podcasts
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tag Filters */}
                <div className="resources-tag-filters">
                  {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="resources-tag-filter">
                      Lorem
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Cards */}
              <div className="resources-content-cards">
                {/* Article Card 1 */}
                <div className="resources-blog-card">
                  <div className="resources-blog-card-content">
                    <img                
                      src="/assets/images/article_image.png"
                      alt="Article"
                      className="resources-article-image"
                    />
                    <div className="resources-article-content">
                      <div className="resources-article-header">
                        <div className="resources-content-type">Article</div>
                        <div className="resources-article-title-section">
                          <div className="resources-title-with-arrow">
                            <h3 className="resources-article-title">
                              How to Recognize Burnout Before It Hits You
                            </h3>
                            <div className="resources-arrow-icon-wrapper">
                              <svg
                                className="resources-arrow-icon"
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                              >
                                <path
                                  d="M7 17.25L17 7.25M17 7.25H7M17 7.25V17.25"
                                  stroke="#181D27"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="resources-article-description">
                            How do you create compelling presentations that wow
                            your colleagues and impress your managers?
                          </p>
                        </div>
                      </div>
                      <div className="resources-article-footer">
                        <div className="resources-author-group">
                          <img
                            src="/assets/images/Avatar.png"
                            alt="Author"
                            className="resources-author-avatar"
                          />
                          <div className="resources-author-info">
                            <div className="resources-author-name">
                              Olivia Rhye
                            </div>
                            <div className="resources-publish-date">
                              20 Jan 2025
                            </div>
                          </div>
                        </div>
                        <div className="resources-bookmark-wrapper">
                          <svg
                            className="resources-bookmark-icon"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M0.167969 28.9999V3.58323C0.167969 2.8724 0.423385 2.26017 0.934219 1.74656C1.44505 1.23323 2.05866 0.976562 2.77505 0.976562H13.2771V3.07031H2.77505C2.64672 3.07031 2.52908 3.12378 2.42214 3.23073C2.31547 3.33767 2.26214 3.45517 2.26214 3.58323V25.7928L11.0013 22.0682L19.7405 25.7928V13.0703H21.8346V28.9999L11.0013 24.3524L0.167969 28.9999ZM19.7405 10.1432V6.60656H16.2042V4.51281H19.7405V0.976562H21.8346V4.51281H25.3709V6.60656H21.8346V10.1432H19.7405Z"
                              fill="#6D6D6D"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Podcast Card */}
                <div className="resources-podcast-card">
                  <div className="resources-podcast-card-content">
                    <img
                      src="/assets/images/podcast_image.png"
                      alt="Podcast"
                      className="resources-podcast-image"
                    />
                    <div className="resources-podcast-content">
                      <div className="resources-podcast-header">
                        <div className="resources-podcast-top-section">
                          <div className="resources-podcast-top-row">
                            <div className="resources-content-type">
                              Podcast
                            </div>
                            <div className="resources-more-menu">
                              <svg
                                width="4"
                                height="25"
                                viewBox="0 0 4 25"
                                fill="none"
                              >
                                <path
                                  d="M1.99526 24.3656C1.48665 24.3656 1.05234 24.1845 0.692343 23.8223C0.332343 23.46 0.152344 23.0246 0.152344 22.516C0.152344 22.0074 0.333455 21.5713 0.695677 21.2077C1.0579 20.8444 1.49332 20.6627 2.00193 20.6627C2.51054 20.6627 2.94484 20.8449 3.30484 21.2094C3.66484 21.5735 3.84484 22.0116 3.84484 22.5235C3.84484 23.0321 3.66373 23.4663 3.30151 23.826C2.93929 24.1857 2.50387 24.3656 1.99526 24.3656ZM1.99526 14.0964C1.48665 14.0964 1.05234 13.9153 0.692343 13.5531C0.332343 13.1909 0.152344 12.7555 0.152344 12.2469C0.152344 11.7382 0.333455 11.3039 0.695677 10.9439C1.0579 10.5839 1.49332 10.4039 2.00193 10.4039C2.51054 10.4039 2.94484 10.585 3.30484 10.9473C3.66484 11.3095 3.84484 11.7449 3.84484 12.2535C3.84484 12.7621 3.66373 13.1964 3.30151 13.5564C2.93929 13.9164 2.50387 14.0964 1.99526 14.0964ZM1.99526 3.83768C1.48665 3.83768 1.05234 3.65546 0.692343 3.29102C0.332343 2.92685 0.152344 2.48879 0.152344 1.97685C0.152344 1.46824 0.333455 1.03407 0.695677 0.674349C1.0579 0.314627 1.49332 0.134766 2.00193 0.134766C2.51054 0.134766 2.94484 0.315878 3.30484 0.678101C3.66484 1.04032 3.84484 1.47574 3.84484 1.98435C3.84484 2.49296 3.66373 2.92907 3.30151 3.29268C2.93929 3.65602 2.50387 3.83768 1.99526 3.83768Z"
                                  fill="#1C1B1F"
                                />
                              </svg>
                            </div>
                          </div>
                          <h3 className="resources-podcast-title">
                            Imposter Syndrom
                          </h3>
                          <div className="resources-podcast-tags">
                            <div className="resources-podcast-tag">
                              Psychology
                            </div>
                            <div className="resources-podcast-tag">Life</div>
                            <div className="resources-podcast-tag">
                              Education
                            </div>
                          </div>
                        </div>
                        <div className="resources-podcast-player">
                          <div className="resources-play-button-container">
                            <div className="resources-play-circle">
                              <svg
                                className="resources-play-icon"
                                width="32"
                                height="33"
                                viewBox="0 0 32 33"
                                fill="none"
                              >
                                <path
                                  d="M12.3134 22.7773L22.5292 16.2493L12.3134 9.72143V22.7773ZM16.0042 32.0827C13.8256 32.0827 11.7746 31.6671 9.8513 30.836C7.92797 30.0049 6.24894 28.8724 4.81422 27.4385C3.37977 26.0043 2.24672 24.326 1.41505 22.4035C0.583663 20.481 0.167969 18.4306 0.167969 16.2523C0.167969 14.0623 0.583524 12.0038 1.41464 10.0768C2.24575 8.1499 3.37825 6.47379 4.81214 5.04852C6.2463 3.62324 7.92464 2.49477 9.84714 1.6631C11.7696 0.83171 13.8201 0.416016 15.9984 0.416016C18.1884 0.416016 20.2469 0.83157 22.1738 1.66268C24.1007 2.49379 25.7769 3.62171 27.2021 5.04643C28.6274 6.47115 29.7559 8.14657 30.5876 10.0727C31.4189 11.9988 31.8346 14.0567 31.8346 16.2464C31.8346 18.425 31.4191 20.476 30.588 22.3993C29.7569 24.3227 28.6289 26.0017 27.2042 27.4364C25.7795 28.8709 24.1041 30.0039 22.178 30.8356C20.2519 31.667 18.1939 32.0827 16.0042 32.0827Z"
                                  fill="#006B5F"
                                />
                              </svg>
                            </div>
                            <span className="resources-play-duration">
                              2h 32 minutes
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Card 2 */}
                <div className="resources-blog-card">
                  <div className="resources-blog-card-content">
                    <img
                      src="/assets/images/article_2_image.png"
                      alt="Article"
                      className="resources-article-image"
                    />
                    <div className="resources-article-content">
                      <div className="resources-article-header">
                        <div className="resources-content-type">Article</div>
                        <div className="resources-article-title-section">
                          <div className="resources-title-with-arrow">
                            <h3 className="resources-article-title">
                              How to Recognize Burnout Before It Hits You
                            </h3>
                            <div className="resources-arrow-icon-wrapper">
                              <svg
                                className="resources-arrow-icon"
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                              >
                                <path
                                  d="M7 17.25L17 7.25M17 7.25H7M17 7.25V17.25"
                                  stroke="#181D27"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="resources-article-description">
                            How do you create compelling presentations that wow
                            your colleagues and impress your managers?
                          </p>
                        </div>
                      </div>
                      <div className="resources-article-footer">
                        <div className="resources-author-group">
                          <img
                            src="/assets/images/Avatar.png"
                            alt="Author"
                            className="resources-author-avatar"
                          />
                          <div className="resources-author-info">
                            <div className="resources-author-name">
                              Olivia Rhye
                            </div>
                            <div className="resources-publish-date">
                              20 Jan 2025
                            </div>
                          </div>
                        </div>
                        <div className="resources-bookmark-wrapper">
                          <svg
                            className="resources-bookmark-icon"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M0.167969 28.9999V3.58323C0.167969 2.8724 0.423385 2.26017 0.934219 1.74656C1.44505 1.23323 2.05866 0.976562 2.77505 0.976562H13.2771V3.07031H2.77505C2.64672 3.07031 2.52908 3.12378 2.42214 3.23073C2.31547 3.33767 2.26214 3.45517 2.26214 3.58323V25.7928L11.0013 22.0682L19.7405 25.7928V13.0703H21.8346V28.9999L11.0013 24.3524L0.167969 28.9999ZM19.7405 10.1432V6.60656H16.2042V4.51281H19.7405V0.976562H21.8346V4.51281H25.3709V6.60656H21.8346V10.1432H19.7405Z"
                              fill="#6D6D6D"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Card */}
                <div className="resources-video-card">
                  <div className="resources-video-card-content">
                  <img
                      src="/assets/images/video_image.png"
                      alt="Podcast"
                      className="resources-video-image"
                    />
                    {/* <div className="resources-video-thumbnail">
                      <div className="resources-video-play-overlay">
                        <svg
                          className="resources-video-play-button"
                          width="109"
                          height="110"
                          viewBox="0 0 109 110"
                          fill="none"
                        >
                          <path
                            d="M42.8134 76.7773L76.5292 54.2493L42.8134 31.7214V76.7773ZM54.5042 109.75C42.3256 109.75 31.2746 107.417 21.3513 102.75C11.428 98.0833 2.99894 91.6167 -4.31422 83.3503C-11.6023 75.084 -17.2533 65.4167 -21.2672 54.3484C-25.2835 43.2825 -27.3346 31.8139 -27.4179 19.9427C-27.5846 7.98681 -25.6671 -3.56597 -21.6647 -14.7148C-17.6647 -25.8659 -12.0137 -35.6191 -4.71214 -44.0167C2.587 -52.3977 10.9995 -59.0476 20.5021 -63.9664C30.0047 -68.883 40.1938 -71.3203 51.0693 -71.2773C62.1882 -71.2773 72.6132 -68.8613 82.3443 -64.0292C92.0755 -59.1971 100.662 -52.484 108.104 -43.8901C115.547 -35.2984 121.434 -25.3301 125.766 -14.0148C130.098 -2.69948 132.244 9.32135 132.204 22.0464C132.206 34.225 130.06 45.6936 125.766 56.4522C121.471 67.2131 115.584 76.7464 108.104 85.0521C100.625 93.3555 91.998 99.9844 82.2231 104.939C72.4481 109.894 61.9382 112.371 50.6935 112.371L54.5042 109.75Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div> */}
                    <div className="resources-video-content">
                      <div className="resources-video-header">
                        <div className="resources-video-top-row">
                          <div className="resources-content-type">Video</div>
                          <div className="resources-more-menu">
                            <svg
                              width="4"
                              height="25"
                              viewBox="0 0 4 25"
                              fill="none"
                            >
                              <path
                                d="M1.99526 24.3656C1.48665 24.3656 1.05234 24.1845 0.692343 23.8223C0.332343 23.46 0.152344 23.0246 0.152344 22.516C0.152344 22.0074 0.333455 21.5713 0.695677 21.2077C1.0579 20.8444 1.49332 20.6627 2.00193 20.6627C2.51054 20.6627 2.94484 20.8449 3.30484 21.2094C3.66484 21.5735 3.84484 22.0116 3.84484 22.5235C3.84484 23.0321 3.66373 23.4663 3.30151 23.826C2.93929 24.1857 2.50387 24.3656 1.99526 24.3656ZM1.99526 14.0964C1.48665 14.0964 1.05234 13.9153 0.692343 13.5531C0.332343 13.1909 0.152344 12.7555 0.152344 12.2469C0.152344 11.7382 0.333455 11.3039 0.695677 10.9439C1.0579 10.5839 1.49332 10.4039 2.00193 10.4039C2.51054 10.4039 2.94484 10.585 3.30484 10.9473C3.66484 11.3095 3.84484 11.7449 3.84484 12.2535C3.84484 12.7621 3.66373 13.1964 3.30151 13.5564C2.93929 13.9164 2.50387 14.0964 1.99526 14.0964ZM1.99526 3.83768C1.48665 3.83768 1.05234 3.65546 0.692343 3.29102C0.332343 2.92685 0.152344 2.48879 0.152344 1.97685C0.152344 1.46824 0.333455 1.03407 0.695677 0.674349C1.0579 0.314627 1.49332 0.134766 2.00193 0.134766C2.51054 0.134766 2.94484 0.315878 3.30484 0.678101C3.66484 1.04032 3.84484 1.47574 3.84484 1.98435C3.84484 2.49296 3.66373 2.92907 3.30151 3.29268C2.93929 3.65602 2.50387 3.83768 1.99526 3.83768Z"
                                fill="#1C1B1F"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="resources-video-title-section">
                          <h3 className="resources-video-title">
                            How to Recognize Burnout Before It Hits You
                          </h3>
                          <p className="resources-video-description">
                            How do you create compelling presentations that wow
                            your colleagues and impress your managers?
                          </p>
                        </div>
                      </div>
                      <div className="resources-video-footer">
                        <div className="resources-author-group">
                          <img
                            src="/assets/images/Avatar.png"
                            alt="Author"
                            className="resources-author-avatar"
                          />
                          <div className="resources-author-info">
                            <div className="resources-author-name">
                              Olivia Rhye
                            </div>
                            <div className="resources-publish-date">
                              20 Jan 2025
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}

        {/* CTA Banner */}
        <div className="resources-cta-banner">
          <div className="resources-cta-content">
            <div className="resources-cta-left">
              <div className="resources-cta-icon">
                <svg
                  className="resources-dashboard-icon"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M0.417969 0.667969H13.1209V13.3709H0.417969V0.667969ZM16.8817 0.667969H29.5846V13.3709H16.8817V0.667969ZM0.417969 17.1317H13.1209V29.8346H0.417969V17.1317ZM22.1913 17.1317H24.2855V22.4309H29.5846V24.5246H24.2855V29.8346H22.1913V24.5246H16.8817V22.4309H22.1913V17.1317ZM18.9755 2.76214V11.2771H27.4905V2.76214H18.9755ZM2.51214 2.76214V11.2771H11.0271V2.76214H2.51214ZM2.51214 19.2255V27.7405H11.0271V19.2255H2.51214Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
              <div className="resources-cta-text">
                <div className="resources-cta-main-text">
                  Want more curated content?
                </div>
                <div className="resources-cta-sub-text">
                  Take your assessments and goals setup to unlock personalized
                  learning.
                </div>
              </div>
            </div>
            <div className="resources-cta-button-wrapper">
              <button className="resources-cta-button">
                <div className="resources-cta-button-content">
                  Goals &amp; Assessment
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
