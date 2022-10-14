import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Flag an existing user as an admin within the account.
     * @summary Make an account admin
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    makeAccountAdmin: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/admins`, body),
    /**
     * Remove the rights associated with an account admin role from a user.
     * @summary Remove account admin
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeAccountAdmin: (accountId: string | number, userId: string | number, query?: any) =>
      helper.delete(`/v1/accounts/${accountId}/admins/${userId}`, query),
    /**
     * A paginated list of the admins in the account
     * @summary List account admins
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAccountAdmins: (accountId: string | number, query?: any) =>
      helper.get(`/v1/accounts/${accountId}/admins`, query),
  };
}
