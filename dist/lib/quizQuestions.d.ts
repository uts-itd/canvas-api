export function listQuestionsInQuizOrSubmission(courseId: string, quizId: string, query?: any): Promise<any>;
export function getSingleQuizQuestion(courseId: string, quizId: string, questionId: any): Promise<any>;
export function createSingleQuizQuestion(courseId: string, quizId: string, body: any): Promise<any>;
export function updateExistingQuizQuestion(courseId: string, quizId: any, questionId: any, body: any): Promise<any>;
export function deleteQuizQuestion(courseId: string, quizId: any, questionId: any): Promise<any>;
