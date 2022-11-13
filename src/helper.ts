const helper = {
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

export default helper;
