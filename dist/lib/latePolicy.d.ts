import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the late policy for a course.
     * @summary Get a late policy
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getLatePolicy: (courseId: string | number) => Promise<any>;
    /**
     * Create a late policy. If the course already has a late policy, a bad_request is returned since there can only be one late policy per course.
     * @summary Create a late policy
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLatePolicy: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Patch a late policy. No body is returned upon success.
     * @summary Patch a late policy
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    patchLatePolicy: (courseId: string | number, body: any) => Promise<void>;
};
