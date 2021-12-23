var helper = require('../helper');
var errorReports = {
    /**
     * Create a new error report documenting an experienced problem Performs the same action as when a user uses the "help -> report a problem" dialog.
     * @summary Create Error Report
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createErrorReport: function (body) { return helper.post("/v1/error_reports", body); },
};
module.exports = errorReports;
//# sourceMappingURL=errorReports.js.map