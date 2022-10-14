import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * A paginated list of the roles available to an account.
     * @summary List roles
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listRoles: (accountId: string | number, query?: any) =>
      helper.get(`/v1/accounts/${accountId}/roles`, query),
    /**
     * Retrieve information about a single role
     * @summary Get a single role
     * @param {string|number} roleId Canvas Role ID
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRole: (roleId: string | number, accountId: string | number, query?: any) =>
      helper.get(`/v1/accounts/${accountId}/roles/${roleId}`, query),
    /**
     * Create a new course-level or account-level role.
     * @summary Create a new role
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewRole: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/roles`, body),
    /**
     * Deactivates a custom role. This hides it in the user interface and prevents it from being assigned to new users. Existing users assigned to the role will continue to function with the same permissions they had previously. Built-in roles cannot be deactivated.
     * @summary Deactivate a role
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} roleId Canvas Role ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deactivateRole: (accountId: string | number, roleId: string | number, query?: any) =>
      helper.delete(`/v1/accounts/${accountId}/roles/${roleId}`, query),
    /**
     * Re-activates an inactive role (allowing it to be assigned to new users)
     * @summary Activate a role
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} roleId Canvas Role ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    activateRole: (accountId: string | number, roleId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/roles/${roleId}/activate`, body),
    /**
     * Update permissions for an existing role. Recognized roles are: TeacherEnrollment StudentEnrollment TaEnrollment ObserverEnrollment DesignerEnrollment AccountAdmin Any previously created custom role
     * @summary Update a role
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} roleId Canvas Role ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateRole: (accountId: string | number, roleId: string | number, body: any) =>
      helper.put(`/v1/accounts/${accountId}/roles/${roleId}`, body),
  };
}
