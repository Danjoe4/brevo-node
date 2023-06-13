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
    root.Brevo.GetCategoryDetails = factory(root.Brevo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCategoryDetails model module.
   * @module model/GetCategoryDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetCategoryDetails</code>.
   * @alias module:model/GetCategoryDetails
   * @class
   * @param id {String} Category ID for which you requested the details
   * @param name {String} Name of the category for which you requested the details
   * @param createdAt {String} Creation UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {String} Last modification UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
   */
  var exports = function(id, name, createdAt, modifiedAt) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
  };

  /**
   * Constructs a <code>GetCategoryDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCategoryDetails} obj Optional instance to populate.
   * @return {module:model/GetCategoryDetails} The populated <code>GetCategoryDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('modifiedAt'))
        obj.modifiedAt = ApiClient.convertToType(data['modifiedAt'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('isDeleted'))
        obj.isDeleted = ApiClient.convertToType(data['isDeleted'], 'Boolean');
    }
    return obj;
  }

  /**
   * Category ID for which you requested the details
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Name of the category for which you requested the details
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Creation UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Last modification UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {String} modifiedAt
   */
  exports.prototype.modifiedAt = undefined;

  /**
   * URL to the category
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * category deleted from the shop's database
   * @member {Boolean} isDeleted
   */
  exports.prototype.isDeleted = undefined;


  return exports;

}));
