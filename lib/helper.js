const settings = require('./settings');
const request = require('request');
const { promisify } = require('util');

let requestProm = promisify(request);
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
        requestProm(next.params).then(response => {
            let item = runningQueue.splice(runningQueue.indexOf(next), 1)[0];
            switch (response.statusCode) {
                case 401:
                    err = 'Authorization error please check token';
                    return reject(err);
                case 404:
                    err =`Invalid url: https://${settings.domain}/api/v1/${args[0]}`;
                    return reject(err);
            }
            response.body = JSON.parse(response.body);
            cost = Number(response.headers['x-rate-limit-remaining']); - requestCost*runningQueue.length;
            let pagination = getPagination(response.headers['link']);
            if (!next.data) next.data = [];
            if (pagination.next) {
                next.params.uri = pagination.next.link;
                next.data = response.body.concat(next.data);
                requestQueue.push(next);
            } else if (pagination.last) {
                response.body = response.body.concat(next.data)
            }
            if (requestQueue.length > 0) manager();
            if (!pagination.next) next.resolve(response);
        }).catch(next.reject)
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
            uri: `https://${settings.domain}/api/v1/${endpoint}?per_page=100`,
            method: 'GET',
            qs: query,
            headers: { 'Authorization': `Bearer ${settings.token}` },
        });
    },
    post: (endpoint, data) => {    
        return sendRequest({
            uri: `https://${settings.domain}/api/v1/${endpoint}`,
            method: 'POST',
            headers: { 'Authorization': `Bearer ${settings.token}` },
            form: data,
        }, callback);
    },
    delete: (endpoint) => {
        return sendRequest({
            uri: `https://${settings.domain}/api/v1/${endpoint}`,
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${settings.token}` },
        }, callback);
    },
    put: (endpoint, data) => {
        return sendRequest({
            uri: `https://${settings.domain}/api/v1/${endpoint}`,
            method: 'PUT',
            headers: { 'Authorization': `Bearer ${settings.token}` },
            form: data,
        }, callback);
    }
}

module.exports = requests;