import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Depending on the URL given, return a paginated list of either (1) all of the enrollments in a course, (2) all of the enrollments in a section or (3) all of a user's enrollments. This includes student, teacher, TA, and observer enrollments. If a user has multiple enrollments in a context (e.g. as a teacher and a student or in multiple course sections), each enrollment will be listed separately. note: Currently, only a root level admin user can return other users' enrollments. A user can, however, return his/her own enrollments.
     * @summary List enrollments
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentsCourses: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/enrollments`, query),
    /**
     * Depending on the URL given, return a paginated list of either (1) all of the enrollments in a course, (2) all of the enrollments in a section or (3) all of a user's enrollments. This includes student, teacher, TA, and observer enrollments. If a user has multiple enrollments in a context (e.g. as a teacher and a student or in multiple course sections), each enrollment will be listed separately. note: Currently, only a root level admin user can return other users' enrollments. A user can, however, return his/her own enrollments.
     * @summary List enrollments
     * @param {string|number} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentsSections: (sectionId: string | number, query?: any) =>
      helper.get(`/v1/sections/${sectionId}/enrollments`, query),
    /**
     * Depending on the URL given, return a paginated list of either (1) all of the enrollments in a course, (2) all of the enrollments in a section or (3) all of a user's enrollments. This includes student, teacher, TA, and observer enrollments. If a user has multiple enrollments in a context (e.g. as a teacher and a student or in multiple course sections), each enrollment will be listed separately. note: Currently, only a root level admin user can return other users' enrollments. A user can, however, return his/her own enrollments.
     * @summary List enrollments
     * @param {string|number} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentsUsers: (userId: string | number, query?: any) =>
      helper.get(`/v1/users/${userId}/enrollments`, query),
    /**
     * Get an Enrollment object by Enrollment ID
     * @summary Enrollment by ID
     * @param {string|number} accountId Canvas Account ID
     * @param number enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    enrollmentById: (accountId: string | number, enrollmentId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/enrollments/${enrollmentId}`),
    /**
     * Create a new user enrollment for a course or section.
     * @summary Enroll a user
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    enrollUserCourses: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/enrollments`, body),
    /**
     * Create a new user enrollment for a course or section.
     * @summary Enroll a user
     * @param {string|number} sectionId Canvas Section ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    enrollUserSections: (sectionId: string | number, body: any) =>
      helper.post(`/v1/sections/${sectionId}/enrollments`, body),
    /**
     * Conclude, deactivate, or delete an enrollment. If the +task+ argument isn't given, the enrollment will be concluded.
     * @summary Conclude, deactivate, or delete an enrollment
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} enrollmentId Canvas Enrollment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    concludeDeactivateOrDeleteEnrollment: (
      courseId: string | number,
      enrollmentId: string | number,
      query?: any,
    ) => helper.delete(`/v1/courses/${courseId}/enrollments/${enrollmentId}`, query),
    /**
     * accepts a pending course invitation for the current user
     * @summary Accept Course Invitation
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    acceptCourseInvitation: (courseId: string | number, enrollmentId: string | number) =>
      helper.post(`/v1/courses/${courseId}/enrollments/${enrollmentId}/accept`),
    /**
     * rejects a pending course invitation for the current user
     * @summary Reject Course Invitation
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    rejectCourseInvitation: (courseId: string | number, enrollmentId: string | number) =>
      helper.post(`/v1/courses/${courseId}/enrollments/${enrollmentId}/reject`),
    /**
     * Activates an inactive enrollment
     * @summary Re-activate an enrollment
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    reActivateEnrollment: (courseId: string | number, enrollmentId: string | number) =>
      helper.put(`/v1/courses/${courseId}/enrollments/${enrollmentId}/reactivate`),
    /**
     *
     * @summary Adds last attended date to student enrollment in course
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    addsLastAttendedDateToStudentEnrollmentInCourse: (
      courseId: string | number,
      userId: string | number,
    ) => helper.put(`/v1/courses/${courseId}/users/${userId}/last_attended`),
  };
}
