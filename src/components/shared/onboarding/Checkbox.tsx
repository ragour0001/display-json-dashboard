import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className = '',
  disabled = false,
  error,
  required = false
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className={`
            w-4 h-4 
            text-blue-600 
            border-gray-300 
            rounded 
            focus:ring-blue-500
            disabled:opacity-50 
            disabled:cursor-not-allowed
          `}
        />
        <span className="text-sm text-stone-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>
      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox; 