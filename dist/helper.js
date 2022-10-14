"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHelper = void 0;
const undici_1 = require("undici");
const qs = __importStar(require("qs"));
const lodash_1 = require("lodash");
function getHelper(settings) {
    let requestQueue = [];
    let runningQueue = [];
    let cost = 700;
    let requestCost = 15;
    let timeout;
    async function requestAllPages(originalRequest, pagination, runner) {
        if (!pagination.last)
            return;
        const pages = [];
        for (let x = pagination.current.page + 1; x <= pagination.last.page; x++) {
            const newRequest = (0, lodash_1.cloneDeep)(originalRequest);
            newRequest.uri = new URL(pagination.last.link.replace(`page=${pagination.last.page}`, `page=${x}`));
            pages.push(newRequest);
        }
        try {
            const responseArray = await Promise.all(pages.map((x) => runner(x.uri, x.params, x.nesting, true)));
            if (originalRequest.nesting) {
                const nestingValue = originalRequest.nesting;
                return responseArray.flatMap((x) => x[nestingValue]);
            }
            else {
                return responseArray.flat(1);
            }
        }
        catch (error) {
            originalRequest.reject(error);
        }
    }
    let checkQueue = () => {
        if (cost <= 680)
            cost += 20;
        else
            cost = 700;
        if (requestQueue.length > 0) {
            manager();
        }
    };
    let manager = async () => {
        if (requestQueue.length == 0)
            return;
        if (cost < requestCost) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
            timeout = setTimeout(checkQueue, 2000);
            return;
        }
        timeout = undefined;
        cost -= requestCost;
        let currentRequest = requestQueue.shift();
        runningQueue.push(currentRequest);
        let rateLimitRemaining = 0;
        try {
            const responseAwait = (0, undici_1.fetch)(currentRequest.uri, currentRequest.params);
            if (requestQueue.length > 0)
                manager();
            const response = await responseAwait;
            runningQueue.splice(runningQueue.indexOf(currentRequest), 1);
            const responseBodyAwait = response.json();
            const pagination = getPagination(response.headers.get('link'), settings.maxPage, currentRequest.forcedPages, currentRequest.isForced);
            rateLimitRemaining = Number(response.headers.get('x-rate-limit-remaining') ?? 0);
            if (requestQueue.length > 0)
                manager();
            let responseBody = await responseBodyAwait;
            if (!pagination)
                return currentRequest.resolve(responseBody);
            if (currentRequest.nesting) {
                responseBody = responseBody[currentRequest.nesting];
            }
            switch (getPaginationType(pagination, !!currentRequest.data)) {
                case PaginationType.ALL:
                    const allPageData = await requestAllPages(currentRequest, pagination, sendRequest);
                    const finalData = mergeResponse(responseBody, allPageData, currentRequest.nesting);
                    currentRequest.resolve(finalData);
                    break;
                case PaginationType.PARTIAL_LAST_PAGE:
                    currentRequest.resolve(restoreNesting(currentRequest.data.concat(responseBody), currentRequest.nesting));
                    break;
                case PaginationType.PARTIAL:
                    if (!currentRequest.data)
                        currentRequest.data = [];
                    currentRequest.uri = new URL(pagination.next?.link ?? '');
                    currentRequest.data = currentRequest.data.concat(responseBody);
                    console.log('Canvas API: Fetching page ' + pagination.next?.page);
                    requestQueue.push(currentRequest);
                    break;
                case PaginationType.NONE:
                    currentRequest.resolve(restoreNesting(responseBody, currentRequest.nesting));
                    break;
            }
        }
        catch (error) {
            runningQueue.splice(runningQueue.indexOf(currentRequest), 1);
            currentRequest.reject(error);
        }
        finally {
            cost = rateLimitRemaining - requestCost * runningQueue.length;
            if (requestQueue.length > 0)
                manager();
        }
    };
    let sendRequest = (uri, params, nesting, isForced = false) => {
        return new Promise((resolve, reject) => {
            if (settings.forceLastPage > settings.maxPage)
                reject('Force last page is greater than max page');
            params.keepalive = true;
            params.credentials = 'include';
            params.headers = {
                Authorization: `Bearer ${settings.token}`,
            };
            requestQueue.push({
                uri,
                params,
                nesting,
                resolve,
                reject,
                forcedPages: settings.forceLastPage > 0 ? settings.forceLastPage : undefined,
                isForced,
            });
            manager();
        });
    };
    return {
        get: (endpoint, query, nesting) => {
            const url = new URL(`https://${settings.domain}/api${endpoint}`);
            url.search = qs.stringify({
                ...query,
                per_page: 100,
            }, { arrayFormat: 'brackets' });
            return sendRequest(url, {
                method: 'GET',
            }, nesting);
        },
        post: (endpoint, data) => {
            const url = new URL(`https://${settings.domain}/api${endpoint}`);
            return sendRequest(url, {
                method: 'POST',
                body: data,
            });
        },
        delete: (endpoint, data) => {
            const url = new URL(`https://${settings.domain}/api${endpoint}`);
            return sendRequest(url, {
                method: 'DELETE',
                body: data,
            });
        },
        put: (endpoint, data) => {
            const url = new URL(`https://${settings.domain}/api${endpoint}`);
            return sendRequest(url, {
                method: 'PUT',
                body: data,
            });
        },
        patch: (endpoint, data) => {
            const url = new URL(`https://${settings.domain}/api${endpoint}`);
            return sendRequest(url, {
                method: 'PATCH',
                body: data,
            });
        },
    };
}
exports.getHelper = getHelper;
function getPagination(header, maxPage, forcedPages, isForced = false) {
    if (!header)
        return null;
    let pagination = {};
    let links = header.split(',');
    links.forEach((link) => {
        let data = link.split('"');
        pagination[data[1]] = {
            page: Number(data[0].split('page=')[1].split('&')[0]),
            link: data[0].split('<')[1].split('>')[0],
        };
    });
    if (!pagination.last &&
        pagination.next &&
        forcedPages &&
        (pagination.current?.page ?? 0) < forcedPages) {
        const nextPage = pagination.next;
        if (isForced) {
            pagination.last = pagination.current;
            delete pagination.next;
            return pagination;
        }
        pagination.last = {
            link: nextPage.link.replace(`page=${nextPage.page}`, `page=${forcedPages}`),
            page: forcedPages,
        };
    }
    if (pagination.next && pagination.next.page >= maxPage && !pagination.last)
        pagination.last = {
            page: maxPage,
            link: '',
        };
    if (pagination.next && pagination.next.page > maxPage)
        pagination.next = undefined;
    if (pagination.last && pagination.last.page > maxPage)
        pagination.last.page = maxPage;
    return pagination;
}
function getPaginationType(pagination, hasData) {
    if (pagination.next && pagination.current.page === 1 && pagination.last && !hasData)
        return PaginationType.ALL;
    if (pagination.last && hasData && pagination.current.page >= pagination.last.page)
        return PaginationType.PARTIAL_LAST_PAGE;
    if (pagination.next)
        return PaginationType.PARTIAL;
    return PaginationType.NONE;
}
function mergeResponse(responseBody, allPageData, nesting) {
    return restoreNesting(responseBody.concat(allPageData), nesting);
}
function restoreNesting(responseBody, nesting) {
    if (nesting) {
        return {
            [nesting]: responseBody,
        };
    }
    return responseBody;
}
var PaginationType;
(function (PaginationType) {
    PaginationType[PaginationType["NONE"] = 0] = "NONE";
    PaginationType[PaginationType["ALL"] = 1] = "ALL";
    PaginationType[PaginationType["PARTIAL"] = 2] = "PARTIAL";
    PaginationType[PaginationType["PARTIAL_LAST_PAGE"] = 3] = "PARTIAL_LAST_PAGE";
})(PaginationType || (PaginationType = {}));
