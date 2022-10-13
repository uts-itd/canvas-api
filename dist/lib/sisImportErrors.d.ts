declare function _exports(helper: any): {
    /**
     * Returns the list of SIS import errors for an account or a SIS import. Import errors are only stored for 30 days. Example:  curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<id>/sis_import_errors' \   -H "Authorization: Bearer <token>" Example:  curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_import_errors' \   -H "Authorization: Bearer <token>"
     * @summary Get SIS import error list
     * @param {string} accountId Canvas Account ID
     * @param {string} sisImportId Canvas Sis import ID
     * @returns {Promise<any>}
     */
    getSisImportErrorListSisImports: (accountId: string, sisImportId: string) => Promise<any>;
    /**
     * Returns the list of SIS import errors for an account or a SIS import. Import errors are only stored for 30 days. Example:  curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<id>/sis_import_errors' \   -H "Authorization: Bearer <token>" Example:  curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_import_errors' \   -H "Authorization: Bearer <token>"
     * @summary Get SIS import error list
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    getSisImportErrorListSisImportErrors: (accountId: string) => Promise<any>;
};
export = _exports;
