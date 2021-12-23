export function listAppointmentGroups(query?: any): Promise<any>;
export function createAppointmentGroup(body: any): Promise<any>;
export function getSingleAppointmentGroup(appointmentGroupId: string, query?: any): Promise<any>;
export function updateAppointmentGroup(appointmentGroupId: string, body: any): Promise<any>;
export function deleteAppointmentGroup(appointmentGroupId: string, query?: any): Promise<any>;
export function listUserParticipants(appointmentGroupId: string, query?: any): Promise<any>;
export function listStudentGroupParticipants(appointmentGroupId: string, query?: any): Promise<any>;
export function getNextAppointment(query?: any): Promise<any>;
