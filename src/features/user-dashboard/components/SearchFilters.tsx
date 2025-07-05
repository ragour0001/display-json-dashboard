"use client";

export default function SearchFilters() {
  return (
    <>
      <style>{`
        .search-filters-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 13px;
          align-self: stretch;
        }

        .search-container {
          display: flex;
          align-items: center;
          gap: 24px;
          align-self: stretch;
        }

        .search-field {
          display: flex;
          height: 44px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          flex: 1 0 0;
        }

        .search-content {
          display: flex;
          padding: 8px 16px 8px 12px;
          align-items: center;
          gap: 12px;
          flex: 1 0 0;
          align-self: stretch;
          border-radius: 8px;
          border: 1px solid #ccd8df;
          background: #fefefe;
        }

        .search-icon {
          width: 24px;
          height: 24px;
        }

        .search-placeholder {
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          flex: 1;
        }

        .filter-button {
          display: flex;
          padding: 8px;
          align-items: center;
          gap: 13.206px;
          border-radius: 38px;
          background: #e9e9e9;
          cursor: pointer;
        }

        .filter-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
        }

        .filter-icon {
          width: 20px;
          height: 20px;
          fill: #1c1b1f;
        }

        .filter-content span {
          color: #00201c;
          font-family: Source Sans 3, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 128.447%;
        }

        .filter-chips {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .filter-chip {
          display: flex;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid #bec9c6;
          padding: 6px 8px 6px 12px;
          gap: 8px;
          cursor: pointer;
        }

        .filter-chip span {
          color: #3f4947;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .close-icon {
          width: 18px;
          height: 18px;
          fill: #3f4947;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .search-filters-section {
            gap: 16px;
          }

          .search-container {
            flex-direction: column;
            gap: 16px;
          }

          .filter-button {
            width: 100%;
            justify-content: center;
          }

          .filter-chips {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
      <div className="search-filters-section">
        <div className="search-container">
          <div className="search-field">
            <div className="search-content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0998 4.79801C7.62052 4.79801 4.79996 7.61856 4.79996 11.0979C4.79996 14.5772 7.62052 17.3978 11.0998 17.3978C14.5792 17.3978 17.3997 14.5772 17.3997 11.0979C17.3997 7.61856 14.5792 4.79801 11.0998 4.79801ZM3 11.0979C3 6.62447 6.62642 2.99805 11.0998 2.99805C15.5733 2.99805 19.1997 6.62447 19.1997 11.0979C19.1997 15.5713 15.5733 19.1977 11.0998 19.1977C6.62642 19.1977 3 15.5713 3 11.0979Z"
                  fill="#CCCCCC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5488 15.5468C15.9002 15.1953 16.4701 15.1953 16.8215 15.5468L20.7364 19.4617C21.0879 19.8132 21.0879 20.383 20.7364 20.7345C20.385 21.086 19.8151 21.086 19.4637 20.7345L15.5488 16.8196C15.1973 16.4681 15.1973 15.8983 15.5488 15.5468Z"
                  fill="#CCCCCC"
                />
              </svg>
              <span className="search-placeholder">
                Search By Names, Specialization or Language
              </span>
            </div>
            <div className="filter-button">
              <div className="filter-content">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="filter-icon"
                >
                  <path
                    d="M1.19193 14.6022L0.417969 13.8283L6.58943 7.66471L3.13443 6.82971L6.6888 4.61346L6.37964 0.435547L9.58297 3.12471L13.4388 1.56055L11.8746 5.42909L14.5846 8.61971L10.4067 8.31055L8.19839 11.8858L7.35547 8.43076L1.19193 14.6022ZM1.62151 4.50117L0.417969 3.29763L1.62151 2.0943L2.82505 3.29763L1.62151 4.50117ZM11.7017 14.5814L10.4982 13.3778L11.7017 12.1743L12.9051 13.3778L11.7017 14.5814Z"
                    fill="#1C1B1F"
                  />
                </svg>
                <span>Filter</span>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-chips">
          <div className="filter-chip">
            <span>Therapist</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="close-icon"
            >
              <path
                d="M1.8 11.248L0.75 10.198L4.95 5.99805L0.75 1.79805L1.8 0.748047L6 4.94805L10.2 0.748047L11.25 1.79805L7.05 5.99805L11.25 10.198L10.2 11.248L6 7.04805L1.8 11.248Z"
                fill="#3F4947"
              />
            </svg>
          </div>
          <div className="filter-chip">
            <span>Price : $200 - $600</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="close-icon"
            >
              <path
                d="M1.8 11.248L0.75 10.198L4.95 5.99805L0.75 1.79805L1.8 0.748047L6 4.94805L10.2 0.748047L11.25 1.79805L7.05 5.99805L11.25 10.198L10.2 11.248L6 7.04805L1.8 11.248Z"
                fill="#3F4947"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
