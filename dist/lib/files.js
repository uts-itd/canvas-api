"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Returns the total and used storage quota for the course, group, or user.
         * @summary Get quota information
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        getQuotaInformationCourses: (courseId) => helper.get(`/v1/courses/${courseId}/files/quota`),
        /**
         * Returns the total and used storage quota for the course, group, or user.
         * @summary Get quota information
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        getQuotaInformationGroups: (groupId) => helper.get(`/v1/groups/${groupId}/files/quota`),
        /**
         * Returns the total and used storage quota for the course, group, or user.
         * @summary Get quota information
         * @param {string|number} userId Canvas User ID
         * @returns {Promise<any>}
         */
        getQuotaInformationUsers: (userId) => helper.get(`/v1/users/${userId}/files/quota`),
        /**
         * Returns the paginated list of files for the folder or course.
         * @summary List files
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listFilesCourses: (courseId, query) => helper.get(`/v1/courses/${courseId}/files`, query),
        /**
         * Returns the paginated list of files for the folder or course.
         * @summary List files
         * @param {string|number} userId Canvas User ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listFilesUsers: (userId, query) => helper.get(`/v1/users/${userId}/files`, query),
        /**
         * Returns the paginated list of files for the folder or course.
         * @summary List files
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listFilesGroups: (groupId, query) => helper.get(`/v1/groups/${groupId}/files`, query),
        /**
         * Returns the paginated list of files for the folder or course.
         * @summary List files
         * @param {string|number} folderId Canvas Folder ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listFilesFolders: (folderId, query) => helper.get(`/v1/folders/${folderId}/files`, query),
        /**
         * Determine the URL that should be used for inline preview of the file.
         * @summary Get public inline preview url
         * @param {string|number} fileId Canvas File ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getPublicInlinePreviewUrl: (fileId, query) => helper.get(`/v1/files/${fileId}/public_url`, query),
        /**
         * Returns the standard attachment json object
         * @summary Get file
         * @param {string|number} fileId Canvas File ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getFileFiles: (fileId, query) => helper.get(`/v1/files/${fileId}`, query),
        /**
         * Returns the standard attachment json object
         * @summary Get file
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} fileId Canvas File ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getFileCourses: (courseId, fileId, query) => helper.get(`/v1/courses/${courseId}/files/${fileId}`, query),
        /**
         * Returns the standard attachment json object
         * @summary Get file
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} fileId Canvas File ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getFileGroups: (groupId, fileId, query) => helper.get(`/v1/groups/${groupId}/files/${fileId}`, query),
        /**
         * Returns the standard attachment json object
         * @summary Get file
         * @param {string|number} userId Canvas User ID
         * @param {string|number} fileId Canvas File ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getFileUsers: (userId, fileId, query) => helper.get(`/v1/users/${userId}/files/${fileId}`, query),
        /**
         * Update some settings on the specified file
         * @summary Update file
         * @param {string|number} fileId Canvas File ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateFile: (fileId, body) => helper.put(`/v1/files/${fileId}`, body),
        /**
         * Remove the specified file
         * @summary Delete file
         * @param {string|number} fileId Canvas File ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        deleteFile: (fileId, query) => helper.delete(`/v1/files/${fileId}`, query),
        /**
         * Returns the paginated list of folders in the folder.
         * @summary List folders
         * @param {string|number} folderId Canvas Folder ID
         * @returns {Promise<any>}
         */
        listFolders: (folderId) => helper.get(`/v1/folders/${folderId}/folders`),
        /**
         * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
         * @summary List all folders
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listAllFoldersCourses: (courseId) => helper.get(`/v1/courses/${courseId}/folders`),
        /**
         * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
         * @summary List all folders
         * @param {string|number} userId Canvas User ID
         * @returns {Promise<any>}
         */
        listAllFoldersUsers: (userId) => helper.get(`/v1/users/${userId}/folders`),
        /**
         * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
         * @summary List all folders
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listAllFoldersGroups: (groupId) => helper.get(`/v1/groups/${groupId}/folders`),
        /**
         * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
         * @summary Resolve path
         * @param {string|number} courseId Canvas Course ID
         * @param {string} fullPath Full path
         * @returns {Promise<any>}
         */
        resolvePathCoursesFullPath: (courseId, fullPath) => helper.get(`/v1/courses/${courseId}/folders/by_path/${fullPath}`),
        /**
         * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
         * @summary Resolve path
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        resolvePathCourses: (courseId) => helper.get(`/v1/courses/${courseId}/folders/by_path`),
        /**
         * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
         * @summary Resolve path
         * @param {string|number} userId Canvas User ID
         * @param {string} fullPath Full path
         * @returns {Promise<any>}
         */
        resolvePathUsersFullPath: (userId, fullPath) => helper.get(`/v1/users/${userId}/folders/by_path/${fullPath}`),
        /**
         * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
         * @summary Resolve path
         * @param {string|number} userId Canvas User ID
         * @returns {Promise<any>}
         */
        resolvePathUsers: (userId) => helper.get(`/v1/users/${userId}/folders/by_path`),
        /**
         * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
         * @summary Resolve path
         * @param {string|number} groupId Canvas Group ID
         * @param {string} fullPath Full path
         * @returns {Promise<any>}
         */
        resolvePathGroupsFullPath: (groupId, fullPath) => helper.get(`/v1/groups/${groupId}/folders/by_path/${fullPath}`),
        /**
         * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
         * @summary Resolve path
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        resolvePathGroups: (groupId) => helper.get(`/v1/groups/${groupId}/folders/by_path`),
        /**
         * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
         * @summary Get folder
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} folderId Canvas Folder ID
         * @returns {Promise<any>}
         */
        getFolderCourses: (courseId, folderId) => helper.get(`/v1/courses/${courseId}/folders/${folderId}`),
        /**
         * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
         * @summary Get folder
         * @param {string|number} userId Canvas User ID
         * @param {string|number} folderId Canvas Folder ID
         * @returns {Promise<any>}
         */
        getFolderUsers: (userId, folderId) => helper.get(`/v1/users/${userId}/folders/${folderId}`),
        /**
         * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
         * @summary Get folder
         * @param {string|number} groupId Canvas Group ID
         * @param {string|number} folderId Canvas Folder ID
         * @returns {Promise<any>}
         */
        getFolderGroups: (groupId, folderId) => helper.get(`/v1/groups/${groupId}/folders/${folderId}`),
        /**
         * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
         * @summary Get folder
         * @param {string|number} folderId Canvas Folder ID
         * @returns {Promise<any>}
         */
        getFolderFolders: (folderId) => helper.get(`/v1/folders/${folderId}`),
        /**
         * Updates a folder
         * @summary Update folder
         * @param {string|number} folderId Canvas Folder ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateFolder: (folderId, body) => helper.put(`/v1/folders/${folderId}`, body),
        /**
         * Creates a folder in the specified context
         * @summary Create folder
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createFolderCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/folders`, body),
        /**
         * Creates a folder in the specified context
         * @summary Create folder
         * @param {string|number} userId Canvas User ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createFolderUsers: (userId, body) => helper.post(`/v1/users/${userId}/folders`, body),
        /**
         * Creates a folder in the specified context
         * @summary Create folder
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createFolderGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/folders`, body),
        /**
         * Creates a folder in the specified context
         * @summary Create folder
         * @param {string|number} folderId Canvas Folder ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createFolderFolders: (folderId, body) => helper.post(`/v1/folders/${folderId}/folders`, body),
        /**
         * Remove the specified folder. You can only delete empty folders unless you set the 'force' flag
         * @summary Delete folder
         * @param {string|number} folderId Canvas Folder ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        deleteFolder: (folderId, query) => helper.delete(`/v1/folders/${folderId}`, query),
        /**
         * Upload a file to a folder. This API endpoint is the first step in uploading a file. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Only those with the "Manage Files" permission on a course or group can upload files to a folder in that course or group.
         * @summary Upload a file
         * @param {string|number} folderId Canvas Folder ID
         * @returns {Promise<any>}
         */
        uploadFile: (folderId) => helper.post(`/v1/folders/${folderId}/files`),
        /**
         * Copy a file from elsewhere in Canvas into a folder. Copying a file across contexts (between courses and users) is permitted, but the source and destination must belong to the same institution.
         * @summary Copy a file
         * @param {string|number} destFolderId Canvas Dest folder ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        copyFile: (destFolderId, body) => helper.post(`/v1/folders/${destFolderId}/copy_file`, body),
        /**
         * Copy a folder (and its contents) from elsewhere in Canvas into a folder. Copying a folder across contexts (between courses and users) is permitted, but the source and destination must belong to the same institution. If the source and destination folders are in the same context, the source folder may not contain the destination folder. A folder will be renamed at its destination if another folder with the same name already exists.
         * @summary Copy a folder
         * @param {string|number} destFolderId Canvas Dest folder ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        copyFolder: (destFolderId, body) => helper.post(`/v1/folders/${destFolderId}/copy_folder`, body),
        /**
         * Sets copyright and license information for one or more files
         * @summary Set usage rights
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        setUsageRightsCourses: (courseId, body) => helper.put(`/v1/courses/${courseId}/usage_rights`, body),
        /**
         * Sets copyright and license information for one or more files
         * @summary Set usage rights
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        setUsageRightsGroups: (groupId, body) => helper.put(`/v1/groups/${groupId}/usage_rights`, body),
        /**
         * Sets copyright and license information for one or more files
         * @summary Set usage rights
         * @param {string|number} userId Canvas User ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        setUsageRightsUsers: (userId, body) => helper.put(`/v1/users/${userId}/usage_rights`, body),
        /**
         * Removes copyright and license information associated with one or more files
         * @summary Remove usage rights
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        removeUsageRightsCourses: (courseId, query) => helper.delete(`/v1/courses/${courseId}/usage_rights`, query),
        /**
         * Removes copyright and license information associated with one or more files
         * @summary Remove usage rights
         * @param {string|number} groupId Canvas Group ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        removeUsageRightsGroups: (groupId, query) => helper.delete(`/v1/groups/${groupId}/usage_rights`, query),
        /**
         * Removes copyright and license information associated with one or more files
         * @summary Remove usage rights
         * @param {string|number} userId Canvas User ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        removeUsageRightsUsers: (userId, query) => helper.delete(`/v1/users/${userId}/usage_rights`, query),
        /**
         * A paginated list of licenses that can be applied
         * @summary List licenses
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listLicensesCourses: (courseId) => helper.get(`/v1/courses/${courseId}/content_licenses`),
        /**
         * A paginated list of licenses that can be applied
         * @summary List licenses
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listLicensesGroups: (groupId) => helper.get(`/v1/groups/${groupId}/content_licenses`),
        /**
         * A paginated list of licenses that can be applied
         * @summary List licenses
         * @param {string|number} userId Canvas User ID
         * @returns {Promise<any>}
         */
        listLicensesUsers: (userId) => helper.get(`/v1/users/${userId}/content_licenses`),
    };
}
exports.default = default_1;
