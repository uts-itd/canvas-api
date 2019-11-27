export = errorReports;
declare let errorReports: {
    /**
     * Create a new error report documenting an experienced problem Performs the same action as when a user uses the "help -> report a problem" dialog.
     * @summary Create Error Report
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createErrorReport: (body: any) => Promise<any>;
};
