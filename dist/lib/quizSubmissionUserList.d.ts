declare function _exports(helper: any): {
    /**
     * {  "body": {   "type": "string",   "description": "message body of the conversation to be created",   "example": "Please take the quiz."  },  "recipients": {   "type": "string",   "description": "Who to send the message to. May be either 'submitted' or 'unsubmitted'",   "example": "submitted"  },  "subject": {   "type": "string",   "description": "Subject of the new Conversation created",   "example": "ATTN: Quiz 101 Students"  } }
     * @summary Send a message to unsubmitted or submitted users for the quiz
     * @param {string} courseId Canvas Course ID
     * @param {string} quizzeId Canvas Quizze ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    sendMessageToUnsubmittedOrSubmittedUsersForQuiz: (courseId: string, quizzeId: string, body: any) => Promise<any>;
};
export = _exports;
