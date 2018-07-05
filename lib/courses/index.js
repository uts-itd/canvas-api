const helper = require('../helper');
const analytics = require('./analytics');
const externalFeeds = require('./external_feeds');
const settings = require('../settings');

let course = {
    get: course => helper.get(`courses/${course}`),
    getSettings: course => get(`courses/${course}`),
    getAssignments: course => get(`courses/${course}`),
    analytics,
    externalFeeds,
}

module.exports = course;