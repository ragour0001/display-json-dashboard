import * as React from "react";
import { StepIcon } from "./StepIcon";
import { ProgressTrack } from "./ProgressTrack";

export interface Step {
  id: string;
  label: string;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  steps, 
  currentStep,
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center w-full py-8 ${className}`}>
      {/* Step Labels */}
      <div className="flex items-center gap-4 mb-4">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          return (
            <React.Fragment key={`label-${step.id}`}>
              <div className="w-[34px] flex justify-center">
                <span className={`text-sm font-medium whitespace-nowrap ${
                  isActive || isCompleted ? 'text-black' : 'text-gray-500'
                }`}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-[153px]" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Progress Icons and Tracks */}
      <section className="flex items-center gap-4">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          const iconSrc = isActive || isCompleted 
            ? "https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/4c9a1adc1d23fd342c68079da48a45a1a6b45712?placeholderIfAbsent=true"
            : "https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/eaf138f4c408fb0f0f2834700994c694f4d91c15?placeholderIfAbsent=true";
          
          return (
            <React.Fragment key={step.id}>
              <StepIcon src={iconSrc} />
              {index < steps.length - 1 && <ProgressTrack />}
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default ProgressBar; 