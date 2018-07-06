const settings = require('./settings');
const tiny = require('tiny-json-http');

let cost = 700;
let requestCost = 15
let callQueue = [];
let timeout;
let returnedCost;
let accountedRequests = 0;

let checkQueue = () => {
    if (callQueue.length > 0) {
        let next = callQueue.shift();
        queManager(...next);
    }
}

let queManager = (target, thisArg, args, resolve, reject) => {
    if (cost < requestCost) {
        callQueue.push([target, thisArg, args, resolve, reject]);
        console.log('Queue size: ' + callQueue.length);
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(checkQueue, 2000);
    } else {
        cost -= requestCost;
        settings.sentRequests++;
        if (cost >= requestCost && callQueue.length > 0) {
            let next = callQueue.shift();
            console.log('Queue size: ' + callQueue.length);
            queManager(...next);
        }
        target(...args, function(err, result) {
            if (err) {
                let code = err.message.substr(err.message.length - 3);
                if (!isNaN(code)) err.code = Number(code);
                switch (err.code) {
                    case 401:
                        err.message = 'Authorization error please check token';
                        break;
                    case 404:
                        err.message =`Invalid url: https://${settings.domain}/api/v1/${args[0]}?per_page=${settings._perPage}`;
                        break;
                    default:
                        break;
                }
                return reject(err);
            }
            returnedCost = Number(result.headers['x-rate-limit-remaining']);
            if (this.sentRequests > accountedRequests) {
                accountedRequests = this.sentRequests;
                cost = returnedCost - requestCost*(settings.sentRequests - accountedRequests);
            }
            settings.totalCost += Number(result.headers['x-request-cost']);
            if (callQueue.length > 0) {
                let next = callQueue.shift();
                console.log('Queue size: ' + callQueue.length);
                queManager(...next);
            }
            resolve(result);
        }.bind({ sentRequests: settings.sentRequests }));
    }
}

let proxy = obj => {
    return new Proxy(obj , {
        get(target, key) {
            if (target[key] !== undefined){
                return proxy(target[key]);
            }
        },
        apply: (target, thisArg, args) => {
            return new Promise((resolve, reject) => {
                queManager(target, thisArg, args, resolve, reject);
            });
        }
    });
}

let helper = proxy({
    get: (endpoint, callback) => {
        tiny.get({
            url: `https://${settings.domain}/api/v1/${endpoint}?per_page=${settings._perPage}`,
            headers: { 'Authorization': `Bearer ${settings.token}` },
        }, callback);
    },
    post: (endpoint, data, callback) => {    
        tiny.post({
            url: `https://${settings.domain}/api/v1/${endpoint}?per_page=${settings._perPage}`,
            headers: { 'Authorization': `Bearer ${settings.token}` },
        }, callback);
    },
});

module.exports = helper;