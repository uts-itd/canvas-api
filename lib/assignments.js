const tiny = require('tiny-json-http');

let assignments = {};

assignments.getAll = (id, callback) => {
    return tiny.get({
        url: `https://${_domain}/api/v1/courses/${_courseID}/assignments?per_page=${_perPage}`,
        headers: { 'Authorization': `Bearer ${_token}` },
    }, callback.bind({ id: id}));
}

module.exports = assignments;