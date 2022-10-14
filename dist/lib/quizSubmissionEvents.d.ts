import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Store a set of events which were captured during a quiz taking session. On success, the response will be 204 No Content with an empty body.
     * @summary Submit captured events
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    submitCapturedEvents: (courseId: string | number, quizId: string | number, submissionId: string | number, body: any) => Promise<any>;
    /**
     * Retrieve the set of events captured during a specific submission attempt.
     * @summary Retrieve captured events
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveCapturedEvents: (courseId: string | number, quizId: string | number, submissionId: string | number, query?: any) => Promise<any>;
};
