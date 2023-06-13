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
    define(['ApiClient', 'model/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.OrderBatch = factory(root.Brevo.ApiClient, root.Brevo.Order);
  }
}(this, function(ApiClient, Order) {
  'use strict';

  /**
   * The OrderBatch model module.
   * @module model/OrderBatch
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderBatch</code>.
   * @alias module:model/OrderBatch
   * @class
   * @param orders {Array.<module:model/Order>} array of order objects
   */
  var exports = function(orders) {
    this.orders = orders;
  };

  /**
   * Constructs a <code>OrderBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderBatch} obj Optional instance to populate.
   * @return {module:model/OrderBatch} The populated <code>OrderBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('orders'))
        obj.orders = ApiClient.convertToType(data['orders'], [Order]);
      if (data.hasOwnProperty('notifyUrl'))
        obj.notifyUrl = ApiClient.convertToType(data['notifyUrl'], 'String');
    }
    return obj;
  }

  /**
   * array of order objects
   * @member {Array.<module:model/Order>} orders
   */
  exports.prototype.orders = undefined;

  /**
   * Notify Url provided by client to get the status of batch request
   * @member {String} notifyUrl
   */
  exports.prototype.notifyUrl = undefined;


  return exports;

}));
