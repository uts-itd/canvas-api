export = featureFlags;
declare let featureFlags: {
    /**
     * A paginated list of all features that apply to a given Account, Course, or User.
     * @summary List features
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listFeaturesCourses: (courseId: string) => Promise<any>;
    /**
     * A paginated list of all features that apply to a given Account, Course, or User.
     * @summary List features
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listFeaturesAccounts: (accountId: string) => Promise<any>;
    /**
     * A paginated list of all features that apply to a given Account, Course, or User.
     * @summary List features
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listFeaturesUsers: (userId: string) => Promise<any>;
    /**
     * A paginated list of all features that are enabled on a given Account, Course, or User. Only the feature names are returned.
     * @summary List enabled features
     * @param {string} courseId Canvas Course ID
     * @returns {Promise<any>}
     */
    listEnabledFeaturesCourses: (courseId: string) => Promise<any>;
    /**
     * A paginated list of all features that are enabled on a given Account, Course, or User. Only the feature names are returned.
     * @summary List enabled features
     * @param {string} accountId Canvas Account ID
     * @returns {Promise<any>}
     */
    listEnabledFeaturesAccounts: (accountId: string) => Promise<any>;
    /**
     * A paginated list of all features that are enabled on a given Account, Course, or User. Only the feature names are returned.
     * @summary List enabled features
     * @param {string} userId Canvas User ID
     * @returns {Promise<any>}
     */
    listEnabledFeaturesUsers: (userId: string) => Promise<any>;
    /**
     * Get the feature flag that applies to a given Account, Course, or User. The flag may be defined on the object, or it may be inherited from a parent account. You can look at the context_id and context_type of the returned object to determine which is the case. If these fields are missing, then the object is the global Canvas default.
     * @summary Get feature flag
     * @param {string} courseId Canvas Course ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    getFeatureFlagCourses: (courseId: string, feature: string) => Promise<any>;
    /**
     * Get the feature flag that applies to a given Account, Course, or User. The flag may be defined on the object, or it may be inherited from a parent account. You can look at the context_id and context_type of the returned object to determine which is the case. If these fields are missing, then the object is the global Canvas default.
     * @summary Get feature flag
     * @param {string} accountId Canvas Account ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    getFeatureFlagAccounts: (accountId: string, feature: string) => Promise<any>;
    /**
     * Get the feature flag that applies to a given Account, Course, or User. The flag may be defined on the object, or it may be inherited from a parent account. You can look at the context_id and context_type of the returned object to determine which is the case. If these fields are missing, then the object is the global Canvas default.
     * @summary Get feature flag
     * @param {string} userId Canvas User ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    getFeatureFlagUsers: (userId: string, feature: string) => Promise<any>;
    /**
     * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets a feature flag for the same feature in any state other than "allowed".
     * @summary Set feature flag
     * @param {string} courseId Canvas Course ID
     * @param {string} feature ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setFeatureFlagCourses: (courseId: string, feature: string, body: any) => Promise<any>;
    /**
     * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets a feature flag for the same feature in any state other than "allowed".
     * @summary Set feature flag
     * @param {string} accountId Canvas Account ID
     * @param {string} feature ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setFeatureFlagAccounts: (accountId: string, feature: string, body: any) => Promise<any>;
    /**
     * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets a feature flag for the same feature in any state other than "allowed".
     * @summary Set feature flag
     * @param {string} userId Canvas User ID
     * @param {string} feature ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    setFeatureFlagUsers: (userId: string, feature: string, body: any) => Promise<any>;
    /**
     * Remove feature flag for a given Account, Course, or User. (Note that the flag must be defined on the Account, Course, or User directly.) The object will then inherit the feature flags from a higher account, if any exist. If this flag was 'on' or 'off', then lower-level account flags that were masked by this one will apply again.
     * @summary Remove feature flag
     * @param {string} courseId Canvas Course ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    removeFeatureFlagCourses: (courseId: string, feature: string) => Promise<any>;
    /**
     * Remove feature flag for a given Account, Course, or User. (Note that the flag must be defined on the Account, Course, or User directly.) The object will then inherit the feature flags from a higher account, if any exist. If this flag was 'on' or 'off', then lower-level account flags that were masked by this one will apply again.
     * @summary Remove feature flag
     * @param {string} accountId Canvas Account ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    removeFeatureFlagAccounts: (accountId: string, feature: string) => Promise<any>;
    /**
     * Remove feature flag for a given Account, Course, or User. (Note that the flag must be defined on the Account, Course, or User directly.) The object will then inherit the feature flags from a higher account, if any exist. If this flag was 'on' or 'off', then lower-level account flags that were masked by this one will apply again.
     * @summary Remove feature flag
     * @param {string} userId Canvas User ID
     * @param {string} feature ID
     * @returns {Promise<any>}
     */
    removeFeatureFlagUsers: (userId: string, feature: string) => Promise<any>;
};
