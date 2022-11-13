import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Retrieve the paginated list of planner notes Retrieve planner note for a user
     * @summary List planner notes
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listPlannerNotes: (query?: any) => helper.get('/v1/planner_notes', query),
    /**
     * Retrieve a planner note for the current user
     * @summary Show a PlannerNote
     * @param {string|number} plannerNoteId Canvas Planner note ID
     * @returns {Promise<any>}
     */
    showPlannernote: (plannerNoteId: string | number) =>
      helper.get(`/v1/planner_notes/${plannerNoteId}`),
    /**
     * Update a planner note for the current user
     * @summary Update a PlannerNote
     * @param {string|number} plannerNoteId Canvas Planner note ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannernote: (plannerNoteId: string | number, body: any) =>
      helper.put(`/v1/planner_notes/${plannerNoteId}`, body),
    /**
     * Create a planner note for the current user
     * @summary Create a planner note
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPlannerNote: (body: any) => helper.post('/v1/planner_notes', body),
    /**
     * Delete a planner note for the current user
     * @summary Delete a planner note
     * @param {string|number} plannerNoteId Canvas Planner note ID
     * @returns {Promise<any>}
     */
    deletePlannerNote: (plannerNoteId: string | number) =>
      helper.delete(`/v1/planner_notes/${plannerNoteId}`),
  };
}
