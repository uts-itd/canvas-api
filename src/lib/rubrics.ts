import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Returns the paginated list of active rubrics for the current context.
     * @summary List rubrics
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listRubricsAccounts: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/rubrics`),
    /**
     * Returns the paginated list of active rubrics for the current context.
     * @summary List rubrics
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listRubricsCourses: (courseId: string | number) => helper.get(`/v1/courses/${courseId}/rubrics`),
    /**
     * Returns the rubric with the given id.
     * @summary Get a single rubric
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} rubricId Canvas Rubric ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRubricAccounts: (accountId: string | number, rubricId: string | number, query?: any) =>
      helper.get(`/v1/accounts/${accountId}/rubrics/${rubricId}`, query),
    /**
     * Returns the rubric with the given id.
     * @summary Get a single rubric
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} rubricId Canvas Rubric ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRubricCourses: (courseId: string | number, rubricId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/rubrics/${rubricId}`, query),
  };
}
