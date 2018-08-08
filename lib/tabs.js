const helper = require('../helper');

let tabs = {
    /**
     * Returns a paginated list of navigation tabs available in the current context.
     * @summary List available tabs for a course or group
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    listAvailableTabsForCourseOrGroupCourses: (courseId, query='') => helper.get(`/v1/courses/${courseId}/tabs`, query),
    /**
     * Returns a paginated list of navigation tabs available in the current context.
     * @summary List available tabs for a course or group
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    listAvailableTabsForCourseOrGroupGroups: (groupId, query='') => helper.get(`/v1/groups/${groupId}/tabs`, query),
    /**
     * Home and Settings tabs are not manageable, and can't be hidden or moved Returns a tab object
     * @summary Update a tab for a course
     * @param {string} courseId Canvas Course ID
     * @param {string} tabId Canvas Tab ID
     * @param {Object} body JSON form fields
     * @returns {Tab}
     */
    updateTabForCourse: (courseId, tabId, body) => helper.put(`/v1/courses/${courseId}/tabs/${tabId}`, body),
}

module.exports = tabs;