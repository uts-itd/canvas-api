var helper = require('../helper');
var pages = {
    /**
     * Retrieve the content of the front page
     * @summary Show front page
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    showFrontPageCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/front_page"); },
    /**
     * Retrieve the content of the front page
     * @summary Show front page
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    showFrontPageGroups: function (groupId) { return helper.get("/v1/groups/" + groupId + "/front_page"); },
    /**
     * Duplicate a wiki page
     * @summary Duplicate page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    duplicatePage: function (courseId, url) { return helper.post("/v1/courses/" + courseId + "/pages/" + url + "/duplicate"); },
    /**
     * Update the title or contents of the front page
     * @summary Update/create front page
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreateFrontPageCourses: function (courseId, body) { return helper.put("/v1/courses/" + courseId + "/front_page", body); },
    /**
     * Update the title or contents of the front page
     * @summary Update/create front page
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreateFrontPageGroups: function (groupId, body) { return helper.put("/v1/groups/" + groupId + "/front_page", body); },
    /**
     * A paginated list of the wiki pages associated with a course or group
     * @summary List pages
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listPagesCourses: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/pages", query);
    },
    /**
     * A paginated list of the wiki pages associated with a course or group
     * @summary List pages
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listPagesGroups: function (groupId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/groups/" + groupId + "/pages", query);
    },
    /**
     * Create a new wiki page
     * @summary Create page
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPageCourses: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/pages", body); },
    /**
     * Create a new wiki page
     * @summary Create page
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPageGroups: function (groupId, body) { return helper.post("/v1/groups/" + groupId + "/pages", body); },
    /**
     * Retrieve the content of a wiki page
     * @summary Show page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    showPageCourses: function (courseId, url) { return helper.get("/v1/courses/" + courseId + "/pages/" + url); },
    /**
     * Retrieve the content of a wiki page
     * @summary Show page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    showPageGroups: function (groupId, url) { return helper.get("/v1/groups/" + groupId + "/pages/" + url); },
    /**
     * Update the title or contents of a wiki page
     * @summary Update/create page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreatePageCourses: function (courseId, url, body) { return helper.put("/v1/courses/" + courseId + "/pages/" + url, body); },
    /**
     * Update the title or contents of a wiki page
     * @summary Update/create page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCreatePageGroups: function (groupId, url, body) { return helper.put("/v1/groups/" + groupId + "/pages/" + url, body); },
    /**
     * Delete a wiki page
     * @summary Delete page
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    deletePageCourses: function (courseId, url) { return helper.delete("/v1/courses/" + courseId + "/pages/" + url); },
    /**
     * Delete a wiki page
     * @summary Delete page
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    deletePageGroups: function (groupId, url) { return helper.delete("/v1/groups/" + groupId + "/pages/" + url); },
    /**
     * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
     * @summary List revisions
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    listRevisionsCourses: function (courseId, url) { return helper.get("/v1/courses/" + courseId + "/pages/" + url + "/revisions"); },
    /**
     * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
     * @summary List revisions
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @returns {Promise<any>}
     */
    listRevisionsGroups: function (groupId, url) { return helper.get("/v1/groups/" + groupId + "/pages/" + url + "/revisions"); },
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionCoursesLatest: function (courseId, url, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/pages/" + url + "/revisions/latest", query);
    },
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionGroupsLatest: function (groupId, url, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/groups/" + groupId + "/pages/" + url + "/revisions/latest", query);
    },
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param {string} revisionId Canvas Revision ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionCoursesRevisionId: function (courseId, url, revisionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/pages/" + url + "/revisions/" + revisionId, query);
    },
    /**
     * Retrieve the metadata and optionally content of a revision of the page. Note that retrieving historic versions of pages requires edit rights.
     * @summary Show revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param {string} revisionId Canvas Revision ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showRevisionGroupsRevisionId: function (groupId, url, revisionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/groups/" + groupId + "/pages/" + url + "/revisions/" + revisionId, query);
    },
    /**
     * Revert a page to a prior revision.
     * @summary Revert to revision
     * @param {string} courseId Canvas Course ID
     * @param {string} url ID
     * @param number revisionId Canvas Revision ID
     * @returns {Promise<any>}
     */
    revertToRevisionCourses: function (courseId, url, revisionId) { return helper.post("/v1/courses/" + courseId + "/pages/" + url + "/revisions/" + revisionId); },
    /**
     * Revert a page to a prior revision.
     * @summary Revert to revision
     * @param {string} groupId Canvas Group ID
     * @param {string} url ID
     * @param number revisionId Canvas Revision ID
     * @returns {Promise<any>}
     */
    revertToRevisionGroups: function (groupId, url, revisionId) { return helper.post("/v1/groups/" + groupId + "/pages/" + url + "/revisions/" + revisionId); },
};
module.exports = pages;
