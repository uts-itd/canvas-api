export function listExternalFeedsCourses(courseId: string): Promise<any>;
export function listExternalFeedsGroups(groupId: string): Promise<any>;
export function createExternalFeedCourses(courseId: string, body: any): Promise<any>;
export function createExternalFeedGroups(groupId: string, body: any): Promise<any>;
export function deleteExternalFeedCourses(courseId: string, externalFeedId: string): Promise<any>;
export function deleteExternalFeedGroups(groupId: string, externalFeedId: string): Promise<any>;
