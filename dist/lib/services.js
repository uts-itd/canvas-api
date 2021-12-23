var helper = require('../helper');
var services = {
    /**
     * Return the config information for the Kaltura plugin in json format.
     * @summary Get Kaltura config
     * @returns {Promise<any>}
     */
    getKalturaConfig: function () { return helper.get("/v1/services/kaltura"); },
    /**
     * Start a new Kaltura session, so that new media can be recorded and uploaded to this Canvas instance's Kaltura instance.
     * @summary Start Kaltura session
     * @returns {Promise<any>}
     */
    startKalturaSession: function () { return helper.post("/v1/services/kaltura_session"); },
};
module.exports = services;
//# sourceMappingURL=services.js.map