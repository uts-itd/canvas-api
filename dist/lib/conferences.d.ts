declare function _exports(helper: any): {
    /**
     * Retrieve the paginated list of conferences for this context This API returns a JSON object containing the list of conferences, the key for the list of conferences is "conferences"
     * @summary List conferences
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listConferencesCourses: (courseId: string) => Promise<any>;
    /**
     * Retrieve the paginated list of conferences for this context This API returns a JSON object containing the list of conferences, the key for the list of conferences is "conferences"
     * @summary List conferences
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listConferencesGroups: (groupId: string) => Promise<any>;
};
export = _exports;
