declare function _exports(helper: any): {
    /**
     * Returns a paginated list of communication channels for the specified user, sorted by position.
     * @summary List user communication channels
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listUserCommunicationChannels: (userId: string) => Promise<any>;
    /**
     * Creates a new communication channel for the specified user.
     * @summary Create a communication channel
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCommunicationChannel: (userId: string, body: any) => Promise<any>;
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string} userId Canvas User ID
     * @param {string} communicationChannelId Canvas Communication channel ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelId: (userId: string, communicationChannelId: string) => Promise<any>;
    /**
     * Delete an existing communication channel.
     * @summary Delete a communication channel
     * @param {string} userId Canvas User ID
     * @param {string} type ID
     * @param {string} address ID
     * @returns {Promise<any>}
     */
    deleteCommunicationChannelType: (userId: string, type: string, address: string) => Promise<any>;
    /**
     *
     * @summary Delete a push notification endpoint
     * @returns {Promise<{success: true}>}
     */
    deletePushNotificationEndpoint: () => Promise<{
        success: true;
    }>;
};
export = _exports;
