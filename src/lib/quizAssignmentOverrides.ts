import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes based on the assignment overrides active for the current API user.
     * @summary Retrieve assignment-overridden dates for quizzes
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveAssignmentOverriddenDatesForQuizzes: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/quizzes/assignment_overrides`, query),
  };
}
