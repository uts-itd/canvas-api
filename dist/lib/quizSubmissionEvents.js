var helper = require('../helper');
var quizSubmissionEvents = {
    /**
     * Store a set of events which were captured during a quiz taking session. On success, the response will be 204 No Content with an empty body.
     * @summary Submit captured events
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    submitCapturedEvents: function (courseId, quizId, submissionId, body) { return helper.post("/v1/courses/" + courseId + "/quizzes/" + quizId + "/submissions/" + submissionId + "/events", body); },
    /**
     * Retrieve the set of events captured during a specific submission attempt.
     * @summary Retrieve captured events
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveCapturedEvents: function (courseId, quizId, submissionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/quizzes/" + quizId + "/submissions/" + submissionId + "/events", query);
    },
};
module.exports = quizSubmissionEvents;
