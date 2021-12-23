export function retrieveAllQuizReports(courseId: string, quizId: string, query?: any): Promise<any>;
export function createQuizReport(courseId: string, quizId: string, body: any): Promise<any>;
export function getQuizReport(courseId: string, quizId: string, reportId: string, query?: any): Promise<any>;
export function abortGenerationOfReportOrRemovePreviouslyGeneratedOne(courseId: string, quizId: string, reportId: string): Promise<any>;
