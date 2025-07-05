"use client";

import GoalCard from "./GoalCard";

export default function MyGoalsSection() {
  const goals = [
    {
      emoji: "😌",
      title: "Manage stress",
      color: "#EDFFEF",
      lockColor: "#006B5F",
      isLocked: true,
    },
    {
      emoji: "💤",
      title: "Sleep better",
      color: "#FFF2EC",
      lockColor: "#FF5100",
      isLocked: true,
    },
    {
      emoji: "🧘",
      title: "Feel calm",
      color: "#F4F2FF",
      lockColor: "#781FD1",
      isLocked: true,
    },
  ];

  return (
    <>
      <style>{`
        .my-goals-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
          margin-bottom: 50px;
        }

        .goals-section-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }

        .goals-section-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
        }

        .goals-status-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          margin-bottom: 5vh;
        }

        .goals-status-header {
          display: flex;
          height: 74px;
          min-width: 200px;
          padding: 24px 0px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 16px;
        }

        .goals-status-header > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .goals-status-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .goals-status-title {
          color: #003a5d;
          font-feature-settings: "ss01" on, "cv01" on, "cv11" on;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px;
          margin: 0;
        }

        .reset-goals-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 5px;
        }

        .reset-goals-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          border-radius: 100px;
          background: rgba(29, 27, 32, 0.1);
          border: none;
          cursor: not-allowed;
          opacity: 0.38;
        }

        .reset-goals-btn .btn-content {
          display: flex;
          padding: 6px 12px;
          justify-content: center;
          align-items: center;
          gap: 4px;
        }

        .reset-goals-btn .btn-text {
          color: #161d1c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .reset-goals-text {
          color: #4a635e;
          text-align: center;
          font-feature-settings: "ss01" on, "cv01" on, "cv11" on;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          margin: 0;
        }

        .goals-cards-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;
          flex: 1 0;
          align-self: stretch;
        }

        .assessment-warning-card {
          display: flex;
          height: 68px;
          min-width: 200px;
          padding: 24px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          align-self: stretch;
          border-radius: 16px;
          border: 1px solid #e94545;
          background: rgba(255, 105, 97, 0.06);
        }

        .warning-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .warning-content > div:first-child {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .warning-text {
          color: #ba1a1a;
          font-feature-settings: "ss01" on, "cv01" on, "cv11" on;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px;
        }

        .close-warning-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 768px) {
          .my-goals-section {
            margin-bottom: 30px;
          }

          .goals-cards-container {
            flex-direction: column;
            gap: 12px;
          }

          .goals-status-header {
            height: auto;
            padding: 16px 0;
          }

          .assessment-warning-card {
            height: auto;
            padding: 16px;
          }
        }
      `}</style>
      <div className="my-goals-section">
        <div className="goals-section-header">
          <h2 className="goals-section-title">My Goals</h2>
        </div>

        <div className="goals-status-container">
          <div className="goals-status-header">
            <div>
              <div className="goals-status-info">
                <h3 className="goals-status-title">
                  Yayyyy,, Your Goal has been Set
                </h3>
              </div>
              <div className="reset-goals-container">
                <button className="reset-goals-btn" disabled>
                  <div className="btn-content">
                    <span className="btn-text">Reset Goals</span>
                  </div>
                </button>
                <p className="reset-goals-text">
                  You can Reset your Goals after 14 Days
                </p>
              </div>
            </div>
          </div>

          <div className="goals-cards-container">
            {goals.map((goal, index) => (
              <GoalCard
                key={index}
                emoji={goal.emoji}
                title={goal.title}
                color={goal.color}
                lockColor={goal.lockColor}
                isLocked={goal.isLocked}
              />
            ))}
          </div>

          <div className="assessment-warning-card">
            <div className="warning-content">
              <div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8429 4.9713C11.1961 4.77244 11.5947 4.66797 12 4.66797C12.4053 4.66797 12.8039 4.77244 13.1571 4.9713C13.5103 5.17017 13.8063 5.45671 14.0165 5.80328L14.0188 5.80701L20.684 16.9342C20.89 17.2908 20.9988 17.6952 21 18.107C21.0011 18.5188 20.8944 18.9237 20.6905 19.2815C20.4866 19.6393 20.1925 19.9374 19.8376 20.1463C19.4827 20.3551 19.0792 20.4674 18.6674 20.4719L18.6588 20.472L5.33257 20.472C4.92077 20.4675 4.51734 20.3551 4.16241 20.1463C3.80748 19.9374 3.51342 19.6393 3.30949 19.2815C3.10555 18.9237 2.99886 18.5188 3.00001 18.107C3.00116 17.6952 3.11013 17.2908 3.31606 16.9342L3.32236 16.9233L9.98348 5.80327C10.1937 5.4567 10.4897 5.17017 10.8429 4.9713ZM12 6.24029C11.8649 6.24029 11.732 6.27512 11.6143 6.3414C11.4971 6.40739 11.3988 6.50234 11.3288 6.61716L4.67508 17.725C4.60812 17.8428 4.57271 17.9759 4.57233 18.1114C4.57194 18.2487 4.60751 18.3836 4.67549 18.5029C4.74346 18.6222 4.84149 18.7215 4.95979 18.7912C5.07707 18.8602 5.21023 18.8975 5.34623 18.8997H18.6538C18.7898 18.8975 18.9229 18.8602 19.0402 18.7912C19.1585 18.7215 19.2565 18.6222 19.3245 18.5029C19.3925 18.3836 19.4281 18.2487 19.4277 18.1114C19.4273 17.9759 19.3919 17.8428 19.3249 17.725L12.6722 6.61873C12.6719 6.61821 12.6715 6.61769 12.6712 6.61716C12.6012 6.50234 12.5029 6.40739 12.3857 6.3414C12.268 6.27512 12.1351 6.24029 12 6.24029Z"
                    fill="#E94545"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.001 9.4668C12.4352 9.4668 12.7872 9.81877 12.7872 10.253V13.3976C12.7872 13.8318 12.4352 14.1838 12.001 14.1838C11.5668 14.1838 11.2148 13.8318 11.2148 13.3976V10.253C11.2148 9.81877 11.5668 9.4668 12.001 9.4668Z"
                    fill="#E94545"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2148 16.542C11.2148 16.1078 11.5668 15.7559 12.001 15.7559H12.0089C12.4431 15.7559 12.795 16.1078 12.795 16.542C12.795 16.9762 12.4431 17.3282 12.0089 17.3282H12.001C11.5668 17.3282 11.2148 16.9762 11.2148 16.542Z"
                    fill="#E94545"
                  />
                </svg>
                <span className="warning-text">
                  Kindly Take the Assessment to track your process
                </span>
              </div>
              <button className="close-warning-btn">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5.66797L5 15.668"
                    stroke="black"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5.66797L15 15.668"
                    stroke="black"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
