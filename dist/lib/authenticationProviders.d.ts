export function listAuthenticationProviders(accountId: string): Promise<any>;
export function addAuthenticationProvider(accountId: string): Promise<any>;
export function updateAuthenticationProvider(accountId: string, authenticationProviderId: string): Promise<any>;
export function getAuthenticationProvider(accountId: string, authenticationProviderId: string): Promise<any>;
export function deleteAuthenticationProvider(accountId: string, authenticationProviderId: string): Promise<any>;
export function showAccountAuthSettings(accountId: string): Promise<any>;
export function updateAccountAuthSettings(accountId: string): Promise<any>;
