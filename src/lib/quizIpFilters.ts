import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Get a list of available IP filters for this Quiz. 200 OK response code is returned if the request was successful.
     * @summary Get available quiz IP filters.
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @returns {Promise<any>}
     */
    getAvailableQuizIpFilters: (courseId: string | number, quizId: string | number) =>
      helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/ip_filters`),
  };
}
