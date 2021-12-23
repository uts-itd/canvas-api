export function listStudentsSelectedForModeration(courseId: string, assignmentId: string): Promise<any>;
export function selectStudentsForModeration(courseId: string, assignmentId: string, body: any): Promise<any>;
export function showProvisionalGradeStatusForStudent(courseId: string, assignmentId: string, query?: any): Promise<any>;
export function selectProvisionalGrade(courseId: string, assignmentId: string, provisionalGradeId: string): Promise<any>;
export function copyProvisionalGrade(courseId: string, assignmentId: string, provisionalGradeId: string): Promise<any>;
export function publishProvisionalGradesForAssignment(courseId: string, assignmentId: string): Promise<any>;
export function anonymousProvisionalGrades(courseId: string, assignmentId: string, query?: any): Promise<any>;
