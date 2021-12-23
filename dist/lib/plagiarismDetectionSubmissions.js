var helper = require('../helper');
var plagiarismDetectionSubmissions = {
    /**
     * Get a single submission, based on submission id.
     * @summary Get a single submission
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @returns {Promise<any>}
     */
    getSingleSubmission: function (assignmentId, submissionId) { return helper.get("/lti/assignments/" + assignmentId + "/submissions/" + submissionId); },
    /**
     * Get a list of all attempts made for a submission, based on submission id.
     * @summary Get the history of a single submission
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @returns {Promise<any>}
     */
    getHistoryOfSingleSubmission: function (assignmentId, submissionId) { return helper.get("/lti/assignments/" + assignmentId + "/submissions/" + submissionId + "/history"); },
};
module.exports = plagiarismDetectionSubmissions;
//# sourceMappingURL=plagiarismDetectionSubmissions.js.map