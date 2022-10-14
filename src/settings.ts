export function getDefaultSettings(domain: string, token: string) {
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
    formatCourseSIS: (courseSIS: string) => `sis_course_id:${courseSIS}`,
    /**
     * Returns a string used to query endpoints using a user SIS ID
     *
     * @param {string} courseSIS Canvas user SIS ID
     * @returns {String} user SIS ID format for endpoints
     */
    formatUserSIS: (userSIS: string) => `sis_user_id:${userSIS}`,
    /**
     * Returns a string used to query endpoints using a user SIS ID
     *
     * @param {string} termSIS Canvas term SIS ID
     * @returns {String} term SIS ID format for endpoints
     */
    formatTermSIS: (termSIS: string) => `sis_term_id:${termSIS}`,
  };
}

// interface iSettings {
//   totalCost: number;
//   sentRequests: number;
//   domain: string;
//   token: string;
//   maxPage: number;
//   forceLastPage: number;
//   formatCourseSIS: (courseSIS: string) => string;
//   formatUserSIS: (userSIS: string) => string;
//   formatTermSIS: (termSIS: string) => string;
// }

export type Settings = ReturnType<typeof getDefaultSettings>;