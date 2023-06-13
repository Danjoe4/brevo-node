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
    instance = new Brevo.DealsApi();
  });

  describe('(package)', function() {
    describe('DealsApi', function() {
      describe('crmAttributesDealsGet', function() {
        it('should call crmAttributesDealsGet successfully', function(done) {
          // TODO: uncomment crmAttributesDealsGet call and complete the assertions
          /*

          instance.crmAttributesDealsGet().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.DealAttributes);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmDealsGet', function() {
        it('should call crmDealsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmDealsGet call and complete the assertions
          /*
          var opts = {};
          opts.filtersAttributes = "filtersAttributes_example";
          opts.filtersLinkedCompaniesIds = "filtersLinkedCompaniesIds_example";
          opts.filtersLinkedContactsIds = "filtersLinkedContactsIds_example";
          opts.offset = 789;
          opts.limit = 50;
          opts.sort = "sort_example";
          opts.sortBy = "sortBy_example";

          instance.crmDealsGet(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.DealsList);
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Brevo.Deal);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("629475917295261d9b1f4403");
                expect(data.attributes).to.be.a(Object);
                expect(data.attributes).to.be({"deal_name":"testname","deal_owner":"6093d2425a9b436e9519d034","amount":12,"pipeline":"6093d296ad1e9c5cf2140a58","deal_stage":"9e577ff7-8e42-4ab3-be26-2b5e01b42518","stage_updated_at":"2022-05-30T07:42:05.671Z","created_at":"2022-05-30T07:42:05.671Z","number_of_contacts":1,"last_updated_date":"2022-06-06T08:38:36.761Z","last_activity_date":"2022-06-06T08:38:36.000Z","number_of_activities":0});
                {
                  let dataCtr = data.linkedContactsIds;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.linkedCompaniesIds;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }

                      }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmDealsIdDelete', function() {
        it('should call crmDealsIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for crmDealsIdDelete call
          /*
          var id = "id_example";

          instance.crmDealsIdDelete(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmDealsIdGet', function() {
        it('should call crmDealsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmDealsIdGet call and complete the assertions
          /*
          var id = "id_example";

          instance.crmDealsIdGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.Deal);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("629475917295261d9b1f4403");
            expect(data.attributes).to.be.a(Object);
            expect(data.attributes).to.be({"deal_name":"testname","deal_owner":"6093d2425a9b436e9519d034","amount":12,"pipeline":"6093d296ad1e9c5cf2140a58","deal_stage":"9e577ff7-8e42-4ab3-be26-2b5e01b42518","stage_updated_at":"2022-05-30T07:42:05.671Z","created_at":"2022-05-30T07:42:05.671Z","number_of_contacts":1,"last_updated_date":"2022-06-06T08:38:36.761Z","last_activity_date":"2022-06-06T08:38:36.000Z","number_of_activities":0});
            {
              let dataCtr = data.linkedContactsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.linkedCompaniesIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmDealsIdPatch', function() {
        it('should call crmDealsIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for crmDealsIdPatch call
          /*
          var id = "id_example";
          var body = new Brevo.Body4();
          body.name = "Deal: Connect with client";
          body.attributes = {"deal_owner":"6093d2425a9b436e9519d034","amount":12};

          instance.crmDealsIdPatch(id, body).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmDealsLinkUnlinkIdPatch', function() {
        it('should call crmDealsLinkUnlinkIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for crmDealsLinkUnlinkIdPatch call
          /*
          var id = "id_example";
          var body = new Brevo.Body5();
          body.linkContactIds = [1,2,3];
          body.unlinkContactIds = [4,5,6];
          body.linkCompanyIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.unlinkCompanyIds = ["61a5ce58c5d4795761045994","61a5ce58c5d479576104595","61a5ce58c5d4795761045996"];

          instance.crmDealsLinkUnlinkIdPatch(id, body).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmDealsPost', function() {
        it('should call crmDealsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for crmDealsPost call and complete the assertions
          /*
          var body = new Brevo.Body3();
          body.name = "Deal: Connect with company";
          body.attributes = {"deal_owner":"6093d2425a9b436e9519d034","amount":12};

          instance.crmDealsPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.InlineResponse201);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad06");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmPipelineDetailsGet', function() {
        it('should call crmPipelineDetailsGet successfully', function(done) {
          // TODO: uncomment crmPipelineDetailsGet call and complete the assertions
          /*

          instance.crmPipelineDetailsGet().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.Pipeline);
            expect(data.pipeline).to.be.a('string');
            expect(data.pipeline).to.be("5ea675e3da0dd085acaea610");
            expect(data.pipelineName).to.be.a('string');
            expect(data.pipelineName).to.be("Sales Pipeline");
            {
              let dataCtr = data.stages;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Brevo.PipelineStage);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("9e577ff7-8e42-4ab3-be26-2b5e01b42518");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("New");

                      }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmPipelineDetailsPipelineIDGet', function() {
        it('should call crmPipelineDetailsPipelineIDGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmPipelineDetailsPipelineIDGet call and complete the assertions
          /*
          var pipelineID = "pipelineID_example";

          instance.crmPipelineDetailsPipelineIDGet(pipelineID).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.Pipelines);

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
