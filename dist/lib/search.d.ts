import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint, /api/v1/conversations/find_recipients is deprecated. Pagination is supported.
     * @summary Find recipients
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    findRecipientsConversations: (query?: any) => Promise<any>;
    /**
     * Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint, /api/v1/conversations/find_recipients is deprecated. Pagination is supported.
     * @summary Find recipients
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    findRecipientsSearch: (query?: any) => Promise<any>;
    /**
     * A paginated list of all courses visible in the public index
     * @summary List all courses
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAllCourses: (query?: any) => Promise<any>;
};
