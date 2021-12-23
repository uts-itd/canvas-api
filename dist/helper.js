var settings = require('./settings');
var request = require('request-promise-native');
var requestQueue = [], runningQueue = [];
var cost = 700, requestCost = 15;
var timeout;
var getPagination = function (header) {
    if (!header)
        return {};
    var pagination = {};
    var links = header.split(',');
    links.forEach(function (link) {
        var data = link.split('"');
        pagination[data[1]] = {
            page: Number(data[0].split('page=')[1].split('&')[0]),
            link: data[0].split('<')[1].split('>')[0],
        };
    });
    if (pagination.next && pagination.next.page >= settings.maxPage && !pagination.last)
        pagination.last = {
            page: settings.maxPage
        };
    if (pagination.next && pagination.next.page > settings.maxPage)
        pagination.next = null;
    if (pagination.last && pagination.last.page > settings.maxPage)
        pagination.last.page = settings.maxPage;
    return pagination;
};
var checkQueue = function () {
    if (cost <= 680)
        cost += 20;
    else
        cost = 700;
    if (requestQueue.length > 0) {
        manager();
    }
};
var manager = function () {
    if (cost < requestCost) {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(checkQueue, 2000);
    }
    else {
        cost -= requestCost;
        var next_1 = requestQueue.shift();
        runningQueue.push(next_1);
        request(next_1.params).then(function (response) {
            runningQueue.splice(runningQueue.indexOf(next_1), 1);
            try {
                response.body = JSON.parse(response.body);
            }
            catch (e) { }
            cost = Number(response.headers['x-rate-limit-remaining']) - requestCost * runningQueue.length;
            var pagination = getPagination(response.headers.link);
            if (pagination.next && pagination.current.page === 1 && pagination.last) {
                var pages = [];
                var baseUri = next_1.params.uri;
                for (var x = 2; x <= pagination.last.page; x++) {
                    next_1.params.uri = baseUri + '&page=' + x;
                    pages.push(sendRequest(Object.assign({}, next_1.params)));
                }
                Promise.all(pages).then(function (dataArray) {
                    var _a, _b;
                    if (next_1.nesting) {
                        response.body[next_1.nesting] = (_a = response.body[next_1.nesting]).concat.apply(_a, dataArray.map(function (x) { return x[next_1.nesting]; }));
                    }
                    else
                        response.body = (_b = response.body).concat.apply(_b, dataArray);
                    next_1.resolve(response.body);
                }).catch(function (error) {
                    next_1.reject(error);
                });
            }
            else if (pagination.next && !pagination.last) {
                if (!next_1.data)
                    next_1.data = [];
                next_1.params.uri = pagination.next.link;
                next_1.data = response.body.concat(next_1.data);
                console.info("[Canvas API] Pagination: Fetching page " + pagination.next.page + " of unkown");
                requestQueue.push(next_1);
            }
            else if (pagination.last && next_1.data) {
                response.body = response.body.concat(next_1.data);
            }
            if (requestQueue.length > 0)
                manager();
            if (!pagination.next || (pagination.current.page !== 1 && pagination.last))
                next_1.resolve(response.body);
        }).catch(function (err) {
            if (err.name === 'StatusCodeError') {
                var errMessage = {
                    code: err.statusCode
                };
                switch (err.statusCode) {
                    case 401:
                        errMessage.message = "Authorization error: " + JSON.parse(err.response.body).errors[0].message;
                        return next_1.reject(errMessage);
                    case 404:
                        errMessage.message = "Invalid url: " + JSON.parse(err.response.body).errors[0].message;
                        return next_1.reject(errMessage);
                    case 403:
                        requestQueue.push(next_1);
                        if (timeout)
                            clearTimeout(timeout);
                        timeout = setTimeout(checkQueue, 2000);
                        cost = 0;
                        return;
                }
            }
            next_1.reject(err);
        });
    }
};
var sendRequest = function (params, nesting) {
    if (nesting === void 0) { nesting = null; }
    return new Promise(function (resolve, reject) {
        // params.proxy = 'http://127.0.0.1:8888';
        params.forever = true;
        requestQueue.push({
            params: params,
            nesting: nesting,
            resolve: resolve,
            reject: reject
        });
        manager();
    });
};
var requests = {
    get: function (endpoint, query, nesting) {
        if (query === void 0) { query = null; }
        if (nesting === void 0) { nesting = null; }
        return sendRequest({
            uri: "https://" + settings.domain + "/api" + endpoint + "?per_page=100",
            method: 'GET',
            qs: query,
            qsStringifyOptions: {
                arrayFormat: 'brackets'
            },
            headers: {
                'Authorization': "Bearer " + settings.token
            },
            resolveWithFullResponse: true
        }, nesting);
    },
    post: function (endpoint, data) {
        return sendRequest({
            uri: "https://" + settings.domain + "/api" + endpoint,
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + settings.token
            },
            json: data,
            resolveWithFullResponse: true
        });
    },
    delete: function (endpoint, data) {
        return sendRequest({
            uri: "https://" + settings.domain + "/api" + endpoint,
            method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + settings.token
            },
            json: data,
            resolveWithFullResponse: true
        });
    },
    put: function (endpoint, data) {
        return sendRequest({
            uri: "https://" + settings.domain + "/api" + endpoint,
            method: 'PUT',
            headers: {
                'Authorization': "Bearer " + settings.token
            },
            json: data,
            resolveWithFullResponse: true
        });
    }
};
module.exports = requests;
