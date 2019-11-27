export = moderatedGrading;
declare let moderatedGrading: {
    /**
     * Returns a paginated list of students selected for moderation
     * @summary List students selected for moderation
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    listStudentsSelectedForModeration: (courseId: string, assignmentId: string) => Promise<any>;
    /**
     * Returns an array of users that were selected for moderation
     * @summary Select students for moderation
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    selectStudentsForModeration: (courseId: string, assignmentId: string, body: any) => Promise<any>;
    /**
     * Tell whether the student's submission needs one or more provisional grades.
     * @summary Show provisional grade status for a student
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showProvisionalGradeStatusForStudent: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
    /**
     * Choose which provisional grade the student should receive for a submission. The caller must have :moderate_grades rights.
     * @summary Select provisional grade
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} provisionalGradeId Canvas Provisional grade ID
     * @returns {Promise<any>}
     */
    selectProvisionalGrade: (courseId: string, assignmentId: string, provisionalGradeId: string) => Promise<any>;
    /**
     * Given a provisional grade, copy the grade (and associated submission comments and rubric assessments) to a "final" mark which can be edited or commented upon by a moderator prior to publication of grades. Notes: The student must be in the moderation set for the assignment. The newly created grade will be selected. The caller must have "Moderate Grades" rights in the course.
     * @summary Copy provisional grade
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} provisionalGradeId Canvas Provisional grade ID
     * @returns {Promise<any>}
     */
    copyProvisionalGrade: (courseId: string, assignmentId: string, provisionalGradeId: string) => Promise<any>;
    /**
     * Publish the selected provisional grade for all submissions to an assignment. Use the "Select provisional grade" endpoint to choose which provisional grade to publish for a particular submission. Students not in the moderation set will have their one and only provisional grade published. WARNING: This is irreversible. This will overwrite existing grades in the gradebook.
     * @summary Publish provisional grades for an assignment
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    publishProvisionalGradesForAssignment: (courseId: string, assignmentId: string) => Promise<any>;
    /**
     * Determine whether or not the student's submission needs one or more provisional grades.
     * @summary Show provisional grade status for a student
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    anonymousProvisionalGrades: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
};