const tiny = require('tiny-json-http');

let courses = {};

tinyGet = function(path, callback) {
    return tiny.get({
        url: `https://${_domain}/api/v1/courses/${_courseID}/${path}`,
        headers: { 'Authorization': `Bearer ${_token}` },
    }, callback);
}

courses.get = (counter, callback) => tinyGet('', callback);

courses.settings = (callback) => tinyGet('settings', callback);

module.exports = courses;