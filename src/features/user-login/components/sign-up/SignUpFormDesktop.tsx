import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../../components/shared/FormField';
import SocialLogin from '../../../../components/shared/SocialLogin';
import Divider from '../../../../components/shared/Divider';
import SSOButton from '../../../../components/shared/SSOButton';
import { authService, SignupData } from '../../../../services/authService';
import { validateEmail, validatePassword, validateFullName } from '../../../../utils/validation';
import './SignUpFormDesktop.scss';
import { DeviceInfo, deviceInfoService } from '../../services/deviceInfoService';
import TermsAndConditionsDialog from '../shared/TermsAndConditionsDialog';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  agreeToTerms?: string;
}

interface FormTouched {
  fullName: boolean;
  email: boolean;
  password: boolean;
  agreeToTerms: boolean;
}

interface ValidationStatus {
  isValid: boolean;
  message: string;
}

const SignUpFormDesktop: React.FC = () => {
  const navigate = useNavigate();
  const [isTermsDialogOpen, setIsTermsDialogOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({
    fullName: false,
    email: false,
    password: false,
    agreeToTerms: false
  });

  const [validationStatus, setValidationStatus] = useState<{
    fullName: ValidationStatus;
    email: ValidationStatus;
    password: ValidationStatus;
  }>({
    fullName: { isValid: false, message: '' },
    email: { isValid: false, message: '' },
    password: { isValid: false, message: '' }
  });

  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Get device info when component initializes
    deviceInfoService.getDeviceInfo().then(
      info => {
        setDeviceInfo(info);
      }
    ).catch(error => {
      console.error('Error getting device info:', error);
    });
  }, []);

  const handleFieldChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Mark field as touched when it changes
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));

    // Validate field immediately on change
    if (field === 'fullName') {
      const validation = validateFullName(value as string);
      setValidationStatus(prev => ({
        ...prev,
        fullName: {
          isValid: validation.isValid,
          message: validation.isValid ? 'Looks good' : validation.error || ''
        }
      }));
    } else if (field === 'email') {
      const validation = validateEmail(value as string);
      setValidationStatus(prev => ({
        ...prev,
        email: {
          isValid: validation.isValid,
          message: validation.isValid ? 'Looks good' : validation.error || ''
        }
      }));
    } else if (field === 'password') {
      const validation = validatePassword(value as string);
      setValidationStatus(prev => ({
        ...prev,
        password: {
          isValid: validation.isValid,
          message: validation.isValid ? 'Looks good' : validation.error || ''
        }
      }));
    }
  };

  const handleFieldBlur = (field: keyof FormTouched) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      password: true,
      agreeToTerms: true
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const signupData: SignupData = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        agreeToTerms: formData.agreeToTerms,
        latitude: deviceInfo?.latitude || null,
        longitude: deviceInfo?.longitude || null,
        ipAddress: deviceInfo?.ipAddress || '',
        device: deviceInfo?.deviceName || '',
        userAgent: deviceInfo?.userAgent || '',
        userType: 'individual'
      };

      const response = await authService.signUp(signupData);
      toast.success('Sign up successful');
      navigate('/verification');
    } catch (error: any) {
      toast.error('Sign up failed. Please try again.');
      console.error('Sign up error:', error);
      
      if (error.response?.status === 400) {
        console.error('Bad Request:', error.response.data);
      } else {
        console.error('Unexpected error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validationStatus.fullName.isValid) {
      newErrors.fullName = validationStatus.fullName.message;
    }

    if (!validationStatus.email.isValid) {
      newErrors.email = validationStatus.email.message;
    }

    if (!validationStatus.password.isValid) {
      newErrors.password = validationStatus.password.message;
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValidPure = (): boolean => {
    return validationStatus.fullName.isValid &&
           validationStatus.email.isValid &&
           validationStatus.password.isValid &&
           formData.agreeToTerms;
  };

  const isFormValid = useMemo(() => isFormValidPure(), [
    validationStatus.fullName.isValid,
    validationStatus.email.isValid,
    validationStatus.password.isValid,
    formData.agreeToTerms
  ]);

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTermsDialogOpen(true);
  };

  return (
    <div className="page-wrapper">
      <TermsAndConditionsDialog 
        isOpen={isTermsDialogOpen} 
        onClose={() => setIsTermsDialogOpen(false)} 
      />
      <div className="signup-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/7025dffe667ba1c272d87e7720daab2cac54e11a?placeholderIfAbsent=true"
          className="hero-image"
          alt="Sign up illustration"
        />
        <section className="form-section">
          <div className="form-container">
            <div className="form-content">
              <header className="form-header">
                <h2 className="title"> Sign Up</h2>
                <p className="login-prompt">
                  Already have an account?  
                  <button 
                    type="button"
                    className="login-link" 
                    onClick={handleSignInClick}
                  >
                     &nbsp;Sign in
                  </button>
                </p>
              </header>

              <form onSubmit={handleSubmit} className="form-fields">
                <FormField
                  label="Full Name*"
                  value={formData.fullName}
                  onChange={(value) => handleFieldChange('fullName', value)}
                  onBlur={() => handleFieldBlur('fullName')}
                  error={touched.fullName ? errors.fullName : validationStatus.fullName.message}
                  touched={touched.fullName}
                  status={validationStatus.fullName.isValid ? 'success' : touched.fullName ? 'error' : undefined}
                  maxLength={50}
                />

                <FormField
                  label="Email Address*"
                  value={formData.email}
                  onChange={(value) => handleFieldChange('email', value)}
                  onBlur={() => handleFieldBlur('email')}
                  type="email"
                  error={touched.email ? errors.email : validationStatus.email.message}
                  touched={touched.email}
                  status={validationStatus.email.isValid ? 'success' : touched.email ? 'error' : undefined}
                  maxLength={100}
                />

                <FormField
                  label="Create your password*"
                  value={formData.password}
                  onChange={(value) => handleFieldChange('password', value)}
                  onBlur={() => handleFieldBlur('password')}
                  isPassword={true}
                  showValidation={true}
                  error={touched.password ? errors.password : validationStatus.password.message}
                  touched={touched.password}
                  status={validationStatus.password.isValid ? 'success' : touched.password ? 'error' : undefined}
                  maxLength={32}
                />

                <div className="terms-checkbox">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleFieldChange('agreeToTerms', e.target.checked)}
                      onBlur={() => handleFieldBlur('agreeToTerms')}
                      className={`checkbox-input ${touched.agreeToTerms && errors.agreeToTerms ? 'error' : ''}`}
                    />
                  </div>
                  <label className="terms-text">
                    I agree to the{' '}
                    <button 
                      type="button" 
                      className="terms-link" 
                      onClick={handleTermsClick}
                    >
                      Terms of Service
                    </button>
                    {' '}and acknowledge you've read our{' '}
                    <button 
                      type="button" 
                      className="terms-link" 
                      onClick={handleTermsClick}
                    >
                      Privacy Policy
                    </button>
                    .
                  </label>
                </div>
                {touched.agreeToTerms && errors.agreeToTerms && (
                  <div className="terms-error">{errors.agreeToTerms}</div>
                )}
              </form>

              <div className="actions-container">
                <button 
                  className={`create-account-btn ${!isFormValid ? 'disabled' : ''}`}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating account...' : 'Create account'}
                </button>
                <SocialLogin />
                <Divider text="Or" />
                <SSOButton text="Continue with SSO" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUpFormDesktop; 