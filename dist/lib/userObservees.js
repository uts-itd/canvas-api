"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * A paginated list of the users that the given user is observing. *Note:* all users are allowed to list their own observees. Administrators can list other users' observees. The returned observees will include an attribute "observation_link_root_account_ids", a list of ids for the root accounts the observer and observee are linked on. The observer will only be able to observe in courses associated with these root accounts.
         * @summary List observees
         * @param {string|number} userId Canvas User ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listObservees: (userId, query) => helper.get(`/v1/users/${userId}/observees`, query),
        /**
         * Register the given user to observe another user, given the observee's credentials. *Note:* all users are allowed to add their own observees, given the observee's credentials or access token are provided. Administrators can add observees given credentials, access token or the {api:UserObserveesController#update observee's id}.
         * @summary Add an observee with credentials
         * @param {string|number} userId Canvas User ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        addObserveeWithCredentials: (userId, body) => helper.post(`/v1/users/${userId}/observees`, body),
        /**
         * Gets information about an observed user. *Note:* all users are allowed to view their own observees.
         * @summary Show an observee
         * @param {string|number} userId Canvas User ID
         * @param {string|number} observeeId Canvas Observee ID
         * @returns {Promise<any>}
         */
        showObservee: (userId, observeeId) => helper.get(`/v1/users/${userId}/observees/${observeeId}`),
        /**
         * Registers a user as being observed by the given user.
         * @summary Add an observee
         * @param {string|number} userId Canvas User ID
         * @param {string|number} observeeId Canvas Observee ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        addObservee: (userId, observeeId, body) => helper.put(`/v1/users/${userId}/observees/${observeeId}`, body),
        /**
         * Unregisters a user as being observed by the given user.
         * @summary Remove an observee
         * @param {string|number} userId Canvas User ID
         * @param {string|number} observeeId Canvas Observee ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        removeObservee: (userId, observeeId, query) => helper.delete(`/v1/users/${userId}/observees/${observeeId}`, query),
    };
}
exports.default = default_1;
