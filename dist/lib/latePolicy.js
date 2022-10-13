module.exports = (helper) => {
    return {
        /**
         * Returns the late policy for a course.
         * @summary Get a late policy
         * @param {string} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        getLatePolicy: (courseId) => helper.get(`/v1/courses/${courseId}/late_policy`),
        /**
         * Create a late policy. If the course already has a late policy, a bad_request is returned since there can only be one late policy per course.
         * @summary Create a late policy
         * @param {string} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createLatePolicy: (courseId, body) => helper.post(`/v1/courses/${courseId}/late_policy`, body),
        /**
         * Patch a late policy. No body is returned upon success.
         * @summary Patch a late policy
         * @param {string} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        patchLatePolicy: (courseId, body) => helper.patch(`/v1/courses/${courseId}/late_policy`, body),
    };
};
