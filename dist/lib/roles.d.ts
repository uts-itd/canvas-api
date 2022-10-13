declare function _exports(helper: any): {
    /**
     * A paginated list of the roles available to an account.
     * @summary List roles
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listRoles: (accountId: string, query?: any) => Promise<any>;
    /**
     * Retrieve information about a single role
     * @summary Get a single role
     * @param {string} roleId Canvas Role ID
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleRole: (roleId: string, accountId: string, query: any) => Promise<any>;
    /**
     * Create a new course-level or account-level role.
     * @summary Create a new role
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewRole: (accountId: string, body: any) => Promise<any>;
    /**
     * Deactivates a custom role. This hides it in the user interface and prevents it from being assigned to new users. Existing users assigned to the role will continue to function with the same permissions they had previously. Built-in roles cannot be deactivated.
     * @summary Deactivate a role
     * @param {string} accountId Canvas Account ID
     * @param {string} roleId Canvas Role ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deactivateRole: (accountId: string, roleId: string, query: any) => Promise<any>;
    /**
     * Re-activates an inactive role (allowing it to be assigned to new users)
     * @summary Activate a role
     * @param {string} accountId Canvas Account ID
     * @param {string} roleId Canvas Role ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    activateRole: (accountId: string, roleId: string, body: any) => Promise<any>;
    /**
     * Update permissions for an existing role. Recognized roles are: TeacherEnrollment StudentEnrollment TaEnrollment ObserverEnrollment DesignerEnrollment AccountAdmin Any previously created custom role
     * @summary Update a role
     * @param {string} accountId Canvas Account ID
     * @param {string} roleId Canvas Role ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateRole: (accountId: string, roleId: string, body: any) => Promise<any>;
};
export = _exports;
