export = appointmentGroups;
declare let appointmentGroups: {
    /**
     * Retrieve the paginated list of appointment groups that can be reserved or managed by the current user.
     * @summary List appointment groups
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAppointmentGroups: (query?: any) => Promise<any>;
    /**
     * Create and return a new appointment group. If new_appointments are specified, the response will return a new_appointments array (same format as appointments array, see "List appointment groups" action)
     * @summary Create an appointment group
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createAppointmentGroup: (body: any) => Promise<any>;
    /**
     * Returns information for a single appointment group
     * @summary Get a single appointment group
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleAppointmentGroup: (appointmentGroupId: string, query?: any) => Promise<any>;
    /**
     * Update and return an appointment group. If new_appointments are specified, the response will return a new_appointments array (same format as appointments array, see "List appointment groups" action).
     * @summary Update an appointment group
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateAppointmentGroup: (appointmentGroupId: string, body: any) => Promise<any>;
    /**
     * Delete an appointment group (and associated time slots and reservations) and return the deleted group
     * @summary Delete an appointment group
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteAppointmentGroup: (appointmentGroupId: string, query?: any) => Promise<any>;
    /**
     * A paginated list of users that are (or may be) participating in this appointment group. Refer to the Users API for the response fields. Returns no results for appointment groups with the "Group" participant_type.
     * @summary List user participants
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUserParticipants: (appointmentGroupId: string, query?: any) => Promise<any>;
    /**
     * A paginated list of student groups that are (or may be) participating in this appointment group. Refer to the Groups API for the response fields. Returns no results for appointment groups with the "User" participant_type.
     * @summary List student group participants
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listStudentGroupParticipants: (appointmentGroupId: string, query?: any) => Promise<any>;
    /**
     * Return the next appointment available to sign up for. The appointment is returned in a one-element array. If no future appointments are available, an empty array is returned.
     * @summary Get next appointment
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getNextAppointment: (query?: any) => Promise<any>;
};