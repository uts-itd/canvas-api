var helper = require('../helper');
var peerReviews = {
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesPeerReviews: function (courseId, assignmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/peer_reviews", query);
    },
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsPeerReviews: function (sectionId, assignmentId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/peer_reviews", query);
    },
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesSubmissions: function (courseId, assignmentId, submissionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + submissionId + "/peer_reviews", query);
    },
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsSubmissions: function (sectionId, assignmentId, submissionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + submissionId + "/peer_reviews", query);
    },
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewCourses: function (courseId, assignmentId, submissionId, body) { return helper.post("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + submissionId + "/peer_reviews", body); },
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewSections: function (sectionId, assignmentId, submissionId, body) { return helper.post("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + submissionId + "/peer_reviews", body); },
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewCourses: function (courseId, assignmentId, submissionId, query) { return helper.delete("/v1/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + submissionId + "/peer_reviews", query); },
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewSections: function (sectionId, assignmentId, submissionId, query) { return helper.delete("/v1/sections/" + sectionId + "/assignments/" + assignmentId + "/submissions/" + submissionId + "/peer_reviews", query); },
};
module.exports = peerReviews;
//# sourceMappingURL=peerReviews.js.map