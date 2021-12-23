export function getAllQuizSubmissionQuestions(quizSubmissionId: string, query?: any): Promise<any>;
export function answeringQuestions(quizSubmissionId: string, body: any): Promise<any>;
export function flaggingQuestion(quizSubmissionId: string, questionId: string, body: any): Promise<any>;
export function unflaggingQuestion(quizSubmissionId: string, questionId: string, body: any): Promise<any>;
