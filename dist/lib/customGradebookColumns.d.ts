declare function _exports(helper: any): {
    /**
     * A paginated list of all custom gradebook columns for a course
     * @summary List custom gradebook columns
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCustomGradebookColumns: (courseId: string, query?: any) => Promise<any>;
    /**
     * Create a custom gradebook column
     * @summary Create a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCustomGradebookColumn: (courseId: string, body: any) => Promise<any>;
    /**
     * Accepts the same parameters as custom gradebook column creation
     * @summary Update a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {Promise<any>}
     */
    updateCustomGradebookColumn: (courseId: string, customGradebookColumnId: string) => Promise<any>;
    /**
     * Permanently deletes a custom column and its associated data
     * @summary Delete a custom gradebook column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {Promise<any>}
     */
    deleteCustomGradebookColumn: (courseId: string, customGradebookColumnId: string) => Promise<any>;
    /**
     * Puts the given columns in the specified order 200 OK is returned if successful
     * @summary Reorder custom columns
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderCustomColumns: (courseId: string, body: any) => Promise<any>;
    /**
     * This does not list entries for students without associated data.
     * @summary List entries for a column
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEntriesForColumn: (courseId: string, customGradebookColumnId: string, query?: any) => Promise<any>;
    /**
     * Set the content of a custom column
     * @summary Update column data
     * @param {string} courseId Canvas Course ID
     * @param {string} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateColumnData: (courseId: string, customGradebookColumnId: string, userId: string, body: any) => Promise<any>;
};
export = _exports;
