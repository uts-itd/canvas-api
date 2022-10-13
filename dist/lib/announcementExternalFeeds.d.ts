declare function _exports(helper: any): {
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listExternalFeedsCourses: (courseId: string) => Promise<any>;
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listExternalFeedsGroups: (groupId: string) => Promise<any>;
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalFeedCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalFeedGroups: (groupId: string, body: any) => Promise<any>;
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string} courseId Canvas Course ID
     * @param {string} externalFeedId Canvas External feed ID
     * @returns {Promise<any>}
     */
    deleteExternalFeedCourses: (courseId: string, externalFeedId: string) => Promise<any>;
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string} groupId Canvas Group ID
     * @param {string} externalFeedId Canvas External feed ID
     * @returns {Promise<any>}
     */
    deleteExternalFeedGroups: (groupId: string, externalFeedId: string) => Promise<any>;
};
export = _exports;
