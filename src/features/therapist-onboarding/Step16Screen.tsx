import React from "react";
import { useNavigate } from 'react-router-dom';
import { ProgressIndicator } from './Screen1';

export function ProgressStepper() {
  return (
    <div className="flex justify-center items-center w-full mb-16">
      <ProgressIndicator currentStep={3} />
    </div>
  );
}

export default function Step16Screen() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/onboarding/complete');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
      <div className="w-full max-w-4xl">
        <ProgressStepper />
      </div>
      
      <div className="flex-1 flex items-center justify-center w-full mt-8">
        <div className="rounded-2xl px-8 pt-8 pb-6 max-w-[800px] w-full flex flex-col items-center" style={{
          fontFamily: "Inter, sans-serif",
          minHeight: 600,
          borderRadius: "16px",
          background: "#EFF5F3",
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
        }}>
          {/* Title */}
          <h2 className="text-gray-900 text-xl font-bold mb-6 text-left w-full">
            Schedule Your Interview Session
          </h2>
          
          {/* Cal.com Booking Iframe */}
          <div className="w-full h-[600px] border-0 rounded-lg overflow-hidden shadow-lg mb-6">
            <iframe
              src="https://bookings.refillhealth.com/sreeja/therapy-session?name=&duration=60"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Interview Session"
              style={{
                border: 'none',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Submit button */}
          <button
            className="mt-4 w-full text-white text-base font-semibold shadow-lg py-3 px-6 transition-all hover:opacity-90 cursor-pointer"
            style={{ 
              letterSpacing: 0, 
              fontFamily: "Inter, sans-serif",
              borderRadius: "100px",
              background: "#006B5F"
            }}
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
