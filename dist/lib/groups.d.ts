import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns a paginated list of active groups for the current user.
     * @summary List your groups
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listYourGroups: (query?: any) => Promise<any>;
    /**
     * Returns the paginated list of active groups in the given context that are visible to user.
     * @summary List the groups available in a context.
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listGroupsAvailableInContextAccounts: (accountId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of active groups in the given context that are visible to user.
     * @summary List the groups available in a context.
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listGroupsAvailableInContextCourses: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the data for a single group, or a 401 if the caller doesn't have the rights to see it.
     * @summary Get a single group
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleGroup: (groupId: string | number, query?: any) => Promise<any>;
    /**
     * Creates a new group. Groups created using the "/api/v1/groups/" endpoint will be community groups.
     * @summary Create a group
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createGroupGroups: (body: any) => Promise<any>;
    /**
     * Creates a new group. Groups created using the "/api/v1/groups/" endpoint will be community groups.
     * @summary Create a group
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createGroupGroupCategories: (groupCategoryId: string | number, body: any) => Promise<any>;
    /**
     * Modifies an existing group. Note that to set an avatar image for the group, you must first upload the image file to the group, and the use the id in the response as the argument to this function. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
     * @summary Edit a group
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editGroup: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Deletes a group and removes all members.
     * @summary Delete a group
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    deleteGroup: (groupId: string | number) => Promise<any>;
    /**
     * Sends an invitation to all supplied email addresses which will allow the receivers to join the group.
     * @summary Invite others to a group
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    inviteOthersToGroup: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Returns a paginated list of users in the group.
     * @summary List group's users
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listGroupSUsers: (groupId: string | number, query?: any) => Promise<any>;
    /**
     * Upload a file to the group. This API endpoint is the first step in uploading a file to a group. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Only those with the "Manage Files" permission on a group can upload files to the group. By default, this is anybody participating in the group, or any admin over the group.
     * @summary Upload a file
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    uploadFile: (groupId: string | number) => Promise<any>;
    /**
     * Preview html content processed for this group
     * @summary Preview processed html
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    previewProcessedHtml: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Returns the current user's group-specific activity stream, paginated. For full documentation, see the API documentation for the user activity stream, in the user api.
     * @summary Group activity stream
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    groupActivityStream: (groupId: string | number) => Promise<any>;
    /**
     * Returns a summary of the current user's group-specific activity stream. For full documentation, see the API documentation for the user activity stream summary, in the user api.
     * @summary Group activity stream summary
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    groupActivityStreamSummary: (groupId: string | number) => Promise<any>;
    /**
     * A paginated list of the members of a group.
     * @summary List group memberships
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listGroupMemberships: (groupId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the group membership with the given membership id or user id.
     * @summary Get a single group membership
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} membershipId Canvas Membership ID
     * @returns {Promise<any>}
     */
    getSingleGroupMembershipMemberships: (groupId: string | number, membershipId: string | number) => Promise<any>;
    /**
     * Returns the group membership with the given membership id or user id.
     * @summary Get a single group membership
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getSingleGroupMembershipUsers: (groupId: string | number, userId: string | number) => Promise<any>;
    /**
     * Join, or request to join, a group, depending on the join_level of the group. If the membership or join request already exists, then it is simply returned
     * @summary Create a membership
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createMembership: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Accept a membership request, or add/remove moderator rights.
     * @summary Update a membership
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} membershipId Canvas Membership ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMembershipMemberships: (groupId: string | number, membershipId: string | number, body: any) => Promise<any>;
    /**
     * Accept a membership request, or add/remove moderator rights.
     * @summary Update a membership
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMembershipUsers: (groupId: string | number, userId: string | number, body: any) => Promise<any>;
    /**
     * Leave a group if you are allowed to leave (some groups, such as sets of course groups created by teachers, cannot be left). You may also use 'self' in place of a membership_id.
     * @summary Leave a group
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} membershipId Canvas Membership ID
     * @returns {Promise<any>}
     */
    leaveGroupMemberships: (groupId: string | number, membershipId: string | number) => Promise<any>;
    /**
     * Leave a group if you are allowed to leave (some groups, such as sets of course groups created by teachers, cannot be left). You may also use 'self' in place of a membership_id.
     * @summary Leave a group
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    leaveGroupUsers: (groupId: string | number, userId: string | number) => Promise<any>;
};
