export = quizzes;
declare let quizzes: {
    /**
     * Returns the paginated list of Quizzes in this course.
     * @summary List quizzes in a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listQuizzesInCourse: (courseId: string, query?: any) => Promise<any>;
    /**
     * Returns the quiz with the given id.
     * @summary Get a single quiz
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @returns {Promise<any>}
     */
    getSingleQuiz: (courseId: string, quizzeId: string) => Promise<any>;
    /**
     * Create a new quiz for this course.
     * @summary Create a quiz
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createQuiz: (courseId: string, body: any) => Promise<any>;
    /**
     * Modify an existing quiz. See the documentation for quiz creation. Additional arguments:
     * @summary Edit a quiz
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editQuiz: (courseId: string, quizzeId: string, body: any) => Promise<any>;
    /**
     *
     * @summary Delete a quiz
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @returns {Promise<any>}
     */
    deleteQuiz: (courseId: string, quizzeId: string) => Promise<any>;
    /**
     * Change order of the quiz questions or groups within the quiz 204 No Content response code is returned if the reorder was successful.
     * @summary Reorder quiz items
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reorderQuizItems: (courseId: string, quizzeId: string, body: any) => Promise<any>;
    /**
     * Accepts an access code and returns a boolean indicating whether that access code is correct
     * @summary Validate quiz access code
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    validateQuizAccessCode: (courseId: string, quizzeId: string, body: any) => Promise<any>;
};
