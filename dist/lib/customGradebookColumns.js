var helper = require('../helper');
var customGradebookColumns = {
    /**
     * A paginated list of all custom gradebook columns for a course
     * @summary List custom gradebook columns
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCustomGradebookColumns: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/custom_gradebook_columns", query);
    },
    /**
     * Create a custom gradebook column
     * @summary Create a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCustomGradebookColumn: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/custom_gradebook_columns", body); },
    /**
     * Accepts the same parameters as custom gradebook column creation
     * @summary Update a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {Promise<any>}
     */
    updateCustomGradebookColumn: function (courseId, customGradebookColumnId) { return helper.put("/v1/courses/" + courseId + "/custom_gradebook_columns/" + customGradebookColumnId); },
    /**
     * Permanently deletes a custom column and its associated data
     * @summary Delete a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {Promise<any>}
     */
    deleteCustomGradebookColumn: function (courseId, customGradebookColumnId) { return helper.delete("/v1/courses/" + courseId + "/custom_gradebook_columns/" + customGradebookColumnId); },
    /**
     * Puts the given columns in the specified order 200 OK is returned if successful
     * @summary Reorder custom columns
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderCustomColumns: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/custom_gradebook_columns/reorder", body); },
    /**
     * This does not list entries for students without associated data.
     * @summary List entries for a column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEntriesForColumn: function (courseId, customGradebookColumnId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/custom_gradebook_columns/" + customGradebookColumnId + "/data", query);
    },
    /**
     * Set the content of a custom column
     * @summary Update column data
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateColumnData: function (courseId, customGradebookColumnId, userId, body) { return helper.put("/v1/courses/" + courseId + "/custom_gradebook_columns/" + customGradebookColumnId + "/data/" + userId, body); },
};
module.exports = customGradebookColumns;
