var helper = require('../helper');
var announcements = {
    /**
     * Returns the paginated list of announcements for the given courses and date range. Note that a +context_code+ field is added to the responses so you can tell which course each announcement belongs to.
     * @summary List announcements
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAnnouncements: function (query) { return helper.get("/v1/announcements", query); },
};
module.exports = announcements;
//# sourceMappingURL=announcements.js.map