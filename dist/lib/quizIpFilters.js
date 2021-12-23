var helper = require('../helper');
var quizIpFilters = {
    /**
     * Get a list of available IP filters for this Quiz. 200 OK response code is returned if the request was successful.
     * @summary Get available quiz IP filters.
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @returns {Promise<any>}
     */
    getAvailableQuizIpFilters: function (courseId, quizId) { return helper.get("/v1/courses/" + courseId + "/quizzes/" + quizId + "/ip_filters"); },
};
module.exports = quizIpFilters;
//# sourceMappingURL=quizIpFilters.js.map