const helper = require('../helper');

let pollSessions = {
    /**
     * Returns the paginated list of PollSessions in this poll.
     * @summary List poll sessions for a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {void}
     */
    listPollSessionsForPoll: (pollId) => helper.get(`/v1/polls/${pollId}/poll_sessions`),
    /**
     * Returns the poll session with the given id
     * @summary Get the results for a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {void}
     */
    getResultsForSinglePollSession: (pollId, pollSessionId) => helper.get(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}`),
    /**
     * Create a new poll session for this poll
     * @summary Create a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    createSinglePollSession: (pollId, body) => helper.post(`/v1/polls/${pollId}/poll_sessions`, body),
    /**
     * Update an existing poll session for this poll
     * @summary Update a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    updateSinglePollSession: (pollId, pollSessionId, body) => helper.put(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}`, body),
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {void}
     */
    deletePollSession: (pollId, pollSessionId) => helper.delete(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}`),
    /**
     * 
     * @summary Open a poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {void}
     */
    openPollSession: (pollId, pollSessionId) => helper.get(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}/open`),
    /**
     * 
     * @summary Close an opened poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {void}
     */
    closeOpenedPollSession: (pollId, pollSessionId) => helper.get(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}/close`),
    /**
     * A paginated list of all opened poll sessions available to the current user.
     * @summary List opened poll sessions
     * @returns {void}
     */
    listOpenedPollSessions: () => helper.get(`/v1/poll_sessions/opened`),
    /**
     * A paginated list of all closed poll sessions available to the current user.
     * @summary List closed poll sessions
     * @returns {void}
     */
    listClosedPollSessions: () => helper.get(`/v1/poll_sessions/closed`),
}

module.exports = pollSessions;