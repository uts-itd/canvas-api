declare function _exports(helper: any): {
    /**
     * A paginated list of accounts that the current user can view or manage. Typically, students and even teachers will get an empty list in response, only account admins can view the accounts that they are in.
     * @summary List accounts
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAccounts: (query?: any) => Promise<any>;
    /**
     * A paginated list of accounts that the current user can view through their admin course enrollments. (Teacher, TA, or designer enrollments). Only returns "id", "name", "workflow_state", "root_account_id" and "parent_account_id"
     * @summary List accounts for course admins
     * @returns {Promise<any>}
     */
    listAccountsForCourseAdmins: () => Promise<any>;
    /**
     * Retrieve information on an individual account, given by id or sis sis_account_id.
     * @summary Get a single account
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    getSingleAccount: (accountId: string) => Promise<any>;
    /**
     * Returns permission information for the calling user and the given account. You may use `self` as the account id to check permissions against the domain root account. The caller must have an account role or admin (teacher/TA/designer) enrollment in a course in the account. See also {api:CoursesController#permissions the Course counterpart}.
     * @summary Permissions
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    permissions: (accountId: string, query?: any) => Promise<any>;
    /**
     * List accounts that are sub-accounts of the given account.
     * @summary Get the sub-accounts of an account
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSubAccountsOfAccount: (accountId: string, query?: any) => Promise<any>;
    /**
     *
     * @summary Returns the terms of service for that account
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    returnsTermsOfServiceForThatAccount: (accountId: string) => Promise<any>;
    /**
     * Retrieve a paginated list of courses in this account.
     * @summary List active courses in an account
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listActiveCoursesInAccount: (accountId: string, query?: any) => Promise<any>;
    /**
     * Update an existing account.
     * @summary Update an account
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateAccount: (accountId: string, body: any) => Promise<any>;
    /**
     * Delete a user record from a Canvas root account. If a user is associated with multiple root accounts (in a multi-tenant instance of Canvas), this action will NOT remove them from the other accounts. WARNING: This API will allow a user to remove themselves from the account. If they do this, they won't be able to make API calls or log into Canvas at that account.
     * @summary Delete a user from the root account
     * @param {string} accountId Canvas Account ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    deleteUserFromRootAccount: (accountId: string, userId: string) => Promise<any>;
    /**
     * Add a new sub-account to a given account.
     * @summary Create a new sub-account
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewSubAccount: (accountId: string, body: any) => Promise<any>;
    /**
     * Cannot delete an account with active courses or active sub_accounts. Cannot delete a root_account
     * @summary Delete a sub-account
     * @param {string} accountId Canvas Account ID
     * @param {string} subAccountId Canvas Sub account ID
     * @returns {Promise<any>}
     */
    deleteSubAccount: (accountId: string, subAccountId: string) => Promise<any>;
};
export = _exports;
