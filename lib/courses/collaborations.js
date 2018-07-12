const helper = require('../helper');

let collaborations = {
    /**
     * List collaborations.
     * 
     * @param {number|string} course Course Canvas or SIS ID.
     * 
     * https://canvas.instructure.com/doc/api/collaborations.html#method.collaborations.api_index
     */
    get: (course) => helper.get(`courses/${course}/collaborations`),
}

module.exports = collaborations;