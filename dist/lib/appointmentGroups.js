var helper = require('../helper');
var appointmentGroups = {
    /**
     * Retrieve the paginated list of appointment groups that can be reserved or managed by the current user.
     * @summary List appointment groups
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listAppointmentGroups: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/appointment_groups", query);
    },
    /**
     * Create and return a new appointment group. If new_appointments are specified, the response will return a new_appointments array (same format as appointments array, see "List appointment groups" action)
     * @summary Create an appointment group
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createAppointmentGroup: function (body) { return helper.post("/v1/appointment_groups", body); },
    /**
     * Returns information for a single appointment group
     * @summary Get a single appointment group
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleAppointmentGroup: function (appointmentGroupId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/appointment_groups/" + appointmentGroupId, query);
    },
    /**
     * Update and return an appointment group. If new_appointments are specified, the response will return a new_appointments array (same format as appointments array, see "List appointment groups" action).
     * @summary Update an appointment group
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    updateAppointmentGroup: function (appointmentGroupId, body) { return helper.put("/v1/appointment_groups/" + appointmentGroupId, body); },
    /**
     * Delete an appointment group (and associated time slots and reservations) and return the deleted group
     * @summary Delete an appointment group
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    deleteAppointmentGroup: function (appointmentGroupId, query) {
        if (query === void 0) { query = ''; }
        return helper.delete("/v1/appointment_groups/" + appointmentGroupId, query);
    },
    /**
     * A paginated list of users that are (or may be) participating in this appointment group. Refer to the Users API for the response fields. Returns no results for appointment groups with the "Group" participant_type.
     * @summary List user participants
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listUserParticipants: function (appointmentGroupId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/appointment_groups/" + appointmentGroupId + "/users", query);
    },
    /**
     * A paginated list of student groups that are (or may be) participating in this appointment group. Refer to the Groups API for the response fields. Returns no results for appointment groups with the "User" participant_type.
     * @summary List student group participants
     * @param {string} appointmentGroupId Canvas Appointment group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listStudentGroupParticipants: function (appointmentGroupId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/appointment_groups/" + appointmentGroupId + "/groups", query);
    },
    /**
     * Return the next appointment available to sign up for. The appointment is returned in a one-element array. If no future appointments are available, an empty array is returned.
     * @summary Get next appointment
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getNextAppointment: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/appointment_groups/next_appointment", query);
    },
};
module.exports = appointmentGroups;
//# sourceMappingURL=appointmentGroups.js.map