"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Retrieve the content of the front page
         * @summary Show front page
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        showFrontPageCourses: (courseId) => helper.get(`/v1/courses/${courseId}/front_page`),
        /**
         * Retrieve the content of the front page
         * @summary Show front page
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        showFrontPageGroups: (groupId) => helper.get(`/v1/groups/${groupId}/front_page`),
        /**
         * Duplicate a wiki page
         * @summary Duplicate page
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @returns {Promise<any>}
         */
        duplicatePage: (courseId, url) => helper.post(`/v1/courses/${courseId}/pages/${url}/duplicate`),
        /**
         * Update the title or contents of the front page
         * @summary Update/create front page
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateCreateFrontPageCourses: (courseId, body) => helper.put(`/v1/courses/${courseId}/front_page`, body),
        /**
         * Update the title or contents of the front page
         * @summary Update/create front page
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateCreateFrontPageGroups: (groupId, body) => helper.put(`/v1/groups/${groupId}/front_page`, body),
        /**
         * A paginated list of the wiki pages associated with a course or group
         * @summary List pages
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listPagesCourses: (courseId, query) => helper.get(`/v1/courses/${courseId}/pages`, query),
        /**
         * A paginated list of the wiki pages associated with a course or group
         * @summary List pages
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listPagesGroups: (groupId, query) => helper.get(`/v1/groups/${groupId}/pages`, query),
        /**
         * Create a new wiki page
         * @summary Create page
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createPageCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/pages`, body),
        /**
         * Create a new wiki page
         * @summary Create page
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createPageGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/pages`, body),
        /**
         * Retrieve the content of a wiki page
         * @summary Show page
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @returns {Promise<any>}
         */
        showPageCourses: (courseId, url) => helper.get(`/v1/courses/${courseId}/pages/${url}`),
        /**
         * Retrieve the content of a wiki page
         * @summary Show page
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} url ID
         * @returns {Promise<any>}
         */
        showPageGroups: (groupId, url) => helper.get(`/v1/groups/${groupId}/pages/${url}`),
        /**
         * Update the title or contents of a wiki page
         * @summary Update/create page
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateCreatePageCourses: (courseId, url, body) => helper.put(`/v1/courses/${courseId}/pages/${url}`, body),
        /**
         * Update the title or contents of a wiki page
         * @summary Update/create page
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} url ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateCreatePageGroups: (groupId, url, body) => helper.put(`/v1/groups/${groupId}/pages/${url}`, body),
        /**
         * Delete a wiki page
         * @summary Delete page
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @returns {Promise<any>}
         */
        deletePageCourses: (courseId, url) => helper.delete(`/v1/courses/${courseId}/pages/${url}`),
        /**
         * Delete a wiki page
         * @summary Delete page
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} url ID
         * @returns {Promise<any>}
         */
        deletePageGroups: (groupId, url) => helper.delete(`/v1/groups/${groupId}/pages/${url}`),
        /**
         * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
         * @summary List revisions
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @returns {Promise<any>}
         */
        listRevisionsCourses: (courseId, url) => helper.get(`/v1/courses/${courseId}/pages/${url}/revisions`),
        /**
         * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
         * @summary List revisions
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} url ID
         * @returns {Promise<any>}
         */
        listRevisionsGroups: (groupId, url) => helper.get(`/v1/groups/${groupId}/pages/${url}/revisions`),
        /**
         * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
         * @summary Show revision
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        showRevisionCoursesLatest: (courseId, url, query) => helper.get(`/v1/courses/${courseId}/pages/${url}/revisions/latest`, query),
        /**
         * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
         * @summary Show revision
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} url ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        showRevisionGroupsLatest: (groupId, url, query) => helper.get(`/v1/groups/${groupId}/pages/${url}/revisions/latest`, query),
        /**
         * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
         * @summary Show revision
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @param {string|number} revisionId Canvas Revision ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        showRevisionCoursesRevisionId: (courseId, url, revisionId, query) => helper.get(`/v1/courses/${courseId}/pages/${url}/revisions/${revisionId}`, query),
        /**
         * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
         * @summary Show revision
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} url ID
         * @param {string|number} revisionId Canvas Revision ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        showRevisionGroupsRevisionId: (groupId, url, revisionId, query) => helper.get(`/v1/groups/${groupId}/pages/${url}/revisions/${revisionId}`, query),
        /**
         * Revert a page to a prior revision.
         * @summary Revert to revision
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} url ID
         * @param number revisionId Canvas Revision ID
         * @returns {Promise<any>}
         */
        revertToRevisionCourses: (courseId, url, revisionId) => helper.post(`/v1/courses/${courseId}/pages/${url}/revisions/${revisionId}`),
        /**
         * Revert a page to a prior revision.
         * @summary Revert to revision
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} url ID
         * @param number revisionId Canvas Revision ID
         * @returns {Promise<any>}
         */
        revertToRevisionGroups: (groupId, url, revisionId) => helper.post(`/v1/groups/${groupId}/pages/${url}/revisions/${revisionId}`),
    };
}
exports.default = default_1;
