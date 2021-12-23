export function createOriginalityReport(assignmentId: string, submissionId: string, body: any): Promise<any>;
export function editOriginalityReportSubmissions(assignmentId: string, submissionId: string, originalityReporId: string, body: any): Promise<any>;
export function editOriginalityReportFiles(assignmentId: string, fileId: string, body: any): Promise<any>;
export function showOriginalityReportSubmissions(assignmentId: string, submissionId: string, originalityReporId: string): Promise<any>;
export function showOriginalityReportFiles(assignmentId: string, fileId: string): Promise<any>;
