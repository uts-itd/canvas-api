declare function _exports(helper: any): {
    /**
     * Returns the total and used storage quota for the course, group, or user.
     * @summary Get quota information
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getQuotaInformationCourses: (courseId: string) => Promise<any>;
    /**
     * Returns the total and used storage quota for the course, group, or user.
     * @summary Get quota information
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    getQuotaInformationGroups: (groupId: string) => Promise<any>;
    /**
     * Returns the total and used storage quota for the course, group, or user.
     * @summary Get quota information
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getQuotaInformationUsers: (userId: string) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesCourses: (courseId: string, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesUsers: (userId: string, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesGroups: (groupId: string, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of files for the folder or course.
     * @summary List files
     * @param {string} folderId Canvas Folder ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFilesFolders: (folderId: string, query?: any) => Promise<any>;
    /**
     * Determine the URL that should be used for inline preview of the file.
     * @summary Get public inline preview url
     * @param {string} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getPublicInlinePreviewUrl: (fileId: string, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileFiles: (fileId: string, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string} courseId Canvas Course ID
     * @param {string} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileCourses: (courseId: string, fileId: string, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string} groupId Canvas Group ID
     * @param {string} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileGroups: (groupId: string, fileId: string, query?: any) => Promise<any>;
    /**
     * Returns the standard attachment json object
     * @summary Get file
     * @param {string} userId Canvas User ID
     * @param {string} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getFileUsers: (userId: string, fileId: string, query?: any) => Promise<any>;
    /**
     * Update some settings on the specified file
     * @summary Update file
     * @param {string} fileId Canvas File ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateFile: (fileId: string, body: any) => Promise<any>;
    /**
     * Remove the specified file
     * @summary Delete file
     * @param {string} fileId Canvas File ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteFile: (fileId: string, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of folders in the folder.
     * @summary List folders
     * @param {string} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    listFolders: (folderId: string) => Promise<any>;
    /**
     * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
     * @summary List all folders
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listAllFoldersCourses: (courseId: string) => Promise<any>;
    /**
     * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
     * @summary List all folders
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listAllFoldersUsers: (userId: string) => Promise<any>;
    /**
     * Returns the paginated list of all folders for the given context. This will be returned as a flat list containing all subfolders as well.
     * @summary List all folders
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listAllFoldersGroups: (groupId: string) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string} courseId Canvas Course ID
     * @param {undefined} fullPath Full path
     * @returns {Promise<any>}
     */
    resolvePathCoursesFullPath: (courseId: string, fullPath: undefined) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    resolvePathCourses: (courseId: string) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string} userId Canvas User ID
     * @param {undefined} fullPath Full path
     * @returns {Promise<any>}
     */
    resolvePathUsersFullPath: (userId: string, fullPath: undefined) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    resolvePathUsers: (userId: string) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string} groupId Canvas Group ID
     * @param {undefined} fullPath Full path
     * @returns {Promise<any>}
     */
    resolvePathGroupsFullPath: (groupId: string, fullPath: undefined) => Promise<any>;
    /**
     * Given the full path to a folder, returns a list of all Folders in the path hierarchy, starting at the root folder, and ending at the requested folder. The given path is relative to the context's root folder and does not include the root folder's name (e.g., "course files"). If an empty path is given, the context's root folder alone is returned. Otherwise, if no folder exists with the given full path, a Not Found error is returned.
     * @summary Resolve path
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    resolvePathGroups: (groupId: string) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string} courseId Canvas Course ID
     * @param {string} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderCourses: (courseId: string, folderId: string) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string} userId Canvas User ID
     * @param {string} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderUsers: (userId: string, folderId: string) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string} groupId Canvas Group ID
     * @param {string} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderGroups: (groupId: string, folderId: string) => Promise<any>;
    /**
     * Returns the details for a folder You can get the root folder from a context by using 'root' as the :id. For example, you could get the root folder for a course like:
     * @summary Get folder
     * @param {string} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    getFolderFolders: (folderId: string) => Promise<any>;
    /**
     * Updates a folder
     * @summary Update folder
     * @param {string} folderId Canvas Folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateFolder: (folderId: string, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderUsers: (userId: string, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderGroups: (groupId: string, body: any) => Promise<any>;
    /**
     * Creates a folder in the specified context
     * @summary Create folder
     * @param {string} folderId Canvas Folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createFolderFolders: (folderId: string, body: any) => Promise<any>;
    /**
     * Remove the specified folder. You can only delete empty folders unless you set the 'force' flag
     * @summary Delete folder
     * @param {string} folderId Canvas Folder ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteFolder: (folderId: string, query?: any) => Promise<any>;
    /**
     * Upload a file to a folder. This API endpoint is the first step in uploading a file. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Only those with the "Manage Files" permission on a course or group can upload files to a folder in that course or group.
     * @summary Upload a file
     * @param {string} folderId Canvas Folder ID
     * @returns {Promise<any>}
     */
    uploadFile: (folderId: string) => Promise<any>;
    /**
     * Copy a file from elsewhere in Canvas into a folder. Copying a file across contexts (between courses and users) is permitted, but the source and destination must belong to the same institution.
     * @summary Copy a file
     * @param {string} destFolderId Canvas Dest folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    copyFile: (destFolderId: string, body: any) => Promise<any>;
    /**
     * Copy a folder (and its contents) from elsewhere in Canvas into a folder. Copying a folder across contexts (between courses and users) is permitted, but the source and destination must belong to the same institution. If the source and destination folders are in the same context, the source folder may not contain the destination folder. A folder will be renamed at its destination if another folder with the same name already exists.
     * @summary Copy a folder
     * @param {string} destFolderId Canvas Dest folder ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    copyFolder: (destFolderId: string, body: any) => Promise<any>;
    /**
     * Sets copyright and license information for one or more files
     * @summary Set usage rights
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setUsageRightsCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Sets copyright and license information for one or more files
     * @summary Set usage rights
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setUsageRightsGroups: (groupId: string, body: any) => Promise<any>;
    /**
     * Sets copyright and license information for one or more files
     * @summary Set usage rights
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setUsageRightsUsers: (userId: string, body: any) => Promise<any>;
    /**
     * Removes copyright and license information associated with one or more files
     * @summary Remove usage rights
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeUsageRightsCourses: (courseId: string, query: any) => Promise<any>;
    /**
     * Removes copyright and license information associated with one or more files
     * @summary Remove usage rights
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeUsageRightsGroups: (groupId: string, query: any) => Promise<any>;
    /**
     * Removes copyright and license information associated with one or more files
     * @summary Remove usage rights
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    removeUsageRightsUsers: (userId: string, query: any) => Promise<any>;
    /**
     * A paginated list of licenses that can be applied
     * @summary List licenses
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listLicensesCourses: (courseId: string) => Promise<any>;
    /**
     * A paginated list of licenses that can be applied
     * @summary List licenses
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listLicensesGroups: (groupId: string) => Promise<any>;
    /**
     * A paginated list of licenses that can be applied
     * @summary List licenses
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listLicensesUsers: (userId: string) => Promise<any>;
};
export = _exports;
