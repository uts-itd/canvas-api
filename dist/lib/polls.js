"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Returns the paginated list of polls for the current user.
         * @summary List polls
         * @returns {Promise<any>}
         */
        listPolls: () => helper.get(`/v1/polls`),
        /**
         * Returns the poll with the given id
         * @summary Get a single poll
         * @param {string|number} pollId Canvas Poll ID
         * @returns {Promise<any>}
         */
        getSinglePoll: (pollId) => helper.get(`/v1/polls/${pollId}`),
        /**
         * Create a new poll for the current user
         * @summary Create a single poll
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createSinglePoll: (body) => helper.post(`/v1/polls`, body),
        /**
         * Update an existing poll belonging to the current user
         * @summary Update a single poll
         * @param {string|number} pollId Canvas Poll ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateSinglePoll: (pollId, body) => helper.put(`/v1/polls/${pollId}`, body),
        /**
         * 204 No Content response code is returned if the deletion was successful.
         * @summary Delete a poll
         * @param {string|number} pollId Canvas Poll ID
         * @returns {Promise<any>}
         */
        deletePoll: (pollId) => helper.delete(`/v1/polls/${pollId}`),
    };
}
exports.default = default_1;
