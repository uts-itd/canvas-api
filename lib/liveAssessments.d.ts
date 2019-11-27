export = liveAssessments;
declare let liveAssessments: {
    /**
     * Creates live assessment results and adds them to a live assessment
     * @summary Create live assessment results
     * @param {string} courseId Canvas Course ID
     * @param {string} assessmentId Canvas Assessment ID
     * @returns {Promise<any>}
     */
    createLiveAssessmentResults: (courseId: string, assessmentId: string) => Promise<any>;
    /**
     * Returns a paginated list of live assessment results
     * @summary List live assessment results
     * @param {string} courseId Canvas Course ID
     * @param {string} assessmentId Canvas Assessment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listLiveAssessmentResults: (courseId: string, assessmentId: string, query?: any) => Promise<any>;
    /**
     * Creates or finds an existing live assessment with the given key and aligns it with the linked outcome
     * @summary Create or find a live assessment
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    createOrFindLiveAssessment: (courseId: string) => Promise<any>;
    /**
     * Returns a paginated list of live assessments.
     * @summary List live assessments
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listLiveAssessments: (courseId: string) => Promise<any>;
};
