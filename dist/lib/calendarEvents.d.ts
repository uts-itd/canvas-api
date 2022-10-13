declare function _exports(helper: any): {
    /**
     * Retrieve the paginated list of calendar events or assignments for the current user
     * @summary List calendar events
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCalendarEvents: (query?: any) => Promise<any>;
    /**
     * Retrieve the paginated list of calendar events or assignments for the specified user. To view calendar events for a user other than yourself, you must either be an observer of that user or an administrator.
     * @summary List calendar events for a user
     * @param {string} userId Canvas User ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCalendarEventsForUser: (userId: string, query?: any) => Promise<any>;
    /**
     * Create and return a new calendar event
     * @summary Create a calendar event
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCalendarEvent: (body: any) => Promise<any>;
    /**
     *
     * @summary Get a single calendar event or assignment
     * @param {string} calendarEventId Canvas Calendar event ID
     * @returns {Promise<any>}
     */
    getSingleCalendarEventOrAssignment: (calendarEventId: string) => Promise<any>;
    /**
     * Reserves a particular time slot and return the new reservation
     * @summary Reserve a time slot
     * @param {string} calendarEventId Canvas Calendar event ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reserveTimeSlot: (calendarEventId: string, body: any) => Promise<any>;
    /**
     * Reserves a particular time slot and return the new reservation
     * @summary Reserve a time slot
     * @param {string} calendarEventId Canvas Calendar event ID
     * @param {string} participantId Canvas Participant ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    reserveTimeSlotParticipantId: (calendarEventId: string, participantId: string, body: any) => Promise<any>;
    /**
     * Update and return a calendar event
     * @summary Update a calendar event
     * @param {string} calendarEventId Canvas Calendar event ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateCalendarEvent: (calendarEventId: string, body: any) => Promise<any>;
    /**
     * Delete an event from the calendar and return the deleted event
     * @summary Delete a calendar event
     * @param {string} calendarEventId Canvas Calendar event ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteCalendarEvent: (calendarEventId: string, query?: any) => Promise<any>;
    /**
     * Creates and updates "timetable" events for a course. Can automaticaly generate a series of calendar events based on simple schedules (e.g. "Monday and Wednesday at 2:00pm" ) Existing timetable events for the course and course sections will be updated if they still are part of the timetable. Otherwise, they will be deleted.
     * @summary Set a course timetable
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setCourseTimetable: (courseId: string, body: any) => Promise<any>;
    /**
     * Returns the last timetable set by the {api:CalendarEventsApiController#set_course_timetable Set a course timetable} endpoint
     * @summary Get course timetable
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    getCourseTimetable: (courseId: string) => Promise<any>;
    /**
     * Creates and updates "timetable" events for a course or course section. Similar to {api:CalendarEventsApiController#set_course_timetable setting a course timetable}, but instead of generating a list of events based on a timetable schedule, this endpoint expects a complete list of events.
     * @summary Create or update events directly for a course timetable
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createOrUpdateEventsDirectlyForCourseTimetable: (courseId: string, body: any) => Promise<any>;
};
export = _exports;
