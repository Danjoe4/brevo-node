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
    describe('GetChildInfoStatistics', function() {
      beforeEach(function() {
        instance = new Brevo.GetChildInfoStatistics();
      });

      it('should create an instance of GetChildInfoStatistics', function() {
        // TODO: update the code to test GetChildInfoStatistics
        expect(instance).to.be.a(Brevo.GetChildInfoStatistics);
      });

      it('should have the property previousMonthTotalSent (base name: "previousMonthTotalSent")', function() {
        // TODO: update the code to test the property previousMonthTotalSent
        expect(instance).to.have.property('previousMonthTotalSent');
        // expect(instance.previousMonthTotalSent).to.be(expectedValueLiteral);
      });

      it('should have the property currentMonthTotalSent (base name: "currentMonthTotalSent")', function() {
        // TODO: update the code to test the property currentMonthTotalSent
        expect(instance).to.have.property('currentMonthTotalSent');
        // expect(instance.currentMonthTotalSent).to.be(expectedValueLiteral);
      });

      it('should have the property totalSent (base name: "totalSent")', function() {
        // TODO: update the code to test the property totalSent
        expect(instance).to.have.property('totalSent');
        // expect(instance.totalSent).to.be(expectedValueLiteral);
      });

    });
  });

}));
