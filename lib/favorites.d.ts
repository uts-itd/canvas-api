export = favorites;
declare let favorites: {
    /**
     * Retrieve the paginated list of favorite courses for the current user. If the user has not chosen any favorites, then a selection of currently enrolled courses will be returned. See the {api:CoursesController#index List courses API} for details on accepted include[] parameters.
     * @summary List favorite courses
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listFavoriteCourses: (query?: any) => Promise<any>;
    /**
     * Retrieve the paginated list of favorite groups for the current user. If the user has not chosen any favorites, then a selection of groups that the user is a member of will be returned.
     * @summary List favorite groups
     * @returns {Promise<any>}
     */
    listFavoriteGroups: () => Promise<any>;
    /**
     * Add a course to the current user's favorites. If the course is already in the user's favorites, nothing happens.
     * @summary Add course to favorites
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    addCourseToFavorites: (courseId: string) => Promise<any>;
    /**
     * Add a group to the current user's favorites. If the group is already in the user's favorites, nothing happens.
     * @summary Add group to favorites
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    addGroupToFavorites: (groupId: string) => Promise<any>;
    /**
     * Remove a course from the current user's favorites.
     * @summary Remove course from favorites
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    removeCourseFromFavorites: (courseId: string) => Promise<any>;
    /**
     * Remove a group from the current user's favorites.
     * @summary Remove group from favorites
     * @param {string} groupId Canvas Group ID
     * @returns {Promise<any>}
     */
    removeGroupFromFavorites: (groupId: string) => Promise<any>;
    /**
     * Reset the current user's course favorites to the default automatically generated list of enrolled courses
     * @summary Reset course favorites
     * @returns {Promise<any>}
     */
    resetCourseFavorites: () => Promise<any>;
    /**
     * Reset the current user's group favorites to the default automatically generated list of enrolled group
     * @summary Reset group favorites
     * @returns {Promise<any>}
     */
    resetGroupFavorites: () => Promise<any>;
};
