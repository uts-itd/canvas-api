import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns a map of dates to grader/assignment groups
     * @summary Days in gradebook history for this course
     * @param number courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    daysInGradebookHistoryForThisCourse: (courseId: string | number) => Promise<any>;
    /**
     * Returns the graders who worked on this day, along with the assignments they worked on. More details can be obtained by selecting a grader and assignment and calling the 'submissions' api endpoint for a given date.
     * @summary Details for a given date in gradebook history for this course
     * @param number courseId Canvas Course ID
     * @param {string} date The date for which you would like to see detailed information
     * @returns {Promise<any>}
     */
    detailsForGivenDateInGradebookHistoryForThisCourse: (courseId: string | number, date: string) => Promise<any>;
    /**
     * Gives a nested list of submission versions
     * @summary Lists submissions
     * @param number courseId Canvas Course ID
     * @param {string} date The date for which you would like to see submissions
     * @param number graderId Canvas Grader ID
     * @param number assignmentId Canvas Assignment ID
     * @returns {Promise<any>}
     */
    listsSubmissions: (courseId: string | number, date: string, graderId: string | number, assignmentId: string | number) => Promise<any>;
    /**
     * Gives a paginated, uncollated list of submission versions for all matching submissions in the context. This SubmissionVersion objects will not include the +new_grade+ or +previous_grade+ keys, only the +grade+; same for +graded_at+ and +grader+.
     * @summary List uncollated submission versions
     * @param number courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUncollatedSubmissionVersions: (courseId: string | number, query?: any) => Promise<any>;
};
