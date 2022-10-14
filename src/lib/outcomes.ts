import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Returns the details of the outcome with the given id.
     * @summary Show an outcome
     * @param {string|number} outcomeId Canvas Outcome ID
     * @returns {Promise<any>}
     */
    showOutcome: (outcomeId: string | number) => helper.get(`/v1/outcomes/${outcomeId}`),
    /**
     * Modify an existing outcome. Fields not provided are left as is; unrecognized fields are ignored. If any new ratings are provided, the combination of all new ratings provided completely replace any existing embedded rubric criterion; it is not possible to tweak the ratings of the embedded rubric criterion. A new embedded rubric criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any new ratings lacking a description are given a default of "No description". Any new ratings lacking a point value are given a default of 0.
     * @summary Update an outcome
     * @param {string|number} outcomeId Canvas Outcome ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateOutcome: (outcomeId: string | number, body: any) => helper.put(`/v1/outcomes/${outcomeId}`, body),
  };
}
