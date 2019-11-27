export = accountNotifications;
declare let accountNotifications: {
    /**
     * Returns a list of all global notifications in the account for the current user Any notifications that have been closed by the user will not be returned
     * @summary Index of active global notification for the user
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    indexOfActiveGlobalNotificationForUser: (accountId: string) => Promise<any>;
    /**
     * Returns a global notification for the current user A notification that has been closed by the user will not be returned
     * @summary Show a global notification
     * @param {string} accountId Canvas Account ID
     * @param {string} accountNotificationId Canvas Account notification ID
     * @returns {Promise<any>}
     */
    showGlobalNotification: (accountId: string, accountNotificationId: string) => Promise<any>;
    /**
     * If the current user no long wants to see this notification it can be excused with this call
     * @summary Close notification for user
     * @param {string} accountId Canvas Account ID
     * @param {string} accountNotificationId Canvas Account notification ID
     * @returns {Promise<any>}
     */
    closeNotificationForUser: (accountId: string, accountNotificationId: string) => Promise<any>;
    /**
     * Create and return a new global notification for an account.
     * @summary Create a global notification
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createGlobalNotification: (accountId: string, body: any) => Promise<any>;
    /**
     * Update global notification for an account.
     * @summary Update a global notification
     * @param {string} accountId Canvas Account ID
     * @param {string} accountNotificationId Canvas Account notification ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateGlobalNotification: (accountId: string, accountNotificationId: string, body: any) => Promise<any>;
};
