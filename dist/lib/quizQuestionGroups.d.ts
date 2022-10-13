declare function _exports(helper: any): {
    /**
     * Returns details of the quiz group with the given id.
     * @summary Get a single quiz group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    getSingleQuizGroup: (courseId: string, quizId: string, groupId: string) => Promise<any>;
    /**
     * Create a new question group for this quiz 201 Created response code is returned if the creation was successful.
     * @summary Create a question group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createQuestionGroup: (courseId: string, quizId: string, body: any) => Promise<any>;
    /**
     * Update a question group
     * @summary Update a question group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateQuestionGroup: (courseId: string, quizId: string, groupId: string, body: any) => Promise<any>;
    /**
     * Delete a question group <b>204 No Content<b> response code is returned if the deletion was successful.
     * @summary Delete a question group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    deleteQuestionGroup: (courseId: string, quizId: string, groupId: string) => Promise<any>;
    /**
     * Change the order of the quiz questions within the group <b>204 No Content<b> response code is returned if the reorder was successful.
     * @summary Reorder question groups
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderQuestionGroups: (courseId: string, quizId: string, groupId: string, body: any) => Promise<any>;
};
export = _exports;
