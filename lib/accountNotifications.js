const helper = require('../helper');

let accountNotifications = {
    /**
     * Returns a list of all global notifications in the account for the current user Any notifications that have been closed by the user will not be returned
     * @summary Index of active global notification for the user
     * @param {string} accountId Canvas Account ID
     * @returns {array}
     */
    indexOfActiveGlobalNotificationForUser: (accountId) => helper.get(`/v1/accounts/${accountId}/account_notifications`),
    /**
     * Returns a global notification for the current user A notification that has been closed by the user will not be returned
     * @summary Show a global notification
     * @param {string} accountId Canvas Account ID
     * @param {string} accountNotificationId Canvas Account notification ID
     * @returns {AccountNotification}
     */
    showGlobalNotification: (accountId, accountNotificationId) => helper.get(`/v1/accounts/${accountId}/account_notifications/${accountNotificationId}`),
    /**
     * If the current user no long wants to see this notification it can be excused with this call
     * @summary Close notification for user
     * @param {string} accountId Canvas Account ID
     * @param {string} accountNotificationId Canvas Account notification ID
     * @returns {AccountNotification}
     */
    closeNotificationForUser: (accountId, accountNotificationId) => helper.delete(`/v1/accounts/${accountId}/account_notifications/${accountNotificationId}`),
    /**
     * Create and return a new global notification for an account.
     * @summary Create a global notification
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    createGlobalNotification: (accountId, body) => helper.post(`/v1/accounts/${accountId}/account_notifications`, body),
    /**
     * Update global notification for an account.
     * @summary Update a global notification
     * @param {string} accountId Canvas Account ID
     * @param {string} accountNotificationId Canvas Account notification ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    updateGlobalNotification: (accountId, accountNotificationId, body) => helper.put(`/v1/accounts/${accountId}/account_notifications/${accountNotificationId}`, body),
}

module.exports = accountNotifications;