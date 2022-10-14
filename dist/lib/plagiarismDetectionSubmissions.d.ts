import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Get a single submission, based on submission id.
     * @summary Get a single submission
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @returns {Promise<any>}
     */
    getSingleSubmission: (assignmentId: string | number, submissionId: string | number) => Promise<any>;
    /**
     * Get a list of all attempts made for a submission, based on submission id.
     * @summary Get the history of a single submission
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @returns {Promise<any>}
     */
    getHistoryOfSingleSubmission: (assignmentId: string | number, submissionId: string | number) => Promise<any>;
};
