module.exports = (helper) => {
  return {
    /**
     * Returns the poll submission with the given id
     * @summary Get a single poll submission
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @param {string} pollSubmissionId Canvas Poll submission ID
     * @returns {Promise<any>}
     */
    getSinglePollSubmission: (pollId, pollSessionId, pollSubmissionId) =>
      helper.get(
        `/v1/polls/${pollId}/poll_sessions/${pollSessionId}/poll_submissions/${pollSubmissionId}`,
      ),
    /**
     * Create a new poll submission for this poll session
     * @summary Create a single poll submission
     * @param {string} pollId Canvas Poll ID
     * @param {string} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollSubmission: (pollId, pollSessionId, body) =>
      helper.post(
        `/v1/polls/${pollId}/poll_sessions/${pollSessionId}/poll_submissions`,
        body,
      ),
  };
};
