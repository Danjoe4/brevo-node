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
    define(['ApiClient', 'model/GetDomainsListDomains'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetDomainsListDomains'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.GetDomainsList = factory(root.Brevo.ApiClient, root.Brevo.GetDomainsListDomains);
  }
}(this, function(ApiClient, GetDomainsListDomains) {
  'use strict';

  /**
   * The GetDomainsList model module.
   * @module model/GetDomainsList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetDomainsList</code>.
   * @alias module:model/GetDomainsList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetDomainsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDomainsList} obj Optional instance to populate.
   * @return {module:model/GetDomainsList} The populated <code>GetDomainsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('domains'))
        obj.domains = ApiClient.convertToType(data['domains'], [GetDomainsListDomains]);
    }
    return obj;
  }

  /**
   * List of the domains available in your account
   * @member {Array.<module:model/GetDomainsListDomains>} domains
   */
  exports.prototype.domains = undefined;


  return exports;

}));
