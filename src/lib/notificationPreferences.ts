import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Fetch all preferences for the given communication channel
     * @summary List preferences
     * @param {string|number} userId Canvas User ID
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    listPreferencesCommunicationChannelId: (
      userId: string | number,
      communicationChannelId: string | number,
    ) =>
      helper.get(
        `/v1/users/${userId}/communication_channels/${communicationChannelId}/notification_preferences`,
      ),
    /**
     * Fetch all preferences for the given communication channel
     * @summary List preferences
     * @param {string|number} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @returns {Promise<any>}
     */
    listPreferencesType: (userId: string | number, type: string, address: string) =>
      helper.get(
        `/v1/users/${userId}/communication_channels/${type}/${address}/notification_preferences`,
      ),
    /**
     * Fetch all notification preference categories for the given communication channel
     * @summary List of preference categories
     * @param {string|number} userId Canvas User ID
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    listOfPreferenceCategories: (
      userId: string | number,
      communicationChannelId: string | number,
    ) =>
      helper.get(
        `/v1/users/${userId}/communication_channels/${communicationChannelId}/notification_preference_categories`,
      ),
    /**
     * Fetch the preference for the given notification for the given communicaiton channel
     * @summary Get a preference
     * @param {string|number} userId Canvas User ID
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @param {string} notification ID
     * @returns {Promise<any>}
     */
    getPreferenceCommunicationChannelId: (
      userId: string | number,
      communicationChannelId: string | number,
      notification: string,
    ) =>
      helper.get(
        `/v1/users/${userId}/communication_channels/${communicationChannelId}/notification_preferences/${notification}`,
      ),
    /**
     * Fetch the preference for the given notification for the given communicaiton channel
     * @summary Get a preference
     * @param {string|number} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @param {string} notification ID
     * @returns {Promise<any>}
     */
    getPreferenceType: (
      userId: string | number,
      type: string,
      address: string,
      notification: string,
    ) =>
      helper.get(
        `/v1/users/${userId}/communication_channels/${type}/${address}/notification_preferences/${notification}`,
      ),
    /**
     * Change the preference for a single notification for a single communication channel
     * @summary Update a preference
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @param {string} notification ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferenceCommunicationChannelId: (
      communicationChannelId: string | number,
      notification: string,
      body: any,
    ) =>
      helper.put(
        `/v1/users/self/communication_channels/${communicationChannelId}/notification_preferences/${notification}`,
        body,
      ),
    /**
     * Change the preference for a single notification for a single communication channel
     * @summary Update a preference
     * @param {string} type ID
     * @param {string} address ID
     * @param {string} notification ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferenceType: (type: string, address: string, notification: string, body: any) =>
      helper.put(
        `/v1/users/self/communication_channels/${type}/${address}/notification_preferences/${notification}`,
        body,
      ),
    /**
     * Change the preferences for multiple notifications based on the category for a single communication channel
     * @summary Update preferences by category
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @param {string} category The name of the category. Must be parameterized (e.g. The category "Course Content" should be "course_content")
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePreferencesByCategory: (
      communicationChannelId: string | number,
      category: string,
      body: any,
    ) =>
      helper.put(
        `/v1/users/self/communication_channels/${communicationChannelId}/notification_preference_categories/${category}`,
        body,
      ),
    /**
     * Change the preferences for multiple notifications for a single communication channel at once
     * @summary Update multiple preferences
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMultiplePreferencesCommunicationChannelId: (
      communicationChannelId: string | number,
      body: any,
    ) =>
      helper.put(
        `/v1/users/self/communication_channels/${communicationChannelId}/notification_preferences`,
        body,
      ),
    /**
     * Change the preferences for multiple notifications for a single communication channel at once
     * @summary Update multiple preferences
     * @param {string} type ID
     * @param {string} address ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMultiplePreferencesType: (type: string, address: string, body: any) =>
      helper.put(
        `/v1/users/self/communication_channels/${type}/${address}/notification_preferences`,
        body,
      ),
  };
}
