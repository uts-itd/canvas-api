const helper = require('../helper');
let accounts = {
    /**
     * A paginated list of accounts that the current user can view or manage. Typically, students and even teachers will get an empty list in response, only account admins can view the accounts that they are in.
     * @summary List accounts
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAccounts: (query = '') => helper.get(`/v1/accounts`, query),
    /**
     * A paginated list of accounts that the current user can view through their admin course enrollments. (Teacher, TA, or designer enrollments). Only returns "id", "name", "workflow_state", "root_account_id" and "parent_account_id"
     * @summary List accounts for course admins
     * @returns {Promise<any>}
     */
    listAccountsForCourseAdmins: () => helper.get(`/v1/course_accounts`),
    /**
     * Retrieve information on an individual account, given by id or sis sis_account_id.
     * @summary Get a single account
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    getSingleAccount: (accountId) => helper.get(`/v1/accounts/${accountId}`),
    /**
     * Returns permission information for the calling user and the given account. You may use `self` as the account id to check permissions against the domain root account. The caller must have an account role or admin (teacher/TA/designer) enrollment in a course in the account. See also {api:CoursesController#permissions the Course counterpart}.
     * @summary Permissions
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    permissions: (accountId, query = '') => helper.get(`/v1/accounts/${accountId}/permissions`, query),
    /**
     * List accounts that are sub-accounts of the given account.
     * @summary Get the sub-accounts of an account
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSubAccountsOfAccount: (accountId, query = '') => helper.get(`/v1/accounts/${accountId}/sub_accounts`, query),
    /**
     *
     * @summary Returns the terms of service for that account
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    returnsTermsOfServiceForThatAccount: (accountId) => helper.get(`/v1/accounts/${accountId}/terms_of_service`),
    /**
     * Retrieve a paginated list of courses in this account.
     * @summary List active courses in an account
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listActiveCoursesInAccount: (accountId, query = '') => helper.get(`/v1/accounts/${accountId}/courses`, query),
    /**
     * Update an existing account.
     * @summary Update an account
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateAccount: (accountId, body) => helper.put(`/v1/accounts/${accountId}`, body),
    /**
     * Delete a user record from a Canvas root account. If a user is associated with multiple root accounts (in a multi-tenant instance of Canvas), this action will NOT remove them from the other accounts. WARNING: This API will allow a user to remove themselves from the account. If they do this, they won't be able to make API calls or log into Canvas at that account.
     * @summary Delete a user from the root account
     * @param {string} accountId Canvas Account ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    deleteUserFromRootAccount: (accountId, userId) => helper.delete(`/v1/accounts/${accountId}/users/${userId}`),
    /**
     * Add a new sub-account to a given account.
     * @summary Create a new sub-account
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewSubAccount: (accountId, body) => helper.post(`/v1/accounts/${accountId}/sub_accounts`, body),
    /**
     * Cannot delete an account with active courses or active sub_accounts. Cannot delete a root_account
     * @summary Delete a sub-account
     * @param {string} accountId Canvas Account ID
     * @param {string} subAccountId Canvas Sub account ID
     * @returns {Promise<any>}
     */
    deleteSubAccount: (accountId, subAccountId) => helper.delete(`/v1/accounts/${accountId}/sub_accounts/${subAccountId}`),
};
module.exports = accounts;
