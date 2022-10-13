declare function _exports(helper: any): {
    /**
     * Returns the paginated list of QuizQuestions in this quiz.
     * @summary List questions in a quiz or a submission
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listQuestionsInQuizOrSubmission: (courseId: string, quizId: string, query?: any) => Promise<any>;
    /**
     * Returns the quiz question with the given id
     * @summary Get a single quiz question
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @returns {Promise<any>}
     */
    getSingleQuizQuestion: (courseId: string, quizId: string, questionId: any) => Promise<any>;
    /**
     * Create a new quiz question for this quiz
     * @summary Create a single quiz question
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createSingleQuizQuestion: (courseId: string, quizId: string, body: any) => Promise<any>;
    /**
     * Updates an existing quiz question for this quiz
     * @summary Update an existing quiz question
     * @param {string} courseId Canvas Course ID
     * @param number quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateExistingQuizQuestion: (courseId: string, quizId: any, questionId: any, body: any) => Promise<any>;
    /**
     * 204 No Content response code is returned if the deletion was successful.
     * @summary Delete a quiz question
     * @param {string} courseId Canvas Course ID
     * @param number quizId Canvas Quiz ID
     * @param number questionId Canvas Question ID
     * @returns {Promise<any>}
     */
    deleteQuizQuestion: (courseId: string, quizId: any, questionId: any) => Promise<any>;
};
export = _exports;
