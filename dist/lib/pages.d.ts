declare function _exports(helper: any): {
    /**
     * Retrieve the content of the front page
     * @summary Show front page
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    showFrontPageCourses: (courseId: string) => Promise<any>;
    /**
     * Retrieve the content of the front page
     * @summary Show front page
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    showFrontPageGroups: (groupId: string) => Promise<any>;
    /**
     * Duplicate a wiki page
     * @summary Duplicate page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    duplicatePage: (courseId: string, url: string) => Promise<any>;
    /**
     * Update the title or contents of the front page
     * @summary Update/create front page
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreateFrontPageCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Update the title or contents of the front page
     * @summary Update/create front page
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreateFrontPageGroups: (groupId: string, body: any) => Promise<any>;
    /**
     * A paginated list of the wiki pages associated with a course or group
     * @summary List pages
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listPagesCourses: (courseId: string, query?: any) => Promise<any>;
    /**
     * A paginated list of the wiki pages associated with a course or group
     * @summary List pages
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listPagesGroups: (groupId: string, query?: any) => Promise<any>;
    /**
     * Create a new wiki page
     * @summary Create page
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPageCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Create a new wiki page
     * @summary Create page
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPageGroups: (groupId: string, body: any) => Promise<any>;
    /**
     * Retrieve the content of a wiki page
     * @summary Show page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    showPageCourses: (courseId: string, url: string) => Promise<any>;
    /**
     * Retrieve the content of a wiki page
     * @summary Show page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    showPageGroups: (groupId: string, url: string) => Promise<any>;
    /**
     * Update the title or contents of a wiki page
     * @summary Update/create page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreatePageCourses: (courseId: string, url: string, body: any) => Promise<any>;
    /**
     * Update the title or contents of a wiki page
     * @summary Update/create page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreatePageGroups: (groupId: string, url: string, body: any) => Promise<any>;
    /**
     * Delete a wiki page
     * @summary Delete page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    deletePageCourses: (courseId: string, url: string) => Promise<any>;
    /**
     * Delete a wiki page
     * @summary Delete page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    deletePageGroups: (groupId: string, url: string) => Promise<any>;
    /**
     * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
     * @summary List revisions
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    listRevisionsCourses: (courseId: string, url: string) => Promise<any>;
    /**
     * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
     * @summary List revisions
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    listRevisionsGroups: (groupId: string, url: string) => Promise<any>;
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionCoursesLatest: (courseId: string, url: string, query?: any) => Promise<any>;
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionGroupsLatest: (groupId: string, url: string, query?: any) => Promise<any>;
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {string} revisionId Canvas Revision ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionCoursesRevisionId: (courseId: string, url: string, revisionId: string, query?: any) => Promise<any>;
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {string} revisionId Canvas Revision ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionGroupsRevisionId: (groupId: string, url: string, revisionId: string, query?: any) => Promise<any>;
    /**
     * Revert a page to a prior revision.
     * @summary Revert to revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param number revisionId Canvas Revision ID
     * @returns {Promise<any>}
     */
    revertToRevisionCourses: (courseId: string, url: string, revisionId: any) => Promise<any>;
    /**
     * Revert a page to a prior revision.
     * @summary Revert to revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param number revisionId Canvas Revision ID
     * @returns {Promise<any>}
     */
    revertToRevisionGroups: (groupId: string, url: string, revisionId: any) => Promise<any>;
};
export = _exports;
