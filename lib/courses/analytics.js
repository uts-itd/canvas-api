const helper = require('../helper');

let analytics = {
    /**
     * Get course-level participation data.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.course_participation
     */
    getActivity: course => helper.get(`courses/${course}/analytics/activity`),

    /**
     * Get course-level assignment data.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.course_assignments
     */
    getAssignment: course => helper.get(`courses/${course}/analytics/assignments`),

    /**
     * Get course-level student summary data.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.course_student_summaries
     */
    getStudentSummaries: course => helper.get(`courses/${course}/analytics/student_summaries`),

    /**
     * Get user-in-a-course-level participation data.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number|string} studentID Student Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.student_in_course_participation
     */
    getStudentActivity: (course, studentID) => helper.get(`courses/${course}/analytics/users/${studentID}/activity`),

    /**
     * Get user-in-a-course-level assignment data.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number|string} studentID Student Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.student_in_course_assignments
     */
    getStudentAssignment: (course, studentID) => helper.get(`courses/${course}/analytics/users/${studentID}/assignments`),

    /**
     * Get user-in-a-course-level messaging data.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number|string} studentID Student Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.student_in_course_messaging
     */
    getStudentcommunication: (course, studentID) => helper.get(`courses/${course}/analytics/users/${studentID}/communication`),
}

module.exports = analytics;