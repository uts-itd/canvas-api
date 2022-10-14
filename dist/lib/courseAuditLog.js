"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * List course change events for a given course.
         * @summary Query by course.
         * @param {string|number} courseId Canvas Course ID
         * @param {Object} query JSON query parameters
         * @returns {Promise<any>}
         */
        queryByCourse: (courseId, query) => helper.get(`/v1/audit/course/courses/${courseId}`, query),
    };
}
exports.default = default_1;
