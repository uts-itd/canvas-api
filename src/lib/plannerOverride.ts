import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Retrieve a planner override for the current user
     * @summary List planner overrides
     * @returns {Promise<any>}
     */
    listPlannerOverrides: () => helper.get('/v1/planner/overrides'),
    /**
     * Retrieve a planner override for the current user
     * @summary Show a planner override
     * @param {string|number} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    showPlannerOverride: (overrideId: string | number) =>
      helper.get(`/v1/planner/overrides/${overrideId}`),
    /**
     * Update a planner override's visibilty for the current user
     * @summary Update a planner override
     * @param {string|number} overrideId Canvas Override ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updatePlannerOverride: (overrideId: string | number, body: any) =>
      helper.put(`/v1/planner/overrides/${overrideId}`, body),
    /**
     * Create a planner override for the current user
     * @summary Create a planner override
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPlannerOverride: (body: any) => helper.post('/v1/planner/overrides', body),
    /**
     * Delete a planner override for the current user
     * @summary Delete a planner override
     * @param {string|number} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    deletePlannerOverride: (overrideId: string | number) =>
      helper.delete(`/v1/planner/overrides/${overrideId}`),
  };
}
