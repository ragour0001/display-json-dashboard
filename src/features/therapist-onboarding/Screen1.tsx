"use client";
import * as React from 'react';
import { useState, Fragment, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import TherapistOnboardService, { TherapistDocument } from './services/therapist-onboard.service';

interface ProgressIndicatorProps {
  currentStep?: number; // 0-based index
}

export function ProgressIndicator({ currentStep = 0 }: ProgressIndicatorProps) {
  const steps = [
    { label: 'Submit Form' },
    { label: 'Profile Review' },
    { label: 'Profile Form' },
    { label: 'Interview' },
    { label: 'Done' }
  ];

  return (
    <section className="flex items-end gap-0">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center">
              <span className={`text-sm font-medium mb-2 whitespace-nowrap ${isActive || isCompleted ? 'text-emerald-700' : 'text-gray-500'
                }`}>
                {step.label}
              </span>
              <img
                src={isActive || isCompleted
                  ? "https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/4c9a1adc1d23fd342c68079da48a45a1a6b45712?placeholderIfAbsent=true"
                  : "https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/eaf138f4c408fb0f0f2834700994c694f4d91c15?placeholderIfAbsent=true"
                }
                alt={`${step.label} progress step`}
                className="object-contain shrink-0 aspect-square w-[34px]"
              />
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center pb-[17px] px-4">
                <div className={`w-[120px] h-1 rounded-lg ${isCompleted ? 'bg-emerald-700' : 'bg-stone-300'
                  }`} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
}

interface InputFieldProps {
  label: string;
  type?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

const InputField = ({ label, type = "text", className = "", value, onChange, error, required }: InputFieldProps) => (
  <div className={`w-full text-base tracking-wide whitespace-nowrap rounded min-h-14 text-stone-700 ${className}`}>
    <div className={`flex-1 w-full rounded border ${error ? 'border-red-500' : 'border-solid border-[color:var(--M3-sys-light-outline,#837568)]'}`}>
      <div className="flex flex-1 gap-1 items-start py-1 pl-4 rounded size-full">
        <div className="flex flex-col flex-1 shrink justify-center py-3 w-full basis-0 min-h-12 min-w-60">
          <input
            type={type}
            placeholder={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-base leading-[24px] text-stone-700 bg-transparent border-none outline-none w-full"
          />
        </div>
      </div>
    </div>
    {error && (
      <p className="mt-2 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

interface DropdownProps {
  label: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}

const Dropdown = ({ label, className = "", value, onChange, options, error, required }: DropdownProps) => (
  <div className={`flex-1 shrink rounded basis-0 min-h-14 min-w-60 ${className}`}>
    <div className={`flex-1 w-full rounded border ${error ? 'border-red-500' : 'border-solid border-[color:var(--M3-sys-light-outline,#837568)]'}`}>
      <div className="flex flex-1 gap-1 items-start py-1 pl-4 rounded size-full">
        <div className="flex flex-col flex-1 shrink justify-center py-3 text-base tracking-wide basis-0 min-h-12 text-stone-700">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-base leading-[24px] text-stone-700 bg-transparent border-none outline-none w-full appearance-none"
          >
            <option value="" disabled>{label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center items-center w-12 min-h-12">
          <div className="flex overflow-hidden gap-2.5 justify-center items-center w-full max-w-10 rounded-[100px]">
            <div className="flex gap-2.5 justify-center items-center self-stretch p-2 my-auto w-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/98914e5861e1ef7f4b6c806237f4eda22606c287?placeholderIfAbsent=true"
                alt="Dropdown arrow"
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {error && (
      <p className="mt-2 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const BenefitItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex gap-2.5 items-center mt-5 w-full max-md:max-w-full">
    <img
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
    />
    <p className="self-stretch my-auto text-white text-lg leading-7">{text}</p>
  </div>
);

const InfoSection = () => {
  const benefits = [
    "Flexible Scheduling: Work anytime — full-time, part-time, or hybrid.",
    "Diverse Client Base: Serve motivated clients from both corporate and individual sectors.",
    "AI-Powered Matching: Get clients tailored to your skills and preferences.",
    "Therapist Dashboard: Access easy, integrated tools for notes and tracking.",
    "Supervision Support: Join expert-led reviews and peer learning circles.",
  ];

  return (
    <article className="overflow-hidden rounded-xl flex-shrink-0" style={{ width: '549px', height: '989px' }}>
      <div className="flex relative flex-col pt-40 w-full rounded-xl h-full max-md:pt-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/2c9af7a0f9d5dd90245189b2a5f96f89e33556d1?placeholderIfAbsent=true"
          alt=""
          className="object-cover absolute inset-0 size-full rounded-xl"
        />
        <div className="flex relative flex-col px-9 pt-56 pb-16 w-full h-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/af174b0c04fc13b9e2848806e1a9bab1dc3ee758?placeholderIfAbsent=true"
            alt=""
            className="object-cover absolute inset-0 size-full rounded-xl"
          />
          <div className="relative max-md:max-w-full">
            <div className="max-w-full text-white w-[422px]">
              <h2 className="text-4xl font-bold leading-10 max-md:max-w-full">
                Join Refill Health as a Therapist
              </h2>
              <p className="mt-3.5 text-xl font-semibold leading-6 max-md:max-w-full">
                Make a meaningful impact on mental well-being across communities.
              </p>
            </div>
            <div className="mt-10 w-full text-lg leading-7 text-white max-md:max-w-full">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} icon="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/ce647bd2f8767dc558ab2a3bce468336a37892dd?placeholderIfAbsent=true" text={benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    email: '',
    countryId: '',
    phoneNumber: '',
    alternatePhone: '',
    linkedinUrl: '',
    howDidYouHearAboutUsId: '',
    city: '',
    state: '',
    zipCode: '',
    careServiceCategoryId: '',
    agreeWithTerms: '',
    effStartDate: '',
    effEndDate: '',
    isActive: true,
    createdBy: '',
    updatedBy: '',
    historyProfileUrl: '',
    activeProfileUrl: '',
    activeProfileBackgroundUrl: '',
    historyProfileBackgroundUrl: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Options for dropdowns
  const countryOptions = [
    { value: '1', label: 'United States' },
    { value: '2', label: 'Canada' },
    { value: '3', label: 'United Kingdom' },
    { value: '4', label: 'Australia' },
    { value: '5', label: 'India' }
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  const howDidYouHearOptions = [
    { value: '1', label: 'Social Media' },
    { value: '2', label: 'Search Engine' },
    { value: '3', label: 'Referral' },
    { value: '4', label: 'Advertisement' },
    { value: '5', label: 'Other' }
  ];

  const careServiceCategoryOptions = [
    { value: '1', label: 'Individual Therapy' },
    { value: '2', label: 'Couples Therapy' },
    { value: '3', label: 'Family Therapy' },
    { value: '4', label: 'Group Therapy' },
    { value: '5', label: 'Specialized Counseling' }
  ];

  const stateOptions = [
    { value: 'ca', label: 'California' },
    { value: 'ny', label: 'New York' },
    { value: 'tx', label: 'Texas' },
    { value: 'fl', label: 'Florida' },
    { value: 'wa', label: 'Washington' }
  ];

  const cityOptions = [
    { value: 'sf', label: 'San Francisco' },
    { value: 'la', label: 'Los Angeles' },
    { value: 'nyc', label: 'New York City' },
    { value: 'houston', label: 'Houston' },
    { value: 'miami', label: 'Miami' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Real-time validation for each field
    let error = '';
    switch (field) {
      case 'fullName':
        if (!value.trim()) error = 'Full Name is required.';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required.';
        else if (!validateEmail(value)) error = 'Invalid email address.';
        break;
      case 'countryId':
        if (!value) error = 'Country is required.';
        break;
      case 'phoneNumber':
        if (!value.trim()) error = 'Phone number is required.';
        else if (!/^\d{7,15}$/.test(value.replace(/\D/g, ''))) error = 'Invalid phone number.';
        break;
      case 'state':
        if (!value.trim()) error = 'State/Province is required.';
        break;
      case 'city':
        if (!value.trim()) error = 'City is required.';
        break;
      case 'linkedinUrl':
        if (value && !validateLinkedIn(value)) error = 'Invalid LinkedIn URL.';
        break;
      default:
        break;
    }
    setFormErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    // Validate each file
    const validFiles = files.filter(file => {
      const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
      const maxSize = 12 * 1024 * 1024; // 12MB

      if (!allowedTypes.includes(file.type)) {
        alert(`File ${file.name} is not a supported type. Please upload a PDF, PNG, JPEG, or Word document.`);
        return false;
      }

      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. File size must be less than 12MB.`);
        return false;
      }

      return true;
    });

    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateEmail = (email: string) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const validateLinkedIn = (url: string) => {
    return url === '' || /^https?:\/\/(www\.)?linkedin\.com\/.+/.test(url);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    else if (!validateEmail(formData.email)) errors.email = 'Invalid email address.';
    if (!formData.countryId) errors.countryId = 'Country is required.';
    if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required.';
    if (!formData.state.trim()) errors.state = 'State/Province is required.';
    if (!formData.city.trim()) errors.city = 'City is required.';
    if (formData.linkedinUrl && !validateLinkedIn(formData.linkedinUrl)) errors.linkedinUrl = 'Invalid LinkedIn URL.';
    if (!agreedToTerms) errors.agreedToTerms = 'You must agree to the terms.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error("Please fix the errors before submitting.");
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    try {
      const therapistData = {
        applicantId: 0,
        fullName: formData.fullName,
        age: 0,
        gender: formData.gender || '',
        email: formData.email,
        countryId: parseInt(formData.countryId),
        phoneNumber: formData.phoneNumber,
        alternatePhone: formData.alternatePhone || '',
        linkedinUrl: formData.linkedinUrl || '',
        howDidYouHearAboutUsId: formData.howDidYouHearAboutUsId ? parseInt(formData.howDidYouHearAboutUsId) : 0,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode || '',
        careServiceCategoryId: formData.careServiceCategoryId ? parseInt(formData.careServiceCategoryId) : 0,
        agreeWithTerms: agreedToTerms ? 'yes' : 'no',
        effStartDate: new Date().toISOString().split('T')[0],
        effEndDate: new Date().toISOString().split('T')[0],
        isActive: true,
        createdBy: formData.email,
        updatedBy: formData.email,
        historyProfileUrl: '',
        activeProfileUrl: '',
        activeProfileBackgroundUrl: '',
        historyProfileBackgroundUrl: ''
      };

      const applicationResponse = await TherapistOnboardService.submitApplication(therapistData);
      
      if (!applicationResponse.success) {
        if (applicationResponse.error?.includes('found')) {
          toast.success('This email address is already registered. Please use a different email.');
        }
        toast.success(applicationResponse.error || 'Failed to submit application.');
      }
      
      toast.success('Application submitted successfully!');

      if (uploadedFiles.length > 0) {
        const documents: TherapistDocument[] = uploadedFiles.map((file, index) => ({
          documentType: 'application',
          documentName: file.name,
          degreeAssociated: 'General',
          filePath: `/uploads/${file.name}`,
          blobId: `blob_${Date.now()}_${index}`,
          fileSize: file.size.toString(),
          contentType: file.type,
          uploadDate: new Date().toISOString()
        }));

        const therapistId = applicationResponse.data?.id || 65;
        
        const uploadResponse = await TherapistOnboardService.uploadDocuments(
          therapistId,
          documents,
          uploadedFiles
        );

        if (uploadResponse.success) {
          toast.success('Documents uploaded successfully!');
        } else {
          toast.warn('Application submitted, but document upload failed. You can add them later.');
        }
      }
      
      navigate('/onboarding/application-submitted');

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-start mb-12" style={{ gap: '27px', flex: '1 0 0' }}>
      <form onSubmit={handleSubmit} className="flex flex-col items-start w-full pb-8" style={{ gap: '27px' }}>
        <InputField
          label="Full Name"
          value={formData.fullName}
          onChange={(value: string) => handleInputChange('fullName', value)}
          required
          error={formErrors.fullName}
        />

        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value: string) => handleInputChange('email', value)}
          required
          error={formErrors.email}
        />

        <div className="flex gap-4 w-full">
          <Dropdown
            label="Country"
            value={formData.countryId}
            onChange={(value: string) => handleInputChange('countryId', value)}
            options={countryOptions}
            error={formErrors.countryId}
          />

          <InputField
            label="Phone Number"
            type="tel"
            value={formData.phoneNumber}
            onChange={(value: string) => handleInputChange('phoneNumber', value)}
            required
            error={formErrors.phoneNumber}
          />
        </div>

        <div className="flex gap-4 w-full">
          <Dropdown
            label="State/Province"
            value={formData.state}
            onChange={(value: string) => handleInputChange('state', value)}
            options={stateOptions}
            error={formErrors.state}
          />
          <Dropdown
            label="City"
            value={formData.city}
            onChange={(value: string) => handleInputChange('city', value)}
            options={cityOptions}
            error={formErrors.city}
          />
        </div>

        <InputField
          label="LinkedIn Profile URL (Optional)"
          value={formData.linkedinUrl}
          onChange={(value: string) => handleInputChange('linkedinUrl', value)}
          error={formErrors.linkedinUrl}
        />

        <Dropdown
          label="How did you hear about us? (Optional)"
          value={formData.howDidYouHearAboutUsId}
          onChange={(value: string) => handleInputChange('howDidYouHearAboutUsId', value)}
          options={howDidYouHearOptions}
        />

        <section className="w-full max-md:max-w-full">
          <h3 className="text-xl font-bold text-zinc-800 mb-2.5">Upload Documents (Optional)</h3>
          <div className="flex overflow-hidden relative flex-col justify-center items-start p-4 w-full text-center bg-white rounded-2xl border border-dashed border-[color:var(--Schemes-Primary,#006B5F)] min-h-[379px] max-md:max-w-full">
            {uploadedFiles.length > 0 ? (
              <div className="flex absolute top-2/4 left-2/4 z-0 flex-col justify-center items-center -translate-x-2/4 -translate-y-2/4 max-md:max-w-full">
                <div className="flex flex-col items-center text-green-600 max-md:max-w-full">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-zinc-900 mb-2">{uploadedFiles.length} file(s) uploaded</p>
                  <div className="space-y-2 mb-4">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-700">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex absolute top-2/4 left-2/4 z-0 flex-col justify-center items-center -translate-x-2/4 -translate-y-2/4 max-md:max-w-full">
                <div className="flex flex-col items-center max-md:max-w-full">
                  <div className="flex flex-col items-center text-zinc-900 max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/eada3b6dd04f3054dbba217ad0420d336a3983b3?placeholderIfAbsent=true"
                      alt="Upload icon"
                      className="object-contain w-8 aspect-square"
                    />
                    <p className="mt-3 text-xl leading-none text-zinc-900">
                      Choose a file and or drag and drop it here
                    </p>
                    <p className="mt-3 text-base leading-none text-zinc-900 max-md:max-w-full">
                      PDF, PNG, JPEG, Word files are supported. Size &lt; 12MB
                    </p>
                  </div>
                  <label className="flex overflow-hidden flex-col justify-center mt-8 max-w-full text-sm font-medium tracking-normal leading-none text-emerald-700 border border-solid border-[color:var(--Schemes-Primary,#006B5F)] min-h-10 rounded-[100px] w-[129px] cursor-pointer hover:bg-emerald-50">
                    <span className="text-sm text-emerald-700 leading-[20px] px-6 py-2">
                      Browse Files
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                      multiple
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="flex gap-1 items-center self-start">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="hidden"
            />
            <div className="flex justify-center items-center p-1 w-8 h-8">
              <div className={`flex items-center justify-center rounded-sm border-2 h-[18px] min-h-[18px] w-[18px] ${agreedToTerms
                ? 'border-emerald-700 bg-emerald-700'
                : 'border-[color:var(--M3-sys-light-on-surface-variant,#50453A)]'
                }`}>
                {agreedToTerms && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-base tracking-wide text-center text-zinc-900 ml-2">
              I Agree to Terms and conditions
            </span>
          </label>
        </div>
        {formErrors.agreedToTerms && (
          <p className="text-sm text-red-600">
            {formErrors.agreedToTerms}
          </p>
        )}

        <button
          type="submit"
          disabled={!agreedToTerms || isSubmitting}
          className="flex justify-center items-center w-full text-base font-medium tracking-normal text-white whitespace-nowrap max-md:max-w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch my-auto w-full bg-emerald-700 basis-0 min-w-60 rounded-[100px] max-md:max-w-full">
            <span className="gap-2 self-stretch px-6 py-4 my-auto text-white max-md:px-5">
              {isSubmitting ? "Submitting..." : "Submit"}
            </span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default function TherapistApplication() {
  const navigate = useNavigate();

  const handleLinkedInApply = () => {
    // In a real app, this would handle LinkedIn OAuth
    console.log('LinkedIn application clicked');
    alert('LinkedIn integration would be implemented here.');
  };

  return (
    <section className="flex flex-col" style={{ marginTop: '140px', marginBottom: '100px', marginLeft: '96px', marginRight: '90px' }}>
      <div className="flex justify-center items-center w-full mb-16">
        <ProgressIndicator />
      </div>

      <div
        className="flex overflow-hidden items-start bg-gray-100 rounded-2xl shadow-[0px_1px_2px_rgba(0,0,0,0.3)] max-md:max-w-full"
        style={{
          height: 'auto',
          minHeight: '1327px',
          padding: '46px 52px',
          gap: '43px',
          alignSelf: 'stretch'
        }}
      >
        <div className="flex flex-col items-start w-full" style={{ gap: '43px' }}>
          <h2 className="self-center text-2xl font-bold leading-none text-center text-zinc-900 max-md:max-w-full">
            Start Your Application
          </h2>
          <div className="flex items-start w-full" style={{ gap: '43px' }}>
            <InfoSection />
            <ApplicationForm />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-8 py-6">
        <button
          onClick={handleLinkedInApply}
          className="flex overflow-hidden flex-col justify-center max-w-full text-sm font-medium tracking-normal leading-none text-center text-white bg-blue-800 min-h-14 rounded-[100px] w-[230px] hover:bg-blue-900 transition-colors"
        >
          <div className="flex flex-1 gap-2 justify-center items-center py-2.5 pr-6 pl-4 size-full max-md:pr-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/dc282146a579c8d90fcbc40a0a0a7c832fe9b1d3?placeholderIfAbsent=true"
              alt="LinkedIn icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
            <span className="text-sm text-white leading-[20px)]">
              Apply with LinkedIn
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
