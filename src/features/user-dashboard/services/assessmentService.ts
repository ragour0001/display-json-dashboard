export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
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
            options: sortedAnswers.map(answer => answer.answerText)
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
} 