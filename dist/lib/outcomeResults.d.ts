import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Gets the outcome results for users and outcomes in the specified context.
     * @summary Get outcome results
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResults: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Gets the outcome rollups for the users and outcomes in the specified context.
     * @summary Get outcome result rollups
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResultRollups: (courseId: string | number, query?: any) => Promise<any>;
};
