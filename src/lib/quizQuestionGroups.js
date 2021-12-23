const helper = require('../helper');

let quizQuestionGroups = {
    /**
     * Returns details of the quiz group with the given id.
     * @summary Get a single quiz group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    getSingleQuizGroup: (courseId, quizId, groupId) => helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/groups/${groupId}`),
    /**
     * Create a new question group for this quiz 201 Created response code is returned if the creation was successful.
     * @summary Create a question group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createQuestionGroup: (courseId, quizId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizId}/groups`, body),
    /**
     * Update a question group
     * @summary Update a question group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateQuestionGroup: (courseId, quizId, groupId, body) => helper.put(`/v1/courses/${courseId}/quizzes/${quizId}/groups/${groupId}`, body),
    /**
     * Delete a question group <b>204 No Content<b> response code is returned if the deletion was successful.
     * @summary Delete a question group
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    deleteQuestionGroup: (courseId, quizId, groupId) => helper.delete(`/v1/courses/${courseId}/quizzes/${quizId}/groups/${groupId}`),
    /**
     * Change the order of the quiz questions within the group <b>204 No Content<b> response code is returned if the reorder was successful.
     * @summary Reorder question groups
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderQuestionGroups: (courseId, quizId, groupId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizId}/groups/${groupId}/reorder`, body),
}

module.exports = quizQuestionGroups;