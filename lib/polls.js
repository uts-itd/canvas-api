const helper = require('../helper');

let polls = {
    /**
     * Returns the paginated list of polls for the current user.
     * @summary List polls
     * @returns {void}
     */
    listPolls: () => helper.get(`/v1/polls`),
    /**
     * Returns the poll with the given id
     * @summary Get a single poll
     * @param {string} pollId Canvas Poll ID
     * @returns {void}
     */
    getSinglePoll: (pollId) => helper.get(`/v1/polls/${pollId}`),
    /**
     * Create a new poll for the current user
     * @summary Create a single poll
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    createSinglePoll: (body) => helper.post(`/v1/polls`, body),
    /**
     * Update an existing poll belonging to the current user
     * @summary Update a single poll
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    updateSinglePoll: (pollId, body) => helper.put(`/v1/polls/${pollId}`, body),
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {void}
     */
    deletePoll: (pollId) => helper.delete(`/v1/polls/${pollId}`),
}

module.exports = polls;