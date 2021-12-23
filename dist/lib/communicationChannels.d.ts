export function listUserCommunicationChannels(userId: string): Promise<any>;
export function createCommunicationChannel(userId: string, body: any): Promise<any>;
export function deleteCommunicationChannelId(userId: string, communicationChannelId: string): Promise<any>;
export function deleteCommunicationChannelType(userId: string, type: string, address: string): Promise<any>;
export function deletePushNotificationEndpoint(): Promise<{
    success: true;
}>;
