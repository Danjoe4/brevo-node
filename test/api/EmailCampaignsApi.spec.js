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

  beforeEach(function() {
    instance = new Brevo.EmailCampaignsApi();
  });

  describe('(package)', function() {
    describe('EmailCampaignsApi', function() {
      describe('createEmailCampaign', function() {
        it('should call createEmailCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for createEmailCampaign call and complete the assertions
          /*
          var emailCampaigns = new Brevo.CreateEmailCampaign();
          emailCampaigns.tag = "Newsletter";
          emailCampaigns.sender = new Brevo.CreateEmailCampaignSender();
          emailCampaigns.sender.name = "Mary from MyShop";
          emailCampaigns.sender.email = "newsletter@myshop.com";
          emailCampaigns.sender.id = 3;
          emailCampaigns.name = "Newsletter - May 2017";
          emailCampaigns.htmlContent = "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>";
          emailCampaigns.htmlUrl = "https://html.domain.com";
          emailCampaigns.templateId = "0";
          emailCampaigns.scheduledAt = "2017-06-01T12:30:00+02:00";
          emailCampaigns.subject = "Discover the New Collection !";
          emailCampaigns.previewText = "Thanks for your order!";
          emailCampaigns.replyTo = "support@myshop.com";
          emailCampaigns.toField = "{FNAME} {LNAME}";
          emailCampaigns.recipients = new Brevo.CreateEmailCampaignRecipients();
          emailCampaigns.recipients.exclusionListIds = [8];
          emailCampaigns.recipients.listIds = [32];
          emailCampaigns.recipients.segmentIds = [23];
          emailCampaigns.attachmentUrl = "https://attachment.domain.com";
          emailCampaigns.inlineImageActivation = true;
          emailCampaigns.mirrorActive = true;
          emailCampaigns.footer = "[DEFAULT_FOOTER]";
          emailCampaigns.header = "[DEFAULT_HEADER]";
          emailCampaigns.utmCampaign = "NL_05_2017";
          emailCampaigns.params = {"FNAME":"Joe","LNAME":"Doe"};
          emailCampaigns.sendAtBestTime = true;
          emailCampaigns.abTesting = true;
          emailCampaigns.subjectA = "Discover the New Collection!";
          emailCampaigns.subjectB = "Want to discover the New Collection?";
          emailCampaigns.splitRule = 50;
          emailCampaigns.winnerCriteria = "open";
          emailCampaigns.winnerDelay = 50;
          emailCampaigns.ipWarmupEnable = true;
          emailCampaigns.initialQuota = 3000;
          emailCampaigns.increaseRate = 70;
          emailCampaigns.unsubscriptionPageId = "62cbb7fabbe85021021aac52";
          emailCampaigns.updateFormId = "6313436b9ad40e23b371d095";

          instance.createEmailCampaign(emailCampaigns).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.CreateModel);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(122);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteEmailCampaign', function() {
        it('should call deleteEmailCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteEmailCampaign call
          /*
          var campaignId = 789;

          instance.deleteEmailCampaign(campaignId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('emailExportRecipients', function() {
        it('should call emailExportRecipients successfully', function(done) {
          // TODO: uncomment, update parameter values for emailExportRecipients call and complete the assertions
          /*
          var campaignId = 789;
          var opts = {};
          opts.recipientExport = new Brevo.EmailExportRecipients();
          opts.recipientExport.notifyURL = "http://requestb.in/173lyyx1";
          opts.recipientExport.recipientsType = "openers";

          instance.emailExportRecipients(campaignId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.CreatedProcessId);
            expect(data.processId).to.be.a('number');
            expect(data.processId).to.be(78);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAbTestCampaignResult', function() {
        it('should call getAbTestCampaignResult successfully', function(done) {
          // TODO: uncomment, update parameter values for getAbTestCampaignResult call and complete the assertions
          /*
          var campaignId = 789;

          instance.getAbTestCampaignResult(campaignId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.AbTestCampaignResult);
            expect(data.winningVersion).to.be.a('string');
            expect(data.winningVersion).to.be("A");
            expect(data.winningCriteria).to.be.a('string');
            expect(data.winningCriteria).to.be("Open");
            expect(data.winningSubjectLine).to.be.a('string');
            expect(data.winningSubjectLine).to.be("Subject Line A");
            expect(data.openRate).to.be.a('string');
            expect(data.openRate).to.be("70%");
            expect(data.clickRate).to.be.a('string');
            expect(data.clickRate).to.be("70%");
            expect(data.winningVersionRate).to.be.a('string');
            expect(data.winningVersionRate).to.be("70%");
            expect(data.statistics).to.be.a(Brevo.AbTestCampaignResultStatistics);
                  expect(data.statistics.openers).to.be.a(Brevo.AbTestVersionStats);
                    expect(data.statistics.openers.versionA).to.be.a('string');
                expect(data.statistics.openers.versionA).to.be("50%");
                expect(data.statistics.openers.versionB).to.be.a('string');
                expect(data.statistics.openers.versionB).to.be("50%");
              expect(data.statistics.clicks).to.be.a(Brevo.AbTestVersionStats);
                    expect(data.statistics.clicks.versionA).to.be.a('string');
                expect(data.statistics.clicks.versionA).to.be("50%");
                expect(data.statistics.clicks.versionB).to.be.a('string');
                expect(data.statistics.clicks.versionB).to.be("50%");
              expect(data.statistics.unsubscribed).to.be.a(Brevo.AbTestVersionStats);
                    expect(data.statistics.unsubscribed.versionA).to.be.a('string');
                expect(data.statistics.unsubscribed.versionA).to.be("50%");
                expect(data.statistics.unsubscribed.versionB).to.be.a('string');
                expect(data.statistics.unsubscribed.versionB).to.be("50%");
              expect(data.statistics.hardBounces).to.be.a(Brevo.AbTestVersionStats);
                    expect(data.statistics.hardBounces.versionA).to.be.a('string');
                expect(data.statistics.hardBounces.versionA).to.be("50%");
                expect(data.statistics.hardBounces.versionB).to.be.a('string');
                expect(data.statistics.hardBounces.versionB).to.be("50%");
              expect(data.statistics.softBounces).to.be.a(Brevo.AbTestVersionStats);
                    expect(data.statistics.softBounces.versionA).to.be.a('string');
                expect(data.statistics.softBounces.versionA).to.be("50%");
                expect(data.statistics.softBounces.versionB).to.be.a('string');
                expect(data.statistics.softBounces.versionB).to.be("50%");
              expect(data.statistics.complaints).to.be.a(Brevo.AbTestVersionStats);
                    expect(data.statistics.complaints.versionA).to.be.a('string');
                expect(data.statistics.complaints.versionA).to.be("50%");
                expect(data.statistics.complaints.versionB).to.be.a('string');
                expect(data.statistics.complaints.versionB).to.be("50%");
            expect(data.clickedLinks).to.be.a(Brevo.AbTestCampaignResultClickedLinks);
                  expect(data.clickedLinks.versionA).to.be.a(Brevo.AbTestVersionClicks);
                  expect(data.clickedLinks.versionB).to.be.a(Brevo.AbTestVersionClicks);
      

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getEmailCampaign', function() {
        it('should call getEmailCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for getEmailCampaign call and complete the assertions
          /*
          var campaignId = 789;
          var opts = {};
          opts.statistics = "statistics_example";

          instance.getEmailCampaign(campaignId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.GetEmailCampaign);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(12);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("EN - Sales Summer 2017");
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("20% OFF for 2017 Summer Sales");
            expect(data.previewText).to.be.a('string');
            expect(data.previewText).to.be("Thanks for your order!");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("classic");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("sent");
            expect(data.scheduledAt).to.be.a('string');
            expect(data.scheduledAt).to.be("2017-06-01T12:30:00Z");
            expect(data.abTesting).to.be.a('boolean');
            expect(data.abTesting).to.be(true);
            expect(data.subjectA).to.be.a('string');
            expect(data.subjectA).to.be("Discover the New Collection!");
            expect(data.subjectB).to.be.a('string');
            expect(data.subjectB).to.be("Want to discover the New Collection?");
            expect(data.splitRule).to.be.a('number');
            expect(data.splitRule).to.be(25);
            expect(data.winnerCriteria).to.be.a('string');
            expect(data.winnerCriteria).to.be("open");
            expect(data.winnerDelay).to.be.a('number');
            expect(data.winnerDelay).to.be(50);
            expect(data.sendAtBestTime).to.be.a('boolean');
            expect(data.sendAtBestTime).to.be(true);
            expect(data.testSent).to.be.a('boolean');
            expect(data.testSent).to.be(true);
            expect(data.header).to.be.a('string');
            expect(data.header).to.be("[DEFAULT_HEADER]");
            expect(data.footer).to.be.a('string');
            expect(data.footer).to.be("[DEFAULT_FOOTER]");
            expect(data.sender).to.be.a(Brevo.GetExtendedCampaignOverviewSender);
                  expect(data.sender.name).to.be.a('string');
              expect(data.sender.name).to.be("Marketing");
              expect(data.sender.email).to.be.a('string');
              expect(data.sender.email).to.be("marketing@mycompany.com");
              expect(data.sender.id).to.be.a('number');
              expect(data.sender.id).to.be(43);
            expect(data.replyTo).to.be.a('string');
            expect(data.replyTo).to.be("replyto@domain.com");
            expect(data.toField).to.be.a('string');
            expect(data.toField).to.be("{FNAME} {LNAME}");
            expect(data.htmlContent).to.be.a('string');
            expect(data.htmlContent).to.be("This is my HTML Content");
            expect(data.shareLink).to.be.a('string');
            expect(data.shareLink).to.be("http://dhh.brevo.com/fhsgccc.html?t=9865448900");
            expect(data.tag).to.be.a('string');
            expect(data.tag).to.be("Newsletter");
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("2017-05-01T12:30:00Z");
            expect(data.modifiedAt).to.be.a('string');
            expect(data.modifiedAt).to.be("2017-05-01T12:30:00Z");
            expect(data.inlineImageActivation).to.be.a('boolean');
            expect(data.inlineImageActivation).to.be(true);
            expect(data.mirrorActive).to.be.a('boolean');
            expect(data.mirrorActive).to.be(true);
            expect(data.recurring).to.be.a('boolean');
            expect(data.recurring).to.be(true);
            expect(data.sentDate).to.be.a('string');
            expect(data.sentDate).to.be("2018-12-01T16:30:00Z");
            expect(data.returnBounce).to.be.a('number');
            expect(data.returnBounce).to.be(5);
            expect(data.recipients).to.be.a(Brevo.GetSmsCampaignRecipients);
                expect(data.statistics).to.be.a(Brevo.GetSmsCampaignRecipients);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getEmailCampaigns', function() {
        it('should call getEmailCampaigns successfully', function(done) {
          // TODO: uncomment, update parameter values for getEmailCampaigns call and complete the assertions
          /*
          var opts = {};
          opts.type = "type_example";
          opts.status = "status_example";
          opts.statistics = "statistics_example";
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.limit = 50;
          opts.offset = 0;
          opts.sort = "desc";
          opts.excludeHtmlContent = true;

          instance.getEmailCampaigns(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.GetEmailCampaigns);
            {
              let dataCtr = data.campaigns;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(24);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSharedTemplateUrl', function() {
        it('should call getSharedTemplateUrl successfully', function(done) {
          // TODO: uncomment, update parameter values for getSharedTemplateUrl call and complete the assertions
          /*
          var campaignId = 789;

          instance.getSharedTemplateUrl(campaignId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.GetSharedTemplateUrl);
            expect(data.sharedUrl).to.be.a('string');
            expect(data.sharedUrl).to.be("https://my.brevo.com/pt2YU7R5W_guXlowgumy_VX4pFsKu._zd0Gjj96x1_GMmzc1Qps5ZIpj6nx-");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendEmailCampaignNow', function() {
        it('should call sendEmailCampaignNow successfully', function(done) {
          // TODO: uncomment, update parameter values for sendEmailCampaignNow call
          /*
          var campaignId = 789;

          instance.sendEmailCampaignNow(campaignId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendReport', function() {
        it('should call sendReport successfully', function(done) {
          // TODO: uncomment, update parameter values for sendReport call
          /*
          var campaignId = 789;
          var sendReport = new Brevo.SendReport();
          sendReport.language = "en";
          sendReport.email = new Brevo.SendReportEmail();
          sendReport.email.to = ["jim.suehan@example.com"];
          sendReport.email.body = "Please find attached the report of our last email campaign.";

          instance.sendReport(campaignId, sendReport).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendTestEmail', function() {
        it('should call sendTestEmail successfully', function(done) {
          // TODO: uncomment, update parameter values for sendTestEmail call
          /*
          var campaignId = 789;
          var emailTo = new Brevo.SendTestEmail();
          emailTo.emailTo = ["helen.jurger@example.com"];

          instance.sendTestEmail(campaignId, emailTo).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateCampaignStatus', function() {
        it('should call updateCampaignStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for updateCampaignStatus call
          /*
          var campaignId = 789;
          var status = new Brevo.UpdateCampaignStatus();
          status.status = "suspended";

          instance.updateCampaignStatus(campaignId, status).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateEmailCampaign', function() {
        it('should call updateEmailCampaign successfully', function(done) {
          // TODO: uncomment, update parameter values for updateEmailCampaign call
          /*
          var campaignId = 789;
          var emailCampaign = new Brevo.UpdateEmailCampaign();
          emailCampaign.tag = "Newsletter";
          emailCampaign.sender = new Brevo.UpdateEmailCampaignSender();
          emailCampaign.sender.name = "Mary from MyShop";
          emailCampaign.sender.email = "newsletter@myshop.com";
          emailCampaign.sender.id = 3;
          emailCampaign.name = "Newsletter - May 2017";
          emailCampaign.htmlContent = "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>";
          emailCampaign.htmlUrl = "https://html.domain.com";
          emailCampaign.scheduledAt = "2017-06-01T12:30:00+02:00";
          emailCampaign.subject = "Discover the New Collection !";
          emailCampaign.previewText = "Thanks for your order!";
          emailCampaign.replyTo = "support@myshop.com";
          emailCampaign.toField = "{FNAME} {LNAME}";
          emailCampaign.recipients = new Brevo.UpdateEmailCampaignRecipients();
          emailCampaign.recipients.exclusionListIds = [8];
          emailCampaign.recipients.listIds = [32];
          emailCampaign.recipients.segmentIds = [23];
          emailCampaign.attachmentUrl = "https://attachment.domain.com";
          emailCampaign.inlineImageActivation = true;
          emailCampaign.mirrorActive = true;
          emailCampaign.recurring = false;
          emailCampaign.footer = "[DEFAULT_FOOTER]";
          emailCampaign.header = "[DEFAULT_HEADER]";
          emailCampaign.utmCampaign = "NL_05_2017";
          emailCampaign.params = {"FNAME":"Joe","LNAME":"Doe"};
          emailCampaign.sendAtBestTime = true;
          emailCampaign.abTesting = true;
          emailCampaign.subjectA = "Discover the New Collection!";
          emailCampaign.subjectB = "Want to discover the New Collection?";
          emailCampaign.splitRule = 50;
          emailCampaign.winnerCriteria = "open";
          emailCampaign.winnerDelay = 50;
          emailCampaign.ipWarmupEnable = true;
          emailCampaign.initialQuota = 3000;
          emailCampaign.increaseRate = 70;
          emailCampaign.unsubscriptionPageId = "62cbb7fabbe85021021aac52";
          emailCampaign.updateFormId = "6313436b9ad40e23b371d095";

          instance.updateEmailCampaign(campaignId, emailCampaign).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('uploadImageToGallery', function() {
        it('should call uploadImageToGallery successfully', function(done) {
          // TODO: uncomment, update parameter values for uploadImageToGallery call and complete the assertions
          /*
          var uploadImage = new Brevo.UploadImageToGallery();
          uploadImage.imageUrl = "https://somedomain.com/image1.jpg";
          uploadImage.name = "nature.jpg";

          instance.uploadImageToGallery(uploadImage).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.UploadImageModel);
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("https://img.mailinblue.com/100000/images/rnb/original/62casdase8wewq9df1c2f27c.jpeg");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
