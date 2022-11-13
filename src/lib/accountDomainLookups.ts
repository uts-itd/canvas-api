import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns a list of up to 5 matching account domains Partial match on name / domain are supported
     * @summary Search account domains
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    searchAccountDomains: (query?: any) => helper.get('/v1/accounts/search', query),
  };
}
