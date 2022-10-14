"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Create or update account-level proficiency ratings. These ratings will apply to all sub-accounts, unless they have their own account-level proficiency ratings defined.
         * @summary Create/update proficiency ratings
         * @param {string|number} accountId Canvas Account ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        createUpdateProficiencyRatings: (accountId, body) => helper.post(`/v1/accounts/${accountId}/outcome_proficiency`, body),
        /**
         * Get account-level proficiency ratings. If not defined for this account, it will return proficiency ratings for the nearest super-account with ratings defined. Will return 404 if none found.  Examples:   curl https://<canvas>/api/v1/accounts/<account_id>/outcome_proficiency \     -H 'Authorization: Bearer <token>'
         * @summary Get proficiency ratings
         * @param {string|number} accountId Canvas Account ID
         * @returns {Promise<any>}
         */
        getProficiencyRatings: (accountId) => helper.get(`/v1/accounts/${accountId}/outcome_proficiency`),
    };
}
exports.default = default_1;
