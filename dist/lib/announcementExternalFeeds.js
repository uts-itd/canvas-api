var helper = require('../helper');
var announcementExternalFeeds = {
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listExternalFeedsCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/external_feeds"); },
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listExternalFeedsGroups: function (groupId) { return helper.get("/v1/groups/" + groupId + "/external_feeds"); },
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalFeedCourses: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/external_feeds", body); },
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalFeedGroups: function (groupId, body) { return helper.post("/v1/groups/" + groupId + "/external_feeds", body); },
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string} courseId Canvas Course ID
     * @param {string} externalFeedId Canvas External feed ID
     * @returns {Promise<any>}
     */
    deleteExternalFeedCourses: function (courseId, externalFeedId) { return helper.delete("/v1/courses/" + courseId + "/external_feeds/" + externalFeedId); },
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string} groupId Canvas Group ID
     * @param {string} externalFeedId Canvas External feed ID
     * @returns {Promise<any>}
     */
    deleteExternalFeedGroups: function (groupId, externalFeedId) { return helper.delete("/v1/groups/" + groupId + "/external_feeds/" + externalFeedId); },
};
module.exports = announcementExternalFeeds;
//# sourceMappingURL=announcementExternalFeeds.js.map