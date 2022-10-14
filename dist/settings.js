"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultSettings = void 0;
function getDefaultSettings(domain, token) {
    if (!domain || !token) {
        throw new Error('Domain and token are required');
    }
    return {
        totalCost: 0,
        sentRequests: 0,
        domain: domain,
        token: token,
        maxPage: 100,
        /**
         * Warning: This is a can be very dangerous as you will force request many pages even if half of them are beyond the page count of the requested resource.
         * Use with caution.
         */
        forceLastPage: 0,
        /**
         * Returns a string used to query endpoints using a course SIS ID
         *
         * @param {string} courseSIS Canvas course SIS ID
         * @returns {String} course SIS ID format for endpoints
         */
        formatCourseSIS: (courseSIS) => `sis_course_id:${courseSIS}`,
        /**
         * Returns a string used to query endpoints using a user SIS ID
         *
         * @param {string} courseSIS Canvas user SIS ID
         * @returns {String} user SIS ID format for endpoints
         */
        formatUserSIS: (userSIS) => `sis_user_id:${userSIS}`,
        /**
         * Returns a string used to query endpoints using a user SIS ID
         *
         * @param {string} termSIS Canvas term SIS ID
         * @returns {String} term SIS ID format for endpoints
         */
        formatTermSIS: (termSIS) => `sis_term_id:${termSIS}`,
    };
}
exports.getDefaultSettings = getDefaultSettings;
