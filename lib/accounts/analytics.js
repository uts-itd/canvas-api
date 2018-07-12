const helper = require('../helper');

let analytics = {
    activity: {
        /**
         * Get department-level participation data.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {number|string} term Term Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_participation
         */
        get: (account, term) => helper.get(`accounts/${account}/analytics/terms/${term}/activity`),
        /**
         * Get department-level participation data for current term.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_participation
         */
        getCurrent: account => helper.get(`accounts/${account}/analytics/current/activity`),
        /**
         * Get department-level participation data for completed term.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_participation
         */
        getCompleted: account => helper.get(`accounts/${account}/analytics/completed/activity`),
    },
    gradeData: {
        /**
         * Get department-level grade data.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {number|string} term Term Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_grades
         */
        get: (account, term) => helper.get(`accounts/${account}/analytics/${term}/grades`),
        /**
         * Get department-level grade data for current term.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_grades
         */
        getCurrent: account => helper.get(`accounts/${account}/analytics/current/grades`),
        /**
         * Get department-level grade data for completed term.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_grades
         */
        getCompleted: account => helper.get(`accounts/${account}/analytics/completed/grades`),
    },
    statistics: {
        /**
         * Get department-level statistics.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {number|string} term Term Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_statistics
         */
        get: (account, term) => helper.get(`accounts/${account}/analytics/${term}/statistics`),
        /**
         * Get department-level statistics for current term.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_statistics
         */
        getCurrent: account => helper.get(`accounts/${account}/analytics/current/statistics`),
        /**
         * Get department-level statistics for completed term.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_statistics
         */
        getCompleted: account => helper.get(`accounts/${account}/analytics/completed/statistics`),
    }
}

module.exports = analytics;