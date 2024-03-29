import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns a paginated list of navigation tabs available in the current context.
     * @summary List available tabs for a course or group
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAvailableTabsForCourseOrGroupCourses: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/tabs`, query),
    /**
     * Returns a paginated list of navigation tabs available in the current context.
     * @summary List available tabs for a course or group
     * @param {string|number} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAvailableTabsForCourseOrGroupGroups: (groupId: string | number, query?: any) =>
      helper.get(`/v1/groups/${groupId}/tabs`, query),
    /**
     * Home and Settings tabs are not manageable, and can't be hidden or moved Returns a tab object
     * @summary Update a tab for a course
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} tabId Canvas Tab ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateTabForCourse: (courseId: string | number, tabId: string | number, body: any) =>
      helper.put(`/v1/courses/${courseId}/tabs/${tabId}`, body),
  };
}
