declare function _exports(helper: any): {
    /**
     * List authentication events for a given login.
     * @summary Query by login.
     * @param {string} loginId Canvas Login ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByLogin: (loginId: string, query?: any) => Promise<any>;
    /**
     * List authentication events for a given account.
     * @summary Query by account.
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByAccount: (accountId: string, query?: any) => Promise<any>;
    /**
     * List authentication events for a given user.
     * @summary Query by user.
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByUser: (userId: string, query?: any) => Promise<any>;
};
export = _exports;
