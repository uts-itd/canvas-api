export function submitAssignmentCourses(courseId: string, assignmentId: string, body: any): Promise<any>;
export function submitAssignmentSections(sectionId: string, assignmentId: string, body: any): Promise<any>;
export function listAssignmentSubmissionsCourses(courseId: string, assignmentId: string, query?: any): Promise<any>;
export function listAssignmentSubmissionsSections(sectionId: string, assignmentId: string, query?: any): Promise<any>;
export function listSubmissionsForMultipleAssignmentsCourses(courseId: string, query?: any): Promise<any>;
export function listSubmissionsForMultipleAssignmentsSections(sectionId: string, query?: any): Promise<any>;
export function getSingleSubmissionCourses(courseId: string, assignmentId: string, userId: string, query?: any): Promise<any>;
export function getSingleSubmissionSections(sectionId: string, assignmentId: string, userId: string, query?: any): Promise<any>;
export function uploadFileCourses(courseId: string, assignmentId: string, userId: string): Promise<any>;
export function uploadFileSections(sectionId: string, assignmentId: string, userId: string): Promise<any>;
export function gradeOrCommentOnSubmissionCourses(courseId: string, assignmentId: string, userId: string, body: any): Promise<any>;
export function gradeOrCommentOnSubmissionSections(sectionId: string, assignmentId: string, userId: string, body: any): Promise<any>;
export function listGradeableStudents(courseId: string, assignmentId: string): Promise<any>;
export function listMultipleAssignmentsGradeableStudents(courseId: string, query?: any): Promise<any>;
export function gradeOrCommentOnMultipleSubmissionsCoursesSubmissions(courseId: string, body: any): Promise<any>;
export function gradeOrCommentOnMultipleSubmissionsCoursesAssignments(courseId: string, assignmentId: string, body: any): Promise<any>;
export function gradeOrCommentOnMultipleSubmissionsSectionsSubmissions(sectionId: string, body: any): Promise<any>;
export function gradeOrCommentOnMultipleSubmissionsSectionsAssignments(sectionId: string, assignmentId: string, body: any): Promise<any>;
export function markSubmissionAsReadCourses(courseId: string, assignmentId: string, userId: string): Promise<any>;
export function markSubmissionAsReadSections(sectionId: string, assignmentId: string, userId: string): Promise<any>;
export function markSubmissionAsUnreadCourses(courseId: string, assignmentId: string, userId: string): Promise<any>;
export function markSubmissionAsUnreadSections(sectionId: string, assignmentId: string, userId: string): Promise<any>;
export function submissionSummaryCourses(courseId: string, assignmentId: string, query?: any): Promise<any>;
export function submissionSummarySections(sectionId: string, assignmentId: string, query?: any): Promise<any>;
