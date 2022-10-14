"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint, /api/v1/conversations/find_recipients is deprecated. Pagination is supported.
         * @summary Find recipients
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        findRecipientsConversations: (query) => helper.get(`/v1/conversations/find_recipients`, query),
        /**
         * Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint, /api/v1/conversations/find_recipients is deprecated. Pagination is supported.
         * @summary Find recipients
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        findRecipientsSearch: (query) => helper.get(`/v1/search/recipients`, query),
        /**
         * A paginated list of all courses visible in the public index
         * @summary List all courses
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listAllCourses: (query) => helper.get(`/v1/search/all_courses`, query),
    };
}
exports.default = default_1;
