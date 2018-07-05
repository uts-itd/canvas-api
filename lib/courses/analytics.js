const helper = require('../helper');

let analytics = {
    /**
     * Get course-level participation data.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     */
    getActivity: (courseID) => helper.get(`courses/${courseID}/analytics/activity`),

    /**
     * Get course-level assignment data.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     */
    getAssignment: (courseID) => helper.get(`courses/${courseID}/analytics/assignments`),

    /**
     * Get course-level student summary data.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     */
    getStudentSummaries: (courseID) => helper.get(`courses/${courseID}/analytics/student_summaries`),

    /**
     * Get user-in-a-course-level participation data.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     * @param {number|string} studentID Student Canvas or SIS ID.
     */
    getStudentActivity: (courseID, studentID) => helper.get(`courses/${courseID}/analytics/users/${studentID}/activity`),

    /**
     * Get user-in-a-course-level assignment data.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     * @param {number|string} studentID Student Canvas or SIS ID.
     */
    getStudentAssignment: (courseID, studentID) => helper.get(`courses/${courseID}/analytics/users/${studentID}/assignments`),

    /**
     * Get user-in-a-course-level messaging data.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     * @param {number|string} studentID Student Canvas or SIS ID.
     */
    getStudentcommunication: (courseID, studentID) => helper.get(`courses/${courseID}/analytics/users/${studentID}/communication`),
}

module.exports = analytics;