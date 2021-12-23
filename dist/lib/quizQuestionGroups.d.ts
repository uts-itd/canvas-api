export function getSingleQuizGroup(courseId: string, quizId: string, groupId: string): Promise<any>;
export function createQuestionGroup(courseId: string, quizId: string, body: any): Promise<any>;
export function updateQuestionGroup(courseId: string, quizId: string, groupId: string, body: any): Promise<any>;
export function deleteQuestionGroup(courseId: string, quizId: string, groupId: string): Promise<any>;
export function reorderQuestionGroups(courseId: string, quizId: string, groupId: string, body: any): Promise<any>;
