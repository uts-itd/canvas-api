"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Returns a list of all global notifications in the account for the current user Any notifications that have been closed by the user will not be returned
         * @summary Index of active global notification for the user
         * @param {string|number} accountId Canvas Account ID
         * @returns {Promise<any>}
         */
        indexOfActiveGlobalNotificationForUser: (accountId) => helper.get(`/v1/accounts/${accountId}/account_notifications`),
        /**
         * Returns a global notification for the current user A notification that has been closed by the user will not be returned
         * @summary Show a global notification
         * @param {string|number} accountId Canvas Account ID
         * @param {string|number} accountNotificationId Canvas Account notification ID
         * @returns {Promise<any>}
         */
        showGlobalNotification: (accountId, accountNotificationId) => helper.get(`/v1/accounts/${accountId}/account_notifications/${accountNotificationId}`),
        /**
         * If the current user no long wants to see this notification it can be excused with this call
         * @summary Close notification for user
         * @param {string|number} accountId Canvas Account ID
         * @param {string|number} accountNotificationId Canvas Account notification ID
         * @returns {Promise<any>}
         */
        closeNotificationForUser: (accountId, accountNotificationId) => helper.delete(`/v1/accounts/${accountId}/account_notifications/${accountNotificationId}`),
        /**
         * Create and return a new global notification for an account.
         * @summary Create a global notification
         * @param {string|number} accountId Canvas Account ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createGlobalNotification: (accountId, body) => helper.post(`/v1/accounts/${accountId}/account_notifications`, body),
        /**
         * Update global notification for an account.
         * @summary Update a global notification
         * @param {string|number} accountId Canvas Account ID
         * @param {string|number} accountNotificationId Canvas Account notification ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateGlobalNotification: (accountId, accountNotificationId, body) => helper.put(`/v1/accounts/${accountId}/account_notifications/${accountNotificationId}`, body),
    };
}
exports.default = default_1;
