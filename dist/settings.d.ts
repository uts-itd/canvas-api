export declare function getDefaultSettings(domain: string, token: string): {
    totalCost: number;
    sentRequests: number;
    domain: string;
    token: string;
    maxPage: number;
    /**
     * Warning: This is a can be very dangerous as you will force request many pages even if half of them are beyond the page count of the requested resource.
     * Use with caution.
     */
    forceLastPage: number;
    /**
     * Returns a string used to query endpoints using a course SIS ID
     *
     * @param {string} courseSIS Canvas course SIS ID
     * @returns {String} course SIS ID format for endpoints
     */
    formatCourseSIS: (courseSIS: string) => string;
    /**
     * Returns a string used to query endpoints using a user SIS ID
     *
     * @param {string} courseSIS Canvas user SIS ID
     * @returns {String} user SIS ID format for endpoints
     */
    formatUserSIS: (userSIS: string) => string;
    /**
     * Returns a string used to query endpoints using a user SIS ID
     *
     * @param {string} termSIS Canvas term SIS ID
     * @returns {String} term SIS ID format for endpoints
     */
    formatTermSIS: (termSIS: string) => string;
};
export declare type Settings = ReturnType<typeof getDefaultSettings>;
