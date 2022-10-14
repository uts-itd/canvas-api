"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Retrieve the paginated list of conferences for this context This API returns a JSON object containing the list of conferences, the key for the list of conferences is "conferences"
         * @summary List conferences
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listConferencesCourses: (courseId) => helper.get(`/v1/courses/${courseId}/conferences`),
        /**
         * Retrieve the paginated list of conferences for this context This API returns a JSON object containing the list of conferences, the key for the list of conferences is "conferences"
         * @summary List conferences
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listConferencesGroups: (groupId) => helper.get(`/v1/groups/${groupId}/conferences`),
    };
}
exports.default = default_1;
