import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * List authentication events for a given login.
     * @summary Query by login.
     * @param {string|number} loginId Canvas Login ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByLogin: (loginId: string | number, query?: any) =>
      helper.get(`/v1/audit/authentication/logins/${loginId}`, query),
    /**
     * List authentication events for a given account.
     * @summary Query by account.
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByAccount: (accountId: string | number, query?: any) =>
      helper.get(`/v1/audit/authentication/accounts/${accountId}`, query),
    /**
     * List authentication events for a given user.
     * @summary Query by user.
     * @param {string|number} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByUser: (userId: string | number, query?: any) =>
      helper.get(`/v1/audit/authentication/users/${userId}`, query),
  };
}
