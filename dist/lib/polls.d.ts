declare function _exports(helper: any): {
    /**
     * Returns the paginated list of polls for the current user.
     * @summary List polls
     * @returns {Promise<any>}
     */
    listPolls: () => Promise<any>;
    /**
     * Returns the poll with the given id
     * @summary Get a single poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    getSinglePoll: (pollId: string) => Promise<any>;
    /**
     * Create a new poll for the current user
     * @summary Create a single poll
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePoll: (body: any) => Promise<any>;
    /**
     * Update an existing poll belonging to the current user
     * @summary Update a single poll
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePoll: (pollId: string, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    deletePoll: (pollId: string) => Promise<any>;
};
export = _exports;
