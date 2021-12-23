export function listRoles(accountId: string, query?: any): Promise<any>;
export function getSingleRole(roleId: string, accountId: string, query: any): Promise<any>;
export function createNewRole(accountId: string, body: any): Promise<any>;
export function deactivateRole(accountId: string, roleId: string, query: any): Promise<any>;
export function activateRole(accountId: string, roleId: string, body: any): Promise<any>;
export function updateRole(accountId: string, roleId: string, body: any): Promise<any>;
