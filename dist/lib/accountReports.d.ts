export function listAvailableReports(accountId: string): Promise<any>;
export function startReport(accountId: string, report: string, body: any): Promise<any>;
export function indexOfReports(accountId: string, report: string): Promise<any>;
export function statusOfReport(accountId: string, report: string, reportId: string): Promise<any>;
export function deleteReport(accountId: string, report: string, reportId: string): Promise<any>;
