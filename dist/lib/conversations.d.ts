export function listConversations(query?: any): Promise<any>;
export function createConversation(body: any): Promise<any>;
export function getRunningBatches(): Promise<any>;
export function getSingleConversation(conversationId: string, query?: any): Promise<any>;
export function editConversation(conversationId: string, body: any): Promise<any>;
export function markAllAsRead(): Promise<any>;
export function deleteConversation(conversationId: string): Promise<any>;
export function addRecipients(conversationId: string, body: any): Promise<any>;
export function addMessage(conversationId: string, body: any): Promise<any>;
export function deleteMessage(conversationId: string, body: any): Promise<any>;
export function batchUpdateConversations(body: any): Promise<any>;
export function findRecipients(): Promise<any>;
export function unreadCount(): Promise<any>;
