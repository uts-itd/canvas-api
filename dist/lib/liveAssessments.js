var helper = require('../helper');
var liveAssessments = {
    /**
     * Creates live assessment results and adds them to a live assessment
     * @summary Create live assessment results
     * @param {string} courseId Canvas Course ID
     * @param {string} assessmentId Canvas Assessment ID
     * @returns {Promise<any>}
     */
    createLiveAssessmentResults: function (courseId, assessmentId) { return helper.post("/v1/courses/" + courseId + "/live_assessments/" + assessmentId + "/results"); },
    /**
     * Returns a paginated list of live assessment results
     * @summary List live assessment results
     * @param {string} courseId Canvas Course ID
     * @param {string} assessmentId Canvas Assessment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listLiveAssessmentResults: function (courseId, assessmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/live_assessments/" + assessmentId + "/results", query);
    },
    /**
     * Creates or finds an existing live assessment with the given key and aligns it with the linked outcome
     * @summary Create or find a live assessment
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    createOrFindLiveAssessment: function (courseId) { return helper.post("/v1/courses/" + courseId + "/live_assessments"); },
    /**
     * Returns a paginated list of live assessments.
     * @summary List live assessments
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listLiveAssessments: function (courseId) { return helper.get("/v1/courses/" + courseId + "/live_assessments"); },
};
module.exports = liveAssessments;
//# sourceMappingURL=liveAssessments.js.map