"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
         * @summary List content exports
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listContentExportsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/content_exports`),
        /**
         * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
         * @summary List content exports
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listContentExportsGroups: (groupId) => helper.get(`/v1/groups/${groupId}/content_exports`),
        /**
         * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
         * @summary List content exports
         * @param {string|number} userId Canvas User ID
         * @returns {Promise<any>}
         */
        listContentExportsUsers: (userId) => helper.get(`/v1/users/${userId}/content_exports`),
        /**
         * Get information about a single content export.
         * @summary Show content export
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} contentExportId Canvas Content export ID
         * @returns {Promise<any>}
         */
        showContentExportCourses: (courseId, contentExportId) => helper.get(`/v1/courses/${courseId}/content_exports/${contentExportId}`),
        /**
         * Get information about a single content export.
         * @summary Show content export
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} contentExportId Canvas Content export ID
         * @returns {Promise<any>}
         */
        showContentExportGroups: (groupId, contentExportId) => helper.get(`/v1/groups/${groupId}/content_exports/${contentExportId}`),
        /**
         * Get information about a single content export.
         * @summary Show content export
         * @param {string|number} userId Canvas User ID
         * @param {string|number} contentExportId Canvas Content export ID
         * @returns {Promise<any>}
         */
        showContentExportUsers: (userId, contentExportId) => helper.get(`/v1/users/${userId}/content_exports/${contentExportId}`),
        /**
         * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
         * @summary Export content
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        exportContentCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/content_exports`, body),
        /**
         * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
         * @summary Export content
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        exportContentGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/content_exports`, body),
        /**
         * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
         * @summary Export content
         * @param {string|number} userId Canvas User ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        exportContentUsers: (userId, body) => helper.post(`/v1/users/${userId}/content_exports`, body),
    };
}
exports.default = default_1;
