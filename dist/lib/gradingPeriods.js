"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Returns the paginated list of grading periods for the current course.
         * @summary List grading periods
         * @param {string|number} accountId Canvas Account ID
         * @returns {Promise<any>}
         */
        listGradingPeriodsAccounts: (accountId) => helper.get(`/v1/accounts/${accountId}/grading_periods`),
        /**
         * Returns the paginated list of grading periods for the current course.
         * @summary List grading periods
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listGradingPeriodsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/grading_periods`),
        /**
         * Returns the grading period with the given id
         * @summary Get a single grading period
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} gradingPeriodId Canvas Grading period ID
         * @returns {Promise<any>}
         */
        getSingleGradingPeriod: (courseId, gradingPeriodId) => helper.get(`/v1/courses/${courseId}/grading_periods/${gradingPeriodId}`),
        /**
         * Update an existing grading period.
         * @summary Update a single grading period
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} gradingPeriodId Canvas Grading period ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateSingleGradingPeriod: (courseId, gradingPeriodId, body) => helper.put(`/v1/courses/${courseId}/grading_periods/${gradingPeriodId}`, body),
        /**
         * 204 No Content response code is returned if the deletion was successful.
         * @summary Delete a grading period
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} gradingPeriodId Canvas Grading period ID
         * @returns {Promise<any>}
         */
        deleteGradingPeriodCourses: (courseId, gradingPeriodId) => helper.delete(`/v1/courses/${courseId}/grading_periods/${gradingPeriodId}`),
        /**
         * 204 No Content response code is returned if the deletion was successful.
         * @summary Delete a grading period
         * @param {string|number} accountId Canvas Account ID
         * @param {string|number} gradingPeriodId Canvas Grading period ID
         * @returns {Promise<any>}
         */
        deleteGradingPeriodAccounts: (accountId, gradingPeriodId) => helper.delete(`/v1/accounts/${accountId}/grading_periods/${gradingPeriodId}`),
    };
}
exports.default = default_1;
