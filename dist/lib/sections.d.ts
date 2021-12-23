export function listCourseSections(courseId: string, query?: any): Promise<any>;
export function createCourseSection(courseId: string, body: any): Promise<any>;
export function crossListSection(sectionId: string, newCourseId: string): Promise<any>;
export function deCrossListSection(sectionId: string): Promise<any>;
export function editSection(sectionId: string, body: any): Promise<any>;
export function getSectionInformationCourses(courseId: string, sectionId: string, query?: any): Promise<any>;
export function getSectionInformationSections(sectionId: string, query?: any): Promise<any>;
export function deleteSection(sectionId: string): Promise<any>;
