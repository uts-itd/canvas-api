const helper = require('../helper');

let assignmentGroups = {
    /**
     * List or get a single assignment group.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number} assignmentGroup Assignment group Canvas ID.
     * 
     * https://canvas.instructure.com/doc/api/assignment_groups.html#method.assignment_groups.index
     */
    get: (course, assignmentGroup='') => helper.get(`courses/${course}/assignment_groups/${assignmentGroup}`),

    /**
     * Create an assignment group.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {Object} options Assignment group object.
     * 
     * https://canvas.instructure.com/doc/api/assignment_groups.html#method.assignment_groups_api.create
     */
    create: (course, options) => helper.post(`courses/${course}/assignment_groups`, options),

    /**
     * Edit an assignment group.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number} assignmentGroup Assignment group Canvas ID.
     * @param {Object} options Assignment group object.
     * 
     * https://canvas.instructure.com/doc/api/assignment_groups.html#method.assignment_groups_api.update
     */
    update: (course, assignmentGroup, options) => helper.put(`courses/${course}/assignment_groups/${assignmentGroup}`, options),

    /**
     * Delete an assignment group.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number} assignmentGroup Assignment group Canvas ID.
     * 
     * https://canvas.instructure.com/doc/api/assignment_groups.html#method.assignment_groups_api.destroy
     */
    delete: (course, assignmentGroup) => helper.delete(`courses/${course}/assignment_groups/${assignmentGroup}`),
}

module.exports = assignmentGroups;