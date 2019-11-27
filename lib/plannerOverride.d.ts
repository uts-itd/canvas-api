export = plannerOverride;
declare let plannerOverride: {
    /**
     * Retrieve a planner override for the current user
     * @summary List planner overrides
     * @returns {Promise<any>}
     */
    listPlannerOverrides: () => Promise<any>;
    /**
     * Retrieve a planner override for the current user
     * @summary Show a planner override
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    showPlannerOverride: (overrideId: string) => Promise<any>;
    /**
     * Update a planner override's visibilty for the current user
     * @summary Update a planner override
     * @param {string} overrideId Canvas Override ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannerOverride: (overrideId: string, body: any) => Promise<any>;
    /**
     * Create a planner override for the current user
     * @summary Create a planner override
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPlannerOverride: (body: any) => Promise<any>;
    /**
     * Delete a planner override for the current user
     * @summary Delete a planner override
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    deletePlannerOverride: (overrideId: string) => Promise<any>;
};
