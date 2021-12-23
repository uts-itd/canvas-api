export function listPollSessionsForPoll(pollId: string): Promise<any>;
export function getResultsForSinglePollSession(pollId: string, pollSessionId: string): Promise<any>;
export function createSinglePollSession(pollId: string, body: any): Promise<any>;
export function updateSinglePollSession(pollId: string, pollSessionId: string, body: any): Promise<any>;
export function deletePollSession(pollId: string, pollSessionId: string): Promise<any>;
export function openPollSession(pollId: string, pollSessionId: string): Promise<any>;
export function closeOpenedPollSession(pollId: string, pollSessionId: string): Promise<any>;
export function listOpenedPollSessions(): Promise<any>;
export function listClosedPollSessions(): Promise<any>;
