import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * A paginated list of the list of sections for this course.
     * @summary List course sections
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listCourseSections: (courseId: string | number, query?: any) =>
      helper.get(`/v1/courses/${courseId}/sections`, query),
    /**
     * Creates a new section for this course.
     * @summary Create course section
     * @param {string|number} courseId Canvas Course ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createCourseSection: (courseId: string | number, body: any) =>
      helper.post(`/v1/courses/${courseId}/sections`, body),
    /**
     * Move the Section to another course. The new course may be in a different account (department), but must belong to the same root account (institution).
     * @summary Cross-list a Section
     * @param {string|number} sectionId Canvas Section ID
     * @param {string|number} newCourseId Canvas New course ID
     * @returns {Promise<any>}
     */
    crossListSection: (sectionId: string | number, newCourseId: string | number) =>
      helper.post(`/v1/sections/${sectionId}/crosslist/${newCourseId}`),
    /**
     * Undo cross-listing of a Section, returning it to its original course.
     * @summary De-cross-list a Section
     * @param {string|number} sectionId Canvas Section ID
     * @returns {Promise<any>}
     */
    deCrossListSection: (sectionId: string | number) =>
      helper.delete(`/v1/sections/${sectionId}/crosslist`),
    /**
     * Modify an existing section.
     * @summary Edit a section
     * @param {string|number} sectionId Canvas Section ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editSection: (sectionId: string | number, body: any) =>
      helper.put(`/v1/sections/${sectionId}`, body),
    /**
     * Gets details about a specific section
     * @summary Get section information
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSectionInformationCourses: (
      courseId: string | number,
      sectionId: string | number,
      query?: any,
    ) => helper.get(`/v1/courses/${courseId}/sections/${sectionId}`, query),
    /**
     * Gets details about a specific section
     * @summary Get section information
     * @param {string|number} sectionId Canvas Section ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSectionInformationSections: (sectionId: string | number, query?: any) =>
      helper.get(`/v1/sections/${sectionId}`, query),
    /**
     * Delete an existing section. Returns the former Section.
     * @summary Delete a section
     * @param {string|number} sectionId Canvas Section ID
     * @returns {Promise<any>}
     */
    deleteSection: (sectionId: string | number) => helper.delete(`/v1/sections/${sectionId}`),
  };
}
