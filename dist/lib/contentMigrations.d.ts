declare function _exports(helper: any): {
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesAccounts: (accountId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesCourses: (courseId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesGroups: (groupId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesUsers: (userId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueAccounts: (accountId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueCourses: (courseId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueGroups: (groupId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueUsers: (userId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueAccounts: (accountId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueCourses: (courseId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueGroups: (groupId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueUsers: (userId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listContentMigrationsAccounts: (accountId: string) => Promise<any>;
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listContentMigrationsCourses: (courseId: string) => Promise<any>;
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listContentMigrationsGroups: (groupId: string) => Promise<any>;
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listContentMigrationsUsers: (userId: string) => Promise<any>;
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationAccounts: (accountId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationCourses: (courseId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationGroups: (groupId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationUsers: (userId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationAccounts: (accountId: string, body: any) => Promise<any>;
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationCourses: (courseId: string, body: any) => Promise<any>;
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationGroups: (groupId: string, body: any) => Promise<any>;
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationUsers: (userId: string, body: any) => Promise<any>;
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationAccounts: (accountId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationCourses: (courseId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationGroups: (groupId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationUsers: (userId: string, contentMigrationId: string) => Promise<any>;
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsAccounts: (accountId: string) => Promise<any>;
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsCourses: (courseId: string) => Promise<any>;
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsGroups: (groupId: string) => Promise<any>;
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsUsers: (userId: string) => Promise<any>;
};
export = _exports;
