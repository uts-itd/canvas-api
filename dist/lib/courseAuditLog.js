module.exports = (helper) => {
    return {
        /**
         * List course change events for a given course.
         * @summary Query by course.
         * @param {string} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        queryByCourse: (courseId, query = '') => helper.get(`/v1/audit/course/courses/${courseId}`, query),
    };
};
