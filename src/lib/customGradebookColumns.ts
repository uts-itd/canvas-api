import { Helper } from '../helper';

export default function (helper: Helper) {
  
  return {
    /**
     * A paginated list of all custom gradebook columns for a course
     * @summary List custom gradebook columns
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCustomGradebookColumns: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/custom_gradebook_columns`, query),
    /**
     * Create a custom gradebook column
     * @summary Create a custom gradebook column
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCustomGradebookColumn: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/custom_gradebook_columns`, body),
    /**
     * Accepts the same parameters as custom gradebook column creation
     * @summary Update a custom gradebook column
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {Promise<any>}
     */
    updateCustomGradebookColumn: (courseId: string | number, customGradebookColumnId: string | number) =>
      helper.put(`/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}`),
    /**
     * Permanently deletes a custom column and its associated data
     * @summary Delete a custom gradebook column
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} customGradebookColumnId Canvas Custom gradebook_column ID
     * @returns {Promise<any>}
     */
    deleteCustomGradebookColumn: (courseId: string | number, customGradebookColumnId: string | number) =>
      helper.delete(`/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}`),
    /**
     * Puts the given columns in the specified order 200 OK is returned if successful
     * @summary Reorder custom columns
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderCustomColumns: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/custom_gradebook_columns/reorder`, body),
    /**
     * This does not list entries for students without associated data.
     * @summary List entries for a column
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listEntriesForColumn: (courseId: string | number, customGradebookColumnId: string | number, query?: any) =>
      helper.get(
        `/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}/data`,
        query,
      ),
    /**
     * Set the content of a custom column
     * @summary Update column data
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} customGradebookColumnId Canvas Custom gradebook_column ID
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateColumnData: (courseId: string | number, customGradebookColumnId: string | number, userId: string | number, body: any) =>
      helper.put(
        `/v1/courses/${courseId}/custom_gradebook_columns/${customGradebookColumnId}/data/${userId}`,
        body,
      ),
  };
}
