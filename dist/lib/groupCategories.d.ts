import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns a paginated list of group categories in a context
     * @summary List group categories for a context
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listGroupCategoriesForContextAccounts: (accountId: string | number) => Promise<any>;
    /**
     * Returns a paginated list of group categories in a context
     * @summary List group categories for a context
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listGroupCategoriesForContextCourses: (courseId: string | number) => Promise<any>;
    /**
     * Returns the data for a single group category, or a 401 if the caller doesn't have the rights to see it.
     * @summary Get a single group category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @returns {Promise<any>}
     */
    getSingleGroupCategory: (groupCategoryId: string | number) => Promise<any>;
    /**
     * Create a new group category
     * @summary Create a Group Category
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createGroupCategoryAccounts: (accountId: string | number, body: any) => Promise<any>;
    /**
     * Create a new group category
     * @summary Create a Group Category
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createGroupCategoryCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Modifies an existing group category.
     * @summary Update a Group Category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateGroupCategory: (groupCategoryId: string | number, body: any) => Promise<any>;
    /**
     * Deletes a group category and all groups under it. Protected group categories can not be deleted, i.e. "communities" and "student_organized".
     * @summary Delete a Group Category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @returns {Promise<any>}
     */
    deleteGroupCategory: (groupCategoryId: string | number) => Promise<any>;
    /**
     * Returns a paginated list of groups in a group category
     * @summary List groups in group category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @returns {Promise<any>}
     */
    listGroupsInGroupCategory: (groupCategoryId: string | number) => Promise<any>;
    /**
     * Returns a paginated list of users in the group category.
     * @summary List users in group category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUsersInGroupCategory: (groupCategoryId: string | number, query?: any) => Promise<any>;
    /**
     * Assign all unassigned members as evenly as possible among the existing student groups.
     * @summary Assign unassigned members
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    assignUnassignedMembers: (groupCategoryId: string | number, body: any) => Promise<any>;
};
