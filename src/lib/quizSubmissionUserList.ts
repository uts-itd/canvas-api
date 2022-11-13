import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * {  "body": {   "type": "string",   "description": "message body of the conversation to be created",   "example": "Please take the quiz."  },  "recipients": {   "type": "string",   "description": "Who to send the message to. May be either 'submitted' or 'unsubmitted'",   "example": "submitted"  },  "subject": {   "type": "string",   "description": "Subject of the new Conversation created",   "example": "ATTN: Quiz 101 Students"  } }
     * @summary Send a message to unsubmitted or submitted users for the quiz
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    sendMessageToUnsubmittedOrSubmittedUsersForQuiz: (
      courseId: string | number,
      quizzeId: string | number,
      body: any,
    ) => helper.post(`/v1/courses/${courseId}/quizzes/${quizzeId}/submission_users/message`, body),
  };
}
