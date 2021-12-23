var helper = require('../helper');
var submissions = {
    /**
     * Make a submission for an assignment. You must be enrolled as a student in the course/section to do this. All online turn-in submission types are supported in this API. However, there are a few things that are not yet supported: Files can be submitted based on a file ID of a user or group file. However, there is no API yet for listing the user and group files, or uploading new files via the API. A file upload API is coming soon. Media comments can be submitted, however, there is no API yet for creating a media comment to submit. Integration with Google Docs is not yet supported.
     * @summary Submit an assignment
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    submitAssignmentCourses: function (courseId, assignmentId, body) { return helper.post("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions", body); },
    /**
     * Make a submission for an assignment. You must be enrolled as a student in the course/section to do this. All online turn-in submission types are supported in this API. However, there are a few things that are not yet supported: Files can be submitted based on a file ID of a user or group file. However, there is no API yet for listing the user and group files, or uploading new files via the API. A file upload API is coming soon. Media comments can be submitted, however, there is no API yet for creating a media comment to submit. Integration with Google Docs is not yet supported.
     * @summary Submit an assignment
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    submitAssignmentSections: function (sectionId, assignmentId, body) { return helper.post("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions", body); },
    /**
     * A paginated list of all existing submissions for an assignment.
     * @summary List assignment submissions
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAssignmentSubmissionsCourses: function (courseId, assignmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions", query);
    },
    /**
     * A paginated list of all existing submissions for an assignment.
     * @summary List assignment submissions
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAssignmentSubmissionsSections: function (sectionId, assignmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions", query);
    },
    /**
     * A paginated list of all existing submissions for a given set of students and assignments.
     * @summary List submissions for multiple assignments
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listSubmissionsForMultipleAssignmentsCourses: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/students/submissions", query);
    },
    /**
     * A paginated list of all existing submissions for a given set of students and assignments.
     * @summary List submissions for multiple assignments
     * @param {string} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listSubmissionsForMultipleAssignmentsSections: function (sectionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId + "/students/submissions", query);
    },
    /**
     * Get a single submission, based on user id.
     * @summary Get a single submission
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleSubmissionCourses: function (courseId, assignmentId, userId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + userId, query);
    },
    /**
     * Get a single submission, based on user id.
     * @summary Get a single submission
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleSubmissionSections: function (sectionId, assignmentId, userId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + userId, query);
    },
    /**
     * Upload a file to a submission. This API endpoint is the first step in uploading a file to a submission as a student. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. The final step of the file upload workflow will return the attachment data, including the new file id. The caller can then POST to submit the +online_upload+ assignment with these file ids.
     * @summary Upload a file
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    uploadFileCourses: function (courseId, assignmentId, userId) { return helper.post("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + userId + "/files"); },
    /**
     * Upload a file to a submission. This API endpoint is the first step in uploading a file to a submission as a student. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. The final step of the file upload workflow will return the attachment data, including the new file id. The caller can then POST to submit the +online_upload+ assignment with these file ids.
     * @summary Upload a file
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    uploadFileSections: function (sectionId, assignmentId, userId) { return helper.post("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + userId + "/files"); },
    /**
     * Comment on and/or update the grading for a student's assignment submission. If any submission or rubric_assessment arguments are provided, the user must have permission to manage grades in the appropriate context (course or section).
     * @summary Grade or comment on a submission
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    gradeOrCommentOnSubmissionCourses: function (courseId, assignmentId, userId, body) { return helper.put("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + userId, body); },
    /**
     * Comment on and/or update the grading for a student's assignment submission. If any submission or rubric_assessment arguments are provided, the user must have permission to manage grades in the appropriate context (course or section).
     * @summary Grade or comment on a submission
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    gradeOrCommentOnSubmissionSections: function (sectionId, assignmentId, userId, body) { return helper.put("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + userId, body); },
    /**
     * A paginated list of students eligible to submit the assignment. The caller must have permission to view grades. Section-limited instructors will only see students in their own sections. returns [UserDisplay]
     * @summary List gradeable students
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    listGradeableStudents: function (courseId, assignmentId) { return helper.get("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/gradeable_students"); },
    /**
     * A paginated list of students eligible to submit a list of assignments. The caller must have permission to view grades for the requested course. Section-limited instructors will only see students in their own sections.
     * @summary List multiple assignments gradeable students
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listMultipleAssignmentsGradeableStudents: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignments/gradeable_students", query);
    },
    /**
     * Update the grading and comments on multiple student's assignment submissions in an asynchronous job. The user must have permission to manage grades in the appropriate context (course or section).
     * @summary Grade or comment on multiple submissions
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    gradeOrCommentOnMultipleSubmissionsCoursesSubmissions: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/submissions/update_grades", body); },
    /**
     * Update the grading and comments on multiple student's assignment submissions in an asynchronous job. The user must have permission to manage grades in the appropriate context (course or section).
     * @summary Grade or comment on multiple submissions
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    gradeOrCommentOnMultipleSubmissionsCoursesAssignments: function (courseId, assignmentId, body) { return helper.post("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/update_grades", body); },
    /**
     * Update the grading and comments on multiple student's assignment submissions in an asynchronous job. The user must have permission to manage grades in the appropriate context (course or section).
     * @summary Grade or comment on multiple submissions
     * @param {string} sectionId Canvas Section ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    gradeOrCommentOnMultipleSubmissionsSectionsSubmissions: function (sectionId, body) { return helper.post("/v1/sections/" + sectionId + "/submissions/update_grades", body); },
    /**
     * Update the grading and comments on multiple student's assignment submissions in an asynchronous job. The user must have permission to manage grades in the appropriate context (course or section).
     * @summary Grade or comment on multiple submissions
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    gradeOrCommentOnMultipleSubmissionsSectionsAssignments: function (sectionId, assignmentId, body) { return helper.post("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/update_grades", body); },
    /**
     * No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark submission as read
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    markSubmissionAsReadCourses: function (courseId, assignmentId, userId) { return helper.put("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + userId + "/read"); },
    /**
     * No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark submission as read
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    markSubmissionAsReadSections: function (sectionId, assignmentId, userId) { return helper.put("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + userId + "/read"); },
    /**
     * No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark submission as unread
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    markSubmissionAsUnreadCourses: function (courseId, assignmentId, userId) { return helper.delete("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + userId + "/read"); },
    /**
     * No request fields are necessary. On success, the response will be 204 No Content with an empty body.
     * @summary Mark submission as unread
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    markSubmissionAsUnreadSections: function (sectionId, assignmentId, userId) { return helper.delete("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + userId + "/read"); },
    /**
     * Returns the number of submissions for the given assignment based on gradeable students that fall into three categories: graded, ungraded, not submitted.
     * @summary Submission Summary
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    submissionSummaryCourses: function (courseId, assignmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submission_summary", query);
    },
    /**
     * Returns the number of submissions for the given assignment based on gradeable students that fall into three categories: graded, ungraded, not submitted.
     * @summary Submission Summary
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    submissionSummarySections: function (sectionId, assignmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submission_summary", query);
    },
};
module.exports = submissions;
//# sourceMappingURL=submissions.js.map