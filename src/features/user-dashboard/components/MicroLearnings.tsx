"use client";

export default function MicroLearnings() {
  return (
    <>
      <style>{`
        .microlearning-page {
          display: flex;
          width: 100%;
          flex-direction: column;
          background: #fff;
          min-height: 100vh;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .microlearning-main-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          padding: 40px;
          gap: 32px;
          flex: 1;
        }

        .microlearning-header {
          display: flex;
          width: 510px;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }

        .welcome-section {
          display: flex;
          width: 500px;
          padding: 10px 10px 0px 0px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .welcome-title {
          color: #003a5d;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 0px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }

        .wellness-journey-banner {
          display: flex;
          height: 216px;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          align-self: stretch;
          border-radius: 16px;
        }

        .wellness-banner-content {
          display: flex;
          padding: 26px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          align-self: stretch;
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

        .progress-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          fill: #006b5f;
        }

        .wellness-title {
          align-self: stretch;
          color: #006b5f;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          display: flex;
          height: 22px;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          flex: 1 0 0;
        }

        .progress-section {
          display: flex;
          height: 56px;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          align-self: stretch;
        }

        .progress-indicator {
          display: flex;
          padding-right: 252px;
          align-items: center;
          gap: 8px;
          flex: 1 0 0;
          align-self: stretch;
          border-radius: 64px;
          background: #e0e0e0;
        }

        .progress-bar-svg {
          width: 100%;
          height: 20px;
        }

        .completion-status {
          align-self: stretch;
          color: #232323;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
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
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          background: none;
          border: none;
          cursor: pointer;
        }

        .assessment-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background: #eff5f3;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          color: #006a63;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }

        .micro-learnings-main-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          align-self: stretch;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .section-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: -0.44px;
        }

        .section-description {
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
        }

        .learning-cards-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          align-self: stretch;
        }

        .learning-card {
          display: flex;
          padding: 18px 16px;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          border-radius: 16px;
          border: 1px solid #e6e6e6;
          background: #fff;
        }

        .card-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          flex: 1 0 0;
        }

        .card-sub-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }

        .card-content-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        }

        .card-content-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          flex: 1 0 0;
        }

        .card-title-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          align-self: stretch;
        }

        .card-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .card-name {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          flex: 1 0 0;
        }

        .card-button {
          display: flex;
          width: 26px;
          height: 26px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .card-arrow-icon {
          width: 26px;
          height: 26px;
        }

        .card-tags-container {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          align-self: stretch;
        }

        .card-tags-sub-container {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          flex: 1 0 0;
        }

        .card-tag {
          display: flex;
          padding: 4px 8px;
          align-items: center;
          gap: 4px;
          border-radius: 4px;
          border: 1px solid #e6e6e6;
          background: #fff;
          color: #666;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }

        .card-tag-group {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .card-tag-read {
          display: flex;
          padding: 4px 8px;
          align-items: center;
          gap: 4px;
          border-radius: 4px;
          background: #f4f4f4;
          color: #666;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }

        .card-name-description {
          color: #999;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          align-self: stretch;
        }

        .card-actions-section {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        }

        .card-actions-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          flex: 1 0 0;
        }

        .take-look-button {
          display: flex;
          padding: 8px 16px;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          border: 1px solid #006b5f;
          background: #fff;
          color: #006b5f;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          cursor: pointer;
        }

        .take-assessment-button {
          display: flex;
          padding: 8px 16px;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          background: #006b5f;
          border: none;
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          cursor: pointer;
        }

        .new-platform-section {
          height: 350px;
          align-self: stretch;
          position: relative;
          border-radius: 10px;
          background: #f6f6f6;
        }

        .platform-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 350px;
        }

        .app-bg-layer {
          position: absolute;
          width: 403px;
          height: 350px;
          border-radius: 10px;
        }

        .app-bg-1 {
          left: 0px;
          background: linear-gradient(180deg, #e3e3e3 0%, rgba(237, 237, 237, 0) 100%);
        }

        .app-bg-2 {
          left: 97px;
          background: linear-gradient(180deg, #d1d1d1 0%, rgba(237, 237, 237, 0) 100%);
        }

        .app-bg-3 {
          left: 225px;
          background: linear-gradient(180deg, #cac7c7 0%, rgba(237, 237, 237, 0) 100%);
        }

        .app-bg-4 {
          left: 379px;
          background: linear-gradient(180deg, #bfbfbf 0%, rgba(237, 237, 237, 0) 100%);
        }

        .platform-text-content {
          display: flex;
          width: 415px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          padding: 56px 28px;
        }

        .new-platform-label {
          color: #5742a9;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
        }

        .platform-content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
        }

        .platform-main-title {
          width: 427px;
          color: #232323;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 130%;
          margin: 0;
        }

        .download-apps-label {
          color: #232323;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .app-store-button {
          height: 39px;
          flex-shrink: 0;
        }

        .google-play-button {
          height: 39px;
          flex-shrink: 0;
        }

        .store-button-image {
          height: 39px;
          width: auto;
        }

        .phone-mockups {
          display: flex;
          gap: 20px;
          position: relative;
        }

        .phone-left {
          z-index: 2;
        }

        .phone-right {
          z-index: 1;
        }

        .phone-mockup {
          width: 226px;
          height: 483px;
          border-radius: 10px;
          background: linear-gradient(135deg, #333 0%, #000 100%);
          padding: 4px;
          position: relative;
        }

        .phone-frame {
          width: 226px;
          height: 483px;
          border-radius: 10px;
          background: #1a1a1a;
          position: relative;
        }

        .phone-screen {
          position: absolute;
          left: 15px;
          top: 59px;
          width: 194px;
          height: 406px;
          border-radius: 10px;
          background: #fff;
          padding: 20px 15px;
          overflow: hidden;
        }

        .phone-content {
          padding: 15px;
          height: calc(100% - 80px);
          overflow: hidden;
        }

        .my-care-header {
          margin-bottom: 20px;
        }

        .my-care-title {
          color: #242e49;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 15px;
          letter-spacing: -0.12px;
        }

        .my-care-subtitle {
          color: #6c5ce7;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 8px;
          font-style: italic;
          font-weight: 400;
          line-height: 15px;
          letter-spacing: -0.08px;
        }

        .refill-logo {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 15px;
        }

        .logo-image {
          height: 28px;
          width: auto;
        }

        .schedule-content {
          height: calc(100% - 80px);
          overflow: hidden;
        }

        .today-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .today-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .today-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .blue-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #006b5f;
        }

        .today-text {
          font-size: 12px;
          font-weight: 600;
          color: #000;
        }

        .dropdown-arrow {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 2px;
        }

        .calendar-session {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }

        .calendar-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
        }

        .month-text {
          font-size: 10px;
          font-weight: 600;
          color: #666;
          margin-bottom: 5px;
        }

        .date-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #006b5f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .date-number {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }

        .session-details {
          flex: 1;
        }

        .session-time-action {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }

        .session-time {
          font-size: 12px;
          font-weight: 600;
          color: #000;
        }

        .join-now-btn {
          background: #006b5f;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 10px;
          font-weight: 500;
          cursor: pointer;
        }

        .session-duration {
          font-size: 10px;
          color: #666;
          margin-bottom: 8px;
        }

        .therapist-info {
          display: flex;
          align-items: center;
        }

        .therapist-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8px;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .therapist-details {
          display: flex;
          flex-direction: column;
        }

        .therapist-role {
          font-size: 9px;
          color: #666;
          margin-bottom: 2px;
        }

        .therapist-name {
          font-size: 11px;
          font-weight: 600;
          color: #000;
        }

        .additional-therapist {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-top: 1px solid #eee;
          margin-top: 10px;
        }

        .therapist-profile {
          display: flex;
          align-items: center;
        }

        .profile-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8px;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
        }

        .profile-role {
          font-size: 9px;
          color: #666;
        }

        .profile-name {
          font-size: 11px;
          font-weight: 600;
          color: #000;
        }

        .sessions-progress {
          text-align: right;
        }

        .sessions-text {
          font-size: 9px;
          color: #666;
          margin-bottom: 3px;
        }

        .schedule-next {
          font-size: 10px;
          color: #006b5f;
          font-weight: 500;
          cursor: pointer;
        }

        .confirmation-message {
          background: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 6px;
          padding: 8px;
          margin-top: 10px;
        }

        .confirmation-title {
          font-size: 10px;
          font-weight: 600;
          color: #0369a1;
          margin-bottom: 2px;
        }

        .confirmation-subtitle {
          font-size: 9px;
          color: #0369a1;
        }

        .refill-health-content {
          padding: 15px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .refill-logo-large {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-preview {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .microlearning-main-content {
            padding: 20px;
          }

          .microlearning-header,
          .welcome-section {
            width: 100%;
          }

          .card-title-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .card-actions-wrapper {
            flex-direction: column;
          }

          .new-platform-section {
            height: auto;
            padding: 20px;
          }

          .platform-text-content {
            width: 100%;
            padding: 20px;
          }

          .platform-main-title {
            width: 100%;
            font-size: 24px;
          }

          .phone-mockups {
            flex-direction: column;
            gap: 10px;
          }

          .phone-mockup {
            width: 180px;
            height: 380px;
          }
        }
      `}</style>
      <div className="microlearning-page">
      <div className="microlearning-main-content">
        {/* Welcome Header */}
        <div className="microlearning-header">
          <div className="welcome-section">
            <div className="welcome-title">
              Hi, Imdad. Here's what you can learn today
            </div>
          </div>
        </div>

        {/* Progress Banner */}
        <div className="wellness-journey-banner">
          <div className="wellness-banner-content">
            <div className="wellness-header">
              <svg
                className="progress-icon"
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
              <div className="wellness-title">
                You're just getting started – Let's kick off your Wellness
                Journey!
              </div>
            </div>
            <div className="progress-section">
              <div className="progress-indicator">
                <svg
                  width="1051"
                  height="20"
                  viewBox="0 0 1051 20"
                  fill="none"
                  className="progress-bar-svg"
                >
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
              <button className="assessment-btn">
                Complete your Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Micro Learnings Section */}
        <div className="micro-learnings-main-section">
          <div className="section-header">
            <div className="section-title">Micro Learnings</div>
            <div className="section-description">
              short reads designed to support your well-being. Complete your
              assessment to get personalized suggestions.
            </div>
          </div>

          <div className="learning-cards-container">
            {/* Card 1: What is Microlearning? */}
            <div className="learning-card">
              <div className="card-container">
                <div className="card-sub-container">
                  <div className="card-content-wrapper">
                    <div className="card-content-section">
                      <div className="card-title-wrapper">
                        <div className="card-title-row">
                          <div className="card-name">
                            What is Microlearning?
                          </div>
                          <div className="card-button">
                            <svg
                              className="card-arrow-icon"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                            >
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
                            <div className="card-tag">Beginner</div>
                            <div className="card-tag-group">
                              <div className="card-tag">Overview</div>
                              <div className="card-tag-read">2-min read</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-name-description">
                        Microlearning offers quick, focused reads to help you
                        manage mental health one step at a time.
                      </div>
                    </div>
                  </div>
                  <div className="card-actions-section">
                    <div className="card-actions-wrapper">
                      <button className="take-look-button">Take a Look</button>
                      <button className="take-assessment-button">
                        Take assessment to Personalize
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Why Short Reads Help */}
            <div className="learning-card">
              <div className="card-container">
                <div className="card-sub-container">
                  <div className="card-content-wrapper">
                    <div className="card-content-section">
                      <div className="card-title-wrapper">
                        <div className="card-title-row">
                          <div className="card-name">Why Short Reads Help</div>
                          <div className="card-button">
                            <svg
                              className="card-arrow-icon"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                            >
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
                            <div className="card-tag">Beginner</div>
                            <div className="card-tag-group">
                              <div className="card-tag">Motivation</div>
                              <div className="card-tag-read">2-min read</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-name-description">
                        Learn how bite-sized articles reduce overwhelm and help
                        you make steady progress.
                      </div>
                    </div>
                  </div>
                  <div className="card-actions-section">
                    <div className="card-actions-wrapper">
                      <button className="take-look-button">Take a Look</button>
                      <button className="take-assessment-button">
                        Take assessment to Personalize
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Personalize Your Learning */}
            <div className="learning-card">
              <div className="card-container">
                <div className="card-sub-container">
                  <div className="card-content-wrapper">
                    <div className="card-content-section">
                      <div className="card-title-wrapper">
                        <div className="card-title-row">
                          <div className="card-name">
                            Personalize Your Learning
                          </div>
                          <div className="card-button">
                            <svg
                              className="card-arrow-icon"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                            >
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
                            <div className="card-tag">Interactive</div>
                            <div className="card-tag-group">
                              <div className="card-tag">Overview</div>
                              <div className="card-tag-read">2-min read</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-name-description">
                        Get tailored recommendations by taking a short
                        assessment.
                      </div>
                    </div>
                  </div>
                  <div className="card-actions-section">
                    <div className="card-actions-wrapper">
                      <button className="take-look-button">Take a Look</button>
                      <button className="take-assessment-button">
                        Take assessment to Personalize
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Platform Section */}
        <div className="new-platform-section">
          <div className="platform-background">
            {/* Background layers for visual effect */}
            <div className="app-bg-layer app-bg-1"></div>
            <div className="app-bg-layer app-bg-2"></div>
            <div className="app-bg-layer app-bg-3"></div>
            <div className="app-bg-layer app-bg-4"></div>
          </div>

          <div className="platform-content">
            <div className="platform-text-content">
              <div className="new-platform-label">New Platform</div>
              <div className="platform-content-wrapper">
                <div className="platform-main-title">
                  Get one of our Refill Health apps, which is only available on
                </div>
                <div className="download-section">
                  <div className="download-apps-label">Download Apps:</div>
                  <div className="store-buttons">
                    <div className="app-store-button">
                      <img
                        src="/api/placeholder/118/39"
                        alt="Download on App Store"
                        className="store-button-image"
                      />
                    </div>
                    <div className="google-play-button">
                      <img
                        src="/api/placeholder/132/39"
                        alt="Get it on Google Play"
                        className="store-button-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="phone-mockups">
              {/* Left Phone */}
              <div className="phone-mockup phone-left">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="phone-content">
                      {/* My Care Header */}
                      <div className="my-care-header">
                        <div className="my-care-title">My Care</div>
                        <div className="my-care-subtitle">
                          Find the right support to guide your journey.
                        </div>
                      </div>

                      {/* Logo */}
                      <div className="refill-logo">
                        <img
                          src="/api/placeholder/70/28"
                          alt="Refill Health"
                          className="logo-image"
                        />
                      </div>

                      {/* Schedule Content */}
                      <div className="schedule-content">
                        {/* Today Section */}
                        <div className="today-section">
                          <div className="today-header">
                            <div className="today-indicator">
                              <div className="blue-dot"></div>
                              <span className="today-text">Today (2)</span>
                            </div>
                            <div className="dropdown-arrow">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <circle
                                  cx="12.5312"
                                  cy="12"
                                  r="11.5"
                                  fill="white"
                                  stroke="#EAEAEA"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Calendar and Session */}
                          <div className="calendar-session">
                            <div className="calendar-sidebar">
                              <div className="month-text">NOV</div>
                              <div className="date-circle">
                                <span className="date-number">25</span>
                              </div>
                            </div>

                            <div className="session-details">
                              <div className="session-time-action">
                                <span className="session-time">
                                  10:00 - 10:30 AM
                                </span>
                                <button className="join-now-btn">
                                  Join Now
                                </button>
                              </div>
                              <div className="session-duration">
                                30 min session
                              </div>
                              <div className="therapist-info">
                                <div className="therapist-avatar">
                                  <img
                                    src="/api/placeholder/32/32"
                                    alt="Therapist"
                                    className="avatar-image"
                                  />
                                </div>
                                <div className="therapist-details">
                                  <div className="therapist-role">
                                    Therapist
                                  </div>
                                  <div className="therapist-name">
                                    Mridhula Sharma
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Additional Therapist */}
                          <div className="additional-therapist">
                            <div className="therapist-profile">
                              <div className="profile-avatar">
                                <img
                                  src="/api/placeholder/32/32"
                                  alt="Therapist"
                                  className="avatar-image"
                                />
                              </div>
                              <div className="profile-details">
                                <div className="profile-role">Therapist</div>
                                <div className="profile-name">Riya Agarwal</div>
                              </div>
                            </div>
                            <div className="sessions-progress">
                              <div className="sessions-text">
                                2 of 5 sessions booked.
                              </div>
                              <div className="schedule-next">Schedule Next</div>
                            </div>
                          </div>

                          {/* Confirmation Message */}
                          <div className="confirmation-message">
                            <div className="confirmation-title">
                              Your booking is confirmed.
                            </div>
                            <div className="confirmation-subtitle">
                              Your request has been accepted by the Therapist.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="phone-mockup phone-right">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="refill-health-content">
                      <div className="refill-logo-large">
                        <img
                          src="/api/placeholder/183/391"
                          alt="Refill Health App"
                          className="app-preview"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  </div>
        </div>
      </div>
    </>
  );
}
