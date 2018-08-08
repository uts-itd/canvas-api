const helper = require('../helper');

let quizIpFilters = {
    /**
     * Get a list of available IP filters for this Quiz. 200 OK response code is returned if the request was successful.
     * @summary Get available quiz IP filters.
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @returns {void}
     */
    getAvailableQuizIpFilters: (courseId, quizId) => helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/ip_filters`),
}

module.exports = quizIpFilters;