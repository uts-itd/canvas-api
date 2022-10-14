"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Creates live assessment results and adds them to a live assessment
         * @summary Create live assessment results
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} assessmentId Canvas Assessment ID
         * @returns {Promise<any>}
         */
        createLiveAssessmentResults: (courseId, assessmentId) => helper.post(`/v1/courses/${courseId}/live_assessments/${assessmentId}/results`),
        /**
         * Returns a paginated list of live assessment results
         * @summary List live assessment results
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} assessmentId Canvas Assessment ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listLiveAssessmentResults: (courseId, assessmentId, query) => helper.get(`/v1/courses/${courseId}/live_assessments/${assessmentId}/results`, query),
        /**
         * Creates or finds an existing live assessment with the given key and aligns it with the linked outcome
         * @summary Create or find a live assessment
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        createOrFindLiveAssessment: (courseId) => helper.post(`/v1/courses/${courseId}/live_assessments`),
        /**
         * Returns a paginated list of live assessments.
         * @summary List live assessments
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listLiveAssessments: (courseId) => helper.get(`/v1/courses/${courseId}/live_assessments`),
    };
}
exports.default = default_1;
