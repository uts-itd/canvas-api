export = assignments;
declare let assignments: {
    /**
     * Delete the given assignment.
     * @summary Delete an assignment
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    deleteAssignment: (courseId: string, assignmentId: string) => Promise<any>;
    /**
     * Returns the paginated list of assignments for the current context.
     * @summary List assignments
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAssignments: (courseId: string, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of assignments for the specified user if the current user has rights to view. See {api:AssignmentsApiController#index List assignments} for valid arguments.
     * @summary List assignments for user
     * @param {string} userId Canvas User ID
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listAssignmentsForUser: (userId: string, courseId: string) => Promise<any>;
    /**
     * Returns the assignment with the given id.
     * @summary Get a single assignment
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleAssignment: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
    /**
     * Create a new assignment for this course. The assignment is created in the active state.
     * @summary Create an assignment
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createAssignment: (courseId: string, body: any) => Promise<any>;
    /**
     * Modify an existing assignment. If the assignment [assignment_overrides] key is absent, any existing overrides are kept as is. If the assignment [assignment_overrides] key is present, existing overrides are updated or deleted (and new ones created, as necessary) to match the provided list.
     * @summary Edit an assignment
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editAssignment: (courseId: string, assignmentId: string, body: any) => Promise<any>;
    /**
     * Returns the paginated list of overrides for this assignment that target sections/groups/students visible to the current user.
     * @summary List assignment overrides
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    listAssignmentOverrides: (courseId: string, assignmentId: string) => Promise<any>;
    /**
     * Returns details of the the override with the given id.
     * @summary Get a single assignment override
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    getSingleAssignmentOverride: (courseId: string, assignmentId: string, overrideId: string) => Promise<any>;
    /**
     * Responds with a redirect to the override for the given group, if any (404 otherwise).
     * @summary Redirect to the assignment override for a group
     * @param {string} groupId Canvas Group ID
     * @param {string} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    redirectToAssignmentOverrideForGroup: (groupId: string, assignmentId: string) => Promise<any>;
    /**
     * Responds with a redirect to the override for the given section, if any (404 otherwise).
     * @summary Redirect to the assignment override for a section
     * @param {string} courseSectionId Canvas Course section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    redirectToAssignmentOverrideForSection: (courseSectionId: string, assignmentId: string) => Promise<any>;
    /**
     * One of student_ids, group_id, or course_section_id must be present. At most one should be present; if multiple are present only the most specific (student_ids first, then group_id, then course_section_id) is used and any others are ignored.
     * @summary Create an assignment override
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createAssignmentOverride: (courseId: string, assignmentId: string, body: any) => Promise<any>;
    /**
     * All current overridden values must be supplied if they are to be retained; e.g. if due_at was overridden, but this PUT omits a value for due_at, due_at will no longer be overridden. If the override is adhoc and student_ids is not supplied, the target override set is unchanged. Target override sets cannot be changed for group or section overrides.
     * @summary Update an assignment override
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} overrideId Canvas Override ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateAssignmentOverride: (courseId: string, assignmentId: string, overrideId: string, body: any) => Promise<any>;
    /**
     * Deletes an override and returns its former details.
     * @summary Delete an assignment override
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} overrideId Canvas Override ID
     * @returns {Promise<any>}
     */
    deleteAssignmentOverride: (courseId: string, assignmentId: string, overrideId: string) => Promise<any>;
    /**
     * Returns a list of specified overrides in this course, providing they target sections/groups/students visible to the current user. Returns null elements in the list for requests that were not found.
     * @summary Batch retrieve overrides in a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    batchRetrieveOverridesInCourse: (courseId: string, query: any) => Promise<any>;
    /**
     * Creates the specified overrides for each assignment. Handles creation in a transaction, so all records are created or none are. One of student_ids, group_id, or course_section_id must be present. At most one should be present; if multiple are present only the most specific (student_ids first, then group_id, then course_section_id) is used and any others are ignored. Errors are reported in an errors attribute, an array of errors corresponding to inputs. Global errors will be reported as a single element errors array
     * @summary Batch create overrides in a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    batchCreateOverridesInCourse: (courseId: string, body: any) => Promise<any>;
    /**
     * Updates a list of specified overrides for each assignment. Handles overrides in a transaction, so either all updates are applied or none. See {api:AssignmentOverridesController#update Update an assignment override} for available attributes. All current overridden values must be supplied if they are to be retained; e.g. if due_at was overridden, but this PUT omits a value for due_at, due_at will no longer be overridden. If the override is adhoc and student_ids is not supplied, the target override set is unchanged. Target override sets cannot be changed for group or section overrides. Errors are reported in an errors attribute, an array of errors corresponding to inputs. Global errors will be reported as a single element errors array
     * @summary Batch update overrides in a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    batchUpdateOverridesInCourse: (courseId: string, body: any) => Promise<any>;
};
