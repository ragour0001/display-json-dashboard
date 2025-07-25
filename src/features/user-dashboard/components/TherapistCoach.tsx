"use client";

import React, { useState } from "react";
import DynamicContentRenderer from './DynamicContentRenderer';
import './DynamicContentRenderer.css';

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <>
      <style>{`
        .filter-chip {
          display: flex;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid #bec9c6;
          background: #fff;
        }

        .filter-chip-label {
          color: #3f4947;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          padding: 6px 8px 6px 12px;
        }

        .filter-chip-remove {
          width: 18px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 8px 6px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <div className="filter-chip">
        <span className="filter-chip-label">{label}</span>
        <button className="filter-chip-remove" onClick={onRemove}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1.8 11.248L0.75 10.198L4.95 5.99805L0.75 1.79805L1.8 0.748047L6 4.94805L10.2 0.748047L11.25 1.79805L7.05 5.99805L11.25 10.198L10.2 11.248L6 7.04805L1.8 11.248Z"
              fill="#3F4947"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

interface TherapistCardProps {
  name: string;
  title: string;
  rating: number;
  specializations: string[];
  sessionTime: string;
  sessionDay: string;
  imageUrl: string;
}

function getBookingUrl(name: string) {
  // Remove common titles
  const cleanName = name.replace(/^(Dr\\.|Mr\\.|Ms\\.|Mrs\\.)\\s+/i, "");
  // Split into parts
  const parts = cleanName.trim().split(" ");
  // Use first and last name (if more than 2 parts, use first and last)
  const firstName = parts[1];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
  // Format for URL
  const urlName = [firstName, lastName].filter(Boolean).join("+");
  // Generate email (using last name, lowercased)
  const email = firstName ? `${firstName.toLowerCase()}@refillhealth.com` : "";
  // Construct URL
  return `https://bookings.refillhealth.com/sreeja/therapy-session?name=${urlName}&email=${encodeURIComponent(email)}`;
}

function BookingModal({ open, onClose, url }: { open: boolean; onClose: () => void; url: string }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        width: '800px',
        height: '80vh',
        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 12,
          right: 16,
          background: 'transparent',
          border: 'none',
          fontSize: 24,
          cursor: 'pointer',
          zIndex: 2,
        }}>&times;</button>
        <iframe
          src={url}
          title="Book Now"
          style={{ flex: 1, width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
        />
      </div>
    </div>
  );
}

function UpcomingSessionDetails() {
  return (
    <>
      <style>{`
        .upcoming-session-card {
          display: flex;
          padding: 26px 34px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          border-radius: 10px;
          background: linear-gradient(94deg, #006b5f -2.3%, #11b5a3 98.42%);
        }

        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .therapist-session-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .session-therapist-avatar {
          width: 78px;
          height: 78px;
          border-radius: 12px;
          object-fit: cover;
        }

        .session-therapist-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .session-therapist-name {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
          letter-spacing: -0.32px;
          margin: 0;
        }

        .session-description {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.16px;
          margin: 0;
        }

        .session-actions {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .reschedule-btn {
          display: flex;
          height: 44px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 4px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: 0.8px;
          text-transform: capitalize;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .reschedule-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .join-now-btn {
          display: flex;
          height: 44px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 4px;
          border-radius: 8px;
          background: #fff;
          border: none;
          color: #006b5f;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: 0.8px;
          text-transform: capitalize;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .join-now-btn:hover {
          background: #f0f0f0;
        }

        .session-separator {
          width: 100%;
          height: 1px;
          background: #e9eff2;
          margin: 12px 0;
        }

        .session-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 45px;
          width: 100%;
        }

        .session-time-section {
          display: flex;
          align-items: flex-start;
          gap: 45px;
          color: #54577a;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 132.199%;
          width: 100%;
        }

        .session-time-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }

        .time-label {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 132.199%;
        }

        .session-time-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .session-date {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 132.199%;
          display: inline;
        }

        .session-time {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 132.199%;
          width: 100%;
        }

        .session-remarks {
          display: flex;
          padding: 0px 623px 14px 0px;
          align-items: center;
          align-self: stretch;
        }

        .remarks-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin-right: 23px;
        }

        .remarks-label {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 132.199%;
        }

        .remarks-text {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 132.199%;
          margin: 0;
        }
      `}</style>
      <div className="upcoming-session-card">
      <div className="session-header">
        <div className="therapist-session-info">
          <img
            src="/assets/images/Avatar.png"          
            alt="Mridul Sharma"
            className="session-therapist-avatar"
          />
          <div className="session-therapist-details">
            <h3 className="session-therapist-name">Olivia Rhye</h3>
            <p className="session-description">30 min meeting with</p>
          </div>
        </div>
        <div className="session-actions">
          <button className="reschedule-btn">Reschedule</button>
          <button className="join-now-btn">Join Now</button>
        </div>
      </div>

      <div className="session-separator"></div>

      <div className="session-details">
        <div className="session-time-section">
          <div className="session-time-header">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path
                d="M10.9982 19.4982C9.81872 19.4982 8.71364 19.2751 7.68297 18.829C6.65214 18.3828 5.75339 17.7764 4.98672 17.0097C4.22005 16.2431 3.61364 15.3443 3.16747 14.3135C2.7213 13.2828 2.49822 12.1777 2.49822 10.9982C2.49822 9.81872 2.7213 8.71364 3.16747 7.68297C3.61364 6.65214 4.22005 5.75339 4.98672 4.98672C5.75339 4.22005 6.65214 3.61364 7.68297 3.16747C8.71364 2.7213 9.81872 2.49822 10.9982 2.49822C12.1777 2.49822 13.2828 2.7213 14.3135 3.16747C15.3443 3.61364 16.2431 4.22005 17.0097 4.98672C17.7764 5.75339 18.3828 6.65214 18.829 7.68297C19.2751 8.71364 19.4982 9.81872 19.4982 10.9982C19.4982 12.1777 19.2751 13.2828 18.829 14.3135C18.3828 15.3443 17.7764 16.2431 17.0097 17.0097C16.2431 17.7764 15.3443 18.3828 14.3135 18.829C13.2828 19.2751 12.1777 19.4982 10.9982 19.4982ZM13.9712 15.0252L15.0252 13.9712L11.7482 10.6945V5.99822H10.2482V11.302L13.9712 15.0252ZM4.75197 0.886719L5.80597 1.94047L1.94047 5.80597L0.886719 4.75197L4.75197 0.886719ZM17.2445 0.886719L21.1097 4.75197L20.056 5.80597L16.1905 1.94047L17.2445 0.886719ZM10.9982 17.9982C12.9419 17.9982 14.5945 17.3175 15.956 15.956C17.3175 14.5945 17.9982 12.9419 17.9982 10.9982C17.9982 9.05455 17.3175 7.40197 15.956 6.04047C14.5945 4.67897 12.9419 3.99822 10.9982 3.99822C9.05455 3.99822 7.40197 4.67897 6.04047 6.04047C4.67897 7.40197 3.99822 9.05455 3.99822 10.9982C3.99822 12.9419 4.67897 14.5945 6.04047 15.956C7.40197 17.3175 9.05455 17.9982 10.9982 17.9982Z"
                fill="white"
              />
            </svg>
            <span className="time-label">Time</span>
          </div>
          <div className="session-time-info">
            <div className="session-date">Thursday, Sep 14th</div>
            <div className="session-time">3:00 - 3:30 PM IST</div>
          </div>
        </div>
      </div>

      <div className="session-separator"></div>

      <div className="session-remarks">
        <div className="remarks-header">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M0.882812 19.498V0.498047H2.38281V19.498H0.882812ZM4.67131 14.6518V12.1328H13.1133V14.6518H4.67131ZM4.67131 7.8633V5.3443H19.1133V7.8633H4.67131Z"
              fill="white"
            />
          </svg>
          <span className="remarks-label">Remarks</span>
        </div>
        <p className="remarks-text">I am going thhrouughh a heartbrake</p>
      </div>
    </div>
    </>
  );
}

// Configuration data for therapist section and new platform section
const therapistCoachConfig = {
  therapistSection: {
    showSearchFilters: true,
    showTherapistGrid: true,
    // activeFilters: ["Therapist", "Price : $200 - $600"],
    searchPlaceholder: "Search By Names, Specialization or Language",
    therapists: [
      {
        name: "Dr. Marci Maiden",
        title: "Counselling Therapist",
        rating: 4.5,
        specializations: ["Stress", "Trauma", "Anxiety", "+2 More"],
        sessionTime: "2 : 30 Pm",
        sessionDay: "Today",
        imageUrl: "/assets/images/dr-image.png",
        availability: "Available Today"
      },
      {
        name: "Dr. Sarah Johnson",
        title: "Clinical Psychologist",
        rating: 4.8,
        specializations: ["Depression", "PTSD", "Anxiety", "+1 More"],
        sessionTime: "3 : 00 Pm",
        sessionDay: "Today",
        imageUrl: "/assets/images/dr-image.png",
        availability: "Available Today"
      },
      {
        name: "Dr. Michael Chen",
        title: "Licensed Therapist",
        rating: 4.6,
        specializations: ["Relationships", "Stress", "Mindfulness"],
        sessionTime: "4 : 30 Pm",
        sessionDay: "Tomorrow",
        imageUrl: "/assets/images/dr-image.png",
        availability: "Available Tomorrow"
      },
      {
        name: "Dr. Emily Davis",
        title: "Behavioral Therapist",
        rating: 4.7,
        specializations: ["CBT", "Trauma", "Addiction", "+3 More"],
        sessionTime: "10 : 00 Am",
        sessionDay: "Today",
        imageUrl: "/assets/images/dr-image.png",
        availability: "Available Today"
      },
      {
        name: "Dr. Robert Wilson",
        title: "Family Counselor",
        rating: 4.4,
        specializations: ["Family", "Couples", "Communication"],
        sessionTime: "11 : 30 Am",
        sessionDay: "Tomorrow",
        imageUrl: "/assets/images/dr-image.png",
        availability: "Available Tomorrow"
      },
      {
        name: "Dr. Lisa Thompson",
        title: "Mental Health Specialist",
        rating: 4.9,
        specializations: ["Anxiety", "Depression", "Wellness", "+2 More"],
        sessionTime: "1 : 00 Pm",
        sessionDay: "Today",
        imageUrl: "/assets/images/dr-image.png",
        availability: "Available Today"
      }
    ]
  },
  newPlatformSection: {
    showNewPlatform: true,
    label: "New Platform",
    title: "Get one of our Refill Health apps, which is only available on",
    downloadTitle: "Download Apps:",
    downloadButtons: [
      {
        imageUrl: "/assets/images/ios_image.png",
        alt: "Download on App Store"
      },
      {
        imageUrl: "/assets/images/android_image.png", 
        alt: "Get it on Google Play"
      }
    ],
    phoneImages: [
      {
        imageUrl: "/assets/images/mobile-img-first.png",
        alt: "Mobile App Screenshot 1"
      },
      {
        imageUrl: "/assets/images/mobile-img-second.png",
        alt: "Mobile App Screenshot 2"
      }
    ]
  }
};

// Define the content blocks for dynamic rendering
const therapistCoachContent = [
  {
    type: 'breadcrumb-welcome',
    props: {
      breadcrumbItems: [
        { label: 'Global Dashboard', active: false },
        { label: 'Therapist & Coaches', active: true }
      ],
      welcomeTitle: 'Therapist & Coaches',
      showUserName: false
    },
    className: 'chat-breadcrumb-section'
  },
  {
    type: 'therapist-section',
    props: therapistCoachConfig.therapistSection,
    className: 'therapist-coach-section'
  },
  {
    type: 'new-platform-section', 
    props: therapistCoachConfig.newPlatformSection,
    className: 'main-new-platform-section'
  }
];


export default function TherapistCoach() {
  return (
    <main className="therapist-coach-page">
      <div className="therapist-coach-content">
        {/* this section can be used later
        <div className="page-header">
          <h1>Upcoming Session Details</h1>
        </div>
        <UpcomingSessionDetails /> */}

        <div className="main-content-section">
          <DynamicContentRenderer content={therapistCoachContent} />
        </div>
      </div>
    </main>
  );
}
