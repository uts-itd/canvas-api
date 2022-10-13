module.exports = (helper) => {
  return {
    /**
     * Retrieve a paginated list of messages sent to a user.
     * @summary List of CommMessages for a user
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listOfCommmessagesForUser: (query) =>
      helper.get(`/v1/comm_messages`, query),
  };
};
