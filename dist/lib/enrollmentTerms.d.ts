import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Create a new enrollment term for the specified account.
     * @summary Create enrollment term
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createEnrollmentTerm: (accountId: string | number, body: any) => Promise<any>;
    /**
     * Update an existing enrollment term for the specified account.
     * @summary Update enrollment term
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} termId Canvas Term ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateEnrollmentTerm: (accountId: string | number, termId: string | number, body: any) => Promise<any>;
    /**
     * Delete the specified enrollment term.
     * @summary Delete enrollment term
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} termId Canvas Term ID
     * @returns {Promise<any>}
     */
    deleteEnrollmentTerm: (accountId: string | number, termId: string | number) => Promise<any>;
    /**
     * A paginated list of all of the terms in the account.
     * @summary List enrollment terms
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentTerms: (accountId: string | number, query?: any) => Promise<any>;
};
