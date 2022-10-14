"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Get a single Canvas user by Canvas id or LTI id. Tool providers may only access users that have been assigned an assignment associated with their tool.
         * @summary Get a single user (lti)
         * @param {string|number} userId Canvas User ID
         * @returns {Promise<any>}
         */
        getSingleUserLti: (userId) => helper.get(`/lti/users/${userId}`),
        /**
         * Get all Canvas users in a group. Tool providers may only access groups that belong to the context the tool is installed in.
         * @summary Get all users in a group (lti)
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        getAllUsersInGroupLti: (groupId) => helper.get(`/lti/groups/${groupId}/users`),
    };
}
exports.default = default_1;
