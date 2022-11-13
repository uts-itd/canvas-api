import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Retrieve a paginated list of messages sent to a user.
     * @summary List of CommMessages for a user
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listOfCommmessagesForUser: (query?: any) => helper.get('/v1/comm_messages', query),
  };
}
