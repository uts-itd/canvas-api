module.exports = (helper) => {
    return {
        /**
         * Returns paginated migration issues
         * @summary List migration issues
         * @param {string} accountId Canvas Account ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        listMigrationIssuesAccounts: (accountId, contentMigrationId) => helper.get(`/v1/accounts/${accountId}/content_migrations/${contentMigrationId}/migration_issues`),
        /**
         * Returns paginated migration issues
         * @summary List migration issues
         * @param {string} courseId Canvas Course ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        listMigrationIssuesCourses: (courseId, contentMigrationId) => helper.get(`/v1/courses/${courseId}/content_migrations/${contentMigrationId}/migration_issues`),
        /**
         * Returns paginated migration issues
         * @summary List migration issues
         * @param {string} groupId Canvas Group ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        listMigrationIssuesGroups: (groupId, contentMigrationId) => helper.get(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}/migration_issues`),
        /**
         * Returns paginated migration issues
         * @summary List migration issues
         * @param {string} userId Canvas User ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        listMigrationIssuesUsers: (userId, contentMigrationId) => helper.get(`/v1/users/${userId}/content_migrations/${contentMigrationId}/migration_issues`),
        /**
         * Returns data on an individual migration issue
         * @summary Get a migration issue
         * @param {string} accountId Canvas Account ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @returns {Promise<any>}
         */
        getMigrationIssueAccounts: (accountId, contentMigrationId, migrationIssueId) => helper.get(`/v1/accounts/${accountId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`),
        /**
         * Returns data on an individual migration issue
         * @summary Get a migration issue
         * @param {string} courseId Canvas Course ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @returns {Promise<any>}
         */
        getMigrationIssueCourses: (courseId, contentMigrationId, migrationIssueId) => helper.get(`/v1/courses/${courseId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`),
        /**
         * Returns data on an individual migration issue
         * @summary Get a migration issue
         * @param {string} groupId Canvas Group ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @returns {Promise<any>}
         */
        getMigrationIssueGroups: (groupId, contentMigrationId, migrationIssueId) => helper.get(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`),
        /**
         * Returns data on an individual migration issue
         * @summary Get a migration issue
         * @param {string} userId Canvas User ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @returns {Promise<any>}
         */
        getMigrationIssueUsers: (userId, contentMigrationId, migrationIssueId) => helper.get(`/v1/users/${userId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`),
        /**
         * Update the workflow_state of a migration issue
         * @summary Update a migration issue
         * @param {string} accountId Canvas Account ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateMigrationIssueAccounts: (accountId, contentMigrationId, migrationIssueId, body) => helper.put(`/v1/accounts/${accountId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`, body),
        /**
         * Update the workflow_state of a migration issue
         * @summary Update a migration issue
         * @param {string} courseId Canvas Course ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateMigrationIssueCourses: (courseId, contentMigrationId, migrationIssueId, body) => helper.put(`/v1/courses/${courseId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`, body),
        /**
         * Update the workflow_state of a migration issue
         * @summary Update a migration issue
         * @param {string} groupId Canvas Group ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateMigrationIssueGroups: (groupId, contentMigrationId, migrationIssueId, body) => helper.put(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`, body),
        /**
         * Update the workflow_state of a migration issue
         * @summary Update a migration issue
         * @param {string} userId Canvas User ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @param {string} migrationIssueId Canvas Migration issue ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        updateMigrationIssueUsers: (userId, contentMigrationId, migrationIssueId, body) => helper.put(`/v1/users/${userId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`, body),
        /**
         * Returns paginated content migrations
         * @summary List content migrations
         * @param {string} accountId Canvas Account ID
         * @returns {Promise<any>}
         */
        listContentMigrationsAccounts: (accountId) => helper.get(`/v1/accounts/${accountId}/content_migrations`),
        /**
         * Returns paginated content migrations
         * @summary List content migrations
         * @param {string} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listContentMigrationsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/content_migrations`),
        /**
         * Returns paginated content migrations
         * @summary List content migrations
         * @param {string} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listContentMigrationsGroups: (groupId) => helper.get(`/v1/groups/${groupId}/content_migrations`),
        /**
         * Returns paginated content migrations
         * @summary List content migrations
         * @param {string} userId Canvas User ID
         * @returns {Promise<any>}
         */
        listContentMigrationsUsers: (userId) => helper.get(`/v1/users/${userId}/content_migrations`),
        /**
         * Returns data on an individual content migration
         * @summary Get a content migration
         * @param {string} accountId Canvas Account ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        getContentMigrationAccounts: (accountId, contentMigrationId) => helper.get(`/v1/accounts/${accountId}/content_migrations/${contentMigrationId}`),
        /**
         * Returns data on an individual content migration
         * @summary Get a content migration
         * @param {string} courseId Canvas Course ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        getContentMigrationCourses: (courseId, contentMigrationId) => helper.get(`/v1/courses/${courseId}/content_migrations/${contentMigrationId}`),
        /**
         * Returns data on an individual content migration
         * @summary Get a content migration
         * @param {string} groupId Canvas Group ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        getContentMigrationGroups: (groupId, contentMigrationId) => helper.get(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}`),
        /**
         * Returns data on an individual content migration
         * @summary Get a content migration
         * @param {string} userId Canvas User ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        getContentMigrationUsers: (userId, contentMigrationId) => helper.get(`/v1/users/${userId}/content_migrations/${contentMigrationId}`),
        /**
         * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
         * @summary Create a content migration
         * @param {string} accountId Canvas Account ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createContentMigrationAccounts: (accountId, body) => helper.post(`/v1/accounts/${accountId}/content_migrations`, body),
        /**
         * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
         * @summary Create a content migration
         * @param {string} courseId Canvas Course ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createContentMigrationCourses: (courseId, body) => helper.post(`/v1/courses/${courseId}/content_migrations`, body),
        /**
         * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
         * @summary Create a content migration
         * @param {string} groupId Canvas Group ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createContentMigrationGroups: (groupId, body) => helper.post(`/v1/groups/${groupId}/content_migrations`, body),
        /**
         * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
         * @summary Create a content migration
         * @param {string} userId Canvas User ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createContentMigrationUsers: (userId, body) => helper.post(`/v1/users/${userId}/content_migrations`, body),
        /**
         * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
         * @summary Update a content migration
         * @param {string} accountId Canvas Account ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        updateContentMigrationAccounts: (accountId, contentMigrationId) => helper.put(`/v1/accounts/${accountId}/content_migrations/${contentMigrationId}`),
        /**
         * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
         * @summary Update a content migration
         * @param {string} courseId Canvas Course ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        updateContentMigrationCourses: (courseId, contentMigrationId) => helper.put(`/v1/courses/${courseId}/content_migrations/${contentMigrationId}`),
        /**
         * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
         * @summary Update a content migration
         * @param {string} groupId Canvas Group ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        updateContentMigrationGroups: (groupId, contentMigrationId) => helper.put(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}`),
        /**
         * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
         * @summary Update a content migration
         * @param {string} userId Canvas User ID
         * @param {string} contentMigrationId Canvas Content migration ID
         * @returns {Promise<any>}
         */
        updateContentMigrationUsers: (userId, contentMigrationId) => helper.put(`/v1/users/${userId}/content_migrations/${contentMigrationId}`),
        /**
         * Lists the currently available migration types. These values may change.
         * @summary List Migration Systems
         * @param {string} accountId Canvas Account ID
         * @returns {Promise<any>}
         */
        listMigrationSystemsAccounts: (accountId) => helper.get(`/v1/accounts/${accountId}/content_migrations/migrators`),
        /**
         * Lists the currently available migration types. These values may change.
         * @summary List Migration Systems
         * @param {string} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listMigrationSystemsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/content_migrations/migrators`),
        /**
         * Lists the currently available migration types. These values may change.
         * @summary List Migration Systems
         * @param {string} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listMigrationSystemsGroups: (groupId) => helper.get(`/v1/groups/${groupId}/content_migrations/migrators`),
        /**
         * Lists the currently available migration types. These values may change.
         * @summary List Migration Systems
         * @param {string} userId Canvas User ID
         * @returns {Promise<any>}
         */
        listMigrationSystemsUsers: (userId) => helper.get(`/v1/users/${userId}/content_migrations/migrators`),
    };
};
