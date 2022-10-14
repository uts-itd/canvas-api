import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * List grade change events for a given assignment.
     * @summary Query by assignment.
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByAssignment: (assignmentId: string | number, query?: any) => Promise<any>;
    /**
     * List grade change events for a given course.
     * @summary Query by course.
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByCourse: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * List grade change events for a given student.
     * @summary Query by student.
     * @param {string|number} studentId Canvas Student ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByStudent: (studentId: string | number, query?: any) => Promise<any>;
    /**
     * List grade change events for a given grader.
     * @summary Query by grader.
     * @param {string|number} graderId Canvas Grader ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    queryByGrader: (graderId: string | number, query?: any) => Promise<any>;
};
