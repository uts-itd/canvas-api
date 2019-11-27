const helper = require('../helper');

let quizExtensions = {
    /**
     * Responses 200 OK if the request was successful 403 Forbidden if you are not allowed to extend quizzes for this course
     * @summary Set extensions for student quiz submissions
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setExtensionsForStudentQuizSubmissions: (courseId, quizId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizId}/extensions`, body),
}

module.exports = quizExtensions;