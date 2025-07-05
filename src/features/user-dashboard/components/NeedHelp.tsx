"use client";

import { useState } from "react";
import ContactCard from "./ContactCard";
import FeedbackModal from "./FeedbackModal";
import FAQSection from "./FAQSection";

export default function NeedHelp() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(true);

  return (
    <>
      <style>{`
        .need-help-page {
          flex: 1;
          padding: 18px 40px;
          background: #fff;
          overflow-y: auto;
        }

        .need-help-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
          max-width: 1070px;
          width: 100%;
          padding-right: 20px;
        }

        .need-help-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          width: 750px;
        }

        .page-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
        }

        .search-input-container {
          display: flex;
          height: 44px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          flex: 1;
        }

        .search-input-wrapper {
          display: flex;
          padding: 8px 16px 8px 12px;
          align-items: center;
          gap: 12px;
          flex: 1;
          align-self: stretch;
          border-radius: 8px;
          border: 1px solid #ccd8df;
          background: #fefefe;
          position: relative;
        }

        .search-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .search-input {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }

        .search-input::placeholder {
          color: #999;
        }

        .ai-assistant-button {
          display: flex;
          padding: 8px;
          align-items: center;
          gap: 13.206px;
          border-radius: 38px;
          background: #e9e9e9;
          cursor: pointer;
        }

        .ai-button-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
        }

        .ai-icon {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .ai-button-content span {
          color: #00201c;
          font-family: Source Sans 3, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 128.447%;
        }

        .contact-cards-section {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          align-self: stretch;
        }

        .feedback-section {
          display: flex;
          width: 1070px;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
        }

        .feedback-banner {
          display: flex;
          width: 1070px;
          height: 160px;
          padding: 38px 18px;
          justify-content: space-between;
          align-items: center;
          border-radius: 12px;
          background: #e9ebff;
          position: relative;
        }

        .feedback-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          flex: 1;
        }

        .feedback-text h2 {
          align-self: stretch;
          color: #181f30;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 32px;
          margin: 0;
        }

        .feedback-text p {
          align-self: stretch;
          color: #374652;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .feedback-illustration {
          position: absolute;
          right: 41px;
          top: -3px;
        }

        @media (max-width: 768px) {
          .need-help-page {
            padding: 16px 20px;
          }

          .need-help-header {
            width: 100%;
          }

          .contact-cards-section {
            flex-direction: column;
            gap: 20px;
          }

          .feedback-section {
            width: 100%;
          }

          .feedback-banner {
            width: 100%;
            height: auto;
            padding: 24px 16px;
            flex-direction: column;
            gap: 16px;
          }

          .feedback-illustration {
            position: relative;
            right: auto;
            top: auto;
          }
        }
      `}</style>
      <div className="need-help-page">
        <div className="need-help-content">
          {/* Header Section */}
          <div className="need-help-header">
            <h1 className="page-title">Need Help?</h1>
          </div>

          {/* Search Section */}
            <div className="search-input-container">
              <div className="search-input-wrapper">
                <svg
                  className="search-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0998 4.79996C7.62052 4.79996 4.79996 7.62052 4.79996 11.0998C4.79996 14.5792 7.62052 17.3997 11.0998 17.3997C14.5792 17.3997 17.3997 14.5792 17.3997 11.0998C17.3997 7.62052 14.5792 4.79996 11.0998 4.79996ZM3 11.0998C3 6.62642 6.62642 3 11.0998 3C15.5733 3 19.1997 6.62642 19.1997 11.0998C19.1997 15.5733 15.5733 19.1997 11.0998 19.1997C6.62642 19.1997 3 15.5733 3 11.0998Z"
                    fill="#CCCCCC"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5488 15.5488C15.9002 15.1973 16.4701 15.1973 16.8215 15.5488L20.7364 19.4637C21.0879 19.8151 21.0879 20.385 20.7364 20.7364C20.385 21.0879 19.8151 21.0879 19.4637 20.7364L15.5488 16.8215C15.1973 16.4701 15.1973 15.9002 15.5488 15.5488Z"
                    fill="#CCCCCC"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search .."
                  className="search-input"
                />
                <div className="ai-assistant-button">
                <div className="ai-button-content">
                  <svg
                    className="ai-icon"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M1.18997 14.6042L0.416016 13.8302L6.58747 7.66667L3.13247 6.83167L6.68685 4.61542L6.37768 0.4375L9.58102 3.12667L13.4368 1.5625L11.8727 5.43104L14.5827 8.62167L10.4048 8.3125L8.19643 11.8877L7.35352 8.43271L1.18997 14.6042ZM1.61956 4.50313L0.416016 3.29958L1.61956 2.09625L2.8231 3.29958L1.61956 4.50313ZM11.6998 14.5833L10.4962 13.3798L11.6998 12.1762L12.9031 13.3798L11.6998 14.5833Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                  <span>Ask Refill Assistant</span>
                </div>
              </div>
              </div>
              
            </div>        

          {/* Contact Cards Section */}
          <div className="contact-cards-section">
            <ContactCard
              type="email"
              title="Write to us"
              description="Our friendly team is here to help."
              buttonText="Support@Refillhealth.com"
            />
            <ContactCard
              type="chat"
              title="Chat to us"
              description="Our friendly team is here to help."
              buttonText="Chat Now"
            />
          </div>

          {/* Feedback Section */}
          <div className="feedback-section">
            <div className="feedback-banner">
              <div className="feedback-content">
                <div className="feedback-text">
                  <h2>Submit Feedback Today!</h2>
                  <p>Share your thoughts and help us improve your experience.</p>
                </div>
                <div className="feedback-illustration">
                  <svg width="132" height="87" viewBox="0 0 142 140" fill="none">
                    <path
                      d="M54.5166 20.0039V42.2H44.7658C43.9014 42.2 43.1992 41.4975 43.1992 40.631V21.5705C43.1992 20.7041 43.9017 20.0039 44.7658 20.0039H54.5166Z"
                      fill="#1D253D"
                    />
                    <path
                      d="M92.4784 30.5131C91.4756 39.9504 86.1163 42.2 86.1163 42.2H54.5176V20.0039C63.3844 18.299 67.6069 7.37916 66.693 1.90309C66.8549 0.671418 66.8572 -0.472064 66.6994 -1.44421C67.3261 -3.31781 69.1738 -2.94181 69.1738 -2.94181C75.2699 -1.9865 75.618 10.6618 75.5705 14.7854C75.5618 15.5007 76.1108 16.0992 76.8261 16.149C79.1558 16.3069 84.2364 16.767 88.6881 17.9321C91.6099 18.6972 92.8221 19.462 93.1809 21.1346C93.5609 22.8975 92.9927 25.6702 92.4784 30.5131Z"
                      fill="#FEBA0A"
                    />
                    <path
                      d="M54.5166 20.0039V38.82H44.7658C43.9014 38.82 43.1992 38.1179 43.1992 37.2534V21.5705C43.1992 20.7041 43.9017 20.0039 44.7658 20.0039H54.5166Z"
                      fill="#496BD0"
                    />
                    <path
                      d="M93.1789 21.1347C93.0234 22.6777 92.7424 24.6291 92.4764 27.1338C91.4737 36.5712 86.1144 38.8208 86.1144 38.8208H54.5156V20.0046C58.9354 19.1547 62.3759 15.8865 64.4606 12.0248C65.9646 9.23935 66.4348 6.0967 66.6341 2.97661C66.7506 1.1535 66.0403 -3.57864 69.1715 -2.94142C75.2676 -1.98611 75.6157 10.6622 75.5682 14.7858C75.5595 15.5011 76.1085 16.0996 76.8238 16.1494C79.1535 16.3073 84.2341 16.7674 88.6858 17.9324C91.608 18.6972 92.8204 19.462 93.1789 21.1347Z"
                      fill="#FFCB45"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {showFeedbackModal && (
              <FeedbackModal onClose={() => setShowFeedbackModal(false)} />
            )}
          </div>

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>
    </>
  );
}
