const helper = require('../helper');

let progress = {
    /**
     * Return completion and status information about an asynchronous job
     * @summary Query progress
     * @param {string} progresId Canvas Progres ID
     * @returns {Progress}
     */
    queryProgress: (progresId) => helper.get(`/v1/progress/${progresId}`),
}

module.exports = progress;