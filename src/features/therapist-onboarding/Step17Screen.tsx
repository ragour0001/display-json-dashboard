"use client";

import * as React from "react";
import { ProgressIndicator } from './Screen1';

interface TrackItemProps {
  imageUrl: string;
  showTrack?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ imageUrl, showTrack = true }) => {
  return (
    <>
      <img
        src={imageUrl}
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[34px]"
        alt=""
      />
      {showTrack && (
        <div className="flex flex-col justify-center self-stretch py-1 pl-0.5 my-auto w-[153px]">
          <div className="flex w-full bg-emerald-700 rounded-lg min-h-1" />
        </div>
      )}
    </>
  );
};

function ProgressBar() {
  return (
    <div className="flex justify-center items-center w-full mb-16">
      <ProgressIndicator currentStep={4} />
    </div>
  );
}

interface ActionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden w-full text-base font-medium tracking-normal leading-none text-white bg-emerald-700 min-h-[55px] rounded-[100px] hover:bg-emerald-800 transition-colors"
    >
      <span className="text-white leading-[20px] block px-4 py-4">
        {children}
      </span>
    </button>
  );
};

interface SuccessMessageProps {
  title: string;
  description: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ title, description }) => {
  return (
    <section className="flex flex-col justify-center self-center max-w-full w-[505px]">
      <h2 className="text-3xl leading-none text-zinc-900 max-md:max-w-full">
        {title}
      </h2>
      <p className="text-base leading-[24px] text-neutral-800 max-md:max-w-full">
        {description}
      </p>
    </section>
  );
};

export const SuccessScreen: React.FC = () => {
  const handleSetupAccount = () => {
    // Handle account setup action
    console.log("Setting up account...");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
      {/* Progress Bar */}
      <div className="w-full max-w-4xl mb-8">
        <div className="flex justify-center">
          <ProgressBar />
        </div>
      </div>
      
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center w-full">
        <main className="flex overflow-hidden flex-col justify-center items-center px-14 py-12 text-center bg-gray-100 rounded-2xl max-w-[709px] shadow-[0px_1px_2px_rgba(0,0,0,0.3)] max-md:px-5">
          <div className="flex flex-col max-w-full w-[583px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/ae09537722e11ec1ee192167c2a253eb284d9066?placeholderIfAbsent=true"
              alt="Success illustration"
              className="object-contain self-center max-w-full aspect-[1.83] w-[439px]"
            />
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <SuccessMessage
                title="You're all set!"
                description="You're now ready to start offering your care and expertise through Refill Health. We're excited to have you as part of our therapist community"
              />
              <div className="mt-8 w-full max-md:max-w-full">
                <ActionButton onClick={handleSetupAccount}>
                  Setup Your Account
                </ActionButton>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SuccessScreen;
