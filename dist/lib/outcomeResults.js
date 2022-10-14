"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Gets the outcome results for users and outcomes in the specified context.
         * @summary Get outcome results
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getOutcomeResults: (courseId, query) => helper.get(`/v1/courses/${courseId}/outcome_results`, query),
        /**
         * Gets the outcome rollups for the users and outcomes in the specified context.
         * @summary Get outcome result rollups
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getOutcomeResultRollups: (courseId, query) => helper.get(`/v1/courses/${courseId}/outcome_rollups`, query),
    };
}
exports.default = default_1;
