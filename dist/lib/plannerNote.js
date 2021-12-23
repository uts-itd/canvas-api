var helper = require('../helper');
var plannerNote = {
    /**
     * Retrieve the paginated list of planner notes Retrieve planner note for a user
     * @summary List planner notes
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listPlannerNotes: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/planner_notes", query);
    },
    /**
     * Retrieve a planner note for the current user
     * @summary Show a PlannerNote
     * @param {string} plannerNoteId Canvas Planner note ID
     * @returns {Promise<any>}
     */
    showPlannernote: function (plannerNoteId) { return helper.get("/v1/planner_notes/" + plannerNoteId); },
    /**
     * Update a planner note for the current user
     * @summary Update a PlannerNote
     * @param {string} plannerNoteId Canvas Planner note ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannernote: function (plannerNoteId, body) { return helper.put("/v1/planner_notes/" + plannerNoteId, body); },
    /**
     * Create a planner note for the current user
     * @summary Create a planner note
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPlannerNote: function (body) { return helper.post("/v1/planner_notes", body); },
    /**
     * Delete a planner note for the current user
     * @summary Delete a planner note
     * @param {string} plannerNoteId Canvas Planner note ID
     * @returns {Promise<any>}
     */
    deletePlannerNote: function (plannerNoteId) { return helper.delete("/v1/planner_notes/" + plannerNoteId); },
};
module.exports = plannerNote;
//# sourceMappingURL=plannerNote.js.map