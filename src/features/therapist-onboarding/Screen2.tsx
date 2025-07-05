import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressIndicator } from './Screen1';

export function ThankYouCard() {
  const navigate = useNavigate();
  
  const handleContinueToProfile = () => {
    navigate('/onboarding/personal-info');
  };
  const profileFormMessage = (
    <>
      <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '25px', letterSpacing: '0.08px', color: 'rgba(0,32,28,1)'}}>
        In the meantime. Please take a few minutes to complete the{" "}
      </span>
      <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 600, lineHeight: '25px', letterSpacing: '0.08px', color: 'rgba(0,32,28,1)'}}>
        Profile Form,
      </span>
      <span style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '25px', letterSpacing: '0.08px', color: 'rgba(0,32,28,1)'}}>
        {" "}
        this helps us understand how you might fit within our
        provider community.
      </span>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="flex justify-center items-center w-full mb-16">
          <ProgressIndicator currentStep={1} />
        </div>
        
        <main className="flex overflow-hidden flex-col justify-center px-14 py-12 bg-gray-100 rounded-2xl max-w-[709px] shadow-[0px_1px_2px_rgba(0,0,0,0.3)] max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/fcbae45b4ec09ba06010ef557d5d35b99c66274d?placeholderIfAbsent=true"
            className="object-contain self-center max-w-full rounded-none aspect-[1.18] w-[181px]"
            alt="Company logo"
          />
          <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <header className="flex flex-col items-center self-center max-w-full w-[554px]">
                <div className="max-w-full text-center w-[505px]">
                  <h2 className="text-3xl leading-none text-zinc-900 max-md:max-w-full">
                    Thank you for applying!
                  </h2>
                  <p className="text-base leading-[24px)] text-neutral-800 max-md:max-w-full">
                    Our team is currently reviewing your submission. You can expect
                    to hear back from us within the next 2 to 3 working days.
                  </p>
                </div>
                <section className="flex flex-col justify-center px-4 py-3 mt-9 w-full text-base tracking-normal leading-6 bg-white rounded-2xl border border-solid border-[color:var(--Schemes-Primary-Container,#9FF2E2)] max-w-[554px] text-slate-800 max-md:max-w-full">
                  <div className="flex gap-9 justify-center items-center w-full max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/8e70fda26b3cab71fbdfe044d60621a2028ae669?placeholderIfAbsent=true"
                      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                      alt="Information icon"
                    />
                    <div className="self-stretch my-auto w-[479px] max-md:max-w-full">
                      {profileFormMessage}
                    </div>
                  </div>
                </section>
              </header>

              <div className="flex justify-center items-center mt-8 w-full text-base font-medium tracking-normal text-white max-md:max-w-full">
                <button
                  onClick={handleContinueToProfile}
                  className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch my-auto w-full bg-emerald-700 basis-0 min-w-60 rounded-[100px] max-md:max-w-full hover:bg-emerald-800 transition-colors"
                  type="button"
                >
                  <span className="gap-2 self-stretch px-6 py-4 my-auto text-white max-md:px-5">
                    Continue to Profile Form
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ThankYouCard;
