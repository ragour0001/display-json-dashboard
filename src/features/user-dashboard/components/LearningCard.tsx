"use client";

interface LearningCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function LearningCard({
  title,
  description,
  tags,
}: LearningCardProps) {
  return (
    <>
      <style>{`
        .learning-card {
          display: flex;
          padding: 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          flex: 1 0 0;
          border-radius: 16px;
          border: 1px solid #e5e7e9;
          background: #fff;
        }

        .learning-card-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .learning-card-sub-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .learning-card-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
        }

        .learning-card-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .card-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .card-title-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .card-title {
          color: #232323;
          font-family: Be Vietnam Pro, -apple-system, Helvetica, sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
          margin: 0;
        }

        .card-arrow-button {
          display: flex;
          width: 30px;
          height: 30px;
          padding: 14px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          aspect-ratio: 1/1;
          border-radius: 6px;
          border: 1px solid #f1f1f3;
          background: #fcfcfd;
          cursor: pointer;
        }

        .card-tags-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          align-self: stretch;
        }

        .card-tags-sub-container {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .card-tag {
          display: flex;
          padding: 8px 14px;
          align-items: flex-start;
          gap: 10px;
          border-radius: 6px;
          border: 1px solid #f1f1f3;
          background: #fff;
        }

        .card-tag span {
          color: #4c4c4d;
          font-family: Be Vietnam Pro, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }

        .card-description-section {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .card-description {
          width: 279px;
          color: #456179;
          font-family: Be Vietnam Pro, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #666666;
        }

        .card-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .card-actions-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
        }

        .take-look-btn {
          display: flex;
          padding: 10px 20px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 9999px;
          border: 1px solid #006b5f;
          background: #fff;
          box-shadow: 0px 1px 2px 0px rgba(20, 28, 37, 0.04);
          color: #006b5f;
          text-align: center;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 0.14px;
          cursor: pointer;
        }

        .take-assessment-btn {
          display: flex;
          height: 40px;
          padding: 6px 12px;
          justify-content: center;
          align-items: center;
          gap: 4px;
          align-self: stretch;
          border-radius: 100px;
          background: #006a63;
          border: none;
          color: #fff;
          font-family: Inter, -apple-system, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .learning-card {
            padding: 16px;
          }

          .card-title {
            font-size: 16px;
          }

          .card-description {
            width: 100%;
            font-size: 14px;
          }

          .card-tags-sub-container {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .card-title {
            font-size: 15px;
          }

          .card-description {
            font-size: 13px;
          }

          .card-tag span {
            font-size: 12px;
          }

          .take-look-btn,
          .take-assessment-btn {
            font-size: 13px;
          }
        }
      `}</style>
      <div className="learning-card">
        <div className="learning-card-container">
          <div className="learning-card-sub-container">
            <div className="learning-card-content">
              <div className="learning-card-header">
                <div className="card-header-content">
                  <div className="card-title-section">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-arrow-button">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                          fill="#00C7B2"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="card-tags-container">
                    <div className="card-tags-sub-container">
                      {tags.map((tag, index) => (
                        <div key={index} className="card-tag">
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-description-section">
                <p className="card-description">{description}</p>
              </div>
            </div>
          </div>

          <div className="card-actions">
            <div className="card-actions-container">
              <button className="take-look-btn">Take a Look</button>
              <button className="take-assessment-btn">
                Take assessment to Personalize
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
