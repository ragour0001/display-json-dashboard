import { Step } from '@/components/ProgressBar/ProgressBar';

export const ONBOARDING_STEPS: Step[] = [
  { id: 'submit-form', label: 'Submit Form' },
  { id: 'profile-review', label: 'Profile Review' },
  { id: 'profile-form', label: 'Profile Form' },
  { id: 'interview', label: 'Interview' },
  { id: 'done', label: 'Done' }
];

// Current step indices for each screen
export const STEP_INDICES = {
  PERSONAL_INFO: 0,
  PROFESSIONAL_BACKGROUND: 0,
  SPECIALIZATIONS: 0,
  ROLE_ALIGNMENT: 0,
  LANGUAGE_PROFICIENCY: 0,
  ADDITIONAL_INFO: 0,
  CREDENTIALS_UPLOAD: 0,
  MISCELLANEOUS_INFO: 0,
  PRACTICE_DETAILS: 1,
  THANK_YOU: 1,
  INTERVIEW_SCHEDULING: 2,
  PROFILE_REVIEW: 2,
  FINAL_STEPS: 3,
  APPLICATION_REVIEW: 3,
  INTERVIEW_INVITATION: 3,
  INTERVIEW_COMPLETED: 4,
  ONBOARDING_COMPLETE: 4
} as const; 