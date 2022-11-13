import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns the paginated list of bookmarks.
     * @summary List bookmarks
     * @returns {Promise<any>}
     */
    listBookmarks: () => helper.get('/v1/users/self/bookmarks'),
    /**
     * Creates a bookmark.
     * @summary Create bookmark
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createBookmark: (body: any) => helper.post('/v1/users/self/bookmarks', body),
    /**
     * Returns the details for a bookmark.
     * @summary Get bookmark
     * @param {string|number} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    getBookmark: (bookmarkId: string | number) =>
      helper.get(`/v1/users/self/bookmarks/${bookmarkId}`),
    /**
     * Updates a bookmark
     * @summary Update bookmark
     * @param {string|number} bookmarkId Canvas Bookmark ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateBookmark: (bookmarkId: string | number, body: any) =>
      helper.put(`/v1/users/self/bookmarks/${bookmarkId}`, body),
    /**
     * Deletes a bookmark
     * @summary Delete bookmark
     * @param {string|number} bookmarkId Canvas Bookmark ID
     * @returns {Promise<any>}
     */
    deleteBookmark: (bookmarkId: string | number) =>
      helper.delete(`/v1/users/self/bookmarks/${bookmarkId}`),
  };
}
