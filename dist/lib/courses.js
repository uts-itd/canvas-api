var helper = require('../helper');
var courses = {
    /**
     * Returns the paginated list of active courses for the current user.
     * @summary List your courses
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listYourCourses: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses", query);
    },
    /**
     * Returns a paginated list of active courses for this user. To view the course list for a user other than yourself, you must be either an observer of that user or an administrator.
     * @summary List courses for a user
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCoursesForUser: function (userId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/users/" + userId + "/courses", query);
    },
    /**
     * Create a new course
     * @summary Create a new course
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewCourse: function (accountId, body) { return helper.post("/v1/accounts/" + accountId + "/courses", body); },
    /**
     * Upload a file to the course. This API endpoint is the first step in uploading a file to a course. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Only those with the "Manage Files" permission on a course can upload files to the course. By default, this is Teachers, TAs and Designers.
     * @summary Upload a file
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    uploadFile: function (courseId) { return helper.post("/v1/courses/" + courseId + "/files"); },
    /**
     * Returns the paginated list of students enrolled in this course. DEPRECATED: Please use the {api:CoursesController#users course users} endpoint and pass "student" as the enrollment_type.
     * @summary List students
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listStudents: function (courseId) { return helper.get("/v1/courses/" + courseId + "/students"); },
    /**
     * Returns the paginated list of users in this course. And optionally the user's enrollments in the course.
     * @summary List users in course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUsersInCourseUsers: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/users", query);
    },
    /**
     * Returns the paginated list of users in this course. And optionally the user's enrollments in the course.
     * @summary List users in course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUsersInCourseSearchUsers: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/search_users", query);
    },
    /**
     * Returns the paginated list of users in this course, ordered by how recently they have logged in. The records include the 'last_login' field which contains a timestamp of the last time that user logged into canvas. The querying user must have the 'View usage reports' permission.
     * @summary List recently logged in students
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listRecentlyLoggedInStudents: function (courseId) { return helper.get("/v1/courses/" + courseId + "/recent_students"); },
    /**
     * Return information on a single user. Accepts the same include[] parameters as the :users: action, and returns a single user with the same fields as that action.
     * @summary Get single user
     * @param {string} courseId Canvas Course ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getSingleUser: function (courseId, userId) { return helper.get("/v1/courses/" + courseId + "/users/" + userId); },
    /**
     * Preview html content processed for this course
     * @summary Preview processed html
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    previewProcessedHtml: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/preview_html", body); },
    /**
     * Returns the current user's course-specific activity stream, paginated. For full documentation, see the API documentation for the user activity stream, in the user api.
     * @summary Course activity stream
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    courseActivityStream: function (courseId) { return helper.get("/v1/courses/" + courseId + "/activity_stream"); },
    /**
     * Returns a summary of the current user's course-specific activity stream. For full documentation, see the API documentation for the user activity stream summary, in the user api.
     * @summary Course activity stream summary
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    courseActivityStreamSummary: function (courseId) { return helper.get("/v1/courses/" + courseId + "/activity_stream/summary"); },
    /**
     * Returns the current user's course-specific todo items. For full documentation, see the API documentation for the user todo items, in the user api.
     * @summary Course TODO items
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    courseTodoItems: function (courseId) { return helper.get("/v1/courses/" + courseId + "/todo"); },
    /**
     * Delete or conclude an existing course
     * @summary Delete/Conclude a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteConcludeCourse: function (courseId, query) { return helper.delete("/v1/courses/" + courseId, query); },
    /**
     * Returns some of a course's settings.
     * @summary Get course settings
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getCourseSettings: function (courseId) { return helper.get("/v1/courses/" + courseId + "/settings"); },
    /**
     * Can update the following course settings:
     * @summary Update course settings
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCourseSettings: function (courseId, body) { return helper.put("/v1/courses/" + courseId + "/settings", body); },
    /**
     * Return information on a single course. Accepts the same include[] parameters as the list action.
     * @summary Get a single course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleCourseCourses: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId, query);
    },
    /**
     * Return information on a single course. Accepts the same include[] parameters as the list action.
     * @summary Get a single course
     * @param {string} accountId Canvas Account ID
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleCourseAccounts: function (accountId, courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/accounts/" + accountId + "/courses/" + courseId, query);
    },
    /**
     * Update an existing course. Arguments are the same as Courses#create, with a few exceptions (enroll_me). If a user has content management rights, but not full course editing rights, the only attribute editable through this endpoint will be "syllabus_body"
     * @summary Update a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCourse: function (courseId, body) { return helper.put("/v1/courses/" + courseId, body); },
    /**
     * Update multiple courses in an account. Operates asynchronously; use the {api:ProgressController#show progress endpoint} to query the status of an operation. The action to take on each course. Must be one of 'offer', 'conclude', 'delete', or 'undelete'.  'offer' makes a course visible to students. This action is also called "publish" on the web site.  'conclude' prevents future enrollments and makes a course read-only for all participants. The course still appears   in prior-enrollment lists.  'delete' completely removes the course from the web site (including course menus and prior-enrollment lists).   All enrollments are deleted. Course content may be physically deleted at a future date.  'undelete' attempts to recover a course that has been deleted. (Recovery is not guaranteed; please conclude   rather than delete a course if there is any possibility the course will be used again.) The recovered course   will be unpublished. Deleted enrollments will not be recovered.
     * @summary Update courses
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCourses: function (accountId, body) { return helper.put("/v1/accounts/" + accountId + "/courses", body); },
    /**
     * Deletes the current course, and creates a new equivalent course with no content, but all sections and users moved over.
     * @summary Reset a course
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    resetCourse: function (courseId) { return helper.post("/v1/courses/" + courseId + "/reset_content"); },
    /**
     * For each assignment in the course, returns each assigned student's ID and their corresponding due date along with some grading period data. Returns a collection with keys representing assignment IDs and values as a collection containing keys representing student IDs and values representing the student's effective due_at, the grading_period_id of which the due_at falls in, and whether or not the grading period is closed (in_closed_grading_period) The list of assignment IDs for which effective student due dates are requested. If not provided, all assignments in the course will be used.
     * @summary Get effective due dates
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getEffectiveDueDates: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/effective_due_dates", query);
    },
    /**
     * Returns permission information for the calling user in the given course. See also {api:AccountsController#permissions the Account counterpart}.
     * @summary Permissions
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    permissions: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/permissions", query);
    },
    /**
     * DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API} Retrieve the status of a course copy
     * @summary Get course copy status
     * @param {string} courseId Canvas Course ID
     * @param {string} courseCopId Canvas Course cop ID
     * @returns {Promise<any>}
     */
    getCourseCopyStatus: function (courseId, courseCopId) { return helper.get("/v1/courses/" + courseId + "/course_copy/" + courseCopId); },
    /**
     * DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API} Copies content from one course into another. The default is to copy all course content. You can control specific types to copy by using either the 'except' option or the 'only' option. The response is the same as the course copy status endpoint
     * @summary Copy course content
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    copyCourseContent: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/course_copy", body); },
};
module.exports = courses;
