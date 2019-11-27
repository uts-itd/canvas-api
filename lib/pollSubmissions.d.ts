export = pollSubmissions;
declare let pollSubmissions: {
    /**
     * Returns the poll submission with the given id
     * @summary Get a single poll submission
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @param {string} pollSubmissionId Canvas Poll submission ID
     * @returns {Promise<any>}
     */
    getSinglePollSubmission: (pollId: string, pollSessionId: string, pollSubmissionId: string) => Promise<any>;
    /**
     * Create a new poll submission for this poll session
     * @summary Create a single poll submission
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollSubmission: (pollId: string, pollSessionId: string, body: any) => Promise<any>;
};
