"use client";

import React from "react";

interface WellnessJourneyBannerProps {}

const WellnessJourneyBanner: React.FC<WellnessJourneyBannerProps> = () => {
  return (
    <div className="wellness-journey-banner">
      <div className="wellness-banner-content">
        <div className="wellness-header">
          <svg
            className="wellness-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0C12.4504 0 12.8944 0.0244001 13.332 0.0732001C13.4886 0.0905346 13.6403 0.138552 13.7784 0.214511C13.9165 0.290469 14.0383 0.392882 14.1368 0.515901C14.2353 0.63892 14.3086 0.780137 14.3525 0.931487C14.3964 1.08284 14.4101 1.24136 14.3928 1.398C14.3755 1.55464 14.3274 1.70633 14.2515 1.84442C14.1755 1.9825 14.0731 2.10427 13.9501 2.20278C13.8271 2.30128 13.6859 2.37459 13.5345 2.41852C13.3832 2.46245 13.2246 2.47613 13.068 2.4588C11.0905 2.23757 9.09303 2.63633 7.35201 3.59991C5.61099 4.56349 4.21243 6.04427 3.34976 7.83744C2.48709 9.6306 2.20296 11.6475 2.53667 13.6092C2.87038 15.5709 3.80543 17.3805 5.21249 18.7875C6.61955 20.1946 8.42907 21.1296 10.3908 21.4633C12.3525 21.797 14.3694 21.5129 16.1626 20.6502C17.9557 19.7876 19.4365 18.389 20.4001 16.648C21.3637 14.907 21.7624 12.9095 21.5412 10.932C21.5239 10.7754 21.5376 10.6168 21.5815 10.4655C21.6254 10.3141 21.6987 10.1729 21.7972 10.0499C21.9962 9.80145 22.2857 9.64221 22.602 9.6072C22.9184 9.57219 23.2357 9.66429 23.4841 9.86322C23.6071 9.96173 23.7095 10.0835 23.7855 10.2216C23.8615 10.3597 23.9095 10.5114 23.9268 10.668C23.9748 11.1056 23.9992 11.5496 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM11.9616 7.0524C12.0407 7.36047 11.9942 7.68733 11.8325 7.96117C11.6707 8.23501 11.4068 8.43342 11.0988 8.5128C10.2526 8.73445 9.51604 9.2564 9.02645 9.98125C8.53685 10.7061 8.3277 11.5843 8.43804 12.452C8.54838 13.3198 8.97066 14.1177 9.62609 14.6969C10.2815 15.2762 11.1253 15.5972 12 15.6C12.7984 15.6003 13.5742 15.3353 14.2055 14.8465C14.8367 14.3578 15.2876 13.673 15.4872 12.9C15.5723 12.598 15.7722 12.3414 16.0442 12.185C16.3162 12.0287 16.6386 11.985 16.9423 12.0635C17.2461 12.1419 17.507 12.3362 17.6693 12.6047C17.8316 12.8732 17.8822 13.1946 17.8104 13.5C17.4423 14.9111 16.573 16.1399 15.365 16.9569C14.157 17.7739 12.6928 18.1231 11.2461 17.9394C9.79939 17.7557 8.46904 17.0515 7.50361 15.9585C6.53817 14.8655 6.00368 13.4583 6 12C5.99979 10.6697 6.44172 9.37699 7.2563 8.32521C8.07088 7.27342 9.21191 6.52218 10.5 6.1896C10.6526 6.15026 10.8115 6.14138 10.9676 6.16345C11.1236 6.18552 11.2738 6.23812 11.4095 6.31824C11.5452 6.39836 11.6639 6.50444 11.7586 6.6304C11.8533 6.75637 11.9223 6.89977 11.9616 7.0524ZM19.8048 0.1524C20.0238 0.243215 20.2111 0.396884 20.3428 0.594011C20.4746 0.791138 20.545 1.02289 20.5452 1.26C20.5452 2.47216 21.5278 3.456 22.74 3.456C22.9773 3.45605 23.2093 3.52646 23.4066 3.65832C23.6038 3.79018 23.7576 3.97757 23.8484 4.19681C23.9392 4.41605 23.963 4.65729 23.9167 4.89004C23.8704 5.12278 23.7562 5.33658 23.5884 5.5044L19.344 9.744C19.119 9.96906 18.8138 10.0955 18.4956 10.0956C16.6416 10.0956 14.8637 10.8323 13.5531 12.1437L13.4064 12.2904C13.1812 12.5156 12.8758 12.6421 12.5574 12.6421C12.239 12.6421 11.9336 12.5156 11.7084 12.2904C11.4832 12.0652 11.3567 11.7598 11.3567 11.4414C11.3567 11.123 11.4832 10.8176 11.7084 10.5924L11.8537 10.4472C13.1659 9.13649 13.9032 7.35788 13.9032 5.5032C13.9033 5.18497 14.0297 4.87979 14.2548 4.6548L18.4968 0.4116C18.6646 0.243681 18.8785 0.12931 19.1113 0.0829577C19.3441 0.0366053 19.5855 0.0603541 19.8048 0.1512M18.1452 4.6548C18.1452 4.47069 17.9225 4.37855 17.7924 4.50882L16.5725 5.73032C16.4001 5.90301 16.3032 6.13708 16.3032 6.38114V6.49682C16.3032 7.15955 16.8405 7.6968 17.5032 7.6968H17.6187C17.8628 7.6968 18.097 7.59985 18.2697 7.42726L19.4909 6.20682C19.6209 6.07696 19.5289 5.8548 19.3452 5.8548C19.0269 5.8548 18.7217 5.72837 18.4967 5.50333C18.2716 5.27828 18.1452 4.97306 18.1452 4.6548Z"
              fill="#006B5F"
            />
          </svg>
          <h2 className="wellness-title">
            You're just getting started – Let's kick off your Wellness Journey!
          </h2>
        </div>

        <div className="progress-section">
          <div className="progress-indicator">
            <svg width="1051" height="20" viewBox="0 0 1051 20" fill="none">
              <rect width="1051" height="20" rx="10" fill="#E0E0E0" />
              <circle cx="39" cy="10" r="2" fill="#A8A8A8" />
              <circle cx="179" cy="10" r="2" fill="#A8A8A8" />
              <circle cx="345" cy="10" r="2" fill="#A8A8A8" />
              <circle cx="588" cy="10" r="2" fill="#A8A8A8" />
            </svg>
          </div>
          <div className="completion-status">0% Completed</div>
        </div>

        <div className="banner-actions">
          <button className="faq-link">Take me to FAQ</button>
          <button className="assessment-btn">Complete your Assessment</button>
        </div>
      </div>
    </div>
  );
};

interface TherapistMatchingCardProps {}

const TherapistMatchingCard: React.FC<TherapistMatchingCardProps> = () => {
  return (
    <div className="therapist-matching-card">
      <div className="matching-card-content">
        <div className="matching-header">
          <svg
            className="cognition-icon"
            width="39"
            height="40"
            viewBox="0 0 39 40"
            fill="none"
          >
            <path
              d="M9.45 24.55C10.4167 25.5167 11.6 26 13 26C14.4 26 15.5833 25.5167 16.55 24.55L24.55 16.55C25.5167 15.5833 26 14.4 26 13C26 11.6 25.5167 10.4167 24.55 9.45C23.5833 8.48333 22.4 8 21 8C19.6 8 18.4167 8.48333 17.45 9.45C16.2167 9.01667 15 8.91667 13.8 9.15C12.6 9.38333 11.5833 9.91667 10.75 10.75C9.91667 11.5833 9.38333 12.6 9.15 13.8C8.91667 15 9.01667 16.2167 9.45 17.45C8.48333 18.4167 8 19.6 8 21C8 22.4 8.48333 23.5833 9.45 24.55ZM6 40V31.4C4.1 29.6667 2.625 27.6417 1.575 25.325C0.525 23.0083 0 20.5667 0 18C0 13 1.75 8.75 5.25 5.25C8.75 1.75 13 0 18 0C22.1667 0 25.8583 1.225 29.075 3.675C32.2917 6.125 34.3833 9.31667 35.35 13.25L38.1 24.15C38.2333 24.6167 38.15 25.0417 37.85 25.425C37.55 25.8083 37.15 26 36.65 26H32V33C32 33.825 31.7063 34.5312 31.119 35.1185C30.5313 35.7062 29.825 36 29 36H24V40H21V33H29V23H34.7L32.45 14C31.65 10.7667 29.9 8.125 27.2 6.075C24.5 4.025 21.4333 3 18 3C13.8333 3 10.2917 4.44167 7.375 7.325C4.45833 10.2083 3 13.7257 3 17.877C3 20.0243 3.43867 22.0642 4.316 23.9965C5.19367 25.9292 6.43833 27.647 8.05 29.15L9 30.05V40H6Z"
              fill="#006B5F"
            />
          </svg>
          <div className="matching-text">
            <h3 className="matching-title">
              Complete Your Assessment for Better match with therapist/coach
            </h3>
            <p className="matching-subtitle">
              We'll provide you a customized routine & therapist for you
            </p>
          </div>
        </div>
        <div className="mycare-plan-button-container">
          <button className="start-now-btn">Start Now</button>
        </div>
      </div>
    </div>
  );
};

interface CarePlanSectionProps {}

const CarePlanSection: React.FC<CarePlanSectionProps> = () => {
  return (
    <div className="care-plan-section">
      <div className="care-plan-header">
        <h2 className="care-plan-title">Your Care Plan is Almost Ready</h2>
        <p className="care-plan-description">
          To get personalized self-care actions, complete your first assessment.
          <br />
          Your plan will be generated based on your mental health goals and responses.
        </p>
      </div>

      <div className="care-plan-cards">
        <div className="unlock-plan-card">
          <div className="card-overlay">
            <svg
              className="lock-icon"
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
            >
              <path
                d="M3.4974 30.416C2.71823 30.416 2.05122 30.1386 1.49635 29.5837C0.941493 29.0289 0.664062 28.3618 0.664062 27.5827V13.416C0.664062 12.6368 0.941493 11.9698 1.49635 11.415C2.05122 10.8601 2.71823 10.5827 3.4974 10.5827H4.91406V7.74935C4.91406 5.78963 5.60469 4.11914 6.98594 2.73789C8.36719 1.35664 10.0377 0.666016 11.9974 0.666016C13.9571 0.666016 15.6276 1.35664 17.0089 2.73789C18.3901 4.11914 19.0807 5.78963 19.0807 7.74935V10.5827H20.4974C21.2766 10.5827 21.9436 10.8601 22.4984 11.415C23.0533 11.9698 23.3307 12.6368 23.3307 13.416V27.5827C23.3307 28.3618 23.0533 29.0289 22.4984 29.5837C21.9436 30.1386 21.2766 30.416 20.4974 30.416H3.4974ZM11.9974 23.3327C12.7766 23.3327 13.4436 23.0553 13.9984 22.5004C14.5533 21.9455 14.8307 21.2785 14.8307 20.4993C14.8307 19.7202 14.5533 19.0532 13.9984 18.4983C13.4436 17.9434 12.7766 17.666 11.9974 17.666C11.2182 17.666 10.5512 17.9434 9.99636 18.4983C9.44149 19.0532 9.16406 19.7202 9.16406 20.4993C9.16406 21.2785 9.44149 21.9455 9.99636 22.5004C10.5512 23.0553 11.2182 23.3327 11.9974 23.3327ZM7.7474 10.5827H16.2474V7.74935C16.2474 6.56879 15.8342 5.56532 15.0078 4.73893C14.1814 3.91254 13.178 3.49935 11.9974 3.49935C10.8168 3.49935 9.81337 3.91254 8.98698 4.73893C8.16059 5.56532 7.7474 6.56879 7.7474 7.74935V10.5827Z"
                fill="white"
              />
            </svg>
            <div className="unlock-content">
              <h3 className="unlock-title">
                Unlock your Personalized care plan
              </h3>
              <p className="unlock-subtitle">
                Take a quick assessment to unlock your Care Plan
              </p>
              <button className="complete-assessment-btn">
                Complete Assessment
              </button>
            </div>
          </div>
        </div>

        <div className="referral-card">
          <div className="referral-overlay">
            <div className="referral-header">
              <div className="referral-content">
                <span className="referral-label">Referral</span>
                <h3 className="referral-title">
                  Help a friend, We'll help take care of them!
                </h3>
              </div>
              <div className="referral-icon">
                <img                
                  src="/assets/images/hand_shake_image.png" 
                  alt="Handshake"
                  // className="positive-img"
                />
               
                {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="#FFD700" />
                </svg> */}
              </div>
            </div>
            <div className="referral-code-section">
              <div className="code-info">
                <span className="code-label">Copy code</span>
                <div className="code-display">
                  <svg
                    className="copy-icon"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M16.875 3.25H6.875C6.70924 3.25 6.55027 3.31585 6.43306 3.43306C6.31585 3.55027 6.25 3.70924 6.25 3.875V7H3.125C2.95924 7 2.80027 7.06585 2.68306 7.18306C2.56585 7.30027 2.5 7.45924 2.5 7.625V17.625C2.5 17.7908 2.56585 17.9497 2.68306 18.0669C2.80027 18.1842 2.95924 18.25 3.125 18.25H13.125C13.2908 18.25 13.4497 18.1842 13.5669 18.0669C13.6842 17.9497 13.75 17.7908 13.75 17.625V14.5H16.875C17.0408 14.5 17.1997 14.4342 17.3169 14.3169C17.4342 14.1997 17.5 14.0408 17.5 13.875V3.875C17.5 3.70924 17.4342 3.55027 17.3169 3.43306C17.1997 3.31585 17.0408 3.25 16.875 3.25ZM12.5 17H3.75V8.25H12.5V17ZM16.25 13.25H13.75V7.625C13.75 7.45924 13.6842 7.30027 13.5669 7.18306C13.4497 7.06585 13.2908 7 13.125 7H7.5V4.5H16.25V13.25Z"
                      fill="black"
                    />
                  </svg>
                  <span className="code-text">C232DF</span>
                </div>
              </div>
              <button className="share-invite-btn">Share Invite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NewPlatformSectionProps {}

const NewPlatformSection: React.FC<NewPlatformSectionProps> = () => {
  return (
    <div className="new-platform-section">
      <div className="platform-content">
        <div className="platform-text">
          <span className="platform-label">New Platform</span>
          <h2 className="platform-title">
            Get one of our Refill Health apps, which is only available on
          </h2>
          <div className="download-section">
            <span className="download-label">Download Apps:</span>
            <div className="store-buttons">
              <img
                src="/app-store-badge.png"
                alt="Download on App Store"
                className="store-badge"
              />
              <img
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                className="store-badge"
              />
            </div>
          </div>
        </div>

        <div className="phone-showcase">
          <div className="phone-backgrounds">
            <div className="phone-bg phone-bg-1"></div>
            <div className="phone-bg phone-bg-2"></div>
            <div className="phone-bg phone-bg-3"></div>
            <div className="phone-bg phone-bg-4"></div>
          </div>

          <div className="main-phone">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="app-header">
                  <div className="app-logo">
                    <span className="app-title">My Care</span>
                    <span className="app-subtitle">
                      Find the right support to guide your journey.
                    </span>
                  </div>
                </div>

                <div className="today-section">
                  <div className="today-header">
                    <div className="today-indicator">
                      <div className="blue-dot"></div>
                      <span>Today (2)</span>
                    </div>
                    <div className="expand-arrow">↓</div>
                  </div>

                  <div className="session-timeline">
                    <div className="session-entry">
                      <div className="session-time">
                        <span className="month">NOV</span>
                        <div className="date-circle">25</div>
                      </div>
                      <div className="session-card">
                        <div className="session-header">
                          <span className="session-time-range">
                            10:00 - 10:30 AM
                          </span>
                          <button className="join-btn">Join Now</button>
                        </div>
                        <span className="session-duration">30 min session</span>
                        <div className="therapist-info">
                          <div className="therapist-avatar"></div>
                          <div className="therapist-details">
                            <span className="therapist-role">Therapist</span>
                            <span className="therapist-name">
                              Mridhula Sharma
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="booking-confirmation">
                    <div className="confirmation-content">
                      <span className="confirmation-title">
                        Your booking is confirmed.
                      </span>
                      <span className="confirmation-subtitle">
                        Your request has been accepted by the Therapist.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="secondary-phone">
            <div className="phone-frame-secondary">
              <div className="phone-screen-secondary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MyCarePlan() {
  return (
    <>
      <style>{`
        .my-care-plan {
          display: flex;
          width: 100%;
          min-height: 100vh;
          flex-direction: column;
          align-items: center;
          background: #fff;
        }

        .my-care-plan-content {
          display: flex;
          width: 1123px;
          max-width: calc(100% - 80px);
          padding: 40px 0 0 0px;
          flex-direction: column;
          align-items: flex-start;
          gap: 35px;
        }

        .wellness-journey-banner {
          width: 100%;
          border-radius: 16px;
        }

        .wellness-banner-content {
          display: flex;
          padding: 26px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          border-radius: 8px;
          border: 1px solid #e94545;
          background: #fff6f6;
        }

        .wellness-header {
          display: flex;
          align-items: center;
          gap: 12px;
          align-self: stretch;
        }

        .wellness-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .wellness-title {
          flex: 1;
          color: #006b5f;
          font-family: Inter, sans-serif;
          
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          margin: 0;
        }

        .progress-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          align-self: stretch;
        }

        .progress-indicator {
          width: 100%;
          max-width: 100%;
        }

        .progress-indicator svg {
          width: 100%;
          height: 20px;
        }

        .completion-status {
          color: #232323;
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 110%;
          letter-spacing: -0.5px;
        }

        .banner-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .faq-link {
          color: #006b5f;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .faq-link:hover {
          text-decoration: underline;
        }

        .assessment-btn {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          background: #eff5f3;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 3px 0px 0px rgba(0, 0, 0, 0.15);
          color: #006a63;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          border: none;
          cursor: pointer;
        }

        .assessment-btn:hover {
          background: #e3f1ee;
          transform: translateY(-1px);
        }

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

        .matching-card-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          gap: 26px;
          align-self: stretch;
        }

        .matching-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        }

        .cognition-icon {
          width: 39px;
          height: 40px;
          flex-shrink: 0;
        }

        .matching-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .matching-title {
          color: #006b5f;
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          margin: 0;
        }

        .matching-subtitle {
          color: #171d1b;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.15px;
          margin: 0;
        }

        .mycare-plan-button-container {
          display: flex;
          justify-content: flex-end;
          align-self: stretch;
        }

        .start-now-btn {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          background: #eff5f3;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          color: #006a63;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          border: none;
          cursor: pointer;
        }

        .start-now-btn:hover {
          background: #e3f1ee;
          transform: translateY(-1px);
        }

        .care-plan-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
          align-self: stretch;
        }

        .care-plan-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
          align-self: stretch;
        }

        .care-plan-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
        }

        .care-plan-description {
          color: #171d1b;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.15px;
          margin: 0;
          max-width: 600px;
        }

        .care-plan-cards {
          display: flex;
          align-items: flex-start;
          align-content: flex-start;
          gap: 30px;
          flex-wrap: wrap;
        }

        .unlock-plan-card,
        .referral-card {
          width: 486px;
          height: 229px;
          border-radius: 16px;
          border: 1px solid #e5e7e9;
          position: relative;
          overflow: hidden;
        }

        .unlock-plan-card {
          background: #101340;
        }

        .referral-card {
          background: #ff7e1d;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4.75px);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 48px;
        }

        .lock-icon {
          width: 24px;
          height: 31px;
          fill: #fff;
          margin-bottom: 15px;
        }

        .unlock-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          text-align: center;
        }

        .unlock-title {
          color: #f4fbf8;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          font-weight: 500;
          line-height: 28px;
          margin: 0;
        }

        .unlock-subtitle {
          color: #f4fbf8;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.15px;
          margin: 0;
        }

        .complete-assessment-btn {
          display: flex;
          width: 232px;
          height: 40px;
          padding: 0px 12px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background: #fff;
          border: none;
          cursor: pointer;
          color: #00201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .complete-assessment-btn:hover {
          background: #f0f0f0;
        }

        .referral-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 26px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .referral-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .referral-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .referral-label {
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
        }

        .referral-title {
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 140%;
          margin: 0;
          max-width: 250px;
        }

        .referral-icon img {
          width: 48px;
          height: 48px;
          border-radius: 12px;
        }

        .referral-code-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .code-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .code-label {
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
        }

        .code-display {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .copy-icon {
          width: 20px;
          height: 21px;
        }

        .code-text {
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
        }

        .share-invite-btn {
          display: flex;
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background: #fff;
          border: none;
          cursor: pointer;
          color: #ff7e1d;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
        }

        .share-invite-btn:hover {
          background: #f0f0f0;
        }

        .new-platform-section {
          display: flex;
          padding: 32px;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          align-self: stretch;
          border-radius: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .platform-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .platform-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .platform-label {
          color: rgba(255, 255, 255, 0.8);
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .platform-title {
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
          max-width: 600px;
        }

        .download-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .download-label {
          color: rgba(255, 255, 255, 0.9);
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }

        .store-buttons {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .store-badge {
          height: 48px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .store-badge:hover {
          transform: scale(1.05);
        }
      `}</style>
      <main className="my-care-plan">
      <div className="my-care-plan-content">
        <WellnessJourneyBanner />
        <TherapistMatchingCard />
        <CarePlanSection />
        <NewPlatformSection />
      </div>
    </main>
    </>
  );
}
