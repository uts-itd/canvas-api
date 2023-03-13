import { request } from 'undici';
import Dispatcher from 'undici/types/dispatcher';
import qs from 'qs';
import { Settings } from './settings';
import { cloneDeep } from 'lodash';

export function getRunner(settings: Settings): Runner {
  const requestQueue: Request[] = [];
  const runningQueue: Request[] = [];
  let currentCost = settings.startingCost;
  let timeout: NodeJS.Timeout | undefined;
  let costLastRechargedTime = Date.now();

  async function requestAllPages(
    originalRequest: Request,
    pagination: Pagination,
    runner: (
      uri: URL,
      params: RequestOptions,
      nesting?: string,
      isForced?: boolean,
      isPriority?: boolean,
    ) => Promise<any>,
  ): Promise<any> {
    if (!pagination.last) return;

    const pages = [];
    for (let x = pagination.current.page + 1; x <= pagination.last.page; x++) {
      const newRequest = cloneDeep(originalRequest);
      newRequest.uri = new URL(
        pagination.last.link.replace(`page=${pagination.last.page}`, `page=${x}`),
      );
      pages.push(newRequest);
    }

    try {
      const promiseArray = Promise.all(
        pages.reverse().map((x) => runner(x.uri, x.params, x.nesting, true, true)),
      );

      manager();

      const responseArray = (await promiseArray).reverse();

      if (originalRequest.nesting) {
        const nestingValue = originalRequest.nesting;
        // eslint-disable-next-line security/detect-object-injection
        return responseArray.flatMap((x) => x[nestingValue]);
      } else {
        return responseArray.flat(1);
      }
    } catch (error) {
      originalRequest.reject(error);
    }
  }

  const checkQueue = () => {
    timeout = undefined;

    if (requestQueue.length > 0) {
      manager();
    }
  };

  const manager = async () => {
    if (requestQueue.length == 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }
      return;
    }

    const newTime = Date.now();
    currentCost = Math.min(
      currentCost + ((newTime - costLastRechargedTime) / 1000) * settings.rechargeRate,
      settings.maxCost,
    );
    costLastRechargedTime = newTime;

    if (currentCost < settings.inititalRequestCost) {
      if (timeout) return;
      const waitTime =
        ((settings.inititalRequestCost - currentCost) / settings.rechargeRate) * 1000;
      timeout = setTimeout(checkQueue, waitTime);
      return;
    }

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    currentCost -= settings.inititalRequestCost;
    const currentRequest = requestQueue.shift() as Request;
    runningQueue.push(currentRequest);

    let rateLimitRemaining = 0;
    let response;

    try {
      const responseAwait = request(currentRequest.uri, currentRequest.params);

      if (requestQueue.length > 0) manager();

      response = await responseAwait;
    } catch (error) {
      runningQueue.splice(runningQueue.indexOf(currentRequest), 1);
      currentRequest.reject(error);
      // We do not know if the request cost anything so we will assume it cost the full amount
      currentCost = 0;
      if (requestQueue.length > 0) manager();
      return;
    }

    try {
      runningQueue.splice(runningQueue.indexOf(currentRequest), 1);

      const responseBodyAwait = response.body.text();

      let linkHeader = response.headers.link ?? '';
      if (typeof linkHeader !== 'string') linkHeader = linkHeader[0];

      const pagination = getPagination(
        linkHeader,
        settings.maxPage,
        currentRequest.forcedPages,
        currentRequest.isForced,
      );

      rateLimitRemaining = Number(response.headers['x-rate-limit-remaining'] ?? 0);

      let responseBody: any = await responseBodyAwait;
      try {
        responseBody = JSON.parse(responseBody);
      } catch (error) {
        /* empty */
      }

      if (response.statusCode < 200 || response.statusCode >= 300) {
        currentRequest.reject(`${response.statusCode} - ${JSON.stringify(responseBody)}`);

        return;
      }
      if (!pagination) return currentRequest.resolve(responseBody);

      if (currentRequest.nesting) {
        responseBody = responseBody[currentRequest.nesting];
      }

      switch (getPaginationType(pagination, !!currentRequest.data, currentRequest.isForced)) {
        case PaginationType.ALL: {
          if (settings.logging)
            console.log(
              `Canvas API: Fetching pages ${pagination.current.page + 1} to ${
                pagination.last?.page
              } for ${currentRequest.uri.pathname}`,
            );
          const allPageData = await requestAllPages(currentRequest, pagination, sendRequest);
          const finalData = mergeResponse(responseBody, allPageData, currentRequest.nesting);
          currentRequest.resolve(finalData);
          break;
        }
        case PaginationType.PARTIAL_LAST_PAGE:
          currentRequest.resolve(
            restoreNesting(currentRequest.data.concat(responseBody), currentRequest.nesting),
          );
          break;
        case PaginationType.PARTIAL:
          if (!currentRequest.data) currentRequest.data = [];
          currentRequest.uri = new URL(pagination.next?.link ?? '');
          currentRequest.data = currentRequest.data.concat(responseBody);
          if (settings.logging)
            console.log(
              `Canvas API: Fetching page ${pagination.next?.page} for ${currentRequest.uri.pathname}`,
            );
          requestQueue.unshift(currentRequest);
          break;
        case PaginationType.NONE:
          currentRequest.resolve(restoreNesting(responseBody, currentRequest.nesting));
          break;
      }
    } catch (error) {
      currentRequest.reject(error);
    } finally {
      currentCost = Math.max(
        rateLimitRemaining - settings.inititalRequestCost * runningQueue.length,
        0,
      );
      costLastRechargedTime = Date.now();
      if (requestQueue.length > 0) manager();
    }
  };

  const sendRequest = (
    uri: URL,
    params: RequestOptions,
    nesting?: string,
    isForced = false,
    isPriority = false,
  ): Promise<any> => {
    const deferredPromise = createDeferredPromise<any>();
    if (settings.forceLastPage > settings.maxPage) {
      deferredPromise.reject('Force last page is greater than max page');
      return deferredPromise.promise;
    }
    params.headers = {
      Authorization: `Bearer ${settings.token}`,
      'content-type': params.body ? 'application/json' : undefined,
    };

    if (isPriority) {
      requestQueue.unshift({
        ...deferredPromise,
        uri,
        params,
        nesting,
        forcedPages: settings.forceLastPage > 0 ? settings.forceLastPage : undefined,
        isForced,
      });
    } else {
      requestQueue.push({
        ...deferredPromise,
        uri,
        params,
        nesting,
        forcedPages: settings.forceLastPage > 0 ? settings.forceLastPage : undefined,
        isForced,
      });
      manager();
    }
    return deferredPromise.promise;
  };

  return {
    get: (endpoint: string, query?: any, nesting?: string) => {
      const url = new URL(`https://${settings.domain}/api${endpoint}`);
      url.search = qs.stringify(
        {
          ...query,
          per_page: 100,
        },
        { arrayFormat: 'brackets' },
      );
      return sendRequest(
        url,
        {
          method: 'GET',
        },
        nesting,
      );
    },
    post: (endpoint: string, data?: any) => {
      const url = new URL(`https://${settings.domain}/api${endpoint}`);
      return sendRequest(url, {
        method: 'POST',
        body: data,
      });
    },
    delete: (endpoint: string, data?: any) => {
      const url = new URL(`https://${settings.domain}/api${endpoint}`);
      return sendRequest(url, {
        method: 'DELETE',
        body: data,
      });
    },
    put: (endpoint: string, data?: any) => {
      const url = new URL(`https://${settings.domain}/api${endpoint}`);
      return sendRequest(url, {
        method: 'PUT',
        body: data,
      });
    },
    patch: (endpoint: string, data?: any) => {
      const url = new URL(`https://${settings.domain}/api${endpoint}`);
      return sendRequest(url, {
        method: 'PATCH',
        body: data,
      });
    },
  };
}

export interface Runner {
  get: (endpoint: string, query?: any, nesting?: string) => Promise<any>;
  post: (endpoint: string, data?: any) => Promise<any>;
  delete: (endpoint: string, data?: any) => Promise<any>;
  put: (endpoint: string, data?: any) => Promise<any>;
  patch: (endpoint: string, data?: any) => Promise<void>;
}

function getPagination(
  header: string | undefined,
  maxPage: number,
  forcedPages?: number,
  isForced = false,
): Pagination | null {
  if (!header) return null;
  const pagination: Partial<Pagination> = {};
  const links = header.split(',');
  links.forEach((link) => {
    const data = link.split('"') as (keyof Pagination)[];
    pagination[data[1]] = {
      page: Number(data[0].split('page=')[1].split('&')[0]),
      link: data[0].split('<')[1].split('>')[0],
    };
  });

  if (
    !pagination.last &&
    pagination.next &&
    forcedPages &&
    (pagination.current?.page ?? 0) < forcedPages
  ) {
    const nextPage = pagination.next;

    if (isForced) {
      pagination.last = pagination.current;
      delete pagination.next;
      return pagination as Pagination;
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

  if (pagination.next && pagination.next.page > maxPage) pagination.next = undefined;
  if (pagination.last && pagination.last.page > maxPage) pagination.last.page = maxPage;

  return pagination as Pagination;
}

function getPaginationType(
  pagination: Pagination,
  hasData: boolean,
  isForced: boolean,
): PaginationType {
  if (pagination.next && pagination.current.page === 1 && pagination.last && !hasData)
    return PaginationType.ALL;

  if (pagination.last && hasData && pagination.current.page === pagination.last.page)
    return PaginationType.PARTIAL_LAST_PAGE;

  if (pagination.next && !isForced) return PaginationType.PARTIAL;

  return PaginationType.NONE;
}

function mergeResponse<T extends Record<string, any>>(
  responseBody: T[],
  allPageData: T[],
  nesting?: string,
): T {
  return restoreNesting(responseBody.concat(allPageData), nesting);
}

function restoreNesting(responseBody: any, nesting: string | undefined) {
  if (nesting) {
    return {
      [nesting]: responseBody,
    };
  }
  return responseBody;
}

interface DefferedPromise<T> {
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
  promise: Promise<T>;
}

function createDeferredPromise<T>() {
  const deferred: Partial<DefferedPromise<T>> = {};
  const promise = new Promise<T>(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  deferred.promise = promise;
  return deferred as DefferedPromise<T>;
}

interface Pagination {
  current: Page;
  next?: Page;
  last?: Page;
}

interface Page {
  page: number;
  link: string;
}

enum PaginationType {
  NONE,
  ALL,
  PARTIAL,
  PARTIAL_LAST_PAGE,
}

interface Request {
  uri: URL;
  params: RequestOptions;
  nesting?: string;
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
  promise: Promise<any>;
  data?: any;
  forcedPages?: number;
  isForced: boolean;
}

declare type RequestOptions = { dispatcher?: Dispatcher } & Omit<
  Dispatcher.RequestOptions,
  'origin' | 'path' | 'method'
> &
  Partial<Pick<Dispatcher.RequestOptions, 'method'>>;
