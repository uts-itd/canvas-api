import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Get a list of all submissions for this quiz. Users who can view or manage grades for a course will have submissions from multiple users returned. A user who can only submit will have only their own submissions returned. When a user has an in-progress submission, only that submission is returned. When there isn't an in-progress quiz_submission, all completed submissions, including previous attempts, are returned. 200 OK response code is returned if the request was successful.
     * @summary Get all quiz submissions.
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllQuizSubmissions: (courseId: string | number, quizId: string | number, query?: any) => Promise<any>;
    /**
     * Get the submission for this quiz for the current user. 200 OK response code is returned if the request was successful.
     * @summary Get the quiz submission.
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getQuizSubmission: (courseId: string | number, quizId: string | number, query?: any) => Promise<any>;
    /**
     * Get a single quiz submission. 200 OK response code is returned if the request was successful.
     * @summary Get a single quiz submission.
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleQuizSubmission: (courseId: string | number, quizId: string | number, submissionId: string | number, query?: any) => Promise<any>;
    /**
     * Start taking a Quiz by creating a QuizSubmission which you can use to answer questions and submit your answers. Responses 200 OK if the request was successful 400 Bad Request if the quiz is locked 403 Forbidden if an invalid access code is specified 403 Forbidden if the Quiz's IP filter restriction does not pass 409 Conflict if a QuizSubmission already exists for this user and quiz
     * @summary Create the quiz submission (start a quiz-taking session)
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createQuizSubmissionStartQuizTakingSession: (courseId: string | number, quizId: string | number, body: any) => Promise<any>;
    /**
     * Update the amount of points a student has scored for questions they've answered, provide comments for the student about their answer(s), or simply fudge the total score by a specific amount of points. Responses 200 OK if the request was successful 403 Forbidden if you are not a teacher in this course 400 Bad Request if the attempt parameter is missing or invalid 400 Bad Request if the specified QS attempt is not yet complete
     * @summary Update student question scores and comments.
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateStudentQuestionScoresAndComments: (courseId: string | number, quizId: string | number, submissionId: string | number, body: any) => Promise<any>;
    /**
     * Complete the quiz submission by marking it as complete and grading it. When the quiz submission has been marked as complete, no further modifications will be allowed. Responses 200 OK if the request was successful 403 Forbidden if an invalid access code is specified 403 Forbidden if the Quiz's IP filter restriction does not pass 403 Forbidden if an invalid token is specified 400 Bad Request if the QS is already complete 400 Bad Request if the attempt parameter is missing 400 Bad Request if the attempt parameter is not the latest attempt
     * @summary Complete the quiz submission (turn it in).
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    completeQuizSubmissionTurnItIn: (courseId: string | number, quizId: string | number, submissionId: string | number, body: any) => Promise<any>;
    /**
     * Get the current timing data for the quiz attempt, both the end_at timestamp and the time_left parameter. Responses 200 OK if the request was successful
     * @summary Get current quiz submission times.
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} submissionId Canvas Submission ID
     * @returns {Promise<any>}
     */
    getCurrentQuizSubmissionTimes: (courseId: string | number, quizId: string | number, submissionId: string | number) => Promise<any>;
};
