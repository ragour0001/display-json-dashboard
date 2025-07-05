import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  className = "",
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false
}) => (
  <div className={`w-full text-base tracking-wide whitespace-nowrap rounded min-h-14 text-stone-700 ${className}`}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    )}
    <div className={`flex-1 w-full rounded border ${
      error 
        ? 'border-red-500' 
        : 'border-[color:var(--M3-sys-light-outline,#837568)]'
    }`}>
      <div className="flex flex-1 gap-1 items-start py-1 pl-4 rounded size-full">
        <div className="flex flex-col flex-1 shrink justify-center py-3 w-full basis-0 min-h-12 min-w-60">
          <input
            type={type}
            placeholder={placeholder || label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={`
              text-base leading-[24px] text-stone-700 
              bg-transparent border-none outline-none w-full
              disabled:bg-gray-100 disabled:cursor-not-allowed
              focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `}
          />
        </div>
      </div>
    </div>
    {error && (
      <p className="mt-2 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

export default InputField; 