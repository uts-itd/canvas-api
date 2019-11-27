export = pollSessions;
declare let pollSessions: {
    /**
     * Returns the paginated list of PollSessions in this poll.
     * @summary List poll sessions for a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    listPollSessionsForPoll: (pollId: string) => Promise<any>;
    /**
     * Returns the poll session with the given id
     * @summary Get the results for a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    getResultsForSinglePollSession: (pollId: string, pollSessionId: string) => Promise<any>;
    /**
     * Create a new poll session for this poll
     * @summary Create a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollSession: (pollId: string, body: any) => Promise<any>;
    /**
     * Update an existing poll session for this poll
     * @summary Update a single poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePollSession: (pollId: string, pollSessionId: string, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    deletePollSession: (pollId: string, pollSessionId: string) => Promise<any>;
    /**
     *
     * @summary Open a poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    openPollSession: (pollId: string, pollSessionId: string) => Promise<any>;
    /**
     *
     * @summary Close an opened poll session
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    closeOpenedPollSession: (pollId: string, pollSessionId: string) => Promise<any>;
    /**
     * A paginated list of all opened poll sessions available to the current user.
     * @summary List opened poll sessions
     * @returns {Promise<any>}
     */
    listOpenedPollSessions: () => Promise<any>;
    /**
     * A paginated list of all closed poll sessions available to the current user.
     * @summary List closed poll sessions
     * @returns {Promise<any>}
     */
    listClosedPollSessions: () => Promise<any>;
};
