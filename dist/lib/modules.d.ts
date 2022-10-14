import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * A paginated list of the modules in a course
     * @summary List modules
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listModules: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Get information about a single module
     * @summary Show module
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showModule: (courseId: string | number, moduleId: string | number, query?: any) => Promise<any>;
    /**
     * Create and return a new module
     * @summary Create a module
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createModule: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Update and return an existing module
     * @summary Update a module
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateModule: (courseId: string | number, moduleId: string | number, body: any) => Promise<any>;
    /**
     * Delete a module
     * @summary Delete module
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @returns {Promise<any>}
     */
    deleteModule: (courseId: string | number, moduleId: string | number) => Promise<any>;
    /**
     * Resets module progressions to their default locked state and recalculates them based on the current requirements. Adding progression requirements to an active course will not lock students out of modules they have already unlocked unless this action is called.
     * @summary Re-lock module progressions
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @returns {Promise<any>}
     */
    reLockModuleProgressions: (courseId: string | number, moduleId: string | number) => Promise<any>;
    /**
     * A paginated list of the items in a module
     * @summary List module items
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listModuleItems: (courseId: string | number, moduleId: string | number, query?: any) => Promise<any>;
    /**
     * Get information about a single module item
     * @summary Show module item
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {string|number} itemId Canvas Item ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    showModuleItem: (courseId: string | number, moduleId: string | number, itemId: string | number, query?: any) => Promise<any>;
    /**
     * Create and return a new module item
     * @summary Create a module item
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createModuleItem: (courseId: string | number, moduleId: string | number, body: any) => Promise<any>;
    /**
     * Update and return an existing module item
     * @summary Update a module item
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {string|number} itemId Canvas Item ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateModuleItem: (courseId: string | number, moduleId: string | number, itemId: string | number, body: any) => Promise<any>;
    /**
     * Select a mastery path when module item includes several possible paths. Requires Mastery Paths feature to be enabled. Returns a compound document with the assignments included in the given path and any module items related to those assignments
     * @summary Select a mastery path
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {string|number} itemId Canvas Item ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    selectMasteryPath: (courseId: string | number, moduleId: string | number, itemId: string | number, body: any) => Promise<any>;
    /**
     * Delete a module item
     * @summary Delete module item
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {string|number} itemId Canvas Item ID
     * @returns {Promise<any>}
     */
    deleteModuleItem: (courseId: string | number, moduleId: string | number, itemId: string | number) => Promise<any>;
    /**
     * Mark a module item as done/not done. Use HTTP method PUT to mark as done, and DELETE to mark as not done.
     * @summary Mark module item as done/not done
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {string|number} itemId Canvas Item ID
     * @returns {Promise<any>}
     */
    markModuleItemAsDoneNotDone: (courseId: string | number, moduleId: string | number, itemId: string | number) => Promise<any>;
    /**
     * Given an asset in a course, find the ModuleItem it belongs to, the previous and next Module Items in the course sequence, and also any applicable mastery path rules
     * @summary Get module item sequence
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getModuleItemSequence: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Fulfills "must view" requirement for a module item. It is generally not necessary to do this explicitly, but it is provided for applications that need to access external content directly (bypassing the html_url redirect that normally allows Canvas to fulfill "must view" requirements). This endpoint cannot be used to complete requirements on locked or unpublished module items.
     * @summary Mark module item read
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} moduleId Canvas Module ID
     * @param {string|number} itemId Canvas Item ID
     * @returns {Promise<any>}
     */
    markModuleItemRead: (courseId: string | number, moduleId: string | number, itemId: string | number) => Promise<any>;
};
