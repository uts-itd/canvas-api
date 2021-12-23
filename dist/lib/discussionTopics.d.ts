export function listDiscussionTopicsCourses(courseId: string, query?: any): Promise<any>;
export function listDiscussionTopicsGroups(groupId: string, query?: any): Promise<any>;
export function createNewDiscussionTopicCourses(courseId: string, body: any): Promise<any>;
export function createNewDiscussionTopicGroups(groupId: string, body: any): Promise<any>;
export function updateTopicCourses(courseId: string, topicId: string, body: any): Promise<any>;
export function updateTopicGroups(groupId: string, topicId: string, body: any): Promise<any>;
export function deleteTopicCourses(courseId: string, topicId: string): Promise<any>;
export function deleteTopicGroups(groupId: string, topicId: string): Promise<any>;
export function reorderPinnedTopicsCourses(courseId: string, body: any): Promise<any>;
export function reorderPinnedTopicsGroups(groupId: string, body: any): Promise<any>;
export function updateEntryCourses(courseId: string, topicId: string, entrieId: string, body: any): Promise<any>;
export function updateEntryGroups(groupId: string, topicId: string, entrieId: string, body: any): Promise<any>;
export function deleteEntryCourses(courseId: string, topicId: string, entrieId: string): Promise<any>;
export function deleteEntryGroups(groupId: string, topicId: string, entrieId: string): Promise<any>;
export function getSingleTopicCourses(courseId: string, topicId: string, query?: any): Promise<any>;
export function getSingleTopicGroups(groupId: string, topicId: string, query?: any): Promise<any>;
export function getFullTopicCourses(courseId: string, topicId: string): Promise<any>;
export function getFullTopicGroups(groupId: string, topicId: string): Promise<any>;
export function postEntryCourses(courseId: string, topicId: string, body: any): Promise<any>;
export function postEntryGroups(groupId: string, topicId: string, body: any): Promise<any>;
export function listTopicEntriesCourses(courseId: string, topicId: string): Promise<any>;
export function listTopicEntriesGroups(groupId: string, topicId: string): Promise<any>;
export function postReplyCourses(courseId: string, topicId: string, entryId: string, body: any): Promise<any>;
export function postReplyGroups(groupId: string, topicId: string, entryId: string, body: any): Promise<any>;
export function listEntryRepliesCourses(courseId: string, topicId: string, entryId: string): Promise<any>;
export function listEntryRepliesGroups(groupId: string, topicId: string, entryId: string): Promise<any>;
export function listEntriesCourses(courseId: string, topicId: string, query?: any): Promise<any>;
export function listEntriesGroups(groupId: string, topicId: string, query?: any): Promise<any>;
export function markTopicAsReadCourses(courseId: string, topicId: string): Promise<any>;
export function markTopicAsReadGroups(groupId: string, topicId: string): Promise<any>;
export function markTopicAsUnreadCourses(courseId: string, topicId: string): Promise<any>;
export function markTopicAsUnreadGroups(groupId: string, topicId: string): Promise<any>;
export function markAllEntriesAsReadCourses(courseId: string, topicId: string, body: any): Promise<any>;
export function markAllEntriesAsReadGroups(groupId: string, topicId: string, body: any): Promise<any>;
export function markAllEntriesAsUnreadCourses(courseId: string, topicId: string, query?: any): Promise<any>;
export function markAllEntriesAsUnreadGroups(groupId: string, topicId: string, query?: any): Promise<any>;
export function markEntryAsReadCourses(courseId: string, topicId: string, entryId: string, body: any): Promise<any>;
export function markEntryAsReadGroups(groupId: string, topicId: string, entryId: string, body: any): Promise<any>;
export function markEntryAsUnreadCourses(courseId: string, topicId: string, entryId: string, query?: any): Promise<any>;
export function markEntryAsUnreadGroups(groupId: string, topicId: string, entryId: string, query?: any): Promise<any>;
export function rateEntryCourses(courseId: string, topicId: string, entryId: string, body: any): Promise<any>;
export function rateEntryGroups(groupId: string, topicId: string, entryId: string, body: any): Promise<any>;
export function subscribeToTopicCourses(courseId: string, topicId: string): Promise<any>;
export function subscribeToTopicGroups(groupId: string, topicId: string): Promise<any>;
export function unsubscribeFromTopicCourses(courseId: string, topicId: string): Promise<any>;
export function unsubscribeFromTopicGroups(groupId: string, topicId: string): Promise<any>;
