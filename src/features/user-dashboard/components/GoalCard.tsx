"use client";

interface GoalCardProps {
  emoji: string;
  title: string;
  color: string;
  lockColor: string;
  isLocked: boolean;
}

export default function GoalCard({
  emoji,
  title,
  color,
  lockColor,
  isLocked,
}: GoalCardProps) {
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

        .goals-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 29px;
        }

        .goals-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          flex: 1 0 0;
          align-self: stretch;
        }

        .goals-header {
          display: flex;
          height: 39px;
          min-width: 200px;
          padding: 24px;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          align-self: stretch;
          border-radius: 16px;
        }

        .goals-header h3 {
          color: #003a5d;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
        }

        .goals-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .goals-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          gap: 10px;
          align-self: stretch;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .goal-chip {
          display: flex;
          height: 53px;
          padding: 10px 20px;
          align-items: flex-start;
          gap: 10px;
          border-radius: 48px;
          background: #fff;
          box-shadow: 0px 2px 7px 0px rgba(65, 65, 65, 0.08);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .goal-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0px 4px 12px 0px rgba(65, 65, 65, 0.12);
        }

        .goal-chip span {
          color: #494949;
          font-feature-settings: "liga" off, "clig" off;
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          display: flex;
          align-items: center;
          margin-top: 8px;
        }

        .goal-card {
          display: flex;
          padding: 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          flex: 1 0 0;
          border-radius: 16px;
        }

        .goal-card-content {
          display: flex;
          align-items: center;
          gap: 25px;
          align-self: stretch;
        }

        .goal-info {
          display: flex;
          width: 169px;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .goal-emoji-container {
          width: 33.567px;
          height: 33px;
          position: relative;
        }

        .goal-emoji-circle {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 39px;
          position: absolute;
          left: 0px;
          top: 0px;
          width: 34px;
          height: 33px;
        }

        .goal-emoji {
          color: #000;
          font-feature-settings: "liga" off, "clig" off;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          position: absolute;
          left: 5px;
          top: 4px;
          width: 24px;
          height: 24px;
        }

        .goal-title {
          align-self: stretch;
          color: #494949;
          font-feature-settings: "liga" off, "clig" off;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin: 0;
        }

        .goal-track-progress {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          opacity: 0.5;
        }

        .lock-icon {
          width: 17px;
          height: 17px;
          aspect-ratio: 1/1;
          position: relative;
        }

        .track-text {
          font-feature-settings: "liga" off, "clig" off;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        }

        .goal-timer {
          width: 48px;
          height: 48px;
          opacity: 0.5;
        }
      `}</style>
      <div className="goal-card" style={{ backgroundColor: color }}>
      <div className="goal-card-content">
        <div className="goal-info">
          <div className="goal-emoji-container">
            <div className="goal-emoji-circle">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16.7833"
                  cy="17.168"
                  rx="16.7833"
                  ry="16.5"
                  fill="white"
                />
              </svg>
              <span className="goal-emoji">{emoji}</span>
            </div>
          </div>
          <h3 className="goal-title">{title}</h3>
          {isLocked && (
            <div className="goal-track-progress">
              <div className="lock-icon">
                <svg
                  width="11"
                  height="15"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.2487 15.252C1.85911 15.252 1.52561 15.1132 1.24818 14.8358C0.970747 14.5584 0.832031 14.2249 0.832031 13.8353V6.75195C0.832031 6.36237 0.970747 6.02886 1.24818 5.75143C1.52561 5.474 1.85911 5.33529 2.2487 5.33529H2.95703V3.91862C2.95703 2.93876 3.30234 2.10352 3.99297 1.41289C4.68359 0.722266 5.51884 0.376953 6.4987 0.376953C7.47856 0.376953 8.3138 0.722266 9.00443 1.41289C9.69505 2.10352 10.0404 2.93876 10.0404 3.91862V5.33529H10.7487C11.1383 5.33529 11.4718 5.474 11.7492 5.75143C12.0267 6.02886 12.1654 6.36237 12.1654 6.75195V13.8353C12.1654 14.2249 12.0267 14.5584 11.7492 14.8358C11.4718 15.1132 11.1383 15.252 10.7487 15.252H2.2487ZM6.4987 11.7103C6.88828 11.7103 7.22179 11.5716 7.49922 11.2941C7.77665 11.0167 7.91537 10.6832 7.91537 10.2936C7.91537 9.90404 7.77665 9.57053 7.49922 9.2931C7.22179 9.01567 6.88828 8.87695 6.4987 8.87695C6.10911 8.87695 5.77561 9.01567 5.49818 9.2931C5.22075 9.57053 5.08203 9.90404 5.08203 10.2936C5.08203 10.6832 5.22075 11.0167 5.49818 11.2941C5.77561 11.5716 6.10911 11.7103 6.4987 11.7103ZM4.3737 5.33529H8.6237V3.91862C8.6237 3.32834 8.4171 2.82661 8.00391 2.41341C7.59071 2.00022 7.08898 1.79362 6.4987 1.79362C5.90842 1.79362 5.40668 2.00022 4.99349 2.41341C4.5803 2.82661 4.3737 3.32834 4.3737 3.91862V5.33529Z"
                    fill={lockColor}
                  />
                </svg>
              </div>
              <span className="track-text" style={{ color: lockColor }}>
                Track your progress
              </span>
            </div>
          )}
        </div>
        <div className="goal-timer">
          <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity="0.5"
          >
            <path
              d="M48 24.168C48 37.4228 37.2548 48.168 24 48.168C10.7452 48.168 0 37.4228 0 24.168C0 10.9131 10.7452 0.167969 24 0.167969C37.2548 0.167969 48 10.9131 48 24.168ZM3.84 24.168C3.84 35.302 12.8659 44.328 24 44.328C35.1341 44.328 44.16 35.302 44.16 24.168C44.16 13.0339 35.1341 4.00797 24 4.00797C12.8659 4.00797 3.84 13.0339 3.84 24.168Z"
              fill="#E9E9FF"
            />
            <path
              d="M24 2.08797C24 1.02759 24.861 0.159984 25.918 0.244719C29.5333 0.534533 33.0365 1.64026 36.1631 3.47837C37.0772 4.01577 37.2842 5.22045 36.6754 6.08871C36.0667 6.95696 34.8732 7.15846 33.951 6.63504C31.4817 5.23353 28.7436 4.36931 25.9171 4.09932C24.8616 3.99848 24 3.14836 24 2.08797Z"
              fill="url(#paint0_radial_timer)"
            />
            <mask
              id="mask0_timer"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="13"
              y="12"
              width="23"
              height="24"
            >
              <rect x="13" y="12.668" width="23" height="23" fill={lockColor} />
            </mask>
            <g mask="url(#mask0_timer)">
              <path
                d="M18.7487 33.75C18.2216 33.75 17.7704 33.5623 17.3951 33.187C17.0197 32.8116 16.832 32.3604 16.832 31.8333V22.25C16.832 21.7229 17.0197 21.2717 17.3951 20.8964C17.7704 20.521 18.2216 20.3333 18.7487 20.3333H19.707V18.4167C19.707 17.091 20.1742 15.9609 21.1086 15.0266C22.043 14.0922 23.173 13.625 24.4987 13.625C25.8244 13.625 26.9544 14.0922 27.8888 15.0266C28.8232 15.9609 29.2904 17.091 29.2904 18.4167V20.3333H30.2487C30.7758 20.3333 31.227 20.521 31.6023 20.8964C31.9777 21.2717 32.1654 21.7229 32.1654 22.25V31.8333C32.1654 32.3604 31.9777 32.8116 31.6023 33.187C31.227 33.5623 30.7758 33.75 30.2487 33.75H18.7487ZM24.4987 28.9583C25.0258 28.9583 25.477 28.7707 25.8523 28.3953C26.2277 28.02 26.4154 27.5687 26.4154 27.0417C26.4154 26.5146 26.2277 26.0634 25.8523 25.688C25.477 25.3127 25.0258 25.125 24.4987 25.125C23.9716 25.125 23.5204 25.3127 23.1451 25.688C22.7697 26.0634 22.582 26.5146 22.582 27.0417C22.582 27.5687 22.7697 28.02 23.1451 28.3953C23.5204 28.7707 23.9716 28.9583 24.4987 28.9583ZM21.6237 20.3333H27.3737V18.4167C27.3737 17.6181 27.0942 16.9392 26.5352 16.3802C25.9761 15.8212 25.2973 15.5417 24.4987 15.5417C23.7001 15.5417 23.0213 15.8212 22.4622 16.3802C21.9032 16.9392 21.6237 17.6181 21.6237 18.4167V20.3333Z"
                fill={lockColor}
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_timer"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(6.6 -20.232) rotate(42.7688) scale(65.3862)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor={lockColor} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
