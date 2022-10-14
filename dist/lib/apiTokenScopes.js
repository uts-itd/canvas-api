"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * A list of scopes that can be applied to developer keys and access tokens.
         * @summary List scopes
         * @param {string|number} accountId Canvas Account ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listScopes: (accountId, query) => helper.get(`/v1/accounts/${accountId}/scopes`, query),
    };
}
exports.default = default_1;
