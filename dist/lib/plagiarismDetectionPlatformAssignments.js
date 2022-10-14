"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access assignments that are associated with their tool.
         * @summary Get a single assignment (lti)
         * @param {string|number} assignmentId Canvas Assignment ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        getSingleAssignmentLti: (assignmentId, query) => helper.get(`/lti/assignments/${assignmentId}`, query),
    };
}
exports.default = default_1;
