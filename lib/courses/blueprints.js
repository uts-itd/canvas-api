const helper = require('../helper');

let blueprints = {
    /**
     * Get blueprint information.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
     * 
     * https://canvas.instructure.com/doc/api/all_resources.html#method.master_courses/master_templates.show
     */
    get: (course, templateID='default') => helper.get(`courses/${course}/blueprint_templates/${templateID}`),
    courses: {
        /**
         * Get associated course information.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
         * 
         * https://canvas.instructure.com/doc/api/all_resources.html#method.master_courses/master_templates.associated_courses
         */
        get: (course, templateID='default') => helper.get(`courses/${course}/blueprint_templates/${templateID}/associated_courses`),
        /**
         * Update associated courses.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
         * @param {Object} options Object of courses to add and remove.
         * 
         * https://canvas.instructure.com/doc/api/all_resources.html#method.master_courses/master_templates.update_associations
         */
        update: (course, templateID='default', options) => helper.put(`courses/${course}/blueprint_templates/${templateID}/update_associations`, options),
    },
    migrations: {
        /**
         * Begin a migration to push to associated courses.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
         * @param {Object} options Sync options object.
         * 
         * https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.queue_migration
         */
        sync: (course, templateID='default') => helper.post(`courses/${course}/blueprint_templates/${templateID}/migrations`, options),
        /**
         * Get unsynced changes.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
         * 
         * https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.unsynced_changes
         */
        getUnsynced: (course, templateID='default') => helper.get(`courses/${course}/blueprint_templates/${templateID}/unsynced_changes`),
        /**
         * List or get a single blueprint migration.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
         * @param {number} migrationID Blueprint Migration Canvas ID.
         * 
         * https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.migrations_index
         */
        get: (course, migrationID='', templateID='default') => helper.get(`courses/${course}/blueprint_templates/${templateID}/migrations/${migrationID}`),
        /**
         * Get migration details.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
         * @param {number} migrationID Blueprint Migration Canvas ID.
         * 
         * https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.migration_details
         */
        details: (course, migrationID, templateID='default') => helper.get(`courses/${course}/blueprint_templates/${templateID}/migrations/${migrationID}/details`),
    },
    imports: {
        /**
         * List or show a single blueprint import.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} subscriptionID Blueprint Canvas ID. Currently only 'default' is used.
         * @param {number} migrationID Blueprint Migration Canvas ID.
         * 
         * https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.imports_show
         */
        get: (course, migrationID='', subscriptionID='default') => helper.get(`courses/${course}/blueprint_subscriptions/${subscriptionID}/migrations/${migrationID}`),
        /**
         * Get import details.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
         * @param {number} migrationID Blueprint Migration Canvas ID.
         * 
         * https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.migration_details
         */
        details: (course, migrationID, templateID='default') => helper.get(`courses/${course}/blueprint_subscriptions/${templateID}/migrations/${migrationID}/details`),
    },
    /**
     * Set or remove restrictions on a blueprint course object.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {string} templateID Blueprint Canvas ID. Currently only 'default' is used.
     * @param {Object} options Object of restrictions to add and remove.
     * 
     * https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.restrict_item
     */
    restrictions: (course, templateID='default', options) => helper.put(`courses/${course}/blueprint_templates/${templateID}/restrict_item`, options)
}

module.exports = blueprints;