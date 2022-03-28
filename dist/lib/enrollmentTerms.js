const helper = require('../helper');
let enrollmentTerms = {
    /**
     * Create a new enrollment term for the specified account.
     * @summary Create enrollment term
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createEnrollmentTerm: (accountId, body) => helper.post(`/v1/accounts/${accountId}/terms`, body),
    /**
     * Update an existing enrollment term for the specified account.
     * @summary Update enrollment term
     * @param {string} accountId Canvas Account ID
     * @param {string} termId Canvas Term ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateEnrollmentTerm: (accountId, termId, body) => helper.put(`/v1/accounts/${accountId}/terms/${termId}`, body),
    /**
     * Delete the specified enrollment term.
     * @summary Delete enrollment term
     * @param {string} accountId Canvas Account ID
     * @param {string} termId Canvas Term ID
     * @returns {Promise<any>}
     */
    deleteEnrollmentTerm: (accountId, termId) => helper.delete(`/v1/accounts/${accountId}/terms/${termId}`),
    /**
     * A paginated list of all of the terms in the account.
     * @summary List enrollment terms
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentTerms: (accountId, query = '') => helper.get(`/v1/accounts/${accountId}/terms`, query, 'enrollment_terms'),
};
module.exports = enrollmentTerms;