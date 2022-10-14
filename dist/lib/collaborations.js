"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * A paginated list of collaborations the current user has access to in the context of the course provided in the url. NOTE: this only returns ExternalToolCollaboration type collaborations.  curl https://<canvas>/api/v1/courses/1/collaborations/
         * @summary List collaborations
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listCollaborationsCourses: (courseId) => helper.get(`/v1/courses/${courseId}/collaborations`),
        /**
         * A paginated list of collaborations the current user has access to in the context of the course provided in the url. NOTE: this only returns ExternalToolCollaboration type collaborations.  curl https://<canvas>/api/v1/courses/1/collaborations/
         * @summary List collaborations
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listCollaborationsGroups: (groupId) => helper.get(`/v1/groups/${groupId}/collaborations`),
        /**
         * A paginated list of the collaborators of a given collaboration
         * @summary List members of a collaboration.
         * @param {string|number} collaborationId Canvas Collaboration ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listMembersOfCollaboration: (collaborationId, query) => helper.get(`/v1/collaborations/${collaborationId}/members`, query),
        /**
         * A paginated list of the users who can potentially be added to a collaboration in the given context. For courses, this consists of all enrolled users. For groups, it is comprised of the group members plus the admins of the course containing the group.
         * @summary List potential members
         * @param {string|number} courseId Canvas Course ID
         * @returns {Promise<any>}
         */
        listPotentialMembersCourses: (courseId) => helper.get(`/v1/courses/${courseId}/potential_collaborators`),
        /**
         * A paginated list of the users who can potentially be added to a collaboration in the given context. For courses, this consists of all enrolled users. For groups, it is comprised of the group members plus the admins of the course containing the group.
         * @summary List potential members
         * @param {string|number} groupId Canvas Group ID
         * @returns {Promise<any>}
         */
        listPotentialMembersGroups: (groupId) => helper.get(`/v1/groups/${groupId}/potential_collaborators`),
    };
}
exports.default = default_1;
