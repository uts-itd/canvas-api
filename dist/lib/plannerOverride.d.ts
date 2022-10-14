import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Retrieve a planner override for the current user
     * @summary List planner overrides
     * @returns {Promise<any>}
     */
    listPlannerOverrides: () => Promise<any>;
    /**
     * Retrieve a planner override for the current user
     * @summary Show a planner override
     * @param {string|number} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    showPlannerOverride: (overrideId: string | number) => Promise<any>;
    /**
     * Update a planner override's visibilty for the current user
     * @summary Update a planner override
     * @param {string|number} overrideId Canvas Override ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannerOverride: (overrideId: string | number, body: any) => Promise<any>;
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
     * @param {string|number} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    deletePlannerOverride: (overrideId: string | number) => Promise<any>;
};
