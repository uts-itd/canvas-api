const helper = require('../helper');
let blueprintCourses = {
    /**
     * Using 'default' as the template_id should suffice for the current implmentation (as there should be only one template per course). However, using specific template ids may become necessary in the future
     * @summary Get blueprint information
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    getBlueprintInformation: (courseId, templateId) => helper.get(`/v1/courses/${courseId}/blueprint_templates/${templateId}`),
    /**
     * Returns a list of courses that are configured to receive updates from this blueprint
     * @summary Get associated course information
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    getAssociatedCourseInformation: (courseId, templateId) => helper.get(`/v1/courses/${courseId}/blueprint_templates/${templateId}/associated_courses`),
    /**
     * Send a list of course ids to add or remove new associations for the template. Cannot add courses that do not belong to the blueprint course's account. Also cannot add other blueprint courses or courses that already have an association with another blueprint course.
     * @summary Update associated courses
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateAssociatedCourses: (courseId, templateId, body) => helper.put(`/v1/courses/${courseId}/blueprint_templates/${templateId}/update_associations`, body),
    /**
     * Begins a migration to push recently updated content to all associated courses. Only one migration can be running at a time.
     * @summary Begin a migration to push to associated courses
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    beginMigrationToPushToAssociatedCourses: (courseId, templateId, body) => helper.post(`/v1/courses/${courseId}/blueprint_templates/${templateId}/migrations`, body),
    /**
     * If a blueprint course object is restricted, editing will be limited for copies in associated courses.
     * @summary Set or remove restrictions on a blueprint course object
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setOrRemoveRestrictionsOnBlueprintCourseObject: (courseId, templateId, body) => helper.put(`/v1/courses/${courseId}/blueprint_templates/${templateId}/restrict_item`, body),
    /**
     * Retrieve a list of learning objects that have changed since the last blueprint sync operation.
     * @summary Get unsynced changes
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    getUnsyncedChanges: (courseId, templateId) => helper.get(`/v1/courses/${courseId}/blueprint_templates/${templateId}/unsynced_changes`),
    /**
     * Shows a paginated list of migrations for the template, starting with the most recent. This endpoint can be called on a blueprint course. See also {api:MasterCourses::MasterTemplatesController#imports_index the associated course side}.
     * @summary List blueprint migrations
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    listBlueprintMigrations: (courseId, templateId) => helper.get(`/v1/courses/${courseId}/blueprint_templates/${templateId}/migrations`),
    /**
     * Shows the status of a migration. This endpoint can be called on a blueprint course. See also {api:MasterCourses::MasterTemplatesController#imports_show the associated course side}.
     * @summary Show a blueprint migration
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @param {string} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    showBlueprintMigration: (courseId, templateId, migrationId) => helper.get(`/v1/courses/${courseId}/blueprint_templates/${templateId}/migrations/${migrationId}`),
    /**
     * Show the changes that were propagated in a blueprint migration. This endpoint can be called on a blueprint course. See also {api:MasterCourses::MasterTemplatesController#import_details the associated course side}.
     * @summary Get migration details
     * @param {string} courseId Canvas Course ID
     * @param {string} templateId Canvas Template ID
     * @param {string} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    getMigrationDetails: (courseId, templateId, migrationId) => helper.get(`/v1/courses/${courseId}/blueprint_templates/${templateId}/migrations/${migrationId}/details`),
    /**
     * Shows a paginated list of migrations imported into a course associated with a blueprint, starting with the most recent. See also {api:MasterCourses::MasterTemplatesController#migrations_index the blueprint course side}. Use 'default' as the subscription_id to use the currently active blueprint subscription.
     * @summary List blueprint imports
     * @param {string} courseId Canvas Course ID
     * @param {string} subscriptionId Canvas Subscription ID
     * @returns {Promise<any>}
     */
    listBlueprintImports: (courseId, subscriptionId) => helper.get(`/v1/courses/${courseId}/blueprint_subscriptions/${subscriptionId}/migrations`),
    /**
     * Shows the status of an import into a course associated with a blueprint. See also {api:MasterCourses::MasterTemplatesController#migrations_show the blueprint course side}.
     * @summary Show a blueprint import
     * @param {string} courseId Canvas Course ID
     * @param {string} subscriptionId Canvas Subscription ID
     * @param {string} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    showBlueprintImport: (courseId, subscriptionId, migrationId) => helper.get(`/v1/courses/${courseId}/blueprint_subscriptions/${subscriptionId}/migrations/${migrationId}`),
    /**
     * Show the changes that were propagated to a course associated with a blueprint. See also {api:MasterCourses::MasterTemplatesController#migration_details the blueprint course side}.
     * @summary Get import details
     * @param {string} courseId Canvas Course ID
     * @param {string} subscriptionId Canvas Subscription ID
     * @param {string} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    getImportDetails: (courseId, subscriptionId, migrationId) => helper.get(`/v1/courses/${courseId}/blueprint_subscriptions/${subscriptionId}/migrations/${migrationId}/details`),
};
module.exports = blueprintCourses;
