"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Return completion and status information about an asynchronous job
         * @summary Query progress
         * @param {string|number} progresId Canvas Progres ID
         * @returns {Promise<any>}
         */
        queryProgress: (progresId) => helper.get(`/v1/progress/${progresId}`),
    };
}
exports.default = default_1;
