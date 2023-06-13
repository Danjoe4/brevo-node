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
    root.Brevo.MasterDetailsResponseBillingInfoAddress = factory(root.Brevo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MasterDetailsResponseBillingInfoAddress model module.
   * @module model/MasterDetailsResponseBillingInfoAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MasterDetailsResponseBillingInfoAddress</code>.
   * Billing address of master account
   * @alias module:model/MasterDetailsResponseBillingInfoAddress
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MasterDetailsResponseBillingInfoAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MasterDetailsResponseBillingInfoAddress} obj Optional instance to populate.
   * @return {module:model/MasterDetailsResponseBillingInfoAddress} The populated <code>MasterDetailsResponseBillingInfoAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('streetAddress'))
        obj.streetAddress = ApiClient.convertToType(data['streetAddress'], 'String');
      if (data.hasOwnProperty('locality'))
        obj.locality = ApiClient.convertToType(data['locality'], 'String');
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = ApiClient.convertToType(data['postalCode'], 'String');
      if (data.hasOwnProperty('stateCode'))
        obj.stateCode = ApiClient.convertToType(data['stateCode'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
    }
    return obj;
  }

  /**
   * Street address
   * @member {String} streetAddress
   */
  exports.prototype.streetAddress = undefined;

  /**
   * Locality
   * @member {String} locality
   */
  exports.prototype.locality = undefined;

  /**
   * Postal code
   * @member {String} postalCode
   */
  exports.prototype.postalCode = undefined;

  /**
   * State code
   * @member {String} stateCode
   */
  exports.prototype.stateCode = undefined;

  /**
   * Country code
   * @member {String} countryCode
   */
  exports.prototype.countryCode = undefined;


  return exports;

}));
