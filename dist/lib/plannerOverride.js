var helper = require('../helper');
var plannerOverride = {
    /**
     * Retrieve a planner override for the current user
     * @summary List planner overrides
     * @returns {Promise<any>}
     */
    listPlannerOverrides: function () { return helper.get("/v1/planner/overrides"); },
    /**
     * Retrieve a planner override for the current user
     * @summary Show a planner override
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    showPlannerOverride: function (overrideId) { return helper.get("/v1/planner/overrides/" + overrideId); },
    /**
     * Update a planner override's visibilty for the current user
     * @summary Update a planner override
     * @param {string} overrideId Canvas Override ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannerOverride: function (overrideId, body) { return helper.put("/v1/planner/overrides/" + overrideId, body); },
    /**
     * Create a planner override for the current user
     * @summary Create a planner override
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPlannerOverride: function (body) { return helper.post("/v1/planner/overrides", body); },
    /**
     * Delete a planner override for the current user
     * @summary Delete a planner override
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    deletePlannerOverride: function (overrideId) { return helper.delete("/v1/planner/overrides/" + overrideId); },
};
module.exports = plannerOverride;
//# sourceMappingURL=plannerOverride.js.map