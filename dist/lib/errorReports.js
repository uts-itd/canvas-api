"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Create a new error report documenting an experienced problem Performs the same action as when a user uses the "help -> report a problem" dialog.
         * @summary Create Error Report
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createErrorReport: (body) => helper.post(`/v1/error_reports`, body),
    };
}
exports.default = default_1;
