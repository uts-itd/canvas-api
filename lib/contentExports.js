const helper = require('../helper');

let contentExports = {
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} courseId Canvas Course ID
     * @returns {array}
     */
    listContentExportsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/content_exports`),
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} groupId Canvas Group ID
     * @returns {array}
     */
    listContentExportsGroups: (groupId) => helper.get(`/v1/groups/${groupId}/content_exports`),
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} userId Canvas User ID
     * @returns {array}
     */
    listContentExportsUsers: (userId) => helper.get(`/v1/users/${userId}/content_exports`),
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} courseId Canvas Course ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {ContentExport}
     */
    showContentExportCourses: (courseId, contentExportId) => helper.get(`/v1/courses/${courseId}/content_exports/${contentExportId}`),
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} groupId Canvas Group ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {ContentExport}
     */
    showContentExportGroups: (groupId, contentExportId) => helper.get(`/v1/groups/${groupId}/content_exports/${contentExportId}`),
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} userId Canvas User ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {ContentExport}
     */
    showContentExportUsers: (userId, contentExportId) => helper.get(`/v1/users/${userId}/content_exports/${contentExportId}`),
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {ContentExport}
     */
    exportContentCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/content_exports`, body),
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {ContentExport}
     */
    exportContentGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/content_exports`, body),
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {ContentExport}
     */
    exportContentUsers: (userId, body) => helper.post(`/v1/users/${userId}/content_exports`, body),
}

module.exports = contentExports;