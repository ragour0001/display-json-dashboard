import React from "react";
import { ProgressTracker } from "./ProgressTracker";
import { FaTimes, FaCheck } from "react-icons/fa";
import { ProgressBar } from "./ProgressBar";

const uploadedFiles = [
  {
    name: "Degree.pdf",
    size: 60,
    total: 120,
    status: "uploading" as "uploading" | "done",
  },
  {
    name: "Degree.pdf",
    size: 120,
    total: 120,
    status: "done" as "uploading" | "done",
  },
];

const formatKb = (kb: number) => `${kb} KB`;

const Screen12: React.FC = () => (
  <div className="flex flex-col items-center min-h-screen bg-white px-2 w-full">
    <div className="w-full flex items-center justify-center mt-10 mb-4">
      <div className="w-full max-w-[650px]">
        <ProgressTracker step={2} /> {/* 0-based index; "Profile Form" active */}
      </div>
    </div>
    <div className="flex flex-1 items-center justify-center w-full px-4">
      <form
        className="w-full max-w-[540px] bg-[#F7F1FA] border border-[#E6DEF9] rounded-2xl shadow-xl flex flex-col items-stretch px-8 pt-10 pb-8 text-left animate-fade-in"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <h2 className="text-[#24124D] text-[2rem] font-bold mb-1 leading-none tracking-tight font-sans">
          Profile form
        </h2>
        <p className="text-[16px] text-[#6555A9] font-semibold mb-3 mt-2">
          8 of 8 <span className="text-[#6A36A4] font-normal ml-2">Attachments</span>
        </p>

        {/* Upload section */}
        <div className="font-semibold text-[#1D1348] text-[15px] mb-1">
          Upload Proof of Education & Licensure
        </div>
        <div className="border-2 border-dashed border-[#BBA9DD] bg-white rounded-lg px-3 py-8 flex flex-col items-center justify-center text-[#7B69B9] text-base text-center cursor-pointer transition hover:border-[#6555A9] mb-4"
          style={{ minHeight: 160 }}>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-2 text-[#6555A9]">
              <path d="M16 16l-4-4-4 4M12 12v9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <rect x={3} y={3} width={18} height={18} rx={2} strokeWidth={2} stroke="currentColor" fill="none" />
            </svg>
            <div className="mb-1 text-[#201047] text-[15px] font-medium">
              Choose a file and or drag and drop it here
            </div>
            <div className="text-xs text-[#7B69B9] -mt-1">
              Pdf, png, jpeg files are supported Size &lt; 12MB
            </div>
            <button type="button"
              className="border-[#6555A9] rounded px-5 py-1.5 mt-3 text-[#6555A9] font-semibold text-sm bg-transparent hover:bg-[#F8F2FA] border">
              Browse Files
            </button>
          </div>
        </div>
        
        {/* Uploaded files (mimic the look from Figma) */}
        <div className="flex flex-col gap-2 mb-5">
          {uploadedFiles.map((f, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#DDD3F5] rounded-lg px-4 py-3 flex items-center relative shadow transition"
            >
              <div className="flex-1 flex flex-col">
                <span className="font-medium text-[#24124D] text-[15px]">{f.name}</span>
                <div className="flex items-center gap-2 text-xs text-[#7B69B9] mt-0.5">
                  {formatKb(f.size)} of {formatKb(f.total)}
                  {f.status === "uploading"
                    ? <span className="ml-2">&middot; Uploading...</span>
                    : <span className="ml-2 text-[#42A948]">&middot; Uploaded</span>}
                </div>
                <div className="h-1 rounded-full mt-2 w-full bg-[#EEE6FA]">
                  <div
                    className={f.status === "uploading"
                      ? "bg-[#7B69B9] h-1 rounded-full animate-pulse"
                      : "bg-[#6FDF96] h-1 rounded-full"
                    }
                    style={{
                      width: f.status === "uploading"
                        ? "50%"
                        : "100%"
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center ml-2 gap-1">
                {f.status === "done" && (
                  <button type="button" className="text-[#FF6868] hover:text-red-600" title="Remove">
                    {FaTimes({ size: 18 }) as React.ReactElement}
                  </button>
                )}
                {f.status === "done" && (
                  <span className="inline-block ml-2 text-[#42A948]">
                    {FaCheck({ size: 18 }) as React.ReactElement}
                  </span>
                )}
                {f.status === "uploading" && (
                  <span className="inline-block ml-2 text-[#B2A8D2]">
                    {FaTimes({ size: 18 }) as React.ReactElement}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Session note */}
        <div className="mb-5">
          <div className="font-semibold text-[#1D1348] text-[15px] mb-1 flex items-center">
            Sample anonymized session note or case summary
            <span className="font-normal text-xs text-[#8577B3] ml-1">(Optional)</span>
          </div>
          <textarea
            name="sample_case_note"
            placeholder="Write Here"
            className="bg-white border border-[#DDD3F5] rounded-md px-3 py-2 text-base min-h-[77px] text-[#493F70] focus:outline-none focus:ring-2 focus:ring-[#B2A8D2] transition"
          />
        </div>

        <div className="mt-4 flex justify-between gap-4">
          <button
            type="button"
            className="rounded-full border-[#6555A9] text-[#6555A9] bg-transparent font-semibold text-[15px] px-7 py-2 hover:bg-[#F8F2FA] border"
          >
            Back
          </button>
          <button
            type="submit"
            className="rounded-full bg-[#6555A9] hover:bg-[#584195] text-white font-semibold text-[15px] px-8 py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Screen12;
