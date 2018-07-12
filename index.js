const course = require('./lib/courses');
const account = require('./lib/accounts')
const settings = require('./lib/settings');

let canvas = {
    settings, 
    course,
    account,
    /**
     * Set the course Id using the Canvas coures ID
     * 
     * @param {number} courseID Canvas course ID
     */
    setCourseID: (courseID) => settings.setCourseID(courseID),
}

module.exports = (domain, token) => {
    settings.domain = domain;
    settings.token = token;
    return canvas;
}