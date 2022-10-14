"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Fetch all preferences for the given communication channel
         * @summary List preferences
         * @param {string|number} userId Canvas User ID
         * @param {string|number} communicationChannelId Canvas Communication channel ID
         * @returns {Promise<any>}
         */
        listPreferencesCommunicationChannelId: (userId, communicationChannelId) => helper.get(`/v1/users/${userId}/communication_channels/${communicationChannelId}/notification_preferences`),
        /**
         * Fetch all preferences for the given communication channel
         * @summary List preferences
         * @param {string|number} userId Canvas User ID
         * @param {string} type ID
         * @param {string} address ID
         * @returns {Promise<any>}
         */
        listPreferencesType: (userId, type, address) => helper.get(`/v1/users/${userId}/communication_channels/${type}/${address}/notification_preferences`),
        /**
         * Fetch all notification preference categories for the given communication channel
         * @summary List of preference categories
         * @param {string|number} userId Canvas User ID
         * @param {string|number} communicationChannelId Canvas Communication channel ID
         * @returns {Promise<any>}
         */
        listOfPreferenceCategories: (userId, communicationChannelId) => helper.get(`/v1/users/${userId}/communication_channels/${communicationChannelId}/notification_preference_categories`),
        /**
         * Fetch the preference for the given notification for the given communicaiton channel
         * @summary Get a preference
         * @param {string|number} userId Canvas User ID
         * @param {string|number} communicationChannelId Canvas Communication channel ID
         * @param {string} notification ID
         * @returns {Promise<any>}
         */
        getPreferenceCommunicationChannelId: (userId, communicationChannelId, notification) => helper.get(`/v1/users/${userId}/communication_channels/${communicationChannelId}/notification_preferences/${notification}`),
        /**
         * Fetch the preference for the given notification for the given communicaiton channel
         * @summary Get a preference
         * @param {string|number} userId Canvas User ID
         * @param {string} type ID
         * @param {string} address ID
         * @param {string} notification ID
         * @returns {Promise<any>}
         */
        getPreferenceType: (userId, type, address, notification) => helper.get(`/v1/users/${userId}/communication_channels/${type}/${address}/notification_preferences/${notification}`),
        /**
         * Change the preference for a single notification for a single communication channel
         * @summary Update a preference
         * @param {string|number} communicationChannelId Canvas Communication channel ID
         * @param {string} notification ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updatePreferenceCommunicationChannelId: (communicationChannelId, notification, body) => helper.put(`/v1/users/self/communication_channels/${communicationChannelId}/notification_preferences/${notification}`, body),
        /**
         * Change the preference for a single notification for a single communication channel
         * @summary Update a preference
         * @param {string} type ID
         * @param {string} address ID
         * @param {string} notification ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updatePreferenceType: (type, address, notification, body) => helper.put(`/v1/users/self/communication_channels/${type}/${address}/notification_preferences/${notification}`, body),
        /**
         * Change the preferences for multiple notifications based on the category for a single communication channel
         * @summary Update preferences by category
         * @param {string|number} communicationChannelId Canvas Communication channel ID
         * @param {string} category The name of the category. Must be parameterized (e.g. The category "Course Content" should be "course_content")
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updatePreferencesByCategory: (communicationChannelId, category, body) => helper.put(`/v1/users/self/communication_channels/${communicationChannelId}/notification_preference_categories/${category}`, body),
        /**
         * Change the preferences for multiple notifications for a single communication channel at once
         * @summary Update multiple preferences
         * @param {string|number} communicationChannelId Canvas Communication channel ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateMultiplePreferencesCommunicationChannelId: (communicationChannelId, body) => helper.put(`/v1/users/self/communication_channels/${communicationChannelId}/notification_preferences`, body),
        /**
         * Change the preferences for multiple notifications for a single communication channel at once
         * @summary Update multiple preferences
         * @param {string} type ID
         * @param {string} address ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateMultiplePreferencesType: (type, address, body) => helper.put(`/v1/users/self/communication_channels/${type}/${address}/notification_preferences`, body),
    };
}
exports.default = default_1;
