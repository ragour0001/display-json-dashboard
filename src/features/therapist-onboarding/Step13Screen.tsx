import React from "react";

// Progress step names
const steps = [
  "Submit Form",
  "Profile Review",
  "Profile Form",
  "Interview",
  "Done",
];

// Custom ProgressTracker bar for pexel perfect stepper at top
function ProgressTracker({ currentStep = 1 }) {
  // 0-based, so currentStep=1 means Profile Review is active
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-7 mb-9">
      <div className="flex flex-row justify-between w-full px-2">
        {steps.map((step, i) => (
          <div key={step} className="flex-1 flex flex-col items-center">
            <div className={
              "rounded-full border-2 w-6 h-6 flex items-center justify-center mb-1 " +
              (currentStep > i
                ? "border-[#6555A9] bg-[#6555A9]"
                : currentStep === i
                  ? "border-[#6555A9] bg-white"
                  : "border-[#DDD3F5] bg-white")
            }>
              {currentStep > i ? (
                <span className="block w-2 h-2 bg-white rounded-full" />
              ) : currentStep === i ? (
                <span className="block w-3 h-3 bg-[#6555A9] rounded-full" />
              ) : null}
            </div>
            <span className={
              "text-xs font-semibold " +
              (currentStep === i
                ? "text-[#6555A9]"
                : currentStep > i
                  ? "text-[#6555A9]"
                  : "text-[#B2A8D2]")
            }>
              {step}
            </span>
          </div>
        ))}
      </div>
      {/* Connecting bars */}
      <div className="flex items-center w-full px-2 mt-2">
        {steps.slice(0, -1).map((_, i) => (
          <div key={i} className="flex-1 flex items-center">
            <div className={
              "w-full h-1 rounded-full " +
              (currentStep > i
                ? "bg-[#6555A9]"
                : "bg-[#E6DEF9]")
            } />
          </div>
        ))}
      </div>
    </div>
  );
}

const Step13Screen: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-white items-center justify-start w-full px-2">
    <ProgressTracker currentStep={1} /> {/* Profile Review active, 0-based */}
    <div className="w-full flex items-center justify-center">
      <div className="bg-[#F7F1FA] border border-[#E6DEF9] rounded-2xl shadow-xl w-full max-w-[480px] px-2 pb-8 pt-5 flex flex-col items-center animate-fade-in">
        {/* Icon/Illustration */}
        <div className="flex items-center justify-center mt-2 mb-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc0b2df4621b145408292acbe66e8b02f%2F6d5f170ea6d37066c9a1bec234834ee8c444aa6b?width=92"
            alt="Application review"
            className="w-[76px] h-[76px] object-contain"
          />
        </div>
        <h2 className="text-[#24124D] text-[1.4rem] md:text-[1.58rem] text-center font-bold mb-3 mt-2 leading-[1.22] tracking-tight font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
          Thank you for applying!
        </h2>
        <p className="text-[#24124D] text-center text-base font-normal mb-7">
          Our team will review your application. Please check back in 48 hours.
        </p>
        <button
          type="button"
          className="w-full bg-[#6555A9] hover:bg-[#584195] text-white text-base font-semibold rounded-full py-3 px-2 mt-3 shadow-sm transition-all focus:outline-none"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Edit the Practice Form
        </button>
      </div>
    </div>
  </div>
);

export default Step13Screen;
