var helper = require('../helper');
var bookmarks = {
    /**
     * Returns the paginated list of bookmarks.
     * @summary List bookmarks
     * @returns {Promise<any>}
     */
    listBookmarks: function () { return helper.get("/v1/users/self/bookmarks"); },
    /**
     * Creates a bookmark.
     * @summary Create bookmark
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createBookmark: function (body) { return helper.post("/v1/users/self/bookmarks", body); },
    /**
     * Returns the details for a bookmark.
     * @summary Get bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    getBookmark: function (bookmarkId) { return helper.get("/v1/users/self/bookmarks/" + bookmarkId); },
    /**
     * Updates a bookmark
     * @summary Update bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateBookmark: function (bookmarkId, body) { return helper.put("/v1/users/self/bookmarks/" + bookmarkId, body); },
    /**
     * Deletes a bookmark
     * @summary Delete bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    deleteBookmark: function (bookmarkId) { return helper.delete("/v1/users/self/bookmarks/" + bookmarkId); },
};
module.exports = bookmarks;
