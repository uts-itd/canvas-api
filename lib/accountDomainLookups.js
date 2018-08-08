const helper = require('../helper');

let accountDomainLookups = {
    /**
     * Returns a list of up to 5 matching account domains Partial match on name / domain are supported
     * @summary Search account domains
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    searchAccountDomains: (query='') => helper.get(`/v1/accounts/search`, query),
}

module.exports = accountDomainLookups;