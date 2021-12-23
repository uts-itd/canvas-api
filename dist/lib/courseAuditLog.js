var helper = require('../helper');
var courseAuditLog = {
    /**
     * List course change events for a given course.
     * @summary Query by course.
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByCourse: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/audit/course/courses/" + courseId, query);
    },
};
module.exports = courseAuditLog;
