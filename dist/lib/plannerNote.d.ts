import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Retrieve the paginated list of planner notes Retrieve planner note for a user
     * @summary List planner notes
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listPlannerNotes: (query?: any) => Promise<any>;
    /**
     * Retrieve a planner note for the current user
     * @summary Show a PlannerNote
     * @param {string|number} plannerNoteId Canvas Planner note ID
     * @returns {Promise<any>}
     */
    showPlannernote: (plannerNoteId: string | number) => Promise<any>;
    /**
     * Update a planner note for the current user
     * @summary Update a PlannerNote
     * @param {string|number} plannerNoteId Canvas Planner note ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannernote: (plannerNoteId: string | number, body: any) => Promise<any>;
    /**
     * Create a planner note for the current user
     * @summary Create a planner note
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPlannerNote: (body: any) => Promise<any>;
    /**
     * Delete a planner note for the current user
     * @summary Delete a planner note
     * @param {string|number} plannerNoteId Canvas Planner note ID
     * @returns {Promise<any>}
     */
    deletePlannerNote: (plannerNoteId: string | number) => Promise<any>;
};
