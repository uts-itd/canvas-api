declare function _exports(helper: any): {
    /**
     * Get a list of available IP filters for this Quiz. 200 OK response code is returned if the request was successful.
     * @summary Get available quiz IP filters.
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @returns {Promise<any>}
     */
    getAvailableQuizIpFilters: (courseId: string, quizId: string) => Promise<any>;
};
export = _exports;
