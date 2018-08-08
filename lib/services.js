const helper = require('../helper');

let services = {
    /**
     * Return the config information for the Kaltura plugin in json format.
     * @summary Get Kaltura config
     * @returns {void}
     */
    getKalturaConfig: () => helper.get(`/v1/services/kaltura`),
    /**
     * Start a new Kaltura session, so that new media can be recorded and uploaded to this Canvas instance's Kaltura instance.
     * @summary Start Kaltura session
     * @returns {void}
     */
    startKalturaSession: () => helper.post(`/v1/services/kaltura_session`),
}

module.exports = services;