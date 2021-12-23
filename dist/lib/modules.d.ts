export function listModules(courseId: string, query?: any): Promise<any>;
export function showModule(courseId: string, moduleId: string, query?: any): Promise<any>;
export function createModule(courseId: string, body: any): Promise<any>;
export function updateModule(courseId: string, moduleId: string, body: any): Promise<any>;
export function deleteModule(courseId: string, moduleId: string): Promise<any>;
export function reLockModuleProgressions(courseId: string, moduleId: string): Promise<any>;
export function listModuleItems(courseId: string, moduleId: string, query?: any): Promise<any>;
export function showModuleItem(courseId: string, moduleId: string, itemId: string, query?: any): Promise<any>;
export function createModuleItem(courseId: string, moduleId: string, body: any): Promise<any>;
export function updateModuleItem(courseId: string, moduleId: string, itemId: string, body: any): Promise<any>;
export function selectMasteryPath(courseId: string, moduleId: string, itemId: string, body: any): Promise<any>;
export function deleteModuleItem(courseId: string, moduleId: string, itemId: string): Promise<any>;
export function markModuleItemAsDoneNotDone(courseId: string, moduleId: string, itemId: string): Promise<any>;
export function getModuleItemSequence(courseId: string, query?: any): Promise<any>;
export function markModuleItemRead(courseId: string, moduleId: string, itemId: string): Promise<any>;