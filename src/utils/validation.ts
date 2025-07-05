export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true, error: '' };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  }

  if (password.length > 32) {
    return { isValid: false, error: 'Password cannot exceed 32 characters' };
  }
  
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one uppercase letter' };
  }
  
  if (!/[a-z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one lowercase letter' };
  }
  
  if (!/[0-9]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one number' };
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one special character' };
  }
  
  return { isValid: true, error: '' };
};

export const validateFullName = (value: string): ValidationResult => {
  if (!value) {
    return { isValid: false, error: 'Full name is required' };
  }

  if (value.length < 2) {
    return { isValid: false, error: 'Full name must be at least 2 characters long' };
  }

  if (value.length > 50) {
    return { isValid: false, error: 'Full name cannot exceed 50 characters' };
  }

  const nameRegex = /^[a-zA-Z0-9\s._-]+$/;
  if (!nameRegex.test(value)) {
    return { isValid: false, error: 'Full name can only contain letters, numbers, spaces, dots, hyphens, and underscores' };
  }

  return { isValid: true, error: '' };
};

export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true, error: '' };
}; 