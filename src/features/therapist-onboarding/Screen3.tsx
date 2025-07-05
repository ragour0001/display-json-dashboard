"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, LinkedinIcon, UploadIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProgressIndicator } from './Screen1';
import { useFormData } from '@/hooks/useFormData';

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  const { getSectionByName, getQuestionById } = useFormData();
  
  const [selectedEducation, setSelectedEducation] = useState('');
  const [certifications, setCertifications] = useState<string[]>([]);
  const [registrationBody, setRegistrationBody] = useState('');
  const [country, setCountry] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [workingMode, setWorkingMode] = useState<string[]>([]);

  // Get dynamic data from JSON
  const section = getSectionByName("Qualifications & Certifications");
  const educationQuestion = getQuestionById("Qualifications & Certifications", 6);
  const certificationsQuestion = getQuestionById("Qualifications & Certifications", 7);
  const workingModeSection = getSectionByName("Personal & Professional Details");
  const workingModeQuestion = getQuestionById("Personal & Professional Details", 5);

  const handleCertificationChange = (key: string) => {
    setCertifications(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const handleWorkingModeChange = (key: string) => {
    setWorkingMode(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const handleNext = () => {
    console.log('Form data:', { selectedEducation, certifications, registrationBody, country, registrationNumber, expiryDate, workingMode });
    navigate('/onboarding/professional-background');
  };

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
              Profile form
            </h2>
            <hr />
                         <div style={{
               color: '#006B5F',
               fontSize: '18px',
               fontWeight: '500',
               marginBottom: '20px'
             }}>
               {section?.order} of 9 &nbsp;&nbsp; {section?.name}
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
          <div style={{ marginBottom: '40px' }}>
            {/* Highest Educational Qualification */}
            <div style={{ marginBottom: '32px' }}>
                             <label style={{
                 display: 'block',
                 color: '#333',
                 fontSize: '18px',
                 fontWeight: '500',
                 marginBottom: '12px'
               }}>
                 {educationQuestion?.label}
               </label>
              <div style={{ position: 'relative' }}>
                                 <select
                   value={selectedEducation}
                   onChange={(e) => setSelectedEducation(e.target.value)}
                   style={{
                     width: '100%',
                     padding: '14px 16px',
                     border: '1px solid #ccc',
                     borderRadius: '6px',
                     fontSize: '16px',
                     backgroundColor: 'white',
                     appearance: 'none',
                     cursor: 'pointer',
                     outline: 'none',
                     color: selectedEducation ? '#333' : '#999'
                   }}
                 >
                   <option value="" style={{ color: '#999' }}>Select from below</option>
                   {educationQuestion?.options?.map((option: any) => (
                     <option key={option.value} value={option.value}>{option.text}</option>
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
            </div>

            {/* Certifications */}
            <div style={{ marginBottom: '32px' }}>
                             <label style={{
                 display: 'block',
                 color: '#333',
                 fontSize: '18px',
                 fontWeight: '500',
                 marginBottom: '12px'
               }}>
                 {certificationsQuestion?.label}
               </label>
                             <div style={{ 
                 display: 'grid', 
                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                 gap: '12px' 
               }}>
                 {certificationsQuestion?.options?.map((cert: any) => (
                                     <label key={cert.value} style={{
                     display: 'flex',
                     alignItems: 'center',
                     cursor: 'pointer',
                     fontSize: '16px',
                     color: '#333'
                   }}>
                     <input
                       type="checkbox"
                       checked={certifications.includes(cert.value)}
                       onChange={() => handleCertificationChange(cert.value)}
                       style={{
                         width: '18px',
                         height: '18px',
                         marginRight: '12px',
                         accentColor: '#2c5aa0'
                       }}
                     />
                     {cert.text}
                   </label>
                ))}
              </div>
            </div>

            {/* Licensure/Registration Details */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                color: '#333',
                fontSize: '18px',
                fontWeight: '500',
                marginBottom: '12px'
              }}>
                Licensure/Registration Details <span style={{ color: '#666', fontWeight: 'normal' }}>(if applicable)</span>
              </label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <input
                  type="text"
                  placeholder="Registration Body / Council"
                  value={registrationBody}
                  onChange={(e) => setRegistrationBody(e.target.value)}
                  style={{
                    padding: '12px 16px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '16px',
                    backgroundColor: 'white',
                    outline: 'none'
                  }}
                />
                <input
                  type="text"
                  placeholder="Country / Jurisdiction"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  style={{
                    padding: '12px 16px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '16px',
                    backgroundColor: 'white',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}>
                <div>
                  <input
                    type="text"
                    placeholder="Registration Number"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      fontSize: '16px',
                      backgroundColor: 'white',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      fontSize: '16px',
                      backgroundColor: 'white',
                      outline: 'none'
                    }}
                  />
                  <div style={{
                    fontSize: '12px',
                    color: '#999',
                    marginTop: '4px'
                  }}>
                    Expiry Date (if any)
                  </div>
                </div>
              </div>
            </div>

            {/* Preferred Working Mode */}
            <div style={{ marginBottom: '32px' }}>
                             <label style={{
                 display: 'block',
                 color: '#333',
                 fontSize: '18px',
                 fontWeight: '500',
                 marginBottom: '12px'
               }}>
                 {workingModeQuestion?.label}
               </label>
                             <div style={{ 
                 display: 'flex', 
                 flexDirection: 'row', 
                 gap: '24px', 
                 flexWrap: 'wrap' 
               }}>
                 {workingModeQuestion?.options?.map((mode: any) => (
                                     <label key={mode.value} style={{
                     display: 'flex',
                     alignItems: 'center',
                     cursor: 'pointer',
                     fontSize: '16px',
                     color: '#333'
                   }}>
                     <input
                       type="checkbox"
                       checked={workingMode.includes(mode.value)}
                       onChange={() => handleWorkingModeChange(mode.value)}
                       style={{
                         width: '18px',
                         height: '18px',
                         marginRight: '12px',
                         accentColor: '#2c5aa0'
                       }}
                     />
                     {mode.text}
                   </label>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '40px'
          }}>
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
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#047857';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#059669';
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
