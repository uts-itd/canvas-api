export = quizSubmissionFiles;
declare let quizSubmissionFiles: {
    /**
     * Associate a new quiz submission file This API endpoint is the first step in uploading a quiz submission file. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow as these parameters are interpreted as per the documentation there.
     * @summary Upload a file
     * @param {string} courseId Canvas Course ID
     * @param {string} quizId Canvas Quiz ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    uploadFile: (courseId: string, quizId: string, body: any) => Promise<any>;
};
