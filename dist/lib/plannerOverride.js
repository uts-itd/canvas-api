const helper = require('../helper');
let plannerOverride = {
    /**
     * Retrieve a planner override for the current user
     * @summary List planner overrides
     * @returns {Promise<any>}
     */
    listPlannerOverrides: () => helper.get(`/v1/planner/overrides`),
    /**
     * Retrieve a planner override for the current user
     * @summary Show a planner override
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    showPlannerOverride: (overrideId) => helper.get(`/v1/planner/overrides/${overrideId}`),
    /**
     * Update a planner override's visibilty for the current user
     * @summary Update a planner override
     * @param {string} overrideId Canvas Override ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannerOverride: (overrideId, body) => helper.put(`/v1/planner/overrides/${overrideId}`, body),
    /**
     * Create a planner override for the current user
     * @summary Create a planner override
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPlannerOverride: (body) => helper.post(`/v1/planner/overrides`, body),
    /**
     * Delete a planner override for the current user
     * @summary Delete a planner override
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    deletePlannerOverride: (overrideId) => helper.delete(`/v1/planner/overrides/${overrideId}`),
};
module.exports = plannerOverride;
