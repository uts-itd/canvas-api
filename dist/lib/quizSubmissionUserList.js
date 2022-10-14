"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(helper) {
    return {
        /**
         * {  "body": {   "type": "string",   "description": "message body of the conversation to be created",   "example": "Please take the quiz."  },  "recipients": {   "type": "string",   "description": "Who to send the message to. May be either 'submitted' or 'unsubmitted'",   "example": "submitted"  },  "subject": {   "type": "string",   "description": "Subject of the new Conversation created",   "example": "ATTN: Quiz 101 Students"  } }
         * @summary Send a message to unsubmitted or submitted users for the quiz
         * @param {string|number} courseId Canvas Course ID
         * @param {string|number} quizzeId Canvas Quizze ID
         * @param {Object} body JSON form fields
         * @returns {Promise<any>}
         */
        sendMessageToUnsubmittedOrSubmittedUsersForQuiz: (courseId, quizzeId, body) => helper.post(`/v1/courses/${courseId}/quizzes/${quizzeId}/submission_users/message`, body),
    };
}
exports.default = default_1;
