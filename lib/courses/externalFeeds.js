const helper = require('../helper');

let externalFeeds = {
    /**
     * List external feeds.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/announcement_external_feeds.html#method.external_feeds.index
     */
    get: (course) => helper.get(`courses/${course}/external_feeds`),

    /**
     * Create an external feed.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {Object} options External feed object.
     * 
     * https://canvas.instructure.com/doc/api/announcement_external_feeds.html#method.external_feeds.create
     */
    create: (course, options) => helper.post(`courses/${course}/external_feeds`, options),

    /**
     * Delete an external feed.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * @param {number} externalFeed External feed Canvas ID.
     * 
     * https://canvas.instructure.com/doc/api/announcement_external_feeds.html#method.external_feeds.destroy
     */
    delete: (course, externalFeed) => helper.delete(`courses/${course}/external_feeds/${externalFeed}`),
}

module.exports = externalFeeds;