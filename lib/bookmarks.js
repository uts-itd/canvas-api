const helper = require('../helper');

let bookmarks = {
    /**
     * Returns the paginated list of bookmarks.
     * @summary List bookmarks
     * @returns {array}
     */
    listBookmarks: () => helper.get(`/v1/users/self/bookmarks`),
    /**
     * Creates a bookmark.
     * @summary Create bookmark
     * @param {Object} body JSON form fields
     * @returns {Bookmark}
     */
    createBookmark: (body) => helper.post(`/v1/users/self/bookmarks`, body),
    /**
     * Returns the details for a bookmark.
     * @summary Get bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {Bookmark}
     */
    getBookmark: (bookmarkId) => helper.get(`/v1/users/self/bookmarks/${bookmarkId}`),
    /**
     * Updates a bookmark
     * @summary Update bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @param {Object} body JSON form fields
     * @returns {Folder}
     */
    updateBookmark: (bookmarkId, body) => helper.put(`/v1/users/self/bookmarks/${bookmarkId}`, body),
    /**
     * Deletes a bookmark
     * @summary Delete bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {void}
     */
    deleteBookmark: (bookmarkId) => helper.delete(`/v1/users/self/bookmarks/${bookmarkId}`),
}

module.exports = bookmarks;