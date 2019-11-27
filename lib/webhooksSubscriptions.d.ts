export = webhooksSubscriptions;
declare let webhooksSubscriptions: {
    /**
     * Creates a webook subscription for the specified event type and context.
     * @summary Create a Webhook Subscription
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createWebhookSubscription: (body: any) => Promise<any>;
    /**
     *
     * @summary Delete a Webhook Subscription
     * @param {string} subscriptionId Canvas Subscription ID
     * @returns {Promise<any>}
     */
    deleteWebhookSubscription: (subscriptionId: string) => Promise<any>;
    /**
     *
     * @summary Show a single Webhook Subscription
     * @param {string} subscriptionId Canvas Subscription ID
     * @returns {Promise<any>}
     */
    showSingleWebhookSubscription: (subscriptionId: string) => Promise<any>;
    /**
     * This endpoint uses the same parameters as the create endpoint
     * @summary Update a Webhook Subscription
     * @param {string} subscriptionId Canvas Subscription ID
     * @returns {Promise<any>}
     */
    updateWebhookSubscription: (subscriptionId: string) => Promise<any>;
    /**
     * This endpoint returns a paginated list with a default limit of 100 items per result set. You can retrieve the next result set by setting a 'StartKey' header in your next request with the value of the 'EndKey' header in the response. Example use of a 'StartKey' header object:  { "Id":"71d6dfba-0547-477d-b41d-db8cb528c6d1","DeveloperKey":"10000000000001" }
     * @summary List all Webhook Subscription for a tool proxy
     * @returns {Promise<any>}
     */
    listAllWebhookSubscriptionForToolProxy: () => Promise<any>;
};
