import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams, useNavigate } from 'react-router-dom';
import FormField from '../../../../components/shared/FormField';
import SocialLogin from '../../../../components/shared/SocialLogin';
import Divider from '../../../../components/shared/Divider';
import SSOButton from '../../../../components/shared/SSOButton';
import { validateEmail } from '../../../../utils/validation';
import { authService } from '../../../../services/authService';
import './ResetPassword.scss';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setEmail(emailFromQuery);
      // Validate the email from query params
      const emailValidation = validateEmail(emailFromQuery);
      if (!emailValidation.isValid) {
        setEmailError(emailValidation.error || '');
      }
    }
  }, [searchParams]);

  const validateForm = (): boolean => {
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.error || '');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (value: string): void => {
    setEmail(value);
    if (emailTouched && emailError) {
      const emailValidation = validateEmail(value);
      setEmailError(emailValidation.isValid ? '' : emailValidation.error || '');
    }
  };

  const handleEmailBlur = (): void => {
    setEmailTouched(true);
    const emailValidation = validateEmail(email);
    setEmailError(emailValidation.isValid ? '' : emailValidation.error || '');
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setEmailTouched(true);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await authService.resetPassword({ email });
      toast.success('Reset link sent to your email');
      setIsSuccess(true);
    } catch (error: any) {
      console.error('Reset password failed:', error);
      // Handle specific error messages
      if (error.message?.toLowerCase().includes('user not found')) {
        toast.error('No account found with this email address. Please check your email or sign up.');
        setEmailError('No account found with this email address');
      } else {
        toast.error(error.message || 'Failed to send reset link');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = email && !emailError;

  if (isSuccess) {
    return (
      <main className="reset-password-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/f9f5691f6fe38cb4eda5bee34b4d8df7284869c0?placeholderIfAbsent=true"
          alt="Reset password illustration"
          className="hero-image"
        />
        <section className="form-container">
          <div className="form-content success-content">
            <header className="header-section">
              <div className="success-icon">✓</div>
              <h2 className="title">Check your email</h2>
              <p className="subtitle">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
            </header>

            <div className="success-message">
              <p>If you don't see the email in your inbox, please check your spam folder.</p>
              <p>The link will expire in 24 hours for security reasons.</p>
            </div>

            <div className="alternative-login-section">
              <SocialLogin />
              <Divider text="Or" />
              <SSOButton text="Login with SSO" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="reset-password-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/f9f5691f6fe38cb4eda5bee34b4d8df7284869c0?placeholderIfAbsent=true"
        alt="Reset password illustration"
        className="hero-image"
      />
      <section className="form-container">
        <div className="form-content">
          <header className="header-section">
            <h2 className="title">Reset your Password</h2>
            <p className="subtitle">
              Enter your work email, we will send you a link to reset your password
            </p>
          </header>

          <form onSubmit={handleSubmit} className="form-section">
            <FormField
              label="Email Address*"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              type="email"
              error={emailError}
              touched={emailTouched}
              required
              maxLength={100}
            />

            <button 
              type="submit" 
              className="reset-button"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send reset link'}
            </button>
          </form>
        </div>

        <div className="alternative-login-section">
          <SocialLogin />
          <Divider text="Or" />
          <SSOButton text="Login with SSO" />
        </div>
      </section>
    </main>
  );
};

export default ResetPassword; 