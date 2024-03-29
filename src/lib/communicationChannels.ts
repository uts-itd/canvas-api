import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns a paginated list of communication channels for the specified user, sorted by position.
     * @summary List user communication channels
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listUserCommunicationChannels: (userId: string | number) =>
      helper.get(`/v1/users/${userId}/communication_channels`),
    /**
     * Creates a new communication channel for the specified user.
     * @summary Create a communication channel
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCommunicationChannel: (userId: string | number, body: any) =>
      helper.post(`/v1/users/${userId}/communication_channels`, body),
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string|number} userId Canvas User ID
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelId: (
      userId: string | number,
      communicationChannelId: string | number,
    ) => helper.delete(`/v1/users/${userId}/communication_channels/${communicationChannelId}`),
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string|number} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelType: (userId: string | number, type: string, address: string) =>
      helper.delete(`/v1/users/${userId}/communication_channels/${type}/${address}`),
    /**
     *
     * @summary Delete a push notification endpoint
     * @returns {Promise<{success: true}>}
     */
    deletePushNotificationEndpoint: () =>
      helper.delete('/v1/users/self/communication_channels/push'),
  };
}
