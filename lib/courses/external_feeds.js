const helper = require('../helper');

let externalFeeds = {
    /**
     * List external feeds.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     */
    getExternalFeeds: (courseID) => helper.get(`courses/${courseID}/external_feeds`),

    /**
     * Create an external feed.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     * @param {string} url The url to the external rss or atom feed.
     * @param {string} headerMatch If given, only feed entries that contain this string in their title will be imported
     * @param {string} verbosity 'full', 'truncate', 'link_only'. Defaults to “full”
     */
    createExternalFeed: (courseID, url, headerMatch, verbosity) => helper.post(`courses/${courseID}/external_feeds`),
}

module.exports = externalFeeds;