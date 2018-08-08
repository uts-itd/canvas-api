const helper = require('../helper');

let analytics = {
    /**
     * Returns page view hits summed across all courses in the department. Two groupings of these counts are returned; one by day (+by_date+), the other by category (+by_category+). The possible categories are announcements, assignments, collaborations, conferences, discussions, files, general, grades, groups, modules, other, pages, and quizzes. This and the other department-level endpoints have three variations which all return the same style of data but for different subsets of courses. All share the prefix /api/v1/accounts/<account_id>/analytics. The possible suffixes are: /current: includes all available courses in the default term /completed: includes all concluded courses in the default term /terms/<term_id>: includes all available or concluded courses in the  given term. Courses not yet offered or which have been deleted are never included. /current and /completed are intended for use when the account has only one term. /terms/<term_id> is intended for use when the account has multiple terms. The action follows the suffix.
     * @summary Get department-level participation data
     * @param {string} accountId Canvas Account ID
     * @param {string} termId Canvas Term ID
     * @returns {void}
     */
    getDepartmentLevelParticipationDataTerms: (accountId, termId) => helper.get(`/v1/accounts/${accountId}/analytics/terms/${termId}/activity`),
    /**
     * Returns page view hits summed across all courses in the department. Two groupings of these counts are returned; one by day (+by_date+), the other by category (+by_category+). The possible categories are announcements, assignments, collaborations, conferences, discussions, files, general, grades, groups, modules, other, pages, and quizzes. This and the other department-level endpoints have three variations which all return the same style of data but for different subsets of courses. All share the prefix /api/v1/accounts/<account_id>/analytics. The possible suffixes are: /current: includes all available courses in the default term /completed: includes all concluded courses in the default term /terms/<term_id>: includes all available or concluded courses in the  given term. Courses not yet offered or which have been deleted are never included. /current and /completed are intended for use when the account has only one term. /terms/<term_id> is intended for use when the account has multiple terms. The action follows the suffix.
     * @summary Get department-level participation data
     * @param {string} accountId Canvas Account ID
     * @returns {void}
     */
    getDepartmentLevelParticipationDataCurrent: (accountId) => helper.get(`/v1/accounts/${accountId}/analytics/current/activity`),
    /**
     * Returns page view hits summed across all courses in the department. Two groupings of these counts are returned; one by day (+by_date+), the other by category (+by_category+). The possible categories are announcements, assignments, collaborations, conferences, discussions, files, general, grades, groups, modules, other, pages, and quizzes. This and the other department-level endpoints have three variations which all return the same style of data but for different subsets of courses. All share the prefix /api/v1/accounts/<account_id>/analytics. The possible suffixes are: /current: includes all available courses in the default term /completed: includes all concluded courses in the default term /terms/<term_id>: includes all available or concluded courses in the  given term. Courses not yet offered or which have been deleted are never included. /current and /completed are intended for use when the account has only one term. /terms/<term_id> is intended for use when the account has multiple terms. The action follows the suffix.
     * @summary Get department-level participation data
     * @param {string} accountId Canvas Account ID
     * @returns {void}
     */
    getDepartmentLevelParticipationDataCompleted: (accountId) => helper.get(`/v1/accounts/${accountId}/analytics/completed/activity`),
    /**
     * Returns the distribution of grades for students in courses in the department. Each data point is one student's current grade in one course; if a student is in multiple courses, he contributes one value per course, but if he's enrolled multiple times in the same course (e.g. a lecture section and a lab section), he only constributes on value for that course. Grades are binned to the nearest integer score; anomalous grades outside the 0 to 100 range are ignored. The raw counts are returned, not yet normalized by the total count. Shares the same variations on endpoint as the participation data.
     * @summary Get department-level grade data
     * @param {string} accountId Canvas Account ID
     * @param {string} termId Canvas Term ID
     * @returns {void}
     */
    getDepartmentLevelGradeDataTerms: (accountId, termId) => helper.get(`/v1/accounts/${accountId}/analytics/terms/${termId}/grades`),
    /**
     * Returns the distribution of grades for students in courses in the department. Each data point is one student's current grade in one course; if a student is in multiple courses, he contributes one value per course, but if he's enrolled multiple times in the same course (e.g. a lecture section and a lab section), he only constributes on value for that course. Grades are binned to the nearest integer score; anomalous grades outside the 0 to 100 range are ignored. The raw counts are returned, not yet normalized by the total count. Shares the same variations on endpoint as the participation data.
     * @summary Get department-level grade data
     * @param {string} accountId Canvas Account ID
     * @returns {void}
     */
    getDepartmentLevelGradeDataCurrent: (accountId) => helper.get(`/v1/accounts/${accountId}/analytics/current/grades`),
    /**
     * Returns the distribution of grades for students in courses in the department. Each data point is one student's current grade in one course; if a student is in multiple courses, he contributes one value per course, but if he's enrolled multiple times in the same course (e.g. a lecture section and a lab section), he only constributes on value for that course. Grades are binned to the nearest integer score; anomalous grades outside the 0 to 100 range are ignored. The raw counts are returned, not yet normalized by the total count. Shares the same variations on endpoint as the participation data.
     * @summary Get department-level grade data
     * @param {string} accountId Canvas Account ID
     * @returns {void}
     */
    getDepartmentLevelGradeDataCompleted: (accountId) => helper.get(`/v1/accounts/${accountId}/analytics/completed/grades`),
    /**
     * Returns numeric statistics about the department and term (or filter). Shares the same variations on endpoint as the participation data.
     * @summary Get department-level statistics
     * @param {string} accountId Canvas Account ID
     * @param {string} termId Canvas Term ID
     * @returns {void}
     */
    getDepartmentLevelStatisticsTerms: (accountId, termId) => helper.get(`/v1/accounts/${accountId}/analytics/terms/${termId}/statistics`),
    /**
     * Returns numeric statistics about the department and term (or filter). Shares the same variations on endpoint as the participation data.
     * @summary Get department-level statistics
     * @param {string} accountId Canvas Account ID
     * @returns {void}
     */
    getDepartmentLevelStatisticsCurrent: (accountId) => helper.get(`/v1/accounts/${accountId}/analytics/current/statistics`),
    /**
     * Returns numeric statistics about the department and term (or filter). Shares the same variations on endpoint as the participation data.
     * @summary Get department-level statistics
     * @param {string} accountId Canvas Account ID
     * @returns {void}
     */
    getDepartmentLevelStatisticsCompleted: (accountId) => helper.get(`/v1/accounts/${accountId}/analytics/completed/statistics`),
    /**
     * Returns page view hits and participation numbers grouped by day through the entire history of the course. Page views is returned as a hash, where the hash keys are dates in the format "YYYY-MM-DD". The page_views result set includes page views broken out by access category. Participations is returned as an array of dates in the format "YYYY-MM-DD".
     * @summary Get course-level participation data
     * @param {string} courseId Canvas Course ID
     * @returns {void}
     */
    getCourseLevelParticipationData: (courseId) => helper.get(`/v1/courses/${courseId}/analytics/activity`),
    /**
     * Returns a list of assignments for the course sorted by due date. For each assignment returns basic assignment information, the grade breakdown, and a breakdown of on-time/late status of homework submissions.
     * @summary Get course-level assignment data
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    getCourseLevelAssignmentData: (courseId, query='') => helper.get(`/v1/courses/${courseId}/analytics/assignments`, query),
    /**
     * Returns a summary of per-user access information for all students in a course. This includes total page views, total participations, and a breakdown of on-time/late status for all homework submissions in the course. Each student's summary also includes the maximum number of page views and participations by any student in the course, which may be useful for some visualizations (since determining maximums client side can be tricky with pagination).
     * @summary Get course-level student summary data
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {void}
     */
    getCourseLevelStudentSummaryData: (courseId, query='') => helper.get(`/v1/courses/${courseId}/analytics/student_summaries`, query),
    /**
     * Returns page view hits grouped by hour, and participation details through the entire history of the course. `page_views` are returned as a hash, where the keys are iso8601 dates, bucketed by the hour. `participations` are returned as an array of hashes, sorted oldest to newest.
     * @summary Get user-in-a-course-level participation data
     * @param {string} courseId Canvas Course ID
     * @param {string} studentId Canvas Student ID
     * @returns {void}
     */
    getUserInACourseLevelParticipationData: (courseId, studentId) => helper.get(`/v1/courses/${courseId}/analytics/users/${studentId}/activity`),
    /**
     * Returns a list of assignments for the course sorted by due date. For each assignment returns basic assignment information, the grade breakdown (including the student's actual grade), and the basic submission information for the student's submission if it exists.
     * @summary Get user-in-a-course-level assignment data
     * @param {string} courseId Canvas Course ID
     * @param {string} studentId Canvas Student ID
     * @returns {void}
     */
    getUserInACourseLevelAssignmentData: (courseId, studentId) => helper.get(`/v1/courses/${courseId}/analytics/users/${studentId}/assignments`),
    /**
     * Returns messaging "hits" grouped by day through the entire history of the course. Returns a hash containing the number of instructor-to-student messages, and student-to-instructor messages, where the hash keys are dates in the format "YYYY-MM-DD". Message hits include Conversation messages and comments on homework submissions.
     * @summary Get user-in-a-course-level messaging data
     * @param {string} courseId Canvas Course ID
     * @param {string} studentId Canvas Student ID
     * @returns {void}
     */
    getUserInACourseLevelMessagingData: (courseId, studentId) => helper.get(`/v1/courses/${courseId}/analytics/users/${studentId}/communication`),
}

module.exports = analytics;