export = outcomeResults;
declare let outcomeResults: {
    /**
     * Gets the outcome results for users and outcomes in the specified context.
     * @summary Get outcome results
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResults: (courseId: string, query?: any) => Promise<any>;
    /**
     * Gets the outcome rollups for the users and outcomes in the specified context.
     * @summary Get outcome result rollups
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getOutcomeResultRollups: (courseId: string, query?: any) => Promise<any>;
};
