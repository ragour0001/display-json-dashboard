"use client";

import { useState } from "react";
import ThankYouModal from "./ThankYouModal";

interface FeedbackModalProps {
  onClose: () => void;
}

export default function FeedbackModal({ onClose }: FeedbackModalProps) {
  const [selectedRating, setSelectedRating] = useState("excellent");
  const [comment, setComment] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = () => {
    setShowThankYou(true);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    onClose();
  };

  const ratings = [
    { id: "excellent", label: "🔥 Excellent", active: true },
    { id: "does-job", label: "👌 Does the Job", active: false },
    { id: "good", label: "😊 Good", active: false },
    { id: "satisfactory", label: "🙂 Satisfactory", active: false },
    { id: "average", label: "😐 Average", active: false },
    { id: "poor", label: "👎 Poor", active: false },
  ];

  return (
    <>
      <style>{`
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

        .feedback-modal-container {
          width: 1034px;
          height: 480px;
          border-radius: 14px 14px 0px 0px;
          background: #fff;
          position: relative;
          margin-top: 20px;
        }

        .feedback-modal {
          width: 953px;
          height: 342px;
          position: absolute;
          left: 50%;
          top: 16px;
          transform: translateX(-50%);
        }

        .feedback-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 70px;
        }

        .feedback-modal-header h3 {
          color: #242e49;
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 32px;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .rating-buttons {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 70px;
          flex-wrap: wrap;
        }

        .rating-button {
          display: flex;
          padding: 16px 18px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 12px;
          border: 1px solid #e7ecf2;
          background: #fff;
          color: #242e49;
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .rating-button.active {
          border: 1px solid #006b5f;
          background: #d4e6e4;
          color: #006b5f;
        }

        .rating-button:hover:not(.active) {
          background: #f8f9fa;
          border-color: #d1d5db;
        }

        .comment-section {
          margin-bottom: 70px;
        }

        .comment-label {
          display: block;
          color: #242e49;
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          margin-bottom: 23px;
        }

        .comment-textarea {
          width: 946px;
          height: 169px;
          border-radius: 12px;
          background: #f2f5f9;
          border: none;
          padding: 14px;
          color: #687188;
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          resize: none;
          outline: none;
        }

        .comment-textarea::placeholder {
          color: #687188;
        }

        .feedback-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skip-button {
          display: flex;
          width: 163px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          padding: 10px 16px;
          border-radius: 12px;
          border: 1px solid #bec9c6;
          background: #fff;
          color: #3f4947;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .skip-button:hover {
          background: #f8f9fa;
        }

        .submit-button {
          display: flex;
          width: 163px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          padding: 10px 16px;
          border-radius: 12px;
          background: #006a63;
          border: none;
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .submit-button:hover {
          background: #005951;
        }
      `}</style>
      <div className="feedback-modal-container">
        <div className="feedback-modal">
          <div className="feedback-modal-header">
            <h3>Share you experience ⭐</h3>
            <button className="close-button" onClick={onClose}>
              <svg width="44" height="42" viewBox="0 0 44 42" fill="none">
                <path
                  d="M22 0.5C33.8963 0.5 43.5 9.69983 43.5 21C43.5 32.3002 33.8963 41.5 22 41.5C10.1037 41.5 0.5 32.3002 0.5 21C0.5 9.69983 10.1037 0.5 22 0.5Z"
                  fill="white"
                  stroke="#E6E6E6"
                />
                <path
                  d="M28.875 14.4375L15.125 27.5625"
                  stroke="#181F30"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.125 14.4375L28.875 27.5625"
                  stroke="#181F30"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="rating-buttons">
            {ratings.map((rating) => (
              <button
                key={rating.id}
                className={`rating-button ${
                  selectedRating === rating.id ? "active" : ""
                }`}
                onClick={() => setSelectedRating(rating.id)}
              >
                {rating.label}
              </button>
            ))}
          </div>

          <div className="comment-section">
            <label className="comment-label">Add a comment</label>
            <textarea
              className="comment-textarea"
              placeholder="Type here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="feedback-actions">
            <button className="skip-button" onClick={onClose}>
              Skip
            </button>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          </div>

          <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
        </div>
      </div>
    </>
  );
}
