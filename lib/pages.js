const helper = require('../helper');

let pages = {
    /**
     * Retrieve the content of the front page
     * @summary Show front page
     * @param {string} courseId Canvas Course ID
     * @returns {Page}
     */
    showFrontPageCourses: (courseId) => helper.get(`/v1/courses/${courseId}/front_page`),
    /**
     * Retrieve the content of the front page
     * @summary Show front page
     * @param {string} groupId Canvas Group ID
     * @returns {Page}
     */
    showFrontPageGroups: (groupId) => helper.get(`/v1/groups/${groupId}/front_page`),
    /**
     * Duplicate a wiki page
     * @summary Duplicate page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Page}
     */
    duplicatePage: (courseId, url) => helper.post(`/v1/courses/${courseId}/pages/${url}/duplicate`),
    /**
     * Update the title or contents of the front page
     * @summary Update/create front page
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Page}
     */
    updateCreateFrontPageCourses: (courseId, body) => helper.put(`/v1/courses/${courseId}/front_page`, body),
    /**
     * Update the title or contents of the front page
     * @summary Update/create front page
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Page}
     */
    updateCreateFrontPageGroups: (groupId, body) => helper.put(`/v1/groups/${groupId}/front_page`, body),
    /**
     * A paginated list of the wiki pages associated with a course or group
     * @summary List pages
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listPagesCourses: (courseId, query='') => helper.get(`/v1/courses/${courseId}/pages`, query),
    /**
     * A paginated list of the wiki pages associated with a course or group
     * @summary List pages
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listPagesGroups: (groupId, query='') => helper.get(`/v1/groups/${groupId}/pages`, query),
    /**
     * Create a new wiki page
     * @summary Create page
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Page}
     */
    createPageCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/pages`, body),
    /**
     * Create a new wiki page
     * @summary Create page
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Page}
     */
    createPageGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/pages`, body),
    /**
     * Retrieve the content of a wiki page
     * @summary Show page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Page}
     */
    showPageCourses: (courseId, url) => helper.get(`/v1/courses/${courseId}/pages/${url}`),
    /**
     * Retrieve the content of a wiki page
     * @summary Show page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Page}
     */
    showPageGroups: (groupId, url) => helper.get(`/v1/groups/${groupId}/pages/${url}`),
    /**
     * Update the title or contents of a wiki page
     * @summary Update/create page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {Object} body JSON form fields
     * @returns {Page}
     */
    updateCreatePageCourses: (courseId, url, body) => helper.put(`/v1/courses/${courseId}/pages/${url}`, body),
    /**
     * Update the title or contents of a wiki page
     * @summary Update/create page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {Object} body JSON form fields
     * @returns {Page}
     */
    updateCreatePageGroups: (groupId, url, body) => helper.put(`/v1/groups/${groupId}/pages/${url}`, body),
    /**
     * Delete a wiki page
     * @summary Delete page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Page}
     */
    deletePageCourses: (courseId, url) => helper.delete(`/v1/courses/${courseId}/pages/${url}`),
    /**
     * Delete a wiki page
     * @summary Delete page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Page}
     */
    deletePageGroups: (groupId, url) => helper.delete(`/v1/groups/${groupId}/pages/${url}`),
    /**
     * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
     * @summary List revisions
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {array}
     */
    listRevisionsCourses: (courseId, url) => helper.get(`/v1/courses/${courseId}/pages/${url}/revisions`),
    /**
     * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
     * @summary List revisions
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {array}
     */
    listRevisionsGroups: (groupId, url) => helper.get(`/v1/groups/${groupId}/pages/${url}/revisions`),
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {Object} query JSON query parameters
     * @returns {PageRevision}
     */
    showRevisionCoursesLatest: (courseId, url, query='') => helper.get(`/v1/courses/${courseId}/pages/${url}/revisions/latest`, query),
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {Object} query JSON query parameters
     * @returns {PageRevision}
     */
    showRevisionGroupsLatest: (groupId, url, query='') => helper.get(`/v1/groups/${groupId}/pages/${url}/revisions/latest`, query),
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {string} revisionId Canvas Revision ID
     * @param {Object} query JSON query parameters
     * @returns {PageRevision}
     */
    showRevisionCoursesRevisionId: (courseId, url, revisionId, query='') => helper.get(`/v1/courses/${courseId}/pages/${url}/revisions/${revisionId}`, query),
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {string} revisionId Canvas Revision ID
     * @param {Object} query JSON query parameters
     * @returns {PageRevision}
     */
    showRevisionGroupsRevisionId: (groupId, url, revisionId, query='') => helper.get(`/v1/groups/${groupId}/pages/${url}/revisions/${revisionId}`, query),
    /**
     * Revert a page to a prior revision.
     * @summary Revert to revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {integer} revisionId Canvas Revision ID
     * @returns {PageRevision}
     */
    revertToRevisionCourses: (courseId, url, revisionId) => helper.post(`/v1/courses/${courseId}/pages/${url}/revisions/${revisionId}`),
    /**
     * Revert a page to a prior revision.
     * @summary Revert to revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {integer} revisionId Canvas Revision ID
     * @returns {PageRevision}
     */
    revertToRevisionGroups: (groupId, url, revisionId) => helper.post(`/v1/groups/${groupId}/pages/${url}/revisions/${revisionId}`),
}

module.exports = pages;