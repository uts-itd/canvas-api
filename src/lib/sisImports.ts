import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns the list of SIS imports for an account Example:  curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports \   -H 'Authorization: Bearer <token>'
     * @summary Get SIS import list
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSisImportList: (accountId: string | number, query?: any) =>
      helper.get(`/v1/accounts/${accountId}/sis_imports`, query),
    /**
     * Import SIS data into Canvas. Must be on a root account with SIS imports enabled. For more information on the format that's expected here, please see the "SIS CSV" section in the API docs.
     * @summary Import SIS data
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importSisData: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/sis_imports`, body),
    /**
     * Get the status of an already created SIS import.  Examples:   curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<sis_import_id> \     -H 'Authorization: Bearer <token>'
     * @summary Get SIS import status
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} sisImportId Canvas Sis import ID
     * @returns {Promise<any>}
     */
    getSisImportStatus: (accountId: string | number, sisImportId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/sis_imports/${sisImportId}`),
    /**
     * This will restore the the workflow_state for all the items that changed their workflow_state during the import being restored. This will restore states for items imported with the following importers: accounts.csv terms.csv courses.csv sections.csv group_categories.csv groups.csv users.csv admins.csv This also restores states for other items that changed during the import. An example would be if an enrollment was deleted from a sis import and the group_membership was also deleted as a result of the enrollment deletion, both items would be restored when the sis batch is restored.
     * @summary Restore workflow_states of SIS imported items
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} sisImportId Canvas Sis import ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    restoreWorkflowStatesOfSisImportedItems: (
      accountId: string | number,
      sisImportId: string | number,
      body: any,
    ) => helper.put(`/v1/accounts/${accountId}/sis_imports/${sisImportId}/restore_states`, body),
    /**
     * Abort a SIS import that has not completed.
     * @summary Abort SIS import
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} sisImportId Canvas Sis import ID
     * @returns {Promise<any>}
     */
    abortSisImport: (accountId: string | number, sisImportId: string | number) =>
      helper.put(`/v1/accounts/${accountId}/sis_imports/${sisImportId}/abort`),
    /**
     * Abort already created but not processed or processing SIS imports.
     * @summary Abort all pending SIS imports
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    abortAllPendingSisImports: (accountId: string | number) =>
      helper.put(`/v1/accounts/${accountId}/sis_imports/abort_all_pending`),
  };
}
