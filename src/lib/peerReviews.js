const helper = require('../helper');

let peerReviews = {
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesPeerReviews: (courseId, assignmentId, query='') => helper.get(`/v1/courses/${courseId}/assignments/${assignmentId}/peer_reviews`, query),
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsPeerReviews: (sectionId, assignmentId, query='') => helper.get(`/v1/sections/${sectionId}/assignments/${assignmentId}/peer_reviews`, query),
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesSubmissions: (courseId, assignmentId, submissionId, query='') => helper.get(`/v1/courses/${courseId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`, query),
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsSubmissions: (sectionId, assignmentId, submissionId, query='') => helper.get(`/v1/sections/${sectionId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`, query),
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewCourses: (courseId, assignmentId, submissionId, body) => helper.post(`/v1/courses/${courseId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`, body),
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewSections: (sectionId, assignmentId, submissionId, body) => helper.post(`/v1/sections/${sectionId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`, body),
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewCourses: (courseId, assignmentId, submissionId, query) => helper.delete(`/v1/courses/${courseId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`, query),
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewSections: (sectionId, assignmentId, submissionId, query) => helper.delete(`/v1/sections/${sectionId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`, query),
}

module.exports = peerReviews;