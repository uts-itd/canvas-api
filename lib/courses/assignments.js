const helper = require('../helper');

let assignments = {
    /**
     * Delete an assignment.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number} assignment Assignment ID.
     * 
     * https://canvas.instructure.com/doc/api/assignments.html#method.assignments.destroy
     */
    delete: (course, assignment) => helper.delete(`courses/${course}/assignments/${assignment}`),
    /**
     * List all or get a single assignment.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number} assignment Assignment ID.
     * 
     * https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index
     */
    get: (course, assignment='') => helper.get(`courses/${course}/assignments/${assignment}`),
    /**
     * Create an assignment.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {Object} assignmentData Assignment Object.
     * 
     * https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.create
     */
    create: (course, assignmentData) => helper.post(`courses/${course}/assignments/`, assignmentData),
    /**
     * Edit an assignment.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number} assignment Assignment ID.
     * @param {Object} assignmentData Assignment Object.
     * 
     * https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.update
     */
    update: (course, assignment, assignmentData) => helper.put(`courses/${course}/assignments/${assignment}`, assignmentData),
    overrides: {
        /**
         * List all or get a single assignment override.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {number} assignment Assignment ID.
         * @param {number} override Assignment override ID.
         * 
         * https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.index
         */
        get: (course, assignment, override='') => helper.get(`courses/${course}/assignments/${assignment}/overrides/${override}`),
        /**
         * Create an assignment override.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {number} assignment Assignment ID.
         * @param {Object} overrideData Assignment override object.
         * 
         * https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.create
         */
        create: (course, assignment, overrideData) => helper.post(`courses/${course}/assignments/${assignment}/overrides`, overrideData),
        /**
         * Update an assignment override.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {number} assignment Assignment ID.
         * @param {number} override Override ID.
         * @param {Object} overrideData Assignment override object.
         * 
         * https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.update
         */
        update: (course, assignment, override, overrideData) => helper.put(`courses/${course}/assignments/${assignment}/overrides/${override}`, overrideData),
        /**
         * Delete an assignment override.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * @param {number} assignment Assignment ID.
         * @param {number} override Assignment override ID.
         * 
         * https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.destroy
         */
        delete: (course, assignment) => helper.delete(`courses/${course}/assignments/${assignment}/overrides/${override}`),
        /**
         * Batch retrieve overrides in a course.
         * 
         * @param {number|string} course Course Canvas or SIS ID.
         * 
         * https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.batch_retrieve
         */
        batch: {
            get: (course) => helper.get(`courses/${course}/assignments/overrides/`),
            /**
             * Batch create overrides in a course.
             * 
             * @param {number|string} course Course Canvas or SIS ID.
             * @param {Object[]} batchOverrideData Array of assignment override objects.
             * 
             * https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.batch_create
             */
            create: (course, batchOverrideData) => helper.post(`courses/${course}/assignments/overrides`, batchOverrideData),
            /**
             * Batch update overrides in a course.
             * 
             * @param {number|string} course Course Canvas or SIS ID.
             * @param {Object[]} batchOverrideData Array of assignment override objects.
             * 
             * https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.batch_update
             */
            update: (course, batchOverrideData) => helper.put(`courses/${course}/assignments/overrides`, batchOverrideData),
        }
    }
}

module.exports = assignments;