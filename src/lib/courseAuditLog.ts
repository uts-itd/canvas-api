import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * List course change events for a given course.
     * @summary Query by course.
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByCourse: (courseId: string | number, query?: any) =>
      helper.get(`/v1/audit/course/courses/${courseId}`, query),
  };
}
