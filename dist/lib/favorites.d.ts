export function listFavoriteCourses(query?: any): Promise<any>;
export function listFavoriteGroups(): Promise<any>;
export function addCourseToFavorites(courseId: string): Promise<any>;
export function addGroupToFavorites(groupId: string): Promise<any>;
export function removeCourseFromFavorites(courseId: string): Promise<any>;
export function removeGroupFromFavorites(groupId: string): Promise<any>;
export function resetCourseFavorites(): Promise<any>;
export function resetGroupFavorites(): Promise<any>;
