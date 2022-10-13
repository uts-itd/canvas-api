declare function _exports(helper: any): {
    /**
     * Returns a paginated list of reports for the current context.
     * @summary List Available Reports
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listAvailableReports: (accountId: string) => Promise<any>;
    /**
     * Generates a report instance for the account. Note that "report" in the request must match one of the available report names. To fetch a list of available report names and parameters for each report (including whether or not those parameters are required), see {api:AccountReportsController#available_reports List Available Reports}.
     * @summary Start a Report
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    startReport: (accountId: string, report: string, body: any) => Promise<any>;
    /**
     * Shows all reports that have been run for the account of a specific type.
     * @summary Index of Reports
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @returns {Promise<any>}
     */
    indexOfReports: (accountId: string, report: string) => Promise<any>;
    /**
     * Returns the status of a report.
     * @summary Status of a Report
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @param {string} reportId Canvas Report ID
     * @returns {Promise<any>}
     */
    statusOfReport: (accountId: string, report: string, reportId: string) => Promise<any>;
    /**
     * Deletes a generated report instance.
     * @summary Delete a Report
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @param {string} reportId Canvas Report ID
     * @returns {Promise<any>}
     */
    deleteReport: (accountId: string, report: string, reportId: string) => Promise<any>;
};
export = _exports;
