const helper = require('../helper');

let quizzes = {
    /**
     * Returns the paginated list of Quizzes in this course.
     * @summary List quizzes in a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listQuizzesInCourse: (courseId, query='') => helper.get(`/v1/courses/${courseId}/quizzes`, query),
    /**
     * Returns the quiz with the given id.
     * @summary Get a single quiz
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @returns {Quiz}
     */
    getSingleQuiz: (courseId, quizzeId) => helper.get(`/v1/courses/${courseId}/quizzes/${quizzeId}`),
    /**
     * Create a new quiz for this course.
     * @summary Create a quiz
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Quiz}
     */
    createQuiz: (courseId, body) => helper.post(`/v1/courses/${courseId}/quizzes`, body),
    /**
     * Modify an existing quiz. See the documentation for quiz creation. Additional arguments:
     * @summary Edit a quiz
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Quiz}
     */
    editQuiz: (courseId, quizzeId, body) => helper.put(`/v1/courses/${courseId}/quizzes/${quizzeId}`, body),
    /**
     * 
     * @summary Delete a quiz
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @returns {Quiz}
     */
    deleteQuiz: (courseId, quizzeId) => helper.delete(`/v1/courses/${courseId}/quizzes/${quizzeId}`),
    /**
     * Change order of the quiz questions or groups within the quiz 204 No Content response code is returned if the reorder was successful.
     * @summary Reorder quiz items
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    reorderQuizItems: (courseId, quizzeId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizzeId}/reorder`, body),
    /**
     * Accepts an access code and returns a boolean indicating whether that access code is correct
     * @summary Validate quiz access code
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {boolean}
     */
    validateQuizAccessCode: (courseId, quizzeId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizzeId}/validate_access_code`, body),
}

module.exports = quizzes;