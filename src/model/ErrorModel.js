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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.ErrorModel = factory(root.Brevo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ErrorModel model module.
   * @module model/ErrorModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ErrorModel</code>.
   * @alias module:model/ErrorModel
   * @class
   * @param code {module:model/ErrorModel.CodeEnum} Error code displayed in case of a failure
   * @param message {String} Readable message associated to the failure
   */
  var exports = function(code, message) {
    this.code = code;
    this.message = message;
  };

  /**
   * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorModel} obj Optional instance to populate.
   * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }

  /**
   * Error code displayed in case of a failure
   * @member {module:model/ErrorModel.CodeEnum} code
   */
  exports.prototype.code = undefined;

  /**
   * Readable message associated to the failure
   * @member {String} message
   */
  exports.prototype.message = undefined;



  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "invalid_parameter"
     * @const
     */
    invalidParameter: "invalid_parameter",

    /**
     * value: "missing_parameter"
     * @const
     */
    missingParameter: "missing_parameter",

    /**
     * value: "out_of_range"
     * @const
     */
    outOfRange: "out_of_range",

    /**
     * value: "campaign_processing"
     * @const
     */
    campaignProcessing: "campaign_processing",

    /**
     * value: "campaign_sent"
     * @const
     */
    campaignSent: "campaign_sent",

    /**
     * value: "document_not_found"
     * @const
     */
    documentNotFound: "document_not_found",

    /**
     * value: "reseller_permission_denied"
     * @const
     */
    resellerPermissionDenied: "reseller_permission_denied",

    /**
     * value: "not_enough_credits"
     * @const
     */
    notEnoughCredits: "not_enough_credits",

    /**
     * value: "permission_denied"
     * @const
     */
    permissionDenied: "permission_denied",

    /**
     * value: "duplicate_parameter"
     * @const
     */
    duplicateParameter: "duplicate_parameter",

    /**
     * value: "duplicate_request"
     * @const
     */
    duplicateRequest: "duplicate_request",

    /**
     * value: "method_not_allowed"
     * @const
     */
    methodNotAllowed: "method_not_allowed",

    /**
     * value: "unauthorized"
     * @const
     */
    unauthorized: "unauthorized",

    /**
     * value: "account_under_validation"
     * @const
     */
    accountUnderValidation: "account_under_validation",

    /**
     * value: "not_acceptable"
     * @const
     */
    notAcceptable: "not_acceptable",

    /**
     * value: "bad_request"
     * @const
     */
    badRequest: "bad_request"
  };

  return exports;

}));
