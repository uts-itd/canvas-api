import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the poll submission with the given id
     * @summary Get a single poll submission
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @param {string|number} pollSubmissionId Canvas Poll submission ID
     * @returns {Promise<any>}
     */
    getSinglePollSubmission: (pollId: string | number, pollSessionId: string | number, pollSubmissionId: string | number) => Promise<any>;
    /**
     * Create a new poll submission for this poll session
     * @summary Create a single poll submission
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollSessionId Canvas Poll session ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollSubmission: (pollId: string | number, pollSessionId: string | number, body: any) => Promise<any>;
};
