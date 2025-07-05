"use client";

export default function TherapistCard() {
  return (
    <>
      <style>{`
        .therapist-card {
          display: flex;
          width: 283px;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 8px;
          border: 1px solid #f1f1f1;
          position: relative;
        }

        .card-image-section {
          height: 180px;
          align-self: stretch;
          position: relative;
          background: #f2f2f2;
          border-radius: 8px 8px 0 0;
        }

        .card-image-placeholder {
          width: 100%;
          height: 100%;
          background: #f0f0f0;
          border-radius: 8px 8px 0 0;
        }

        .availability-badge {
          display: flex;
          padding: 4px 8px;
          align-items: center;
          gap: 4px;
          position: absolute;
          left: 16px;
          top: 16px;
          border-radius: 12px;
          background: rgba(39, 123, 83, 0.09);
          backdrop-filter: blur(6px);
        }

        .availability-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #277b53;
        }

        .availability-badge span {
          color: #277b53;
          text-align: center;
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: normal;
        }

        .card-content {
          position: absolute;
          bottom: 5px;
          left: 26px;
          right: 26px;
          display: flex;
          padding: 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          border-radius: 0 0 8px 8px;
        }

        .therapist-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          align-self: stretch;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 4px;
          flex: 1 0 0;
        }

        .profile-info h3 {
          color: #292d32;
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: normal;
          margin: 0;
        }

        .profile-info p {
          color: #54577a;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.12px;
          margin: 0;
        }

        .rating {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
          border-radius: 8px;
        }

        .star-icon {
          width: 24px;
          height: 24px;
        }

        .rating span {
          color: #ffb063;
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
        }

        .card-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          align-self: stretch;
        }

        .specializations {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          gap: 8px;
          flex-wrap: wrap;
        }

        .specialization-tag {
          display: flex;
          padding: 8px;
          justify-content: center;
          align-items: center;
          gap: 13.206px;
          border-radius: 38px;
          background: #cde8e1;
          color: #00201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 128.447%;
        }

        .session-booking {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .session-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .session-label {
          color: #242e49;
          font-family: Source Sans 3, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 15.085px;
          letter-spacing: -0.54px;
          margin: 0;
        }

        .session-details {
          display: flex;
          flex-direction: column;
        }

        .session-time {
          color: #54577a;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 132.199%;
        }

        .session-day {
          color: #54577a;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 132.199%;
        }

        .book-now-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          background: #006a63;
          padding: 6px 12px;
          border: none;
          cursor: pointer;
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          transition: all 0.2s ease;
        }

        .book-now-btn:hover {
          background: #005a54;
        }

        @media (max-width: 1200px) {
          .therapist-card {
            width: calc(50% - 10px);
            max-width: 283px;
          }
        }

        @media (max-width: 768px) {
          .therapist-card {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
      <div className="therapist-card">
        <div className="card-image-section">
          <div className="card-image-placeholder"></div>
          <div className="availability-badge">
            <div className="availability-dot"></div>
            <span>Available Today</span>
          </div>
        </div>

        <div className="card-content">
          <div className="therapist-profile">
            <div className="profile-info">
              <h3>Dr. Marci Maiden</h3>
              <p>Counselling Therapist</p>
            </div>
            <div className="rating">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="star-icon"
              >
                <path
                  d="M9.04894 0.925099C9.3483 0.00378799 10.6517 0.0037868 10.9511 0.925097L12.4697 5.59886C12.6035 6.01088 12.9875 6.28984 13.4207 6.28984H18.335C19.3037 6.28984 19.7065 7.52946 18.9228 8.09886L14.947 10.9874C14.5966 11.242 14.4499 11.6934 14.5838 12.1054L16.1024 16.7792C16.4017 17.7005 15.3472 18.4666 14.5635 17.8972L10.5878 15.0087C10.2373 14.754 9.7627 14.754 9.41221 15.0087L5.43648 17.8972C4.65276 18.4666 3.59828 17.7005 3.89763 16.7792L5.41623 12.1054C5.55011 11.6934 5.40345 11.242 5.05296 10.9874L1.07722 8.09886C0.293507 7.52946 0.696283 6.28984 1.66501 6.28984H6.57929C7.01252 6.28984 7.39647 6.01088 7.53035 5.59886L9.04894 0.925099Z"
                  fill="#FFB063"
                />
              </svg>
              <span>4.5</span>
            </div>
          </div>

          <div className="card-details">
            <div className="specializations">
              <span className="specialization-tag">Stress</span>
              <span className="specialization-tag">Trauma</span>
              <span className="specialization-tag">Anxiety</span>
              <span className="specialization-tag">+2 More</span>
            </div>

            <div className="session-booking">
              <div className="session-info">
                <p className="session-label">Sessions</p>
                <div className="session-details">
                  <span className="session-time">2 : 30 Pm</span>
                  <span className="session-day">Today</span>
                </div>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
