"use client";

export default function UpcomingSessionCard() {
  return (
    <>
      <style>{`
        .upcoming-session-card {
          display: flex;
          padding: 26px 34px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          border-radius: 10px;
          background: linear-gradient(94deg, #006b5f -2.3%, #11b5a3 98.42%);
        }

        .session-card-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        }

        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .therapist-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .therapist-avatar {
          display: flex;
          width: 78px;
          height: 78px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background: #ddd;
        }

        .avatar-placeholder {
          width: 78px;
          height: 78px;
          border-radius: 8px;
          background: #f0f0f0;
        }

        .therapist-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .therapist-details h3 {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 150%;
          letter-spacing: -0.32px;
          margin: 0;
        }

        .therapist-details p {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.16px;
          margin: 0;
        }

        .session-actions {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .reschedule-btn {
          display: flex;
          width: 150px;
          height: 44px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 4px;
          border-radius: 8px;
          border: 1px solid #fff;
          background: transparent;
          color: #fff;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: 0.8px;
          text-transform: capitalize;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .reschedule-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .join-now-btn {
          display: flex;
          height: 44px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 4px;
          border-radius: 8px;
          background: #fff;
          border: none;
          color: #006b5f;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: 0.8px;
          text-transform: capitalize;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .join-now-btn:hover {
          background: #f0f0f0;
        }

        .session-divider {
          width: 1015px;
          height: 1px;
          background: #e9eff2;
        }

        .session-info {
          display: flex;
          align-items: center;
          gap: 45px;
        }

        .session-time {
          display: flex;
          align-items: center;
          gap: 45px;
        }

        .time-icon-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }

        .time-icon {
          width: 24px;
          height: 24px;
          fill: #fff;
        }

        .time-icon-group span {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
        }

        .time-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .session-date {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
          margin: 0;
          display: inline;
        }

        .session-schedule {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .session-remarks {
          display: flex;
          padding: 0px 623px 14px 0px;
          align-items: center;
          align-self: stretch;
        }

        .remarks-icon-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin-right: 23px;
        }

        .remarks-icon {
          width: 24px;
          height: 24px;
          fill: #fff;
        }

        .remarks-icon-group span {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
        }

        .session-remarks p {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        @media (max-width: 1200px) {
          .session-divider {
            width: 100%;
          }

          .session-remarks {
            padding-right: 0;
          }
        }

        @media (max-width: 768px) {
          .session-header {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }

          .session-actions {
            align-self: stretch;
            justify-content: space-between;
          }

          .reschedule-btn,
          .join-now-btn {
            flex: 1;
            max-width: calc(50% - 6px);
          }

          .session-time {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
        }
      `}</style>
      <div className="upcoming-session-card">
        <div className="session-card-content">
          <div className="session-header">
            <div className="therapist-info">
              <div className="therapist-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <div className="therapist-details">
                <h3>Mridul Sharma</h3>
                <p>30 min meeting with</p>
              </div>
            </div>
            <div className="session-actions">
              <button className="reschedule-btn">Reschedule</button>
              <button className="join-now-btn">Join Now</button>
            </div>
          </div>

          <div className="session-divider"></div>

          <div className="session-info">
            <div className="session-time">
              <div className="time-icon-group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="time-icon"
                >
                  <path
                    d="M10.9982 19.4982C9.81872 19.4982 8.71364 19.2751 7.68297 18.829C6.65214 18.3828 5.75339 17.7764 4.98672 17.0097C4.22005 16.2431 3.61364 15.3443 3.16747 14.3135C2.7213 13.2828 2.49822 12.1777 2.49822 10.9982C2.49822 9.81872 2.7213 8.71364 3.16747 7.68297C3.61364 6.65214 4.22005 5.75339 4.98672 4.98672C5.75339 4.22005 6.65214 3.61364 7.68297 3.16747C8.71364 2.7213 9.81872 2.49822 10.9982 2.49822C12.1777 2.49822 13.2828 2.7213 14.3135 3.16747C15.3443 3.61364 16.2431 4.22005 17.0097 4.98672C17.7764 5.75339 18.3828 6.65214 18.829 7.68297C19.2751 8.71364 19.4982 9.81872 19.4982 10.9982C19.4982 12.1777 19.2751 13.2828 18.829 14.3135C18.3828 15.3443 17.7764 16.2431 17.0097 17.0097C16.2431 17.7764 15.3443 18.3828 14.3135 18.829C13.2828 19.2751 12.1777 19.4982 10.9982 19.4982ZM13.9712 15.0252L15.0252 13.9712L11.7482 10.6945V5.99822H10.2482V11.302L13.9712 15.0252Z"
                    fill="white"
                  />
                </svg>
                <span>Time</span>
              </div>
              <div className="time-details">
                <p className="session-date">Thursday, Sep 14th</p>
                <p className="session-schedule">3:00 - 3:30 PM IST</p>
              </div>
            </div>
          </div>

          <div className="session-divider"></div>

          <div className="session-remarks">
            <div className="remarks-icon-group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="remarks-icon"
              >
                <path
                  d="M0.882812 19.498V0.498047H2.38281V19.498H0.882812ZM4.67131 14.6518V12.1328H13.1133V14.6518H4.67131ZM4.67131 7.8633V5.3443H19.1133V7.8633H4.67131Z"
                  fill="white"
                />
              </svg>
              <span>Remarks</span>
            </div>
            <p>I am going thhrouughh a heartbrake</p>
          </div>
        </div>
      </div>
    </>
  );
}
