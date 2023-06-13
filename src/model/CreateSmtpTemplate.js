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
    define(['ApiClient', 'model/CreateSmtpTemplateSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateSmtpTemplateSender'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.CreateSmtpTemplate = factory(root.Brevo.ApiClient, root.Brevo.CreateSmtpTemplateSender);
  }
}(this, function(ApiClient, CreateSmtpTemplateSender) {
  'use strict';

  /**
   * The CreateSmtpTemplate model module.
   * @module model/CreateSmtpTemplate
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateSmtpTemplate</code>.
   * @alias module:model/CreateSmtpTemplate
   * @class
   * @param sender {module:model/CreateSmtpTemplateSender} 
   * @param templateName {String} Name of the template
   * @param subject {String} Subject of the template
   */
  var exports = function(sender, templateName, subject) {
    this.sender = sender;
    this.templateName = templateName;
    this.subject = subject;
  };

  /**
   * Constructs a <code>CreateSmtpTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSmtpTemplate} obj Optional instance to populate.
   * @return {module:model/CreateSmtpTemplate} The populated <code>CreateSmtpTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('sender'))
        obj.sender = CreateSmtpTemplateSender.constructFromObject(data['sender']);
      if (data.hasOwnProperty('templateName'))
        obj.templateName = ApiClient.convertToType(data['templateName'], 'String');
      if (data.hasOwnProperty('htmlContent'))
        obj.htmlContent = ApiClient.convertToType(data['htmlContent'], 'String');
      if (data.hasOwnProperty('htmlUrl'))
        obj.htmlUrl = ApiClient.convertToType(data['htmlUrl'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('replyTo'))
        obj.replyTo = ApiClient.convertToType(data['replyTo'], 'String');
      if (data.hasOwnProperty('toField'))
        obj.toField = ApiClient.convertToType(data['toField'], 'String');
      if (data.hasOwnProperty('attachmentUrl'))
        obj.attachmentUrl = ApiClient.convertToType(data['attachmentUrl'], 'String');
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
    }
    return obj;
  }

  /**
   * Tag of the template
   * @member {String} tag
   */
  exports.prototype.tag = undefined;

  /**
   * @member {module:model/CreateSmtpTemplateSender} sender
   */
  exports.prototype.sender = undefined;

  /**
   * Name of the template
   * @member {String} templateName
   */
  exports.prototype.templateName = undefined;

  /**
   * Body of the message (HTML version). The field must have more than 10 characters. REQUIRED if htmlUrl is empty
   * @member {String} htmlContent
   */
  exports.prototype.htmlContent = undefined;

  /**
   * Url which contents the body of the email message. REQUIRED if htmlContent is empty
   * @member {String} htmlUrl
   */
  exports.prototype.htmlUrl = undefined;

  /**
   * Subject of the template
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * Email on which campaign recipients will be able to reply to
   * @member {String} replyTo
   */
  exports.prototype.replyTo = undefined;

  /**
   * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your Brevo account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
   * @member {String} toField
   */
  exports.prototype.toField = undefined;

  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @member {String} attachmentUrl
   */
  exports.prototype.attachmentUrl = undefined;

  /**
   * Status of template. isActive = true means template is active and isActive = false means template is inactive
   * @member {Boolean} isActive
   */
  exports.prototype.isActive = undefined;


  return exports;

}));
