import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Retrieve a paginated list of messages sent to a user.
     * @summary List of CommMessages for a user
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listOfCommmessagesForUser: (query?: any) => Promise<any>;
};
