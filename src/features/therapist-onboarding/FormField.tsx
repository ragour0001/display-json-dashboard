
import React from "react";

interface Props {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
}

const FormField: React.FC<Props> = ({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  as = "input",
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
      {as === "textarea" ? (
        <textarea
          name={name}
          id={name}
          required={required}
          placeholder={placeholder || label}
          rows={4}
          className="w-full bg-white border border-[#DDD3F5] rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#B2A8D2] transition"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder={placeholder || label}
          className="w-full bg-white border border-[#DDD3F5] rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#B2A8D2] transition"
        />
      )}
    </div>
  );
};

export default FormField;
