declare function _exports(helper: any): {
    /**
     * A paginated list of the list of sections for this course.
     * @summary List course sections
     * @param {string} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCourseSections: (courseId: string, query?: any) => Promise<any>;
    /**
     * Creates a new section for this course.
     * @summary Create course section
     * @param {string} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCourseSection: (courseId: string, body: any) => Promise<any>;
    /**
     * Move the Section to another course. The new course may be in a different account (department), but must belong to the same root account (institution).
     * @summary Cross-list a Section
     * @param {string} sectionId Canvas Section ID
     * @param {string} newCourseId Canvas New course ID
     * @returns {Promise<any>}
     */
    crossListSection: (sectionId: string, newCourseId: string) => Promise<any>;
    /**
     * Undo cross-listing of a Section, returning it to its original course.
     * @summary De-cross-list a Section
     * @param {string} sectionId Canvas Section ID
     * @returns {Promise<any>}
     */
    deCrossListSection: (sectionId: string) => Promise<any>;
    /**
     * Modify an existing section.
     * @summary Edit a section
     * @param {string} sectionId Canvas Section ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editSection: (sectionId: string, body: any) => Promise<any>;
    /**
     * Gets details about a specific section
     * @summary Get section information
     * @param {string} courseId Canvas Course ID
     * @param {string} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSectionInformationCourses: (courseId: string, sectionId: string, query?: any) => Promise<any>;
    /**
     * Gets details about a specific section
     * @summary Get section information
     * @param {string} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSectionInformationSections: (sectionId: string, query?: any) => Promise<any>;
    /**
     * Delete an existing section. Returns the former Section.
     * @summary Delete a section
     * @param {string} sectionId Canvas Section ID
     * @returns {Promise<any>}
     */
    deleteSection: (sectionId: string) => Promise<any>;
};
export = _exports;
