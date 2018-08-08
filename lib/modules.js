const helper = require('../helper');

let modules = {
    /**
     * A paginated list of the modules in a course
     * @summary List modules
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listModules: (courseId, query='') => helper.get(`/v1/courses/${courseId}/modules`, query),
    /**
     * Get information about a single module
     * @summary Show module
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {Object} query JSON query parameters
     * @returns {Module}
     */
    showModule: (courseId, moduleId, query='') => helper.get(`/v1/courses/${courseId}/modules/${moduleId}`, query),
    /**
     * Create and return a new module
     * @summary Create a module
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Module}
     */
    createModule: (courseId, body) => helper.post(`/v1/courses/${courseId}/modules`, body),
    /**
     * Update and return an existing module
     * @summary Update a module
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {Object} body JSON form fields
     * @returns {Module}
     */
    updateModule: (courseId, moduleId, body) => helper.put(`/v1/courses/${courseId}/modules/${moduleId}`, body),
    /**
     * Delete a module
     * @summary Delete module
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @returns {Module}
     */
    deleteModule: (courseId, moduleId) => helper.delete(`/v1/courses/${courseId}/modules/${moduleId}`),
    /**
     * Resets module progressions to their default locked state and recalculates them based on the current requirements. Adding progression requirements to an active course will not lock students out of modules they have already unlocked unless this action is called.
     * @summary Re-lock module progressions
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @returns {Module}
     */
    reLockModuleProgressions: (courseId, moduleId) => helper.put(`/v1/courses/${courseId}/modules/${moduleId}/relock`),
    /**
     * A paginated list of the items in a module
     * @summary List module items
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {Object} query JSON query parameters
     * @returns {array}
     */
    listModuleItems: (courseId, moduleId, query='') => helper.get(`/v1/courses/${courseId}/modules/${moduleId}/items`, query),
    /**
     * Get information about a single module item
     * @summary Show module item
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {string} itemId Canvas Item ID
     * @param {Object} query JSON query parameters
     * @returns {ModuleItem}
     */
    showModuleItem: (courseId, moduleId, itemId, query='') => helper.get(`/v1/courses/${courseId}/modules/${moduleId}/items/${itemId}`, query),
    /**
     * Create and return a new module item
     * @summary Create a module item
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {Object} body JSON form fields
     * @returns {ModuleItem}
     */
    createModuleItem: (courseId, moduleId, body) => helper.post(`/v1/courses/${courseId}/modules/${moduleId}/items`, body),
    /**
     * Update and return an existing module item
     * @summary Update a module item
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {string} itemId Canvas Item ID
     * @param {Object} body JSON form fields
     * @returns {ModuleItem}
     */
    updateModuleItem: (courseId, moduleId, itemId, body) => helper.put(`/v1/courses/${courseId}/modules/${moduleId}/items/${itemId}`, body),
    /**
     * Select a mastery path when module item includes several possible paths. Requires Mastery Paths feature to be enabled. Returns a compound document with the assignments included in the given path and any module items related to those assignments
     * @summary Select a mastery path
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {string} itemId Canvas Item ID
     * @param {Object} body JSON form fields
     * @returns {void}
     */
    selectMasteryPath: (courseId, moduleId, itemId, body) => helper.post(`/v1/courses/${courseId}/modules/${moduleId}/items/${itemId}/select_mastery_path`, body),
    /**
     * Delete a module item
     * @summary Delete module item
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {string} itemId Canvas Item ID
     * @returns {ModuleItem}
     */
    deleteModuleItem: (courseId, moduleId, itemId) => helper.delete(`/v1/courses/${courseId}/modules/${moduleId}/items/${itemId}`),
    /**
     * Mark a module item as done/not done. Use HTTP method PUT to mark as done, and DELETE to mark as not done.
     * @summary Mark module item as done/not done
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {string} itemId Canvas Item ID
     * @returns {void}
     */
    markModuleItemAsDoneNotDone: (courseId, moduleId, itemId) => helper.put(`/v1/courses/${courseId}/modules/${moduleId}/items/${itemId}/done`),
    /**
     * Given an asset in a course, find the ModuleItem it belongs to, the previous and next Module Items in the course sequence, and also any applicable mastery path rules
     * @summary Get module item sequence
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {ModuleItemSequence}
     */
    getModuleItemSequence: (courseId, query='') => helper.get(`/v1/courses/${courseId}/module_item_sequence`, query),
    /**
     * Fulfills "must view" requirement for a module item. It is generally not necessary to do this explicitly, but it is provided for applications that need to access external content directly (bypassing the html_url redirect that normally allows Canvas to fulfill "must view" requirements). This endpoint cannot be used to complete requirements on locked or unpublished module items.
     * @summary Mark module item read
     * @param {string} courseId Canvas Course ID
     * @param {string} moduleId Canvas Module ID
     * @param {string} itemId Canvas Item ID
     * @returns {void}
     */
    markModuleItemRead: (courseId, moduleId, itemId) => helper.post(`/v1/courses/${courseId}/modules/${moduleId}/items/${itemId}/mark_read`),
}

module.exports = modules;