export = enrollmentTerms;
declare let enrollmentTerms: {
    /**
     * Create a new enrollment term for the specified account.
     * @summary Create enrollment term
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createEnrollmentTerm: (accountId: string, body: any) => Promise<any>;
    /**
     * Update an existing enrollment term for the specified account.
     * @summary Update enrollment term
     * @param {string} accountId Canvas Account ID
     * @param {string} termId Canvas Term ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateEnrollmentTerm: (accountId: string, termId: string, body: any) => Promise<any>;
    /**
     * Delete the specified enrollment term.
     * @summary Delete enrollment term
     * @param {string} accountId Canvas Account ID
     * @param {string} termId Canvas Term ID
     * @returns {Promise<any>}
     */
    deleteEnrollmentTerm: (accountId: string, termId: string) => Promise<any>;
    /**
     * A paginated list of all of the terms in the account.
     * @summary List enrollment terms
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentTerms: (accountId: string, query?: any) => Promise<any>;
};
