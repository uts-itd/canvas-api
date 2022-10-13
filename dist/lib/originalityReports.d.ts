declare function _exports(helper: any): {
    /**
     * Create a new OriginalityReport for the specified file
     * @summary Create an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createOriginalityReport: (assignmentId: string, submissionId: string, body: any) => Promise<any>;
    /**
     * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
     * @summary Edit an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {string} originalityReporId Canvas Originality repor ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editOriginalityReportSubmissions: (assignmentId: string, submissionId: string, originalityReporId: string, body: any) => Promise<any>;
    /**
     * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
     * @summary Edit an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} fileId Canvas File ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editOriginalityReportFiles: (assignmentId: string, fileId: string, body: any) => Promise<any>;
    /**
     * Get a single originality report
     * @summary Show an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {string} originalityReporId Canvas Originality repor ID
     * @returns {Promise<any>}
     */
    showOriginalityReportSubmissions: (assignmentId: string, submissionId: string, originalityReporId: string) => Promise<any>;
    /**
     * Get a single originality report
     * @summary Show an Originality Report
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} fileId Canvas File ID
     * @returns {Promise<any>}
     */
    showOriginalityReportFiles: (assignmentId: string, fileId: string) => Promise<any>;
};
export = _exports;
