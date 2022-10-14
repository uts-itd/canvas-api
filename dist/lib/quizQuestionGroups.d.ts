import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns details of the quiz group with the given id.
     * @summary Get a single quiz group
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    getSingleQuizGroup: (courseId: string | number, quizId: string | number, groupId: string | number) => Promise<any>;
    /**
     * Create a new question group for this quiz 201 Created response code is returned if the creation was successful.
     * @summary Create a question group
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createQuestionGroup: (courseId: string | number, quizId: string | number, body: any) => Promise<any>;
    /**
     * Update a question group
     * @summary Update a question group
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateQuestionGroup: (courseId: string | number, quizId: string | number, groupId: string | number, body: any) => Promise<any>;
    /**
     * Delete a question group <b>204 No Content<b> response code is returned if the deletion was successful.
     * @summary Delete a question group
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    deleteQuestionGroup: (courseId: string | number, quizId: string | number, groupId: string | number) => Promise<any>;
    /**
     * Change the order of the quiz questions within the group <b>204 No Content<b> response code is returned if the reorder was successful.
     * @summary Reorder question groups
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderQuestionGroups: (courseId: string | number, quizId: string | number, groupId: string | number, body: any) => Promise<any>;
};
