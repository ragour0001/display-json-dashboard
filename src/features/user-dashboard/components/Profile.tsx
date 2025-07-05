"use client";

import { useState } from "react";

export default function Profile() {
  const [isPublic, setIsPublic] = useState(true);
  const [nickName, setNickName] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("United States");
  const [timezone, setTimezone] = useState("Pacific Standard Time (PST)");
  const [bioCharacterCount, setBioCharacterCount] = useState(275);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const maxLength = 275;
    if (value.length <= maxLength) {
      setBio(value);
      setBioCharacterCount(maxLength - value.length);
    }
  };

  return (
    <>
      <style>{`
        .profile-page {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          background: #fff;
        }

        .profile-content {
          display: flex;
          width: 100%;
          max-width: 1006px;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
          position: relative;
          padding: 20px;
          box-sizing: border-box;
          margin: 0 auto;
        }

        .profile-header {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          align-self: stretch;
          position: relative;
        }

        .profile-title-section {
          display: flex;
          width: 280px;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          flex-shrink: 0;
        }

        .profile-title {
          align-self: stretch;
          color: #414651;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.15px;
          position: relative;
          margin: 0;
          margin-bottom: 8px;
        }

        .profile-subtitle {
          align-self: stretch;
          color: #535862;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          position: relative;
          margin: 0;
        }

        .profile-toggle-section {
          display: flex;
          align-items: center;
          gap: 20px;
          flex: 1 0 0;
          position: relative;
          align-self: flex-start;
        }

        .profile-toggle-label {
          color: #181d27;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px;
          position: relative;
        }

        .profile-toggle-switch {
          display: flex;
          width: 52px;
          height: 32px;
          padding: 4px;
          align-items: center;
          border-radius: 16px;
          background: ${isPublic ? '#006b5f' : '#ccc'};
          position: relative;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .profile-toggle-handle {
          display: flex;
          width: 24px;
          height: 24px;
          padding: 8px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 100px;
          transition: transform 0.3s ease;
          transform: ${isPublic ? 'translateX(20px)' : 'translateX(0px)'};
        }

        .profile-toggle-handle-shape {
          display: flex;
          padding: 11px;
          justify-content: center;
          align-items: center;
          border-radius: 24px;
          background: #fff;
          width: 24px;
          height: 24px;
        }

        .profile-form-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1 0 0;
          align-self: stretch;
          border-radius: 12px;
          border: 1px solid #ebeff2;
          position: relative;
        }

        .profile-form-content {
          display: flex;
          padding: 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
          position: relative;
        }

        .profile-input-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          align-self: stretch;
          position: relative;
        }

        .profile-input-label {
          color: #414651;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0.4px;
          position: relative;
        }

        .profile-input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          align-self: stretch;
          border-radius: 4px;
          border: 1px solid #d0d5d9;
          background: #fff;
          position: relative;
        }

        .profile-input {
          display: flex;
          padding: 16px;
          align-items: center;
          flex: 1 0 0;
          border: none;
          outline: none;
          color: #181d27;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          position: relative;
          background: transparent;
        }

        .profile-input:focus {
          outline: none;
        }

        .profile-input-wrapper:focus-within {
          border-color: #006b5f;
          box-shadow: 0 0 0 1px #006b5f;
        }

        .profile-select-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          align-self: stretch;
          position: relative;
        }

        .profile-select-wrapper {
          display: flex;
          height: 56px;
          padding: 0px 16px;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 4px;
          border: 1px solid #d0d5d9;
          background: #fff;
          position: relative;
          cursor: pointer;
        }

        .profile-select-wrapper:hover {
          border-color: #006b5f;
        }

        .profile-select-content {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1 0 0;
          position: relative;
        }

        .profile-flag-icon,
        .profile-clock-icon {
          width: 20px;
          height: 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-select-text,
        .profile-timezone-text {
          color: #181d27;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          position: relative;
        }

        .profile-timezone-offset {
          color: #535862;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          position: relative;
          margin-left: auto;
        }

        .profile-chevron-icon {
          width: 20px;
          height: 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .profile-content {
            padding: 16px;
            gap: 24px;
          }

          .profile-header {
            flex-direction: column;
            gap: 16px;
          }

          .profile-title-section {
            width: 100%;
          }

          .profile-toggle-section {
            flex-direction: column;
            gap: 12px;
          }

          .profile-toggle-switch {
            align-self: flex-start;
          }

          .profile-form-content {
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .profile-content {
            max-width: 100%;
          }
        }
      `}</style>
      <div className="profile-page">
        <div className="profile-content">
          <div className="profile-header">
            <div className="profile-title-section">
              <h2 className="profile-title">Profile</h2>
              <p className="profile-subtitle">
                This is how others will see you on the site.
              </p>
            </div>
            <div className="profile-toggle-section">
              <span className="profile-toggle-label">Public profile</span>
              <div
                className="profile-toggle-switch"
                onClick={() => setIsPublic(!isPublic)}
              >
                <div className="profile-toggle-handle">
                  <div className="profile-toggle-handle-shape"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-form-container">
            <div className="profile-form-content">
              <div className="profile-input-field">
                <label className="profile-input-label">USERNAME</label>
                <div className="profile-input-wrapper">
                  <input
                    type="text"
                    className="profile-input"
                    placeholder="shadcn"
                  />
                </div>
              </div>

              <div className="profile-input-field">
                <label className="profile-input-label">EMAIL</label>
                <div className="profile-input-wrapper">
                  <input
                    type="email"
                    className="profile-input"
                    value="m@example.com"
                    readOnly
                  />
                </div>
              </div>

              <div className="profile-input-field">
                <label className="profile-input-label">BIO</label>
                <div className="profile-input-wrapper">
                  <input
                    type="text"
                    className="profile-input"
                    placeholder="I own a computer."
                  />
                </div>
              </div>

              <div className="profile-input-field">
                <label className="profile-input-label">URLS</label>
                <div className="profile-input-wrapper">
                  <input
                    type="url"
                    className="profile-input"
                    placeholder="https://shadcn.com"
                  />
                </div>
              </div>

              <div className="profile-select-field">
                <label className="profile-input-label">COUNTRY</label>
                <div className="profile-select-wrapper">
                  <div className="profile-select-content">
                    <div className="profile-flag-icon">🇺🇸</div>
                    <span className="profile-select-text">
                      United States of America
                    </span>
                    <div className="profile-chevron-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-select-field">
                <label className="profile-input-label">TIMEZONE</label>
                <div className="profile-select-wrapper">
                  <div className="profile-select-content">
                    <div className="profile-clock-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="8"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10 6V10L13 13"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="profile-timezone-text">
                      Pacific Standard Time
                    </span>
                    <span className="profile-timezone-offset">GMT-8</span>
                    <div className="profile-chevron-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
