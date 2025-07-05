import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
  description?: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  name: string;
  label?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  values,
  onChange,
  name,
  label,
  error,
  className = '',
  disabled = false
}) => {
  const handleChange = (value: string) => {
    const newValues = values.includes(value)
      ? values.filter(v => v !== value)
      : [...values, value];
    onChange(newValues);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              relative flex items-start p-4
              border rounded-lg cursor-pointer
              transition-colors duration-200
              ${values.includes(option.value)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name={name}
                  value={option.value}
                  checked={values.includes(option.value)}
                  onChange={() => !disabled && handleChange(option.value)}
                  disabled={disabled}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {option.label}
                </span>
              </div>
              {option.description && (
                <p className="mt-1 text-sm text-gray-500">
                  {option.description}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default CheckboxGroup; 