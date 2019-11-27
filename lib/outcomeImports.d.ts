export = outcomeImports;
declare let outcomeImports: {
    /**
     * Import outcomes into Canvas. For more information on the format that's expected here, please see the "Outcomes CSV" section in the API docs.
     * @summary Import Outcomes
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importOutcomesAccounts: (accountId: string, body: any) => Promise<any>;
    /**
     * Import outcomes into Canvas. For more information on the format that's expected here, please see the "Outcomes CSV" section in the API docs.
     * @summary Import Outcomes
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importOutcomesCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Get the status of an already created Outcome import. Pass 'latest' for the outcome import id for the latest import.  Examples:   curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"   curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"
     * @summary Get Outcome import status
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeImportId Canvas Outcome import ID
     * @returns {Promise<any>}
     */
    getOutcomeImportStatusAccounts: (accountId: string, outcomeImportId: string) => Promise<any>;
    /**
     * Get the status of an already created Outcome import. Pass 'latest' for the outcome import id for the latest import.  Examples:   curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"   curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \     -H "Authorization: Bearer <token>"
     * @summary Get Outcome import status
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeImportId Canvas Outcome import ID
     * @returns {Promise<any>}
     */
    getOutcomeImportStatusCourses: (courseId: string, outcomeImportId: string) => Promise<any>;
};
