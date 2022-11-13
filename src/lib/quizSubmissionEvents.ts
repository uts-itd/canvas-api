import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Store a set of events which were captured during a quiz taking session. On success, the response will be 204 No Content with an empty body.
     * @summary Submit captured events
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    submitCapturedEvents: (
      courseId: string | number,
      quizId: string | number,
      submissionId: string | number,
      body: any,
    ) =>
      helper.post(
        `/v1/courses/${courseId}/quizzes/${quizId}/submissions/${submissionId}/events`,
        body,
      ),
    /**
     * Retrieve the set of events captured during a specific submission attempt.
     * @summary Retrieve captured events
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveCapturedEvents: (
      courseId: string | number,
      quizId: string | number,
      submissionId: string | number,
      query?: any,
    ) =>
      helper.get(
        `/v1/courses/${courseId}/quizzes/${quizId}/submissions/${submissionId}/events`,
        query,
      ),
  };
}
