declare function _exports(helper: any): {
    /**
     * Returns the paginated list of PollChoices in this poll.
     * @summary List poll choices in a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    listPollChoicesInPoll: (pollId: string) => Promise<any>;
    /**
     * Returns the poll choice with the given id
     * @summary Get a single poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    getSinglePollChoice: (pollId: string, pollChoiceId: string) => Promise<any>;
    /**
     * Create a new poll choice for this poll
     * @summary Create a single poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollChoice: (pollId: string, body: any) => Promise<any>;
    /**
     * Update an existing poll choice for this poll
     * @summary Update a single poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollChoiceId Canvas Poll choice ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePollChoice: (pollId: string, pollChoiceId: string, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll choice
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    deletePollChoice: (pollId: string, pollChoiceId: string) => Promise<any>;
};
export = _exports;
