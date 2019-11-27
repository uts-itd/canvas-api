export = rubrics;
declare let rubrics: {
    /**
     * Returns the paginated list of active rubrics for the current context.
     * @summary List rubrics
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listRubricsAccounts: (accountId: string) => Promise<any>;
    /**
     * Returns the paginated list of active rubrics for the current context.
     * @summary List rubrics
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listRubricsCourses: (courseId: string) => Promise<any>;
    /**
     * Returns the rubric with the given id.
     * @summary Get a single rubric
     * @param {string} accountId Canvas Account ID
     * @param {string} rubricId Canvas Rubric ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRubricAccounts: (accountId: string, rubricId: string, query?: any) => Promise<any>;
    /**
     * Returns the rubric with the given id.
     * @summary Get a single rubric
     * @param {string} courseId Canvas Course ID
     * @param {string} rubricId Canvas Rubric ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRubricCourses: (courseId: string, rubricId: string, query?: any) => Promise<any>;
};
