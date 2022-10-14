import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the paginated list of PollSessions in this poll.
     * @summary List poll sessions for a poll
     * @param {string|number} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    listPollSessionsForPoll: (pollId: string | number) => Promise<any>;
    /**
     * Returns the poll session with the given id
     * @summary Get the results for a single poll session
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    getResultsForSinglePollSession: (pollId: string | number, pollSessionId: string | number) => Promise<any>;
    /**
     * Create a new poll session for this poll
     * @summary Create a single poll session
     * @param {string|number} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollSession: (pollId: string | number, body: any) => Promise<any>;
    /**
     * Update an existing poll session for this poll
     * @summary Update a single poll session
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePollSession: (pollId: string | number, pollSessionId: string | number, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll session
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    deletePollSession: (pollId: string | number, pollSessionId: string | number) => Promise<any>;
    /**
     *
     * @summary Open a poll session
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    openPollSession: (pollId: string | number, pollSessionId: string | number) => Promise<any>;
    /**
     *
     * @summary Close an opened poll session
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @returns {Promise<any>}
     */
    closeOpenedPollSession: (pollId: string | number, pollSessionId: string | number) => Promise<any>;
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
