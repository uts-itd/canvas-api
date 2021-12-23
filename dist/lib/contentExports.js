var helper = require('../helper');
var contentExports = {
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listContentExportsCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/content_exports"); },
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listContentExportsGroups: function (groupId) { return helper.get("/v1/groups/" + groupId + "/content_exports"); },
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listContentExportsUsers: function (userId) { return helper.get("/v1/users/" + userId + "/content_exports"); },
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} courseId Canvas Course ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportCourses: function (courseId, contentExportId) { return helper.get("/v1/courses/" + courseId + "/content_exports/" + contentExportId); },
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} groupId Canvas Group ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportGroups: function (groupId, contentExportId) { return helper.get("/v1/groups/" + groupId + "/content_exports/" + contentExportId); },
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} userId Canvas User ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportUsers: function (userId, contentExportId) { return helper.get("/v1/users/" + userId + "/content_exports/" + contentExportId); },
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentCourses: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/content_exports", body); },
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentGroups: function (groupId, body) { return helper.post("/v1/groups/" + groupId + "/content_exports", body); },
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentUsers: function (userId, body) { return helper.post("/v1/users/" + userId + "/content_exports", body); },
};
module.exports = contentExports;
