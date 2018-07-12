const helper = require('../helper');
const analytics = require('./analytics');
const externalFeeds = require('./externalFeeds');
const assignments = require('./assignments');
const assignmentGroups = require('./assignmentGroups');
const blueprints = require('./blueprints');
const collaborations = require('./collaborations');

let course = {
    /**
     * Get a single course.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     */
    get: course => helper.get(`courses/${course}`),
    /**
     * Get course settings.
     * 
     * @param {number|string} courseID Course Canvas or SIS ID.
     */
    getSettings: course => helper.get(`courses/${course}/settings`),
    analytics,
    externalFeeds,
    assignments,
    assignmentGroups,
    blueprints,
    collaborations,
}

module.exports = course;