"use client";
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { ProgressIndicator } from './Screen1';

export function ProgressStepper() {
  return (
    <div className="flex justify-center items-center w-full mb-16">
      <ProgressIndicator currentStep={3} />
    </div>
  );
}

function InterviewInvitation() {
  const navigate = useNavigate();

  const handleJoinCall = () => {
    // Handle join call functionality
    console.log("Joining call...");
  };

  const handleChangeTime = () => {
    // Navigate to schedule interview page
    navigate('/onboarding/schedule-interview');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
      <div className="w-full max-w-4xl">
        <ProgressStepper />
      </div>

      <div className="flex-1 flex items-center justify-center w-full">
        <main className="flex flex-col gap-11 justify-center items-center px-14 py-12 bg-gray-100 rounded-2xl shadow w-[709px] max-md:px-11 max-md:py-9 max-md:w-[600px] max-sm:gap-8 max-sm:px-5 max-sm:py-6 max-sm:w-full">
          <header>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"374:36835\" width=\"167\" height=\"151\" viewBox=\"0 0 167 151\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[167px] h-[150.6px] max-lg:w-[140px] max-lg:h-[126px] max-sm:w-[120px] max-sm:h-[108px] relative\"> <path d=\"M75.3 150.6C116.887 150.6 150.6 116.887 150.6 75.3C150.6 33.713 116.887 0 75.3 0C33.713 0 0 33.713 0 75.3C0 116.887 33.713 150.6 75.3 150.6Z\" fill=\"#9FF2E2\"></path> <path d=\"M105.587 22.2656H106.37C115.367 22.2656 122.715 29.588 122.715 38.5169V99.5482C122.715 108.494 115.35 115.799 106.37 115.799H105.587V45.3827C109.023 45.3827 111.796 42.6094 111.796 39.2103C111.796 35.7943 109.006 33.0378 105.587 33.0378V22.2656ZM45.7853 22.2656H105.587V33.0209C102.152 33.0209 99.3623 35.7943 99.3623 39.1934C99.3623 42.6094 102.152 45.3658 105.587 45.3658V115.799H45.7853V45.3827C49.221 45.3827 52.0104 42.6094 52.0104 39.2103C52.0104 35.7943 49.221 33.0378 45.7853 33.0378V22.2656ZM44.9859 22.2656H45.7683V33.0209C42.3325 33.0209 39.5601 35.7943 39.5601 39.1934C39.5601 42.6094 42.3495 45.3658 45.7683 45.3658V115.799H44.9859C35.9883 115.799 28.6406 108.477 28.6406 99.5482V38.5169C28.6406 29.588 36.0053 22.2656 44.9859 22.2656Z\" fill=\"white\"></path> <path d=\"M105.587 22.2656H106.37C115.367 22.2656 122.715 29.622 122.715 38.5923V49.8392H105.587V45.4729C109.023 45.4729 111.796 42.6867 111.796 39.2719C111.796 35.84 109.006 33.0708 105.587 33.0708V22.2656ZM45.7853 22.2656H105.587V33.0708C102.152 33.0708 99.3623 35.857 99.3623 39.2719C99.3623 42.7037 102.152 45.4729 105.587 45.4729V49.8392H45.7853V45.4729C49.221 45.4729 52.0104 42.6867 52.0104 39.2719C52.0104 35.84 49.221 33.0708 45.7853 33.0708V22.2656ZM44.9859 22.2656H45.7683V33.0708C42.3325 33.0708 39.5601 35.857 39.5601 39.2719C39.5601 42.7037 42.3495 45.4729 45.7683 45.4729V49.8392H28.6406V38.5923C28.6406 29.622 36.0053 22.2656 44.9859 22.2656Z\" fill=\"#006B5F\"></path> <path d=\"M45.6627 17.3984C46.9944 17.3984 48.0871 18.4908 48.0871 19.8222V36.601C48.0871 37.9324 46.9944 39.0248 45.6627 39.0248C44.331 39.0248 43.2383 37.9324 43.2383 36.601V19.8222C43.2383 18.4738 44.3139 17.3984 45.6627 17.3984ZM105.693 17.3984C107.025 17.3984 108.117 18.4908 108.117 19.8222V36.601C108.117 37.9324 107.025 39.0248 105.693 39.0248C104.361 39.0248 103.268 37.9324 103.268 36.601V19.8222C103.285 18.4738 104.361 17.3984 105.693 17.3984Z\" fill=\"white\"></path> <circle cx=\"76\" cy=\"80\" r=\"20\" fill=\"black\"></circle> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M75.8269 63.8269C69.6948 63.8269 64.4231 67.5172 62.1145 72.801C61.9607 73.1531 61.5506 73.3138 61.1986 73.16C60.8465 73.0061 60.6858 72.596 60.8396 72.244C63.3616 66.4717 69.1221 62.4355 75.8269 62.4355C76.2111 62.4355 76.5225 62.747 76.5225 63.1312C76.5225 63.5154 76.2111 63.8269 75.8269 63.8269Z\" fill=\"white\"></path> <path d=\"M77.0371 68.6685L79.85 74.63C79.9334 74.8068 80.0567 74.9597 80.2091 75.0756C80.3615 75.1915 80.5386 75.2669 80.7251 75.2954L87.0127 76.2439C87.2256 76.278 87.4252 76.3733 87.5894 76.5191C87.7537 76.6649 87.8759 76.8555 87.9427 77.0697C88.0095 77.284 88.0181 77.5134 87.9676 77.7324C87.9171 77.9514 87.8094 78.1515 87.6566 78.3103L83.1133 82.9494C82.9782 83.0869 82.8772 83.2568 82.819 83.4444C82.7608 83.632 82.7472 83.8317 82.7795 84.026L83.8541 90.5765C83.8909 90.8004 83.8671 91.0307 83.7853 91.2412C83.7035 91.4517 83.5669 91.6341 83.3912 91.7677C83.2154 91.9012 83.0074 91.9806 82.7907 91.9969C82.574 92.0131 82.3573 91.9656 82.1651 91.8597L76.5412 88.7601C76.3743 88.6685 76.1885 88.6207 76 88.6207C75.8115 88.6207 75.6257 88.6685 75.4587 88.7601L69.8349 91.8597C69.6427 91.9651 69.4263 92.0121 69.2099 91.9956C68.9936 91.979 68.7859 91.8995 68.6105 91.7661C68.435 91.6326 68.2987 91.4505 68.217 91.2403C68.1353 91.0301 68.1113 90.8002 68.1479 90.5765L69.2205 84.026C69.2528 83.8317 69.2392 83.632 69.181 83.4444C69.1228 83.2568 69.0218 83.0869 68.8867 82.9494L64.3434 78.3103C64.1906 78.1515 64.0829 77.9514 64.0324 77.7324C63.9819 77.5134 63.9905 77.284 64.0573 77.0697C64.1241 76.8555 64.2463 76.6649 64.4106 76.5191C64.5748 76.3733 64.7744 76.278 64.9873 76.2439L71.2749 75.2892C71.4614 75.2607 71.6385 75.1853 71.7909 75.0694C71.9433 74.9535 72.0666 74.8006 72.15 74.6238L74.9629 68.6623C75.0608 68.4623 75.2097 68.2947 75.393 68.1778C75.5764 68.0609 75.7871 67.9994 76.0018 68C76.2165 68.0006 76.4269 68.0634 76.6096 68.1814C76.7923 68.2994 76.9403 68.468 77.0371 68.6685Z\" fill=\"#ADE1F2\"></path> <g filter=\"url(#filter0_f_374_36835)\"> <ellipse cx=\"75.874\" cy=\"102.148\" rx=\"18.1357\" ry=\"3.88623\" fill=\"#6B6B6B\" fill-opacity=\"0.39\"></ellipse> </g> <path d=\"M136 132C118.879 132 105 118.121 105 101C105 83.8789 118.879 70 136 70C153.121 70 167 83.8789 167 101C167 118.121 153.121 132 136 132ZM122.16 102.662C120.9 103.996 120.961 106.099 122.295 107.358L129.846 114.489C131.271 115.835 133.545 115.661 134.748 114.114L148.209 96.8089C149.335 95.3608 149.073 93.2754 147.627 92.1487C146.179 91.0218 144.094 91.2845 142.967 92.7325L131.748 107.149L126.856 102.527C125.522 101.268 123.419 101.329 122.16 102.662Z\" fill=\"#006B5F\"></path> <defs> <filter id=\"filter0_f_374_36835\" x=\"46.4496\" y=\"86.973\" width=\"58.847\" height=\"30.3499\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"></feBlend> <feGaussianBlur stdDeviation=\"5.64436\" result=\"effect1_foregroundBlur_374_36835\"></feGaussianBlur> </filter> </defs> </svg>",
              }}
            />
          </header>

          <section className="flex relative flex-col gap-8 items-center w-[583px] max-md:w-[500px] max-sm:gap-6 max-sm:w-full">
            <header className="flex relative flex-col gap-3.5 justify-center items-center w-[505px] max-md:w-[450px] max-sm:w-full">
              <h2 className="relative text-3xl leading-10 text-center text-zinc-900 max-md:text-3xl max-md:leading-9 max-sm:text-2xl max-sm:leading-8">
                Schedule Your Interview Session
              </h2>
            </header>

            {/* Cal.com Booking Iframe */}
            <div className="w-full max-w-[600px] h-[700px] border-0 rounded-lg overflow-hidden shadow-lg">
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

            <section className="flex relative flex-col gap-2.5 px-3 py-3 bg-white rounded-2xl border border-[#9FF2E2] h-[100px] w-[583px] max-md:w-[500px] max-sm:p-4 max-sm:w-full max-sm:h-auto">
              <div className="flex relative flex-col gap-2.5 justify-center items-center">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg id=\"451:4390\" layer-name=\"Placeholer\" width=\"559\" height=\"45\" viewBox=\"0 0 559 45\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"flex h-[44px] max-sm:h-auto p-[4px_0px] max-sm:p-[8px_0px] items-center gap-[10px] align-self-stretch relative\"> <path d=\"M10 12.5996C4.47715 12.5996 0 17.0768 0 22.5996C0 28.1225 4.47715 32.5996 10 32.5996C15.5228 32.5996 20 28.1225 20 22.5996C20 17.0768 15.5228 12.5996 10 12.5996Z\" fill=\"#00201C\"></path> <path d=\"M10 26.5996V22.5996\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M10 18.5996H9.99\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <text fill=\"#00201C\" xml:space=\"preserve\" style=\"white-space: pre\" font-family=\"Inter\" font-size=\"16\" font-weight=\"500\" letter-spacing=\"0em\"><tspan x=\"30\" y=\"16.9178\">Your interview has been scheduled. If you're unable to attend, you </tspan><tspan x=\"30\" y=\"39.9178\">can easily reschedule to a time that works&nbsp;better&nbsp;for&nbsp;you</tspan></text> </svg>",
                  }}
                />

                <button
                  onClick={handleChangeTime}
                  className="flex relative gap-1 justify-center items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  <span className="relative text-base font-semibold leading-normal text-emerald-950 max-sm:text-sm">
                    Change Time
                  </span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "<svg id=\"451:4398\" layer-name=\"Solid arrow right\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[24px] h-[24px] max-sm:w-[20px] max-sm:h-[20px] relative\"> <path d=\"M9.5 7.59961L14.5 12.5996L9.5 17.5996\" stroke=\"#00201C\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
                    }}
                  />
                </button>
              </div>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

export default InterviewInvitation; 