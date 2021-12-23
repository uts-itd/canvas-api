var helper = require('../helper');
var plagiarismDetectionPlatformUsers = {
    /**
     * Get a single Canvas user by Canvas id or LTI id. Tool providers may only access users that have been assigned an assignment associated with their tool.
     * @summary Get a single user (lti)
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getSingleUserLti: function (userId) { return helper.get("/lti/users/" + userId); },
    /**
     * Get all Canvas users in a group. Tool providers may only access groups that belong to the context the tool is installed in.
     * @summary Get all users in a group (lti)
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    getAllUsersInGroupLti: function (groupId) { return helper.get("/lti/groups/" + groupId + "/users"); },
};
module.exports = plagiarismDetectionPlatformUsers;
//# sourceMappingURL=plagiarismDetectionPlatformUsers.js.map