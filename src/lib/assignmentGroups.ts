import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Returns the paginated list of assignment groups for the current context. The returned groups are sorted by their position field.
     * @summary List assignment groups
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAssignmentGroups: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/assignment_groups`, query),
    /**
     * Returns the assignment group with the given id.
     * @summary Get an Assignment Group
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentGroupId Canvas Assignment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAssignmentGroup: (courseId: string | number, assignmentGroupId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/assignment_groups/${assignmentGroupId}`, query),
    /**
     * Create a new assignment group for this course.
     * @summary Create an Assignment Group
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createAssignmentGroup: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/assignment_groups`, body),
    /**
     * Modify an existing Assignment Group. Accepts the same parameters as Assignment Group creation
     * @summary Edit an Assignment Group
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentGroupId Canvas Assignment group ID
     * @returns {Promise<any>}
     */
    editAssignmentGroup: (courseId: string | number, assignmentGroupId: string | number) =>
      helper.put(`/v1/courses/${courseId}/assignment_groups/${assignmentGroupId}`),
    /**
     * Deletes the assignment group with the given id.
     * @summary Destroy an Assignment Group
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentGroupId Canvas Assignment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    destroyAssignmentGroup: (courseId: string | number, assignmentGroupId: string | number, query?: any) =>
      helper.delete(`/v1/courses/${courseId}/assignment_groups/${assignmentGroupId}`, query),
  };
}
