export = requests;
declare let requests: {
    get: (endpoint: any, query?: any) => any;
    post: (endpoint: any, data: any) => any;
    delete: (endpoint: any, data: any) => any;
    put: (endpoint: any, data: any) => any;
};
