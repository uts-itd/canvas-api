var helper = require('../helper');
var apiTokenScopes = {
    /**
     * A list of scopes that can be applied to developer keys and access tokens.
     * @summary List scopes
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listScopes: function (accountId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/accounts/" + accountId + "/scopes", query);
    },
};
module.exports = apiTokenScopes;
//# sourceMappingURL=apiTokenScopes.js.map