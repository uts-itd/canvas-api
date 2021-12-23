var helper = require('../helper');
var quizQuestions = {
    /**
     * Returns the paginated list of QuizQuestions in this quiz.
     * @summary List questions in a quiz or a submission
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listQuestionsInQuizOrSubmission: function (courseId, quizId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/quizzes/" + quizId + "/questions", query);
    },
    /**
     * Returns the quiz question with the given id
     * @summary Get a single quiz question
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @returns {Promise<any>}
     */
    getSingleQuizQuestion: function (courseId, quizId, questionId) { return helper.get("/v1/courses/" + courseId + "/quizzes/" + quizId + "/questions/" + questionId); },
    /**
     * Create a new quiz question for this quiz
     * @summary Create a single quiz question
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSingleQuizQuestion: function (courseId, quizId, body) { return helper.post("/v1/courses/" + courseId + "/quizzes/" + quizId + "/questions", body); },
    /**
     * Updates an existing quiz question for this quiz
     * @summary Update an existing quiz question
     * @param {string} courseId Canvas Course ID
     * @param number quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateExistingQuizQuestion: function (courseId, quizId, questionId, body) { return helper.put("/v1/courses/" + courseId + "/quizzes/" + quizId + "/questions/" + questionId, body); },
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a quiz question
     * @param {string} courseId Canvas Course ID
     * @param number quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @returns {Promise<any>}
     */
    deleteQuizQuestion: function (courseId, quizId, questionId) { return helper.delete("/v1/courses/" + courseId + "/quizzes/" + quizId + "/questions/" + questionId); },
};
module.exports = quizQuestions;
//# sourceMappingURL=quizQuestions.js.map