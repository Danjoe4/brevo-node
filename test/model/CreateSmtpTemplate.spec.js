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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Brevo);
  }
}(this, function(expect, Brevo) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CreateSmtpTemplate', function() {
      beforeEach(function() {
        instance = new Brevo.CreateSmtpTemplate();
      });

      it('should create an instance of CreateSmtpTemplate', function() {
        // TODO: update the code to test CreateSmtpTemplate
        expect(instance).to.be.a(Brevo.CreateSmtpTemplate);
      });

      it('should have the property tag (base name: "tag")', function() {
        // TODO: update the code to test the property tag
        expect(instance).to.have.property('tag');
        // expect(instance.tag).to.be(expectedValueLiteral);
      });

      it('should have the property sender (base name: "sender")', function() {
        // TODO: update the code to test the property sender
        expect(instance).to.have.property('sender');
        // expect(instance.sender).to.be(expectedValueLiteral);
      });

      it('should have the property templateName (base name: "templateName")', function() {
        // TODO: update the code to test the property templateName
        expect(instance).to.have.property('templateName');
        // expect(instance.templateName).to.be(expectedValueLiteral);
      });

      it('should have the property htmlContent (base name: "htmlContent")', function() {
        // TODO: update the code to test the property htmlContent
        expect(instance).to.have.property('htmlContent');
        // expect(instance.htmlContent).to.be(expectedValueLiteral);
      });

      it('should have the property htmlUrl (base name: "htmlUrl")', function() {
        // TODO: update the code to test the property htmlUrl
        expect(instance).to.have.property('htmlUrl');
        // expect(instance.htmlUrl).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property replyTo (base name: "replyTo")', function() {
        // TODO: update the code to test the property replyTo
        expect(instance).to.have.property('replyTo');
        // expect(instance.replyTo).to.be(expectedValueLiteral);
      });

      it('should have the property toField (base name: "toField")', function() {
        // TODO: update the code to test the property toField
        expect(instance).to.have.property('toField');
        // expect(instance.toField).to.be(expectedValueLiteral);
      });

      it('should have the property attachmentUrl (base name: "attachmentUrl")', function() {
        // TODO: update the code to test the property attachmentUrl
        expect(instance).to.have.property('attachmentUrl');
        // expect(instance.attachmentUrl).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "isActive")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

    });
  });

}));
