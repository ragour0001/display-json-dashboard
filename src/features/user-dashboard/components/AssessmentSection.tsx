"use client";

import RadioButton from "./RadioButton";
import ProgressBar from "./ProgressBar";

interface AssessmentSectionProps {
  question: string;
  options: string[];
  questionNumber: number;
  totalQuestions: number;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit?: () => void;
  isFirst: boolean;
  isLast: boolean;
  onSectionChange?: (section: string) => void;
}

export default function AssessmentSection({
  question,
  options,
  questionNumber,
  totalQuestions,
  selectedOption,
  setSelectedOption,
  onNext,
  onPrevious,
  onSubmit,
  isFirst,
  isLast,
  onSectionChange,
}: AssessmentSectionProps) {
  return (
    <>
      <style>{`
        .assessment-section {
          display: flex;
          width: 100%;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 50px;
        }

        .assessment-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }

        .assessment-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
        }

        .assessment-card {
          display: flex;
          padding: 18px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
          border-radius: 16px;
          border: 1px solid #ccc;
          background: #f7f9fa;
        }

        .assessment-card-header {
          display: flex;
          height: 81px;
          padding: 16px;
          align-items: center;
          gap: 13px;
          align-self: stretch;
          border-bottom: 1px solid #efefef;
        }

        .assessment-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .assessment-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          flex: 1 0 0;
        }

        .assessment-card-title {
          align-self: stretch;
          color: #00201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: -0.44px;
          margin: 0;
        }

        .assessment-card-description {
          color: #3f4946;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          margin: 0;
        }

        .assessment-progress-container {
          display: flex;
          padding: 16px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 21px;
          align-self: stretch;
          border-radius: 8px;
          background: #cde8e1;
        }

        .assessment-progress-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 12px;
          flex: 1 0 0;
        }

        .progress-title {
          align-self: stretch;
          color: #006b5f;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          margin: 0;
        }

        .progress-bar-wrapper {
          display: flex;
          height: 16px;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 64px;
          background: #e0e0e0;
        }

        .progress-bar-svg {
          width: 100%;
          height: 16px;
        }

        .progress-step {
          transform: rotate(0.11deg);
          align-self: stretch;
          color: #006b5f;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .assessment-question-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          align-self: stretch;
        }

        .question-title {
          align-self: stretch;
          color: #00201c;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: 0px;
          margin: 0;
        }

        .radio-options {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 7px;
          align-self: stretch;
        }

        .radio-label {
          color: #00201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          cursor: pointer;
        }

        .radio-button-container {
          display: flex;
          width: 48px;
          height: 48px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .radio-button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
        }

        .radio-button {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
        }

        .radio-container {
          display: flex;
          padding: 8px;
          justify-content: center;
          align-items: center;
        }

        .radio-state-layer {
          display: flex;
          padding: 8px;
          justify-content: center;
          align-items: center;
        }

        .radio-icon {
          width: 24px;
          height: 24px;
          position: relative;
        }

        .radio-inner-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .assessment-actions {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          align-self: flex-end;
        }

        .dashboard-btn {
          display: flex;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          border: 1px solid #bec9c6;
          background: #006a63;
          cursor: pointer;
          margin-left: 2vw;
        }

        .dashboard-btn .btn-content {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }

        .dashboard-btn .btn-text {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .previous-btn {
          display: flex;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background: #006a63;
          border: none;
          cursor: pointer;
        }

        .previous-btn .btn-content {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }

        .previous-btn .btn-text {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .submit-btn {
          display: flex;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background: #006a63;
          border: none;
          cursor: pointer;
          margin-left: 12px;
        }

        .submit-btn:hover {
          background: #218838;
        }

        .submit-btn:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }

        .submit-btn .btn-content {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }

        .submit-btn .btn-text {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .last-question-actions {
          display: flex;
          align-items: center;
          gap: 0;
        }

        @media (max-width: 768px) {
          .assessment-section {
            max-width: 100%;
            padding: 0 16px;
          }

          .assessment-card {
            padding: 16px 12px;
          }

          .assessment-card-header {
            height: auto;
            padding: 12px;
          }

          .assessment-progress-container {
            padding: 12px;
          }

          .assessment-actions {
            flex-direction: column;
            gap: 12px;
          }

          .dashboard-btn {
            margin-left: 0;
            width: 100%;
          }

          .last-question-actions {
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }

          .submit-btn {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
      <div className="assessment-section">
        <div className="assessment-header">
          <h1 className="assessment-title">Assessment</h1>
        </div>

        <div className="assessment-card">
          <div className="assessment-card-header">
            <div className="assessment-icon">
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0.5C18.6756 0.5 19.3416 0.5366 19.998 0.6098C20.233 0.635802 20.4605 0.707828 20.6676 0.821766C20.8748 0.935704 21.0574 1.08932 21.2052 1.27385C21.3529 1.45838 21.4629 1.6702 21.5288 1.89723C21.5947 2.12426 21.6152 2.36204 21.5892 2.597C21.5632 2.83196 21.4912 3.0595 21.3772 3.26663C21.2633 3.47375 21.1097 3.65641 20.9251 3.80416C20.7406 3.95192 20.5288 4.06188 20.3018 4.12778C20.0747 4.19367 19.837 4.2142 19.602 4.1882C16.6357 3.85636 13.6395 4.45449 11.028 5.89986C8.41649 7.34523 6.31864 9.56641 5.02464 12.2562C3.73064 14.9459 3.30444 17.9713 3.805 20.9138C4.30556 23.8564 5.70814 26.5707 7.81873 28.6813C9.92932 30.7919 12.6436 32.1944 15.5862 32.695C18.5287 33.1956 21.5541 32.7694 24.2438 31.4754C26.9336 30.1814 29.1548 28.0835 30.6001 25.472C32.0455 22.8605 32.6436 19.8643 32.3118 16.898C32.2858 16.663 32.3063 16.4253 32.3722 16.1982C32.4381 15.9712 32.5481 15.7594 32.6958 15.5749C32.9942 15.2022 33.4285 14.9633 33.903 14.9108C34.3775 14.8583 34.8535 14.9964 35.2261 15.2948C35.4107 15.4426 35.5643 15.6252 35.6782 15.8324C35.7922 16.0395 35.8642 16.267 35.8902 16.502C35.9622 17.1584 35.9988 17.8244 36 18.5C36 28.4414 27.9414 36.5 18 36.5C8.0586 36.5 0 28.4414 0 18.5C0 8.5586 8.0586 0.5 18 0.5ZM17.9424 11.0786C18.061 11.5407 17.9913 12.031 17.7487 12.4418C17.506 12.8525 17.1102 13.1501 16.6482 13.2692C15.379 13.6017 14.2741 14.3846 13.5397 15.4719C12.8053 16.5591 12.4916 17.8765 12.6571 19.1781C12.8226 20.4796 13.456 21.6765 14.4391 22.5454C15.4223 23.4143 16.688 23.8958 18 23.9C19.1975 23.9005 20.3613 23.5029 21.3082 22.7698C22.2551 22.0366 22.9314 21.0095 23.2308 19.85C23.3584 19.397 23.6583 19.0121 24.0663 18.7775C24.4742 18.543 24.9578 18.4775 25.4135 18.5952C25.8691 18.7129 26.2606 19.0043 26.5039 19.4071C26.7473 19.8098 26.8233 20.2919 26.7156 20.75C26.1634 22.8667 24.8595 24.7099 23.0475 25.9354C21.2355 27.1609 19.0392 27.6847 16.8692 27.4091C14.6991 27.1335 12.7036 26.0773 11.2554 24.4377C9.80726 22.7982 9.00553 20.6875 9 18.5C8.99969 16.5045 9.66258 14.5655 10.8844 12.9878C12.1063 11.4101 13.8179 10.2833 15.75 9.7844C15.9789 9.72539 16.2172 9.71206 16.4513 9.74517C16.6854 9.77828 16.9107 9.85718 17.1143 9.97736C17.3179 10.0975 17.4958 10.2567 17.6379 10.4456C17.78 10.6346 17.8834 10.8497 17.9424 11.0786ZM29.7072 0.7286C30.0357 0.864822 30.3166 1.09533 30.5142 1.39102C30.7119 1.68671 30.8175 2.03433 30.8178 2.39V3.684C30.8178 4.78857 31.7132 5.684 32.8178 5.684H34.11C34.466 5.68408 34.8139 5.78969 35.1098 5.98748C35.4058 6.18527 35.6364 6.46636 35.7726 6.79522C35.9088 7.12408 35.9445 7.48594 35.875 7.83506C35.8056 8.18417 35.6343 8.50487 35.3826 8.7566L29.016 15.116C28.6785 15.4536 28.2208 15.6433 27.7434 15.6434H24.2287C23.6981 15.6434 23.1893 15.8543 22.8141 16.2296L20.1096 18.9356C19.7718 19.2734 19.3138 19.4631 18.8361 19.4631C18.3584 19.4631 17.9004 19.2734 17.5626 18.9356C17.2248 18.5978 17.0351 18.1398 17.0351 17.6621C17.0351 17.1844 17.2248 16.7264 17.5626 16.3886L20.2682 13.6859C20.6438 13.3108 20.8548 12.8017 20.8548 12.2709V8.7548C20.8549 8.27745 21.0446 7.81969 21.3822 7.4822L27.7452 1.1174C27.9969 0.865521 28.3177 0.693965 28.6669 0.624436C29.0162 0.554908 29.3782 0.590531 29.7072 0.7268M27.2178 7.4822C27.2178 7.20603 26.8838 7.06782 26.6887 7.26323L24.8588 9.09548C24.6001 9.35451 24.4548 9.70562 24.4548 10.0717V10.2452C24.4548 11.2393 25.2607 12.0452 26.2548 12.0452H26.428C26.7943 12.0452 27.1455 11.8998 27.4046 11.6409L29.2364 9.81024C29.4313 9.61543 29.2934 9.2822 29.0178 9.2822C28.5404 9.2822 28.0826 9.09256 27.745 8.75499C27.4074 8.41743 27.2178 7.95959 27.2178 7.4822Z"
                  fill="url(#paint0_linear_1155_12602)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1155_12602"
                    x1="36"
                    y1="1.36801e-07"
                    x2="5.5"
                    y2="41.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#006B5F" />
                    <stop offset="1" stopColor="#57B9AE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="assessment-text">
              <h2 className="assessment-card-title">Take Your Assessments</h2>
              <p className="assessment-card-description">
                Help us understand you better. These quick assessments will
                personalize your care plan.
              </p>
            </div>
          </div>

          <div className="assessment-progress-container">
            <div className="assessment-progress-header">
              <h3 className="progress-title">You're just getting started – Let's kick off your Wellness Journey!</h3>
              <ProgressBar progress={Math.round((questionNumber / totalQuestions) * 100)} />
              <p className="progress-step">Question set {questionNumber} of {totalQuestions}</p>
            </div>

            <div className="assessment-question-section">
              <h3 className="question-title">
                {question}
              </h3>

              <div className="radio-options">
                {options.map((option, index) => (
                  <div key={index} className="radio-option">
                    <RadioButton
                      value={option}
                      checked={selectedOption === option}
                      onChange={setSelectedOption}
                      name={`assessment-question-${questionNumber}`}
                    />
                    <label className="radio-label">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="assessment-actions">
              <button
                type="button"
                className="dashboard-btn"
                onClick={() => onSectionChange?.("home")}
                // disabled={!selectedOption}
              >
                <div className="btn-content">
                  <span className="btn-text">Take Me to Dashboard</span>
                </div>
              </button>
              
              {/* Show Previous and Submit buttons side by side on last question */}
              {isLast && questionNumber > 1 ? (
                <div className="last-question-actions">
                  <button
                    type="button"
                    className="dashboard-btn previous-btn"
                    onClick={onPrevious}
                  >
                    <div className="btn-content">
                      <span className="btn-text">Previous Question</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="submit-btn"
                    onClick={() => onSubmit?.()}
                    disabled={!selectedOption}
                  >
                    <div className="btn-content">
                      <span className="btn-text">Submit</span>
                    </div>
                  </button>
                </div>
              ) : (
                <>
                  {/* Hide Previous button if on first question */}
                  {questionNumber > 1 && (
                    <button
                      type="button"
                      className="dashboard-btn previous-btn"
                      onClick={onPrevious}
                    >
                      <div className="btn-content">
                        <span className="btn-text">Previous Question</span>
                      </div>
                    </button>
                  )}
                  {/* Hide Next button if on last question */}
                  {!isLast && (
                    <button
                      type="button"
                      className="dashboard-btn"
                      onClick={onNext}
                      disabled={!selectedOption}
                    >
                      <div className="btn-content">
                        <span className="btn-text">Next Question</span>
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
