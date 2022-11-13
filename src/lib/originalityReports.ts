import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Create a new OriginalityReport for the specified file
     * @summary Create an Originality Report
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createOriginalityReport: (
      assignmentId: string | number,
      submissionId: string | number,
      body: any,
    ) =>
      helper.post(
        `/lti/assignments/${assignmentId}/submissions/${submissionId}/originality_report`,
        body,
      ),
    /**
     * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
     * @summary Edit an Originality Report
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {string|number} originalityReporId Canvas Originality repor ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editOriginalityReportSubmissions: (
      assignmentId: string | number,
      submissionId: string | number,
      originalityReporId: string | number,
      body: any,
    ) =>
      helper.put(
        `/lti/assignments/${assignmentId}/submissions/${submissionId}/originality_report/${originalityReporId}`,
        body,
      ),
    /**
     * Modify an existing originality report. An alternative to this endpoint is to POST the same parameters listed below to the CREATE endpoint.
     * @summary Edit an Originality Report
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} fileId Canvas File ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editOriginalityReportFiles: (
      assignmentId: string | number,
      fileId: string | number,
      body: any,
    ) => helper.put(`/lti/assignments/${assignmentId}/files/${fileId}/originality_report`, body),
    /**
     * Get a single originality report
     * @summary Show an Originality Report
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {string|number} originalityReporId Canvas Originality repor ID
     * @returns {Promise<any>}
     */
    showOriginalityReportSubmissions: (
      assignmentId: string | number,
      submissionId: string | number,
      originalityReporId: string | number,
    ) =>
      helper.get(
        `/lti/assignments/${assignmentId}/submissions/${submissionId}/originality_report/${originalityReporId}`,
      ),
    /**
     * Get a single originality report
     * @summary Show an Originality Report
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} fileId Canvas File ID
     * @returns {Promise<any>}
     */
    showOriginalityReportFiles: (assignmentId: string | number, fileId: string | number) =>
      helper.get(`/lti/assignments/${assignmentId}/files/${fileId}/originality_report`),
  };
}
