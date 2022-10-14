import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listExternalFeedsCourses: (courseId: string | number) => Promise<any>;
    /**
     * Returns the paginated list of External Feeds this course or group.
     * @summary List external feeds
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listExternalFeedsGroups: (groupId: string | number) => Promise<any>;
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalFeedCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Create a new external feed for the course or group.
     * @summary Create an external feed
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalFeedGroups: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} externalFeedId Canvas External feed ID
     * @returns {Promise<any>}
     */
    deleteExternalFeedCourses: (courseId: string | number, externalFeedId: string | number) => Promise<any>;
    /**
     * Deletes the external feed.
     * @summary Delete an external feed
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} externalFeedId Canvas External feed ID
     * @returns {Promise<any>}
     */
    deleteExternalFeedGroups: (groupId: string | number, externalFeedId: string | number) => Promise<any>;
};
