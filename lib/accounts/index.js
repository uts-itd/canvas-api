const helper = require('../helper');
const analytics = require('./analytics');

let account = {
    /**
     * Search account domains.
     * 
     * @param {Object} searchTerms Search options 'name', 'domain', 'latitude', 'longitude'
     */
    search: (searchTerms) => helper.get(`accounts/search`, searchTerms),
    /**
     * List active courses in an account.
     * 
     * @param {number} account Account Canvas ID.
     * @param {Object} params Optional object of params.
     * 
     * https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api
     */
    courses: (account, params=null) => helper.get(`accounts/${account}/courses`, params),
    /**
     * List scopes.
     * 
     * @param {number} account Account Canvas ID.
     * 
     * https://canvas.instructure.com/doc/api/api_token_scopes.html#method.scopes_api.index
     */
    scopes: (account) => helper.get(`accounts/${account}/scopes`),
    analytics,
}

module.exports = account;