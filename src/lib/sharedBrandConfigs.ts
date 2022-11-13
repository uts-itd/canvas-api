import { Runner } from '../runner';

export default function (helper: Runner) {
  return {
    /**
     * Create a SharedBrandConfig, which will give the given brand_config a name and make it available to other users of this account.
     * @summary Share a BrandConfig (Theme)
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    shareBrandconfigTheme: (accountId: string | number, body: any) =>
      helper.post(`/v1/accounts/${accountId}/shared_brand_configs`, body),
    /**
     * Update the specified shared_brand_config with a new name or to point to a new brand_config. Uses same parameters as create.
     * @summary Update a shared theme
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} sharedBrandConfigId Canvas Shared brand_config ID
     * @returns {Promise<any>}
     */
    updateSharedTheme: (accountId: string | number, sharedBrandConfigId: string | number) =>
      helper.put(`/v1/accounts/${accountId}/shared_brand_configs/${sharedBrandConfigId}`),
    /**
     * Delete a SharedBrandConfig, which will unshare it so you nor anyone else in your account will see it as an option to pick from.
     * @summary Un-share a BrandConfig (Theme)
     * @param {string|number} sharedBrandConfigId Canvas Shared brand_config ID
     * @returns {Promise<any>}
     */
    unShareBrandconfigTheme: (sharedBrandConfigId: string | number) =>
      helper.delete(`/v1/shared_brand_configs/${sharedBrandConfigId}`),
  };
}
