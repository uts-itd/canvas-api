import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access assignments that are associated with their tool.
     * @summary Get a single assignment (lti)
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleAssignmentLti: (assignmentId: string | number, query?: any) =>
      helper.get(`/lti/assignments/${assignmentId}`, query),
  };
}
