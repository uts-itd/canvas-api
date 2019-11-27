export = sisIntegration;
declare let sisIntegration: {
    /**
     * Retrieve a list of published assignments flagged as "post_to_sis". See the Assignments API for more details on assignments. Assignment group and section information are included for convenience. Each section includes course information for the origin course and the cross-listed course, if applicable. The `origin_course` is the course to which the section belongs or the course from which the section was cross-listed. Generally, the `origin_course` should be preferred when performing integration work. The `xlist_course` is provided for consistency and is only present when the section has been cross-listed. See Sections API and Courses Api for me details. The `override` is only provided if the Differentiated Assignments course feature is turned on and the assignment has an override for that section. When there is an override for the assignment the override object's keys/values can be merged with the top level assignment object to create a view of the assignment object specific to that section. See Assignments api for more information on assignment overrides. restricts to courses that start before this date (if they have a start date) restricts to courses that end after this date (if they have an end date) information to include.  "student_overrides":: returns individual student override information
     * @summary Retrieve assignments enabled for grade export to SIS
     * @param number accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveAssignmentsEnabledForGradeExportToSisAccounts: (accountId: any, query?: any) => Promise<any>;
    /**
     * Retrieve a list of published assignments flagged as "post_to_sis". See the Assignments API for more details on assignments. Assignment group and section information are included for convenience. Each section includes course information for the origin course and the cross-listed course, if applicable. The `origin_course` is the course to which the section belongs or the course from which the section was cross-listed. Generally, the `origin_course` should be preferred when performing integration work. The `xlist_course` is provided for consistency and is only present when the section has been cross-listed. See Sections API and Courses Api for me details. The `override` is only provided if the Differentiated Assignments course feature is turned on and the assignment has an override for that section. When there is an override for the assignment the override object's keys/values can be merged with the top level assignment object to create a view of the assignment object specific to that section. See Assignments api for more information on assignment overrides. restricts to courses that start before this date (if they have a start date) restricts to courses that end after this date (if they have an end date) information to include.  "student_overrides":: returns individual student override information
     * @summary Retrieve assignments enabled for grade export to SIS
     * @param number courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    retrieveAssignmentsEnabledForGradeExportToSisCourses: (courseId: any, query?: any) => Promise<any>;
    /**
     * Disable all assignments flagged as "post_to_sis", with the option of making it specific to a grading period, in a course. On success, the response will be 204 No Content with an empty body. On failure, the response will be 400 Bad Request with a body of a specific message. For disabling assignments in a specific grading period
     * @summary Disable assignments currently enabled for grade export to SIS
     * @param number courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    disableAssignmentsCurrentlyEnabledForGradeExportToSis: (courseId: any, body: any) => Promise<any>;
};
