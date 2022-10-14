import { Helper } from '../helper';
export default function (helper: Helper): {
    /**
     * Create a SharedBrandConfig, which will give the given brand_config a name and make it available to other users of this account.
     * @summary Share a BrandConfig (Theme)
     * @param {string|number} accountId Canvas Account ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    shareBrandconfigTheme: (accountId: string | number, body: any) => Promise<any>;
    /**
     * Update the specified shared_brand_config with a new name or to point to a new brand_config. Uses same parameters as create.
     * @summary Update a shared theme
     * @param {string|number} accountId Canvas Account ID
     * @param {string|number} sharedBrandConfigId Canvas Shared brand_config ID
     * @returns {Promise<any>}
     */
    updateSharedTheme: (accountId: string | number, sharedBrandConfigId: string | number) => Promise<any>;
    /**
     * Delete a SharedBrandConfig, which will unshare it so you nor anyone else in your account will see it as an option to pick from.
     * @summary Un-share a BrandConfig (Theme)
     * @param {string|number} sharedBrandConfigId Canvas Shared brand_config ID
     * @returns {Promise<any>}
     */
    unShareBrandconfigTheme: (sharedBrandConfigId: string | number) => Promise<any>;
};
