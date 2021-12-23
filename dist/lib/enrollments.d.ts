export function listEnrollmentsCourses(courseId: string, query?: any): Promise<any>;
export function listEnrollmentsSections(sectionId: string, query?: any): Promise<any>;
export function listEnrollmentsUsers(userId: string, query?: any): Promise<any>;
export function enrollmentById(accountId: string, enrollmentId: any): Promise<any>;
export function enrollUserCourses(courseId: string, body: any): Promise<any>;
export function enrollUserSections(sectionId: string, body: any): Promise<any>;
export function concludeDeactivateOrDeleteEnrollment(courseId: string, enrollmentId: string, query?: any): Promise<any>;
export function acceptCourseInvitation(courseId: string, enrollmentId: string): Promise<any>;
export function rejectCourseInvitation(courseId: string, enrollmentId: string): Promise<any>;
export function reActivateEnrollment(courseId: string, enrollmentId: string): Promise<any>;
export function addsLastAttendedDateToStudentEnrollmentInCourse(courseId: string, userId: string): Promise<any>;