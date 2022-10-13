declare function _exports(helper: any): {
    /**
     * Returns the paginated list of active courses for the current user.
     * @summary List your courses
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listYourCourses: (query?: any) => Promise<any>;
    /**
     * Returns a paginated list of active courses for this user. To view the course list for a user other than yourself, you must be either an observer of that user or an administrator.
     * @summary List courses for a user
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCoursesForUser: (userId: string, query?: any) => Promise<any>;
    /**
     * Create a new course
     * @summary Create a new course
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createNewCourse: (accountId: string, body: any) => Promise<any>;
    /**
     * Upload a file to the course. This API endpoint is the first step in uploading a file to a course. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Only those with the "Manage Files" permission on a course can upload files to the course. By default, this is Teachers, TAs and Designers.
     * @summary Upload a file
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    uploadFile: (courseId: string) => Promise<any>;
    /**
     * Returns the paginated list of students enrolled in this course. DEPRECATED: Please use the {api:CoursesController#users course users} endpoint and pass "student" as the enrollment_type.
     * @summary List students
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listStudents: (courseId: string) => Promise<any>;
    /**
     * Returns the paginated list of users in this course. And optionally the user's enrollments in the course.
     * @summary List users in course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUsersInCourseUsers: (courseId: string, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of users in this course. And optionally the user's enrollments in the course.
     * @summary List users in course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUsersInCourseSearchUsers: (courseId: string, query?: any) => Promise<any>;
    /**
     * Returns the paginated list of users in this course, ordered by how recently they have logged in. The records include the 'last_login' field which contains a timestamp of the last time that user logged into canvas. The querying user must have the 'View usage reports' permission.
     * @summary List recently logged in students
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listRecentlyLoggedInStudents: (courseId: string) => Promise<any>;
    /**
     * Return information on a single user. Accepts the same include[] parameters as the :users: action, and returns a single user with the same fields as that action.
     * @summary Get single user
     * @param {string} courseId Canvas Course ID
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getSingleUser: (courseId: string, userId: string) => Promise<any>;
    /**
     * Preview html content processed for this course
     * @summary Preview processed html
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    previewProcessedHtml: (courseId: string, body: any) => Promise<any>;
    /**
     * Returns the current user's course-specific activity stream, paginated. For full documentation, see the API documentation for the user activity stream, in the user api.
     * @summary Course activity stream
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    courseActivityStream: (courseId: string) => Promise<any>;
    /**
     * Returns a summary of the current user's course-specific activity stream. For full documentation, see the API documentation for the user activity stream summary, in the user api.
     * @summary Course activity stream summary
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    courseActivityStreamSummary: (courseId: string) => Promise<any>;
    /**
     * Returns the current user's course-specific todo items. For full documentation, see the API documentation for the user todo items, in the user api.
     * @summary Course TODO items
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    courseTodoItems: (courseId: string) => Promise<any>;
    /**
     * Delete or conclude an existing course
     * @summary Delete/Conclude a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteConcludeCourse: (courseId: string, query: any) => Promise<any>;
    /**
     * Returns some of a course's settings.
     * @summary Get course settings
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getCourseSettings: (courseId: string) => Promise<any>;
    /**
     * Can update the following course settings:
     * @summary Update course settings
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCourseSettings: (courseId: string, body: any) => Promise<any>;
    /**
     * Return information on a single course. Accepts the same include[] parameters as the list action.
     * @summary Get a single course
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleCourseCourses: (courseId: string, query?: any) => Promise<any>;
    /**
     * Return information on a single course. Accepts the same include[] parameters as the list action.
     * @summary Get a single course
     * @param {string} accountId Canvas Account ID
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleCourseAccounts: (accountId: string, courseId: string, query?: any) => Promise<any>;
    /**
     * Update an existing course. Arguments are the same as Courses#create, with a few exceptions (enroll_me). If a user has content management rights, but not full course editing rights, the only attribute editable through this endpoint will be "syllabus_body"
     * @summary Update a course
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCourse: (courseId: string, body: any) => Promise<any>;
    /**
     * Update multiple courses in an account. Operates asynchronously; use the {api:ProgressController#show progress endpoint} to query the status of an operation. The action to take on each course. Must be one of 'offer', 'conclude', 'delete', or 'undelete'.  'offer' makes a course visible to students. This action is also called "publish" on the web site.  'conclude' prevents future enrollments and makes a course read-only for all participants. The course still appears   in prior-enrollment lists.  'delete' completely removes the course from the web site (including course menus and prior-enrollment lists).   All enrollments are deleted. Course content may be physically deleted at a future date.  'undelete' attempts to recover a course that has been deleted. (Recovery is not guaranteed; please conclude   rather than delete a course if there is any possibility the course will be used again.) The recovered course   will be unpublished. Deleted enrollments will not be recovered.
     * @summary Update courses
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCourses: (accountId: string, body: any) => Promise<any>;
    /**
     * Deletes the current course, and creates a new equivalent course with no content, but all sections and users moved over.
     * @summary Reset a course
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    resetCourse: (courseId: string) => Promise<any>;
    /**
     * For each assignment in the course, returns each assigned student's ID and their corresponding due date along with some grading period data. Returns a collection with keys representing assignment IDs and values as a collection containing keys representing student IDs and values representing the student's effective due_at, the grading_period_id of which the due_at falls in, and whether or not the grading period is closed (in_closed_grading_period) The list of assignment IDs for which effective student due dates are requested. If not provided, all assignments in the course will be used.
     * @summary Get effective due dates
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getEffectiveDueDates: (courseId: string, query?: any) => Promise<any>;
    /**
     * Returns permission information for the calling user in the given course. See also {api:AccountsController#permissions the Account counterpart}.
     * @summary Permissions
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    permissions: (courseId: string, query?: any) => Promise<any>;
    /**
     * DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API} Retrieve the status of a course copy
     * @summary Get course copy status
     * @param {string} courseId Canvas Course ID
     * @param {string} courseCopId Canvas Course cop ID
     * @returns {Promise<any>}
     */
    getCourseCopyStatus: (courseId: string, courseCopId: string) => Promise<any>;
    /**
     * DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API} Copies content from one course into another. The default is to copy all course content. You can control specific types to copy by using either the 'except' option or the 'only' option. The response is the same as the course copy status endpoint
     * @summary Copy course content
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    copyCourseContent: (courseId: string, body: any) => Promise<any>;
};
export = _exports;
