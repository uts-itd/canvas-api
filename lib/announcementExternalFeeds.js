const helper = require('../helper');

let announcementExternalFeeds = {
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string} courseId Canvas Course ID
     * @returns {array}
     */
    listExternalFeedsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/external_feeds`),
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string} groupId Canvas Group ID
     * @returns {array}
     */
    listExternalFeedsGroups: (groupId) => helper.get(`/v1/groups/${groupId}/external_feeds`),
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {ExternalFeed}
     */
    createExternalFeedCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/external_feeds`, body),
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {ExternalFeed}
     */
    createExternalFeedGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/external_feeds`, body),
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string} courseId Canvas Course ID
     * @param {string} externalFeedId Canvas External feed ID
     * @returns {ExternalFeed}
     */
    deleteExternalFeedCourses: (courseId, externalFeedId) => helper.delete(`/v1/courses/${courseId}/external_feeds/${externalFeedId}`),
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string} groupId Canvas Group ID
     * @param {string} externalFeedId Canvas External feed ID
     * @returns {ExternalFeed}
     */
    deleteExternalFeedGroups: (groupId, externalFeedId) => helper.delete(`/v1/groups/${groupId}/external_feeds/${externalFeedId}`),
}

module.exports = announcementExternalFeeds;