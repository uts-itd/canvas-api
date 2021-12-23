var helper = require('../helper');
var outcomeResults = {
    /**
     * Gets the outcome results for users and outcomes in the specified context.
     * @summary Get outcome results
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResults: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/outcome_results", query);
    },
    /**
     * Gets the outcome rollups for the users and outcomes in the specified context.
     * @summary Get outcome result rollups
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResultRollups: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/outcome_rollups", query);
    },
};
module.exports = outcomeResults;
//# sourceMappingURL=outcomeResults.js.map