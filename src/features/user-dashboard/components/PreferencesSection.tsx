"use client";

export default function PreferencesSection() {
  return (
    <>
      <style>{`
        .preferences-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .preferences-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .preferences-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
        }

        .therapist-matching-card {
          display: flex;
          padding: 26px 34px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          border-radius: 10px;
          background: #e9efec;
        }

        .therapist-card-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
          width: 100%;
        }

        .therapist-info {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        }

        .therapist-icon {
          width: 48px;
          height: 48px;
          aspect-ratio: 1/1;
          position: relative;
        }

        .therapist-text {
          display: flex;
          width: 100%;
          max-width: 750px;
          align-items: flex-start;
          gap: 2px;
          flex-direction: column;
          flex: 1;
        }

        .therapist-title {
          color: #06201c;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0.15px;
          margin: 0;
          margin-bottom: 12px;
        }

        .therapist-description {
          transform: rotate(0.11deg);
          color: #06201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .button-container {
          display: flex;
          justify-content: flex-end;
          margin-top: auto;
          padding-top: 20px;
        }

        .start-now-btn {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          background: #006b5f;
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .start-now-btn:hover {
          background: #005a4f;
        }
      `}</style>
      <div className="preferences-section">
        <div className="preferences-header">
          <h2 className="preferences-title">Preferences</h2>
        </div>

        <div className="therapist-matching-card">
          <div className="therapist-card-content">
            <div className="therapist-info">
              <div className="therapist-icon">
                <svg
                  width="38"
                  height="40"
                  viewBox="0 0 39 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.45 25.218C10.4167 26.1846 11.6 26.668 13 26.668C14.4 26.668 15.5833 26.1846 16.55 25.218L24.55 17.218C25.5167 16.2513 26 15.068 26 13.668C26 12.268 25.5167 11.0846 24.55 10.118C23.5833 9.1513 22.4 8.66797 21 8.66797C19.6 8.66797 18.4167 9.1513 17.45 10.118C16.2167 9.68464 15 9.58464 13.8 9.81797C12.6 10.0513 11.5833 10.5846 10.75 11.418C9.91667 12.2513 9.38333 13.268 9.15 14.468C8.91667 15.668 9.01667 16.8846 9.45 18.118C8.48333 19.0846 8 20.268 8 21.668C8 23.068 8.48333 24.2513 9.45 25.218ZM6 40.668V32.068C4.1 30.3346 2.625 28.3096 1.575 25.993C0.525 23.6763 0 21.2346 0 18.668C0 13.668 1.75 9.41797 5.25 5.91797C8.75 2.41797 13 0.667969 18 0.667969C22.1667 0.667969 25.8583 1.89297 29.075 4.34297C32.2917 6.79297 34.3833 9.98464 35.35 13.918L38.1 24.818C38.2333 25.2846 38.15 25.7096 37.85 26.093C37.55 26.4763 37.15 26.668 36.65 26.668H32V33.668C32 34.493 31.7063 35.1991 31.119 35.7865C30.5313 36.3741 29.825 36.668 29 36.668H24V40.668H21V33.668H29V23.668H34.7L32.45 14.668C31.65 11.4346 29.9 8.79297 27.2 6.74297C24.5 4.69297 21.4333 3.66797 18 3.66797C13.8333 3.66797 10.2917 5.10964 7.375 7.99297C4.45833 10.8763 3 14.3936 3 18.545C3 20.6923 3.43867 22.7321 4.316 24.6645C5.19367 26.5971 6.43833 28.315 8.05 29.818L9 30.718V40.668H6Z"
                    fill="#006B5F"
                  />
                </svg>
              </div>
              <div className="therapist-text">
                <h3 className="therapist-title">
                  Complete Your Assessment for Better match with therapist/coach
                </h3>
                <p className="therapist-description">
                  We'll provide you a customized routine & therapist for you
                </p>
              </div>
            </div>
            <div className="button-container">
              <button className="start-now-btn">Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
