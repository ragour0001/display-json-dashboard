import React from "react";
import { ProgressTracker } from "./ProgressTracker";

// You can add form fields/components here as per your project needs/UX flow.
// For now, using placeholder content matching the overall UI pattern.

const Screen10: React.FC = () => (
  <div className="flex flex-col items-center min-h-screen bg-white px-2 w-full">
    <div className="w-full flex items-center justify-center mt-10 mb-4">
      <div className="w-full max-w-[650px]">
        <ProgressTracker step={2} />
      </div>
    </div>
    <div className="flex flex-1 items-center justify-center w-full px-4">
      <div className="w-full max-w-[470px] bg-[#F7F1FA] border border-[#E6DEF9] rounded-2xl shadow-xl flex flex-col items-stretch px-8 pt-10 pb-8 text-left animate-fade-in">
        <h2 className="text-[#24124D] text-2xl font-bold mb-1">Profile form</h2>
        <p className="text-[16px] text-[#6555A9] font-semibold mb-2">
          10 of 17
          <span className="text-[#444] font-normal ml-2">
            {/* Subtitle or short step label goes here */}
            Qualifications
          </span>
        </p>
        <p className="text-xs text-[#8A7DB9] font-semibold mb-3">
          All input fields are mandatory
          <span className="text-[#B82C1E] ml-1">*</span>
        </p>

        {/* ---- FORM CONTENT GOES HERE ---- */}
        <div className="mb-6 flex flex-col gap-4">
          {/* Replace with actual form fields! */}
          <div>
            <label className="font-semibold text-[#1D1348] text-[15px] mb-1 block">
              Example Field Title
            </label>
            <input
              type="text"
              name="qualification"
              placeholder="Type your qualification"
              className="w-full bg-white border border-[#DDD3F5] rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#B2A8D2] transition"
            />
          </div>
          <div>
            <label className="font-semibold text-[#1D1348] text-[15px] mb-1 block">
              Example Drop-down
            </label>
            <select
              name="dropdown"
              className="w-full bg-white border border-[#DDD3F5] rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#B2A8D2] transition"
              defaultValue=""
            >
              <option value="" disabled>
                Select from below
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="border border-[#6555A9] text-[#6555A9] px-7 py-2 rounded-full font-semibold text-[15px] transition bg-white hover:bg-[#F8F2FA]">
            Back
          </button>
          <button className="bg-[#6555A9] hover:bg-[#584195] text-white px-8 py-2 rounded-full font-semibold text-[15px] transition">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Screen10;

