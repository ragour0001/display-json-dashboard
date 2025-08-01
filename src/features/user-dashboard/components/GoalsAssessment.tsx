"use client";

import { useState, useEffect } from "react";
import AssessmentSection from "./AssessmentSection";
import PreferencesSection from "./PreferencesSection";
import DynamicContentRenderer from "./DynamicContentRenderer";
import { AssessmentService, AssessmentQuestion } from "../services/assessmentService";
import { useDisplayConfig } from "../hooks/useDisplayConfig";

interface GoalsAssessmentProps {
  onSectionChange?: (section: string, data?: any) => void;
  selectedGoals?: any[];
}

export default function GoalsAssessment({ onSectionChange, selectedGoals }: GoalsAssessmentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userSelectedGoals, setUserSelectedGoals] = useState<string[]>([]);
  const { config } = useDisplayConfig();
  
  console.log('🎯 GoalsAssessment: selectedGoals received:', selectedGoals);

  // Get the goals-assessment content from the display config
  const goalsAssessmentContent = config?.layout?.components?.find(
    (component: any) => component.type === "goals-assessment"
  )?.content || [];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedQuestions = await AssessmentService.getAssessmentQuestions();
        setQuestions(fetchedQuestions);
        setSelectedOptions(Array(fetchedQuestions.length).fill(""));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionChange = (option: string) => {
    const updated = [...selectedOptions];
    updated[currentIndex] = option;
    setSelectedOptions(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Use the new service method for assessment submission
      const result = await AssessmentService.submitAssessment(questions, selectedOptions, 290);

      // Navigate to dashboard on successful submission
      onSectionChange?.("home", { assessmentCompleted: true, submissionResult: result });

    } catch (err) {
      console.error('❌ Error submitting assessment:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit assessment');
    }
  };

  if (loading) {
    return (
      <div className="goals-assessment-page" style={{ textAlign: 'center', padding: '50px' }}>
        <div>Loading assessment questions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="goals-assessment-page" style={{ textAlign: 'center', padding: '50px' }}>
        <div style={{ color: '#d32f2f', marginBottom: '16px' }}>Error: {error}</div>
        <button 
          onClick={() => window.location.reload()}
          style={{
            background: '#006B5F',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '8px 18px',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="goals-assessment-page" style={{ textAlign: 'center', padding: '50px' }}>
        <div>No assessment questions available.</div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .goals-assessment-page {
          flex: 1;
          padding: 30px 40px;
          max-width: 100%;
          transition: max-width 0.3s ease;
          overflow-y: auto;
          width: 100%;
        }

        .assessment-section {
          display: flex;
          width: 100%;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 50px;
        }

        .assessment-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }

        .assessment-title {
          color: #003a5d;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          margin: 0;
        }

        .assessment-card {
          display: flex;
          padding: 18px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
          border-radius: 16px;
          border: 1px solid #ccc;
          background: #f7f9fa;
        }

        .assessment-card-header {
          display: flex;
          height: 81px;
          padding: 16px;
          align-items: center;
          gap: 13px;
          align-self: stretch;
          border-bottom: 1px solid #efefef;
        }

        .assessment-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .assessment-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          flex: 1 0 0;
        }

        .assessment-card-title {
          align-self: stretch;
          color: #00201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: -0.44px;
          margin: 0;
        }

        .assessment-card-description {
          color: #3f4946;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          margin: 0;
        }

        .assessment-progress-container {
          display: flex;
          padding: 16px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 21px;
          align-self: stretch;
          border-radius: 8px;
          background: #FFFAF6;
        }

        .assessment-progress-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 12px;
          flex: 1 0 0;
          width: 100%;
        }

        .progress-title {
          align-self: stretch;
          color: #006b5f;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          margin: 0;
        }

        .progress-bar-wrapper {
          display: flex;
          height: 16px;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 64px;
          background: #e0e0e0;
        }

        .progress-bar-svg {
          width: 100%;
          height: 16px;
        }

        .progress-step {
          transform: rotate(0.11deg);
          align-self: stretch;
          color: #006b5f;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .assessment-question-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          align-self: stretch;
        }

        .question-title {
          align-self: stretch;
          color: #00201c;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: 0px;
          margin: 0;
        }

        .radio-options {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 7px;
          align-self: stretch;
        }

        .radio-button-container {
          display: flex;
          width: 48px;
          height: 48px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .radio-button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
        }

        .radio-state-layer {
          display: flex;
          padding: 8px;
          justify-content: center;
          align-items: center;
        }

        .radio-icon {
          width: 24px;
          height: 24px;
          position: relative;
        }

        .radio-inner-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radio-label {
          color: #00201c;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          cursor: pointer;
        }

        .dashboard-btn {
          display: flex;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          border: 1px solid #bec9c6;
          background: transparent;
          cursor: pointer;
        }

        .dashboard-btn .btn-content {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }

        .dashboard-btn .btn-text {
          color: #3f4947;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }

        .previous-btn {
          display: flex;
          height: 48px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background: #006a63;
          border: none;
          cursor: pointer;
        }

        .previous-btn .btn-content {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }

        .previous-btn .btn-text {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
        }
      `}</style>
      <div className="goals-assessment-page">
        <DynamicContentRenderer 
          content={goalsAssessmentContent}
          config={config || undefined}
          onSectionChange={onSectionChange}
        />
        <AssessmentSection
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedOption={selectedOptions[currentIndex]}
          setSelectedOption={handleOptionChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          isFirst={currentIndex === 0}
          isLast={currentIndex === questions.length - 1}
          onSectionChange={onSectionChange}
          assessmentSubCategoryDesc={questions[currentIndex].assessmentSubCategoryDesc}
        />
        <PreferencesSection />
      </div>
    </>
  );
}
