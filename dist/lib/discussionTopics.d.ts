import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the paginated list of discussion topics for this course or group.
     * @summary List discussion topics
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listDiscussionTopicsCourses: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of discussion topics for this course or group.
     * @summary List discussion topics
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listDiscussionTopicsGroups: (groupId: string | number, query?: any) => Promise<any>;
    /**
     * Create an new discussion topic for the course or group.
     * @summary Create a new discussion topic
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewDiscussionTopicCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Create an new discussion topic for the course or group.
     * @summary Create a new discussion topic
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewDiscussionTopicGroups: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Update an existing discussion topic for the course or group.
     * @summary Update a topic
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateTopicCourses: (courseId: string | number, topicId: string | number, body: any) => Promise<any>;
    /**
     * Update an existing discussion topic for the course or group.
     * @summary Update a topic
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateTopicGroups: (groupId: string | number, topicId: string | number, body: any) => Promise<any>;
    /**
     * Deletes the discussion topic. This will also delete the assignment, if it's an assignment discussion.
     * @summary Delete a topic
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    deleteTopicCourses: (courseId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Deletes the discussion topic. This will also delete the assignment, if it's an assignment discussion.
     * @summary Delete a topic
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    deleteTopicGroups: (groupId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Puts the pinned discussion topics in the specified order. All pinned topics should be included.
     * @summary Reorder pinned topics
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderPinnedTopicsCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Puts the pinned discussion topics in the specified order. All pinned topics should be included.
     * @summary Reorder pinned topics
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderPinnedTopicsGroups: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Update an existing discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
     * @summary Update an entry
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entrieId Canvas Entrie ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateEntryCourses: (courseId: string | number, topicId: string | number, entrieId: string | number, body: any) => Promise<any>;
    /**
     * Update an existing discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
     * @summary Update an entry
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entrieId Canvas Entrie ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateEntryGroups: (groupId: string | number, topicId: string | number, entrieId: string | number, body: any) => Promise<any>;
    /**
     * Delete a discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned. The discussion will be marked deleted, and the user_id and message will be cleared out.
     * @summary Delete an entry
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entrieId Canvas Entrie ID
     * @returns {Promise<any>}
     */
    deleteEntryCourses: (courseId: string | number, topicId: string | number, entrieId: string | number) => Promise<any>;
    /**
     * Delete a discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned. The discussion will be marked deleted, and the user_id and message will be cleared out.
     * @summary Delete an entry
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entrieId Canvas Entrie ID
     * @returns {Promise<any>}
     */
    deleteEntryGroups: (groupId: string | number, topicId: string | number, entrieId: string | number) => Promise<any>;
    /**
     * Returns data on an individual discussion topic. See the List action for the response formatting.
     * @summary Get a single topic
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleTopicCourses: (courseId: string | number, topicId: string | number, query?: any) => Promise<any>;
    /**
     * Returns data on an individual discussion topic. See the List action for the response formatting.
     * @summary Get a single topic
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleTopicGroups: (groupId: string | number, topicId: string | number, query?: any) => Promise<any>;
    /**
     * Return a cached structure of the discussion topic, containing all entries, their authors, and their message bodies. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. In some rare situations, this cached structure may not be available yet. In that case, the server will respond with a 503 error, and the caller should try again soon. The response is an object containing the following keys: "participants": A list of summary information on users who have posted to  the discussion. Each value is an object containing their id, display_name,  and avatar_url. "unread_entries": A list of entry ids that are unread by the current  user. this implies that any entry not in this list is read. "entry_ratings": A map of entry ids to ratings by the current user. Entries  not in this list have no rating. Only populated if rating is enabled. "forced_entries": A list of entry ids that have forced_read_state set to  true. This flag is meant to indicate the entry's read_state has been  manually set to 'unread' by the user, so the entry should not be  automatically marked as read. "view": A threaded view of all the entries in the discussion, containing  the id: string | number, user_id: string | number, and message. "new_entries": Because this view is eventually consistent, it's possible  that newly created or updated entries won't yet be reflected in the view.  If the application wants to also get a flat list of all entries not yet  reflected in the view, pass include_new_entries=1 to the request and this  array of entries will be returned. These entries are returned in a flat  array, in ascending created_at order.
     * @summary Get the full topic
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    getFullTopicCourses: (courseId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Return a cached structure of the discussion topic, containing all entries, their authors, and their message bodies. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. In some rare situations, this cached structure may not be available yet. In that case, the server will respond with a 503 error, and the caller should try again soon. The response is an object containing the following keys: "participants": A list of summary information on users who have posted to  the discussion. Each value is an object containing their id, display_name,  and avatar_url. "unread_entries": A list of entry ids that are unread by the current  user. this implies that any entry not in this list is read. "entry_ratings": A map of entry ids to ratings by the current user. Entries  not in this list have no rating. Only populated if rating is enabled. "forced_entries": A list of entry ids that have forced_read_state set to  true. This flag is meant to indicate the entry's read_state has been  manually set to 'unread' by the user, so the entry should not be  automatically marked as read. "view": A threaded view of all the entries in the discussion, containing  the id: string | number, user_id: string | number, and message. "new_entries": Because this view is eventually consistent, it's possible  that newly created or updated entries won't yet be reflected in the view.  If the application wants to also get a flat list of all entries not yet  reflected in the view, pass include_new_entries=1 to the request and this  array of entries will be returned. These entries are returned in a flat  array, in ascending created_at order.
     * @summary Get the full topic
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    getFullTopicGroups: (groupId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Create a new entry in a discussion topic. Returns a json representation of the created entry (see documentation for 'entries' method) on success.
     * @summary Post an entry
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    postEntryCourses: (courseId: string | number, topicId: string | number, body: any) => Promise<any>;
    /**
     * Create a new entry in a discussion topic. Returns a json representation of the created entry (see documentation for 'entries' method) on success.
     * @summary Post an entry
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    postEntryGroups: (groupId: string | number, topicId: string | number, body: any) => Promise<any>;
    /**
     * Retrieve the (paginated) top-level entries in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Will include the 10 most recent replies, if any, for each entry returned. If the topic is a root topic with children corresponding to groups of a group assignment, entries from those subtopics for which the user belongs to the corresponding group will be returned. Ordering of returned entries is newest-first by posting timestamp (reply activity is ignored).
     * @summary List topic entries
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    listTopicEntriesCourses: (courseId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Retrieve the (paginated) top-level entries in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Will include the 10 most recent replies, if any, for each entry returned. If the topic is a root topic with children corresponding to groups of a group assignment, entries from those subtopics for which the user belongs to the corresponding group will be returned. Ordering of returned entries is newest-first by posting timestamp (reply activity is ignored).
     * @summary List topic entries
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    listTopicEntriesGroups: (groupId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Add a reply to an entry in a discussion topic. Returns a json representation of the created reply (see documentation for 'replies' method) on success. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary Post a reply
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    postReplyCourses: (courseId: string | number, topicId: string | number, entryId: string | number, body: any) => Promise<any>;
    /**
     * Add a reply to an entry in a discussion topic. Returns a json representation of the created reply (see documentation for 'replies' method) on success. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary Post a reply
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    postReplyGroups: (groupId: string | number, topicId: string | number, entryId: string | number, body: any) => Promise<any>;
    /**
     * Retrieve the (paginated) replies to a top-level entry in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Ordering of returned entries is newest-first by creation timestamp.
     * @summary List entry replies
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @returns {Promise<any>}
     */
    listEntryRepliesCourses: (courseId: string | number, topicId: string | number, entryId: string | number) => Promise<any>;
    /**
     * Retrieve the (paginated) replies to a top-level entry in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Ordering of returned entries is newest-first by creation timestamp.
     * @summary List entry replies
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @returns {Promise<any>}
     */
    listEntryRepliesGroups: (groupId: string | number, topicId: string | number, entryId: string | number) => Promise<any>;
    /**
     * Retrieve a paginated list of discussion entries, given a list of ids. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary List entries
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEntriesCourses: (courseId: string | number, topicId: string | number, query?: any) => Promise<any>;
    /**
     * Retrieve a paginated list of discussion entries, given a list of ids. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary List entries
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEntriesGroups: (groupId: string | number, topicId: string | number, query?: any) => Promise<any>;
    /**
     * Mark the initial text of the discussion topic as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as read
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    markTopicAsReadCourses: (courseId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Mark the initial text of the discussion topic as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as read
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    markTopicAsReadGroups: (groupId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Mark the initial text of the discussion topic as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as unread
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    markTopicAsUnreadCourses: (courseId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Mark the initial text of the discussion topic as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as unread
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    markTopicAsUnreadGroups: (groupId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Mark the discussion topic and all its entries as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as read
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    markAllEntriesAsReadCourses: (courseId: string | number, topicId: string | number, body: any) => Promise<any>;
    /**
     * Mark the discussion topic and all its entries as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as read
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    markAllEntriesAsReadGroups: (groupId: string | number, topicId: string | number, body: any) => Promise<any>;
    /**
     * Mark the discussion topic and all its entries as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as unread
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    markAllEntriesAsUnreadCourses: (courseId: string | number, topicId: string | number, query?: any) => Promise<any>;
    /**
     * Mark the discussion topic and all its entries as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as unread
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    markAllEntriesAsUnreadGroups: (groupId: string | number, topicId: string | number, query?: any) => Promise<any>;
    /**
     * Mark a discussion entry as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as read
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    markEntryAsReadCourses: (courseId: string | number, topicId: string | number, entryId: string | number, body: any) => Promise<any>;
    /**
     * Mark a discussion entry as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as read
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    markEntryAsReadGroups: (groupId: string | number, topicId: string | number, entryId: string | number, body: any) => Promise<any>;
    /**
     * Mark a discussion entry as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as unread
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    markEntryAsUnreadCourses: (courseId: string | number, topicId: string | number, entryId: string | number, query?: any) => Promise<any>;
    /**
     * Mark a discussion entry as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as unread
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    markEntryAsUnreadGroups: (groupId: string | number, topicId: string | number, entryId: string | number, query?: any) => Promise<any>;
    /**
     * Rate a discussion entry. On success, the response will be 204 No Content with an empty body.
     * @summary Rate entry
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    rateEntryCourses: (courseId: string | number, topicId: string | number, entryId: string | number, body: any) => Promise<any>;
    /**
     * Rate a discussion entry. On success, the response will be 204 No Content with an empty body.
     * @summary Rate entry
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @param {string|number} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    rateEntryGroups: (groupId: string | number, topicId: string | number, entryId: string | number, body: any) => Promise<any>;
    /**
     * Subscribe to a topic to receive notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Subscribe to a topic
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    subscribeToTopicCourses: (courseId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Subscribe to a topic to receive notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Subscribe to a topic
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    subscribeToTopicGroups: (groupId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Unsubscribe from a topic to stop receiving notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Unsubscribe from a topic
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    unsubscribeFromTopicCourses: (courseId: string | number, topicId: string | number) => Promise<any>;
    /**
     * Unsubscribe from a topic to stop receiving notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Unsubscribe from a topic
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} topicId Canvas Topic ID
     * @returns {Promise<any>}
     */
    unsubscribeFromTopicGroups: (groupId: string | number, topicId: string | number) => Promise<any>;
};
