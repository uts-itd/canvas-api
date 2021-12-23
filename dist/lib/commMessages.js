var helper = require('../helper');
var commMessages = {
    /**
     * Retrieve a paginated list of messages sent to a user.
     * @summary List of CommMessages for a user
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listOfCommmessagesForUser: function (query) { return helper.get("/v1/comm_messages", query); },
};
module.exports = commMessages;
