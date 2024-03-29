import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Creates live assessment results and adds them to a live assessment
     * @summary Create live assessment results
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assessmentId Canvas Assessment ID
     * @returns {Promise<any>}
     */
    createLiveAssessmentResults: (courseId: string | number, assessmentId: string | number) =>
      helper.post(`/v1/courses/${courseId}/live_assessments/${assessmentId}/results`),
    /**
     * Returns a paginated list of live assessment results
     * @summary List live assessment results
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assessmentId Canvas Assessment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listLiveAssessmentResults: (
      courseId: string | number,
      assessmentId: string | number,
      query?: any,
    ) => helper.get(`/v1/courses/${courseId}/live_assessments/${assessmentId}/results`, query),
    /**
     * Creates or finds an existing live assessment with the given key and aligns it with the linked outcome
     * @summary Create or find a live assessment
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    createOrFindLiveAssessment: (courseId: string | number) =>
      helper.post(`/v1/courses/${courseId}/live_assessments`),
    /**
     * Returns a paginated list of live assessments.
     * @summary List live assessments
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listLiveAssessments: (courseId: string | number) =>
      helper.get(`/v1/courses/${courseId}/live_assessments`),
  };
}
