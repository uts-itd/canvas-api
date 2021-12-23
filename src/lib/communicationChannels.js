const helper = require('../helper');

let communicationChannels = {
    /**
     * Returns a paginated list of communication channels for the specified user, sorted by position.
     * @summary List user communication channels
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listUserCommunicationChannels: (userId) => helper.get(`/v1/users/${userId}/communication_channels`),
    /**
     * Creates a new communication channel for the specified user.
     * @summary Create a communication channel
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCommunicationChannel: (userId, body) => helper.post(`/v1/users/${userId}/communication_channels`, body),
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelId: (userId, communicationChannelId) => helper.delete(`/v1/users/${userId}/communication_channels/${communicationChannelId}`),
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelType: (userId, type, address) => helper.delete(`/v1/users/${userId}/communication_channels/${type}/${address}`),
    /**
     * 
     * @summary Delete a push notification endpoint
     * @returns {Promise<{success: true}>}
     */
    deletePushNotificationEndpoint: () => helper.delete(`/v1/users/self/communication_channels/push`),
}

module.exports = communicationChannels;