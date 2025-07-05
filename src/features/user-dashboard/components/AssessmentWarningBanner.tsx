"use client";

export default function AssessmentWarningBanner() {
  return (
    <>
      <style>{`
        .assessment-warning-banner {
          display: flex;
          width: 978px;
          height: 67px;
          padding: 0px 12px;
          justify-content: space-between;
          align-items: center;
          border-radius: 6px;
          border: 1px solid #f5dc60;
          background: #fffbe4;
        }

        .warning-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .warning-icon-text {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .warning-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .warning-text {
          width: 584px;
          color: #003a5d;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          margin: 0;
        }

        .warning-action {
          display: flex;
          width: 204px;
          height: 46px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        .take-assessment-btn {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 10px;
          background: #006a63;
          border: none;
          color: #fff;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .assessment-warning-banner {
            width: 100%;
            flex-direction: column;
            height: auto;
            padding: 16px;
            gap: 16px;
          }

          .warning-content {
            flex-direction: column;
            text-align: center;
          }

          .warning-icon-text {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .warning-text {
            width: 100%;
          }

          .warning-action {
            width: 100%;
          }
        }
      `}</style>
      <div className="assessment-warning-banner">
        <div className="warning-content">
          <div className="warning-icon">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3429 4.80333C11.6961 4.60447 12.0947 4.5 12.5 4.5C12.9053 4.5 13.3039 4.60447 13.6571 4.80333C14.0103 5.0022 14.3063 5.28874 14.5165 5.63531L14.5188 5.63904L21.184 16.7662C21.39 17.1228 21.4988 17.5272 21.5 17.939C21.5011 18.3508 21.3944 18.7558 21.1905 19.1136C20.9866 19.4713 20.6925 19.7695 20.3376 19.9783C19.9827 20.1872 19.5792 20.2994 19.1674 20.304L19.1588 20.3041L5.83257 20.304C5.42077 20.2995 5.01734 20.1872 4.66241 19.9783C4.30748 19.7695 4.01342 19.4713 3.80949 19.1136C3.60555 18.7558 3.49886 18.3508 3.50001 17.939C3.50116 17.5272 3.61013 17.1229 3.81606 16.7662L3.82236 16.7553L10.4835 5.6353C10.6937 5.28873 10.9897 5.0022 11.3429 4.80333ZM12.5 6.07232C12.3649 6.07232 12.232 6.10715 12.1143 6.17344C11.9971 6.23942 11.8988 6.33437 11.8288 6.4492L5.17508 17.557C5.10812 17.6748 5.07271 17.8079 5.07233 17.9434C5.07194 18.0807 5.10751 18.2157 5.17549 18.3349C5.24346 18.4542 5.34149 18.5536 5.45979 18.6232C5.57707 18.6922 5.71023 18.7296 5.84623 18.7317H19.1538C19.2898 18.7296 19.4229 18.6922 19.5402 18.6232C19.6585 18.5536 19.7565 18.4542 19.8245 18.3349C19.8925 18.2157 19.9281 18.0807 19.9277 17.9434C19.9273 17.8079 19.8919 17.6748 19.8249 17.5571L13.1722 6.45076C13.1719 6.45024 13.1715 6.44972 13.1712 6.4492C13.1012 6.33437 13.0029 6.23942 12.8857 6.17344C12.768 6.10715 12.6351 6.07232 12.5 6.07232Z"
                fill="#FFBF00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4971 9.29883C12.9313 9.29883 13.2833 9.6508 13.2833 10.085V13.2296C13.2833 13.6638 12.9313 14.0158 12.4971 14.0158C12.0629 14.0158 11.7109 13.6638 11.7109 13.2296V10.085C11.7109 9.6508 12.0629 9.29883 12.4971 9.29883Z"
                fill="#FFBF00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7109 16.3741C11.7109 15.9399 12.0629 15.5879 12.4971 15.5879H12.505C12.9391 15.5879 13.2911 15.9399 13.2911 16.3741C13.2911 16.8082 12.9391 17.1602 12.505 17.1602H12.4971C12.0629 17.1602 11.7109 16.8082 11.7109 16.3741Z"
                fill="#FFBF00"
              />
            </svg>
          </div>
          <div className="warning-text">
            <span>
              You haven't taken the assessment yet – take it to set your goal and
              begin your journey.
            </span>
          </div>
        </div>
        <div className="warning-action">
          <button className="take-assessment-btn">Take Assessment</button>
        </div>
      </div>
    </>
  );
}
