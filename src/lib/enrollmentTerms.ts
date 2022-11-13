import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Create a new enrollment term for the specified account.
     * @summary Create enrollment term
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createEnrollmentTerm: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/terms`, body),
    /**
     * Update an existing enrollment term for the specified account.
     * @summary Update enrollment term
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} termId Canvas Term ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateEnrollmentTerm: (accountId: string | number, termId: string | number, body: any) =>
      helper.put(`/v1/accounts/${accountId}/terms/${termId}`, body),
    /**
     * Delete the specified enrollment term.
     * @summary Delete enrollment term
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} termId Canvas Term ID
     * @returns {Promise<any>}
     */
    deleteEnrollmentTerm: (accountId: string | number, termId: string | number) =>
      helper.delete(`/v1/accounts/${accountId}/terms/${termId}`),
    /**
     * A paginated list of all of the terms in the account.
     * @summary List enrollment terms
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentTerms: (accountId: string | number, query?: any) =>
      helper.get(`/v1/accounts/${accountId}/terms`, query, 'enrollment_terms'),
  };
}
