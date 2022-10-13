module.exports = (helper) => {
    return {
        /**
         * A list of scopes that can be applied to developer keys and access tokens.
         * @summary List scopes
         * @param {string} accountId Canvas Account ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listScopes: (accountId, query = '') => helper.get(`/v1/accounts/${accountId}/scopes`, query),
    };
};
