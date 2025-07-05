
import React from "react";

const steps = [
  "Submit Form",
  "Profile Review",
  "Profile Form",
  "Interview",
  "Done",
];

export const ProgressTracker: React.FC<{ step: number }> = ({ step }) => (
  <div className="w-full max-w-xl flex flex-col gap-2 items-center mx-auto mb-8">
    <div className="flex flex-row justify-between w-full">
      {steps.map((label, i) => (
        <div
          key={label}
          className={
            "flex flex-col items-center flex-1 " +
            (i === steps.length - 1 ? "" : "mr-2")
          }
        >
          <div
            className={
              "rounded-full border-2 w-6 h-6 flex items-center justify-center mb-1 " +
              (step > i
                ? "border-[#6555A9] bg-[#6555A9]"
                : step === i
                ? "border-[#6555A9] bg-white"
                : "border-[#DDD3F5] bg-white")
            }
          >
            {step > i ? (
              <span className="block w-2 h-2 bg-white rounded-full" />
            ) : step === i ? (
              <span className="block w-3 h-3 bg-[#6555A9] rounded-full" />
            ) : null}
          </div>
          <span
            className={
              "text-[13px] font-medium " +
              (step === i
                ? "text-[#6555A9]"
                : step > i
                ? "text-[#6555A9]"
                : "text-[#B2A8D2]")
            }
          >
            {label}
          </span>
        </div>
      ))}
    </div>
    <div className="flex-1 w-full flex items-center mt-1">
      <div className="flex-1 h-1 bg-[#DDD3F5] rounded-full relative">
        <div
          className="absolute h-1 bg-[#6555A9] rounded-full transition-all"
          style={{
            width: `${((step + 1) / steps.length) * 100}%`,
            left: 0,
            top: 0,
            height: "100%",
          }}
        />
      </div>
    </div>
  </div>
);
