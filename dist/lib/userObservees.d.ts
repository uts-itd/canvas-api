export function listObservees(userId: string, query?: any): Promise<any>;
export function addObserveeWithCredentials(userId: string, body: any): Promise<any>;
export function showObservee(userId: string, observeeId: string): Promise<any>;
export function addObservee(userId: string, observeeId: string, body: any): Promise<any>;
export function removeObservee(userId: string, observeeId: string, query?: any): Promise<any>;
