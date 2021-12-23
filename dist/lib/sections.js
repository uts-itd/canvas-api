var helper = require('../helper');
var sections = {
    /**
     * A paginated list of the list of sections for this course.
     * @summary List course sections
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCourseSections: function (courseId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/sections", query);
    },
    /**
     * Creates a new section for this course.
     * @summary Create course section
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCourseSection: function (courseId, body) { return helper.post("/v1/courses/" + courseId + "/sections", body); },
    /**
     * Move the Section to another course. The new course may be in a different account (department), but must belong to the same root account (institution).
     * @summary Cross-list a Section
     * @param {string} sectionId Canvas Section ID
     * @param {string} newCourseId Canvas New course ID
     * @returns {Promise<any>}
     */
    crossListSection: function (sectionId, newCourseId) { return helper.post("/v1/sections/" + sectionId + "/crosslist/" + newCourseId); },
    /**
     * Undo cross-listing of a Section, returning it to its original course.
     * @summary De-cross-list a Section
     * @param {string} sectionId Canvas Section ID
     * @returns {Promise<any>}
     */
    deCrossListSection: function (sectionId) { return helper.delete("/v1/sections/" + sectionId + "/crosslist"); },
    /**
     * Modify an existing section.
     * @summary Edit a section
     * @param {string} sectionId Canvas Section ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editSection: function (sectionId, body) { return helper.put("/v1/sections/" + sectionId, body); },
    /**
     * Gets details about a specific section
     * @summary Get section information
     * @param {string} courseId Canvas Course ID
     * @param {string} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSectionInformationCourses: function (courseId, sectionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/courses/" + courseId + "/sections/" + sectionId, query);
    },
    /**
     * Gets details about a specific section
     * @summary Get section information
     * @param {string} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSectionInformationSections: function (sectionId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/sections/" + sectionId, query);
    },
    /**
     * Delete an existing section. Returns the former Section.
     * @summary Delete a section
     * @param {string} sectionId Canvas Section ID
     * @returns {Promise<any>}
     */
    deleteSection: function (sectionId) { return helper.delete("/v1/sections/" + sectionId); },
};
module.exports = sections;
