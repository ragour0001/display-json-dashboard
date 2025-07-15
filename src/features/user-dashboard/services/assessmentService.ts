export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
  answerIds?: number[]; // Add this to store actual answer IDs from API
}

export interface ApiQuestion {
  questionId: number;
  questionText: string;
  answers: {
    answerId: number;
    answerText: string;
    answerOrder: number;
  }[];
}

export interface ApiAssessment {
  assessmentId: number;
  assessmentType: string;
  assessmentTitle: string;
  questions: ApiQuestion[];
}

export interface AssessmentSubmissionPayload {
  userId: number;
  isCompleted: string;
  submissionDate: string;
  assessmentResponses: {
    answers: {
      answerId: number;
      questionId: number;
    }[];
    assessmentId: number;
  }[];
}

export class AssessmentService {
  private static readonly API_BASE_URL = 'https://api.refillhealth.com/api/v1';
  
  static async getAssessmentQuestions(): Promise<AssessmentQuestion[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/assessment/questions`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const apiData: ApiAssessment[] = await response.json();
      
      // Extract questions from all assessments and flatten them
      const allQuestions: AssessmentQuestion[] = [];
      
      apiData.forEach(assessment => {
        assessment.questions.forEach(apiQuestion => {
          // Sort answers by answerOrder to maintain correct option order
          const sortedAnswers = [...apiQuestion.answers].sort((a, b) => a.answerOrder - b.answerOrder);
          
          const mappedQuestion: AssessmentQuestion = {
            id: apiQuestion.questionId,
            question: apiQuestion.questionText,
            options: sortedAnswers.map(answer => answer.answerText),
            answerIds: sortedAnswers.map(answer => answer.answerId)
          };
          
          allQuestions.push(mappedQuestion);
        });
      });
      
      return allQuestions;
    } catch (error) {
      console.error('Error fetching assessment questions:', error);
      // Fallback to empty array or throw error based on your requirements
      throw new Error('Failed to fetch assessment questions');
    }
  }

  // Helper function to map question to assessment ID (simplified mapping)
  private static getAssessmentId(questionId: number): number {
    if (questionId <= 4) return 3;
    if (questionId <= 6) return 4;
    if (questionId <= 8) return 5;
    if (questionId === 9) return 6;
    if (questionId <= 11) return 7;
    if (questionId <= 13) return 8;
    if (questionId <= 15) return 9;
    if (questionId === 16) return 10;
    if (questionId <= 19) return 11;
    if (questionId <= 21) return 12;
    if (questionId <= 26) return 14;
    if (questionId === 27) return 15;
    if (questionId <= 30) return 16;
    if (questionId === 31) return 17;
    if (questionId <= 34) return 18;
    if (questionId <= 62) return 25;
    return 26;
  }

  // Helper function to get answer ID based on option index
  private static getAnswerId(questions: AssessmentQuestion[], questionIndex: number, optionIndex: number): number {
    // Use actual answer IDs from the API response
    const question = questions[questionIndex];
    if (question.answerIds && question.answerIds[optionIndex] !== undefined) {
      return question.answerIds[optionIndex];
    }
    // Fallback to old calculation if answerIds not available
    const baseAnswerId = question.id * 5 + optionIndex + 1;
    return baseAnswerId;
  }

  static async submitAssessment(
    questions: AssessmentQuestion[], 
    selectedOptions: string[], 
    userId: number = 290
  ): Promise<any> {
    try {
      // Validate that all questions have been answered
      const unansweredQuestions = selectedOptions.filter((option, index) => !option || option.trim() === '');
      if (unansweredQuestions.length > 0) {
        throw new Error(`Please answer all questions before submitting. ${unansweredQuestions.length} questions remaining.`);
      }

      // Build assessment responses array
      const assessmentResponsesMap: { [key: number]: any[] } = {};

      for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const selectedOption = selectedOptions[i];
        
        if (selectedOption) {
          const optionIndex = question.options.indexOf(selectedOption);
          const assessmentId = this.getAssessmentId(question.id);
          const answerId = this.getAnswerId(questions, i, optionIndex);
          
          if (!assessmentResponsesMap[assessmentId]) {
            assessmentResponsesMap[assessmentId] = [];
          }
          
          assessmentResponsesMap[assessmentId].push({
            answerId: answerId,
            questionId: question.id
          });
        }
      }

      // Format the final payload exactly like discover_yourself_answers.json
      const submissionPayload: AssessmentSubmissionPayload = {
        userId: userId,
        isCompleted: "Y",
        submissionDate: new Date().toISOString(),
        assessmentResponses: Object.entries(assessmentResponsesMap).map(([assessmentId, answers]) => ({
          answers: answers,
          assessmentId: parseInt(assessmentId)
        }))
      };

      // Console log the JSON data being sent to backend
      console.log('🚀 Assessment Submission Payload (exact discover_yourself_answers.json format):');
      console.log(JSON.stringify(submissionPayload, null, 2));

      // Send to backend API with proper headers and error handling
      const response = await fetch(`${this.API_BASE_URL}/assessment/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify(submissionPayload)
      });

      // Get the response text first to see actual error details
      const responseText = await response.text();
      console.log('🔍 Raw server response:', responseText);

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = JSON.parse(responseText);
          if (errorData.message) {
            errorMessage += ` - ${errorData.message}`;
          }
          if (errorData.errors) {
            errorMessage += ` - Validation errors: ${JSON.stringify(errorData.errors)}`;
          }
          console.log('🚨 Server error details:', errorData);
        } catch (parseError) {
          errorMessage += ` - Response: ${responseText}`;
        }
        throw new Error(errorMessage);
      }

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        result = { message: 'Success', response: responseText };
      }

      console.log('✅ Assessment submitted successfully:', result);
      return result;

    } catch (error) {
      console.error('❌ Error submitting assessment:', error);
      throw error; // Re-throw to let the component handle the error display
    }
  }
} 