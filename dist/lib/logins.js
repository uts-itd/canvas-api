var helper = require('../helper');
var logins = {
    /**
     * Given a user ID, return a paginated list of that user's logins for the given account.
     * @summary List user logins
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listUserLoginsAccounts: function (accountId) { return helper.get("/v1/accounts/" + accountId + "/logins"); },
    /**
     * Given a user ID, return a paginated list of that user's logins for the given account.
     * @summary List user logins
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listUserLoginsUsers: function (userId) { return helper.get("/v1/users/" + userId + "/logins"); },
    /**
     * Create a new login for an existing user in the given account.
     * @summary Create a user login
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createUserLogin: function (accountId, body) { return helper.post("/v1/accounts/" + accountId + "/logins", body); },
    /**
     * Update an existing login for a user in the given account.
     * @summary Edit a user login
     * @param {string} accountId Canvas Account ID
     * @param {string} loginId Canvas Login ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editUserLogin: function (accountId, loginId, body) { return helper.put("/v1/accounts/" + accountId + "/logins/" + loginId, body); },
    /**
     * Delete an existing login.
     * @summary Delete a user login
     * @param {string} userId Canvas User ID
     * @param {string} loginId Canvas Login ID
     * @returns {Promise<any>}
     */
    deleteUserLogin: function (userId, loginId) { return helper.delete("/v1/users/" + userId + "/logins/" + loginId); },
};
module.exports = logins;
//# sourceMappingURL=logins.js.map