import { CurrentSettings, Settings } from '../src/settings';

const defaults: Settings = {
  startingCost: 700,
  maxCost: 700,
  inititalRequestCost: 15,
  rechargeRate: 10,
  sentRequests: 0,
  domain: 'test.domain.com',
  token: 'fake-token',
  maxPage: 100,
  forceLastPage: 0,
  logging: false,
};

describe('Settings', () => {
  it('accepts domain and token', () => {
    const result = new CurrentSettings('test.domain.com', 'fake-token');
    expect(result).toEqual(defaults);
  });

  it('accepts object with only domain and token', () => {
    const result = new CurrentSettings({
      domain: 'test.domain.com',
      token: 'fake-token',
    });
    expect(result).toEqual(defaults);
  });

  it('accepts object with all settings', () => {
    const result = new CurrentSettings({
      startingCost: 700,
      maxCost: 700,
      inititalRequestCost: 15,
      rechargeRate: 10,
      sentRequests: 0,
      domain: 'test.domain.com',
      token: 'fake-token',
      maxPage: 100,
      forceLastPage: 0,
      logging: false,
    });
    expect(result).toEqual(defaults);
  });

  it('throws error if nothing is provided', () => {
    expect(() => new CurrentSettings()).toThrowError();
  });

  it('throws error if only domain is provided', () => {
    expect(
      () =>
        new CurrentSettings({
          domain: 'test.domain.com',
        }),
    ).toThrowError();
  });

  it('throws error if only token is provided', () => {
    expect(
      () =>
        new CurrentSettings({
          token: 'fake-token',
        }),
    ).toThrowError();
  });
});
