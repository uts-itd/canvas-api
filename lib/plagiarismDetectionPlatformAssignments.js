const helper = require('../helper');

let plagiarismDetectionPlatformAssignments = {
    /**
     * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access assignments that are associated with their tool.
     * @summary Get a single assignment (lti)
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {LtiAssignment}
     */
    getSingleAssignmentLti: (assignmentId, query='') => helper.get(`/lti/assignments/${assignmentId}`, query),
}

module.exports = plagiarismDetectionPlatformAssignments;