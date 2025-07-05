import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressIndicator } from './Screen1';
import { TherapistOnboardService, TherapistDocument } from './services/therapist-onboard.service';
import './Form.css';
import { jsonData } from '.';

// TypeScript interfaces
interface Option {
  value: string;
  text: string;
}

interface Validation {
  min?: number;
  max?: number;
}

interface Field {
  id: string | number;
  type: string;
  label: string;
  required?: boolean;
  helpertext?: string;
  placeholder?: string;
  options?: Option[];
  validation?: Validation;
  multiple?: boolean;
  default?: boolean | number;
  rows?: number;
  accept?: string;
  min?: number;
  max?: number;
  step?: number;
  marks?: boolean;
  inputType?: string;
  max_entries?: number;
  fields?: Field[];
}

interface Question extends Field {
  // Question inherits all properties from Field
}

interface Section {
  name: string;
  order: number;
  questions: Question[];
}

interface FormData {
  form_title: string;
  sections: Section[];
}

interface FormProps {
  formData: FormData;
  onSubmit: (values: Record<string, any>) => void;
}

interface FormValues {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string;
}

const Form: React.FC<FormProps> = ({ formData, onSubmit }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File }>({});
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: 'idle' | 'uploading' | 'success' | 'error' }>({});
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const handleChange = useCallback((id: string | number, value: any, field: Field) => {
    setFormValues((prev: FormValues) => ({
      ...prev,
      [id]: field.type === 'select' && field.multiple ? (Array.isArray(value) ? value : []) : value
    }));
  }, []);

  const validateStep = useCallback((step: number) => {
    const currentSection = formData.sections.find((section: Section) => section.order === step);
    if (!currentSection) return false;
    
    const newErrors: FormErrors = {};

    currentSection.questions.forEach((question: Question) => {
      if (question.required) {
        if (question.type === 'group') {
          // Validate group fields
          const groupData = formValues[question.id] || {};
          question.fields?.forEach((field: Field, index: number) => {
            if (!groupData[index]) {
              newErrors[`${question.id}_${index}`] = `${field.label} is required`;
            }
          });
        } else if (question.type === 'multi_text') {
          // Validate multi text fields
          const multiTextData = formValues[question.id] || {};
          if (Object.keys(multiTextData).length === 0) {
            newErrors[question.id] = 'At least one entry is required';
          }
        } else if (question.type === 'checkbox') {
          // Validate checkbox fields
          const checkboxValues = formValues[question.id] || [];
          if (!Array.isArray(checkboxValues) || checkboxValues.length === 0) {
            newErrors[question.id] = `${question.label} is required`;
          }
        } else if (question.type === 'radio') {
          // Validate radio fields
          if (!formValues[question.id]) {
            newErrors[question.id] = `${question.label} is required`;
          }
        } else if (question.type === 'select') {
          // Validate select fields
          if (!formValues[question.id] || formValues[question.id] === '') {
            newErrors[question.id] = `${question.label} is required`;
          }
        } else if (!formValues[question.id] || formValues[question.id] === '') {
          newErrors[question.id] = `${question.label} is required`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formValues, formData.sections]);

  const handleNext = useCallback(() => {
    if (validateStep(currentStep)) {
      // Console log for saving data to backend API
      const currentSection = formData.sections.find((section: Section) => section.order === currentStep);
      console.log('Saving step data to backend API:', {
        step: currentStep,
        sectionName: currentSection?.name,
        formData: formValues,
        timestamp: new Date().toISOString()
      });
      
      setCurrentStep((prev: number) => Math.min(prev + 1, formData.sections.length));
      setErrors({});
    } else {
      console.log('Validation failed for step:', currentStep, 'Errors:', errors);
    }
  }, [currentStep, validateStep, formData.sections, formValues, errors]);

  const handlePrevious = useCallback(() => {
    setCurrentStep((prev: number) => Math.max(prev - 1, 1));
    setErrors({});
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Include uploaded file data in the submission
      const formDataWithFiles = {
        ...formValues,
        uploadedFiles: Object.keys(uploadedFiles).map(key => ({
          fieldId: key,
          file: uploadedFiles[key],
          uploadStatus: uploadStatus[key],
          uploadResult: formValues[key]?.uploadResult
        }))
      };
      
      console.log('Form submitted with values and files:', formDataWithFiles);
      onSubmit(formDataWithFiles);
      navigate('/onboarding/thank-you');
    } else {
      setErrors({});
    }
  }, [currentStep, validateStep, formValues, uploadedFiles, uploadStatus, onSubmit, navigate]);

  const handleFileUpload = useCallback(async (fieldId: string | number, file: File) => {
    if (!file) return;

    setUploadStatus(prev => ({ ...prev, [fieldId]: 'uploading' }));
    setUploadProgress(prev => ({ ...prev, [fieldId]: 0 }));

    try {
      // Create document object for the service
      const document: TherapistDocument = {
        documentType: `field_${fieldId}`,
        documentName: file.name,
        degreeAssociated: '',
        filePath: '',
        blobId: '',
        fileSize: file.size.toString(),
        contentType: file.type,
        uploadDate: new Date().toISOString()
      };

      // Use a temporary therapist ID (you might want to generate this or get it from context)
      const tempTherapistId = 'temp_' + Date.now();

      // Upload using the service
      const uploadResult = await TherapistOnboardService.uploadDocuments(
        65,
        [document],
        [file]
      );

      if (uploadResult.success) {
        setUploadStatus(prev => ({ ...prev, [fieldId]: 'success' }));
        setUploadProgress(prev => ({ ...prev, [fieldId]: 100 }));
        setFormValues(prev => ({
          ...prev,
          [fieldId]: {
            file,
            uploadResult: uploadResult.data,
            documentType: document.documentType
          }
        }));
        console.log('File uploaded successfully:', uploadResult);
      } else {
        setUploadStatus(prev => ({ ...prev, [fieldId]: 'error' }));
        console.error('File upload failed:', uploadResult.error);
      }
    } catch (error) {
      setUploadStatus(prev => ({ ...prev, [fieldId]: 'error' }));
      console.error('File upload error:', error);
    }
  }, []);

  const renderField = useCallback((field: Field) => {
    const commonProps = {
      id: field.id.toString(),
      label: field.label,
      required: field.required,
      helperText: field.helpertext,
      error: errors[field.id],
      ...(field.type !== 'file' && {
        value: formValues[field.id] || (field.type === 'select' && field.multiple ? [] : ''),
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => handleChange(field.id, e.target.value, field),
      })
    };

    switch (field.type) {
      case 'text':
        return (
          <input
            {...commonProps}
            type={field.inputType || 'text'}
            placeholder={field.placeholder}
            min={field.validation?.min}
            max={field.validation?.max}
            style={{
              width: '100%',
              padding: '14px 16px',
              border: errors[field.id] ? '1px solid #dc2626' : '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '16px',
              backgroundColor: 'white',
              outline: 'none',
              color: formValues[field.id] ? '#333' : '#999'
            }}
          />
        );

      case 'select':
        return (
          <div style={{ position: 'relative' }}>
            <select
              {...commonProps}
              multiple={field.multiple}
              style={{
                width: '100%',
                padding: '14px 16px',
                border: errors[field.id] ? '1px solid #dc2626' : '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '16px',
                backgroundColor: 'white',
                appearance: 'none',
                cursor: 'pointer',
                outline: 'none',
                color: formValues[field.id] ? '#333' : '#999'
              }}
            >
              <option value="" style={{ color: '#999' }}>Select from below</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <div style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: '#666',
              fontSize: '14px'
            }}>
              ▼
            </div>
          </div>
        );

      case 'radio':
        return (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '24px', 
            flexWrap: 'wrap' 
          }}>
            {field.options?.map((option) => (
              <label key={option.value} style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#333'
              }}>
                <input
                  type="radio"
                  name={field.id.toString()}
                  value={option.value}
                  checked={formValues[field.id] === option.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(field.id, e.target.value, field)}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '12px',
                    accentColor: '#2c5aa0'
                  }}
                />
                {option.text}
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '12px' 
          }}>
            {field.options?.map((option) => (
              <label key={option.value} style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#333'
              }}>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={Array.isArray(formValues[field.id]) && formValues[field.id].includes(option.value)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const currentValues = Array.isArray(formValues[field.id]) ? formValues[field.id] : [];
                    const newValues = e.target.checked
                      ? [...currentValues, option.value]
                      : currentValues.filter((v: string) => v !== option.value);
                    handleChange(field.id, newValues, field);
                  }}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '12px',
                    accentColor: '#2c5aa0'
                  }}
                />
                {option.text}
              </label>
            ))}
          </div>
        );

      case 'date':
        return (
          <input
            {...commonProps}
            type="date"
            style={{
              width: '100%',
              padding: '14px 16px',
              border: errors[field.id] ? '1px solid #dc2626' : '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '16px',
              backgroundColor: 'white',
              outline: 'none',
              color: formValues[field.id] ? '#333' : '#999'
            }}
          />
        );

      case 'switch':
        return (
          <label style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#333'
          }}>
            <input
              type="checkbox"
              checked={formValues[field.id] || field.default || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(field.id, e.target.checked, field)}
              style={{
                width: '18px',
                height: '18px',
                marginRight: '12px',
                accentColor: '#2c5aa0'
              }}
            />
            {field.label}
          </label>
        );

      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={field.rows}
            placeholder={field.placeholder}
            style={{
              width: '100%',
              padding: '14px 16px',
              border: errors[field.id] ? '1px solid #dc2626' : '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '16px',
              backgroundColor: 'white',
              outline: 'none',
              resize: 'vertical',
              minHeight: '100px',
              color: formValues[field.id] ? '#333' : '#999'
            }}
          />
        );

      case 'file':
        return (
          <div>
            <input
              id={field.id.toString()}
              type="file"
              accept={field.accept}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleFileUpload(field.id, file);
                }
              }}
              style={{
                width: '100%',
                padding: '14px 16px',
                border: errors[field.id] ? '1px solid #dc2626' : '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '16px',
                backgroundColor: 'white',
                outline: 'none'
              }}
            />
            {uploadStatus[field.id] === 'uploading' && (
              <div style={{
                marginTop: '8px',
                padding: '8px',
                backgroundColor: '#f0f9ff',
                borderRadius: '4px',
                border: '1px solid #0ea5e9'
              }}>
                <div style={{ fontSize: '12px', color: '#0ea5e9', marginBottom: '4px' }}>
                  Uploading... {uploadProgress[field.id]}%
                </div>
                <div style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#e0f2fe',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${uploadProgress[field.id]}%`,
                    height: '100%',
                    backgroundColor: '#0ea5e9',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>
            )}
            {uploadStatus[field.id] === 'success' && (
              <div style={{
                marginTop: '8px',
                padding: '8px',
                backgroundColor: '#f0fdf4',
                borderRadius: '4px',
                border: '1px solid #22c55e',
                fontSize: '12px',
                color: '#22c55e'
              }}>
                ✓ File uploaded successfully
              </div>
            )}
            {uploadStatus[field.id] === 'error' && (
              <div style={{
                marginTop: '8px',
                padding: '8px',
                backgroundColor: '#fef2f2',
                borderRadius: '4px',
                border: '1px solid #ef4444',
                fontSize: '12px',
                color: '#ef4444'
              }}>
                ✗ Upload failed. Please try again.
              </div>
            )}
          </div>
        );

      case 'slider':
        return (
          <input
            {...commonProps}
            type="range"
            min={field.min}
            max={field.max}
            step={field.step}
            defaultValue={formValues[field.id] || field.default || 5}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: '#ddd',
              outline: 'none',
              accentColor: '#2c5aa0'
            }}
          />
        );

      case 'group':
        return (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            {field.fields?.map((subField: Field, index: number) => (
              <div key={`${field.id}_${index}`}>
                <label style={{
                  display: 'block',
                  color: '#333',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px'
                }}>
                  {subField.label}
                  {subField.required && <span style={{ color: '#dc2626' }}> *</span>}
                </label>
                <input
                  id={`${field.id}_${index}`}
                  type={subField.type}
                  value={formValues[`${field.id}_${index}`] || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(`${field.id}_${index}`, e.target.value, subField)}
                  placeholder={subField.placeholder}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: errors[`${field.id}_${index}`] ? '1px solid #dc2626' : '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '16px',
                    backgroundColor: 'white',
                    outline: 'none',
                    color: formValues[`${field.id}_${index}`] ? '#333' : '#999'
                  }}
                />
                {errors[`${field.id}_${index}`] && (
                  <div style={{
                    fontSize: '12px',
                    color: '#dc2626',
                    marginTop: '4px'
                  }}>
                    {errors[`${field.id}_${index}`]}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'multi_text':
        return (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            {Array.from({ length: field.max_entries || 3 }).map((_, index: number) => (
              <div key={`${field.id}_${index}`}>
                <input
                  id={`${field.id}_${index}`}
                  type="text"
                  value={formValues[`${field.id}_${index}`] || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(`${field.id}_${index}`, e.target.value, field)}
                  placeholder={`Entry ${index + 1}`}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: errors[`${field.id}_${index}`] ? '1px solid #dc2626' : '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '16px',
                    backgroundColor: 'white',
                    outline: 'none',
                    color: formValues[`${field.id}_${index}`] ? '#333' : '#999'
                  }}
                />
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  }, [errors, formValues, handleChange, handleFileUpload, uploadStatus, uploadProgress]);

  const currentSection = formData.sections.find((section: Section) => section.order === currentStep);
  const isLastSection = currentStep === formData.sections.length;

  if (!currentSection) {
    return <div>Section not found</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-center items-center w-full mb-16">
          <ProgressIndicator currentStep={2} />
        </div>
        
        <div style={{
          backgroundColor: '#EFF5F3',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '900px',
          minHeight: '700px',
          padding: '48px',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
          margin: '0 auto',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '36px' }}>
            <h2 style={{
              color: '#006B5F',
              fontSize: '32px',
              fontWeight: '600',
              margin: '0 0 12px 0',
              lineHeight: '1.2'
            }}>
              {formData.form_title}
            </h2>
            <hr />
            <div style={{
              color: '#006B5F',
              fontSize: '18px',
              fontWeight: '500',
              marginBottom: '20px'
            }}>
              {currentStep} of {formData.sections.length} &nbsp;&nbsp; {currentSection.name}
            </div>
            <p style={{
              color: '#666',
              fontSize: '14px',
              margin: '0',
              fontStyle: 'italic'
            }}>
              All input fields are mandatory*
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '40px' }}>
              {currentSection.questions.map((question: Question) => (
                <div key={question.id} style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'block',
                    color: '#333',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginBottom: '12px'
                  }}>
                    {question.label}
                    {question.required && <span style={{ color: '#dc2626' }}> *</span>}
                  </label>
                  {renderField(question)}
                  {errors[question.id] && (
                    <div style={{
                      fontSize: '12px',
                      color: '#dc2626',
                      marginTop: '4px'
                    }}>
                      {errors[question.id]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '40px'
            }}>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  style={{
                    backgroundColor: '#6b7280',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '12px 32px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    minWidth: '120px'
                  }}
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#4b5563';
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#6b7280';
                  }}
                >
                  Previous
                </button>
              )}
              
              <div style={{ flex: 1 }}></div>
              
              {currentStep < formData.sections.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '12px 32px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    minWidth: '120px'
                  }}
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#047857';
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#059669';
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '12px 32px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    minWidth: '120px'
                  }}
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#047857';
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#059669';
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Wrapper component for the route
const PersonalInfoForm: React.FC = () => {
  const sampleFormData: FormData = jsonData;

  const handleSubmit = (values: Record<string, any>) => {
    console.log('Form submitted with values:', values);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
  };

  return <Form formData={sampleFormData} onSubmit={handleSubmit} />;
};

export default PersonalInfoForm; 