var helper = require('../helper');
var plagiarismDetectionPlatformAssignments = {
    /**
     * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access assignments that are associated with their tool.
     * @summary Get a single assignment (lti)
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleAssignmentLti: function (assignmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/lti/assignments/" + assignmentId, query);
    },
};
module.exports = plagiarismDetectionPlatformAssignments;
//# sourceMappingURL=plagiarismDetectionPlatformAssignments.js.map