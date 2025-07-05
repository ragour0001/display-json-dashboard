"use client";

import { useState } from "react";

export default function Password() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <style>{`
        .password-page {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          background: #fff;
        }

        .password-content {
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

        .password-header {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          align-self: stretch;
          position: relative;
        }

        .password-title-section {
          display: flex;
          width: 280px;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          flex-shrink: 0;
        }

        .password-title {
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

        .password-subtitle {
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

        .password-form-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1 0 0;
          align-self: stretch;
          border-radius: 12px;
          border: 1px solid #ebeff2;
          position: relative;
        }

        .password-form-content {
          display: flex;
          padding: 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
          position: relative;
        }

        .password-input-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          align-self: stretch;
          position: relative;
        }

        .password-input-label {
          color: #414651;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          position: relative;
        }

        .password-input-wrapper {
          display: flex;
          height: 56px;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          border-radius: 4px;
          position: relative;
        }

        .password-input {
          display: flex;
          height: 56px;
          padding: 16px;
          align-items: center;
          align-self: stretch;
          border-radius: 4px;
          border: 1px solid #6f7976;
          background: transparent;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          color: #414651;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .password-input:focus {
          border-color: #006b5f;
          box-shadow: 0 0 0 1px #006b5f;
        }

        @media (max-width: 768px) {
          .password-content {
            padding: 16px;
            gap: 24px;
          }

          .password-header {
            flex-direction: column;
            gap: 16px;
          }

          .password-title-section {
            width: 100%;
          }

          .password-form-content {
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .password-content {
            max-width: 100%;
          }
        }
      `}</style>
      <div className="password-page">
        <div className="password-content">
          {/* Header Section */}
          <div className="password-header">
            <div className="password-title-section">
              <h3 className="password-title">Update Your Password</h3>
              <p className="password-subtitle">Update your portfolio and bio.</p>
            </div>
          </div>

          {/* Password Form */}
          <div className="password-form-container">
            <div className="password-form-content">
              {/* Current Password Field */}
              <div className="password-input-field">
                <label className="password-input-label">Current Password</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="password-input"
                  />
                </div>
              </div>

              {/* New Password Field */}
              <div className="password-input-field">
                <label className="password-input-label">New Password</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="password-input"
                  />
                </div>
              </div>

              {/* Confirm New Password Field */}
              <div className="password-input-field">
                <label className="password-input-label">
                  Confirm New Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="password-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
