var helper = require('../helper');
var enrollments = {
    /**
     * Depending on the URL given, return a paginated list of either (1) all of the enrollments in a course, (2) all of the enrollments in a section or (3) all of a user's enrollments. This includes student, teacher, TA, and observer enrollments. If a user has multiple enrollments in a context (e.g. as a teacher and a student or in multiple course sections), each enrollment will be listed separately. note: Currently, only a root level admin user can return other users' enrollments. A user can, however, return his/her own enrollments.
     * @summary List enrollments
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentsCourses: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/enrollments", query);
    },
    /**
     * Depending on the URL given, return a paginated list of either (1) all of the enrollments in a course, (2) all of the enrollments in a section or (3) all of a user's enrollments. This includes student, teacher, TA, and observer enrollments. If a user has multiple enrollments in a context (e.g. as a teacher and a student or in multiple course sections), each enrollment will be listed separately. note: Currently, only a root level admin user can return other users' enrollments. A user can, however, return his/her own enrollments.
     * @summary List enrollments
     * @param {string} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentsSections: function (sectionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId + "/enrollments", query);
    },
    /**
     * Depending on the URL given, return a paginated list of either (1) all of the enrollments in a course, (2) all of the enrollments in a section or (3) all of a user's enrollments. This includes student, teacher, TA, and observer enrollments. If a user has multiple enrollments in a context (e.g. as a teacher and a student or in multiple course sections), each enrollment will be listed separately. note: Currently, only a root level admin user can return other users' enrollments. A user can, however, return his/her own enrollments.
     * @summary List enrollments
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEnrollmentsUsers: function (userId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/users/" + userId + "/enrollments", query);
    },
    /**
     * Get an Enrollment object by Enrollment ID
     * @summary Enrollment by ID
     * @param {string} accountId Canvas Account ID
     * @param number enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    enrollmentById: function (accountId, enrollmentId) { return helper.get("/v1/accounts/" + accountId + "/enrollments/" + enrollmentId); },
    /**
     * Create a new user enrollment for a course or section.
     * @summary Enroll a user
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    enrollUserCourses: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/enrollments", body); },
    /**
     * Create a new user enrollment for a course or section.
     * @summary Enroll a user
     * @param {string} sectionId Canvas Section ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    enrollUserSections: function (sectionId, body) { return helper.post("/v1/sections/" + sectionId + "/enrollments", body); },
    /**
     * Conclude, deactivate, or delete an enrollment. If the +task+ argument isn't given, the enrollment will be concluded.
     * @summary Conclude, deactivate, or delete an enrollment
     * @param {string} courseId Canvas Course ID
     * @param {string} enrollmentId Canvas Enrollment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    concludeDeactivateOrDeleteEnrollment: function (courseId, enrollmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.delete("/v1/courses/" + courseId + "/enrollments/" + enrollmentId, query);
    },
    /**
     * accepts a pending course invitation for the current user
     * @summary Accept Course Invitation
     * @param {string} courseId Canvas Course ID
     * @param {string} enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    acceptCourseInvitation: function (courseId, enrollmentId) { return helper.post("/v1/courses/" + courseId + "/enrollments/" + enrollmentId + "/accept"); },
    /**
     * rejects a pending course invitation for the current user
     * @summary Reject Course Invitation
     * @param {string} courseId Canvas Course ID
     * @param {string} enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    rejectCourseInvitation: function (courseId, enrollmentId) { return helper.post("/v1/courses/" + courseId + "/enrollments/" + enrollmentId + "/reject"); },
    /**
     * Activates an inactive enrollment
     * @summary Re-activate an enrollment
     * @param {string} courseId Canvas Course ID
     * @param {string} enrollmentId Canvas Enrollment ID
     * @returns {Promise<any>}
     */
    reActivateEnrollment: function (courseId, enrollmentId) { return helper.put("/v1/courses/" + courseId + "/enrollments/" + enrollmentId + "/reactivate"); },
    /**
     *
     * @summary Adds last attended date to student enrollment in course
     * @param {string} courseId Canvas Course ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    addsLastAttendedDateToStudentEnrollmentInCourse: function (courseId, userId) { return helper.put("/v1/courses/" + courseId + "/users/" + userId + "/last_attended"); },
};
module.exports = enrollments;
//# sourceMappingURL=enrollments.js.map