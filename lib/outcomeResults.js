const helper = require('../helper');

let outcomeResults = {
    /**
     * Gets the outcome results for users and outcomes in the specified context.
     * @summary Get outcome results
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResults: (courseId, query='') => helper.get(`/v1/courses/${courseId}/outcome_results`, query),
    /**
     * Gets the outcome rollups for the users and outcomes in the specified context.
     * @summary Get outcome result rollups
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResultRollups: (courseId, query='') => helper.get(`/v1/courses/${courseId}/outcome_rollups`, query),
}

module.exports = outcomeResults;