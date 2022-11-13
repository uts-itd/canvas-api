export class CurrentSettings {
  startingCost = 700;
  maxCost = 700;
  inititalRequestCost = 15;
  rechargeRate = 10;
  sentRequests = 0;
  domain = '';
  token = '';
  maxPage = 100;
  forceLastPage = 0;
  logging = false;

  constructor(...params: any[]) {
    if (params.length === 2) {
      this.domain = params[0];
      this.token = params[1];
    } else if (params.length === 1 && typeof params[0] === 'object') {
      if (!params[0].domain || !params[0].token) {
        throw new Error(`'domain' and 'token' are required`);
      }
      Object.assign(this, params[0]);
    } else {
      throw new Error('Invalid parameters');
    }
  }
}

export interface Settings {
  startingCost: number;
  maxCost: number;
  inititalRequestCost: number;
  rechargeRate: number;
  sentRequests: number;
  domain: string;
  token: string;
  maxPage: number;
  forceLastPage: number;
  logging: boolean;
}
