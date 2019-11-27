const helper = require('../helper');

let rubrics = {
    /**
     * Returns the paginated list of active rubrics for the current context.
     * @summary List rubrics
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listRubricsAccounts: (accountId) => helper.get(`/v1/accounts/${accountId}/rubrics`),
    /**
     * Returns the paginated list of active rubrics for the current context.
     * @summary List rubrics
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listRubricsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/rubrics`),
    /**
     * Returns the rubric with the given id.
     * @summary Get a single rubric
     * @param {string} accountId Canvas Account ID
     * @param {string} rubricId Canvas Rubric ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRubricAccounts: (accountId, rubricId, query='') => helper.get(`/v1/accounts/${accountId}/rubrics/${rubricId}`, query),
    /**
     * Returns the rubric with the given id.
     * @summary Get a single rubric
     * @param {string} courseId Canvas Course ID
     * @param {string} rubricId Canvas Rubric ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRubricCourses: (courseId, rubricId, query='') => helper.get(`/v1/courses/${courseId}/rubrics/${rubricId}`, query),
}

module.exports = rubrics;