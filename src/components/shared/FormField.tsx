import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormField.scss';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: string;
  isPassword?: boolean;
  showForgotPassword?: boolean;
  showValidation?: boolean;
  error?: string;
  touched?: boolean;
  required?: boolean;
  status?: 'success' | 'error' | undefined;
  maxLength:number
}

interface PasswordStrength {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  isPassword = false,
  showForgotPassword = false,
  showValidation = false,
  error,
  touched = false,
  required = false,
  status,
  maxLength
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const checkPasswordStrength = (password: string): void => {
    setPasswordStrength({
      length: password?.length >= 8 && password?.length <= 32,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  useEffect(() => {
    if (isPassword) {
      checkPasswordStrength(value);
    }
  }, [value, isPassword]);

  const togglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleFocus = (): void => {
    setIsFocused(true);
    if (isPassword) {
      checkPasswordStrength(value);
    }
  };

  const handleBlur = (): void => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const handleForgotPasswordClick = () => {
    navigate('/reset-password');
  };

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
  const hasError = touched && error;
  const isValid = status === 'success';
  const showPasswordRequirements = isPassword && (isFocused || touched) && !isValid && showValidation;
  const showError = touched && error;
  const showSuccess = touched && isValid;

  return (
    <div className="form-field">
      <div className="field-header">
        <label className="field-label">{label}</label>
        {showForgotPassword && (
          <button 
            type="button" 
            className="forgot-password-link"
            onClick={handleForgotPasswordClick}
          >
            Forgot password?
          </button>
        )}
      </div>
      <div className="input-container">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`field-input ${showError ? 'error' : ''} ${showSuccess ? 'valid' : ''}`}
        />
        {isPassword && (
          <button 
            type="button" 
            className="toggle-password"
            onClick={togglePassword}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>

      <div className="validation-feedback">
        {showPasswordRequirements && (
          <div className="password-requirements">
            <div className={`requirement ${passwordStrength.length ? 'met' : ''}`}>
              Length: 8-32 characters
            </div>
            <div className={`requirement ${passwordStrength.uppercase ? 'met' : ''}`}>
              Uppercase letter
            </div>
            <div className={`requirement ${passwordStrength.lowercase ? 'met' : ''}`}>
              Lowercase letter
            </div>
            <div className={`requirement ${passwordStrength.number ? 'met' : ''}`}>
              Number
            </div>
            <div className={`requirement ${passwordStrength.special ? 'met' : ''}`}>
              Special character
            </div>
          </div>
        )}

        {showError && (
          <div className="error-message">{error}</div>
        )}

        {showSuccess && (
          <div className="success-message">✓ Looks good!</div>
        )}
      </div>
    </div>
  );
};

export default FormField; 