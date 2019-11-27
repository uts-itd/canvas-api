export = userObservees;
declare let userObservees: {
    /**
     * A paginated list of the users that the given user is observing. *Note:* all users are allowed to list their own observees. Administrators can list other users' observees. The returned observees will include an attribute "observation_link_root_account_ids", a list of ids for the root accounts the observer and observee are linked on. The observer will only be able to observe in courses associated with these root accounts.
     * @summary List observees
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listObservees: (userId: string, query?: any) => Promise<any>;
    /**
     * Register the given user to observe another user, given the observee's credentials. *Note:* all users are allowed to add their own observees, given the observee's credentials or access token are provided. Administrators can add observees given credentials, access token or the {api:UserObserveesController#update observee's id}.
     * @summary Add an observee with credentials
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    addObserveeWithCredentials: (userId: string, body: any) => Promise<any>;
    /**
     * Gets information about an observed user. *Note:* all users are allowed to view their own observees.
     * @summary Show an observee
     * @param {string} userId Canvas User ID
     * @param {string} observeeId Canvas Observee ID
     * @returns {Promise<any>}
     */
    showObservee: (userId: string, observeeId: string) => Promise<any>;
    /**
     * Registers a user as being observed by the given user.
     * @summary Add an observee
     * @param {string} userId Canvas User ID
     * @param {string} observeeId Canvas Observee ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    addObservee: (userId: string, observeeId: string, body: any) => Promise<any>;
    /**
     * Unregisters a user as being observed by the given user.
     * @summary Remove an observee
     * @param {string} userId Canvas User ID
     * @param {string} observeeId Canvas Observee ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeObservee: (userId: string, observeeId: string, query?: any) => Promise<any>;
};
