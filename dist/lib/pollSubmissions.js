"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Returns the poll submission with the given id
         * @summary Get a single poll submission
         * @param {string|number} pollId Canvas Poll ID
         * @param {string|number} pollSessionId Canvas Poll session ID
         * @param {string|number} pollSubmissionId Canvas Poll submission ID
         * @returns {Promise<any>}
         */
        getSinglePollSubmission: (pollId, pollSessionId, pollSubmissionId) => helper.get(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}/poll_submissions/${pollSubmissionId}`),
        /**
         * Create a new poll submission for this poll session
         * @summary Create a single poll submission
         * @param {string|number} pollId Canvas Poll ID
         * @param {string|number} pollSessionId Canvas Poll session ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createSinglePollSubmission: (pollId, pollSessionId, body) => helper.post(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}/poll_submissions`, body),
    };
}
exports.default = default_1;
