const helper = require('../helper');

let discussionTopics = {
    /**
     * Returns the paginated list of discussion topics for this course or group.
     * @summary List discussion topics
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listDiscussionTopicsCourses: (courseId, query='') => helper.get(`/v1/courses/${courseId}/discussion_topics`, query),
    /**
     * Returns the paginated list of discussion topics for this course or group.
     * @summary List discussion topics
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listDiscussionTopicsGroups: (groupId, query='') => helper.get(`/v1/groups/${groupId}/discussion_topics`, query),
    /**
     * Create an new discussion topic for the course or group.
     * @summary Create a new discussion topic
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    createNewDiscussionTopicCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/discussion_topics`, body),
    /**
     * Create an new discussion topic for the course or group.
     * @summary Create a new discussion topic
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    createNewDiscussionTopicGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/discussion_topics`, body),
    /**
     * Update an existing discussion topic for the course or group.
     * @summary Update a topic
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    updateTopicCourses: (courseId, topicId, body) => helper.put(`/v1/courses/${courseId}/discussion_topics/${topicId}`, body),
    /**
     * Update an existing discussion topic for the course or group.
     * @summary Update a topic
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    updateTopicGroups: (groupId, topicId, body) => helper.put(`/v1/groups/${groupId}/discussion_topics/${topicId}`, body),
    /**
     * Deletes the discussion topic. This will also delete the assignment, if it's an assignment discussion.
     * @summary Delete a topic
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    deleteTopicCourses: (courseId, topicId) => helper.delete(`/v1/courses/${courseId}/discussion_topics/${topicId}`),
    /**
     * Deletes the discussion topic. This will also delete the assignment, if it's an assignment discussion.
     * @summary Delete a topic
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    deleteTopicGroups: (groupId, topicId) => helper.delete(`/v1/groups/${groupId}/discussion_topics/${topicId}`),
    /**
     * Puts the pinned discussion topics in the specified order. All pinned topics should be included.
     * @summary Reorder pinned topics
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    reorderPinnedTopicsCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/discussion_topics/reorder`, body),
    /**
     * Puts the pinned discussion topics in the specified order. All pinned topics should be included.
     * @summary Reorder pinned topics
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    reorderPinnedTopicsGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/discussion_topics/reorder`, body),
    /**
     * Update an existing discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
     * @summary Update an entry
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entrieId Canvas Entrie ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    updateEntryCourses: (courseId, topicId, entrieId, body) => helper.put(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries/${entrieId}`, body),
    /**
     * Update an existing discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
     * @summary Update an entry
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entrieId Canvas Entrie ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    updateEntryGroups: (groupId, topicId, entrieId, body) => helper.put(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries/${entrieId}`, body),
    /**
     * Delete a discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned. The discussion will be marked deleted, and the user_id and message will be cleared out.
     * @summary Delete an entry
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entrieId Canvas Entrie ID
     * @returns {void}
     */
    deleteEntryCourses: (courseId, topicId, entrieId) => helper.delete(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries/${entrieId}`),
    /**
     * Delete a discussion entry. The entry must have been created by the current user, or the current user must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned. The discussion will be marked deleted, and the user_id and message will be cleared out.
     * @summary Delete an entry
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entrieId Canvas Entrie ID
     * @returns {void}
     */
    deleteEntryGroups: (groupId, topicId, entrieId) => helper.delete(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries/${entrieId}`),
    /**
     * Returns data on an individual discussion topic. See the List action for the response formatting.
     * @summary Get a single topic
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    getSingleTopicCourses: (courseId, topicId, query='') => helper.get(`/v1/courses/${courseId}/discussion_topics/${topicId}`, query),
    /**
     * Returns data on an individual discussion topic. See the List action for the response formatting.
     * @summary Get a single topic
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    getSingleTopicGroups: (groupId, topicId, query='') => helper.get(`/v1/groups/${groupId}/discussion_topics/${topicId}`, query),
    /**
     * Return a cached structure of the discussion topic, containing all entries, their authors, and their message bodies. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. In some rare situations, this cached structure may not be available yet. In that case, the server will respond with a 503 error, and the caller should try again soon. The response is an object containing the following keys: "participants": A list of summary information on users who have posted to  the discussion. Each value is an object containing their id, display_name,  and avatar_url. "unread_entries": A list of entry ids that are unread by the current  user. this implies that any entry not in this list is read. "entry_ratings": A map of entry ids to ratings by the current user. Entries  not in this list have no rating. Only populated if rating is enabled. "forced_entries": A list of entry ids that have forced_read_state set to  true. This flag is meant to indicate the entry's read_state has been  manually set to 'unread' by the user, so the entry should not be  automatically marked as read. "view": A threaded view of all the entries in the discussion, containing  the id, user_id, and message. "new_entries": Because this view is eventually consistent, it's possible  that newly created or updated entries won't yet be reflected in the view.  If the application wants to also get a flat list of all entries not yet  reflected in the view, pass include_new_entries=1 to the request and this  array of entries will be returned. These entries are returned in a flat  array, in ascending created_at order.
     * @summary Get the full topic
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    getFullTopicCourses: (courseId, topicId) => helper.get(`/v1/courses/${courseId}/discussion_topics/${topicId}/view`),
    /**
     * Return a cached structure of the discussion topic, containing all entries, their authors, and their message bodies. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. In some rare situations, this cached structure may not be available yet. In that case, the server will respond with a 503 error, and the caller should try again soon. The response is an object containing the following keys: "participants": A list of summary information on users who have posted to  the discussion. Each value is an object containing their id, display_name,  and avatar_url. "unread_entries": A list of entry ids that are unread by the current  user. this implies that any entry not in this list is read. "entry_ratings": A map of entry ids to ratings by the current user. Entries  not in this list have no rating. Only populated if rating is enabled. "forced_entries": A list of entry ids that have forced_read_state set to  true. This flag is meant to indicate the entry's read_state has been  manually set to 'unread' by the user, so the entry should not be  automatically marked as read. "view": A threaded view of all the entries in the discussion, containing  the id, user_id, and message. "new_entries": Because this view is eventually consistent, it's possible  that newly created or updated entries won't yet be reflected in the view.  If the application wants to also get a flat list of all entries not yet  reflected in the view, pass include_new_entries=1 to the request and this  array of entries will be returned. These entries are returned in a flat  array, in ascending created_at order.
     * @summary Get the full topic
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    getFullTopicGroups: (groupId, topicId) => helper.get(`/v1/groups/${groupId}/discussion_topics/${topicId}/view`),
    /**
     * Create a new entry in a discussion topic. Returns a json representation of the created entry (see documentation for 'entries' method) on success.
     * @summary Post an entry
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    postEntryCourses: (courseId, topicId, body) => helper.post(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries`, body),
    /**
     * Create a new entry in a discussion topic. Returns a json representation of the created entry (see documentation for 'entries' method) on success.
     * @summary Post an entry
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    postEntryGroups: (groupId, topicId, body) => helper.post(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries`, body),
    /**
     * Retrieve the (paginated) top-level entries in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Will include the 10 most recent replies, if any, for each entry returned. If the topic is a root topic with children corresponding to groups of a group assignment, entries from those subtopics for which the user belongs to the corresponding group will be returned. Ordering of returned entries is newest-first by posting timestamp (reply activity is ignored).
     * @summary List topic entries
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    listTopicEntriesCourses: (courseId, topicId) => helper.get(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries`),
    /**
     * Retrieve the (paginated) top-level entries in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Will include the 10 most recent replies, if any, for each entry returned. If the topic is a root topic with children corresponding to groups of a group assignment, entries from those subtopics for which the user belongs to the corresponding group will be returned. Ordering of returned entries is newest-first by posting timestamp (reply activity is ignored).
     * @summary List topic entries
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    listTopicEntriesGroups: (groupId, topicId) => helper.get(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries`),
    /**
     * Add a reply to an entry in a discussion topic. Returns a json representation of the created reply (see documentation for 'replies' method) on success. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary Post a reply
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    postReplyCourses: (courseId, topicId, entryId, body) => helper.post(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries/${entryId}/replies`, body),
    /**
     * Add a reply to an entry in a discussion topic. Returns a json representation of the created reply (see documentation for 'replies' method) on success. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary Post a reply
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    postReplyGroups: (groupId, topicId, entryId, body) => helper.post(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries/${entryId}/replies`, body),
    /**
     * Retrieve the (paginated) replies to a top-level entry in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Ordering of returned entries is newest-first by creation timestamp.
     * @summary List entry replies
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @returns {void}
     */
    listEntryRepliesCourses: (courseId, topicId, entryId) => helper.get(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries/${entryId}/replies`),
    /**
     * Retrieve the (paginated) replies to a top-level entry in a discussion topic. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'. Ordering of returned entries is newest-first by creation timestamp.
     * @summary List entry replies
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @returns {void}
     */
    listEntryRepliesGroups: (groupId, topicId, entryId) => helper.get(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries/${entryId}/replies`),
    /**
     * Retrieve a paginated list of discussion entries, given a list of ids. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary List entries
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    listEntriesCourses: (courseId, topicId, query='') => helper.get(`/v1/courses/${courseId}/discussion_topics/${topicId}/entry_list`, query),
    /**
     * Retrieve a paginated list of discussion entries, given a list of ids. May require (depending on the topic) that the user has posted in the topic. If it is required, and the user has not posted, will respond with a 403 Forbidden status and the body 'require_initial_post'.
     * @summary List entries
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    listEntriesGroups: (groupId, topicId, query='') => helper.get(`/v1/groups/${groupId}/discussion_topics/${topicId}/entry_list`, query),
    /**
     * Mark the initial text of the discussion topic as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as read
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    markTopicAsReadCourses: (courseId, topicId) => helper.put(`/v1/courses/${courseId}/discussion_topics/${topicId}/read`),
    /**
     * Mark the initial text of the discussion topic as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as read
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    markTopicAsReadGroups: (groupId, topicId) => helper.put(`/v1/groups/${groupId}/discussion_topics/${topicId}/read`),
    /**
     * Mark the initial text of the discussion topic as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as unread
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    markTopicAsUnreadCourses: (courseId, topicId) => helper.delete(`/v1/courses/${courseId}/discussion_topics/${topicId}/read`),
    /**
     * Mark the initial text of the discussion topic as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark topic as unread
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    markTopicAsUnreadGroups: (groupId, topicId) => helper.delete(`/v1/groups/${groupId}/discussion_topics/${topicId}/read`),
    /**
     * Mark the discussion topic and all its entries as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as read
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    markAllEntriesAsReadCourses: (courseId, topicId, body) => helper.put(`/v1/courses/${courseId}/discussion_topics/${topicId}/read_all`, body),
    /**
     * Mark the discussion topic and all its entries as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as read
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    markAllEntriesAsReadGroups: (groupId, topicId, body) => helper.put(`/v1/groups/${groupId}/discussion_topics/${topicId}/read_all`, body),
    /**
     * Mark the discussion topic and all its entries as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as unread
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    markAllEntriesAsUnreadCourses: (courseId, topicId, query='') => helper.delete(`/v1/courses/${courseId}/discussion_topics/${topicId}/read_all`, query),
    /**
     * Mark the discussion topic and all its entries as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark all entries as unread
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    markAllEntriesAsUnreadGroups: (groupId, topicId, query='') => helper.delete(`/v1/groups/${groupId}/discussion_topics/${topicId}/read_all`, query),
    /**
     * Mark a discussion entry as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as read
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    markEntryAsReadCourses: (courseId, topicId, entryId, body) => helper.put(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries/${entryId}/read`, body),
    /**
     * Mark a discussion entry as read. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as read
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    markEntryAsReadGroups: (groupId, topicId, entryId, body) => helper.put(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries/${entryId}/read`, body),
    /**
     * Mark a discussion entry as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as unread
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    markEntryAsUnreadCourses: (courseId, topicId, entryId, query='') => helper.delete(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries/${entryId}/read`, query),
    /**
     * Mark a discussion entry as unread. No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark entry as unread
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    markEntryAsUnreadGroups: (groupId, topicId, entryId, query='') => helper.delete(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries/${entryId}/read`, query),
    /**
     * Rate a discussion entry. On success, the response will be 204 No Content with an empty body.
     * @summary Rate entry
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    rateEntryCourses: (courseId, topicId, entryId, body) => helper.post(`/v1/courses/${courseId}/discussion_topics/${topicId}/entries/${entryId}/rating`, body),
    /**
     * Rate a discussion entry. On success, the response will be 204 No Content with an empty body.
     * @summary Rate entry
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @param {string} entryId Canvas Entry ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    rateEntryGroups: (groupId, topicId, entryId, body) => helper.post(`/v1/groups/${groupId}/discussion_topics/${topicId}/entries/${entryId}/rating`, body),
    /**
     * Subscribe to a topic to receive notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Subscribe to a topic
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    subscribeToTopicCourses: (courseId, topicId) => helper.put(`/v1/courses/${courseId}/discussion_topics/${topicId}/subscribed`),
    /**
     * Subscribe to a topic to receive notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Subscribe to a topic
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    subscribeToTopicGroups: (groupId, topicId) => helper.put(`/v1/groups/${groupId}/discussion_topics/${topicId}/subscribed`),
    /**
     * Unsubscribe from a topic to stop receiving notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Unsubscribe from a topic
     * @param {string} courseId Canvas Course ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    unsubscribeFromTopicCourses: (courseId, topicId) => helper.delete(`/v1/courses/${courseId}/discussion_topics/${topicId}/subscribed`),
    /**
     * Unsubscribe from a topic to stop receiving notifications about new entries On success, the response will be 204 No Content with an empty body
     * @summary Unsubscribe from a topic
     * @param {string} groupId Canvas Group ID
     * @param {string} topicId Canvas Topic ID
     * @returns {void}
     */
    unsubscribeFromTopicGroups: (groupId, topicId) => helper.delete(`/v1/groups/${groupId}/discussion_topics/${topicId}/subscribed`),
}

module.exports = discussionTopics;