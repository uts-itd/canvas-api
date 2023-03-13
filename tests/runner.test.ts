/* eslint-disable @typescript-eslint/ban-types */
import { CanvasApi, Canvas } from '../src/index';
import { Interceptable, MockAgent, setGlobalDispatcher } from 'undici';

let canvas: CanvasApi;

let mockAgent: MockAgent;

let mockPool: Interceptable;

describe('Canvas API', () => {
  let response = { test: 'value' };
  beforeEach(() => {
    mockAgent = new MockAgent();
    setGlobalDispatcher(mockAgent);
    mockAgent.disableNetConnect();
    canvas = Canvas('test.domain.com', 'fake-token');
    mockPool = mockAgent.get('https://test.domain.com');
    response = { test: 'value' };
  });

  describe('responses', () => {
    it('match GET path', async () => {
      mockPool
        .intercept({
          path: '/api/v1/courses/15031/settings',
          query: {
            per_page: '100',
          },
        })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply(200, response);

      const course = await canvas.courses.getCourseSettings(15031);

      expect(course).toEqual(response);
    });

    it('match PUT path', async () => {
      mockPool
        .intercept({
          path: '/api/v1/courses/15031/settings',
          method: 'PUT',
        })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply((opts) => {
          return {
            statusCode: 200,
            data: opts.body as Object,
          };
        });

      const course = await canvas.courses.updateCourseSettings(15031, {
        allow_student_discussion_topics: true,
      });

      expect(course).toEqual({
        allow_student_discussion_topics: true,
      });
    });

    it('match POST path', async () => {
      mockPool
        .intercept({
          path: '/api/v1/accounts/15031/courses',
          method: 'POST'
        })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply((opts) => {
          expect(opts.headers['content-type']).toEqual('application/json');
          return {
            statusCode: 200,
            data: opts.body as Object,
          };
        });

      const course = await canvas.courses.createNewCourse(15031, {
        allow_student_discussion_topics: true,
      });

      expect(course).toEqual({
        allow_student_discussion_topics: true,
      });
    });

    it('match PATCH path', async () => {
      mockPool
        .intercept({
          path: '/api/v1/courses/15031/late_policy',
          method: 'PATCH',
        })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply((opts) => {
          return {
            statusCode: 200,
            data: opts.body as Object,
          };
        });

      const course = await canvas.latePolicy.patchLatePolicy(15031, {
        allow_student_discussion_topics: true,
      });

      expect(course).toEqual({
        allow_student_discussion_topics: true,
      });
    });

    it('match DELETE path', async () => {
      mockPool
        .intercept({
          path: '/api/v1/courses/15031',
          method: 'DELETE',
        })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply(200, response);

      const course = await canvas.courses.deleteConcludeCourse(15031, {
        allow_student_discussion_topics: true,
      });

      expect(course).toEqual(response);
    });

    it('returns JSON', async () => {
      mockPool
        .intercept({ path: /.*/ })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply(200, response);

      const course = await canvas.courses.getCourseSettings(15031);

      expect(course).toEqual(response);
    });

    it('returns empty string', async () => {
      mockPool
        .intercept({ path: /.*/ })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply(200);

      const course = await canvas.courses.getCourseSettings(15031);

      expect(course).toBe('');
    });

    it('sends token', async () => {
      mockPool
        .intercept({
          path: /.*/,
          headers: {
            Authorization: 'Bearer fake-token',
          },
        })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply(200, (opts) => {
          return opts.headers;
        });

      const course = await canvas.courses.getCourseSettings(15031);

      expect(course).toEqual({
        Authorization: 'Bearer fake-token',
      });
    });
  });

  describe('rejects with', () => {
    it('body', async () => {
      mockPool
        .intercept({ path: /.*/ })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply(400, response);

      await expect(canvas.courses.getCourseSettings(15031)).rejects.toEqual(
        `400 - ${JSON.stringify(response)}`,
      );
    });

    it('no body', async () => {
      mockPool
        .intercept({ path: /.*/ })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply(400);

      await expect(canvas.courses.getCourseSettings(15031)).rejects.toEqual(
        `400 - ${JSON.stringify('')}`,
      );
    });
  });

  describe('multipage requests', () => {
    it('fetches one page at a time', async () => {
      mockPool
        .intercept({ path: /.*/ })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply((opts) => {
          const fullUrl = new URL(opts.path, opts.origin);
          const pageNumber = +(fullUrl.searchParams.get('page') ?? 1);

          const partialUrl = fullUrl.origin + fullUrl.pathname;

          let link = `<${partialUrl}?page=${pageNumber}&per_page=100>; rel="current",`;

          if (pageNumber > 1) {
            link += `<${partialUrl}?page=1&per_page=100>; rel="first",`;
          }

          if (pageNumber < 100) {
            link += `<${partialUrl}?page=${pageNumber + 1}&per_page=100>; rel="next"`;
          } else {
            link += `<${partialUrl}?page=100&per_page=100>; rel="last"`;
          }

          return {
            statusCode: 200,
            data: [pageNumber],
            responseOptions: {
              headers: {
                link,
              },
            },
          };
        })
        .delay(10)
        .times(100);

      const start = Date.now();
      const response = await canvas.accounts.listActiveCoursesInAccount(3);

      expect(Date.now() - start).toBeGreaterThan(10 * 100);
      expect(mockAgent.pendingInterceptors().length).toBe(0);
      expect(response).toEqual(Array.from({ length: 100 }, (_, i) => i + 1));
    });

    it('fetches all forced pages', async () => {
      mockPool
        .intercept({ path: /.*/ })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply((opts) => {
          const fullUrl = new URL(opts.path, opts.origin);
          const pageNumber = +(fullUrl.searchParams.get('page') ?? 1);

          const partialUrl = fullUrl.origin + fullUrl.pathname;

          let link = `<${partialUrl}?page=${pageNumber}&per_page=100>; rel="current",`;

          if (pageNumber > 1) {
            link += `<${partialUrl}?page=1&per_page=100>; rel="first",`;
          }

          if (pageNumber < 100) {
            link += `<${partialUrl}?page=${pageNumber + 1}&per_page=100>; rel="next"`;
          } else {
            link += `<${partialUrl}?page=100&per_page=100>; rel="last"`;
          }

          return {
            statusCode: 200,
            data: [pageNumber],
            responseOptions: {
              headers: {
                link,
              },
            },
          };
        })
        .delay(10)
        .times(100);

      const start = Date.now();
      canvas.settings.forceLastPage = 100;
      const response = await canvas.accounts.listActiveCoursesInAccount(3);
      canvas.settings.forceLastPage = 0;

      expect(Date.now() - start).toBeLessThan(10 * 100);
      expect(mockAgent.pendingInterceptors().length).toBe(0);
      expect(response).toEqual(Array.from({ length: 100 }, (_, i) => i + 1));
    });

    it('fetches all known pages', async () => {
      mockPool
        .intercept({ path: /.*/ })
        .defaultReplyHeaders({ 'x-rate-limit-remaining': '700' })
        .reply((opts) => {
          const fullUrl = new URL(opts.path, opts.origin);
          const pageNumber = +(fullUrl.searchParams.get('page') ?? 1);

          const partialUrl = fullUrl.origin + fullUrl.pathname;

          let link = `<${partialUrl}?page=${pageNumber}&per_page=100>; rel="current",`;

          if (pageNumber > 1) {
            link += `<${partialUrl}?page=1&per_page=100>; rel="first",`;
          }

          if (pageNumber < 100) {
            link += `<${partialUrl}?page=${pageNumber + 1}&per_page=100>; rel="next",`;
          }

          link += `<${partialUrl}?page=100&per_page=100>; rel="last"`;

          return {
            statusCode: 200,
            data: [pageNumber],
            responseOptions: {
              headers: {
                link,
              },
            },
          };
        })
        .delay(10)
        .times(100);

      const start = Date.now();
      const response = await canvas.accounts.listActiveCoursesInAccount(3);

      expect(Date.now() - start).toBeLessThan(10 * 100);
      expect(mockAgent.pendingInterceptors().length).toBe(0);
      expect(response).toEqual(Array.from({ length: 100 }, (_, i) => i + 1));
    });
  });
});
