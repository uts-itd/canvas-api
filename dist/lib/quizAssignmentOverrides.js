var helper = require('../helper');
var quizAssignmentOverrides = {
    /**
     * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes based on the assignment overrides active for the current API user.
     * @summary Retrieve assignment-overridden dates for quizzes
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveAssignmentOverriddenDatesForQuizzes: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/quizzes/assignment_overrides", query);
    },
};
module.exports = quizAssignmentOverrides;
//# sourceMappingURL=quizAssignmentOverrides.js.map