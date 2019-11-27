export = users;
declare let users: {
    /**
     * A paginated list of of users associated with this account. @example_request  curl https://<canvas>/api/v1/accounts/self/users?search_term=<search value> \    -X GET \    -H 'Authorization: Bearer <token>'
     * @summary List users in account
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUsersInAccount: (accountId: string, query?: any) => Promise<any>;
    /**
     * Returns the current user's global activity stream, paginated. There are many types of objects that can be returned in the activity stream. All object types have the same basic set of shared attributes:  !!!javascript  {   'created_at': '2011-07-13T09:12:00Z',   'updated_at': '2011-07-25T08:52:41Z',   'id': 1234,   'title': 'Stream Item Subject',   'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',   'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',   'read_state': false,   'context_type': 'course', // course|group   'course_id': 1,   'group_id': null,   'html_url': "http://..." // URL to the Canvas web UI for this stream item  } In addition, each item type has its own set of attributes available. DiscussionTopic:  !!!javascript  {   'type': 'DiscussionTopic',   'discussion_topic_id': 1234,   'total_root_discussion_entries': 5,   'require_initial_post': true,   'user_has_posted': true,   'root_discussion_entries': {    ...   }  } For DiscussionTopic, the message is truncated at 4kb. Announcement:  !!!javascript  {   'type': 'Announcement',   'announcement_id': 1234,   'total_root_discussion_entries': 5,   'require_initial_post': true,   'user_has_posted': null,   'root_discussion_entries': {    ...   }  } For Announcement, the message is truncated at 4kb. Conversation:  !!!javascript  {   'type': 'Conversation',   'conversation_id': 1234,   'private': false,   'participant_count': 3,  } Message:  !!!javascript  {   'type': 'Message',   'message_id': 1234,   'notification_category': 'Assignment Graded'  } Submission: Returns an {api:Submissions:Submission Submission} with its Course and Assignment data. Conference:  !!!javascript  {   'type': 'Conference',   'web_conference_id': 1234  } Collaboration:  !!!javascript  {   'type': 'Collaboration',   'collaboration_id': 1234  } AssessmentRequest:  !!!javascript  {   'type': 'AssessmentRequest',   'assessment_request_id': 1234  }
     * @summary List the activity stream
     * @returns {Promise<any>}
     */
    listActivityStreamSelf: () => Promise<any>;
    /**
     * Returns the current user's global activity stream, paginated. There are many types of objects that can be returned in the activity stream. All object types have the same basic set of shared attributes:  !!!javascript  {   'created_at': '2011-07-13T09:12:00Z',   'updated_at': '2011-07-25T08:52:41Z',   'id': 1234,   'title': 'Stream Item Subject',   'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',   'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',   'read_state': false,   'context_type': 'course', // course|group   'course_id': 1,   'group_id': null,   'html_url': "http://..." // URL to the Canvas web UI for this stream item  } In addition, each item type has its own set of attributes available. DiscussionTopic:  !!!javascript  {   'type': 'DiscussionTopic',   'discussion_topic_id': 1234,   'total_root_discussion_entries': 5,   'require_initial_post': true,   'user_has_posted': true,   'root_discussion_entries': {    ...   }  } For DiscussionTopic, the message is truncated at 4kb. Announcement:  !!!javascript  {   'type': 'Announcement',   'announcement_id': 1234,   'total_root_discussion_entries': 5,   'require_initial_post': true,   'user_has_posted': null,   'root_discussion_entries': {    ...   }  } For Announcement, the message is truncated at 4kb. Conversation:  !!!javascript  {   'type': 'Conversation',   'conversation_id': 1234,   'private': false,   'participant_count': 3,  } Message:  !!!javascript  {   'type': 'Message',   'message_id': 1234,   'notification_category': 'Assignment Graded'  } Submission: Returns an {api:Submissions:Submission Submission} with its Course and Assignment data. Conference:  !!!javascript  {   'type': 'Conference',   'web_conference_id': 1234  } Collaboration:  !!!javascript  {   'type': 'Collaboration',   'collaboration_id': 1234  } AssessmentRequest:  !!!javascript  {   'type': 'AssessmentRequest',   'assessment_request_id': 1234  }
     * @summary List the activity stream
     * @returns {Promise<any>}
     */
    listActivityStreamActivityStream: () => Promise<any>;
    /**
     * Returns a summary of the current user's global activity stream.
     * @summary Activity stream summary
     * @returns {Promise<any>}
     */
    activityStreamSummary: () => Promise<any>;
    /**
     * A paginated list of the current user's list of todo items, as seen on the user dashboard. There is a limit to the number of items returned. The `ignore` and `ignore_permanently` URLs can be used to update the user's preferences on what items will be displayed. Performing a DELETE request against the `ignore` URL will hide that item from future todo item requests, until the item changes. Performing a DELETE request against the `ignore_permanently` URL will hide that item forever.
     * @summary List the TODO items
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listTodoItems: (query?: any) => Promise<any>;
    /**
     * Counts of different todo items such as the number of assignments needing grading as well as the number of assignments needing submitting. There is a limit to the number of todo items this endpoint will count. It will only look at the first 100 todo items for the user. If the user has more than 100 todo items this count may not be reliable. The largest reliable number for both counts is 100.
     * @summary List counts for todo items
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCountsForTodoItems: (query?: any) => Promise<any>;
    /**
     * A paginated list of the current user's upcoming events, i.e. the same things shown in the dashboard 'Coming Up' sidebar.
     * @summary List upcoming assignments, calendar events
     * @returns {Promise<any>}
     */
    listUpcomingAssignmentsCalendarEvents: () => Promise<any>;
    /**
     * A paginated list of past-due assignments for which the student does not have a submission. The user sending the request must either be the student, an admin or a parent observer using the parent app
     * @summary List Missing Submissions
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listMissingSubmissions: (userId: string, query?: any) => Promise<any>;
    /**
     * Hide the given stream item.
     * @summary Hide a stream item
     * @param {string} activityStreaId Canvas Activity strea ID
     * @returns {Promise<any>}
     */
    hideStreamItem: (activityStreaId: string) => Promise<any>;
    /**
     * Hide all stream items for the user
     * @summary Hide all stream items
     * @returns {Promise<any>}
     */
    hideAllStreamItems: () => Promise<any>;
    /**
     * Upload a file to the user's personal files section. This API endpoint is the first step in uploading a file to a user's files. See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow. Note that typically users will only be able to upload files to their own files section. Passing a user_id of +self+ is an easy shortcut to specify the current user.
     * @summary Upload a file
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    uploadFile: (userId: string) => Promise<any>;
    /**
     * Shows details for user. Also includes an attribute "permissions", a non-comprehensive list of permissions for the user. Example:  !!!javascript  "permissions": {  "can_update_name": true, // Whether the user can update their name.  "can_update_avatar": false // Whether the user can update their avatar.  }
     * @summary Show user details
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    showUserDetails: (userId: string) => Promise<any>;
    /**
     * Create and return a new user and pseudonym for an account. If you don't have the "Modify login details for users" permission, but self-registration is enabled on the account, you can still use this endpoint to register new users. Certain fields will be required, and others will be ignored (see below).
     * @summary Create a user
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createUser: (accountId: string, body: any) => Promise<any>;
    /**
     * Self register and return a new user and pseudonym for an account. If self-registration is enabled on the account, you can use this endpoint to self register new users.
     * @summary Self register a user
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    selfRegisterUser: (accountId: string, body: any) => Promise<any>;
    /**
     * Update an existing user's settings.
     * @summary Update user settings.
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    updateUserSettings: (userId: string, query?: any) => Promise<any>;
    /**
     * Returns all custom colors that have been saved for a user.
     * @summary Get custom colors
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getCustomColors: (userId: string) => Promise<any>;
    /**
     * Returns the custom colors that have been saved for a user for a given context. The asset_string parameter should be in the format 'context_id', for example 'course_42'.
     * @summary Get custom color
     * @param {string} userId Canvas User ID
     * @param {string} assetString ID
     * @returns {Promise<any>}
     */
    getCustomColor: (userId: string, assetString: string) => Promise<any>;
    /**
     * Updates a custom color for a user for a given context. This allows colors for the calendar and elsewhere to be customized on a user basis. The asset string parameter should be in the format 'context_id', for example 'course_42'
     * @summary Update custom color
     * @param {string} userId Canvas User ID
     * @param {string} assetString ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCustomColor: (userId: string, assetString: string, body: any) => Promise<any>;
    /**
     * Returns all dashboard positions that have been saved for a user.
     * @summary Get dashboard positions
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getDashboardPositions: (userId: string) => Promise<any>;
    /**
     * Updates the dashboard positions for a user for a given context. This allows positions for the dashboard cards and elsewhere to be customized on a per user basis. The asset string parameter should be in the format 'context_id', for example 'course_42'
     * @summary Update dashboard positions
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    updateDashboardPositions: (userId: string) => Promise<any>;
    /**
     * Modify an existing user. To modify a user's login, see the documentation for logins.
     * @summary Edit a user
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editUser: (userId: string, body: any) => Promise<any>;
    /**
     * Merge a user into another user. To merge users, the caller must have permissions to manage both users. This should be considered irreversible. This will delete the user and move all the data into the destination user. When finding users by SIS ids in different accounts the destination_account_id is required. The account can also be identified by passing the domain in destination_account_id.
     * @summary Merge user into another user
     * @param {string} userId Canvas User ID
     * @param {string} destinationUserId Canvas Destination user ID
     * @returns {Promise<any>}
     */
    mergeUserIntoAnotherUserDestinationUserId: (userId: string, destinationUserId: string) => Promise<any>;
    /**
     * Merge a user into another user. To merge users, the caller must have permissions to manage both users. This should be considered irreversible. This will delete the user and move all the data into the destination user. When finding users by SIS ids in different accounts the destination_account_id is required. The account can also be identified by passing the domain in destination_account_id.
     * @summary Merge user into another user
     * @param {string} userId Canvas User ID
     * @param {string} destinationAccountId Canvas Destination account ID
     * @param {string} destinationUserId Canvas Destination user ID
     * @returns {Promise<any>}
     */
    mergeUserIntoAnotherUserAccounts: (userId: string, destinationAccountId: string, destinationUserId: string) => Promise<any>;
    /**
     * Merged users cannot be fully restored to their previous state, but this will attempt to split as much as possible to the previous state. To split a merged user, the caller must have permissions to manage all of the users logins. If there are multiple users that have been merged into one user it will split each merge into a separate user. A split can only happen within 180 days of a user merge. A user merge deletes the previous user and may be permanently deleted. In this scenario we create a new user object and proceed to move as much as possible to the new user. The user object will not have preserved the name or settings from the previous user. Some items may have been deleted during a user_merge that cannot be restored, and/or the data has become stale because of other changes to the objects since the time of the user_merge.
     * @summary Split merged users into separate users
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    splitMergedUsersIntoSeparateUsers: (userId: string) => Promise<any>;
    /**
     * Returns a jwt auth and props token that can be used to send events to Pandata. NOTE: This is currently only available to the mobile developer keys.
     * @summary Get a Pandata Events jwt token and its expiration date
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    getPandataEventsJwtTokenAndItsExpirationDate: (body: any) => Promise<any>;
    /**
     * Returns user profile data, including user id, name, and profile pic. When requesting the profile for the user accessing the API, the user's calendar feed URL and LTI user id will be returned as well.
     * @summary Get user profile
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    getUserProfile: (userId: string) => Promise<any>;
    /**
     * A paginated list of the possible user avatar options that can be set with the user update endpoint. The response will be an array of avatar records. If the 'type' field is 'attachment', the record will include all the normal attachment json fields; otherwise it will include only the 'url' and 'display_name' fields. Additionally, all records will include a 'type' field and a 'token' field. The following explains each field in more detail type:: ["gravatar"|"attachment"|"no_pic"] The type of avatar record, for categorization purposes. url:: The url of the avatar token:: A unique representation of the avatar record which can be used to set the avatar with the user update endpoint. Note: this is an internal representation and is subject to change without notice. It should be consumed with this api endpoint and used in the user update endpoint, and should not be constructed by the client. display_name:: A textual description of the avatar record id:: ['attachment' type only] the internal id of the attachment content-type:: ['attachment' type only] the content-type of the attachment filename:: ['attachment' type only] the filename of the attachment size:: ['attachment' type only] the size of the attachment
     * @summary List avatar options
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listAvatarOptions: (userId: string) => Promise<any>;
    /**
     * Return a paginated list of the user's page view history in json format, similar to the available CSV download. Page views are returned in descending order, newest to oldest.
     * @summary List user page views
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUserPageViews: (userId: string, query?: any) => Promise<any>;
    /**
     * Store arbitrary user data as JSON. Arbitrary JSON data can be stored for a User. A typical scenario would be an external site/service that registers users in Canvas and wants to capture additional info about them. The part of the URL that follows +/custom_data/+ defines the scope of the request, and it reflects the structure of the JSON data to be stored or retrieved. The value +self+ may be used for +user_id+ to store data associated with the calling user. In order to access another user's custom data, you must be an account administrator with permission to manage users. A namespace parameter, +ns+, is used to prevent custom_data collisions between different apps. This parameter is required for all custom_data requests. A request with Content-Type multipart/form-data or Content-Type application/x-www-form-urlencoded can only be used to store strings. Example PUT with multipart/form-data data:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/telephone' \   -X PUT \   -F 'ns=com.my-organization.canvas-app' \   -F 'data=555-1234' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": "555-1234"  } Subscopes (or, generated scopes) can also be specified by passing values to +data+[+subscope+]. Example PUT specifying subscopes:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements' \   -X PUT \   -F 'ns=com.my-organization.canvas-app' \   -F 'data[waist]=32in' \   -F 'data[inseam]=34in' \   -F 'data[chest]=40in' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": {    "chest": "40in",    "waist": "32in",    "inseam": "34in"   }  } Following such a request, subsets of the stored data to be retrieved directly from a subscope. Example {api:UsersController#get_custom_data GET} from a generated scope  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements/chest' \   -X GET \   -F 'ns=com.my-organization.canvas-app' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": "40in"  } If you want to store more than just strings (i.e. numbers, arrays, hashes, true, false, and/or null), you must make a request with Content-Type application/json as in the following example. Example PUT with JSON data:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \   -H 'Content-Type: application/json' \   -X PUT \   -d '{      "ns": "com.my-organization.canvas-app",      "data": {       "a-number": 6.02e23,       "a-bool": true,       "a-string": "true",       "a-hash": {"a": {"b": "ohai"}},       "an-array": [1, "two", null, false]      }     }' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": {    "a-number": 6.02e+23,    "a-bool": true,    "a-string": "true",    "a-hash": {     "a": {      "b": "ohai"     }    },    "an-array": [1, "two", null, false]   }  } If the data is an Object (as it is in the above example), then subsets of the data can be accessed by including the object's (possibly nested) keys in the scope of a GET request. Example {api:UsersController#get_custom_data GET} with a generated scope:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/a-hash/a/b' \   -X GET \   -F 'ns=com.my-organization.canvas-app' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": "ohai"  } On success, this endpoint returns an object containing the data that was stored. Responds with status code 200 if the scope already contained data, and it was overwritten by the data specified in the request. Responds with status code 201 if the scope was previously empty, and the data specified in the request was successfully stored there. Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid, or if the +data+ parameter is missing. Responds with status code 409 if the requested scope caused a conflict and data was not stored. This happens when storing data at the requested scope would cause data at an outer scope to be lost. e.g., if +/custom_data+ was +{"fashion_app": {"hair": "blonde"}}+, but you tried to +`PUT /custom_data/fashion_app/hair/style -F data=buzz`+, then for the request to succeed,the value of +/custom_data/fashion_app/hair+ would have to become a hash, and its old string value would be lost. In this situation, an error object is returned with the following format:  !!!javascript  {   "message": "write conflict for custom_data hash",   "conflict_scope": "fashion_app/hair",   "type_at_conflict": "String",   "value_at_conflict": "blonde"  }
     * @summary Store custom data
     * @param {string} userId Canvas User ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    storeCustomData: (userId: string, body: any, scope?: string) => Promise<any>;
    /**
     * Load custom user data. Arbitrary JSON data can be stored for a User. This API call retrieves that data for a (optional) given scope. See {api:UsersController#set_custom_data Store Custom Data} for details and examples. On success, this endpoint returns an object containing the data that was requested. Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid, or if the specified scope does not contain any data.
     * @summary Load custom data
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    loadCustomData: (userId: string, query: any, scope?: string) => Promise<any>;
    /**
     * Delete custom user data. Arbitrary JSON data can be stored for a User. This API call deletes that data for a given scope. Without a scope, all custom_data is deleted. See {api:UsersController#set_custom_data Store Custom Data} for details and examples of storage and retrieval. As an example, we'll store some data, then delete a subset of it. Example {api:UsersController#set_custom_data PUT} with valid JSON data:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \   -X PUT \   -F 'ns=com.my-organization.canvas-app' \   -F 'data[fruit][apple]=so tasty' \   -F 'data[fruit][kiwi]=a bit sour' \   -F 'data[veggies][root][onion]=tear-jerking' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": {    "fruit": {     "apple": "so tasty",     "kiwi": "a bit sour"    },    "veggies": {     "root": {      "onion": "tear-jerking"     }    }   }  } Example DELETE:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/fruit/kiwi' \   -X DELETE \   -F 'ns=com.my-organization.canvas-app' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": "a bit sour"  } Example {api:UsersController#get_custom_data GET} following the above DELETE:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \   -X GET \   -F 'ns=com.my-organization.canvas-app' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": {    "fruit": {     "apple": "so tasty"    },    "veggies": {     "root": {      "onion": "tear-jerking"     }    }   }  } Note that hashes left empty after a DELETE will get removed from the custom_data store. For example, following the previous commands, if we delete /custom_data/veggies/root/onion, then the entire /custom_data/veggies scope will be removed. Example DELETE that empties a parent scope:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/veggies/root/onion' \   -X DELETE \   -F 'ns=com.my-organization.canvas-app' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": "tear-jerking"  } Example {api:UsersController#get_custom_data GET} following the above DELETE:  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \   -X GET \   -F 'ns=com.my-organization.canvas-app' \   -H 'Authorization: Bearer <token>' Response:  !!!javascript  {   "data": {    "fruit": {     "apple": "so tasty"    }   }  } On success, this endpoint returns an object containing the data that was deleted. Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid, or if the specified scope does not contain any data.
     * @summary Delete custom data
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteCustomData: (userId: string, query: any, scope?: string) => Promise<any>;
    /**
     * Returns all course nicknames you have set.
     * @summary List course nicknames
     * @returns {Promise<any>}
     */
    listCourseNicknames: () => Promise<any>;
    /**
     * Returns the nickname for a specific course.
     * @summary Get course nickname
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getCourseNickname: (courseId: string) => Promise<any>;
    /**
     * Set a nickname for the given course. This will replace the course's name in output of API calls you make subsequently, as well as in selected places in the Canvas web user interface.
     * @summary Set course nickname
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setCourseNickname: (courseId: string, body: any) => Promise<any>;
    /**
     * Remove the nickname for the given course. Subsequent course API calls will return the actual name for the course.
     * @summary Remove course nickname
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    removeCourseNickname: (courseId: string) => Promise<any>;
    /**
     * Remove all stored course nicknames.
     * @summary Clear course nicknames
     * @returns {Promise<any>}
     */
    clearCourseNicknames: () => Promise<any>;
};
