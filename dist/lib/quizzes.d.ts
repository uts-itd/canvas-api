import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the paginated list of Quizzes in this course.
     * @summary List quizzes in a course
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listQuizzesInCourse: (courseId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the quiz with the given id.
     * @summary Get a single quiz
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizzeId Canvas Quizze ID
     * @returns {Promise<any>}
     */
    getSingleQuiz: (courseId: string | number, quizzeId: string | number) => Promise<any>;
    /**
     * Create a new quiz for this course.
     * @summary Create a quiz
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createQuiz: (courseId: string | number, body: any) => Promise<any>;
    /**
     * Modify an existing quiz. See the documentation for quiz creation. Additional arguments:
     * @summary Edit a quiz
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editQuiz: (courseId: string | number, quizzeId: string | number, body: any) => Promise<any>;
    /**
     *
     * @summary Delete a quiz
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizzeId Canvas Quizze ID
     * @returns {Promise<any>}
     */
    deleteQuiz: (courseId: string | number, quizzeId: string | number) => Promise<any>;
    /**
     * Change order of the quiz questions or groups within the quiz 204 No Content response code is returned if the reorder was successful.
     * @summary Reorder quiz items
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderQuizItems: (courseId: string | number, quizzeId: string | number, body: any) => Promise<any>;
    /**
     * Accepts an access code and returns a boolean indicating whether that access code is correct
     * @summary Validate quiz access code
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    validateQuizAccessCode: (courseId: string | number, quizzeId: string | number, body: any) => Promise<any>;
};
