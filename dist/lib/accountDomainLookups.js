var helper = require('../helper');
var accountDomainLookups = {
    /**
     * Returns a list of up to 5 matching account domains Partial match on name / domain are supported
     * @summary Search account domains
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    searchAccountDomains: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/accounts/search", query);
    },
};
module.exports = accountDomainLookups;
