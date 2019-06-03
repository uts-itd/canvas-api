const settings = require('./settings');
const request = require('request-promise-native');

let requestQueue = [], runningQueue = [];
let cost = 700, requestCost = 15;
let timeout;

let getPagination = (header) => {
    if (!header) return {};
    let pagination = {};
    let links = header.split(',');
    links.forEach(link => {
        let data = link.split('"');
        pagination[data[1]] = {
            page: Number(data[0].split('page=')[1].split('&')[0]),
            link: data[0].split('<')[1].split('>')[0],
        }
    });
    return pagination;
}

let checkQueue = () => {
    if (cost <= 680) cost += 20;
    else cost = 700;
    if (requestQueue.length > 0) {
        manager();
    }
}

let manager = () => {
    if (cost < requestCost) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(checkQueue, 2000);
    } else {
        cost -= requestCost;
        let next = requestQueue.shift();
        runningQueue.push(next);
        request(next.params).then((response) => {
            runningQueue.splice(runningQueue.indexOf(next), 1);
            let err = { code: response.statusCode }
            switch (response.statusCode) {
                case 401:
                    err.message = 'Authorization error: ' + JSON.stringify(response.body);
                    return next.reject(err);
                case 404:
                    err.message =`Invalid url: ${next.params.uri}`;
                    return next.reject(err);
                case 403:
                    requestQueue.push(next);
                    if (timeout) clearTimeout(timeout);
                    timeout = setTimeout(checkQueue, 2000);
                    cost = 0;
                    return;
            }
            try {
                response.body = JSON.parse(response.body);
            } catch (e) {};
            cost = Number(response.headers['x-rate-limit-remaining']) - requestCost*runningQueue.length;
            let pagination = getPagination(response.headers['link']);
            if (!next.data) next.data = [];
            if (pagination.next) {
                next.params.uri = pagination.next.link;
                next.data = response.body.concat(next.data);
                console.log(`[Canvas API] Pagination: Fetching page ${pagination.next.page} of ${pagination.last.page}`);
                requestQueue.push(next);
            } else if (pagination.last) {
                response.body = response.body.concat(next.data)
            }
            if (requestQueue.length > 0) manager();
            if (!pagination.next) next.resolve(response.body);
        }).catch((err) => { next.reject(err) });
    }
}

let sendRequest = (params) => {
    return new Promise((resolve, reject) => {
        requestQueue.push({params, resolve, reject});
        manager();
    });
}

let requests = {
    get: (endpoint, query=null) => {
        return sendRequest({
            uri: `https://${settings.domain}/api${endpoint}?per_page=100`,
            method: 'GET',
            qs: query,
            qsStringifyOptions: { arrayFormat: 'brackets' },
            headers: { 'Authorization': `Bearer ${settings.token}` },
            resolveWithFullResponse: true
        });
    },
    post: (endpoint, data) => {    
        return sendRequest({
            uri: `https://${settings.domain}/api${endpoint}`,
            method: 'POST',
            headers: { 'Authorization': `Bearer ${settings.token}` },
            json: data,
            resolveWithFullResponse: true
        });
    },
    delete: (endpoint, data) => {
        return sendRequest({
            uri: `https://${settings.domain}/api${endpoint}`,
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${settings.token}` },
            json: data,
            resolveWithFullResponse: true
        });
    },
    put: (endpoint, data) => {
        return sendRequest({
            uri: `https://${settings.domain}/api${endpoint}`,
            method: 'PUT',
            headers: { 'Authorization': `Bearer ${settings.token}` },
            json: data,
            resolveWithFullResponse: true
        });
    }
}

module.exports = requests;