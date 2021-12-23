export function listQuizzesInCourse(courseId: string, query?: any): Promise<any>;
export function getSingleQuiz(courseId: string, quizzeId: string): Promise<any>;
export function createQuiz(courseId: string, body: any): Promise<any>;
export function editQuiz(courseId: string, quizzeId: string, body: any): Promise<any>;
export function deleteQuiz(courseId: string, quizzeId: string): Promise<any>;
export function reorderQuizItems(courseId: string, quizzeId: string, body: any): Promise<any>;
export function validateQuizAccessCode(courseId: string, quizzeId: string, body: any): Promise<any>;
