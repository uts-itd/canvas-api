export function getSisImportList(accountId: string, query?: any): Promise<any>;
export function importSisData(accountId: string, body: any): Promise<any>;
export function getSisImportStatus(accountId: string, sisImportId: string): Promise<any>;
export function restoreWorkflowStatesOfSisImportedItems(accountId: string, sisImportId: string, body: any): Promise<any>;
export function abortSisImport(accountId: string, sisImportId: string): Promise<any>;
export function abortAllPendingSisImports(accountId: string): Promise<any>;
