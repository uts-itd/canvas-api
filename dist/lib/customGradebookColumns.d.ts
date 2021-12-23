export function listCustomGradebookColumns(courseId: string, query?: any): Promise<any>;
export function createCustomGradebookColumn(courseId: string, body: any): Promise<any>;
export function updateCustomGradebookColumn(courseId: string, customGradebookColumnId: string): Promise<any>;
export function deleteCustomGradebookColumn(courseId: string, customGradebookColumnId: string): Promise<any>;
export function reorderCustomColumns(courseId: string, body: any): Promise<any>;
export function listEntriesForColumn(courseId: string, customGradebookColumnId: string, query?: any): Promise<any>;
export function updateColumnData(courseId: string, customGradebookColumnId: string, userId: string, body: any): Promise<any>;
