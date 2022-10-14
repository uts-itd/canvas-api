import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the paginated list of PollChoices in this poll.
     * @summary List poll choices in a poll
     * @param {string|number} pollId Canvas Poll ID
     * @returns {Promise<any>}
     */
    listPollChoicesInPoll: (pollId: string | number) => Promise<any>;
    /**
     * Returns the poll choice with the given id
     * @summary Get a single poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    getSinglePollChoice: (pollId: string | number, pollChoiceId: string | number) => Promise<any>;
    /**
     * Create a new poll choice for this poll
     * @summary Create a single poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSinglePollChoice: (pollId: string | number, body: any) => Promise<any>;
    /**
     * Update an existing poll choice for this poll
     * @summary Update a single poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollChoiceId Canvas Poll choice ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateSinglePollChoice: (pollId: string | number, pollChoiceId: string | number, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a poll choice
     * @param {string|number} pollId Canvas Poll ID
     * @param {string|number} pollChoiceId Canvas Poll choice ID
     * @returns {Promise<any>}
     */
    deletePollChoice: (pollId: string | number, pollChoiceId: string | number) => Promise<any>;
};
