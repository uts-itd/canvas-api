var helper = require('../helper');
var collaborations = {
    /**
     * A paginated list of collaborations the current user has access to in the context of the course provided in the url. NOTE: this only returns ExternalToolCollaboration type collaborations.  curl https://<canvas>/api/v1/courses/1/collaborations/
     * @summary List collaborations
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listCollaborationsCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/collaborations"); },
    /**
     * A paginated list of collaborations the current user has access to in the context of the course provided in the url. NOTE: this only returns ExternalToolCollaboration type collaborations.  curl https://<canvas>/api/v1/courses/1/collaborations/
     * @summary List collaborations
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listCollaborationsGroups: function (groupId) { return helper.get("/v1/groups/" + groupId + "/collaborations"); },
    /**
     * A paginated list of the collaborators of a given collaboration
     * @summary List members of a collaboration.
     * @param {string} collaborationId Canvas Collaboration ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listMembersOfCollaboration: function (collaborationId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/collaborations/" + collaborationId + "/members", query);
    },
    /**
     * A paginated list of the users who can potentially be added to a collaboration in the given context. For courses, this consists of all enrolled users. For groups, it is comprised of the group members plus the admins of the course containing the group.
     * @summary List potential members
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listPotentialMembersCourses: function (courseId) { return helper.get("/v1/courses/" + courseId + "/potential_collaborators"); },
    /**
     * A paginated list of the users who can potentially be added to a collaboration in the given context. For courses, this consists of all enrolled users. For groups, it is comprised of the group members plus the admins of the course containing the group.
     * @summary List potential members
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listPotentialMembersGroups: function (groupId) { return helper.get("/v1/groups/" + groupId + "/potential_collaborators"); },
};
module.exports = collaborations;
//# sourceMappingURL=collaborations.js.map