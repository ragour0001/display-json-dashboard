"use client";

import React from "react";

interface TrackProps {
  isActive: boolean;
  customColor?: string;
}

const Track: React.FC<TrackProps> = ({ isActive, customColor }) => {
  const getBackgroundColor = () => {
    if (customColor) {
      return customColor;
    }
    return isActive ? "bg-emerald-700" : "bg-stone-300";
  };

  return (
    <div className="flex flex-col justify-center self-stretch py-1 pl-0.5 my-auto w-[120px]">
      <div
        className={`flex w-full rounded-lg min-h-1 ${getBackgroundColor()}`}
        style={customColor ? { backgroundColor: customColor } : {}}
      />
    </div>
  );
};

interface TrackGroupProps {
  imageUrl: string;
  isActive: boolean;
  showTrack?: boolean;
  customColor?: string;
}

const TrackGroup: React.FC<TrackGroupProps> = ({
  imageUrl,
  isActive,
  showTrack = true,
  customColor,
}) => {
  return (
    <>
      <img
        src={imageUrl}
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[34px]"
        alt=""
      />
      {showTrack && <Track isActive={isActive} customColor={customColor} />}
    </>
  );
};

interface NewProgressBarProps {
  currentStep?: number; // 0-based index for which step is active
}

const NewProgressBar: React.FC<NewProgressBarProps> = ({ currentStep = 0 }) => {
  // Progress states based on current step
  const getProgressStates = (step: number) => {
    return [
      step >= 0, // Step 1
      step >= 1, // Step 2  
      step >= 2, // Step 3
      step >= 3, // Step 4
      step >= 4, // Step 5
    ];
  };

  const progressStates = getProgressStates(currentStep);

  return (
    <section className="flex gap-3 items-center mb-8 justify-center overflow-x-auto">
      <TrackGroup 
        imageUrl="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/21e89edc12b0c8534055e0cf779f20c9ecdaa2ba?placeholderIfAbsent=true" 
        isActive={progressStates[0]} 
      />
      <TrackGroup 
        imageUrl="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/21e89edc12b0c8534055e0cf779f20c9ecdaa2ba?placeholderIfAbsent=true" 
        isActive={progressStates[1]} 
      />
      <TrackGroup 
        imageUrl="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/21e89edc12b0c8534055e0cf779f20c9ecdaa2ba?placeholderIfAbsent=true" 
        isActive={progressStates[2]}
        customColor="#CACACA"
      />
      <TrackGroup 
        imageUrl="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/17583d6d6fa2962465e636f829d3e501f75d766c?placeholderIfAbsent=true" 
        isActive={progressStates[3]}
        customColor="#CACACA"
      />
      <TrackGroup 
        imageUrl="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/17583d6d6fa2962465e636f829d3e501f75d766c?placeholderIfAbsent=true" 
        isActive={progressStates[4]} 
        showTrack={false} 
      />
    </section>
  );
};

export default NewProgressBar; 