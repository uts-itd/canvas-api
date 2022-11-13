import { Runner } from '../runner';

export default function (helper: Runner) {
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
