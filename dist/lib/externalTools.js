var helper = require('../helper');
var externalTools = {
    /**
     * Returns the paginated list of external tools for the current context. See the get request docs for a single tool for a list of properties on an external tool.
     * @summary List external tools
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listExternalToolsCourses: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/external_tools", query);
    },
    /**
     * Returns the paginated list of external tools for the current context. See the get request docs for a single tool for a list of properties on an external tool.
     * @summary List external tools
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listExternalToolsAccounts: function (accountId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/accounts/" + accountId + "/external_tools", query);
    },
    /**
     * Returns the paginated list of external tools for the current context. See the get request docs for a single tool for a list of properties on an external tool.
     * @summary List external tools
     * @param {string} groupId Canvas Group ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listExternalToolsGroups: function (groupId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/groups/" + groupId + "/external_tools", query);
    },
    /**
     * Returns a sessionless launch url for an external tool. NOTE: Either the id or url must be provided unless launch_type is assessment or module_item.
     * @summary Get a sessionless launch url for an external tool.
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSessionlessLaunchUrlForExternalToolCourses: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/external_tools/sessionless_launch", query);
    },
    /**
     * Returns a sessionless launch url for an external tool. NOTE: Either the id or url must be provided unless launch_type is assessment or module_item.
     * @summary Get a sessionless launch url for an external tool.
     * @param {string} accountId Canvas Account ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSessionlessLaunchUrlForExternalToolAccounts: function (accountId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/accounts/" + accountId + "/external_tools/sessionless_launch", query);
    },
    /**
     * Returns the specified external tool.
     * @summary Get a single external tool
     * @param {string} courseId Canvas Course ID
     * @param {string} externalToolId Canvas External tool ID
     * @returns {Promise<any>}
     */
    getSingleExternalToolCourses: function (courseId, externalToolId) { return helper.get("/v1/courses/" + courseId + "/external_tools/" + externalToolId); },
    /**
     * Returns the specified external tool.
     * @summary Get a single external tool
     * @param {string} accountId Canvas Account ID
     * @param {string} externalToolId Canvas External tool ID
     * @returns {Promise<any>}
     */
    getSingleExternalToolAccounts: function (accountId, externalToolId) { return helper.get("/v1/accounts/" + accountId + "/external_tools/" + externalToolId); },
    /**
     * Create an external tool in the specified course/account. The created tool will be returned, see the "show" endpoint for an example.
     * @summary Create an external tool
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalToolCourses: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/external_tools", body); },
    /**
     * Create an external tool in the specified course/account. The created tool will be returned, see the "show" endpoint for an example.
     * @summary Create an external tool
     * @param {string} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createExternalToolAccounts: function (accountId, body) { return helper.post("/v1/accounts/" + accountId + "/external_tools", body); },
    /**
     * Update the specified external tool. Uses same parameters as create
     * @summary Edit an external tool
     * @param {string} courseId Canvas Course ID
     * @param {string} externalToolId Canvas External tool ID
     * @returns {Promise<any>}
     */
    editExternalToolCourses: function (courseId, externalToolId) { return helper.put("/v1/courses/" + courseId + "/external_tools/" + externalToolId); },
    /**
     * Update the specified external tool. Uses same parameters as create
     * @summary Edit an external tool
     * @param {string} accountId Canvas Account ID
     * @param {string} externalToolId Canvas External tool ID
     * @returns {Promise<any>}
     */
    editExternalToolAccounts: function (accountId, externalToolId) { return helper.put("/v1/accounts/" + accountId + "/external_tools/" + externalToolId); },
    /**
     * Remove the specified external tool
     * @summary Delete an external tool
     * @param {string} courseId Canvas Course ID
     * @param {string} externalToolId Canvas External tool ID
     * @returns {Promise<any>}
     */
    deleteExternalToolCourses: function (courseId, externalToolId) { return helper.delete("/v1/courses/" + courseId + "/external_tools/" + externalToolId); },
    /**
     * Remove the specified external tool
     * @summary Delete an external tool
     * @param {string} accountId Canvas Account ID
     * @param {string} externalToolId Canvas External tool ID
     * @returns {Promise<any>}
     */
    deleteExternalToolAccounts: function (accountId, externalToolId) { return helper.delete("/v1/accounts/" + accountId + "/external_tools/" + externalToolId); },
};
module.exports = externalTools;
