const helper = require('../helper');

let gradingStandards = {
    /**
     * Create a new grading standard If grading_scheme_entry arguments are omitted, then a default grading scheme will be set. The default scheme is as follows:   "A" : 94,   "A-" : 90,   "B+" : 87,   "B" : 84,   "B-" : 80,   "C+" : 77,   "C" : 74,   "C-" : 70,   "D+" : 67,   "D" : 64,   "D-" : 61,   "F" : 0,
     * @summary Create a new grading standard
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {GradingStandard}
     */
    createNewGradingStandardAccounts: (accountId, body) => helper.post(`/v1/accounts/${accountId}/grading_standards`, body),
    /**
     * Create a new grading standard If grading_scheme_entry arguments are omitted, then a default grading scheme will be set. The default scheme is as follows:   "A" : 94,   "A-" : 90,   "B+" : 87,   "B" : 84,   "B-" : 80,   "C+" : 77,   "C" : 74,   "C-" : 70,   "D+" : 67,   "D" : 64,   "D-" : 61,   "F" : 0,
     * @summary Create a new grading standard
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {GradingStandard}
     */
    createNewGradingStandardCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/grading_standards`, body),
    /**
     * Returns the paginated list of grading standards for the given context that are visible to the user.
     * @summary List the grading standards available in a context.
     * @param {string} courseId Canvas Course ID
     * @returns {array}
     */
    listGradingStandardsAvailableInContextCourses: (courseId) => helper.get(`/v1/courses/${courseId}/grading_standards`),
    /**
     * Returns the paginated list of grading standards for the given context that are visible to the user.
     * @summary List the grading standards available in a context.
     * @param {string} accountId Canvas Account ID
     * @returns {array}
     */
    listGradingStandardsAvailableInContextAccounts: (accountId) => helper.get(`/v1/accounts/${accountId}/grading_standards`),
    /**
     * Returns a grading standard for the given context that is visible to the user.
     * @summary Get a single grading standard in a context.
     * @param {string} courseId Canvas Course ID
     * @param {string} gradingStandardId Canvas Grading standard ID
     * @returns {GradingStandard}
     */
    getSingleGradingStandardInContextCourses: (courseId, gradingStandardId) => helper.get(`/v1/courses/${courseId}/grading_standards/${gradingStandardId}`),
    /**
     * Returns a grading standard for the given context that is visible to the user.
     * @summary Get a single grading standard in a context.
     * @param {string} accountId Canvas Account ID
     * @param {string} gradingStandardId Canvas Grading standard ID
     * @returns {GradingStandard}
     */
    getSingleGradingStandardInContextAccounts: (accountId, gradingStandardId) => helper.get(`/v1/accounts/${accountId}/grading_standards/${gradingStandardId}`),
}

module.exports = gradingStandards;