var helper = require('../helper');
var originalityReports = {
    /**
     * Create a new OriginalityReport for the specified file
     * @summary Create an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createOriginalityReport: function (assignmentId, submissionId, body) { return helper.post("/lti/assignments/" + assignmentId + "/submissions/" + submissionId + "/originality_report", body); },
    /**
     * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
     * @summary Edit an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {string} originalityReporId Canvas Originality repor ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editOriginalityReportSubmissions: function (assignmentId, submissionId, originalityReporId, body) { return helper.put("/lti/assignments/" + assignmentId + "/submissions/" + submissionId + "/originality_report/" + originalityReporId, body); },
    /**
     * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
     * @summary Edit an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} fileId Canvas File ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editOriginalityReportFiles: function (assignmentId, fileId, body) { return helper.put("/lti/assignments/" + assignmentId + "/files/" + fileId + "/originality_report", body); },
    /**
     * Get a single originality report
     * @summary Show an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {string} originalityReporId Canvas Originality repor ID
     * @returns {Promise<any>}
     */
    showOriginalityReportSubmissions: function (assignmentId, submissionId, originalityReporId) { return helper.get("/lti/assignments/" + assignmentId + "/submissions/" + submissionId + "/originality_report/" + originalityReporId); },
    /**
     * Get a single originality report
     * @summary Show an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} fileId Canvas File ID
     * @returns {Promise<any>}
     */
    showOriginalityReportFiles: function (assignmentId, fileId) { return helper.get("/lti/assignments/" + assignmentId + "/files/" + fileId + "/originality_report"); },
};
module.exports = originalityReports;
