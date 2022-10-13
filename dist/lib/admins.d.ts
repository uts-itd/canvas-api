declare function _exports(helper: any): {
    /**
     * Flag an existing user as an admin within the account.
     * @summary Make an account admin
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    makeAccountAdmin: (accountId: string, body: any) => Promise<any>;
    /**
     * Remove the rights associated with an account admin role from a user.
     * @summary Remove account admin
     * @param {string} accountId Canvas Account ID
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeAccountAdmin: (accountId: string, userId: string, query?: any) => Promise<any>;
    /**
     * A paginated list of the admins in the account
     * @summary List account admins
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAccountAdmins: (accountId: string, query?: any) => Promise<any>;
};
export = _exports;
