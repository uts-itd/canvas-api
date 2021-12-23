var helper = require('../helper');
var accountReports = {
    /**
     * Returns a paginated list of reports for the current context.
     * @summary List Available Reports
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listAvailableReports: function (accountId) { return helper.get("/v1/accounts/" + accountId + "/reports"); },
    /**
     * Generates a report instance for the account. Note that "report" in the request must match one of the available report names. To fetch a list of available report names and parameters for each report (including whether or not those parameters are required), see {api:AccountReportsController#available_reports List Available Reports}.
     * @summary Start a Report
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    startReport: function (accountId, report, body) { return helper.post("/v1/accounts/" + accountId + "/reports/" + report, body); },
    /**
     * Shows all reports that have been run for the account of a specific type.
     * @summary Index of Reports
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @returns {Promise<any>}
     */
    indexOfReports: function (accountId, report) { return helper.get("/v1/accounts/" + accountId + "/reports/" + report); },
    /**
     * Returns the status of a report.
     * @summary Status of a Report
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @param {string} reportId Canvas Report ID
     * @returns {Promise<any>}
     */
    statusOfReport: function (accountId, report, reportId) { return helper.get("/v1/accounts/" + accountId + "/reports/" + report + "/" + reportId); },
    /**
     * Deletes a generated report instance.
     * @summary Delete a Report
     * @param {string} accountId Canvas Account ID
     * @param {string} report ID
     * @param {string} reportId Canvas Report ID
     * @returns {Promise<any>}
     */
    deleteReport: function (accountId, report, reportId) { return helper.delete("/v1/accounts/" + accountId + "/reports/" + report + "/" + reportId); },
};
module.exports = accountReports;
