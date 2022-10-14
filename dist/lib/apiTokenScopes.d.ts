import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * A list of scopes that can be applied to developer keys and access tokens.
     * @summary List scopes
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listScopes: (accountId: string | number, query?: any) => Promise<any>;
};
