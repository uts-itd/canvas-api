export = jwTs;
declare let jwTs: {
    /**
     * Create a unique jwt for using with other canvas services Generates a different JWT each time it's called, each one expires after a short window (1 hour)
     * @summary Create JWT
     * @returns {Promise<any>}
     */
    createJwt: () => Promise<any>;
    /**
     * Refresh a JWT for use with other canvas services Generates a different JWT each time it's called, each one expires after a short window (1 hour).
     * @summary Refresh JWT
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    refreshJwt: (body: any) => Promise<any>;
};
