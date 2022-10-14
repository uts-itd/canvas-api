"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Create a new OriginalityReport for the specified file
         * @summary Create an Originality Report
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {string|number} submissionId Canvas Submission ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createOriginalityReport: (assignmentId, submissionId, body) => helper.post(`/lti/assignments/${assignmentId}/submissions/${submissionId}/originality_report`, body),
        /**
         * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
         * @summary Edit an Originality Report
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {string|number} submissionId Canvas Submission ID
         * @param {string|number} originalityReporId Canvas Originality repor ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        editOriginalityReportSubmissions: (assignmentId, submissionId, originalityReporId, body) => helper.put(`/lti/assignments/${assignmentId}/submissions/${submissionId}/originality_report/${originalityReporId}`, body),
        /**
         * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
         * @summary Edit an Originality Report
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {string|number} fileId Canvas File ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        editOriginalityReportFiles: (assignmentId, fileId, body) => helper.put(`/lti/assignments/${assignmentId}/files/${fileId}/originality_report`, body),
        /**
         * Get a single originality report
         * @summary Show an Originality Report
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {string|number} submissionId Canvas Submission ID
         * @param {string|number} originalityReporId Canvas Originality repor ID
         * @returns {Promise<any>}
         */
        showOriginalityReportSubmissions: (assignmentId, submissionId, originalityReporId) => helper.get(`/lti/assignments/${assignmentId}/submissions/${submissionId}/originality_report/${originalityReporId}`),
        /**
         * Get a single originality report
         * @summary Show an Originality Report
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {string|number} fileId Canvas File ID
         * @returns {Promise<any>}
         */
        showOriginalityReportFiles: (assignmentId, fileId) => helper.get(`/lti/assignments/${assignmentId}/files/${fileId}/originality_report`),
    };
}
exports.default = default_1;
