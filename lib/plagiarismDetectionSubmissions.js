const helper = require('../helper');

let plagiarismDetectionSubmissions = {
    /**
     * Get a single submission, based on submission id.
     * @summary Get a single submission
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @returns {void}
     */
    getSingleSubmission: (assignmentId, submissionId) => helper.get(`/lti/assignments/${assignmentId}/submissions/${submissionId}`),
    /**
     * Get a list of all attempts made for a submission, based on submission id.
     * @summary Get the history of a single submission
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @returns {void}
     */
    getHistoryOfSingleSubmission: (assignmentId, submissionId) => helper.get(`/lti/assignments/${assignmentId}/submissions/${submissionId}/history`),
}

module.exports = plagiarismDetectionSubmissions;