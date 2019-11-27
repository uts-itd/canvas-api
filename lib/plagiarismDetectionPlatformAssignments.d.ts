export = plagiarismDetectionPlatformAssignments;
declare let plagiarismDetectionPlatformAssignments: {
    /**
     * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access assignments that are associated with their tool.
     * @summary Get a single assignment (lti)
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleAssignmentLti: (assignmentId: string, query?: any) => Promise<any>;
};
