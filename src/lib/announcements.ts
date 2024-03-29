import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns the paginated list of announcements for the given courses and date range. Note that a +context_code+ field is added to the responses so you can tell which course each announcement belongs to.
     * @summary List announcements
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAnnouncements: (query?: any) => helper.get('/v1/announcements', query),
  };
}
