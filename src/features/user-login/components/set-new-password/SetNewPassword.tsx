import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FormField from '../../../../components/shared/FormField';
import SocialLogin from '../../../../components/shared/SocialLogin';
import Divider from '../../../../components/shared/Divider';
import SSOButton from '../../../../components/shared/SSOButton';
import { validatePassword } from '../../../../utils/validation';
import { authService } from '../../../../services/authService';
import './SetNewPassword.scss';

const SetNewPassword: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [newPasswordError, setNewPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [newPasswordTouched, setNewPasswordTouched] = useState<boolean>(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateForm = (): boolean => {
    let isValid = true;

    // Validate new password
    const newPasswordValidation = validatePassword(newPassword);
    if (!newPasswordValidation.isValid) {
      setNewPasswordError(newPasswordValidation.error || '');
      isValid = false;
    } else {
      setNewPasswordError('');
    }

    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required');
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleNewPasswordChange = (value: string): void => {
    setNewPassword(value);
    if (newPasswordTouched && newPasswordError) {
      const validation = validatePassword(value);
      setNewPasswordError(validation.isValid ? '' : validation.error || '');
    }
    // Also check confirm password if it's been touched
    if (confirmPasswordTouched && confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else if (confirmPasswordTouched && value === confirmPassword) {
      setConfirmPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (value: string): void => {
    setConfirmPassword(value);
    if (confirmPasswordTouched) {
      if (!value) {
        setConfirmPasswordError('Confirm password is required');
      } else if (newPassword !== value) {
        setConfirmPasswordError('Passwords do not match');
      } else {
        setConfirmPasswordError('');
      }
    }
  };

  const handleNewPasswordBlur = (): void => {
    setNewPasswordTouched(true);
    const validation = validatePassword(newPassword);
    setNewPasswordError(validation.isValid ? '' : validation.error || '');
  };

  const handleConfirmPasswordBlur = (): void => {
    setConfirmPasswordTouched(true);
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required');
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setNewPasswordTouched(true);
    setConfirmPasswordTouched(true);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const emailFromQuery = searchParams.get('email');
      if (!emailFromQuery) {
        throw new Error('Email is missing');
      }

      await authService.newPassword({
        email: emailFromQuery,
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
        isForgetPassword: 'y'
      });
      
      toast.success('Password reset successfully');
      // Redirect to login page after successful password reset
      navigate('/login');
    } catch (error: any) {
      console.error('Set new password failed:', error);
      toast.error(error.message || 'Failed to reset password');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = newPassword && confirmPassword && !newPasswordError && !confirmPasswordError;

  return (
    <main className="set-new-password-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/f9f5691f6fe38cb4eda5bee34b4d8df7284869c0?placeholderIfAbsent=true"
        alt="Password reset illustration"
        className="hero-image"
      />
      <section className="form-container">
        <div className="content-wrapper">
          <header className="form-header">
            <h2 className="title">Set a New Password</h2>
            <p className="subtitle">Create a strong password for your account</p>
          </header>

          <form onSubmit={handleSubmit} className="password-form">
            <FormField
              label="New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              onBlur={handleNewPasswordBlur}
              type="password"
              isPassword
              showValidation
              error={newPasswordError}
              touched={newPasswordTouched}
              required
              maxLength={32}
            />

            <FormField
              label="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={handleConfirmPasswordBlur}
              type="password"
              isPassword
              error={confirmPasswordError}
              touched={confirmPasswordTouched}
              required
              maxLength={32}
            />

            <button 
              type="submit" 
              className="submit-button"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          <SocialLogin />
          <Divider text="Or" />
          <SSOButton text="Login with SSO" />
        </div>
      </section>
    </main>
  );
};

export default SetNewPassword; 