declare function _exports(helper: any): {
    /**
     * Returns a paginated list of navigation tabs available in the current context.
     * @summary List available tabs for a course or group
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAvailableTabsForCourseOrGroupCourses: (courseId: string, query?: any) => Promise<any>;
    /**
     * Returns a paginated list of navigation tabs available in the current context.
     * @summary List available tabs for a course or group
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAvailableTabsForCourseOrGroupGroups: (groupId: string, query?: any) => Promise<any>;
    /**
     * Home and Settings tabs are not manageable, and can't be hidden or moved Returns a tab object
     * @summary Update a tab for a course
     * @param {string} courseId Canvas Course ID
     * @param {string} tabId Canvas Tab ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateTabForCourse: (courseId: string, tabId: string, body: any) => Promise<any>;
};
export = _exports;
