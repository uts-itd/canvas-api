import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Returns a paginated list of group categories in a context
     * @summary List group categories for a context
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listGroupCategoriesForContextAccounts: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/group_categories`),
    /**
     * Returns a paginated list of group categories in a context
     * @summary List group categories for a context
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listGroupCategoriesForContextCourses: (courseId: string | number) =>
      helper.get(`/v1/courses/${courseId}/group_categories`),
    /**
     * Returns the data for a single group category, or a 401 if the caller doesn't have the rights to see it.
     * @summary Get a single group category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @returns {Promise<any>}
     */
    getSingleGroupCategory: (groupCategoryId: string | number) =>
      helper.get(`/v1/group_categories/${groupCategoryId}`),
    /**
     * Create a new group category
     * @summary Create a Group Category
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createGroupCategoryAccounts: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/group_categories`, body),
    /**
     * Create a new group category
     * @summary Create a Group Category
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createGroupCategoryCourses: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/group_categories`, body),
    /**
     * Modifies an existing group category.
     * @summary Update a Group Category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateGroupCategory: (groupCategoryId: string | number, body: any) =>
      helper.put(`/v1/group_categories/${groupCategoryId}`, body),
    /**
     * Deletes a group category and all groups under it. Protected group categories can not be deleted, i.e. "communities" and "student_organized".
     * @summary Delete a Group Category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @returns {Promise<any>}
     */
    deleteGroupCategory: (groupCategoryId: string | number) =>
      helper.delete(`/v1/group_categories/${groupCategoryId}`),
    /**
     * Returns a paginated list of groups in a group category
     * @summary List groups in group category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @returns {Promise<any>}
     */
    listGroupsInGroupCategory: (groupCategoryId: string | number) =>
      helper.get(`/v1/group_categories/${groupCategoryId}/groups`),
    /**
     * Returns a paginated list of users in the group category.
     * @summary List users in group category
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUsersInGroupCategory: (groupCategoryId: string | number, query?: any) =>
      helper.get(`/v1/group_categories/${groupCategoryId}/users`, query),
    /**
     * Assign all unassigned members as evenly as possible among the existing student groups.
     * @summary Assign unassigned members
     * @param {string|number} groupCategoryId Canvas Group category ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    assignUnassignedMembers: (groupCategoryId: string | number, body: any) =>
      helper.post(`/v1/group_categories/${groupCategoryId}/assign_unassigned_members`, body),
  };
}
