export function listAssignmentGroups(courseId: string, query?: any): Promise<any>;
export function getAssignmentGroup(courseId: string, assignmentGroupId: string, query?: any): Promise<any>;
export function createAssignmentGroup(courseId: string, body: any): Promise<any>;
export function editAssignmentGroup(courseId: string, assignmentGroupId: string): Promise<any>;
export function destroyAssignmentGroup(courseId: string, assignmentGroupId: string, query?: any): Promise<any>;
