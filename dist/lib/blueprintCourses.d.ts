import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Using 'default' as the template_id should suffice for the current implmentation (as there should be only one template per course). However, using specific template ids may become necessary in the future
     * @summary Get blueprint information
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    getBlueprintInformation: (courseId: string | number, templateId: string | number) => Promise<any>;
    /**
     * Returns a list of courses that are configured to receive updates from this blueprint
     * @summary Get associated course information
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    getAssociatedCourseInformation: (courseId: string | number, templateId: string | number) => Promise<any>;
    /**
     * Send a list of course ids to add or remove new associations for the template. Cannot add courses that do not belong to the blueprint course's account. Also cannot add other blueprint courses or courses that already have an association with another blueprint course.
     * @summary Update associated courses
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateAssociatedCourses: (courseId: string | number, templateId: string | number, body: any) => Promise<any>;
    /**
     * Begins a migration to push recently updated content to all associated courses. Only one migration can be running at a time.
     * @summary Begin a migration to push to associated courses
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    beginMigrationToPushToAssociatedCourses: (courseId: string | number, templateId: string | number, body: any) => Promise<any>;
    /**
     * If a blueprint course object is restricted, editing will be limited for copies in associated courses.
     * @summary Set or remove restrictions on a blueprint course object
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setOrRemoveRestrictionsOnBlueprintCourseObject: (courseId: string | number, templateId: string | number, body: any) => Promise<any>;
    /**
     * Retrieve a list of learning objects that have changed since the last blueprint sync operation.
     * @summary Get unsynced changes
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    getUnsyncedChanges: (courseId: string | number, templateId: string | number) => Promise<any>;
    /**
     * Shows a paginated list of migrations for the template, starting with the most recent. This endpoint can be called on a blueprint course. See also {api:MasterCourses::MasterTemplatesController#imports_index the associated course side}.
     * @summary List blueprint migrations
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @returns {Promise<any>}
     */
    listBlueprintMigrations: (courseId: string | number, templateId: string | number) => Promise<any>;
    /**
     * Shows the status of a migration. This endpoint can be called on a blueprint course. See also {api:MasterCourses::MasterTemplatesController#imports_show the associated course side}.
     * @summary Show a blueprint migration
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @param {string|number} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    showBlueprintMigration: (courseId: string | number, templateId: string | number, migrationId: string | number) => Promise<any>;
    /**
     * Show the changes that were propagated in a blueprint migration. This endpoint can be called on a blueprint course. See also {api:MasterCourses::MasterTemplatesController#import_details the associated course side}.
     * @summary Get migration details
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} templateId Canvas Template ID
     * @param {string|number} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    getMigrationDetails: (courseId: string | number, templateId: string | number, migrationId: string | number) => Promise<any>;
    /**
     * Shows a paginated list of migrations imported into a course associated with a blueprint, starting with the most recent. See also {api:MasterCourses::MasterTemplatesController#migrations_index the blueprint course side}. Use 'default' as the subscription_id to use the currently active blueprint subscription.
     * @summary List blueprint imports
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} subscriptionId Canvas Subscription ID
     * @returns {Promise<any>}
     */
    listBlueprintImports: (courseId: string | number, subscriptionId: string | number) => Promise<any>;
    /**
     * Shows the status of an import into a course associated with a blueprint. See also {api:MasterCourses::MasterTemplatesController#migrations_show the blueprint course side}.
     * @summary Show a blueprint import
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} subscriptionId Canvas Subscription ID
     * @param {string|number} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    showBlueprintImport: (courseId: string | number, subscriptionId: string | number, migrationId: string | number) => Promise<any>;
    /**
     * Show the changes that were propagated to a course associated with a blueprint. See also {api:MasterCourses::MasterTemplatesController#migration_details the blueprint course side}.
     * @summary Get import details
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} subscriptionId Canvas Subscription ID
     * @param {string|number} migrationId Canvas Migration ID
     * @returns {Promise<any>}
     */
    getImportDetails: (courseId: string | number, subscriptionId: string | number, migrationId: string | number) => Promise<any>;
};
