import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Given a user ID, return a paginated list of that user's logins for the given account.
     * @summary List user logins
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listUserLoginsAccounts: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/logins`),
    /**
     * Given a user ID, return a paginated list of that user's logins for the given account.
     * @summary List user logins
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listUserLoginsUsers: (userId: string | number) => helper.get(`/v1/users/${userId}/logins`),
    /**
     * Create a new login for an existing user in the given account.
     * @summary Create a user login
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createUserLogin: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/logins`, body),
    /**
     * Update an existing login for a user in the given account.
     * @summary Edit a user login
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} loginId Canvas Login ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editUserLogin: (accountId: string | number, loginId: string | number, body: any) =>
      helper.put(`/v1/accounts/${accountId}/logins/${loginId}`, body),
    /**
     * Delete an existing login.
     * @summary Delete a user login
     * @param {string|number} userId Canvas User ID
     * @param {string|number} loginId Canvas Login ID
     * @returns {Promise<any>}
     */
    deleteUserLogin: (userId: string | number, loginId: string | number) =>
      helper.delete(`/v1/users/${userId}/logins/${loginId}`),
  };
}
