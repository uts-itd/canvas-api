const helper = require('../helper');

let outcomeGroups = {
    /**
     * Convenience redirect to find the root outcome group for a particular context. Will redirect to the appropriate outcome group's URL.
     * @summary Redirect to root outcome group for context
     * @returns {void}
     */
    redirectToRootOutcomeGroupForContextGlobal: () => helper.get(`/v1/global/root_outcome_group`),
    /**
     * Convenience redirect to find the root outcome group for a particular context. Will redirect to the appropriate outcome group's URL.
     * @summary Redirect to root outcome group for context
     * @param {string} accountId Canvas Account ID
     * @returns {void}
     */
    redirectToRootOutcomeGroupForContextAccounts: (accountId) => helper.get(`/v1/accounts/${accountId}/root_outcome_group`),
    /**
     * Convenience redirect to find the root outcome group for a particular context. Will redirect to the appropriate outcome group's URL.
     * @summary Redirect to root outcome group for context
     * @param {string} courseId Canvas Course ID
     * @returns {void}
     */
    redirectToRootOutcomeGroupForContextCourses: (courseId) => helper.get(`/v1/courses/${courseId}/root_outcome_group`),
    /**
     * 
     * @summary Get all outcome groups for context
     * @param {string} accountId Canvas Account ID
     * @returns {array}
     */
    getAllOutcomeGroupsForContextAccounts: (accountId) => helper.get(`/v1/accounts/${accountId}/outcome_groups`),
    /**
     * 
     * @summary Get all outcome groups for context
     * @param {string} courseId Canvas Course ID
     * @returns {array}
     */
    getAllOutcomeGroupsForContextCourses: (courseId) => helper.get(`/v1/courses/${courseId}/outcome_groups`),
    /**
     * 
     * @summary Get all outcome links for context
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    getAllOutcomeLinksForContextAccounts: (accountId, query='') => helper.get(`/v1/accounts/${accountId}/outcome_group_links`, query),
    /**
     * 
     * @summary Get all outcome links for context
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    getAllOutcomeLinksForContextCourses: (courseId, query='') => helper.get(`/v1/courses/${courseId}/outcome_group_links`, query),
    /**
     * 
     * @summary Show an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {OutcomeGroup}
     */
    showOutcomeGroupGlobal: (outcomeGroupId) => helper.get(`/v1/global/outcome_groups/${outcomeGroupId}`),
    /**
     * 
     * @summary Show an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {OutcomeGroup}
     */
    showOutcomeGroupAccounts: (accountId, outcomeGroupId) => helper.get(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}`),
    /**
     * 
     * @summary Show an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {OutcomeGroup}
     */
    showOutcomeGroupCourses: (courseId, outcomeGroupId) => helper.get(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}`),
    /**
     * Modify an existing outcome group. Fields not provided are left as is; unrecognized fields are ignored. When changing the parent outcome group, the new parent group must belong to the same context as this outcome group, and must not be a descendant of this outcome group (i.e. no cycles allowed).
     * @summary Update an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    updateOutcomeGroupGlobal: (outcomeGroupId, body) => helper.put(`/v1/global/outcome_groups/${outcomeGroupId}`, body),
    /**
     * Modify an existing outcome group. Fields not provided are left as is; unrecognized fields are ignored. When changing the parent outcome group, the new parent group must belong to the same context as this outcome group, and must not be a descendant of this outcome group (i.e. no cycles allowed).
     * @summary Update an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    updateOutcomeGroupAccounts: (accountId, outcomeGroupId, body) => helper.put(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}`, body),
    /**
     * Modify an existing outcome group. Fields not provided are left as is; unrecognized fields are ignored. When changing the parent outcome group, the new parent group must belong to the same context as this outcome group, and must not be a descendant of this outcome group (i.e. no cycles allowed).
     * @summary Update an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    updateOutcomeGroupCourses: (courseId, outcomeGroupId, body) => helper.put(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}`, body),
    /**
     * Deleting an outcome group deletes descendant outcome groups and outcome links. The linked outcomes themselves are only deleted if all links to the outcome were deleted. Aligned outcomes cannot be deleted; as such, if all remaining links to an aligned outcome are included in this group's descendants, the group deletion will fail.
     * @summary Delete an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {OutcomeGroup}
     */
    deleteOutcomeGroupGlobal: (outcomeGroupId) => helper.delete(`/v1/global/outcome_groups/${outcomeGroupId}`),
    /**
     * Deleting an outcome group deletes descendant outcome groups and outcome links. The linked outcomes themselves are only deleted if all links to the outcome were deleted. Aligned outcomes cannot be deleted; as such, if all remaining links to an aligned outcome are included in this group's descendants, the group deletion will fail.
     * @summary Delete an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {OutcomeGroup}
     */
    deleteOutcomeGroupAccounts: (accountId, outcomeGroupId) => helper.delete(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}`),
    /**
     * Deleting an outcome group deletes descendant outcome groups and outcome links. The linked outcomes themselves are only deleted if all links to the outcome were deleted. Aligned outcomes cannot be deleted; as such, if all remaining links to an aligned outcome are included in this group's descendants, the group deletion will fail.
     * @summary Delete an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {OutcomeGroup}
     */
    deleteOutcomeGroupCourses: (courseId, outcomeGroupId) => helper.delete(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}`),
    /**
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @summary List linked outcomes
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listLinkedOutcomesGlobal: (outcomeGroupId, query='') => helper.get(`/v1/global/outcome_groups/${outcomeGroupId}/outcomes`, query),
    /**
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @summary List linked outcomes
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listLinkedOutcomesAccounts: (accountId, outcomeGroupId, query='') => helper.get(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}/outcomes`, query),
    /**
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @summary List linked outcomes
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listLinkedOutcomesCourses: (courseId, outcomeGroupId, query='') => helper.get(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}/outcomes`, query),
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeLink}
     */
    createLinkOutcomeGlobal: (outcomeGroupId, body) => helper.post(`/v1/global/outcome_groups/${outcomeGroupId}/outcomes`, body),
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {integer} outcomeId Canvas Outcome ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeLink}
     */
    createLinkOutcomeGlobalOutcomeId: (outcomeGroupId, outcomeId, body) => helper.put(`/v1/global/outcome_groups/${outcomeGroupId}/outcomes/${outcomeId}`, body),
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeLink}
     */
    createLinkOutcomeAccounts: (accountId, outcomeGroupId, body) => helper.post(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}/outcomes`, body),
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {integer} outcomeId Canvas Outcome ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeLink}
     */
    createLinkOutcomeAccountsOutcomeId: (accountId, outcomeGroupId, outcomeId, body) => helper.put(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}/outcomes/${outcomeId}`, body),
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeLink}
     */
    createLinkOutcomeCourses: (courseId, outcomeGroupId, body) => helper.post(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}/outcomes`, body),
    /**
     * Link an outcome into the outcome group. The outcome to link can either be specified by a PUT to the link URL for a specific outcome (the outcome_id in the PUT URLs) or by supplying the information for a new outcome (title, description, ratings, mastery_points) in a POST to the collection. If linking an existing outcome, the outcome_id must identify an outcome available to this context; i.e. an outcome owned by this group's context, an outcome owned by an associated account, or a global outcome. With outcome_id present, any other parameters (except move_from) are ignored. If defining a new outcome, the outcome is created in the outcome group's context using the provided title, description, ratings, and mastery points; the title is required but all other fields are optional. The new outcome is then linked into the outcome group. If ratings are provided when creating a new outcome, an embedded rubric criterion is included in the new outcome. This criterion's mastery_points default to the maximum points in the highest rating if not specified in the mastery_points parameter. Any ratings lacking a description are given a default of "No description". Any ratings lacking a point value are given a default of 0. If no ratings are provided, the mastery_points parameter is ignored.
     * @summary Create/link an outcome
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {integer} outcomeId Canvas Outcome ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeLink}
     */
    createLinkOutcomeCoursesOutcomeId: (courseId, outcomeGroupId, outcomeId, body) => helper.put(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}/outcomes/${outcomeId}`, body),
    /**
     * Unlinking an outcome only deletes the outcome itself if this was the last link to the outcome in any group in any context. Aligned outcomes cannot be deleted; as such, if this is the last link to an aligned outcome, the unlinking will fail.
     * @summary Unlink an outcome
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {string} outcomeId Canvas Outcome ID
     * @returns {OutcomeLink}
     */
    unlinkOutcomeGlobal: (outcomeGroupId, outcomeId) => helper.delete(`/v1/global/outcome_groups/${outcomeGroupId}/outcomes/${outcomeId}`),
    /**
     * Unlinking an outcome only deletes the outcome itself if this was the last link to the outcome in any group in any context. Aligned outcomes cannot be deleted; as such, if this is the last link to an aligned outcome, the unlinking will fail.
     * @summary Unlink an outcome
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {string} outcomeId Canvas Outcome ID
     * @returns {OutcomeLink}
     */
    unlinkOutcomeAccounts: (accountId, outcomeGroupId, outcomeId) => helper.delete(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}/outcomes/${outcomeId}`),
    /**
     * Unlinking an outcome only deletes the outcome itself if this was the last link to the outcome in any group in any context. Aligned outcomes cannot be deleted; as such, if this is the last link to an aligned outcome, the unlinking will fail.
     * @summary Unlink an outcome
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {string} outcomeId Canvas Outcome ID
     * @returns {OutcomeLink}
     */
    unlinkOutcomeCourses: (courseId, outcomeGroupId, outcomeId) => helper.delete(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}/outcomes/${outcomeId}`),
    /**
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @summary List subgroups
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {array}
     */
    listSubgroupsGlobal: (outcomeGroupId) => helper.get(`/v1/global/outcome_groups/${outcomeGroupId}/subgroups`),
    /**
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @summary List subgroups
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {array}
     */
    listSubgroupsAccounts: (accountId, outcomeGroupId) => helper.get(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}/subgroups`),
    /**
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @summary List subgroups
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @returns {array}
     */
    listSubgroupsCourses: (courseId, outcomeGroupId) => helper.get(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}/subgroups`),
    /**
     * Creates a new empty subgroup under the outcome group with the given title and description.
     * @summary Create a subgroup
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    createSubgroupGlobal: (outcomeGroupId, body) => helper.post(`/v1/global/outcome_groups/${outcomeGroupId}/subgroups`, body),
    /**
     * Creates a new empty subgroup under the outcome group with the given title and description.
     * @summary Create a subgroup
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    createSubgroupAccounts: (accountId, outcomeGroupId, body) => helper.post(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}/subgroups`, body),
    /**
     * Creates a new empty subgroup under the outcome group with the given title and description.
     * @summary Create a subgroup
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    createSubgroupCourses: (courseId, outcomeGroupId, body) => helper.post(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}/subgroups`, body),
    /**
     * Creates a new subgroup of the outcome group with the same title and description as the source group, then creates links in that new subgroup to the same outcomes that are linked in the source group. Recurses on the subgroups of the source group, importing them each in turn into the new subgroup. Allows you to copy organizational structure, but does not create copies of the outcomes themselves, only new links. The source group must be either global, from the same context as this outcome group, or from an associated account. The source group cannot be the root outcome group of its context.
     * @summary Import an outcome group
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    importOutcomeGroupGlobal: (outcomeGroupId, body) => helper.post(`/v1/global/outcome_groups/${outcomeGroupId}/import`, body),
    /**
     * Creates a new subgroup of the outcome group with the same title and description as the source group, then creates links in that new subgroup to the same outcomes that are linked in the source group. Recurses on the subgroups of the source group, importing them each in turn into the new subgroup. Allows you to copy organizational structure, but does not create copies of the outcomes themselves, only new links. The source group must be either global, from the same context as this outcome group, or from an associated account. The source group cannot be the root outcome group of its context.
     * @summary Import an outcome group
     * @param {string} accountId Canvas Account ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    importOutcomeGroupAccounts: (accountId, outcomeGroupId, body) => helper.post(`/v1/accounts/${accountId}/outcome_groups/${outcomeGroupId}/import`, body),
    /**
     * Creates a new subgroup of the outcome group with the same title and description as the source group, then creates links in that new subgroup to the same outcomes that are linked in the source group. Recurses on the subgroups of the source group, importing them each in turn into the new subgroup. Allows you to copy organizational structure, but does not create copies of the outcomes themselves, only new links. The source group must be either global, from the same context as this outcome group, or from an associated account. The source group cannot be the root outcome group of its context.
     * @summary Import an outcome group
     * @param {string} courseId Canvas Course ID
     * @param {string} outcomeGroupId Canvas Outcome group ID
     * @param {Object} body JSON form fields
     * @returns {OutcomeGroup}
     */
    importOutcomeGroupCourses: (courseId, outcomeGroupId, body) => helper.post(`/v1/courses/${courseId}/outcome_groups/${outcomeGroupId}/import`, body),
}

module.exports = outcomeGroups;