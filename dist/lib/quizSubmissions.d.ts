export function getAllQuizSubmissions(courseId: string, quizId: string, query?: any): Promise<any>;
export function getQuizSubmission(courseId: string, quizId: string, query?: any): Promise<any>;
export function getSingleQuizSubmission(courseId: string, quizId: string, submissionId: string, query?: any): Promise<any>;
export function createQuizSubmissionStartQuizTakingSession(courseId: string, quizId: string, body: any): Promise<any>;
export function updateStudentQuestionScoresAndComments(courseId: string, quizId: string, submissionId: string, body: any): Promise<any>;
export function completeQuizSubmissionTurnItIn(courseId: string, quizId: string, submissionId: string, body: any): Promise<any>;
export function getCurrentQuizSubmissionTimes(courseId: string, quizId: string, submissionId: string): Promise<any>;
