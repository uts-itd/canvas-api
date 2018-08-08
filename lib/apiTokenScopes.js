const helper = require('../helper');

let apiTokenScopes = {
    /**
     * A list of scopes that can be applied to developer keys and access tokens.
     * @summary List scopes
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listScopes: (accountId, query='') => helper.get(`/v1/accounts/${accountId}/scopes`, query),
}

module.exports = apiTokenScopes;