declare function _exports(settings: any): {
    get: (endpoint: any, query?: any, nesting?: any) => Promise<any>;
    post: (endpoint: any, data: any) => Promise<any>;
    delete: (endpoint: any, data: any) => Promise<any>;
    put: (endpoint: any, data: any) => Promise<any>;
};
export = _exports;
