const request = require('request-promise-native');

module.exports = (settings) => {
  let requestQueue = [],
    runningQueue = [];
  let cost = 700,
    requestCost = 15;
  let timeout;

  let getPagination = (header) => {
    if (!header) return {};
    let pagination = {};
    let links = header.split(',');
    links.forEach((link) => {
      let data = link.split('"');
      pagination[data[1]] = {
        page: Number(data[0].split('page=')[1].split('&')[0]),
        link: data[0].split('<')[1].split('>')[0],
      };
    });
    if (
      pagination.next &&
      pagination.next.page >= settings.maxPage &&
      !pagination.last
    )
      pagination.last = {
        page: settings.maxPage,
      };
    if (pagination.next && pagination.next.page > settings.maxPage)
      pagination.next = null;
    if (pagination.last && pagination.last.page > settings.maxPage)
      pagination.last.page = settings.maxPage;
    return pagination;
  };

  let checkQueue = () => {
    if (cost <= 680) cost += 20;
    else cost = 700;
    if (requestQueue.length > 0) {
      manager();
    }
  };

  let manager = () => {
    if (cost < requestCost) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(checkQueue, 2000);
    } else {
      cost -= requestCost;
      let next = requestQueue.shift();
      runningQueue.push(next);
      request(next.params)
        .then((response) => {
          try {
            response.body = JSON.parse(response.body);
          } catch (e) {}
          let pagination = getPagination(response.headers.link);

          if (
            pagination.next &&
            pagination.current.page === 1 &&
            pagination.last
          ) {
            let pages = [];
            let baseUri = next.params.uri;
            for (let x = 2; x <= pagination.last.page; x++) {
              next.params.uri = baseUri + '&page=' + x;
              pages.push(sendRequest(Object.assign({}, next.params)));
            }
            Promise.all(pages)
              .then((dataArray) => {
                if (next.nesting) {
                  response.body[next.nesting] = response.body[
                    next.nesting
                  ].concat(...dataArray.map((x) => x[next.nesting]));
                } else response.body = response.body.concat(...dataArray);
                next.resolve(response.body);
              })
              .catch((error) => {
                next.reject(error);
              });
          } else if (pagination.next && !pagination.last) {
            if (!next.data) next.data = [];
            next.params.uri = pagination.next.link;
            next.data = response.body.concat(next.data);
            console.info(
              `[Canvas API] Pagination: Fetching page ${pagination.next.page} of unkown`,
            );
            requestQueue.push(next);
          } else if (pagination.last && next.data) {
            response.body = response.body.concat(next.data);
          }
          if (requestQueue.length > 0) manager();
          if (
            !pagination.next ||
            (pagination.current.page !== 1 && pagination.last)
          ) {
            next.resolve(response.body);
          }
          return response.headers;
        })
        .catch((err) => {
          if (err.name === 'StatusCodeError') {
            let errMessage = {
              code: err.statusCode,
            };
            switch (err.statusCode) {
              case 401:
                errMessage.message = `Authorization error: ${
                  JSON.parse(err.response.body).errors[0].message
                }`;
                next.reject(errMessage);
                break;
              case 404:
                errMessage.message = `Invalid url: ${
                  JSON.parse(err.response.body).errors[0].message
                }`;
                next.reject(errMessage);
                break;
              case 403:
                errMessage.message = `Forbidden: ${
                  JSON.parse(err.response.body).errors[0].message
                }`;
                next.reject(errMessage);
                break;
            }
          } else next.reject(err);
          return err.response.headers;
        })
        .then((headers) => {
          runningQueue.splice(runningQueue.indexOf(next), 1);
          cost =
            Number(headers['x-rate-limit-remaining']) -
            requestCost * runningQueue.length;
        });
    }
  };

  let sendRequest = (params, nesting = null) => {
    return new Promise((resolve, reject) => {
      // params.proxy = 'http://127.0.0.1:8888';
      params.forever = true;
      requestQueue.push({
        params,
        nesting,
        resolve,
        reject,
      });
      manager();
    });
  };

  return {
    get: (endpoint, query = null, nesting = null) => {
      return sendRequest(
        {
          uri: `https://${settings.domain}/api${endpoint}?per_page=100`,
          method: 'GET',
          qs: query,
          qsStringifyOptions: {
            arrayFormat: 'brackets',
          },
          headers: {
            Authorization: `Bearer ${settings.token}`,
          },
          resolveWithFullResponse: true,
        },
        nesting,
      );
    },
    post: (endpoint, data) => {
      return sendRequest({
        uri: `https://${settings.domain}/api${endpoint}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${settings.token}`,
        },
        json: data,
        resolveWithFullResponse: true,
      });
    },
    delete: (endpoint, data) => {
      return sendRequest({
        uri: `https://${settings.domain}/api${endpoint}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${settings.token}`,
        },
        json: data,
        resolveWithFullResponse: true,
      });
    },
    put: (endpoint, data) => {
      return sendRequest({
        uri: `https://${settings.domain}/api${endpoint}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${settings.token}`,
        },
        json: data,
        resolveWithFullResponse: true,
      });
    },
  };
};
