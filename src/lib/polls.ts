import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns the paginated list of polls for the current user.
     * @summary List polls
     * @returns {Promise<any>}
     */
    listPolls: () => helper.get('/v1/polls'),
    /**
     * Returns the poll with the given id
     * @summary Get a single poll
     * @param {string|number} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    getSinglePoll: (pollId: string | number) => helper.get(`/v1/polls/${pollId}`),
    /**
     * Create a new poll for the current user
     * @summary Create a single poll
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePoll: (body: any) => helper.post('/v1/polls', body),
    /**
     * Update an existing poll belonging to the current user
     * @summary Update a single poll
     * @param {string|number} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePoll: (pollId: string | number, body: any) =>
      helper.put(`/v1/polls/${pollId}`, body),
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll
     * @param {string|number} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    deletePoll: (pollId: string | number) => helper.delete(`/v1/polls/${pollId}`),
  };
}
