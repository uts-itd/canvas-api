export = collaborations;
declare let collaborations: {
    /**
     * A paginated list of collaborations the current user has access to in the context of the course provided in the url. NOTE: this only returns ExternalToolCollaboration type collaborations.  curl https://<canvas>/api/v1/courses/1/collaborations/
     * @summary List collaborations
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listCollaborationsCourses: (courseId: string) => Promise<any>;
    /**
     * A paginated list of collaborations the current user has access to in the context of the course provided in the url. NOTE: this only returns ExternalToolCollaboration type collaborations.  curl https://<canvas>/api/v1/courses/1/collaborations/
     * @summary List collaborations
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listCollaborationsGroups: (groupId: string) => Promise<any>;
    /**
     * A paginated list of the collaborators of a given collaboration
     * @summary List members of a collaboration.
     * @param {string} collaborationId Canvas Collaboration ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listMembersOfCollaboration: (collaborationId: string, query?: any) => Promise<any>;
    /**
     * A paginated list of the users who can potentially be added to a collaboration in the given context. For courses, this consists of all enrolled users. For groups, it is comprised of the group members plus the admins of the course containing the group.
     * @summary List potential members
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listPotentialMembersCourses: (courseId: string) => Promise<any>;
    /**
     * A paginated list of the users who can potentially be added to a collaboration in the given context. For courses, this consists of all enrolled users. For groups, it is comprised of the group members plus the admins of the course containing the group.
     * @summary List potential members
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    listPotentialMembersGroups: (groupId: string) => Promise<any>;
};