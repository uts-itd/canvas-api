let settings = {
    _perPage: 10,
    totalCost: 0,
    sentRequests: 0,
    domain: '',
    token: '',
    /**
     * Returns a string used to query endpoints using a course SIS ID
     * 
     * @param {string} courseSIS Canvas course SIS ID
     * @returns {string} course SIS ID format for endpoints
     */
    formatCourseSIS: (courseSIS) => 'sis_course_id:' + courseSIS,
    /**
     * Returns a string used to query endpoints using a user SIS ID
     * 
     * @param {string} courseSIS Canvas user SIS ID
     * @returns {string} user SIS ID format for endpoints
     */
    formatUserSIS: (userSIS) => 'sis_user_id:' + userSIS,
    setPageCount: (count) => settings._perPage = count,
};

module.exports = settings;