declare function _exports(helper: any): {
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesPeerReviews: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsPeerReviews: (sectionId: string, assignmentId: string, query?: any) => Promise<any>;
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsCoursesSubmissions: (courseId: string, assignmentId: string, submissionId: string, query?: any) => Promise<any>;
    /**
     * Get a list of all Peer Reviews for this assignment
     * @summary Get all Peer Reviews
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllPeerReviewsSectionsSubmissions: (sectionId: string, assignmentId: string, submissionId: string, query?: any) => Promise<any>;
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewCourses: (courseId: string, assignmentId: string, submissionId: string, body: any) => Promise<any>;
    /**
     * Create a peer review for the assignment
     * @summary Create Peer Review
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createPeerReviewSections: (sectionId: string, assignmentId: string, submissionId: string, body: any) => Promise<any>;
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string} courseId Canvas Course ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewCourses: (courseId: string, assignmentId: string, submissionId: string, query: any) => Promise<any>;
    /**
     * Delete a peer review for the assignment
     * @summary Delete Peer Review
     * @param {string} sectionId Canvas Section ID
     * @param {string} assignmentId Canvas Assignment ID
     * @param {string} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deletePeerReviewSections: (sectionId: string, assignmentId: string, submissionId: string, query: any) => Promise<any>;
};
export = _exports;
