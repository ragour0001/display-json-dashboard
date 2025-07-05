import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../../components/shared/FormField';
import SocialLogin from '../../../../components/shared/SocialLogin';
import Divider from '../../../../components/shared/Divider';
import SSOButton from '../../../../components/shared/SSOButton';
import { authService, SigninRequest } from '../../../../services/authService';
import { validateEmail, validateRequired } from '../../../../utils/validation';
import './LoginForm.scss';
import { DeviceInfo, deviceInfoService } from '../../services/deviceInfoService';

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

interface FormTouched {
  email: boolean;
  password: boolean;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({
    email: true,
    password: true
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
  }, [role]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error;
    }

    const passwordValidation = validateRequired(formData.password, 'Password');
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.error;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Validate field immediately on change
    if (field === 'email') {
      const emailValidation = validateEmail(value as string);
      setErrors(prev => ({
        ...prev,
        email: emailValidation.isValid ? undefined : emailValidation.error
      }));
    } else if (field === 'password') {
      const passwordValidation = validateRequired(value as string, 'Password');
      setErrors(prev => ({
        ...prev,
        password: passwordValidation.isValid ? undefined : passwordValidation.error
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
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const requestData: SigninRequest = {
        email: formData.email,
        password: formData.password,
        latitude: deviceInfo?.latitude || null,
        longitude: deviceInfo?.longitude || null,
        ipAddress: deviceInfo?.ipAddress || '',
        device: deviceInfo?.deviceName || '',
        isTempPassword: 'N'
      };

      const response = await authService.signIn(requestData);
      toast.success('Login successful');
      navigate('/verification');
    } catch (error: any) {
      toast.error('Login failed');
      console.error('Login failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  return (
    <section className="login-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/f9f5691f6fe38cb4eda5bee34b4d8df7284869c0?placeholderIfAbsent=true"
        alt="Login illustration"
        className="login-image"
      />
      <div className="form-container">
        <div className="form-header">
          <h2 className="title">Sign in</h2>
          <p className="subtitle">
            <span>New to Refill Health?</span>
            <span className="signup-link" onClick={handleSignUpClick}>Sign up for Free</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <FormField
            label="Email"
            value={formData.email}
            onChange={(value) => handleFieldChange('email', value)}
            onBlur={() => handleFieldBlur('email')}
            type="email"
            error={errors.email}
            touched={touched.email}
            required
            maxLength={100}
          />
          <FormField
            label="Password"
            value={formData.password}
            onChange={(value) => handleFieldChange('password', value)}
            onBlur={() => handleFieldBlur('password')}
            type="password"
            isPassword
            showForgotPassword
            error={errors.password}
            touched={touched.password}
            required
            maxLength={32}
          />
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>

          <SocialLogin />
          <Divider text="Or" />
          <SSOButton text="Login with SSO" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm; 