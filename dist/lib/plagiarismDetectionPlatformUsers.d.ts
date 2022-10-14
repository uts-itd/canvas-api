import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Get a single Canvas user by Canvas id or LTI id. Tool providers may only access users that have been assigned an assignment associated with their tool.
     * @summary Get a single user (lti)
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getSingleUserLti: (userId: string | number) => Promise<any>;
    /**
     * Get all Canvas users in a group. Tool providers may only access groups that belong to the context the tool is installed in.
     * @summary Get all users in a group (lti)
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    getAllUsersInGroupLti: (groupId: string | number) => Promise<any>;
};
