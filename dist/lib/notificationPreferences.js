var helper = require('../helper');
var notificationPreferences = {
    /**
     * Fetch all preferences for the given communication channel
     * @summary List preferences
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    listPreferencesCommunicationChannelId: function (userId, communicationChannelId) { return helper.get("/v1/users/" + userId + "/communication_channels/" + communicationChannelId + "/notification_preferences"); },
    /**
     * Fetch all preferences for the given communication channel
     * @summary List preferences
     * @param {string} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @returns {Promise<any>}
     */
    listPreferencesType: function (userId, type, address) { return helper.get("/v1/users/" + userId + "/communication_channels/" + type + "/" + address + "/notification_preferences"); },
    /**
     * Fetch all notification preference categories for the given communication channel
     * @summary List of preference categories
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    listOfPreferenceCategories: function (userId, communicationChannelId) { return helper.get("/v1/users/" + userId + "/communication_channels/" + communicationChannelId + "/notification_preference_categories"); },
    /**
     * Fetch the preference for the given notification for the given communicaiton channel
     * @summary Get a preference
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {string} notification ID
     * @returns {Promise<any>}
     */
    getPreferenceCommunicationChannelId: function (userId, communicationChannelId, notification) { return helper.get("/v1/users/" + userId + "/communication_channels/" + communicationChannelId + "/notification_preferences/" + notification); },
    /**
     * Fetch the preference for the given notification for the given communicaiton channel
     * @summary Get a preference
     * @param {string} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @param {string} notification ID
     * @returns {Promise<any>}
     */
    getPreferenceType: function (userId, type, address, notification) { return helper.get("/v1/users/" + userId + "/communication_channels/" + type + "/" + address + "/notification_preferences/" + notification); },
    /**
     * Change the preference for a single notification for a single communication channel
     * @summary Update a preference
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {string} notification ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferenceCommunicationChannelId: function (communicationChannelId, notification, body) { return helper.put("/v1/users/self/communication_channels/" + communicationChannelId + "/notification_preferences/" + notification, body); },
    /**
     * Change the preference for a single notification for a single communication channel
     * @summary Update a preference
     * @param {string} type ID
     * @param {string} address ID
     * @param {string} notification ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferenceType: function (type, address, notification, body) { return helper.put("/v1/users/self/communication_channels/" + type + "/" + address + "/notification_preferences/" + notification, body); },
    /**
     * Change the preferences for multiple notifications based on the category for a single communication channel
     * @summary Update preferences by category
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {string} category The name of the category. Must be parameterized (e.g. The category "Course Content" should be "course_content")
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferencesByCategory: function (communicationChannelId, category, body) { return helper.put("/v1/users/self/communication_channels/" + communicationChannelId + "/notification_preference_categories/" + category, body); },
    /**
     * Change the preferences for multiple notifications for a single communication channel at once
     * @summary Update multiple preferences
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMultiplePreferencesCommunicationChannelId: function (communicationChannelId, body) { return helper.put("/v1/users/self/communication_channels/" + communicationChannelId + "/notification_preferences", body); },
    /**
     * Change the preferences for multiple notifications for a single communication channel at once
     * @summary Update multiple preferences
     * @param {string} type ID
     * @param {string} address ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMultiplePreferencesType: function (type, address, body) { return helper.put("/v1/users/self/communication_channels/" + type + "/" + address + "/notification_preferences", body); },
};
module.exports = notificationPreferences;
