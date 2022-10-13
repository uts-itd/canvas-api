declare function _exports(helper: any): {
    /**
     * Fetch all preferences for the given communication channel
     * @summary List preferences
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    listPreferencesCommunicationChannelId: (userId: string, communicationChannelId: string) => Promise<any>;
    /**
     * Fetch all preferences for the given communication channel
     * @summary List preferences
     * @param {string} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @returns {Promise<any>}
     */
    listPreferencesType: (userId: string, type: string, address: string) => Promise<any>;
    /**
     * Fetch all notification preference categories for the given communication channel
     * @summary List of preference categories
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    listOfPreferenceCategories: (userId: string, communicationChannelId: string) => Promise<any>;
    /**
     * Fetch the preference for the given notification for the given communicaiton channel
     * @summary Get a preference
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {string} notification ID
     * @returns {Promise<any>}
     */
    getPreferenceCommunicationChannelId: (userId: string, communicationChannelId: string, notification: string) => Promise<any>;
    /**
     * Fetch the preference for the given notification for the given communicaiton channel
     * @summary Get a preference
     * @param {string} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @param {string} notification ID
     * @returns {Promise<any>}
     */
    getPreferenceType: (userId: string, type: string, address: string, notification: string) => Promise<any>;
    /**
     * Change the preference for a single notification for a single communication channel
     * @summary Update a preference
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {string} notification ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferenceCommunicationChannelId: (communicationChannelId: string, notification: string, body: any) => Promise<any>;
    /**
     * Change the preference for a single notification for a single communication channel
     * @summary Update a preference
     * @param {string} type ID
     * @param {string} address ID
     * @param {string} notification ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferenceType: (type: string, address: string, notification: string, body: any) => Promise<any>;
    /**
     * Change the preferences for multiple notifications based on the category for a single communication channel
     * @summary Update preferences by category
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {string} category The name of the category. Must be parameterized (e.g. The category "Course Content" should be "course_content")
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferencesByCategory: (communicationChannelId: string, category: string, body: any) => Promise<any>;
    /**
     * Change the preferences for multiple notifications for a single communication channel at once
     * @summary Update multiple preferences
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMultiplePreferencesCommunicationChannelId: (communicationChannelId: string, body: any) => Promise<any>;
    /**
     * Change the preferences for multiple notifications for a single communication channel at once
     * @summary Update multiple preferences
     * @param {string} type ID
     * @param {string} address ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMultiplePreferencesType: (type: string, address: string, body: any) => Promise<any>;
};
export = _exports;
