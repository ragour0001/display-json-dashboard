// Therapist Onboarding Feature Module
// Main onboarding flow screens
export { default as ApplicationForm } from "./Screen1";
export { default as ApplicationSubmitted } from "./Screen2";
export { default as PersonalInfo } from "./Screen3";
export { default as ThankYouSubmission } from "./Screen9ThankYou";
export { default as InterviewScheduling } from "./Screen10";
export { default as ProfileReview } from "./Screen11";
export { default as FinalSteps } from "./Screen12";

// Application flow screens (detailed implementations)
export { default as ApplicationReview } from "./Step13Screen";
export { default as InterviewInvitation } from "./Step14Screen";
export { default as InterviewInvitationNew } from "./InterviewInvitationScreen";
export { default as InterviewCompleted } from "./Step15Screen";
export { default as ScheduleInterview } from "./Step16Screen";
export { default as OnboardingComplete } from "./Step17Screen";

// Shared components
export { ProgressTracker } from "./ProgressTracker";
export { ProgressBar } from "./ProgressBar";
export { default as FormField } from "./FormField";
export { default as FormSelect } from "./FormSelect";
export { default as FileUpload } from "./FileUpload";
export { default as FormCard } from "./FormCard"; 

export const jsonData:any = {
    "form_title": "Refill Health – Therapist Screening & Onboarding Form (Global Standard Version)",
    "total_steps": 9,
    "sections": [
      {
        "name": "Qualifications & Certifications",
        "order": 1,
        "questions": [
          {
            "id": 6,
            "type": "select",
            "label": "Highest Educational Qualification",
            "required": true,
            "options": [
              { "value": "ma_psychology", "text": "M.A./M.Sc. in Psychology (India)" },
              { "value": "mphil_rci", "text": "M.Phil. in Clinical Psychology (RCI Registered – India)" },
              { "value": "phd_psych", "text": "PhD / PsyD in Psychology or Clinical Psychology (International)" },
              { "value": "doctorate_counseling", "text": "Doctorate in Counseling / Health Psychology (Accredited)" },
              { "value": "msw_lcsw", "text": "MSW with Clinical Practice / Licensed Clinical Social Worker (LCSW – US)" },
              { "value": "lmhc", "text": "Licensed Mental Health Counselor (LMHC – US/Canada)" },
              { "value": "registered_psychotherapist", "text": "Registered Psychotherapist (UK / Canada / Australia)" },
              { "value": "masters_international", "text": "Master's Degree in Psychotherapy or Mental Health Counseling (International)" },
              { "value": "pg_diploma", "text": "PG Diploma in Counseling / Psychotherapy" },
              { "value": "other", "text": "Other (Please specify)" }
            ]
          },
          {
            "id": 7,
            "type": "checkbox",
            "label": "Certifications",
            "required": false,
            "options": [
              { "value": "cbt", "text": "CBT / REBT" },
              { "value": "trauma", "text": "Trauma-Informed Therapy" },
              { "value": "mindfulness", "text": "Mindfulness-Based Interventions" },
              { "value": "emdr", "text": "EMDR" },
              { "value": "dbt", "text": "DBT" },
              { "value": "addiction", "text": "Addiction Counseling" },
              { "value": "grief", "text": "Grief or Crisis Intervention" },
              { "value": "neuro", "text": "Neuropsychological Rehabilitation" },
              { "value": "other", "text": "Other (Please specify)" }
            ]
          },
          {
            "id": 8,
            "type": "group",
            "label": "Licensure / Registration Details(If applicable)",
            "required": false,
            "fields": [
              { "id": "regulatory_body", "type": "text", "label": "Regulatory Body / Council" },
              { "id": "country_jurisdiction", "type": "text", "label": "Country / Jurisdiction" },
              { "id": "registration_number", "type": "text", "label": "Registration Number" },
              { "id": "expiry_date", "type": "date", "label": "Expiry Date (if any)" }
            ]
          }
        ]
      },
      {
        "name": "Work Experience",
        "order": 2,
        "questions": [
          {
            "id": 9,
            "type": "text",
            "inputType": "number",
            "label": "Total Years of Clinical Practice",
            "placeholder": "Mention Years",
            "required": true
          },
          {
            "id": 10,
            "type": "checkbox",
            "label": "Client Demographics Served",
            "required": true,
            "options": [
              { "value": "adolescents", "text": "Adolescents" },
              { "value": "working_professionals", "text": "Working Professionals" },
              { "value": "couples", "text": "Couples / Families" },
              { "value": "blue_collar", "text": "Blue-Collar Workforce" },
              { "value": "lgbtq", "text": "LGBTQ+" },
              { "value": "trauma_survivors", "text": "Trauma Survivors / Veterans" },
              { "value": "neurodiverse", "text": "Neurodiverse Individuals" },
              { "value": "other", "text": "Other" }
            ]
          },
          {
            "id": 11,
            "type": "multi_text",
            "label": "Therapy Modalities Practiced",
            "max_entries": 3
          },
          {
            "id": 12,
            "type": "checkbox",
            "label": "Familiarity with Workplace Mental Health Contexts",
            "required": false,
            "options": [
              { "value": "eap", "text": "EAP Models" },
              { "value": "org_behavior", "text": "Organizational Behavior & Well-being" },
              { "value": "leadership", "text": "Leadership or Managerial Counseling" },
              { "value": "conflict", "text": "Conflict & Team Dynamics" },
              { "value": "none", "text": "None" },
              { "value": "willing", "text": "Willing to Learn" }
            ]
          }
        ]
      },
      {
        "name": "Digital & Clinical Readiness",
        "order": 3,
        "questions": [
          {
            "id": 13,
            "type": "radio",
            "label": "Have you conducted online therapy before?",
            "required": true,
            "options": [
              { "value": "yes", "text": "Yes" },
              { "value": "no", "text": "No" }
            ]
          },
          {
            "id": 14,
            "type": "checkbox",
            "label": "Platforms Used",
            "required": false,
            "options": [
              { "value": "zoom", "text": "Zoom" },
              { "value": "google_meet", "text": "Google Meet" },
              { "value": "whatsapp", "text": "WhatsApp / Phone" },
              { "value": "refill_app", "text": "Refill Health App or Similar" },
              { "value": "other", "text": "Other" }
            ]
          },
          {
            "id": 15,
            "type": "radio",
            "label": "Do you maintain digital clinical notes or documentation?",
            "required": true,
            "options": [
              { "value": "yes", "text": "Yes" },
              { "value": "no", "text": "No" },
              { "value": "training", "text": "Would like training" }
            ]
          }
        ]
      },
      {
        "name": "Clinical Scenarios",
        "order": 4,
        "questions": [
          { "id": 16, "type": "textarea", "label": "Your approach to managing clients with suicidal ideation", "rows": 4 },
          { "id": 17, "type": "textarea", "label": "How do you handle cultural sensitivity in therapy?", "rows": 4 },
          { "id": 18, "type": "textarea", "label": "Describe an experience of handling workplace stress, burnout, or conflict", "rows": 4 }
        ]
      },
      {
        "name": "Refill Health Role Alignment",
        "order": 5,
        "questions": [
          { "id": 19, "type": "textarea", "label": "Why do you want to be part of Refill Health?", "rows": 4 },
          {
            "id": 20,
            "type": "checkbox",
            "label": "Which Refill Health domains would you like to serve?",
            "options": [
              { "value": "b2b", "text": "B2B (Organizational Mental Health / EAP)" },
              { "value": "b2e", "text": "B2E (Employee Self-Help & Resilience Programs)" },
              { "value": "b2c", "text": "B2C (Individual Therapy & Personal Growth)" },
              { "value": "insightx", "text": "InsightX Audits & Behavioral Assessment" }
            ]
          },
          {
            "id": 21,
            "type": "radio",
            "label": "Are you open to participating in ongoing Refill Health training & onboarding?",
            "options": [
              { "value": "yes", "text": "Yes" },
              { "value": "no", "text": "No" }
            ]
          },
          { "id": 22, "type": "text", "label": "Weekly Availability (approximate hours per week)" }
        ]
      },
      {
        "name": "Language Proficiency",
        "order": 6,
        "questions": [
          { "id": 23, "type": "text", "label": "Primary Language(s) Spoken" },
          {
            "id": 24,
            "type": "checkbox",
            "label": "Other Languages You Are Proficient In",
            "options": [
              { "value": "english", "text": "English" },
              { "value": "hindi", "text": "Hindi" },
              { "value": "telugu", "text": "Telugu" },
              { "value": "tamil", "text": "Tamil" },
              { "value": "kannada", "text": "Kannada" },
              { "value": "bengali", "text": "Bengali" },
              { "value": "marathi", "text": "Marathi" },
              { "value": "malayalam", "text": "Malayalam" },
              { "value": "urdu", "text": "Urdu" },
              { "value": "gujarati", "text": "Gujarati" },
              { "value": "punjabi", "text": "Punjabi" },
              { "value": "spanish", "text": "Spanish" },
              { "value": "french", "text": "French" },
              { "value": "arabic", "text": "Arabic" },
              { "value": "mandarin", "text": "Mandarin" },
              { "value": "other", "text": "Other (Please specify)" }
            ]
          },
          {
            "id": 25,
            "type": "radio",
            "label": "Are you comfortable conducting therapy in languages selected above?",
            "options": [
              { "value": "yes", "text": "Yes" },
              { "value": "no", "text": "No" },
              { "value": "text_only", "text": "Only in writing (text-based support)" }
            ]
          }
        ]
      },
      {
        "name": "Religion & Spirituality Sensitivity",
        "order": 7,
        "questions": [
          {
            "id": 26,
            "type": "radio",
            "label": "Are you open to providing therapy that incorporates clients' religious or spiritual beliefs?",
            "options": [
              { "value": "yes", "text": "Yes" },
              { "value": "no", "text": "No" },
              { "value": "depends", "text": "Depends on the context" }
            ]
          },
          {
            "id": 27,
            "type": "checkbox",
            "label": "Do you have prior experience working with clients from the following backgrounds?",
            "options": [
              { "value": "hindu", "text": "Hindu" },
              { "value": "muslim", "text": "Muslim" },
              { "value": "christian", "text": "Christian" },
              { "value": "buddhist", "text": "Buddhist" },
              { "value": "sikh", "text": "Sikh" },
              { "value": "jewish", "text": "Jewish" },
              { "value": "atheist", "text": "Atheist / Agnostic" },
              { "value": "spiritual", "text": "Spiritual but not religious" },
              { "value": "other", "text": "Other (Please specify)" }
            ]
          },
          {
            "id": 28,
            "type": "textarea",
            "label": "How do you ensure sensitivity and respect toward religious or spiritual values during sessions?",
            "rows": 4
          },
          {
            "id": 29,
            "type": "radio",
            "label": "Are you comfortable working with clients whose belief systems differ from your own?",
            "options": [
              { "value": "yes", "text": "Yes" },
              { "value": "no", "text": "No" },
              { "value": "with_boundaries", "text": "With appropriate boundaries" }
            ]
          }
        ]
      },{
        "name": "Miscellaneous",
        "order": 8,
        "questions": [
          {
            "id": 201,
            "type": "select",
            "label": "Preferred Time Zone",
            "required": true,
            "multiple": false,
            "options": [
              { "value": "ist", "text": "IST" },
              { "value": "est", "text": "EST" },
              { "value": "pst", "text": "PST" },
              { "value": "gmt", "text": "GMT" },
              { "value": "other", "text": "Other" }
            ]
          },
          {
            "id": 202,
            "type": "select",
            "label": "Time Zone Restriction",
            "required": true,
            "multiple": false,
            "options": [
              { "value": "no_restriction", "text": "No Restriction" },
              { "value": "specific_restriction", "text": "Specific Restrictions" }
            ]
          },
          {
            "id": 203,
            "type": "radio",
            "label": "Shift Preferences",
            "required": true,
            "options": [
              { "value": "morning", "text": "Morning" },
              { "value": "afternoon", "text": "Afternoon" },
              { "value": "evening", "text": "Evening" },
              { "value": "night", "text": "Night" }
            ]
          },
          {
            "id": 204,
            "type": "textarea",
            "label": "Let us know about your Journey",
            "placeholder": "Share your professional journey here...",
            "required": false,
            "rows": 4
          },
          {
            "id": 205,
            "type": "textarea",
            "label": "Let us know your Success Story",
            "placeholder": "Share your success stories here...",
            "required": false,
            "rows": 4
          }
        ]
      },
      {
        "name": "Attachments",
        "order": 9,
        "questions": [
          { "id": 30, "type": "file", "label": "Upload Resume / CV (PDF)", "accept": ".pdf" },
          { "id": 31, "type": "file", "label": "Upload Proof of Education & Licensure", "accept": ".pdf,.jpg,.png" },
          { "id": 32, "type": "file", "label": "Optional: Anonymized Session Note or Sample Case Summary", "accept": ".pdf,.jpg,.png" }
        ]
      }
    ]
  };