"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * This endpoint provides statistics for all quiz versions, or for a specific quiz version, in which case the output is guaranteed to represent the _latest_ and most current version of the quiz. 200 OK response code is returned if the request was successful.
         * @summary Fetching the latest quiz statistics
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} quizId Canvas Quiz ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        fetchingLatestQuizStatistics: (courseId, quizId, query) => helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/statistics`, query),
    };
}
exports.default = default_1;
