module.exports = (helper) => {
  return {
    /**
     * Returns the paginated list of bookmarks.
     * @summary List bookmarks
     * @returns {Promise<any>}
     */
    listBookmarks: () => helper.get(`/v1/users/self/bookmarks`),
    /**
     * Creates a bookmark.
     * @summary Create bookmark
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createBookmark: (body) => helper.post(`/v1/users/self/bookmarks`, body),
    /**
     * Returns the details for a bookmark.
     * @summary Get bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    getBookmark: (bookmarkId) =>
      helper.get(`/v1/users/self/bookmarks/${bookmarkId}`),
    /**
     * Updates a bookmark
     * @summary Update bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateBookmark: (bookmarkId, body) =>
      helper.put(`/v1/users/self/bookmarks/${bookmarkId}`, body),
    /**
     * Deletes a bookmark
     * @summary Delete bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    deleteBookmark: (bookmarkId) =>
      helper.delete(`/v1/users/self/bookmarks/${bookmarkId}`),
  };
};
