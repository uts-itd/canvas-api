export function listPollChoicesInPoll(pollId: string): Promise<any>;
export function getSinglePollChoice(pollId: string, pollChoiceId: string): Promise<any>;
export function createSinglePollChoice(pollId: string, body: any): Promise<any>;
export function updateSinglePollChoice(pollId: string, pollChoiceId: string, body: any): Promise<any>;
export function deletePollChoice(pollId: string, pollChoiceId: string): Promise<any>;
