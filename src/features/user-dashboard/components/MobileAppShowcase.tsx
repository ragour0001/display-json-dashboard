"use client";

export default function MobileAppShowcase() {
  return (
    <>
      <style>{`
        .mobile-app-showcase {
          height: 350px;
          align-self: stretch;
          position: relative;
          border-radius: 10px;
          background: #f6f6f6;
          overflow: hidden;
        }

        .showcase-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .gradient-shape {
          position: absolute;
          width: 408px;
          height: 350px;
          border-radius: 10px;
        }

        .gradient-1 {
          left: 0;
          background: linear-gradient(180deg, #e3e3e3 0%, rgba(237, 237, 237, 0) 100%);
        }

        .gradient-2 {
          left: 97px;
          background: linear-gradient(180deg, #d1d1d1 0%, rgba(237, 237, 237, 0) 100%);
        }

        .gradient-3 {
          left: 225px;
          background: linear-gradient(180deg, #cac7c7 0%, rgba(237, 237, 237, 0) 100%);
        }

        .gradient-4 {
          left: 379px;
          background: linear-gradient(180deg, #bfbfbf 0%, rgba(237, 237, 237, 0) 100%);
        }

        .showcase-content {
          display: flex;
          position: relative;
          z-index: 2;
          padding: 56px 28px;
          height: 100%;
          align-items: center;
          gap: 40px;
        }

        .showcase-text {
          display: flex;
          width: 415px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
        }

        .new-platform-label {
          color: #5742a9;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
        }

        .showcase-text h2 {
          width: 427px;
          color: #232323;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 28px;
          font-weight: 600;
          line-height: 130%;
          margin: 0;
        }

        .download-section {
          display: flex;
          height: 79px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }

        .download-label {
          color: #232323;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
        }

        .app-store-buttons {
          display: flex;
          width: 267px;
          height: 39px;
          justify-content: center;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
        }

        .app-store-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          background: #000;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        }

        .app-store-btn.apple {
          width: 118px;
          height: 39px;
        }

        .app-store-btn.google {
          width: 132px;
          height: 39px;
        }

        .store-icon {
          width: 24px;
          height: 24px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .apple-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E");
        }

        .google-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z'/%3E%3C/svg%3E");
        }

        .store-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .download-text {
          font-size: 10px;
          opacity: 0.8;
        }

        .store-name {
          font-size: 12px;
          font-weight: 600;
        }

        .showcase-phones {
          display: flex;
          gap: 20px;
          position: relative;
        }

        .phone-mockup {
          width: 226px;
          height: 483px;
          border-radius: 10px;
          background: linear-gradient(135deg, #333 0%, #000 100%);
          padding: 4px;
          position: relative;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: #fff;
          overflow: hidden;
          position: relative;
        }

        .phone-header {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }

        .phone-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .time {
          font-size: 12px;
          font-weight: 600;
          color: #000;
        }

        .status-icons {
          display: flex;
          gap: 4px;
        }

        .signal-icon,
        .wifi-icon,
        .battery-icon {
          width: 12px;
          height: 8px;
          background: #000;
          border-radius: 1px;
        }

        .app-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .app-logo {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #006b5f;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
        }

        .app-initial {
          font-size: 16px;
        }

        .app-title h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #000;
        }

        .app-title p {
          margin: 0;
          font-size: 10px;
          color: #666;
        }

        .phone-content {
          padding: 15px;
        }

        .phone-content-minimal {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .logo-section {
          text-align: center;
        }

        .refill-logo {
          font-size: 18px;
          font-weight: 700;
          color: #006b5f;
        }

        .schedule-section {
          height: 100%;
        }

        .today-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .today-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .blue-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #006b5f;
        }

        .today-indicator span {
          font-size: 12px;
          font-weight: 600;
          color: #000;
        }

        .expand-icon {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 2px;
        }

        .appointment-card {
          display: flex;
          gap: 12px;
          padding: 12px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
          background: #fff;
        }

        .date-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 40px;
        }

        .month {
          font-size: 8px;
          color: #666;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .date-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #006b5f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .date-circle span {
          color: #fff;
          font-size: 10px;
          font-weight: 600;
        }

        .appointment-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .time-and-action {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .time {
          font-size: 10px;
          font-weight: 600;
          color: #000;
        }

        .join-btn {
          background: #006b5f;
          color: #fff;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 8px;
          cursor: pointer;
        }

        .duration {
          font-size: 8px;
          color: #666;
        }

        .therapist-info {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .therapist-avatar {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ddd;
        }

        .therapist-details {
          display: flex;
          flex-direction: column;
        }

        .therapist-role {
          font-size: 7px;
          color: #666;
        }

        .therapist-name {
          font-size: 8px;
          font-weight: 600;
          color: #000;
        }

        .therapist-profile-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
          background: #f9f9f9;
        }

        .profile-info {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .profile-avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ddd;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
        }

        .profile-role {
          font-size: 8px;
          color: #666;
        }

        .profile-name {
          font-size: 9px;
          font-weight: 600;
          color: #000;
        }

        .sessions-progress {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sessions-text {
          font-size: 7px;
          color: #666;
        }

        .schedule-next {
          font-size: 8px;
          color: #006b5f;
          font-weight: 600;
        }

        .confirmation-banner {
          padding: 8px;
          background: #e8f5e8;
          border-radius: 6px;
          border-left: 3px solid #4caf50;
        }

        .confirmation-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .confirmation-title {
          font-size: 8px;
          font-weight: 600;
          color: #2e7d32;
        }

        .confirmation-subtitle {
          font-size: 7px;
          color: #666;
        }

        @media (max-width: 768px) {
          .mobile-app-showcase {
            height: 250px;
          }

          .showcase-content {
            flex-direction: column;
            padding: 24px 16px;
            gap: 20px;
          }

          .showcase-text {
            width: 100%;
            text-align: center;
          }

          .showcase-text h2 {
            width: 100%;
            font-size: 24px;
          }

          .showcase-phones {
            gap: 10px;
          }

          .phone-mockup {
            width: 120px;
            height: 200px;
          }

          .phone-2 {
            display: none;
          }
        }
      `}</style>
      <div className="mobile-app-showcase">
        <div className="showcase-background">
          {/* Background gradients */}
          <div className="gradient-shape gradient-1"></div>
          <div className="gradient-shape gradient-2"></div>
          <div className="gradient-shape gradient-3"></div>
          <div className="gradient-shape gradient-4"></div>
        </div>

        <div className="showcase-content">
          <div className="showcase-text">
            <span className="new-platform-label">New Platform</span>
            <h2>Get one of our Refill Health apps, which is only available on</h2>
            <div className="download-section">
              <span className="download-label">Download Apps:</span>
              <div className="app-store-buttons">
                <div className="app-store-btn apple">
                  <div className="store-icon apple-icon"></div>
                  <div className="store-text">
                    <span className="download-text">Download on the</span>
                    <span className="store-name">App Store</span>
                  </div>
                </div>
                <div className="app-store-btn google">
                  <div className="store-icon google-icon"></div>
                  <div className="store-text">
                    <span className="download-text">Get it on</span>
                    <span className="store-name">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-phones">
            {/* Phone mockups */}
            <div className="phone-mockup phone-1">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-status-bar">
                    <span className="time">9:41</span>
                    <div className="status-icons">
                      <div className="signal-icon"></div>
                      <div className="wifi-icon"></div>
                      <div className="battery-icon"></div>
                    </div>
                  </div>
                  <div className="app-header">
                    <div className="app-logo">
                      <span className="app-initial">R</span>
                    </div>
                    <div className="app-title">
                      <h4>My Care</h4>
                      <p>Find the right support to guide your journey.</p>
                    </div>
                  </div>
                </div>
                <div className="phone-content">
                  <div className="schedule-section">
                    <div className="today-header">
                      <div className="today-indicator">
                        <div className="blue-dot"></div>
                        <span>Today (2)</span>
                      </div>
                      <div className="expand-icon"></div>
                    </div>
                    <div className="appointment-card">
                      <div className="date-sidebar">
                        <span className="month">NOV</span>
                        <div className="date-circle">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="appointment-details">
                        <div className="time-and-action">
                          <span className="time">10:00 - 10:30 AM</span>
                          <button className="join-btn">Join Now</button>
                        </div>
                        <span className="duration">30 min session</span>
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
                    <div className="therapist-profile-card">
                      <div className="profile-info">
                        <div className="profile-avatar"></div>
                        <div className="profile-details">
                          <span className="profile-role">Therapist</span>
                          <span className="profile-name">Riya Agarwal</span>
                        </div>
                      </div>
                      <div className="sessions-progress">
                        <span className="sessions-text">
                          2 of 5 sessions booked.
                        </span>
                        <span className="schedule-next">Schedule Next</span>
                      </div>
                    </div>
                    <div className="confirmation-banner">
                      <div className="confirmation-text">
                        <span className="confirmation-title">
                          Your booking is confirmed.
                        </span>
                        <span className="confirmation-subtitle">
                          Your request has been accepted by the Therapist.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="phone-mockup phone-2">
              <div className="phone-screen">
                <div className="phone-content-minimal">
                  <div className="logo-section">
                    <div className="refill-logo">
                      <span>RefillHealth</span>
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
