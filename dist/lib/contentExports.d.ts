declare function _exports(helper: any): {
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listContentExportsCourses: (courseId: string) => Promise<any>;
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listContentExportsGroups: (groupId: string) => Promise<any>;
    /**
     * A paginated list of the past and pending content export jobs for a course, group, or user. Exports are returned newest first.
     * @summary List content exports
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listContentExportsUsers: (userId: string) => Promise<any>;
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} courseId Canvas Course ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportCourses: (courseId: string, contentExportId: string) => Promise<any>;
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} groupId Canvas Group ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportGroups: (groupId: string, contentExportId: string) => Promise<any>;
    /**
     * Get information about a single content export.
     * @summary Show content export
     * @param {string} userId Canvas User ID
     * @param {string} contentExportId Canvas Content export ID
     * @returns {Promise<any>}
     */
    showContentExportUsers: (userId: string, contentExportId: string) => Promise<any>;
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentGroups: (groupId: string, body: any) => Promise<any>;
    /**
     * Begin a content export job for a course, group, or user. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The migration's progress is linked to with the _progress_url_ value. When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Export content
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    exportContentUsers: (userId: string, body: any) => Promise<any>;
};
export = _exports;
