"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Returns a paginated list of navigation tabs available in the current context.
         * @summary List available tabs for a course or group
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listAvailableTabsForCourseOrGroupCourses: (courseId, query) => helper.get(`/v1/courses/${courseId}/tabs`, query),
        /**
         * Returns a paginated list of navigation tabs available in the current context.
         * @summary List available tabs for a course or group
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listAvailableTabsForCourseOrGroupGroups: (groupId, query) => helper.get(`/v1/groups/${groupId}/tabs`, query),
        /**
         * Home and Settings tabs are not manageable, and can't be hidden or moved Returns a tab object
         * @summary Update a tab for a course
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} tabId Canvas Tab ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateTabForCourse: (courseId, tabId, body) => helper.put(`/v1/courses/${courseId}/tabs/${tabId}`, body),
    };
}
exports.default = default_1;
