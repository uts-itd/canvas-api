import { CurrentSettings, Settings } from './settings';
import { getRunner } from './runner';
import helper from './helper';
import { getRoutes, Routes } from './lib/routes';

export function Canvas(domain: string, token: string): CanvasApi;
export function Canvas(settings: Partial<Settings> & Pick<Settings, 'domain' | 'token'>): CanvasApi;
export function Canvas(...params: any[]): CanvasApi {
  let settings = new CurrentSettings(...params);
  const canvas = getRoutes(getRunner(settings));

  return {
    ...canvas,
    settings: settings,
    helper,
  };
}

export declare type CanvasApi = {
  settings: CurrentSettings;
  helper: typeof helper;
} & Routes;
