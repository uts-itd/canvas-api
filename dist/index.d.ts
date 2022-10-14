import { Settings } from './settings';
import { Routes } from './lib/routes';
export declare function Canvas(domain: string, token: string): Canvas;
declare type Canvas = {
    settings: Settings;
} & Routes;
export {};
