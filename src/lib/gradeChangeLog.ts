import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * List grade change events for a given assignment.
     * @summary Query by assignment.
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByAssignment: (assignmentId: string | number, query?: any) =>
      helper.get(`/v1/audit/grade_change/assignments/${assignmentId}`, query),
    /**
     * List grade change events for a given course.
     * @summary Query by course.
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByCourse: (courseId: string | number, query?: any) =>
      helper.get(`/v1/audit/grade_change/courses/${courseId}`, query),
    /**
     * List grade change events for a given student.
     * @summary Query by student.
     * @param {string|number} studentId Canvas Student ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByStudent: (studentId: string | number, query?: any) =>
      helper.get(`/v1/audit/grade_change/students/${studentId}`, query),
    /**
     * List grade change events for a given grader.
     * @summary Query by grader.
     * @param {string|number} graderId Canvas Grader ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByGrader: (graderId: string | number, query?: any) =>
      helper.get(`/v1/audit/grade_change/graders/${graderId}`, query),
  };
}
