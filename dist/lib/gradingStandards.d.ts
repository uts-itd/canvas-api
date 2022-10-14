import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Create a new grading standard If grading_scheme_entry arguments are omitted, then a default grading scheme will be set. The default scheme is as follows:   "A" : 94,   "A-" : 90,   "B+" : 87,   "B" : 84,   "B-" : 80,   "C+" : 77,   "C" : 74,   "C-" : 70,   "D+" : 67,   "D" : 64,   "D-" : 61,   "F" : 0,
     * @summary Create a new grading standard
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewGradingStandardAccounts: (accountId: string | number, body: any) => Promise<any>;
    /**
     * Create a new grading standard If grading_scheme_entry arguments are omitted, then a default grading scheme will be set. The default scheme is as follows:   "A" : 94,   "A-" : 90,   "B+" : 87,   "B" : 84,   "B-" : 80,   "C+" : 77,   "C" : 74,   "C-" : 70,   "D+" : 67,   "D" : 64,   "D-" : 61,   "F" : 0,
     * @summary Create a new grading standard
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewGradingStandardCourses: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Returns the paginated list of grading standards for the given context that are visible to the user.
     * @summary List the grading standards available in a context.
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listGradingStandardsAvailableInContextCourses: (courseId: string | number) => Promise<any>;
    /**
     * Returns the paginated list of grading standards for the given context that are visible to the user.
     * @summary List the grading standards available in a context.
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listGradingStandardsAvailableInContextAccounts: (accountId: string | number) => Promise<any>;
    /**
     * Returns a grading standard for the given context that is visible to the user.
     * @summary Get a single grading standard in a context.
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} gradingStandardId Canvas Grading standard ID
     * @returns {Promise<any>}
     */
    getSingleGradingStandardInContextCourses: (courseId: string | number, gradingStandardId: string | number) => Promise<any>;
    /**
     * Returns a grading standard for the given context that is visible to the user.
     * @summary Get a single grading standard in a context.
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} gradingStandardId Canvas Grading standard ID
     * @returns {Promise<any>}
     */
    getSingleGradingStandardInContextAccounts: (accountId: string | number, gradingStandardId: string | number) => Promise<any>;
};
