import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns the paginated list of PollChoices in this poll.
     * @summary List poll choices in a poll
     * @param {string|number} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    listPollChoicesInPoll: (pollId: string | number) =>
      helper.get(`/v1/polls/${pollId}/poll_choices`),
    /**
     * Returns the poll choice with the given id
     * @summary Get a single poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    getSinglePollChoice: (pollId: string | number, pollChoiceId: string | number) =>
      helper.get(`/v1/polls/${pollId}/poll_choices/${pollChoiceId}`),
    /**
     * Create a new poll choice for this poll
     * @summary Create a single poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollChoice: (pollId: string | number, body: any) =>
      helper.post(`/v1/polls/${pollId}/poll_choices`, body),
    /**
     * Update an existing poll choice for this poll
     * @summary Update a single poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollChoiceId Canvas Poll choice ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePollChoice: (pollId: string | number, pollChoiceId: string | number, body: any) =>
      helper.put(`/v1/polls/${pollId}/poll_choices/${pollChoiceId}`, body),
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    deletePollChoice: (pollId: string | number, pollChoiceId: string | number) =>
      helper.delete(`/v1/polls/${pollId}/poll_choices/${pollChoiceId}`),
  };
}
