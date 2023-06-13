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
    root.Brevo.NoteData = factory(root.Brevo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NoteData model module.
   * @module model/NoteData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NoteData</code>.
   * Note data to be saved
   * @alias module:model/NoteData
   * @class
   * @param text {String} Text content of a note
   */
  var exports = function(text) {
    this.text = text;
  };

  /**
   * Constructs a <code>NoteData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NoteData} obj Optional instance to populate.
   * @return {module:model/NoteData} The populated <code>NoteData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('contactIds'))
        obj.contactIds = ApiClient.convertToType(data['contactIds'], ['Number']);
      if (data.hasOwnProperty('dealIds'))
        obj.dealIds = ApiClient.convertToType(data['dealIds'], ['String']);
      if (data.hasOwnProperty('companyIds'))
        obj.companyIds = ApiClient.convertToType(data['companyIds'], ['String']);
    }
    return obj;
  }

  /**
   * Text content of a note
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * Contact Ids linked to a note
   * @member {Array.<Number>} contactIds
   */
  exports.prototype.contactIds = undefined;

  /**
   * Deal Ids linked to a note
   * @member {Array.<String>} dealIds
   */
  exports.prototype.dealIds = undefined;

  /**
   * Company Ids linked to a note
   * @member {Array.<String>} companyIds
   */
  exports.prototype.companyIds = undefined;


  return exports;

}));
