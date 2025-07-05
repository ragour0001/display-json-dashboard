import React from "react";
import { FaUsers } from "react-icons/fa";

const steps = [
  "Submit Form",
  "Profile Review",
  "Profile Form",
  "Interview",
  "Done",
];

// Progress bar, pixel-perfect for step 4 (Interview)
function ProgressTracker({ currentStep = 4 }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-7 mb-10">
      <div className="flex flex-row justify-between w-full px-2">
        {steps.map((step, i) => (
          <div key={step} className="flex-1 flex flex-col items-center">
            <div
              className={
                "rounded-full border-2 w-6 h-6 flex items-center justify-center mb-1 " +
                (currentStep > i
                  ? "border-[#6555A9] bg-[#6555A9]"
                  : currentStep === i
                  ? "border-[#6555A9] bg-white"
                  : "border-[#DDD3F5] bg-white")
              }
            >
              {currentStep > i ? (
                <span className="block w-2 h-2 bg-white rounded-full" />
              ) : currentStep === i ? (
                <span className="block w-3 h-3 bg-[#6555A9] rounded-full" />
              ) : null}
            </div>
            <span
              className={
                "text-xs font-semibold " +
                (currentStep === i
                  ? "text-[#6555A9]"
                  : currentStep > i
                  ? "text-[#6555A9]"
                  : "text-[#B2A8D2]")
              }
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center w-full px-2 mt-2">
        {steps.slice(0, -1).map((_, i) => (
          <div key={i} className="flex-1 flex items-center">
            <div
              className={
                "w-full h-1 rounded-full " +
                (currentStep > i ? "bg-[#6555A9]" : "bg-[#E6DEF9]")
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const Step15Screen: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-white items-center justify-start w-full px-2">
    <ProgressTracker currentStep={4} /> {/* "Done" active */}
    <div className="w-full flex justify-center items-center">
      <div className="bg-[#F7F1FA] border border-[#E6DEF9] rounded-2xl shadow-xl w-full max-w-[500px] px-6 pb-12 pt-8 flex flex-col items-center animate-fade-in">
        {/* Illustration */}
        <div className="flex flex-col items-center justify-center mt-2 mb-7">
          <span className="bg-[#C8F0E7] rounded-full w-[72px] h-[72px] flex items-center justify-center mx-auto shadow-sm">
            {FaUsers({ color: "#47D872", size: 37 }) as React.ReactElement}
          </span>
        </div>
        <h2 className="text-[#201047] text-[1.25rem] md:text-[1.44rem] text-center font-bold mb-3 mt-2 leading-tight font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
          Thank you for attending!
        </h2>
        <div className="w-full flex flex-col gap-3 items-center px-1 text-center">
          <p className="text-[#24124D] text-base font-medium mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
            We appreciate your time and effort for the interview.
            <br className="hidden md:block" />
            Our team will reach out to you soon regarding your application status.
          </p>
          {/* CTA button */}
          <button
            type="button"
            className="bg-[#6555A9] hover:bg-[#584195] text-white text-base font-semibold rounded-full py-3 px-8 mt-4 mb-2 transition-all shadow-md focus:outline-none"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            View Next Steps
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Step15Screen;
