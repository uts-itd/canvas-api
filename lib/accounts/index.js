const helper = require('../helper');
const analytics = require('./analytics');

let account = {
    /**
     * Search account domains.
     * 
     * @param {Object} searchTerms Search options 'name', 'domain', 'latitude', 'longitude'
     */
    search: (searchTerms) => helper.get(`accounts/search`, searchTerms),
    courses: (account, params=null) => helper.get(`accounts/${account}/courses`, params),
    analytics,
}

module.exports = account;