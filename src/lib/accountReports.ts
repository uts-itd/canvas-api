import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns a paginated list of reports for the current context.
     * @summary List Available Reports
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listAvailableReports: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/reports`),
    /**
     * Generates a report instance for the account. Note that "report" in the request must match one of the available report names. To fetch a list of available report names and parameters for each report (including whether or not those parameters are required), see {api:AccountReportsController#available_reports List Available Reports}.
     * @summary Start a Report
     * @param {string|number} accountId Canvas Account ID
     * @param {string} report Report type
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    startReport: (accountId: string | number, report: string, body: any) =>
      helper.post(`/v1/accounts/${accountId}/reports/${report}`, body),
    /**
     * Shows all reports that have been run for the account of a specific type.
     * @summary Index of Reports
     * @param {string|number} accountId Canvas Account ID
     * @param {string} report Report type
     * @returns {Promise<any>}
     */
    indexOfReports: (accountId: string | number, report: string) =>
      helper.get(`/v1/accounts/${accountId}/reports/${report}`),
    /**
     * Returns the status of a report.
     * @summary Status of a Report
     * @param {string|number} accountId Canvas Account ID
     * @param {string} report Report type
     * @param {string|number} reportId Canvas Report Report type
     * @returns {Promise<any>}
     */
    statusOfReport: (accountId: string | number, report: string, reportId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/reports/${report}/${reportId}`),
    /**
     * Deletes a generated report instance.
     * @summary Delete a Report
     * @param {string|number} accountId Canvas Account ID
     * @param {string} report Report type
     * @param {string|number} reportId Canvas Report Report type
     * @returns {Promise<any>}
     */
    deleteReport: (accountId: string | number, report: string, reportId: string | number) =>
      helper.delete(`/v1/accounts/${accountId}/reports/${report}/${reportId}`),
  };
}
