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
    define(['ApiClient', 'model/MasterDetailsResponsePlanInfoFeatures'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MasterDetailsResponsePlanInfoFeatures'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.MasterDetailsResponsePlanInfo = factory(root.Brevo.ApiClient, root.Brevo.MasterDetailsResponsePlanInfoFeatures);
  }
}(this, function(ApiClient, MasterDetailsResponsePlanInfoFeatures) {
  'use strict';

  /**
   * The MasterDetailsResponsePlanInfo model module.
   * @module model/MasterDetailsResponsePlanInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MasterDetailsResponsePlanInfo</code>.
   * Plan details
   * @alias module:model/MasterDetailsResponsePlanInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MasterDetailsResponsePlanInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MasterDetailsResponsePlanInfo} obj Optional instance to populate.
   * @return {module:model/MasterDetailsResponsePlanInfo} The populated <code>MasterDetailsResponsePlanInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('nextBillingAt'))
        obj.nextBillingAt = ApiClient.convertToType(data['nextBillingAt'], 'Number');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('planPeriod'))
        obj.planPeriod = ApiClient.convertToType(data['planPeriod'], 'String');
      if (data.hasOwnProperty('subAccounts'))
        obj.subAccounts = ApiClient.convertToType(data['subAccounts'], 'Number');
      if (data.hasOwnProperty('features'))
        obj.features = ApiClient.convertToType(data['features'], [MasterDetailsResponsePlanInfoFeatures]);
    }
    return obj;
  }

  /**
   * Plan currency
   * @member {String} currencyCode
   */
  exports.prototype.currencyCode = undefined;

  /**
   * Timestamp of next billing date
   * @member {Number} nextBillingAt
   */
  exports.prototype.nextBillingAt = undefined;

  /**
   * Plan amount
   * @member {Number} price
   */
  exports.prototype.price = undefined;

  /**
   * Plan period type
   * @member {module:model/MasterDetailsResponsePlanInfo.PlanPeriodEnum} planPeriod
   */
  exports.prototype.planPeriod = undefined;

  /**
   * Number of sub-accounts
   * @member {Number} subAccounts
   */
  exports.prototype.subAccounts = undefined;

  /**
   * List of provided features in the plan
   * @member {Array.<module:model/MasterDetailsResponsePlanInfoFeatures>} features
   */
  exports.prototype.features = undefined;



  /**
   * Allowed values for the <code>planPeriod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PlanPeriodEnum = {
    /**
     * value: "month"
     * @const
     */
    month: "month",

    /**
     * value: "year"
     * @const
     */
    year: "year"
  };

  return exports;

}));
