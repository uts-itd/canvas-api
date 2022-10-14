import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Returns the paginated list of QuizQuestions in this quiz.
     * @summary List questions in a quiz or a submission
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listQuestionsInQuizOrSubmission: (courseId: string | number, quizId: string | number, query?: any) => Promise<any>;
    /**
     * Returns the quiz question with the given id
     * @summary Get a single quiz question
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @returns {Promise<any>}
     */
    getSingleQuizQuestion: (courseId: string | number, quizId: string | number, questionId: string | number) => Promise<any>;
    /**
     * Create a new quiz question for this quiz
     * @summary Create a single quiz question
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSingleQuizQuestion: (courseId: string | number, quizId: string | number, body: any) => Promise<any>;
    /**
     * Updates an existing quiz question for this quiz
     * @summary Update an existing quiz question
     * @param {string|number} courseId Canvas Course ID
     * @param number quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateExistingQuizQuestion: (courseId: string | number, quizId: string | number, questionId: string | number, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a quiz question
     * @param {string|number} courseId Canvas Course ID
     * @param number quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @returns {Promise<any>}
     */
    deleteQuizQuestion: (courseId: string | number, quizId: string | number, questionId: string | number) => Promise<any>;
};
