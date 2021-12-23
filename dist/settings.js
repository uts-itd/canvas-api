var settings = {
    totalCost: 0,
    sentRequests: 0,
    domain: '',
    token: '',
    maxPage: 100,
    /**
     * Returns a string used to query endpoints using a course SIS ID
     *
     * @param {string} courseSIS Canvas course SIS ID
     * @returns {String} course SIS ID format for endpoints
     */
    formatCourseSIS: function (courseSIS) { return "sis_course_id:" + courseSIS; },
    /**
     * Returns a string used to query endpoints using a user SIS ID
     *
     * @param {string} courseSIS Canvas user SIS ID
     * @returns {String} user SIS ID format for endpoints
     */
    formatUserSIS: function (userSIS) { return "sis_user_id:" + userSIS; },
    /**
     * Returns a string used to query endpoints using a user SIS ID
     *
     * @param {string} termSIS Canvas term SIS ID
     * @returns {String} term SIS ID format for endpoints
     */
    formatTermSIS: function (termSIS) { return "sis_term_id:" + termSIS; },
};
module.exports = settings;
