"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Returns a list of up to 5 matching account domains Partial match on name / domain are supported
         * @summary Search account domains
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        searchAccountDomains: (query) => helper.get(`/v1/accounts/search`, query),
    };
}
exports.default = default_1;
