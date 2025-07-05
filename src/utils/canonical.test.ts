// Test file to demonstrate canonical URL functionality
// Run this in browser console or add to your test suite

import { getCanonicalUrl, generateCanonicalUrl, getCanonicalConfig } from './canonical';

// Test examples for demonstration
export const testCanonicalUrls = () => {
  console.log('=== Canonical URL Test Results ===\n');

  // Test basic routes
  console.log('1. Basic Routes:');
  console.log('Home:', getCanonicalUrl('/'));
  console.log('Login:', getCanonicalUrl('/login'));
  console.log('Sign Up:', getCanonicalUrl('/sign-up'));
  console.log('Dashboard:', getCanonicalUrl('/dashboard'));
  console.log('');

  // Test onboarding routes
  console.log('2. Onboarding Routes:');
  console.log('Application Form:', getCanonicalUrl('/onboarding/application-form'));
  console.log('Application Submitted:', getCanonicalUrl('/onboarding/application-submitted'));
  console.log('Personal Info:', getCanonicalUrl('/onboarding/personal-info'));
  console.log('');

  // Test password routes
  console.log('3. Password Routes:');
  console.log('Reset Password:', getCanonicalUrl('/reset-password'));
  console.log('Verify Email:', getCanonicalUrl('/verify'));
  console.log('Set New Password:', getCanonicalUrl('/set-new-password'));
  console.log('');

  // Test route configurations
  console.log('4. Route Configurations:');
  console.log('Login config:', getCanonicalConfig('/login'));
  console.log('Sign up config:', getCanonicalConfig('/sign-up'));
  console.log('Reset password config:', getCanonicalConfig('/reset-password'));
  console.log('');

  // Test custom URL generation
  console.log('5. Custom URL Generation:');
  const customUrl = generateCanonicalUrl({
    baseUrl: 'https://refillhealth.com',
    pathname: '/test-page',
    preserveParams: ['utm_source', 'utm_campaign'],
    removeTrailingSlash: true
  });
  console.log('Custom URL:', customUrl);
  console.log('');

  console.log('=== Test Complete ===');
};

// Expected outputs for validation
export const expectedResults = {
  home: 'https://refillhealth.com/',
  login: 'https://refillhealth.com/login',
  signUp: 'https://refillhealth.com/sign-up',
  dashboard: 'https://refillhealth.com/dashboard',
  applicationForm: 'https://refillhealth.com/onboarding/application-form',
  applicationSubmitted: 'https://refillhealth.com/onboarding/application-submitted',
  resetPassword: 'https://refillhealth.com/reset-password',
  verify: 'https://refillhealth.com/verify'
};

// Validation function
export const validateCanonicalUrls = (): boolean => {
  const results = {
    home: getCanonicalUrl('/'),
    login: getCanonicalUrl('/login'),
    signUp: getCanonicalUrl('/sign-up'),
    dashboard: getCanonicalUrl('/dashboard'),
    applicationForm: getCanonicalUrl('/onboarding/application-form'),
    applicationSubmitted: getCanonicalUrl('/onboarding/application-submitted'),
    resetPassword: getCanonicalUrl('/reset-password'),
    verify: getCanonicalUrl('/verify')
  };

  let allValid = true;
  Object.keys(expectedResults).forEach(key => {
    const expected = expectedResults[key as keyof typeof expectedResults];
    const actual = results[key as keyof typeof results];
    if (expected !== actual) {
      console.error(`❌ ${key}: Expected ${expected}, got ${actual}`);
      allValid = false;
    } else {
      console.log(`✅ ${key}: ${actual}`);
    }
  });

  return allValid;
}; 