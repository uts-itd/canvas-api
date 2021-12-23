export function listUserLoginsAccounts(accountId: string): Promise<any>;
export function listUserLoginsUsers(userId: string): Promise<any>;
export function createUserLogin(accountId: string, body: any): Promise<any>;
export function editUserLogin(accountId: string, loginId: string, body: any): Promise<any>;
export function deleteUserLogin(userId: string, loginId: string): Promise<any>;
