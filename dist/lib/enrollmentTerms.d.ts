export function createEnrollmentTerm(accountId: string, body: any): Promise<any>;
export function updateEnrollmentTerm(accountId: string, termId: string, body: any): Promise<any>;
export function deleteEnrollmentTerm(accountId: string, termId: string): Promise<any>;
export function listEnrollmentTerms(accountId: string, query?: any): Promise<any>;
