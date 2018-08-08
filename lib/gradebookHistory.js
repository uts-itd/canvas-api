const helper = require('../helper');

let gradebookHistory = {
    /**
     * Returns a map of dates to grader/assignment groups
     * @summary Days in gradebook history for this course
     * @param {integer} courseId Canvas Course ID
     * @returns {array}
     */
    daysInGradebookHistoryForThisCourse: (courseId) => helper.get(`/v1/courses/${courseId}/gradebook_history/days`),
    /**
     * Returns the graders who worked on this day, along with the assignments they worked on. More details can be obtained by selecting a grader and assignment and calling the 'submissions' api endpoint for a given date.
     * @summary Details for a given date in gradebook history for this course
     * @param {integer} courseId Canvas Course ID
     * @param {string} date The date for which you would like to see detailed information
     * @returns {array}
     */
    detailsForGivenDateInGradebookHistoryForThisCourse: (courseId, date) => helper.get(`/v1/courses/${courseId}/gradebook_history/${date}`),
    /**
     * Gives a nested list of submission versions
     * @summary Lists submissions
     * @param {integer} courseId Canvas Course ID
     * @param {string} date The date for which you would like to see submissions
     * @param {integer} graderId Canvas Grader ID
     * @param {integer} assignmentId Canvas Assignment ID
     * @returns {array}
     */
    listsSubmissions: (courseId, date, graderId, assignmentId) => helper.get(`/v1/courses/${courseId}/gradebook_history/${date}/graders/${graderId}/assignments/${assignmentId}/submissions`),
    /**
     * Gives a paginated, uncollated list of submission versions for all matching submissions in the context. This SubmissionVersion objects will not include the +new_grade+ or +previous_grade+ keys, only the +grade+; same for +graded_at+ and +grader+.
     * @summary List uncollated submission versions
     * @param {integer} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listUncollatedSubmissionVersions: (courseId, query='') => helper.get(`/v1/courses/${courseId}/gradebook_history/feed`, query),
}

module.exports = gradebookHistory;