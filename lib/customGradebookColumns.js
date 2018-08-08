const helper = require('../helper');

let customGradebookColumns = {
    /**
     * A paginated list of all custom gradebook columns for a course
     * @summary List custom gradebook columns
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listCustomGradebookColumns: (courseId, query='') => helper.get(`/v1/courses/${courseId}/custom_gradebook_columns`, query),
    /**
     * Create a custom gradebook column
     * @summary Create a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {CustomColumn}
     */
    createCustomGradebookColumn: (courseId, body) => helper.post(`/v1/courses/${courseId}/custom_gradebook_columns`, body),
    /**
     * Accepts the same parameters as custom gradebook column creation
     * @summary Update a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {CustomColumn}
     */
    updateCustomGradebookColumn: (courseId, customGradebookColumnId) => helper.put(`/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}`),
    /**
     * Permanently deletes a custom column and its associated data
     * @summary Delete a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {CustomColumn}
     */
    deleteCustomGradebookColumn: (courseId, customGradebookColumnId) => helper.delete(`/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}`),
    /**
     * Puts the given columns in the specified order 200 OK is returned if successful
     * @summary Reorder custom columns
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    reorderCustomColumns: (courseId, body) => helper.post(`/v1/courses/${courseId}/custom_gradebook_columns/reorder`, body),
    /**
     * This does not list entries for students without associated data.
     * @summary List entries for a column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listEntriesForColumn: (courseId, customGradebookColumnId, query='') => helper.get(`/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}/data`, query),
    /**
     * Set the content of a custom column
     * @summary Update column data
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {ColumnDatum}
     */
    updateColumnData: (courseId, customGradebookColumnId, userId, body) => helper.put(`/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}/data/${userId}`, body),
}

module.exports = customGradebookColumns;