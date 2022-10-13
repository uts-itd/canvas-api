declare function _exports(helper: any): {
    /**
     * Returns the paginated list of bookmarks.
     * @summary List bookmarks
     * @returns {Promise<any>}
     */
    listBookmarks: () => Promise<any>;
    /**
     * Creates a bookmark.
     * @summary Create bookmark
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createBookmark: (body: any) => Promise<any>;
    /**
     * Returns the details for a bookmark.
     * @summary Get bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    getBookmark: (bookmarkId: string) => Promise<any>;
    /**
     * Updates a bookmark
     * @summary Update bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateBookmark: (bookmarkId: string, body: any) => Promise<any>;
    /**
     * Deletes a bookmark
     * @summary Delete bookmark
     * @param {string} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    deleteBookmark: (bookmarkId: string) => Promise<any>;
};
export = _exports;
