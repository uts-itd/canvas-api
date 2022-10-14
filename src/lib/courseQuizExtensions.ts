import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Responses 200 OK if the request was successful 403 Forbidden if you are not allowed to extend quizzes for this course
     * @summary Set extensions for student quiz submissions
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setExtensionsForStudentQuizSubmissions: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/quiz_extensions`, body),
  };
}
