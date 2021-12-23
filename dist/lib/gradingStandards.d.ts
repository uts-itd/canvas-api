export function createNewGradingStandardAccounts(accountId: string, body: any): Promise<any>;
export function createNewGradingStandardCourses(courseId: string, body: any): Promise<any>;
export function listGradingStandardsAvailableInContextCourses(courseId: string): Promise<any>;
export function listGradingStandardsAvailableInContextAccounts(accountId: string): Promise<any>;
export function getSingleGradingStandardInContextCourses(courseId: string, gradingStandardId: string): Promise<any>;
export function getSingleGradingStandardInContextAccounts(accountId: string, gradingStandardId: string): Promise<any>;
