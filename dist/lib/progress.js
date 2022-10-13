module.exports = (helper) => {
    return {
        /**
         * Return completion and status information about an asynchronous job
         * @summary Query progress
         * @param {string} progresId Canvas Progres ID
         * @returns {Promise<any>}
         */
        queryProgress: (progresId) => helper.get(`/v1/progress/${progresId}`),
    };
};
