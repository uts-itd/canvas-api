import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesPeerReviews: (courseId: string | number, assignmentId: string | number, query?: any) => Promise<any>;
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsPeerReviews: (sectionId: string | number, assignmentId: string | number, query?: any) => Promise<any>;
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesSubmissions: (courseId: string | number, assignmentId: string | number, submissionId: string | number, query?: any) => Promise<any>;
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsSubmissions: (sectionId: string | number, assignmentId: string | number, submissionId: string | number, query?: any) => Promise<any>;
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewCourses: (courseId: string | number, assignmentId: string | number, submissionId: string | number, body: any) => Promise<any>;
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewSections: (sectionId: string | number, assignmentId: string | number, submissionId: string | number, body: any) => Promise<any>;
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewCourses: (courseId: string | number, assignmentId: string | number, submissionId: string | number, query?: any) => Promise<any>;
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewSections: (sectionId: string | number, assignmentId: string | number, submissionId: string | number, query?: any) => Promise<any>;
};
