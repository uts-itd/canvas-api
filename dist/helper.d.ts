import { Settings } from './settings';
export declare function getHelper(settings: Settings): Helper;
export interface Helper {
    get: (endpoint: string, query?: any, nesting?: string) => Promise<any>;
    post: (endpoint: string, data?: any) => Promise<any>;
    delete: (endpoint: string, data?: any) => Promise<any>;
    put: (endpoint: string, data?: any) => Promise<any>;
    patch: (endpoint: string, data?: any) => Promise<void>;
}
