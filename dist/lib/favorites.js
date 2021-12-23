var helper = require('../helper');
var favorites = {
    /**
     * Retrieve the paginated list of favorite courses for the current user. If the user has not chosen any favorites, then a selection of currently enrolled courses will be returned. See the {api:CoursesController#index List courses API} for details on accepted include[] parameters.
     * @summary List favorite courses
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFavoriteCourses: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/users/self/favorites/courses", query);
    },
    /**
     * Retrieve the paginated list of favorite groups for the current user. If the user has not chosen any favorites, then a selection of groups that the user is a member of will be returned.
     * @summary List favorite groups
     * @returns {Promise<any>}
     */
    listFavoriteGroups: function () { return helper.get("/v1/users/self/favorites/groups"); },
    /**
     * Add a course to the current user's favorites. If the course is already in the user's favorites, nothing happens.
     * @summary Add course to favorites
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    addCourseToFavorites: function (courseId) { return helper.post("/v1/users/self/favorites/courses/" + courseId); },
    /**
     * Add a group to the current user's favorites. If the group is already in the user's favorites, nothing happens.
     * @summary Add group to favorites
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    addGroupToFavorites: function (groupId) { return helper.post("/v1/users/self/favorites/groups/" + groupId); },
    /**
     * Remove a course from the current user's favorites.
     * @summary Remove course from favorites
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    removeCourseFromFavorites: function (courseId) { return helper.delete("/v1/users/self/favorites/courses/" + courseId); },
    /**
     * Remove a group from the current user's favorites.
     * @summary Remove group from favorites
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    removeGroupFromFavorites: function (groupId) { return helper.delete("/v1/users/self/favorites/groups/" + groupId); },
    /**
     * Reset the current user's course favorites to the default automatically generated list of enrolled courses
     * @summary Reset course favorites
     * @returns {Promise<any>}
     */
    resetCourseFavorites: function () { return helper.delete("/v1/users/self/favorites/courses"); },
    /**
     * Reset the current user's group favorites to the default automatically generated list of enrolled group
     * @summary Reset group favorites
     * @returns {Promise<any>}
     */
    resetGroupFavorites: function () { return helper.delete("/v1/users/self/favorites/groups"); },
};
module.exports = favorites;
