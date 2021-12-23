var helper = require('../helper');
var latePolicy = {
    /**
     * Returns the late policy for a course.
     * @summary Get a late policy
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getLatePolicy: function (courseId) { return helper.get("/v1/courses/" + courseId + "/late_policy"); },
    /**
     * Create a late policy. If the course already has a late policy, a bad_request is returned since there can only be one late policy per course.
     * @summary Create a late policy
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createLatePolicy: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/late_policy", body); },
    /**
     * Patch a late policy. No body is returned upon success.
     * @summary Patch a late policy
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    patchLatePolicy: function (courseId, body) { return helper.patch("/v1/courses/" + courseId + "/late_policy", body); },
};
module.exports = latePolicy;
//# sourceMappingURL=latePolicy.js.map