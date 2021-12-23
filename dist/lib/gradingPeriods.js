var helper = require('../helper');
var gradingPeriods = {
    /**
     * Returns the paginated list of grading periods for the current course.
     * @summary List grading periods
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listGradingPeriodsAccounts: function (accountId) { return helper.get("/v1/accounts/" + accountId + "/grading_periods"); },
    /**
     * Returns the paginated list of grading periods for the current course.
     * @summary List grading periods
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listGradingPeriodsCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/grading_periods"); },
    /**
     * Returns the grading period with the given id
     * @summary Get a single grading period
     * @param {string} courseId Canvas Course ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @returns {Promise<any>}
     */
    getSingleGradingPeriod: function (courseId, gradingPeriodId) { return helper.get("/v1/courses/" + courseId + "/grading_periods/" + gradingPeriodId); },
    /**
     * Update an existing grading period.
     * @summary Update a single grading period
     * @param {string} courseId Canvas Course ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSingleGradingPeriod: function (courseId, gradingPeriodId, body) { return helper.put("/v1/courses/" + courseId + "/grading_periods/" + gradingPeriodId, body); },
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a grading period
     * @param {string} courseId Canvas Course ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @returns {Promise<any>}
     */
    deleteGradingPeriodCourses: function (courseId, gradingPeriodId) { return helper.delete("/v1/courses/" + courseId + "/grading_periods/" + gradingPeriodId); },
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a grading period
     * @param {string} accountId Canvas Account ID
     * @param {string} gradingPeriodId Canvas Grading period ID
     * @returns {Promise<any>}
     */
    deleteGradingPeriodAccounts: function (accountId, gradingPeriodId) { return helper.delete("/v1/accounts/" + accountId + "/grading_periods/" + gradingPeriodId); },
};
module.exports = gradingPeriods;
