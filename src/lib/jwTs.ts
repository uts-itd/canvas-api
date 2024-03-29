import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Create a unique jwt for using with other canvas services Generates a different JWT each time it's called, each one expires after a short window (1 hour)
     * @summary Create JWT
     * @returns {Promise<any>}
     */
    createJwt: () => helper.post('/v1/jwts'),
    /**
     * Refresh a JWT for use with other canvas services Generates a different JWT each time it's called, each one expires after a short window (1 hour).
     * @summary Refresh JWT
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    refreshJwt: (body: any) => helper.post('/v1/jwts/refresh', body),
  };
}
