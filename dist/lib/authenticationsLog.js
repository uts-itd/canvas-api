var helper = require('../helper');
var authenticationsLog = {
    /**
     * List authentication events for a given login.
     * @summary Query by login.
     * @param {string} loginId Canvas Login ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByLogin: function (loginId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/audit/authentication/logins/" + loginId, query);
    },
    /**
     * List authentication events for a given account.
     * @summary Query by account.
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByAccount: function (accountId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/audit/authentication/accounts/" + accountId, query);
    },
    /**
     * List authentication events for a given user.
     * @summary Query by user.
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByUser: function (userId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/audit/authentication/users/" + userId, query);
    },
};
module.exports = authenticationsLog;
