import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesAccounts: (
      accountId: string | number,
      contentMigrationId: string | number,
    ) =>
      helper.get(
        `/v1/accounts/${accountId}/content_migrations/${contentMigrationId}/migration_issues`,
      ),
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesCourses: (courseId: string | number, contentMigrationId: string | number) =>
      helper.get(
        `/v1/courses/${courseId}/content_migrations/${contentMigrationId}/migration_issues`,
      ),
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesGroups: (groupId: string | number, contentMigrationId: string | number) =>
      helper.get(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}/migration_issues`),
    /**
     * Returns paginated migration issues
     * @summary List migration issues
     * @param {string|number} userId Canvas User ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    listMigrationIssuesUsers: (userId: string | number, contentMigrationId: string | number) =>
      helper.get(`/v1/users/${userId}/content_migrations/${contentMigrationId}/migration_issues`),
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueAccounts: (
      accountId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
    ) =>
      helper.get(
        `/v1/accounts/${accountId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
      ),
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueCourses: (
      courseId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
    ) =>
      helper.get(
        `/v1/courses/${courseId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
      ),
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueGroups: (
      groupId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
    ) =>
      helper.get(
        `/v1/groups/${groupId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
      ),
    /**
     * Returns data on an individual migration issue
     * @summary Get a migration issue
     * @param {string|number} userId Canvas User ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @returns {Promise<any>}
     */
    getMigrationIssueUsers: (
      userId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
    ) =>
      helper.get(
        `/v1/users/${userId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
      ),
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueAccounts: (
      accountId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
      body: any,
    ) =>
      helper.put(
        `/v1/accounts/${accountId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
        body,
      ),
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueCourses: (
      courseId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
      body: any,
    ) =>
      helper.put(
        `/v1/courses/${courseId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
        body,
      ),
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueGroups: (
      groupId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
      body: any,
    ) =>
      helper.put(
        `/v1/groups/${groupId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
        body,
      ),
    /**
     * Update the workflow_state of a migration issue
     * @summary Update a migration issue
     * @param {string|number} userId Canvas User ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @param {string|number} migrationIssueId Canvas Migration issue ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateMigrationIssueUsers: (
      userId: string | number,
      contentMigrationId: string | number,
      migrationIssueId: string | number,
      body: any,
    ) =>
      helper.put(
        `/v1/users/${userId}/content_migrations/${contentMigrationId}/migration_issues/${migrationIssueId}`,
        body,
      ),
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listContentMigrationsAccounts: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/content_migrations`),
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listContentMigrationsCourses: (courseId: string | number) =>
      helper.get(`/v1/courses/${courseId}/content_migrations`),
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listContentMigrationsGroups: (groupId: string | number) =>
      helper.get(`/v1/groups/${groupId}/content_migrations`),
    /**
     * Returns paginated content migrations
     * @summary List content migrations
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listContentMigrationsUsers: (userId: string | number) =>
      helper.get(`/v1/users/${userId}/content_migrations`),
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationAccounts: (
      accountId: string | number,
      contentMigrationId: string | number,
    ) => helper.get(`/v1/accounts/${accountId}/content_migrations/${contentMigrationId}`),
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationCourses: (courseId: string | number, contentMigrationId: string | number) =>
      helper.get(`/v1/courses/${courseId}/content_migrations/${contentMigrationId}`),
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationGroups: (groupId: string | number, contentMigrationId: string | number) =>
      helper.get(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}`),
    /**
     * Returns data on an individual content migration
     * @summary Get a content migration
     * @param {string|number} userId Canvas User ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    getContentMigrationUsers: (userId: string | number, contentMigrationId: string | number) =>
      helper.get(`/v1/users/${userId}/content_migrations/${contentMigrationId}`),
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationAccounts: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/content_migrations`, body),
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationCourses: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/content_migrations`, body),
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationGroups: (groupId: string | number, body: any) =>
      helper.post(`/v1/groups/${groupId}/content_migrations`, body),
    /**
     * Create a content migration. If the migration requires a file to be uploaded the actual processing of the file will start once the file upload process is completed. File uploading works as described in the {file:file_uploads.html File Upload Documentation} except that the values are set on a *pre_attachment* sub-hash. For migrations that don't require a file to be uploaded, like course copy, the processing will begin as soon as the migration is created. You can use the {api:ProgressController#show Progress API} to track the progress of the migration. The migration's progress is linked to with the _progress_url_ value. The two general workflows are: If no file upload is needed: 1. POST to create 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress For file uploading: 1. POST to create with file info in *pre_attachment* 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data 3. {api:ContentMigrationsController#show GET} the ContentMigration 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress (required if doing .zip file upload)
     * @summary Create a content migration
     * @param {string|number} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createContentMigrationUsers: (userId: string | number, body: any) =>
      helper.post(`/v1/users/${userId}/content_migrations`, body),
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationAccounts: (
      accountId: string | number,
      contentMigrationId: string | number,
    ) => helper.put(`/v1/accounts/${accountId}/content_migrations/${contentMigrationId}`),
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationCourses: (
      courseId: string | number,
      contentMigrationId: string | number,
    ) => helper.put(`/v1/courses/${courseId}/content_migrations/${contentMigrationId}`),
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string|number} groupId Canvas Group ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationGroups: (groupId: string | number, contentMigrationId: string | number) =>
      helper.put(`/v1/groups/${groupId}/content_migrations/${contentMigrationId}`),
    /**
     * Update a content migration. Takes same arguments as create except that you can't change the migration type. However, changing most settings after the migration process has started will not do anything. Generally updating the content migration will be used when there is a file upload problem. If the first upload has a problem you can supply new _pre_attachment_ values to start the process again.
     * @summary Update a content migration
     * @param {string|number} userId Canvas User ID
     * @param {string|number} contentMigrationId Canvas Content migration ID
     * @returns {Promise<any>}
     */
    updateContentMigrationUsers: (userId: string | number, contentMigrationId: string | number) =>
      helper.put(`/v1/users/${userId}/content_migrations/${contentMigrationId}`),
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsAccounts: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/content_migrations/migrators`),
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsCourses: (courseId: string | number) =>
      helper.get(`/v1/courses/${courseId}/content_migrations/migrators`),
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string|number} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsGroups: (groupId: string | number) =>
      helper.get(`/v1/groups/${groupId}/content_migrations/migrators`),
    /**
     * Lists the currently available migration types. These values may change.
     * @summary List Migration Systems
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listMigrationSystemsUsers: (userId: string | number) =>
      helper.get(`/v1/users/${userId}/content_migrations/migrators`),
  };
}
