import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressIndicator } from './Screen1';

// CSS Animation for arrow movement
const arrowAnimation = `
  @keyframes arrowMove {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(4px);
    }
  }
`;

const Screen9ThankYou = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    console.log('Edit the Profile Form clicked');
    navigate('/onboarding/practice-details');
  };

  const handleScheduleInterview = () => {
    console.log('Schedule Interview clicked');
    navigate('/onboarding/interview-invitation');
  };

  return (
    <>
      <style>{arrowAnimation}</style>
      <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
        <div className="w-full max-w-4xl">
          <div className="flex justify-center items-center w-full mb-16">
            <ProgressIndicator currentStep={2} />
          </div>
          
          <div style={{
            backgroundColor: '#e8f4f8',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '500px',
            padding: '60px 40px',
            textAlign: 'center',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
            margin: '40px auto',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}>
            {/* Icon Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '40px'
            }}>
              <div style={{
                width: '140px',
                height: '140px',
                backgroundColor: '#a7f3d0',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {/* Document icon */}
                <div style={{
                  width: '70px',
                  height: '88px',
                  backgroundColor: '#e0f2fe',
                  borderRadius: '10px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid #0891b2'
                }}>
                  {/* Blue header bar */}
                  <div style={{
                    width: '52px',
                    height: '14px',
                    backgroundColor: '#0891b2',
                    borderRadius: '5px',
                    marginBottom: '8px',
                    color: 'white',
                    fontSize: '9px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    Text
                  </div>
                  {/* Document lines */}
                  <div style={{
                    width: '46px',
                    height: '4px',
                    backgroundColor: '#cbd5e1',
                    marginBottom: '4px',
                    borderRadius: '2px'
                  }}/>
                  <div style={{
                    width: '40px',
                    height: '4px',
                    backgroundColor: '#cbd5e1',
                    marginBottom: '4px',
                    borderRadius: '2px'
                  }}/>
                  <div style={{
                    width: '35px',
                    height: '4px',
                    backgroundColor: '#cbd5e1',
                    borderRadius: '2px'
                  }}/>
                </div>
                
                {/* Magnifying glass */}
                <div style={{
                  position: 'absolute',
                  bottom: '18px',
                  right: '12px',
                  width: '35px',
                  height: '35px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    border: '4px solid #1f2937',
                    borderRadius: '50%',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: '-10px',
                      right: '-10px',
                      width: '14px',
                      height: '4px',
                      backgroundColor: '#1f2937',
                      borderRadius: '2px',
                      transform: 'rotate(45deg)'
                    }}/>
                  </div>
                </div>

                {/* Yellow star */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '24px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#fbbf24',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                }}/>
              </div>
            </div>

            {/* Thank you message */}
            <h2 style={{
              color: '#2c5f7c',
              fontSize: '28px',
              fontWeight: '600',
              margin: '0 0 20px 0',
              lineHeight: '1.3'
            }}>
              Thank you for applying!
            </h2>

            <p style={{
              color: '#6b7280',
              fontSize: '18px',
              lineHeight: '1.5',
              margin: '0 0 48px 0',
              fontWeight: '400'
            }}>
              Our team will review your application. Please check back in 48 hours.
            </p>

            {/* Buttons Section */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%'
            }}>
              {/* Edit Profile Button */}
              <button
                onClick={handleEditProfile}
                style={{
                  width: '100%',
                  padding: '16px 28px',
                  backgroundColor: '#2c5f7c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '28px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e4a5f';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#2c5f7c';
                }}
              >
                Edit the Profile Form
              </button>

              {/* Schedule Interview Button */}
              <button
                onClick={handleScheduleInterview}
                style={{
                  width: '100%',
                  padding: '16px 28px',
                  backgroundColor: '#059669',
                  color: 'white',
                  border: 'none',
                  borderRadius: '28px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#047857';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#059669';
                }}
              >
                Continue 
                <div style={{
                  width: '20px',
                  height: '20px',
                  position: 'relative',
                  animation: 'arrowMove 1.5s ease-in-out infinite'
                }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen9ThankYou;
