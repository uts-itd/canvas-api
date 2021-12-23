export function indexOfActiveGlobalNotificationForUser(accountId: string): Promise<any>;
export function showGlobalNotification(accountId: string, accountNotificationId: string): Promise<any>;
export function closeNotificationForUser(accountId: string, accountNotificationId: string): Promise<any>;
export function createGlobalNotification(accountId: string, body: any): Promise<any>;
export function updateGlobalNotification(accountId: string, accountNotificationId: string, body: any): Promise<any>;
