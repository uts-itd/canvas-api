var helper = require('../helper');
var polls = {
    /**
     * Returns the paginated list of polls for the current user.
     * @summary List polls
     * @returns {Promise<any>}
     */
    listPolls: function () { return helper.get("/v1/polls"); },
    /**
     * Returns the poll with the given id
     * @summary Get a single poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    getSinglePoll: function (pollId) { return helper.get("/v1/polls/" + pollId); },
    /**
     * Create a new poll for the current user
     * @summary Create a single poll
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePoll: function (body) { return helper.post("/v1/polls", body); },
    /**
     * Update an existing poll belonging to the current user
     * @summary Update a single poll
     * @param {string} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePoll: function (pollId, body) { return helper.put("/v1/polls/" + pollId, body); },
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll
     * @param {string} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    deletePoll: function (pollId) { return helper.delete("/v1/polls/" + pollId); },
};
module.exports = polls;
//# sourceMappingURL=polls.js.map