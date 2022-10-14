import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Get a list of all the question records for this quiz submission. 200 OK response code is returned if the request was successful.
     * @summary Get all quiz submission questions.
     * @param {string|number} quizSubmissionId Canvas Quiz submission ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getAllQuizSubmissionQuestions: (quizSubmissionId: string | number, query?: any) =>
      helper.get(`/v1/quiz_submissions/${quizSubmissionId}/questions`, query),
    /**
     * Provide or update an answer to one or more QuizQuestions.
     * @summary Answering questions
     * @param {string|number} quizSubmissionId Canvas Quiz submission ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    answeringQuestions: (quizSubmissionId: string | number, body: any) =>
      helper.post(`/v1/quiz_submissions/${quizSubmissionId}/questions`, body),
    /**
     * Set a flag on a quiz question to indicate that you want to return to it later.
     * @summary Flagging a question.
     * @param {string|number} quizSubmissionId Canvas Quiz submission ID
     * @param {string|number} questionId Canvas Question ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    flaggingQuestion: (quizSubmissionId: string | number, questionId: string | number, body: any) =>
      helper.put(`/v1/quiz_submissions/${quizSubmissionId}/questions/${questionId}/flag`, body),
    /**
     * Remove the flag that you previously set on a quiz question after you've returned to it.
     * @summary Unflagging a question.
     * @param {string|number} quizSubmissionId Canvas Quiz submission ID
     * @param {string|number} questionId Canvas Question ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    unflaggingQuestion: (
      quizSubmissionId: string | number,
      questionId: string | number,
      body: any,
    ) =>
      helper.put(`/v1/quiz_submissions/${quizSubmissionId}/questions/${questionId}/unflag`, body),
  };
}
