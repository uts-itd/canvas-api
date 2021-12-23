var helper = require('../helper');
var admins = {
    /**
     * Flag an existing user as an admin within the account.
     * @summary Make an account admin
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    makeAccountAdmin: function (accountId, body) { return helper.post("/v1/accounts/" + accountId + "/admins", body); },
    /**
     * Remove the rights associated with an account admin role from a user.
     * @summary Remove account admin
     * @param {string} accountId Canvas Account ID
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeAccountAdmin: function (accountId, userId, query) {
        if (query === void 0) { query = ''; }
        return helper.delete("/v1/accounts/" + accountId + "/admins/" + userId, query);
    },
    /**
     * A paginated list of the admins in the account
     * @summary List account admins
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAccountAdmins: function (accountId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/accounts/" + accountId + "/admins", query);
    },
};
module.exports = admins;
