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
    describe('UpdateEmailCampaign', function() {
      beforeEach(function() {
        instance = new Brevo.UpdateEmailCampaign();
      });

      it('should create an instance of UpdateEmailCampaign', function() {
        // TODO: update the code to test UpdateEmailCampaign
        expect(instance).to.be.a(Brevo.UpdateEmailCampaign);
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

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
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

      it('should have the property scheduledAt (base name: "scheduledAt")', function() {
        // TODO: update the code to test the property scheduledAt
        expect(instance).to.have.property('scheduledAt');
        // expect(instance.scheduledAt).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property previewText (base name: "previewText")', function() {
        // TODO: update the code to test the property previewText
        expect(instance).to.have.property('previewText');
        // expect(instance.previewText).to.be(expectedValueLiteral);
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

      it('should have the property recipients (base name: "recipients")', function() {
        // TODO: update the code to test the property recipients
        expect(instance).to.have.property('recipients');
        // expect(instance.recipients).to.be(expectedValueLiteral);
      });

      it('should have the property attachmentUrl (base name: "attachmentUrl")', function() {
        // TODO: update the code to test the property attachmentUrl
        expect(instance).to.have.property('attachmentUrl');
        // expect(instance.attachmentUrl).to.be(expectedValueLiteral);
      });

      it('should have the property inlineImageActivation (base name: "inlineImageActivation")', function() {
        // TODO: update the code to test the property inlineImageActivation
        expect(instance).to.have.property('inlineImageActivation');
        // expect(instance.inlineImageActivation).to.be(expectedValueLiteral);
      });

      it('should have the property mirrorActive (base name: "mirrorActive")', function() {
        // TODO: update the code to test the property mirrorActive
        expect(instance).to.have.property('mirrorActive');
        // expect(instance.mirrorActive).to.be(expectedValueLiteral);
      });

      it('should have the property recurring (base name: "recurring")', function() {
        // TODO: update the code to test the property recurring
        expect(instance).to.have.property('recurring');
        // expect(instance.recurring).to.be(expectedValueLiteral);
      });

      it('should have the property footer (base name: "footer")', function() {
        // TODO: update the code to test the property footer
        expect(instance).to.have.property('footer');
        // expect(instance.footer).to.be(expectedValueLiteral);
      });

      it('should have the property header (base name: "header")', function() {
        // TODO: update the code to test the property header
        expect(instance).to.have.property('header');
        // expect(instance.header).to.be(expectedValueLiteral);
      });

      it('should have the property utmCampaign (base name: "utmCampaign")', function() {
        // TODO: update the code to test the property utmCampaign
        expect(instance).to.have.property('utmCampaign');
        // expect(instance.utmCampaign).to.be(expectedValueLiteral);
      });

      it('should have the property params (base name: "params")', function() {
        // TODO: update the code to test the property params
        expect(instance).to.have.property('params');
        // expect(instance.params).to.be(expectedValueLiteral);
      });

      it('should have the property sendAtBestTime (base name: "sendAtBestTime")', function() {
        // TODO: update the code to test the property sendAtBestTime
        expect(instance).to.have.property('sendAtBestTime');
        // expect(instance.sendAtBestTime).to.be(expectedValueLiteral);
      });

      it('should have the property abTesting (base name: "abTesting")', function() {
        // TODO: update the code to test the property abTesting
        expect(instance).to.have.property('abTesting');
        // expect(instance.abTesting).to.be(expectedValueLiteral);
      });

      it('should have the property subjectA (base name: "subjectA")', function() {
        // TODO: update the code to test the property subjectA
        expect(instance).to.have.property('subjectA');
        // expect(instance.subjectA).to.be(expectedValueLiteral);
      });

      it('should have the property subjectB (base name: "subjectB")', function() {
        // TODO: update the code to test the property subjectB
        expect(instance).to.have.property('subjectB');
        // expect(instance.subjectB).to.be(expectedValueLiteral);
      });

      it('should have the property splitRule (base name: "splitRule")', function() {
        // TODO: update the code to test the property splitRule
        expect(instance).to.have.property('splitRule');
        // expect(instance.splitRule).to.be(expectedValueLiteral);
      });

      it('should have the property winnerCriteria (base name: "winnerCriteria")', function() {
        // TODO: update the code to test the property winnerCriteria
        expect(instance).to.have.property('winnerCriteria');
        // expect(instance.winnerCriteria).to.be(expectedValueLiteral);
      });

      it('should have the property winnerDelay (base name: "winnerDelay")', function() {
        // TODO: update the code to test the property winnerDelay
        expect(instance).to.have.property('winnerDelay');
        // expect(instance.winnerDelay).to.be(expectedValueLiteral);
      });

      it('should have the property ipWarmupEnable (base name: "ipWarmupEnable")', function() {
        // TODO: update the code to test the property ipWarmupEnable
        expect(instance).to.have.property('ipWarmupEnable');
        // expect(instance.ipWarmupEnable).to.be(expectedValueLiteral);
      });

      it('should have the property initialQuota (base name: "initialQuota")', function() {
        // TODO: update the code to test the property initialQuota
        expect(instance).to.have.property('initialQuota');
        // expect(instance.initialQuota).to.be(expectedValueLiteral);
      });

      it('should have the property increaseRate (base name: "increaseRate")', function() {
        // TODO: update the code to test the property increaseRate
        expect(instance).to.have.property('increaseRate');
        // expect(instance.increaseRate).to.be(expectedValueLiteral);
      });

      it('should have the property unsubscriptionPageId (base name: "unsubscriptionPageId")', function() {
        // TODO: update the code to test the property unsubscriptionPageId
        expect(instance).to.have.property('unsubscriptionPageId');
        // expect(instance.unsubscriptionPageId).to.be(expectedValueLiteral);
      });

      it('should have the property updateFormId (base name: "updateFormId")', function() {
        // TODO: update the code to test the property updateFormId
        expect(instance).to.have.property('updateFormId');
        // expect(instance.updateFormId).to.be(expectedValueLiteral);
      });

    });
  });

}));
