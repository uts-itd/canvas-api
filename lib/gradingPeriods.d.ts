export = gradingPeriods;
declare let gradingPeriods: {
    /**
     * Returns the paginated list of grading periods for the current course.
     * @summary List grading periods
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listGradingPeriodsAccounts: (accountId: string) => Promise<any>;
    /**
     * Returns the paginated list of grading periods for the current course.
     * @summary List grading periods
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listGradingPeriodsCourses: (courseId: string) => Promise<any>;
    /**
     * Returns the grading period with the given id
     * @summary Get a single grading period
     * @param {string} courseId Canvas Course ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @returns {Promise<any>}
     */
    getSingleGradingPeriod: (courseId: string, gradingPeriodId: string) => Promise<any>;
    /**
     * Update an existing grading period.
     * @summary Update a single grading period
     * @param {string} courseId Canvas Course ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSingleGradingPeriod: (courseId: string, gradingPeriodId: string, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a grading period
     * @param {string} courseId Canvas Course ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @returns {Promise<any>}
     */
    deleteGradingPeriodCourses: (courseId: string, gradingPeriodId: string) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a grading period
     * @param {string} accountId Canvas Account ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @returns {Promise<any>}
     */
    deleteGradingPeriodAccounts: (accountId: string, gradingPeriodId: string) => Promise<any>;
};
