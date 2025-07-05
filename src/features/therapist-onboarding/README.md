# Therapist Onboarding Feature Module

This feature module contains all the screens and components for the therapist onboarding flow.

## 📁 Structure

```
src/features/therapist-onboarding/
├── README.md                     # This file
├── index.ts                      # Feature exports
│
├── 🖥️ Main Onboarding Screens (12 screens)
├── Screen1.tsx                   # Application Form
├── Screen2.tsx                   # Application Submitted
├── Screen3.tsx                   # Personal Info
├── Screen4.tsx                   # Professional Background
├── Screen5.tsx                   # Specializations
├── Screen6.tsx                   # Additional Info
├── Screen6LangProficiency.tsx    # Language Proficiency
├── Screen7.tsx                   # Credentials Upload
├── Screen8.tsx                   # Practice Details
├── Screen9ThankYou.tsx           # Thank You Submission
├── Screen10.tsx                  # Interview Scheduling
├── Screen11.tsx                  # Profile Review
├── Screen12.tsx                  # Final Steps
│
├── 🖥️ Application Flow Screens (5 screens)
├── Step13Screen.tsx              # Application Review
├── Step14Screen.tsx              # Interview Invitation
├── Step15Screen.tsx              # Interview Completed
├── Step16Screen.tsx              # Schedule Interview
├── Step17Screen.tsx              # Onboarding Complete
│
└── 🧩 Shared Components
    ├── ProgressTracker.tsx       # Progress indicator
    ├── ProgressBar.tsx           # Progress bar component
    ├── FormField.tsx             # Form input field
    ├── FormSelect.tsx            # Form select dropdown
    ├── FileUpload.tsx            # File upload component
    └── FormCard.tsx              # Form container card
```

## 🛣️ Routes

All screens are accessible via `/onboarding/` prefixed routes:

### Main Onboarding Flow
- `/onboarding/application-form` → ApplicationForm (Screen1)


- `/onboarding/application-submitted` → ApplicationSubmitted (Screen2)


- `/onboarding/personal-info` → PersonalInfo (Screen3)
- `/onboarding/professional-background` → ProfessionalBackground (Screen4)
- `/onboarding/specializations` → Specializations (Screen5)
- `/onboarding/additional-info` → AdditionalInfo (Screen6)

- `/onboarding/language-proficiency` → LanguageProficiency (Screen6LangProficiency)
- `/onboarding/credentials-upload` → CredentialsUpload (Screen7)
- `/onboarding/practice-details` → PracticeDetails (Screen8)

- `/onboarding/thank-you-submission` → ThankYouSubmission (Screen9ThankYou) --not loading

- `/onboarding/interview-scheduling` → InterviewScheduling (Screen10) -- remove we dont have any screen like this

- `/onboarding/profile-review` → ProfileReview (Screen11)
- `/onboarding/final-steps` → FinalSteps (Screen12)

### Application Flow
- `/onboarding/application-review` → ApplicationReview (Step13Screen)
- `/onboarding/interview-invitation` → InterviewInvitation (Step14Screen)
- `/onboarding/interview-completed` → InterviewCompleted (Step15Screen)
- `/onboarding/schedule-interview` → ScheduleInterview (Step16Screen)
- `/onboarding/onboarding-complete` → OnboardingComplete (Step17Screen)

## 🎨 Styling

All components maintain their existing:
- ✅ Tailwind CSS classes
- ✅ Inline styles
- ✅ Custom color schemes (`#6555A9`, `#F7F1FA`, etc.)
- ✅ Responsive design
- ✅ Animations and transitions

## 🔧 Usage

```tsx
import {
  ApplicationForm,
  ApplicationSubmitted,
  // ... other screens
  ProgressTracker,
  FormField
} from '@/features/therapist-onboarding';
```

## 📊 Total Screens: 18

- **12** Main onboarding screens (Screen1-12 + Screen6LangProficiency + Screen9ThankYou)
- **5** Application flow screens (Step13-17)
- **6** Shared components

## ✅ Features

- 🚀 **Zero external dependencies** - All UI components converted to native HTML
- 📱 **Fully responsive** - Works on all device sizes
- 🎯 **Type-safe** - Full TypeScript support
- 🔄 **Consistent routing** - All routes prefixed with `/onboarding/`
- 🎨 **Preserved styling** - All original designs maintained
- 🧩 **Modular** - Clean separation of concerns 