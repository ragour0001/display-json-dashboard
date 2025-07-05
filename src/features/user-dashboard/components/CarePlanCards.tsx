"use client";

export default function CarePlanCards() {
  return (
    <>
      <style>{`
        .care-plan-section {
          display: flex;
          height: 356px;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        }

        .care-plan-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
          align-self: stretch;
        }

        .care-plan-header > div:first-child {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }

        .care-plan-header h2 {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
        }

        .care-plan-header p {
          color: #171d1b;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.15px;
          margin: 0;
          max-width: 600px;
        }

        .care-plan-cards-grid {
          display: flex;
          align-items: flex-start;
          align-content: flex-start;
          gap: 30px;
          flex-wrap: wrap;
        }

        .care-plan-card {
          width: 486px;
          height: 229px;
          border-radius: 16px;
          border: 1px solid #e5e7e9;
          position: relative;
          overflow: hidden;
        }

        .locked-card {
          background: #101340;
        }

        .referral-card {
          background: #ff7e1d;
        }

        .card-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .abstract-shapes {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .shape-circle {
          position: absolute;
          top: -19px;
          right: -10px;
          width: 88px;
          height: 80px;
          background: #7047a3;
          border-radius: 50%;
        }

        .shape-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(90deg, #3c197f 0%, #5630a7 100%);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4.75px);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 48px;
        }

        .lock-icon-container {
          position: absolute;
          top: 14px;
          right: 14px;
        }

        .lock-icon {
          width: 34px;
          height: 34px;
          fill: #fff;
        }

        .locked-content {
          display: flex;
          width: 346px;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          text-align: center;
        }

        .locked-content h3 {
          color: #f4fbf8;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          font-weight: 500;
          line-height: 28px;
          margin: 0;
        }

        .locked-content p {
          width: 328px;
          color: #f4fbf8;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.15px;
          margin: 0;
        }

        .complete-assessment-card-btn {
          display: flex;
          width: 232px;
          height: 40px;
          padding: 0px 12px;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border-radius: 12px;
          background: #fff;
          border: none;
          cursor: pointer;
          color: #00201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .card-title {
          position: absolute;
          bottom: 26px;
          left: 26px;
          right: 26px;
        }

        .card-title h4 {
          width: 389px;
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 38px;
          margin: 0;
        }

        .card-title.orange h4 {
          color: #fff;
        }

        .referral-header {
          display: flex;
          width: 431px;
          justify-content: space-between;
          align-items: center;
          padding: 26px 16px 0 16px;
          height: 76px;
        }

        .referral-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .referral-label {
          color: #fff;
          font-family: Lato, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 20px;
        }

        .referral-text h3 {
          width: 268px;
          color: #fff;
          font-family: Lato, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          margin: 0;
        }

        .referral-avatar {
          display: flex;
          padding: 12px;
          align-items: center;
          gap: 10px;
          border-radius: 12px;
          background: #fff;
        }

        .avatar-placeholder {
          width: 48px;
          height: 48px;
          background: #f0f0f0;
          border-radius: 8px;
        }

        .referral-code-section {
          display: flex;
          width: 431px;
          height: 75px;
          padding: 10px 12px 12px 16px;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          border-radius: 10px;
          background: #f1f6fb;
          position: absolute;
          bottom: 20px;
          left: 16px;
        }

        .code-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 4px;
        }

        .copy-label {
          color: #000;
          font-family: Lato, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 18px;
          opacity: 0.5;
        }

        .code-display {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .copy-icon {
          width: 20px;
          height: 20px;
        }

        .code-text {
          color: #000;
          font-family: Lato, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
        }

        .share-invite-btn {
          display: flex;
          padding: 10px 16px;
          align-items: flex-start;
          gap: 10px;
          border-radius: 10px;
          background: #404040;
          border: none;
          cursor: pointer;
          color: #fff;
          text-align: center;
          font-family: Lato, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
        }

        .share-invite-btn:hover {
          background: #333;
          transform: translateY(-1px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .care-plan-cards-grid {
            flex-direction: column;
            align-items: center;
          }

          .care-plan-card {
            width: 100%;
            max-width: 500px;
          }
        }

        @media (max-width: 768px) {
          .care-plan-header h2 {
            font-size: 20px;
          }

          .care-plan-header p {
            font-size: 14px;
          }

          .referral-header {
            flex-direction: column;
            gap: 16px;
          }

          .referral-text h3 {
            width: 100%;
            font-size: 18px;
          }

          .referral-code-section {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }

          .share-invite-btn {
            align-self: stretch;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .care-plan-card {
            height: auto;
            min-height: 200px;
          }

          .locked-content h3 {
            font-size: 18px;
          }

          .locked-content p {
            font-size: 14px;
            width: 100%;
          }

          .complete-assessment-card-btn {
            width: 100%;
            max-width: 200px;
          }

          .referral-header {
            flex-direction: column;
            gap: 12px;
          }

          .referral-text h3 {
            font-size: 16px;
          }
        }
      `}</style>
      <div className="care-plan-section">
        <div className="care-plan-header">
          <h2>Your Care Plan is Almost Ready</h2>
          <p>
            To get personalized self-care actions, complete your first assessment.
            Your plan will be generated based on your mental health goals and
            responses.
          </p>
        </div>

        <div className="care-plan-cards-grid">
          {/* Left Card - Locked Care Plan */}
          <div className="care-plan-card locked-card">
            <div className="card-background">
              <div className="abstract-shapes">
                <div className="shape-circle"></div>
                <div className="shape-wave"></div>
              </div>
            </div>
            <div className="card-overlay">
              <div className="lock-icon-container">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lock-icon"
                >
                  <path
                    d="M3.4974 30.416C2.71823 30.416 2.05122 30.1386 1.49635 29.5837C0.941493 29.0289 0.664062 28.3618 0.664062 27.5827V13.416C0.664062 12.6368 0.941493 11.9698 1.49635 11.415C2.05122 10.8601 2.71823 10.5827 3.4974 10.5827H4.91406V7.74935C4.91406 5.78963 5.60469 4.11914 6.98594 2.73789C8.36719 1.35664 10.0377 0.666016 11.9974 0.666016C13.9571 0.666016 15.6276 1.35664 17.0089 2.73789C18.3901 4.11914 19.0807 5.78963 19.0807 7.74935V10.5827H20.4974C21.2766 10.5827 21.9436 10.8601 22.4984 11.415C23.0533 11.9698 23.3307 12.6368 23.3307 13.416V27.5827C23.3307 28.3618 23.0533 29.0289 22.4984 29.5837C21.9436 30.1386 21.2766 30.416 20.4974 30.416H3.4974ZM11.9974 23.3327C12.7766 23.3327 13.4436 23.0553 13.9984 22.5004C14.5533 21.9455 14.8307 21.2785 14.8307 20.4993C14.8307 19.7202 14.5533 19.0532 13.9984 18.4983C13.4436 17.9434 12.7766 17.666 11.9974 17.666C11.2182 17.666 10.5512 17.9434 9.99636 18.4983C9.44149 19.0532 9.16406 19.7202 9.16406 20.4993C9.16406 21.2785 9.44149 21.9455 9.99636 22.5004C10.5512 23.0553 11.2182 23.3327 11.9974 23.3327ZM7.7474 10.5827H16.2474V7.74935C16.2474 6.56879 15.8342 5.56532 15.0078 4.73893C14.1814 3.91254 13.178 3.49935 11.9974 3.49935C10.8168 3.49935 9.81337 3.91254 8.98698 4.73893C8.16059 5.56532 7.7474 6.56879 7.7474 7.74935V10.5827Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="locked-content">
                <h3>Unlock your Personalized care plan</h3>
                <p>Take a quick assessment to unlock your Care Plan</p>
                <button className="complete-assessment-card-btn">
                  Complete Assessment
                </button>
              </div>
            </div>
            <div className="card-title">
              <h4>Create ambient awareness through different senses</h4>
            </div>
          </div>

          {/* Right Card - Referral */}
          <div className="care-plan-card referral-card">
            <div className="referral-header">
              <div className="referral-text">
                <span className="referral-label">Referral</span>
                <h3>Help a friend, We&apos;ll help take care of them!</h3>
              </div>
              <div className="referral-avatar">
                <div className="avatar-placeholder"></div>
              </div>
            </div>
            <div className="referral-code-section">
              <div className="code-container">
                <span className="copy-label">Copy code</span>
                <div className="code-display">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="copy-icon"
                  >
                    <path
                      d="M16.875 3.25H6.875C6.70924 3.25 6.55027 3.31585 6.43306 3.43306C6.31585 3.55027 6.25 3.70924 6.25 3.875V7H3.125C2.95924 7 2.80027 7.06585 2.68306 7.18306C2.56585 7.30027 2.5 7.45924 2.5 7.625V17.625C2.5 17.7908 2.56585 17.9497 2.68306 18.0669C2.80027 18.1842 2.95924 18.25 3.125 18.25H13.125C13.2908 18.25 13.4497 18.1842 13.5669 18.0669C13.6842 17.9497 13.75 17.7908 13.75 17.625V14.5H16.875C17.0408 14.5 17.1997 14.4342 17.3169 14.3169C17.4342 14.1997 17.5 14.0408 17.5 13.875V3.875C17.5 3.70924 17.4342 3.55027 17.3169 3.43306C17.1997 3.31585 17.0408 3.25 16.875 3.25ZM12.5 17H3.75V8.25H12.5V17ZM16.25 13.25H13.75V7.625C13.75 7.45924 13.6842 7.30027 13.5669 7.18306C13.4497 7.06585 13.2908 7 13.125 7H7.5V4.5H16.25V13.25Z"
                      fill="black"
                    />
                  </svg>
                  <span className="code-text">C232DF</span>
                </div>
              </div>
              <button className="share-invite-btn">Share Invite</button>
            </div>
            <div className="card-title orange">
              <h4>Create ambient awareness through different senses</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
