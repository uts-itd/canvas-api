var helper = require('../helper');
var courseQuizExtensions = {
    /**
     * Responses 200 OK if the request was successful 403 Forbidden if you are not allowed to extend quizzes for this course
     * @summary Set extensions for student quiz submissions
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setExtensionsForStudentQuizSubmissions: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/quiz_extensions", body); },
};
module.exports = courseQuizExtensions;
//# sourceMappingURL=courseQuizExtensions.js.map