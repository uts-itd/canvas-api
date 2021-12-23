var helper = require('../helper');
var search = {
    /**
     * Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint, /api/v1/conversations/find_recipients is deprecated. Pagination is supported.
     * @summary Find recipients
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    findRecipientsConversations: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/conversations/find_recipients", query);
    },
    /**
     * Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint, /api/v1/conversations/find_recipients is deprecated. Pagination is supported.
     * @summary Find recipients
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    findRecipientsSearch: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/search/recipients", query);
    },
    /**
     * A paginated list of all courses visible in the public index
     * @summary List all courses
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAllCourses: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/search/all_courses", query);
    },
};
module.exports = search;
//# sourceMappingURL=search.js.map