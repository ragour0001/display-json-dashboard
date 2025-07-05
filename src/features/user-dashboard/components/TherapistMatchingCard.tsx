"use client";

export default function TherapistMatchingCard() {
  return (
    <>
      <style>{`
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

        .therapist-card-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .therapist-card-header > div:first-child {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .brain-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

        .therapist-card-text {
          display: flex;
          width: 750px;
          align-items: flex-start;
          gap: 2px;
          flex-direction: column;
        }

        .therapist-card-text h3 {
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

        .therapist-card-text p {
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
      <div className="therapist-matching-card">
        <div className="therapist-card-content">
          <div className="therapist-card-header">
            <div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 39 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="brain-icon"
              >
                <path
                  d="M9.45 24.55C10.4167 25.5167 11.6 26 13 26C14.4 26 15.5833 25.5167 16.55 24.55L24.55 16.55C25.5167 15.5833 26 14.4 26 13C26 11.6 25.5167 10.4167 24.55 9.45C23.5833 8.48333 22.4 8 21 8C19.6 8 18.4167 8.48333 17.45 9.45C16.2167 9.01667 15 8.91667 13.8 9.15C12.6 9.38333 11.5833 9.91667 10.75 10.75C9.91667 11.5833 9.38333 12.6 9.15 13.8C8.91667 15 9.01667 16.2167 9.45 17.45C8.48333 18.4167 8 19.6 8 21C8 22.4 8.48333 23.5833 9.45 24.55ZM6 40V31.4C4.1 29.6667 2.625 27.6417 1.575 25.325C0.525 23.0083 0 20.5667 0 18C0 13 1.75 8.75 5.25 5.25C8.75 1.75 13 0 18 0C22.1667 0 25.8583 1.225 29.075 3.675C32.2917 6.125 34.3833 9.31667 35.35 13.25L38.1 24.15C38.2333 24.6167 38.15 25.0417 37.85 25.425C37.55 25.8083 37.15 26 36.65 26H32V33C32 33.825 31.7063 34.5312 31.119 35.1185C30.5313 35.7062 29.825 36 29 36H24V40H21V33H29V23H34.7L32.45 14C31.65 10.7667 29.9 8.125 27.2 6.075C24.5 4.025 21.4333 3 18 3C13.8333 3 10.2917 4.44167 7.375 7.325C4.45833 10.2083 3 13.7257 3 17.877C3 20.0243 3.43867 22.0642 4.316 23.9965C5.19367 25.9292 6.43833 27.647 8.05 29.15L9 30.05V40H6Z"
                  fill="#006B5F"
                />
              </svg>
              <div className="therapist-card-text">
                <h3>
                  Complete Your Assessment for Better match with therapist/coach
                </h3>
                <p>
                  We&apos;ll provide you a customized routine & therapist for you
                </p>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="start-now-btn">Start Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
