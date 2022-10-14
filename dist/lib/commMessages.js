"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Retrieve a paginated list of messages sent to a user.
         * @summary List of CommMessages for a user
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        listOfCommmessagesForUser: (query) => helper.get(`/v1/comm_messages`, query),
    };
}
exports.default = default_1;
