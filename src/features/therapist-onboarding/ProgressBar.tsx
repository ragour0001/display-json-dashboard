
import React from "react";

interface ProgressBarProps {
  currentStep: number; // 1-based step
  totalSteps?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps = 17
}) => {
  const percent = Math.round((currentStep / totalSteps) * 100);
  return (
    <div className="w-full max-w-xl px-2 mt-8 md:mt-12 mb-7">
      <div className="flex justify-between mb-1">
        <span className="text-[#6555A9] text-sm font-semibold">{`Step ${currentStep} of ${totalSteps}`}</span>
        <span className="text-[#A392C4] text-xs font-medium">{percent}%</span>
      </div>
      <div className="w-full bg-[#EEE6FA] h-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6555A9] rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
