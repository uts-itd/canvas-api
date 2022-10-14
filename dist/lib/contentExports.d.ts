import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listContentExportsCourses: (courseId: string | number) => Promise<any>;
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listContentExportsGroups: (groupId: string | number) => Promise<any>;
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listContentExportsUsers: (userId: string | number) => Promise<any>;
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportCourses: (courseId: string | number, contentExportId: string | number) => Promise<any>;
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportGroups: (groupId: string | number, contentExportId: string | number) => Promise<any>;
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string|number} userId Canvas User ID
     * @param {string|number} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportUsers: (userId: string | number, contentExportId: string | number) => Promise<any>;
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentGroups: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentUsers: (userId: string | number, body: any) => Promise<any>;
};
