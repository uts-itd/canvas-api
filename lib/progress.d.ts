export = progress;
declare let progress: {
    /**
     * Return completion and status information about an asynchronous job
     * @summary Query progress
     * @param {string} progresId Canvas Progres ID
     * @returns {Promise<any>}
     */
    queryProgress: (progresId: string) => Promise<any>;
};
