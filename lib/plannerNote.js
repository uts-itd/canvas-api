const helper = require('../helper');

let plannerNote = {
    /**
     * Retrieve the paginated list of planner notes Retrieve planner note for a user
     * @summary List planner notes
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listPlannerNotes: (query='') => helper.get(`/v1/planner_notes`, query),
    /**
     * Retrieve a planner note for the current user
     * @summary Show a PlannerNote
     * @param {string} plannerNoteId Canvas Planner note ID
     * @returns {PlannerNote}
     */
    showPlannernote: (plannerNoteId) => helper.get(`/v1/planner_notes/${plannerNoteId}`),
    /**
     * Update a planner note for the current user
     * @summary Update a PlannerNote
     * @param {string} plannerNoteId Canvas Planner note ID
     * @param {Object} body JSON form fields
     * @returns {PlannerNote}
     */
    updatePlannernote: (plannerNoteId, body) => helper.put(`/v1/planner_notes/${plannerNoteId}`, body),
    /**
     * Create a planner note for the current user
     * @summary Create a planner note
     * @param {Object} body JSON form fields
     * @returns {PlannerNote}
     */
    createPlannerNote: (body) => helper.post(`/v1/planner_notes`, body),
    /**
     * Delete a planner note for the current user
     * @summary Delete a planner note
     * @param {string} plannerNoteId Canvas Planner note ID
     * @returns {PlannerNote}
     */
    deletePlannerNote: (plannerNoteId) => helper.delete(`/v1/planner_notes/${plannerNoteId}`),
}

module.exports = plannerNote;