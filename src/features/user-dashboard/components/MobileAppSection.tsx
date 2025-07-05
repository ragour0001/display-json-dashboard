"use client";

export default function MobileAppSection() {
  return (
    <>
      <style>{`
        .mobile-app-section {
          padding: 60px 40px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          margin-top: 40px;
        }

        .mobile-app-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .app-info {
          flex: 1;
        }

        .app-text h2 {
          font-size: 32px;
          font-weight: 700;
          color: #1c1c1c;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .app-text p {
          font-size: 18px;
          color: #666;
          margin-bottom: 30px;
          line-height: 1.5;
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

        .app-preview {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
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

        .app-interface {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-bottom: 1px solid #eee;
          background: #f8f9fa;
        }

        .chat-header .therapist-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #006b5f 0%, #11b5a3 100%);
        }

        .chat-header .therapist-info {
          display: flex;
          flex-direction: column;
        }

        .chat-header .therapist-name {
          font-size: 14px;
          font-weight: 600;
          color: #1c1c1c;
          margin-bottom: 2px;
        }

        .chat-header .status {
          font-size: 12px;
          color: #28a745;
        }

        .chat-messages {
          flex: 1;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
        }

        .message.received {
          background: #f1f3f4;
          color: #1c1c1c;
          align-self: flex-start;
        }

        .message.sent {
          background: #006b5f;
          color: #fff;
          align-self: flex-end;
        }

        .video-call-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #e8f5e8;
          border-top: 1px solid #ddd;
        }

        .video-call-bar span {
          font-size: 14px;
          color: #2e7d32;
          font-weight: 500;
        }

        .join-call-btn {
          background: #28a745;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-app-section {
            padding: 40px 20px;
          }

          .mobile-app-content {
            flex-direction: column;
            gap: 40px;
          }

          .app-text {
            text-align: center;
          }

          .app-text h2 {
            font-size: 28px;
          }
        }
      `}</style>
      <div className="mobile-app-section">
        <div className="mobile-app-content">
          <div className="app-info">
            <div className="app-text">
              <h2>Take your therapy sessions anywhere</h2>
              <p>
                Download our mobile app to connect with your therapist on the go
              </p>
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
          <div className="app-preview">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="chat-header">
                    <div className="therapist-avatar"></div>
                    <div className="therapist-info">
                      <span className="therapist-name">Dr. Mridul Sharma</span>
                      <span className="status">Online now</span>
                    </div>
                  </div>
                  <div className="chat-messages">
                    <div className="message received">
                      <p>How are you feeling today?</p>
                    </div>
                    <div className="message sent">
                      <p>Much better after our last session</p>
                    </div>
                  </div>
                  <div className="video-call-bar">
                    <span>Video session starting in 5 min</span>
                    <button className="join-call-btn">Join</button>
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
