const helper = require('../helper');
let pollChoices = {
    /**
     * Returns the paginated list of PollChoices in this poll.
     * @summary List poll choices in a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    listPollChoicesInPoll: (pollId) => helper.get(`/v1/polls/${pollId}/poll_choices`),
    /**
     * Returns the poll choice with the given id
     * @summary Get a single poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    getSinglePollChoice: (pollId, pollChoiceId) => helper.get(`/v1/polls/${pollId}/poll_choices/${pollChoiceId}`),
    /**
     * Create a new poll choice for this poll
     * @summary Create a single poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollChoice: (pollId, body) => helper.post(`/v1/polls/${pollId}/poll_choices`, body),
    /**
     * Update an existing poll choice for this poll
     * @summary Update a single poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollChoiceId Canvas Poll choice ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePollChoice: (pollId, pollChoiceId, body) => helper.put(`/v1/polls/${pollId}/poll_choices/${pollChoiceId}`, body),
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    deletePollChoice: (pollId, pollChoiceId) => helper.delete(`/v1/polls/${pollId}/poll_choices/${pollChoiceId}`),
};
module.exports = pollChoices;
