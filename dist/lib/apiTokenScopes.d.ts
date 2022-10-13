declare function _exports(helper: any): {
    /**
     * A list of scopes that can be applied to developer keys and access tokens.
     * @summary List scopes
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listScopes: (accountId: string, query?: any) => Promise<any>;
};
export = _exports;
