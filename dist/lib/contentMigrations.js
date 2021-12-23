var helper = require('../helper');
var contentMigrations = {
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesAccounts: function (accountId, contentMigrationId) { return helper.get("/v1/accounts/" + accountId + "/content_migrations/" + contentMigrationId + "/migration_issues"); },
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesCourses: function (courseId, contentMigrationId) { return helper.get("/v1/courses/" + courseId + "/content_migrations/" + contentMigrationId + "/migration_issues"); },
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesGroups: function (groupId, contentMigrationId) { return helper.get("/v1/groups/" + groupId + "/content_migrations/" + contentMigrationId + "/migration_issues"); },
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesUsers: function (userId, contentMigrationId) { return helper.get("/v1/users/" + userId + "/content_migrations/" + contentMigrationId + "/migration_issues"); },
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueAccounts: function (accountId, contentMigrationId, migrationIssueId) { return helper.get("/v1/accounts/" + accountId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId); },
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueCourses: function (courseId, contentMigrationId, migrationIssueId) { return helper.get("/v1/courses/" + courseId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId); },
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueGroups: function (groupId, contentMigrationId, migrationIssueId) { return helper.get("/v1/groups/" + groupId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId); },
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueUsers: function (userId, contentMigrationId, migrationIssueId) { return helper.get("/v1/users/" + userId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId); },
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueAccounts: function (accountId, contentMigrationId, migrationIssueId, body) { return helper.put("/v1/accounts/" + accountId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId, body); },
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueCourses: function (courseId, contentMigrationId, migrationIssueId, body) { return helper.put("/v1/courses/" + courseId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId, body); },
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueGroups: function (groupId, contentMigrationId, migrationIssueId, body) { return helper.put("/v1/groups/" + groupId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId, body); },
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @param {string} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueUsers: function (userId, contentMigrationId, migrationIssueId, body) { return helper.put("/v1/users/" + userId + "/content_migrations/" + contentMigrationId + "/migration_issues/" + migrationIssueId, body); },
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listContentMigrationsAccounts: function (accountId) { return helper.get("/v1/accounts/" + accountId + "/content_migrations"); },
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listContentMigrationsCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/content_migrations"); },
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listContentMigrationsGroups: function (groupId) { return helper.get("/v1/groups/" + groupId + "/content_migrations"); },
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listContentMigrationsUsers: function (userId) { return helper.get("/v1/users/" + userId + "/content_migrations"); },
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationAccounts: function (accountId, contentMigrationId) { return helper.get("/v1/accounts/" + accountId + "/content_migrations/" + contentMigrationId); },
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationCourses: function (courseId, contentMigrationId) { return helper.get("/v1/courses/" + courseId + "/content_migrations/" + contentMigrationId); },
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationGroups: function (groupId, contentMigrationId) { return helper.get("/v1/groups/" + groupId + "/content_migrations/" + contentMigrationId); },
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationUsers: function (userId, contentMigrationId) { return helper.get("/v1/users/" + userId + "/content_migrations/" + contentMigrationId); },
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationAccounts: function (accountId, body) { return helper.post("/v1/accounts/" + accountId + "/content_migrations", body); },
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationCourses: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/content_migrations", body); },
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationGroups: function (groupId, body) { return helper.post("/v1/groups/" + groupId + "/content_migrations", body); },
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationUsers: function (userId, body) { return helper.post("/v1/users/" + userId + "/content_migrations", body); },
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} accountId Canvas Account ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationAccounts: function (accountId, contentMigrationId) { return helper.put("/v1/accounts/" + accountId + "/content_migrations/" + contentMigrationId); },
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} courseId Canvas Course ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationCourses: function (courseId, contentMigrationId) { return helper.put("/v1/courses/" + courseId + "/content_migrations/" + contentMigrationId); },
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} groupId Canvas Group ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationGroups: function (groupId, contentMigrationId) { return helper.put("/v1/groups/" + groupId + "/content_migrations/" + contentMigrationId); },
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string} userId Canvas User ID
     * @param {string} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationUsers: function (userId, contentMigrationId) { return helper.put("/v1/users/" + userId + "/content_migrations/" + contentMigrationId); },
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsAccounts: function (accountId) { return helper.get("/v1/accounts/" + accountId + "/content_migrations/migrators"); },
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/content_migrations/migrators"); },
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsGroups: function (groupId) { return helper.get("/v1/groups/" + groupId + "/content_migrations/migrators"); },
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsUsers: function (userId) { return helper.get("/v1/users/" + userId + "/content_migrations/migrators"); },
};
module.exports = contentMigrations;
