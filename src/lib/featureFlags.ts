import { Helper } from '../helper';

export default function (helper: Helper) {
  return {
    /**
     * A paginated list of all features that apply to a given Account, Course, or User.
     * @summary List features
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listFeaturesCourses: (courseId: string | number) => helper.get(`/v1/courses/${courseId}/features`),
    /**
     * A paginated list of all features that apply to a given Account, Course, or User.
     * @summary List features
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listFeaturesAccounts: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/features`),
    /**
     * A paginated list of all features that apply to a given Account, Course, or User.
     * @summary List features
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listFeaturesUsers: (userId: string | number) => helper.get(`/v1/users/${userId}/features`),
    /**
     * A paginated list of all features that are enabled on a given Account, Course, or User. Only the feature names are returned.
     * @summary List enabled features
     * @param {string|number} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listEnabledFeaturesCourses: (courseId: string | number) =>
      helper.get(`/v1/courses/${courseId}/features/enabled`),
    /**
     * A paginated list of all features that are enabled on a given Account, Course, or User. Only the feature names are returned.
     * @summary List enabled features
     * @param {string|number} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listEnabledFeaturesAccounts: (accountId: string | number) =>
      helper.get(`/v1/accounts/${accountId}/features/enabled`),
    /**
     * A paginated list of all features that are enabled on a given Account, Course, or User. Only the feature names are returned.
     * @summary List enabled features
     * @param {string|number} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listEnabledFeaturesUsers: (userId: string | number) => helper.get(`/v1/users/${userId}/features/enabled`),
    /**
     * Get the feature flag that applies to a given Account, Course, or User. The flag may be defined on the object, or it may be inherited from a parent account. You can look at the context_id and context_type of the returned object to determine which is the case. If these fields are missing, then the object is the global Canvas default.
     * @summary Get feature flag
     * @param {string|number} courseId Canvas Course ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    getFeatureFlagCourses: (courseId: string | number, feature: string) =>
      helper.get(`/v1/courses/${courseId}/features/flags/${feature}`),
    /**
     * Get the feature flag that applies to a given Account, Course, or User. The flag may be defined on the object, or it may be inherited from a parent account. You can look at the context_id and context_type of the returned object to determine which is the case. If these fields are missing, then the object is the global Canvas default.
     * @summary Get feature flag
     * @param {string|number} accountId Canvas Account ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    getFeatureFlagAccounts: (accountId: string | number, feature: string) =>
      helper.get(`/v1/accounts/${accountId}/features/flags/${feature}`),
    /**
     * Get the feature flag that applies to a given Account, Course, or User. The flag may be defined on the object, or it may be inherited from a parent account. You can look at the context_id and context_type of the returned object to determine which is the case. If these fields are missing, then the object is the global Canvas default.
     * @summary Get feature flag
     * @param {string|number} userId Canvas User ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    getFeatureFlagUsers: (userId: string | number, feature: string) =>
      helper.get(`/v1/users/${userId}/features/flags/${feature}`),
    /**
     * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets a feature flag for the same feature in any state other than "allowed".
     * @summary Set feature flag
     * @param {string|number} courseId Canvas Course ID
     * @param {string} feature ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setFeatureFlagCourses: (courseId: string | number, feature: string, body: any) =>
      helper.put(`/v1/courses/${courseId}/features/flags/${feature}`, body),
    /**
     * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets a feature flag for the same feature in any state other than "allowed".
     * @summary Set feature flag
     * @param {string|number} accountId Canvas Account ID
     * @param {string} feature ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setFeatureFlagAccounts: (accountId: string | number, feature: string, body: any) =>
      helper.put(`/v1/accounts/${accountId}/features/flags/${feature}`, body),
    /**
     * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets a feature flag for the same feature in any state other than "allowed".
     * @summary Set feature flag
     * @param {string|number} userId Canvas User ID
     * @param {string} feature ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setFeatureFlagUsers: (userId: string | number, feature: string, body: any) =>
      helper.put(`/v1/users/${userId}/features/flags/${feature}`, body),
    /**
     * Remove feature flag for a given Account, Course, or User. (Note that the flag must be defined on the Account, Course, or User directly.) The object will then inherit the feature flags from a higher account, if any exist. If this flag was 'on' or 'off', then lower-level account flags that were masked by this one will apply again.
     * @summary Remove feature flag
     * @param {string|number} courseId Canvas Course ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    removeFeatureFlagCourses: (courseId: string | number, feature: string) =>
      helper.delete(`/v1/courses/${courseId}/features/flags/${feature}`),
    /**
     * Remove feature flag for a given Account, Course, or User. (Note that the flag must be defined on the Account, Course, or User directly.) The object will then inherit the feature flags from a higher account, if any exist. If this flag was 'on' or 'off', then lower-level account flags that were masked by this one will apply again.
     * @summary Remove feature flag
     * @param {string|number} accountId Canvas Account ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    removeFeatureFlagAccounts: (accountId: string | number, feature: string) =>
      helper.delete(`/v1/accounts/${accountId}/features/flags/${feature}`),
    /**
     * Remove feature flag for a given Account, Course, or User. (Note that the flag must be defined on the Account, Course, or User directly.) The object will then inherit the feature flags from a higher account, if any exist. If this flag was 'on' or 'off', then lower-level account flags that were masked by this one will apply again.
     * @summary Remove feature flag
     * @param {string|number} userId Canvas User ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    removeFeatureFlagUsers: (userId: string | number, feature: string) =>
      helper.delete(`/v1/users/${userId}/features/flags/${feature}`),
  };
}
