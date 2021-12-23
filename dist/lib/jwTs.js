var helper = require('../helper');
var jwTs = {
    /**
     * Create a unique jwt for using with other canvas services Generates a different JWT each time it's called, each one expires after a short window (1 hour)
     * @summary Create JWT
     * @returns {Promise<any>}
     */
    createJwt: function () { return helper.post("/v1/jwts"); },
    /**
     * Refresh a JWT for use with other canvas services Generates a different JWT each time it's called, each one expires after a short window (1 hour).
     * @summary Refresh JWT
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    refreshJwt: function (body) { return helper.post("/v1/jwts/refresh", body); },
};
module.exports = jwTs;
//# sourceMappingURL=jwTs.js.map