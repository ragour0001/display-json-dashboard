import React from "react";
import { ProgressTracker } from "./ProgressTracker";

const backgrounds = [
  "Hindu",
  "Muslim",
  "Christian",
  "Buddhist",
  "Sikh",
  "Jewish",
  "Atheist / Agnostic",
  "Spiritual but not religious",
  "Other",
];

const Screen11: React.FC = () => (
  <div className="flex flex-col items-center min-h-screen bg-white px-2 w-full">
    <div className="w-full flex items-center justify-center mt-10 mb-4">
      <div className="w-full max-w-[650px]">
        <ProgressTracker step={2} />
      </div>
    </div>
    <div className="flex flex-1 items-center justify-center w-full px-4">
      <form className="w-full max-w-[540px] bg-[#F7F1FA] border border-[#E6DEF9] rounded-2xl shadow-xl flex flex-col items-stretch px-8 pt-10 pb-8 text-left animate-fade-in">
        <h2 className="text-[#24124D] text-[2rem] font-bold mb-1 leading-none tracking-tight font-sans">Profile form</h2>
        <p className="text-[16px] text-[#6555A9] font-semibold mb-3 mt-2">
          7 of 8 <span className="text-[#6A36A4] font-normal ml-2">Religion &amp; Spirituality Sensitivity</span>
        </p>
        <p className="text-xs text-[#8A7DB9] font-semibold mb-5">
          All Input Fields are mandatory
          <span className="text-[#B82C1E] ml-1 text-xs align-middle">*</span>
        </p>

        {/* Q1 */}
        <label className="block text-[#201047] text-[15px] font-semibold mb-2">
          Are you open to providing therapy that incorporates clients' religious or spiritual beliefs?
        </label>
        <div className="mb-6 pl-1 space-y-2">
          <div className="flex items-center gap-3">
            <input type="radio" name="provide_religion_therapy" value="yes" id="religion-yes" className="accent-[#6555A9]" />
            <label htmlFor="religion-yes" className="text-[#493F70] text-[15px]">Yes</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="provide_religion_therapy" value="no" id="religion-no" className="accent-[#6555A9]" />
            <label htmlFor="religion-no" className="text-[#493F70] text-[15px]">No</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="provide_religion_therapy" value="depends" id="religion-depends" className="accent-[#6555A9]" />
            <label htmlFor="religion-depends" className="text-[#493F70] text-[15px]">Depends on the context</label>
          </div>
        </div>

        {/* Q2 */}
        <label className="block text-[#201047] text-[15px] font-semibold mb-1">
          Do you have prior experience working with clients from the following backgrounds?
          <span className="font-normal text-[#8577B3] text-xs ml-1">(Tick all that apply)</span>
        </label>
        <div className="flex flex-col mb-6 pl-1 gap-2">
          {backgrounds.map(bg => (
            <label key={bg} className="flex items-center gap-3 text-[#493F70] text-[15px] font-medium">
              <input type="checkbox" id={bg} className="accent-[#6555A9]" />
              <span>{bg}</span>
            </label>
          ))}
        </div>

        {/* Q3 */}
        <label className="block text-[#201047] text-[15px] font-semibold mb-1">
          How do you ensure sensitivity and respect toward religious or spiritual values during sessions?
        </label>
        <textarea
          name="religion_sensitivity_note"
          placeholder="Write Here"
          className="mb-7 bg-white border border-[#DDD3F5] rounded-md px-3 py-2 text-base min-h-[80px] text-[#493F70] focus:outline-none focus:ring-2 focus:ring-[#B2A8D2] transition"
          required
        />

        {/* Q4 */}
        <label className="block text-[#201047] text-[15px] font-semibold mb-2">
          Are you comfortable working with clients whose belief systems differ from your own?
        </label>
        <div className="mb-1 pl-1 space-y-2">
          <div className="flex items-center gap-3">
            <input type="radio" name="comfortable_different_belief" value="yes" id="belief-yes" className="accent-[#6555A9]" />
            <label htmlFor="belief-yes" className="text-[#493F70] text-[15px]">Yes</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="comfortable_different_belief" value="no" id="belief-no" className="accent-[#6555A9]" />
            <label htmlFor="belief-no" className="text-[#493F70] text-[15px]">No</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="comfortable_different_belief" value="with-boundaries" id="belief-boundaries" className="accent-[#6555A9]" />
            <label htmlFor="belief-boundaries" className="text-[#493F70] text-[15px]">With appropriate boundaries</label>
          </div>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <button type="button" className="rounded-full border-[#6555A9] text-[#6555A9] bg-transparent font-semibold text-[15px] px-7 py-2 hover:bg-[#F8F2FA] border">Back</button>
          <button type="submit" className="rounded-full bg-[#6555A9] hover:bg-[#584195] text-white font-semibold text-[15px] px-8 py-2">Next</button>
        </div>
      </form>
    </div>
  </div>
);

export default Screen11;
