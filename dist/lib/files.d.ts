import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the total and used storage quota for the course, group, or user.
     * @summary Get quota information
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getQuotaInformationCourses: (courseId: string | number) => Promise<any>;
    /**
     * Returns the total and used storage quota for the course, group, or user.
     * @summary Get quota information
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    getQuotaInformationGroups: (groupId: string | number) => Promise<any>;
    /**
     * Returns the total and used storage quota for the course, group, or user.
     * @summary Get quota information
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getQuotaInformationUsers: (userId: string | number) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesCourses: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string|number} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesUsers: (userId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesGroups: (groupId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string|number} folderId Canvas Folder ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesFolders: (folderId: string | number, query?: any) => Promise<any>;
    /**
     * Determine the URL that should be used for inline preview of the file.
     * @summary Get public inline preview url
     * @param {string|number} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getPublicInlinePreviewUrl: (fileId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string|number} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileFiles: (fileId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileCourses: (courseId: string | number, fileId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileGroups: (groupId: string | number, fileId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string|number} userId Canvas User ID
     * @param {string|number} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileUsers: (userId: string | number, fileId: string | number, query?: any) => Promise<any>;
    /**
     * Update some settings on the specified file
     * @summary Update file
     * @param {string|number} fileId Canvas File ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateFile: (fileId: string | number, body: any) => Promise<any>;
    /**
     * Remove the specified file
     * @summary Delete file
     * @param {string|number} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteFile: (fileId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of folders in the folder.
     * @summary List folders
     * @param {string|number} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    listFolders: (folderId: string | number) => Promise<any>;
    /**
     * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
     * @summary List all folders
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listAllFoldersCourses: (courseId: string | number) => Promise<any>;
    /**
     * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
     * @summary List all folders
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listAllFoldersUsers: (userId: string | number) => Promise<any>;
    /**
     * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
     * @summary List all folders
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listAllFoldersGroups: (groupId: string | number) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string|number} courseId Canvas Course ID
     * @param {string} fullPath Full path
     * @returns {Promise<any>}
     */
    resolvePathCoursesFullPath: (courseId: string | number, fullPath: string) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    resolvePathCourses: (courseId: string | number) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string|number} userId Canvas User ID
     * @param {string} fullPath Full path
     * @returns {Promise<any>}
     */
    resolvePathUsersFullPath: (userId: string | number, fullPath: string) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    resolvePathUsers: (userId: string | number) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string|number} groupId Canvas Group ID
     * @param {string} fullPath Full path
     * @returns {Promise<any>}
     */
    resolvePathGroupsFullPath: (groupId: string | number, fullPath: string) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    resolvePathGroups: (groupId: string | number) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderCourses: (courseId: string | number, folderId: string | number) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string|number} userId Canvas User ID
     * @param {string|number} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderUsers: (userId: string | number, folderId: string | number) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderGroups: (groupId: string | number, folderId: string | number) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string|number} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderFolders: (folderId: string | number) => Promise<any>;
    /**
     * Updates a folder
     * @summary Update folder
     * @param {string|number} folderId Canvas Folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateFolder: (folderId: string | number, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderUsers: (userId: string | number, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderGroups: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string|number} folderId Canvas Folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderFolders: (folderId: string | number, body: any) => Promise<any>;
    /**
     * Remove the specified folder. You can only delete empty folders unless you set the 'force' flag
     * @summary Delete folder
     * @param {string|number} folderId Canvas Folder ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteFolder: (folderId: string | number, query?: any) => Promise<any>;
    /**
     * Upload a file to a folder. This API endpoint is the first step in uploading a file. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Only those with the "Manage Files" permission on a course or group can upload files to a folder in that course or group.
     * @summary Upload a file
     * @param {string|number} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    uploadFile: (folderId: string | number) => Promise<any>;
    /**
     * Copy a file from elsewhere in Canvas into a folder. Copying a file across contexts (between courses and users) is permitted, but the source and destination must belong to the same institution.
     * @summary Copy a file
     * @param {string|number} destFolderId Canvas Dest folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    copyFile: (destFolderId: string | number, body: any) => Promise<any>;
    /**
     * Copy a folder (and its contents) from elsewhere in Canvas into a folder. Copying a folder across contexts (between courses and users) is permitted, but the source and destination must belong to the same institution. If the source and destination folders are in the same context, the source folder may not contain the destination folder. A folder will be renamed at its destination if another folder with the same name already exists.
     * @summary Copy a folder
     * @param {string|number} destFolderId Canvas Dest folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    copyFolder: (destFolderId: string | number, body: any) => Promise<any>;
    /**
     * Sets copyright and license information for one or more files
     * @summary Set usage rights
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setUsageRightsCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Sets copyright and license information for one or more files
     * @summary Set usage rights
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setUsageRightsGroups: (groupId: string | number, body: any) => Promise<any>;
    /**
     * Sets copyright and license information for one or more files
     * @summary Set usage rights
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setUsageRightsUsers: (userId: string | number, body: any) => Promise<any>;
    /**
     * Removes copyright and license information associated with one or more files
     * @summary Remove usage rights
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeUsageRightsCourses: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Removes copyright and license information associated with one or more files
     * @summary Remove usage rights
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeUsageRightsGroups: (groupId: string | number, query?: any) => Promise<any>;
    /**
     * Removes copyright and license information associated with one or more files
     * @summary Remove usage rights
     * @param {string|number} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeUsageRightsUsers: (userId: string | number, query?: any) => Promise<any>;
    /**
     * A paginated list of licenses that can be applied
     * @summary List licenses
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listLicensesCourses: (courseId: string | number) => Promise<any>;
    /**
     * A paginated list of licenses that can be applied
     * @summary List licenses
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listLicensesGroups: (groupId: string | number) => Promise<any>;
    /**
     * A paginated list of licenses that can be applied
     * @summary List licenses
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listLicensesUsers: (userId: string | number) => Promise<any>;
};
