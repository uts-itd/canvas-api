import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns a paginated list of students selected for moderation
     * @summary List students selected for moderation
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    listStudentsSelectedForModeration: (courseId: string | number, assignmentId: string | number) =>
      helper.get(`/v1/courses/${courseId}/assignments/${assignmentId}/moderated_students`),
    /**
     * Returns an array of users that were selected for moderation
     * @summary Select students for moderation
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    selectStudentsForModeration: (
      courseId: string | number,
      assignmentId: string | number,
      body: any,
    ) =>
      helper.post(`/v1/courses/${courseId}/assignments/${assignmentId}/moderated_students`, body),
    /**
     * Tell whether the student's submission needs one or more provisional grades.
     * @summary Show provisional grade status for a student
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showProvisionalGradeStatusForStudent: (
      courseId: string | number,
      assignmentId: string | number,
      query?: any,
    ) =>
      helper.get(
        `/v1/courses/${courseId}/assignments/${assignmentId}/provisional_grades/status`,
        query,
      ),
    /**
     * Choose which provisional grade the student should receive for a submission. The caller must have :moderate_grades rights.
     * @summary Select provisional grade
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} provisionalGradeId Canvas Provisional grade ID
     * @returns {Promise<any>}
     */
    selectProvisionalGrade: (
      courseId: string | number,
      assignmentId: string | number,
      provisionalGradeId: string | number,
    ) =>
      helper.put(
        `/v1/courses/${courseId}/assignments/${assignmentId}/provisional_grades/${provisionalGradeId}/select`,
      ),
    /**
     * Given a provisional grade, copy the grade (and associated submission comments and rubric assessments) to a "final" mark which can be edited or commented upon by a moderator prior to publication of grades. Notes: The student must be in the moderation set for the assignment. The newly created grade will be selected. The caller must have "Moderate Grades" rights in the course.
     * @summary Copy provisional grade
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} provisionalGradeId Canvas Provisional grade ID
     * @returns {Promise<any>}
     */
    copyProvisionalGrade: (
      courseId: string | number,
      assignmentId: string | number,
      provisionalGradeId: string | number,
    ) =>
      helper.post(
        `/v1/courses/${courseId}/assignments/${assignmentId}/provisional_grades/${provisionalGradeId}/copy_to_final_mark`,
      ),
    /**
     * Publish the selected provisional grade for all submissions to an assignment. Use the "Select provisional grade" endpoint to choose which provisional grade to publish for a particular submission. Students not in the moderation set will have their one and only provisional grade published. WARNING: This is irreversible. This will overwrite existing grades in the gradebook.
     * @summary Publish provisional grades for an assignment
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    publishProvisionalGradesForAssignment: (
      courseId: string | number,
      assignmentId: string | number,
    ) =>
      helper.post(`/v1/courses/${courseId}/assignments/${assignmentId}/provisional_grades/publish`),
    /**
     * Determine whether or not the student's submission needs one or more provisional grades.
     * @summary Show provisional grade status for a student
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    anonymousProvisionalGrades: (
      courseId: string | number,
      assignmentId: string | number,
      query?: any,
    ) =>
      helper.get(
        `/v1/courses/${courseId}/assignments/${assignmentId}/anonymous_provisional_grades/status`,
        query,
      ),
  };
}
