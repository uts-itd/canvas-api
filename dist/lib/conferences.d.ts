import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Retrieve the paginated list of conferences for this context This API returns a JSON object containing the list of conferences, the key for the list of conferences is "conferences"
     * @summary List conferences
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listConferencesCourses: (courseId: string | number) => Promise<any>;
    /**
     * Retrieve the paginated list of conferences for this context This API returns a JSON object containing the list of conferences, the key for the list of conferences is "conferences"
     * @summary List conferences
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listConferencesGroups: (groupId: string | number) => Promise<any>;
};
