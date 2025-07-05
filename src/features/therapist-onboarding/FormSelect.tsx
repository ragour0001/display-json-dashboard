
import React from "react";

interface Props {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  multiple?: boolean;
}

const FormSelect: React.FC<Props> = ({
  label,
  name,
  options,
  required,
  multiple,
}) => {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label
        className="block text-[#201047] text-[15px] font-semibold mb-1"
        htmlFor={name}
      >
        {label}
        {required && <span className="text-[#B82C1E] ml-1">*</span>}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        className="w-full bg-white border border-[#DDD3F5] rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#B2A8D2] transition"
        multiple={multiple}
        defaultValue=""
      >
        {!multiple && <option value="">Select from below</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
