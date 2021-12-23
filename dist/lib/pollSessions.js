var helper = require('../helper');
var pollSessions = {
    /**
     * Returns the paginated list of PollSessions in this poll.
     * @summary List poll sessions for a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    listPollSessionsForPoll: function (pollId) { return helper.get("/v1/polls/" + pollId + "/poll_sessions"); },
    /**
     * Returns the poll session with the given id
     * @summary Get the results for a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    getResultsForSinglePollSession: function (pollId, pollSessionId) { return helper.get("/v1/polls/" + pollId + "/poll_sessions/" + pollSessionId); },
    /**
     * Create a new poll session for this poll
     * @summary Create a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollSession: function (pollId, body) { return helper.post("/v1/polls/" + pollId + "/poll_sessions", body); },
    /**
     * Update an existing poll session for this poll
     * @summary Update a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePollSession: function (pollId, pollSessionId, body) { return helper.put("/v1/polls/" + pollId + "/poll_sessions/" + pollSessionId, body); },
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    deletePollSession: function (pollId, pollSessionId) { return helper.delete("/v1/polls/" + pollId + "/poll_sessions/" + pollSessionId); },
    /**
     *
     * @summary Open a poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    openPollSession: function (pollId, pollSessionId) { return helper.get("/v1/polls/" + pollId + "/poll_sessions/" + pollSessionId + "/open"); },
    /**
     *
     * @summary Close an opened poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    closeOpenedPollSession: function (pollId, pollSessionId) { return helper.get("/v1/polls/" + pollId + "/poll_sessions/" + pollSessionId + "/close"); },
    /**
     * A paginated list of all opened poll sessions available to the current user.
     * @summary List opened poll sessions
     * @returns {Promise<any>}
     */
    listOpenedPollSessions: function () { return helper.get("/v1/poll_sessions/opened"); },
    /**
     * A paginated list of all closed poll sessions available to the current user.
     * @summary List closed poll sessions
     * @returns {Promise<any>}
     */
    listClosedPollSessions: function () { return helper.get("/v1/poll_sessions/closed"); },
};
module.exports = pollSessions;
//# sourceMappingURL=pollSessions.js.map