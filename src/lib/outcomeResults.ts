import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Gets the outcome results for users and outcomes in the specified context.
     * @summary Get outcome results
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResults: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/outcome_results`, query),
    /**
     * Gets the outcome rollups for the users and outcomes in the specified context.
     * @summary Get outcome result rollups
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResultRollups: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/outcome_rollups`, query),
  };
}
