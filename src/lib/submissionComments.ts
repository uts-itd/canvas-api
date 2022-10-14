import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Upload a file to attach to a submission comment See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. The final step of the file upload workflow will return the attachment data, including the new file id. The caller can then PUT the file_id to the submission API to attach it to a comment
     * @summary Upload a file
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} assignmentId Canvas Assignment ID
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    uploadFile: (
      courseId: string | number,
      assignmentId: string | number,
      userId: string | number,
    ) =>
      helper.post(
        `/v1/courses/${courseId}/assignments/${assignmentId}/submissions/${userId}/comments/files`,
      ),
  };
}
