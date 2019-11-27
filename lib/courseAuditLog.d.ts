export = courseAuditLog;
declare let courseAuditLog: {
    /**
     * List course change events for a given course.
     * @summary Query by course.
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByCourse: (courseId: string, query?: any) => Promise<any>;
};
