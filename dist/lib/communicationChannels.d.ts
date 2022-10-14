import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns a paginated list of communication channels for the specified user, sorted by position.
     * @summary List user communication channels
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listUserCommunicationChannels: (userId: string | number) => Promise<any>;
    /**
     * Creates a new communication channel for the specified user.
     * @summary Create a communication channel
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCommunicationChannel: (userId: string | number, body: any) => Promise<any>;
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string|number} userId Canvas User ID
     * @param {string|number} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelId: (userId: string | number, communicationChannelId: string | number) => Promise<any>;
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string|number} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelType: (userId: string | number, type: string, address: string) => Promise<any>;
    /**
     *
     * @summary Delete a push notification endpoint
     * @returns {Promise<{success: true}>}
     */
    deletePushNotificationEndpoint: () => Promise<any>;
};
