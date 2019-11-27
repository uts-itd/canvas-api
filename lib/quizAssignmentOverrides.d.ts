export = quizAssignmentOverrides;
declare let quizAssignmentOverrides: {
    /**
     * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes based on the assignment overrides active for the current API user.
     * @summary Retrieve assignment-overridden dates for quizzes
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveAssignmentOverriddenDatesForQuizzes: (courseId: string, query?: any) => Promise<any>;
};
