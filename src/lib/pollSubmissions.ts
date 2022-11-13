import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns the poll submission with the given id
     * @summary Get a single poll submission
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @param {string|number} pollSubmissionId Canvas Poll submission ID
     * @returns {Promise<any>}
     */
    getSinglePollSubmission: (
      pollId: string | number,
      pollSessionId: string | number,
      pollSubmissionId: string | number,
    ) =>
      helper.get(
        `/v1/polls/${pollId}/poll_sessions/${pollSessionId}/poll_submissions/${pollSubmissionId}`,
      ),
    /**
     * Create a new poll submission for this poll session
     * @summary Create a single poll submission
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollSubmission: (
      pollId: string | number,
      pollSessionId: string | number,
      body: any,
    ) => helper.post(`/v1/polls/${pollId}/poll_sessions/${pollSessionId}/poll_submissions`, body),
  };
}
