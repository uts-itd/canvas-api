"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * Associate a new quiz submission file This API endpoint is the first step in uploading a quiz submission file. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow as these parameters are interpreted as per the documentation there.
         * @summary Upload a file
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} quizId Canvas Quiz ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        uploadFile: (courseId, quizId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizId}/submissions/self/files`, body),
    };
}
exports.default = default_1;
