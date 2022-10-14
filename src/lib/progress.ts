import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * Return completion and status information about an asynchronous job
     * @summary Query progress
     * @param {string|number} progresId Canvas Progres ID
     * @returns {Promise<any>}
     */
    queryProgress: (progresId: string | number) => helper.get(`/v1/progress/${progresId}`),
  };
}
