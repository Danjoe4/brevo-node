/*
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConversationsMessageFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationsMessageFile'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.ConversationsMessage = factory(root.Brevo.ApiClient, root.Brevo.ConversationsMessageFile);
  }
}(this, function(ApiClient, ConversationsMessageFile) {
  'use strict';

  /**
   * The ConversationsMessage model module.
   * @module model/ConversationsMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ConversationsMessage</code>.
   * a Conversations message
   * @alias module:model/ConversationsMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationsMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConversationsMessage} obj Optional instance to populate.
   * @return {module:model/ConversationsMessage} The populated <code>ConversationsMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('visitorId'))
        obj.visitorId = ApiClient.convertToType(data['visitorId'], 'String');
      if (data.hasOwnProperty('agentId'))
        obj.agentId = ApiClient.convertToType(data['agentId'], 'String');
      if (data.hasOwnProperty('agentName'))
        obj.agentName = ApiClient.convertToType(data['agentName'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Number');
      if (data.hasOwnProperty('isPushed'))
        obj.isPushed = ApiClient.convertToType(data['isPushed'], 'Boolean');
      if (data.hasOwnProperty('receivedFrom'))
        obj.receivedFrom = ApiClient.convertToType(data['receivedFrom'], 'String');
      if (data.hasOwnProperty('file'))
        obj.file = ConversationsMessageFile.constructFromObject(data['file']);
    }
    return obj;
  }

  /**
   * Message ID. It can be used for further manipulations with the message.
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * `\"agent\"` for agents’ messages, `\"visitor\"` for visitors’ messages.
   * @member {module:model/ConversationsMessage.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Message text or name of the attached file
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * visitor’s ID
   * @member {String} visitorId
   */
  exports.prototype.visitorId = undefined;

  /**
   * ID of the agent on whose behalf the message was sent (only in messages sent by an agent).
   * @member {String} agentId
   */
  exports.prototype.agentId = undefined;

  /**
   * Agent’s name as displayed to the visitor. Only in the messages sent by an agent.
   * @member {String} agentName
   */
  exports.prototype.agentName = undefined;

  /**
   * Timestamp in milliseconds.
   * @member {Number} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * `true` for pushed messages
   * @member {Boolean} isPushed
   */
  exports.prototype.isPushed = undefined;

  /**
   * In two-way integrations, messages sent via REST API can be marked with receivedFrom property and then filtered out when received in a webhook to avoid infinite loop.
   * @member {String} receivedFrom
   */
  exports.prototype.receivedFrom = undefined;

  /**
   * @member {module:model/ConversationsMessageFile} file
   */
  exports.prototype.file = undefined;



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "agent"
     * @const
     */
    agent: "agent",

    /**
     * value: "visitor"
     * @const
     */
    visitor: "visitor"
  };

  return exports;

}));
