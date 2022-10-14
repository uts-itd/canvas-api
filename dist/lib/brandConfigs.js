"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Will redirect to a static json file that has all of the brand variables used by this account. Even though this is a redirect, do not store the redirected url since if the account makes any changes it will redirect to a new url. Needs no authentication.
         * @summary Get the brand config variables that should be used for this domain
         * @returns {Promise<any>}
         */
        getBrandConfigVariablesThatShouldBeUsedForThisDomain: () => helper.get(`/v1/brand_variables`),
    };
}
exports.default = default_1;
