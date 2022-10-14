import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes based on the assignment overrides active for the current API user.
     * @summary Retrieve assignment-overridden dates for quizzes
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveAssignmentOverriddenDatesForQuizzes: (courseId: string | number, query?: any) => Promise<any>;
};
