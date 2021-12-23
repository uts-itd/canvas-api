var helper = require('../helper');
var conversations = {
    /**
     * Returns the paginated list of conversations for the current user, most recent ones first.
     * @summary List conversations
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    listConversations: function (query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/conversations", query);
    },
    /**
     * Create a new conversation with one or more recipients. If there is already an existing private conversation with the given recipients, it will be reused.
     * @summary Create a conversation
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    createConversation: function (body) { return helper.post("/v1/conversations", body); },
    /**
     * Returns any currently running conversation batches for the current user. Conversation batches are created when a bulk private message is sent asynchronously (see the mode argument to the {api:ConversationsController#create create API action}).
     * @summary Get running batches
     * @returns {Promise<any>}
     */
    getRunningBatches: function () { return helper.get("/v1/conversations/batches"); },
    /**
     * Returns information for a single conversation for the current user. Response includes all fields that are present in the list/index action as well as messages and extended participant information.
     * @summary Get a single conversation
     * @param {string} conversationId Canvas Conversation ID
     * @param {Object} query JSON query parameters
     * @returns {Promise<any>}
     */
    getSingleConversation: function (conversationId, query) {
        if (query === void 0) { query = ''; }
        return helper.get("/v1/conversations/" + conversationId, query);
    },
    /**
     * Updates attributes for a single conversation.
     * @summary Edit a conversation
     * @param {string} conversationId Canvas Conversation ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    editConversation: function (conversationId, body) { return helper.put("/v1/conversations/" + conversationId, body); },
    /**
     * Mark all conversations as read.
     * @summary Mark all as read
     * @returns {Promise<any>}
     */
    markAllAsRead: function () { return helper.post("/v1/conversations/mark_all_as_read"); },
    /**
     * Delete this conversation and its messages. Note that this only deletes this user's view of the conversation. Response includes same fields as UPDATE action
     * @summary Delete a conversation
     * @param {string} conversationId Canvas Conversation ID
     * @returns {Promise<any>}
     */
    deleteConversation: function (conversationId) { return helper.delete("/v1/conversations/" + conversationId); },
    /**
     * Add recipients to an existing group conversation. Response is similar to the GET/show action, except that only includes the latest message (e.g. "joe was added to the conversation by bob")
     * @summary Add recipients
     * @param {string} conversationId Canvas Conversation ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    addRecipients: function (conversationId, body) { return helper.post("/v1/conversations/" + conversationId + "/add_recipients", body); },
    /**
     * Add a message to an existing conversation. Response is similar to the GET/show action, except that only includes the latest message (i.e. what we just sent) An array of user ids. Defaults to all of the current conversation recipients. To explicitly send a message to no other recipients, this array should consist of the logged-in user id. An array of message ids from this conversation to send to recipients of the new message. Recipients who already had a copy of included messages will not be affected.
     * @summary Add a message
     * @param {string} conversationId Canvas Conversation ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    addMessage: function (conversationId, body) { return helper.post("/v1/conversations/" + conversationId + "/add_message", body); },
    /**
     * Delete messages from this conversation. Note that this only affects this user's view of the conversation. If all messages are deleted, the conversation will be as well (equivalent to DELETE)
     * @summary Delete a message
     * @param {string} conversationId Canvas Conversation ID
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    deleteMessage: function (conversationId, body) { return helper.post("/v1/conversations/" + conversationId + "/remove_messages", body); },
    /**
     * Perform a change on a set of conversations. Operates asynchronously; use the {api:ProgressController#show progress endpoint} to query the status of an operation.
     * @summary Batch update conversations
     * @param {Object} body JSON form fields
     * @returns {Promise<any>}
     */
    batchUpdateConversations: function (body) { return helper.put("/v1/conversations", body); },
    /**
     * Deprecated, see the {api:SearchController#recipients Find recipients endpoint} in the Search API
     * @summary Find recipients
     * @returns {Promise<any>}
     */
    findRecipients: function () { return helper.get("/v1/conversations/find_recipients"); },
    /**
     * Get the number of unread conversations for the current user
     * @summary Unread count
     * @returns {Promise<any>}
     */
    unreadCount: function () { return helper.get("/v1/conversations/unread_count"); },
};
module.exports = conversations;
