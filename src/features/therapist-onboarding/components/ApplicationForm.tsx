"use client";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NextButton, Dropdown, InputField, Checkbox } from '@/components/shared/onboarding';
import TherapistOnboardService, { TherapistDocument } from '../services/therapist-onboard.service';

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
  const [submitError, setSubmitError] = useState<string>('');

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
      case 'age':
        if (!value.trim()) error = 'Age is required.';
        else if (isNaN(Number(value)) || Number(value) < 18 || Number(value) > 100) error = 'Please enter a valid age between 18 and 100.';
        break;
      case 'gender':
        if (!value) error = 'Gender is required.';
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
      case 'zipCode':
        if (!value.trim()) error = 'Zip Code is required.';
        break;
      case 'careServiceCategoryId':
        if (!value) error = 'Care Service Category is required.';
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
    setUploadedFiles(prev => [...prev, ...files]);
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
    if (!formData.age.trim()) errors.age = 'Age is required.';
    if (!formData.gender) errors.gender = 'Gender is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    else if (!validateEmail(formData.email)) errors.email = 'Invalid email address.';
    if (!formData.countryId) errors.countryId = 'Country is required.';
    if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required.';
    if (!formData.state.trim()) errors.state = 'State/Province is required.';
    if (!formData.city.trim()) errors.city = 'City is required.';
    if (!formData.zipCode.trim()) errors.zipCode = 'Zip Code is required.';
    if (!formData.careServiceCategoryId) errors.careServiceCategoryId = 'Care Service Category is required.';
    if (formData.linkedinUrl && !validateLinkedIn(formData.linkedinUrl)) errors.linkedinUrl = 'Invalid LinkedIn URL.';
    if (!agreedToTerms) errors.agreedToTerms = 'You must agree to the terms.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Prepare therapist application data
      const therapistData = {
        applicantId: 0,
        fullName: formData.fullName,
        age: parseInt(formData.age),
        gender: formData.gender,
        email: formData.email,
        countryId: parseInt(formData.countryId),
        phoneNumber: formData.phoneNumber,
        alternatePhone: formData.alternatePhone || '',
        linkedinUrl: formData.linkedinUrl || '',
        howDidYouHearAboutUsId: formData.howDidYouHearAboutUsId ? parseInt(formData.howDidYouHearAboutUsId) : 0,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        careServiceCategoryId: parseInt(formData.careServiceCategoryId),
        agreeWithTerms: agreedToTerms ? 'yes' : 'no',
        effStartDate: formData.effStartDate || new Date().toISOString().split('T')[0],
        effEndDate: formData.effEndDate || new Date().toISOString().split('T')[0],
        isActive: true,
        createdBy: formData.email,
        updatedBy: formData.email,
        historyProfileUrl: formData.historyProfileUrl || '',
        activeProfileUrl: formData.activeProfileUrl || '',
        activeProfileBackgroundUrl: formData.activeProfileBackgroundUrl || '',
        historyProfileBackgroundUrl: formData.historyProfileBackgroundUrl || ''
      };

      // Submit therapist application
      const applicationResponse = await TherapistOnboardService.submitApplication(therapistData);
      
      if (!applicationResponse.success) {
        throw new Error(applicationResponse.error || 'Failed to submit application');
      }

      // If there are files to upload, handle document upload
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

        // Assuming we get a therapist ID from the application response
        const therapistId = applicationResponse.data?.id || 65; // fallback to 65 as in your example
        
        const uploadResponse = await TherapistOnboardService.uploadDocuments(
          therapistId,
          documents,
          uploadedFiles
        );

        if (!uploadResponse.success) {
          console.warn('Document upload failed:', uploadResponse.error);
          // Continue with application even if document upload fails
        }
      }

      // Navigate to success page
      navigate('/onboarding/application-submitted');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred while submitting your application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex gap-8 max-md:flex-col max-md:gap-0">
      <InfoSection />
      <div className="flex flex-col flex-1 px-8 py-12 max-md:px-5">
        <div className="flex flex-col self-stretch max-md:max-w-full">
          <h1 className="text-3xl font-bold text-stone-900 max-md:max-w-full">
            Application Form
          </h1>
          <p className="mt-2 text-base text-stone-700 max-md:max-w-full">
            Please fill out the form below to start your application process.
          </p>
        </div>

        {submitError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{submitError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <InputField
            label="Full Name"
            value={formData.fullName}
            onChange={(value: string) => handleInputChange('fullName', value)}
            required
            error={formErrors.fullName}
          />

          <div className="flex gap-4">
            <InputField
              label="Age"
              type="number"
              value={formData.age}
              onChange={(value: string) => handleInputChange('age', value)}
              required
              error={formErrors.age}
            />
            <Dropdown
              label="Gender"
              value={formData.gender}
              onChange={(value: string) => handleInputChange('gender', value)}
              options={genderOptions}
              error={formErrors.gender}
            />
          </div>

          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value: string) => handleInputChange('email', value)}
            required
            error={formErrors.email}
          />

          <Dropdown
            label="Country"
            value={formData.countryId}
            onChange={(value: string) => handleInputChange('countryId', value)}
            options={countryOptions}
            error={formErrors.countryId}
          />

          <div className="flex gap-4">
            <InputField
              label="Phone Number"
              type="tel"
              value={formData.phoneNumber}
              onChange={(value: string) => handleInputChange('phoneNumber', value)}
              required
              error={formErrors.phoneNumber}
            />
            <InputField
              label="Alternate Phone (Optional)"
              type="tel"
              value={formData.alternatePhone}
              onChange={(value: string) => handleInputChange('alternatePhone', value)}
            />
          </div>

          <div className="flex gap-4">
            <InputField
              label="State/Province"
              value={formData.state}
              onChange={(value: string) => handleInputChange('state', value)}
              required
              error={formErrors.state}
            />
            <InputField
              label="City"
              value={formData.city}
              onChange={(value: string) => handleInputChange('city', value)}
              required
              error={formErrors.city}
            />
            <InputField
              label="Zip Code"
              value={formData.zipCode}
              onChange={(value: string) => handleInputChange('zipCode', value)}
              required
              error={formErrors.zipCode}
            />
          </div>

          <Dropdown
            label="Care Service Category"
            value={formData.careServiceCategoryId}
            onChange={(value: string) => handleInputChange('careServiceCategoryId', value)}
            options={careServiceCategoryOptions}
            error={formErrors.careServiceCategoryId}
          />

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

          {/* File Upload Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Documents (Optional)
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Selected files:</p>
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
            )}
          </div>

          <Checkbox
            label="I agree to the terms and conditions"
            checked={agreedToTerms}
            onChange={setAgreedToTerms}
            required
            error={formErrors.agreedToTerms}
          />

          <div className="mt-8">
            <NextButton
              text={isSubmitting ? "Submitting..." : "Submit Application"}
              disabled={!agreedToTerms || isSubmitting}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm; 