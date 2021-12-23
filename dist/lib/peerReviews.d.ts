export function getAllPeerReviewsCoursesPeerReviews(courseId: string, assignmentId: string, query?: any): Promise<any>;
export function getAllPeerReviewsSectionsPeerReviews(sectionId: string, assignmentId: string, query?: any): Promise<any>;
export function getAllPeerReviewsCoursesSubmissions(courseId: string, assignmentId: string, submissionId: string, query?: any): Promise<any>;
export function getAllPeerReviewsSectionsSubmissions(sectionId: string, assignmentId: string, submissionId: string, query?: any): Promise<any>;
export function createPeerReviewCourses(courseId: string, assignmentId: string, submissionId: string, body: any): Promise<any>;
export function createPeerReviewSections(sectionId: string, assignmentId: string, submissionId: string, body: any): Promise<any>;
export function deletePeerReviewCourses(courseId: string, assignmentId: string, submissionId: string, query: any): Promise<any>;
export function deletePeerReviewSections(sectionId: string, assignmentId: string, submissionId: string, query: any): Promise<any>;
