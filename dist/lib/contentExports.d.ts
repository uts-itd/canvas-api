export function listContentExportsCourses(courseId: string): Promise<any>;
export function listContentExportsGroups(groupId: string): Promise<any>;
export function listContentExportsUsers(userId: string): Promise<any>;
export function showContentExportCourses(courseId: string, contentExportId: string): Promise<any>;
export function showContentExportGroups(groupId: string, contentExportId: string): Promise<any>;
export function showContentExportUsers(userId: string, contentExportId: string): Promise<any>;
export function exportContentCourses(courseId: string, body: any): Promise<any>;
export function exportContentGroups(groupId: string, body: any): Promise<any>;
export function exportContentUsers(userId: string, body: any): Promise<any>;
