export = gradeChangeLog;
declare let gradeChangeLog: {
    /**
     * List grade change events for a given assignment.
     * @summary Query by assignment.
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByAssignment: (assignmentId: string, query?: any) => Promise<any>;
    /**
     * List grade change events for a given course.
     * @summary Query by course.
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByCourse: (courseId: string, query?: any) => Promise<any>;
    /**
     * List grade change events for a given student.
     * @summary Query by student.
     * @param {string} studentId Canvas Student ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByStudent: (studentId: string, query?: any) => Promise<any>;
    /**
     * List grade change events for a given grader.
     * @summary Query by grader.
     * @param {string} graderId Canvas Grader ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByGrader: (graderId: string, query?: any) => Promise<any>;
};
