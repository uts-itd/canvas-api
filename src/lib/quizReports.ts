import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Returns a list of all available reports.
     * @summary Retrieve all quiz reports
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveAllQuizReports: (courseId: string | number, quizId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/reports`, query),
    /**
     * Create and return a new report for this quiz. If a previously generated report matches the arguments and is still current (i.e. there have been no new submissions), it will be returned. *Responses* 400 Bad Request if the specified report type is invalid 409 Conflict if a quiz report of the specified type is already being  generated
     * @summary Create a quiz report
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createQuizReport: (courseId: string | number, quizId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/quizzes/${quizId}/reports`, body),
    /**
     * Returns the data for a single quiz report.
     * @summary Get a quiz report
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} reportId Canvas Report ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getQuizReport: (
      courseId: string | number,
      quizId: string | number,
      reportId: string | number,
      query?: any,
    ) => helper.get(`/v1/courses/${courseId}/quizzes/${quizId}/reports/${reportId}`, query),
    /**
     * This API allows you to cancel a previous request you issued for a report to be generated. Or in the case of an already generated report, you'd like to remove it, perhaps to generate it another time with an updated version that provides new features. You must check the report's generation status before attempting to use this interface. See the "workflow_state" property of the QuizReport's Progress object for more information. Only when the progress reports itself in a "queued" state can the generation be aborted. *Responses* - 204 No Content if your request was accepted - 422 Unprocessable Entity if the report is not being generated  or can not be aborted at this stage
     * @summary Abort the generation of a report, or remove a previously generated one
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizId Canvas Quiz ID
     * @param {string|number} reportId Canvas Report ID
     * @returns {Promise<any>}
     */
    abortGenerationOfReportOrRemovePreviouslyGeneratedOne: (
      courseId: string | number,
      quizId: string | number,
      reportId: string | number,
    ) => helper.delete(`/v1/courses/${courseId}/quizzes/${quizId}/reports/${reportId}`),
  };
}
