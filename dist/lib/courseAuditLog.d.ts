import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * List course change events for a given course.
     * @summary Query by course.
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByCourse: (courseId: string | number, query?: any) => Promise<any>;
};
