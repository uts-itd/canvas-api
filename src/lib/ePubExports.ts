import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * A paginated list of all courses a user is actively participating in, and the latest ePub export associated with the user & course.
     * @summary List courses with their latest ePub export
     * @returns {Promise<any>}
     */
    listCoursesWithTheirLatestEpubExport: () => helper.get('/v1/epub_exports'),
    /**
     * Begin an ePub export for a course. You can use the {api:ProgressController#show Progress API} to track the progress of the export. The export's progress is linked to with the _progress_url_ value. When the export completes, use the {api:EpubExportsController#show Show content export} endpoint to retrieve a download URL for the exported content.
     * @summary Create ePub Export
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    createEpubExport: (courseId: string | number) =>
      helper.post(`/v1/courses/${courseId}/epub_exports`),
    /**
     * Get information about a single ePub export.
     * @summary Show ePub export
     * @param {string|number} courseId Canvas Course ID
     * @param {string|number} epubExportId Canvas Epub export ID
     * @returns {Promise<any>}
     */
    showEpubExport: (courseId: string | number, epubExportId: string | number) =>
      helper.get(`/v1/courses/${courseId}/epub_exports/${epubExportId}`),
  };
}
