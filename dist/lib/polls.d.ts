export function listPolls(): Promise<any>;
export function getSinglePoll(pollId: string): Promise<any>;
export function createSinglePoll(body: any): Promise<any>;
export function updateSinglePoll(pollId: string, body: any): Promise<any>;
export function deletePoll(pollId: string): Promise<any>;
