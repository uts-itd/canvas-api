"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Get a single submission, based on submission id.
         * @summary Get a single submission
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {string|number} submissionId Canvas Submission ID
         * @returns {Promise<any>}
         */
        getSingleSubmission: (assignmentId, submissionId) => helper.get(`/lti/assignments/${assignmentId}/submissions/${submissionId}`),
        /**
         * Get a list of all attempts made for a submission, based on submission id.
         * @summary Get the history of a single submission
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {string|number} submissionId Canvas Submission ID
         * @returns {Promise<any>}
         */
        getHistoryOfSingleSubmission: (assignmentId, submissionId) => helper.get(`/lti/assignments/${assignmentId}/submissions/${submissionId}/history`),
    };
}
exports.default = default_1;
