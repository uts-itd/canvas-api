const helper = require('../helper');

let groups = {
    /**
     * Returns a paginated list of active groups for the current user.
     * @summary List your groups
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listYourGroups: (query='') => helper.get(`/v1/users/self/groups`, query),
    /**
     * Returns the paginated list of active groups in the given context that are visible to user.
     * @summary List the groups available in a context.
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listGroupsAvailableInContextAccounts: (accountId, query='') => helper.get(`/v1/accounts/${accountId}/groups`, query),
    /**
     * Returns the paginated list of active groups in the given context that are visible to user.
     * @summary List the groups available in a context.
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listGroupsAvailableInContextCourses: (courseId, query='') => helper.get(`/v1/courses/${courseId}/groups`, query),
    /**
     * Returns the data for a single group, or a 401 if the caller doesn't have the rights to see it.
     * @summary Get a single group
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Group}
     */
    getSingleGroup: (groupId, query='') => helper.get(`/v1/groups/${groupId}`, query),
    /**
     * Creates a new group. Groups created using the "/api/v1/groups/" endpoint will be community groups.
     * @summary Create a group
     * @param {Object} body JSON form fields
     * @returns {Group}
     */
    createGroupGroups: (body) => helper.post(`/v1/groups`, body),
    /**
     * Creates a new group. Groups created using the "/api/v1/groups/" endpoint will be community groups.
     * @summary Create a group
     * @param {string} groupCategoryId Canvas Group category ID
     * @param {Object} body JSON form fields
     * @returns {Group}
     */
    createGroupGroupCategories: (groupCategoryId, body) => helper.post(`/v1/group_categories/${groupCategoryId}/groups`, body),
    /**
     * Modifies an existing group. Note that to set an avatar image for the group, you must first upload the image file to the group, and the use the id in the response as the argument to this function. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
     * @summary Edit a group
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Group}
     */
    editGroup: (groupId, body) => helper.put(`/v1/groups/${groupId}`, body),
    /**
     * Deletes a group and removes all members.
     * @summary Delete a group
     * @param {string} groupId Canvas Group ID
     * @returns {Group}
     */
    deleteGroup: (groupId) => helper.delete(`/v1/groups/${groupId}`),
    /**
     * Sends an invitation to all supplied email addresses which will allow the receivers to join the group.
     * @summary Invite others to a group
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    inviteOthersToGroup: (groupId, body) => helper.post(`/v1/groups/${groupId}/invite`, body),
    /**
     * Returns a paginated list of users in the group.
     * @summary List group's users
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listGroupSUsers: (groupId, query='') => helper.get(`/v1/groups/${groupId}/users`, query),
    /**
     * Upload a file to the group. This API endpoint is the first step in uploading a file to a group. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Only those with the "Manage Files" permission on a group can upload files to the group. By default, this is anybody participating in the group, or any admin over the group.
     * @summary Upload a file
     * @param {string} groupId Canvas Group ID
     * @returns {void}
     */
    uploadFile: (groupId) => helper.post(`/v1/groups/${groupId}/files`),
    /**
     * Preview html content processed for this group
     * @summary Preview processed html
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    previewProcessedHtml: (groupId, body) => helper.post(`/v1/groups/${groupId}/preview_html`, body),
    /**
     * Returns the current user's group-specific activity stream, paginated. For full documentation, see the API documentation for the user activity stream, in the user api.
     * @summary Group activity stream
     * @param {string} groupId Canvas Group ID
     * @returns {void}
     */
    groupActivityStream: (groupId) => helper.get(`/v1/groups/${groupId}/activity_stream`),
    /**
     * Returns a summary of the current user's group-specific activity stream. For full documentation, see the API documentation for the user activity stream summary, in the user api.
     * @summary Group activity stream summary
     * @param {string} groupId Canvas Group ID
     * @returns {void}
     */
    groupActivityStreamSummary: (groupId) => helper.get(`/v1/groups/${groupId}/activity_stream/summary`),
    /**
     * A paginated list of the members of a group.
     * @summary List group memberships
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listGroupMemberships: (groupId, query='') => helper.get(`/v1/groups/${groupId}/memberships`, query),
    /**
     * Returns the group membership with the given membership id or user id.
     * @summary Get a single group membership
     * @param {string} groupId Canvas Group ID
     * @param {string} membershipId Canvas Membership ID
     * @returns {GroupMembership}
     */
    getSingleGroupMembershipMemberships: (groupId, membershipId) => helper.get(`/v1/groups/${groupId}/memberships/${membershipId}`),
    /**
     * Returns the group membership with the given membership id or user id.
     * @summary Get a single group membership
     * @param {string} groupId Canvas Group ID
     * @param {string} userId Canvas User ID
     * @returns {GroupMembership}
     */
    getSingleGroupMembershipUsers: (groupId, userId) => helper.get(`/v1/groups/${groupId}/users/${userId}`),
    /**
     * Join, or request to join, a group, depending on the join_level of the group. If the membership or join request already exists, then it is simply returned
     * @summary Create a membership
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {GroupMembership}
     */
    createMembership: (groupId, body) => helper.post(`/v1/groups/${groupId}/memberships`, body),
    /**
     * Accept a membership request, or add/remove moderator rights.
     * @summary Update a membership
     * @param {string} groupId Canvas Group ID
     * @param {string} membershipId Canvas Membership ID
     * @param {Object} body JSON form fields
     * @returns {GroupMembership}
     */
    updateMembershipMemberships: (groupId, membershipId, body) => helper.put(`/v1/groups/${groupId}/memberships/${membershipId}`, body),
    /**
     * Accept a membership request, or add/remove moderator rights.
     * @summary Update a membership
     * @param {string} groupId Canvas Group ID
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {GroupMembership}
     */
    updateMembershipUsers: (groupId, userId, body) => helper.put(`/v1/groups/${groupId}/users/${userId}`, body),
    /**
     * Leave a group if you are allowed to leave (some groups, such as sets of course groups created by teachers, cannot be left). You may also use 'self' in place of a membership_id.
     * @summary Leave a group
     * @param {string} groupId Canvas Group ID
     * @param {string} membershipId Canvas Membership ID
     * @returns {void}
     */
    leaveGroupMemberships: (groupId, membershipId) => helper.delete(`/v1/groups/${groupId}/memberships/${membershipId}`),
    /**
     * Leave a group if you are allowed to leave (some groups, such as sets of course groups created by teachers, cannot be left). You may also use 'self' in place of a membership_id.
     * @summary Leave a group
     * @param {string} groupId Canvas Group ID
     * @param {string} userId Canvas User ID
     * @returns {void}
     */
    leaveGroupUsers: (groupId, userId) => helper.delete(`/v1/groups/${groupId}/users/${userId}`),
}

module.exports = groups;