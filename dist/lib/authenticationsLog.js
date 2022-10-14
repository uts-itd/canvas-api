"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * List authentication events for a given login.
         * @summary Query by login.
         * @param {string|number} loginId Canvas Login ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        queryByLogin: (loginId, query) => helper.get(`/v1/audit/authentication/logins/${loginId}`, query),
        /**
         * List authentication events for a given account.
         * @summary Query by account.
         * @param {string|number} accountId Canvas Account ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        queryByAccount: (accountId, query) => helper.get(`/v1/audit/authentication/accounts/${accountId}`, query),
        /**
         * List authentication events for a given user.
         * @summary Query by user.
         * @param {string|number} userId Canvas User ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        queryByUser: (userId, query) => helper.get(`/v1/audit/authentication/users/${userId}`, query),
    };
}
exports.default = default_1;
