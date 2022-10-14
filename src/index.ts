import { getDefaultSettings, Settings } from './settings';
import { getHelper } from './helper';
import { getRoutes, Routes } from './lib/routes';

export function Canvas(domain: string, token: string): Canvas {
  const settings = getDefaultSettings(domain, token);

  const canvas = getRoutes(getHelper(settings));

  return {
    ...canvas,
    settings: settings,
  };
}

declare type Canvas = {
  settings: Settings
} & Routes