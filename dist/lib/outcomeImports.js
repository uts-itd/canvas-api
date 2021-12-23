var helper = require('../helper');
var outcomeImports = {
    /**
     * Import outcomes into Canvas. For more information on the format that's expected here, please see the "Outcomes CSV" section in the API docs.
     * @summary Import Outcomes
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importOutcomesAccounts: function (accountId, body) { return helper.post("/v1/accounts/" + accountId + "/outcome_imports", body); },
    /**
     * Import outcomes into Canvas. For more information on the format that's expected here, please see the "Outcomes CSV" section in the API docs.
     * @summary Import Outcomes
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importOutcomesCourses: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/outcome_imports", body); },
    /**
     * Get the status of an already created Outcome import. Pass 'latest' for the outcome import id for the latest import.  Examples:   curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"   curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"
     * @summary Get Outcome import status
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeImportId Canvas Outcome import ID
     * @returns {Promise<any>}
     */
    getOutcomeImportStatusAccounts: function (accountId, outcomeImportId) { return helper.get("/v1/accounts/" + accountId + "/outcome_imports/" + outcomeImportId); },
    /**
     * Get the status of an already created Outcome import. Pass 'latest' for the outcome import id for the latest import.  Examples:   curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"   curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"
     * @summary Get Outcome import status
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeImportId Canvas Outcome import ID
     * @returns {Promise<any>}
     */
    getOutcomeImportStatusCourses: function (courseId, outcomeImportId) { return helper.get("/v1/courses/" + courseId + "/outcome_imports/" + outcomeImportId); },
};
module.exports = outcomeImports;
