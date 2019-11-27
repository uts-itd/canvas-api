export = outcomeGroups;
declare let outcomeGroups: {
    /**
     * Convenience redirect to find the root outcome group for a particular context. Will redirect to the appropriate outcome group's URL.
     * @summary Redirect to root outcome group for context
     * @returns {Promise<any>}
     */
    redirectToRootOutcomeGroupForContextGlobal: () => Promise<any>;
    /**
     * Convenience redirect to find the root outcome group for a particular context. Will redirect to the appropriate outcome group's URL.
     * @summary Redirect to root outcome group for context
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    redirectToRootOutcomeGroupForContextAccounts: (accountId: string) => Promise<any>;
    /**
     * Convenience redirect to find the root outcome group for a particular context. Will redirect to the appropriate outcome group's URL.
     * @summary Redirect to root outcome group for context
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    redirectToRootOutcomeGroupForContextCourses: (courseId: string) => Promise<any>;
    /**
     *
     * @summary Get all outcome groups for context
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    getAllOutcomeGroupsForContextAccounts: (accountId: string) => Promise<any>;
    /**
     *
     * @summary Get all outcome groups for context
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getAllOutcomeGroupsForContextCourses: (courseId: string) => Promise<any>;
    /**
     *
     * @summary Get all outcome links for context
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllOutcomeLinksForContextAccounts: (accountId: string, query?: any) => Promise<any>;
    /**
     *
     * @summary Get all outcome links for context
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllOutcomeLinksForContextCourses: (courseId: string, query?: any) => Promise<any>;
    /**
     *
     * @summary Show an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    showOutcomeGroupGlobal: (outcomeGroupId: string) => Promise<any>;
    /**
     *
     * @summary Show an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    showOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string) => Promise<any>;
    /**
     *
     * @summary Show an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    showOutcomeGroupCourses: (courseId: string, outcomeGroupId: string) => Promise<any>;
    /**
     * Modify an existing outcome group. Fields not provided are left as is; unrecognized fields are ignored. When changing the parent outcome group, the new parent group must belong to the same context as this outcome group, and must not be a descendant of this outcome group (i.e. no cycles allowed).
     * @summary Update an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateOutcomeGroupGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Modify an existing outcome group. Fields not provided are left as is; unrecognized fields are ignored. When changing the parent outcome group, the new parent group must belong to the same context as this outcome group, and must not be a descendant of this outcome group (i.e. no cycles allowed).
     * @summary Update an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Modify an existing outcome group. Fields not provided are left as is; unrecognized fields are ignored. When changing the parent outcome group, the new parent group must belong to the same context as this outcome group, and must not be a descendant of this outcome group (i.e. no cycles allowed).
     * @summary Update an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateOutcomeGroupCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Deleting an outcome group deletes descendant outcome groups and outcome links. The linked outcomes themselves are only deleted if all links to the outcome were deleted. Aligned outcomes cannot be deleted; as such, if all remaining links to an aligned outcome are included in this group's descendants, the group deletion will fail.
     * @summary Delete an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    deleteOutcomeGroupGlobal: (outcomeGroupId: string) => Promise<any>;
    /**
     * Deleting an outcome group deletes descendant outcome groups and outcome links. The linked outcomes themselves are only deleted if all links to the outcome were deleted. Aligned outcomes cannot be deleted; as such, if all remaining links to an aligned outcome are included in this group's descendants, the group deletion will fail.
     * @summary Delete an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    deleteOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string) => Promise<any>;
    /**
     * Deleting an outcome group deletes descendant outcome groups and outcome links. The linked outcomes themselves are only deleted if all links to the outcome were deleted. Aligned outcomes cannot be deleted; as such, if all remaining links to an aligned outcome are included in this group's descendants, the group deletion will fail.
     * @summary Delete an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    deleteOutcomeGroupCourses: (courseId: string, outcomeGroupId: string) => Promise<any>;
    /**
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @summary List linked outcomes
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listLinkedOutcomesGlobal: (outcomeGroupId: string, query?: any) => Promise<any>;
    /**
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @summary List linked outcomes
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listLinkedOutcomesAccounts: (accountId: string, outcomeGroupId: string, query?: any) => Promise<any>;
    /**
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @summary List linked outcomes
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listLinkedOutcomesCourses: (courseId: string, outcomeGroupId: string, query?: any) => Promise<any>;
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLinkOutcomeGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param number outcomeId Canvas Outcome ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLinkOutcomeGlobalOutcomeId: (outcomeGroupId: string, outcomeId: any, body: any) => Promise<any>;
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLinkOutcomeAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param number outcomeId Canvas Outcome ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLinkOutcomeAccountsOutcomeId: (accountId: string, outcomeGroupId: string, outcomeId: any, body: any) => Promise<any>;
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLinkOutcomeCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param number outcomeId Canvas Outcome ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLinkOutcomeCoursesOutcomeId: (courseId: string, outcomeGroupId: string, outcomeId: any, body: any) => Promise<any>;
    /**
     * Unlinking an outcome only deletes the outcome itself if this was the last link to the outcome in any group in any context. Aligned outcomes cannot be deleted; as such, if this is the last link to an aligned outcome, the unlinking will fail.
     * @summary Unlink an outcome
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {string} outcomeId Canvas Outcome ID
     * @returns {Promise<any>}
     */
    unlinkOutcomeGlobal: (outcomeGroupId: string, outcomeId: string) => Promise<any>;
    /**
     * Unlinking an outcome only deletes the outcome itself if this was the last link to the outcome in any group in any context. Aligned outcomes cannot be deleted; as such, if this is the last link to an aligned outcome, the unlinking will fail.
     * @summary Unlink an outcome
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {string} outcomeId Canvas Outcome ID
     * @returns {Promise<any>}
     */
    unlinkOutcomeAccounts: (accountId: string, outcomeGroupId: string, outcomeId: string) => Promise<any>;
    /**
     * Unlinking an outcome only deletes the outcome itself if this was the last link to the outcome in any group in any context. Aligned outcomes cannot be deleted; as such, if this is the last link to an aligned outcome, the unlinking will fail.
     * @summary Unlink an outcome
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {string} outcomeId Canvas Outcome ID
     * @returns {Promise<any>}
     */
    unlinkOutcomeCourses: (courseId: string, outcomeGroupId: string, outcomeId: string) => Promise<any>;
    /**
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @summary List subgroups
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    listSubgroupsGlobal: (outcomeGroupId: string) => Promise<any>;
    /**
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @summary List subgroups
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    listSubgroupsAccounts: (accountId: string, outcomeGroupId: string) => Promise<any>;
    /**
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @summary List subgroups
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {Promise<any>}
     */
    listSubgroupsCourses: (courseId: string, outcomeGroupId: string) => Promise<any>;
    /**
     * Creates a new empty subgroup under the outcome group with the given title and description.
     * @summary Create a subgroup
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSubgroupGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Creates a new empty subgroup under the outcome group with the given title and description.
     * @summary Create a subgroup
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSubgroupAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Creates a new empty subgroup under the outcome group with the given title and description.
     * @summary Create a subgroup
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSubgroupCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Creates a new subgroup of the outcome group with the same title and description as the source group, then creates links in that new subgroup to the same outcomes that are linked in the source group. Recurses on the subgroups of the source group, importing them each in turn into the new subgroup. Allows you to copy organizational structure, but does not create copies of the outcomes themselves, only new links. The source group must be either global, from the same context as this outcome group, or from an associated account. The source group cannot be the root outcome group of its context.
     * @summary Import an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importOutcomeGroupGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Creates a new subgroup of the outcome group with the same title and description as the source group, then creates links in that new subgroup to the same outcomes that are linked in the source group. Recurses on the subgroups of the source group, importing them each in turn into the new subgroup. Allows you to copy organizational structure, but does not create copies of the outcomes themselves, only new links. The source group must be either global, from the same context as this outcome group, or from an associated account. The source group cannot be the root outcome group of its context.
     * @summary Import an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
    /**
     * Creates a new subgroup of the outcome group with the same title and description as the source group, then creates links in that new subgroup to the same outcomes that are linked in the source group. Recurses on the subgroups of the source group, importing them each in turn into the new subgroup. Allows you to copy organizational structure, but does not create copies of the outcomes themselves, only new links. The source group must be either global, from the same context as this outcome group, or from an associated account. The source group cannot be the root outcome group of its context.
     * @summary Import an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    importOutcomeGroupCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
};
