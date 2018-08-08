const helper = require('../helper');

let quizQuestions = {
    /**
     * Returns the paginated list of QuizQuestions in this quiz.
     * @summary List questions in a quiz or a submission
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listQuestionsInQuizOrSubmission: (courseId, quizId, query='') => helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/questions`, query),
    /**
     * Returns the quiz question with the given id
     * @summary Get a single quiz question
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {integer} questionId Canvas Question ID
     * @returns {QuizQuestion}
     */
    getSingleQuizQuestion: (courseId, quizId, questionId) => helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`),
    /**
     * Create a new quiz question for this quiz
     * @summary Create a single quiz question
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {QuizQuestion}
     */
    createSingleQuizQuestion: (courseId, quizId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizId}/questions`, body),
    /**
     * Updates an existing quiz question for this quiz
     * @summary Update an existing quiz question
     * @param {string} courseId Canvas Course ID
     * @param {integer} quizId Canvas Quiz ID
     * @param {integer} questionId Canvas Question ID
     * @param {Object} body JSON form fields
     * @returns {QuizQuestion}
     */
    updateExistingQuizQuestion: (courseId, quizId, questionId, body) => helper.put(`/v1/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`, body),
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a quiz question
     * @param {string} courseId Canvas Course ID
     * @param {integer} quizId Canvas Quiz ID
     * @param {integer} questionId Canvas Question ID
     * @returns {void}
     */
    deleteQuizQuestion: (courseId, quizId, questionId) => helper.delete(`/v1/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`),
}

module.exports = quizQuestions;