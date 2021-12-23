var helper = require('../helper');
var progress = {
    /**
     * Return completion and status information about an asynchronous job
     * @summary Query progress
     * @param {string} progresId Canvas Progres ID
     * @returns {Promise<any>}
     */
    queryProgress: function (progresId) { return helper.get("/v1/progress/" + progresId); },
};
module.exports = progress;
//# sourceMappingURL=progress.js.map