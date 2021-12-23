export function listGradingPeriodsAccounts(accountId: string): Promise<any>;
export function listGradingPeriodsCourses(courseId: string): Promise<any>;
export function getSingleGradingPeriod(courseId: string, gradingPeriodId: string): Promise<any>;
export function updateSingleGradingPeriod(courseId: string, gradingPeriodId: string, body: any): Promise<any>;
export function deleteGradingPeriodCourses(courseId: string, gradingPeriodId: string): Promise<any>;
export function deleteGradingPeriodAccounts(accountId: string, gradingPeriodId: string): Promise<any>;
