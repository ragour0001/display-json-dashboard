import React from 'react';

interface LearnMoreScreenProps {
  onBack: () => void;
}

export default function LearnMoreScreen({ onBack }: LearnMoreScreenProps) {
  return (
    <div className="learn-more-screen">
      {/* Back Button */}
      <div className="learn-more-header">
        <button className="learn-more-back-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#006B5F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="learn-more-content">
        {/* Header Section */}
        <div className="learn-more-hero">
          <h1 className="learn-more-title">Discover Yourself with Refill Health</h1>
        </div>

        {/* What is Discover Yourself Section */}
        <div className="discover-section">
          <h2 className="discover-subtitle">What is "Discover Yourself"?</h2>
          <p className="discover-description">
            "Discover Yourself" is a 3-step guided process to help us understand your goals, emotional needs, and 
            preferences — so we can tailor your mental health journey just for you.
          </p>
          
          <p className="discover-includes">It includes:</p>
          
          <div className="includes-list">
            <div className="include-item">
              <span className="include-number">1.</span>
              <span className="include-text">Setting Your Wellness Goals</span>
            </div>
            <div className="include-item">
              <span className="include-number">2.</span>
              <span className="include-text">Taking a Quick Assessment</span>
            </div>
            <div className="include-item">
              <span className="include-number">3.</span>
              <span className="include-text">Choosing Your Therapy Preferences</span>
            </div>
          </div>
        </div>

        {/* Step 1: Set Your Goals */}
        <div className="step-section">
          <div className="step-content">
            <h3 className="step-title">1. Set Your Goals</h3>
            <p className="step-description">
              Select up to 3 personal goals that best reflect what you want to work on.<br />
              These help us suggest relevant tools, content, and support.
            </p>
            <div className="step-time">
              <div className="time-indicator">
                <div className="green-dot"></div>
                <span>Takes less than a minute</span>
              </div>
            </div>
          </div>
          <div className="step-visual goals-visual">
            <div className="goal-pills">
              <div className="goal-pill orange">😌 Manage stress</div>
              <div className="goal-pill yellow">😟 Manage anxiety</div>
              <div className="goal-pill green">🧘 Feel calm</div>
            </div>
          </div>
        </div>

        {/* Step 2: Take the Assessment */}
        <div className="step-section">
          <div className="step-content">
            <h3 className="step-title">2. Take the Assessment</h3>
            <p className="step-description">
              Answer a few simple questions about how you're feeling.<br />
              This helps us:
            </p>
            <ul className="step-benefits">
              <li>Understand your current emotional state</li>
              <li>Provide personalized recommendations</li>
              <li>Track your progress over time</li>
            </ul>
            <div className="step-time">
              <div className="time-indicator">
                <div className="green-dot"></div>
                <span>Takes 3-4 minutes, scientifically designed</span>
              </div>
            </div>
          </div>
          <div className="step-visual assessment-visual">
            <div className="progress-circle">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#00C7B2"
                  strokeWidth="8"
                  strokeDasharray={`${76 * 3.14} ${(100 - 76) * 3.14}`}
                  strokeDashoffset="78.5"
                  transform="rotate(-90 60 60)"
                />
                <text x="60" y="70" textAnchor="middle" className="progress-text">76%</text>
              </svg>
            </div>
            <div className="progress-bars">
              <div className="mini-bar"></div>
              <div className="mini-bar"></div>
              <div className="mini-bar"></div>
            </div>
          </div>
        </div>

        {/* Step 3: Set Your Therapy Preferences */}
        <div className="step-section">
          <div className="step-content">
            <h3 className="step-title">3. Set Your Therapy Preferences</h3>
            <p className="step-description">
              Tell us about your comfort and preferences when it comes to therapy.<br />
              This helps us match you with the right therapist or coach.
            </p>
            <p className="step-preferences">Preferences include:</p>
            <ul className="step-benefits">
              <li>Language</li>
              <li>Gender of therapist</li>
              <li>Spiritual or cultural alignment</li>
              <li>Your main reasons for seeking therapy</li>
            </ul>
            <div className="step-time">
              <div className="time-indicator">
                <div className="green-dot"></div>
                <span>Flexible & can be updated anytime</span>
              </div>
            </div>
          </div>
          <div className="step-visual preferences-visual">
            <div className="preferences-card">
              <div className="preferences-header">
                <span>Therapy Preferences</span>
              </div>
              <div className="preferences-progress">
                <div className="progress-dots">
                  <div className="dot active"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="preferences-field">
                <label>Preferred language(s) for Therapy</label>
                <div className="select-field">
                  <span>Select from below</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="preferences-buttons">
                <button className="pref-btn exit">Exit</button>
                <button className="pref-btn back">Back</button>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="why-matters-section">
          <div className="why-matters-header">
            <h3 className="why-matters-title">Why It Matters?</h3>
            <div className="help-icon">?</div>
          </div>
          <div className="why-matters-content">
            <div className="matter-item">
              <span className="matter-number">1.</span>
              <span className="matter-text">Get your Free Personalized report</span>
            </div>
            <div className="matter-item">
              <span className="matter-number">2.</span>
              <span className="matter-text">Get matched with the right therapist and coach</span>
            </div>
            <div className="matter-item">
              <span className="matter-number">3.</span>
              <span className="matter-text">Unlock a personalized care plan designed just for you</span>
            </div>
            <div className="matter-item">
              <span className="matter-number">4.</span>
              <span className="matter-text">Get Personalized self-care Tools as per your needs</span>
            </div>
          </div>
        </div>

        {/* New Platform Section */}
        <div className="new-platform-section">
          <div className="platform-content">
            <div className="platform-text">
              <div className="platform-label">New Platform</div>
              <h3 className="platform-title">Get one of our Refill Health apps, which is only available on</h3>
              <div className="download-section">
                <p className="download-title">Download Apps:</p>
                <div className="download-buttons">
                  <img src="/assets/images/ios_image.png" alt="Download on App Store" className="download-btn" />
                  <img src="/assets/images/android_image.png" alt="Get it on Google Play" className="download-btn" />
                </div>
              </div>
            </div>
            <div className="platform-phones">
              <img src="/assets/images/mobile-img-first.png" alt="Phone 1" className="phone-img phone-1" />
              <img src="/assets/images/mobile-img-second.png" alt="Phone 2" className="phone-img phone-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 