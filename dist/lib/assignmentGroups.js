var helper = require('../helper');
var assignmentGroups = {
    /**
     * Returns the paginated list of assignment groups for the current context. The returned groups are sorted by their position field.
     * @summary List assignment groups
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAssignmentGroups: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignment_groups", query);
    },
    /**
     * Returns the assignment group with the given id.
     * @summary Get an Assignment Group
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentGroupId Canvas Assignment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAssignmentGroup: function (courseId, assignmentGroupId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignment_groups/" + assignmentGroupId, query);
    },
    /**
     * Create a new assignment group for this course.
     * @summary Create an Assignment Group
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createAssignmentGroup: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/assignment_groups", body); },
    /**
     * Modify an existing Assignment Group. Accepts the same parameters as Assignment Group creation
     * @summary Edit an Assignment Group
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentGroupId Canvas Assignment group ID
     * @returns {Promise<any>}
     */
    editAssignmentGroup: function (courseId, assignmentGroupId) { return helper.put("/v1/courses/" + courseId + "/assignment_groups/" + assignmentGroupId); },
    /**
     * Deletes the assignment group with the given id.
     * @summary Destroy an Assignment Group
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentGroupId Canvas Assignment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    destroyAssignmentGroup: function (courseId, assignmentGroupId, query) {
        if (query === void 0) { query = ''; }
        return helper.delete("/v1/courses/" + courseId + "/assignment_groups/" + assignmentGroupId, query);
    },
};
module.exports = assignmentGroups;
