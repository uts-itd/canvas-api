import { fetch, RequestInit } from 'undici';
import * as qs from 'qs';
import { Settings } from './settings';
import { cloneDeep } from 'lodash';

export function getHelper(settings: Settings): Helper {
  let requestQueue: Request[] = [];
  let runningQueue: Request[] = [];
  let cost = 700;
  let requestCost = 15;
  let timeout: NodeJS.Timeout | undefined;

  async function requestAllPages(
    originalRequest: Request,
    pagination: Pagination,
    runner: (uri: URL, params: RequestInit, nesting?: string, isForced?: boolean) => Promise<any>,
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
      const responseArray = await Promise.all(
        pages.map((x) => runner(x.uri, x.params, x.nesting, true)),
      );

      if (originalRequest.nesting) {
        const nestingValue = originalRequest.nesting;
        return responseArray.flatMap((x) => x[nestingValue]);
      } else {
        return responseArray.flat(1);
      }
    } catch (error) {
      originalRequest.reject(error);
    }
  }

  let checkQueue = () => {
    if (cost <= 680) cost += 20;
    else cost = 700;
    if (requestQueue.length > 0) {
      manager();
    }
  };

  let manager = async () => {
    if (requestQueue.length == 0) return;

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
    let currentRequest = requestQueue.shift() as Request;
    runningQueue.push(currentRequest);

    let rateLimitRemaining = 0;

    try {
      const responseAwait = fetch(currentRequest.uri, currentRequest.params);

      if (requestQueue.length > 0) manager();

      const response = await responseAwait;
      runningQueue.splice(runningQueue.indexOf(currentRequest), 1);

      const responseBodyAwait = response.json();

      const pagination = getPagination(
        response.headers.get('link'),
        settings.maxPage,
        currentRequest.forcedPages,
        currentRequest.isForced,
      );
      rateLimitRemaining = Number(response.headers.get('x-rate-limit-remaining') ?? 0);

      if (requestQueue.length > 0) manager();
      let responseBody: any = await responseBodyAwait;

      if (!pagination) return currentRequest.resolve(responseBody);

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
          currentRequest.resolve(
            restoreNesting(currentRequest.data.concat(responseBody), currentRequest.nesting),
          );
          break;
        case PaginationType.PARTIAL:
          if (!currentRequest.data) currentRequest.data = [];
          currentRequest.uri = new URL(pagination.next?.link ?? '');
          currentRequest.data = currentRequest.data.concat(responseBody);
          console.log('Canvas API: Fetching page ' + pagination.next?.page);
          requestQueue.push(currentRequest);
          break;
        case PaginationType.NONE:
          currentRequest.resolve(restoreNesting(responseBody, currentRequest.nesting));
          break;
      }
    } catch (error) {
      runningQueue.splice(runningQueue.indexOf(currentRequest), 1);
      currentRequest.reject(error);
    } finally {
      cost = rateLimitRemaining - requestCost * runningQueue.length;
      if (requestQueue.length > 0) manager();
    }
  };

  let sendRequest = (
    uri: URL,
    params: RequestInit,
    nesting?: string,
    isForced = false,
  ): Promise<any> => {
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

export interface Helper {
  get: (endpoint: string, query?: any, nesting?: string) => Promise<any>;
  post: (endpoint: string, data?: any) => Promise<any>;
  delete: (endpoint: string, data?: any) => Promise<any>;
  put: (endpoint: string, data?: any) => Promise<any>;
  patch: (endpoint: string, data?: any) => Promise<void>;
}

function getPagination(
  header: string | null,
  maxPage: number,
  forcedPages?: number,
  isForced: boolean = false,
): Pagination | null {
  if (!header) return null;
  let pagination: Partial<Pagination> = {};
  let links = header.split(',');
  links.forEach((link) => {
    let data = link.split('"') as (keyof Pagination)[];
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

function getPaginationType(pagination: Pagination, hasData: boolean): PaginationType {
  if (pagination.next && pagination.current.page === 1 && pagination.last && !hasData)
    return PaginationType.ALL;

  if (pagination.last && hasData && pagination.current.page >= pagination.last.page)
    return PaginationType.PARTIAL_LAST_PAGE;

  if (pagination.next) return PaginationType.PARTIAL;

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
  params: RequestInit;
  nesting?: string;
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
  data?: any;
  forcedPages?: number;
  isForced: boolean;
}
