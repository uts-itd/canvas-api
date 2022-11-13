import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesPeerReviews: (
      courseId: string | number,
      assignmentId: string | number,
      query?: any,
    ) => helper.get(`/v1/courses/${courseId}/assignments/${assignmentId}/peer_reviews`, query),
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsPeerReviews: (
      sectionId: string | number,
      assignmentId: string | number,
      query?: any,
    ) => helper.get(`/v1/sections/${sectionId}/assignments/${assignmentId}/peer_reviews`, query),
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesSubmissions: (
      courseId: string | number,
      assignmentId: string | number,
      submissionId: string | number,
      query?: any,
    ) =>
      helper.get(
        `/v1/courses/${courseId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`,
        query,
      ),
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsSubmissions: (
      sectionId: string | number,
      assignmentId: string | number,
      submissionId: string | number,
      query?: any,
    ) =>
      helper.get(
        `/v1/sections/${sectionId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`,
        query,
      ),
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewCourses: (
      courseId: string | number,
      assignmentId: string | number,
      submissionId: string | number,
      body: any,
    ) =>
      helper.post(
        `/v1/courses/${courseId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`,
        body,
      ),
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewSections: (
      sectionId: string | number,
      assignmentId: string | number,
      submissionId: string | number,
      body: any,
    ) =>
      helper.post(
        `/v1/sections/${sectionId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`,
        body,
      ),
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewCourses: (
      courseId: string | number,
      assignmentId: string | number,
      submissionId: string | number,
      query?: any,
    ) =>
      helper.delete(
        `/v1/courses/${courseId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`,
        query,
      ),
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewSections: (
      sectionId: string | number,
      assignmentId: string | number,
      submissionId: string | number,
      query?: any,
    ) =>
      helper.delete(
        `/v1/sections/${sectionId}/assignments/${assignmentId}/submissions/${submissionId}/peer_reviews`,
        query,
      ),
  };
}
