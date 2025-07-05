import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../../../../components/shared/SocialLogin';
import Divider from '../../../../components/shared/Divider';
import SSOButton from '../../../../components/shared/SSOButton';
import { authService } from '../../../../services/authService';
import './Verification.scss';

export interface ValidateOtpRequest {
  email: string;
  otpCode: string;
  purpose: string;
}

export interface ResendOtpRequest {
  email: string;
  purpose: string;
}

const VERIFICATION_TIMEOUT = 90; // 1:30 minutes
const RESEND_TIMEOUT = 30; // 30 seconds
const EMAIL_STORAGE_KEY = 'verification_email';

const Verification: React.FC = () => {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(() => new Array(6).fill(''));
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(30);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [resendCooldown, setResendCooldown] = useState<number>(0);
  const [verificationError, setVerificationError] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resendTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize email from localStorage or auth service
  useEffect(() => {
    const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
    const authUser = authService.getUser();
    
    if (storedEmail) {
      setUserEmail(storedEmail);
    } else if (authUser?.email) {
      setUserEmail(authUser.email);
      localStorage.setItem(EMAIL_STORAGE_KEY, authUser.email);
    } else {
      // If no email is found, redirect to login
      toast.error('No email found. Please login again.');
      navigate('/login');
    }
  }, [navigate]);

  // Memoize verification code to avoid recalculation
  const verificationCode = useMemo(() => digits.join(''), [digits]);

  // Initialize component immediately
  useEffect(() => {
    const initializeComponent = () => {
      requestAnimationFrame(() => {
        startTimer();
        setTimerStarted(true);
      });
    };

    // Preload the hero image for faster loading
    const preloadImage = () => {
      const img = new Image();
      img.src = "https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/f9f5691f6fe38cb4eda5bee34b4d8df7284869c0?placeholderIfAbsent=true";
    };

    preloadImage();
    initializeComponent();
    
    return () => {
      clearTimer();
      clearResendTimer();
    };
  }, []);

  // Check if component should be visible
  useEffect(() => {
    if (imageLoaded && timerStarted) {
      // Small delay to ensure smooth transition
      const timeout = setTimeout(() => {
        setIsInitialized(true);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [imageLoaded, timerStarted]);

  // Update completion status when digits change
  useEffect(() => {
    setIsComplete(verificationCode.length === 6);
    setVerificationError(''); // Clear error when user modifies the code
  }, [verificationCode]);

  const clearTimer = useCallback((): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const clearResendTimer = useCallback((): void => {
    if (resendTimerRef.current) {
      clearInterval(resendTimerRef.current);
      resendTimerRef.current = null;
    }
  }, []);

  const startTimer = useCallback((): void => {
    setIsExpired(false);
    clearTimer();
    
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinutes(prevMinutes => {
            if (prevMinutes > 0) {
              setSeconds(59);
              return prevMinutes - 1;
            } else {
              clearTimer();
              setIsExpired(true);
              return 0;
            }
          });
          return 59;
        }
      });
    }, 1000);
  }, [clearTimer]);

  const startResendTimer = useCallback((): void => {
    setResendCooldown(RESEND_TIMEOUT);
    clearResendTimer();
    
    resendTimerRef.current = setInterval(() => {
      setResendCooldown(prev => {
        if (prev <= 1) {
          clearResendTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearResendTimer]);

  const onImageLoad = useCallback((): void => {
    setImageLoaded(true);
  }, []);

  const handlePaste = useCallback((event: React.ClipboardEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text').trim();
    
    // Only accept if pasted data is 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newDigits = pastedData.split('');
      setDigits(newDigits);
      
      // Focus the last input
      inputRefs.current[5]?.focus();
    }
  }, []);

  const onInput = useCallback((event: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    if (isExpired) return;

    const value = event.target.value.slice(-1);

    // Validate if it's a number
    if (!/^\d*$/.test(value)) {
      event.target.value = digits[index];
      return;
    }

    // Update the digit
    setDigits(prevDigits => {
      const newDigits = [...prevDigits];
      newDigits[index] = value;
      return newDigits;
    });

    event.target.value = value;

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }, [digits, isExpired]);

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    if (isExpired) return;

    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      setDigits(prevDigits => {
        const newDigits = [...prevDigits];
        newDigits[index - 1] = '';
        return newDigits;
      });
      inputRefs.current[index - 1]?.focus();
    }
  }, [digits, isExpired]);

  const onFocus = useCallback((event: React.FocusEvent<HTMLInputElement>): void => {
    if (!isExpired) {
      event.target.select();
    }
  }, [isExpired]);

  const onVerify = useCallback(async (): Promise<void> => {
    if (isComplete && !isExpired && userEmail) {      
      try {
        // Validate OTP using authService
        const response = await authService.validateOtp({
          email: userEmail,
          otpCode: verificationCode,
          purpose: 'email_verification'
        });
        
        // Clear email from localStorage after successful verification
        localStorage.removeItem(EMAIL_STORAGE_KEY);
        toast.success('Verification successful!');
        // navigate('/dashboard');
        navigate('/user-dashboard');
      } catch (error: any) {
        console.error('Verification failed:', error.message);
        // Handle specific error messages
        if (error.message?.toLowerCase().includes('invalid otp')) {
          toast.error('he verification code you entered is incorrect. Please try again.');
          // setVerificationError('The verification code you entered is incorrect. Please try again.');
        } else {
          toast.error('Verification failed. Please try again.');
          // setVerificationError(error.message || 'Verification failed. Please try again.');
        }
        // Clear the input fields on error
        setDigits(new Array(6).fill(''));
        // Focus the first input
        inputRefs.current[0]?.focus();
      }
    }
  }, [isComplete, isExpired, verificationCode, navigate, userEmail]);

  const onResendCode = useCallback(async (): Promise<void> => {
    if (resendCooldown > 0 || !userEmail) return;
      setIsResending(true);
    
    try {
      // Resend OTP using authService
      const response = await authService.resendOtp({
        email: userEmail
            });
      toast.success('Verification code resent successfully!');
      
      setDigits(new Array(6).fill(''));
      setIsComplete(false);
      setMinutes(1);
      setSeconds(30);
      startTimer();
      startResendTimer();
    } catch (error: any) {
      console.error('Resend failed:', error);
      toast.error(error.message || 'Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
  }, [resendCooldown, startTimer, startResendTimer, userEmail]);

  // Memoize timer text to avoid recalculation
  const timerText = useMemo(() => {
    return isExpired 
      ? 'Code Expired' 
      : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [isExpired, minutes, seconds]);

  // Memoize resend text to avoid recalculation
  const resendText = useMemo(() => {
    if (resendCooldown > 0) {
      return `Resend available in ${resendCooldown}s`;
    }
    return isExpired ? "Code expired." : "Didn't receive the code?";
  }, [isExpired, resendCooldown]);

  return (
    <>
      {!isInitialized && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <main className={`verification-container ${!isInitialized ? 'hidden' : ''}`}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/f9f5691f6fe38cb4eda5bee34b4d8df7284869c0?placeholderIfAbsent=true"
          alt="Verification illustration"
          className="hero-image"
          onLoad={onImageLoad}
        />
        <section className="form-container">
          <div className="content-wrapper">
            <header className="form-header">
              <h2 className="title">Enter Verification Code</h2>
              <p className="subtitle">
                We've sent a 6-digit code to {userEmail}. Enter it below to verify your identity.
              </p>
            </header>

            <div className="verification-form">
              <div className="code-input-container">
                {digits.map((digit, index) => (
                  <div key={index} className="input-box">
                    <div className={`input-wrapper ${isExpired ? 'expired' : ''} ${verificationError ? 'error' : ''}`}>
                      <input
                        ref={el => { inputRefs.current[index] = el; }}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => onInput(e, index)}
                        onKeyDown={(e) => onKeyDown(e, index)}
                        onFocus={onFocus}
                        onPaste={index === 0 ? handlePaste : undefined}
                        className="code-digit"
                        aria-label={`Digit ${index + 1} of 6`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {verificationError && (
                <p className="error-message">
                  {verificationError}
                  {verificationError.includes('incorrect') && (
                    <span className="resend-hint">
                      {' '}You can request a new code in {resendCooldown} seconds.
                    </span>
                  )}
                </p>
              )}

              <p className={`timer-text ${isExpired ? 'expired' : ''}`}>
                {timerText}
              </p>

              <button 
                type="submit" 
                className="submit-button" 
                onClick={onVerify}
                disabled={!isComplete}
              >
                Verify
              </button>

              <button
                type="button"
                className="resend-button"
                onClick={onResendCode}
                disabled={resendCooldown > 0 || isResending}
              >
                {isResending ? 'Sending...' : resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code'}
              </button>
            </div>

            <SocialLogin />
            <Divider text="Or" />
            <SSOButton text="Login with SSO" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Verification; 