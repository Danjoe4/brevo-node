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
    instance = new Brevo.TasksApi();
  });

  describe('(package)', function() {
    describe('TasksApi', function() {
      describe('crmTasksGet', function() {
        it('should call crmTasksGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksGet call and complete the assertions
          /*
          var opts = {};
          opts.filterType = "filterType_example";
          opts.filterStatus = "filterStatus_example";
          opts.filterDate = "filterDate_example";
          opts.filterAssignTo = "filterAssignTo_example";
          opts.filterContacts = "filterContacts_example";
          opts.filterDeals = "filterDeals_example";
          opts.filterCompanies = "filterCompanies_example";
          opts.dateFrom = 56;
          opts.dateTo = 56;
          opts.offset = 789;
          opts.limit = 50;
          opts.sort = "sort_example";
          opts.sortBy = "sortBy_example";

          instance.crmTasksGet(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.TaskList);
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Brevo.Task);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("61a5cd07ca1347c82306ad06");
                expect(data.taskTypeId).to.be.a('string');
                expect(data.taskTypeId).to.be("61a5cd07ca1347c82306ad09");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Task: Connect with client");
                {
                  let dataCtr = data.contactsIds;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.dealsIds;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                {
                  let dataCtr = data.companiesIds;
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
      describe('crmTasksIdDelete', function() {
        it('should call crmTasksIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksIdDelete call
          /*
          var id = "id_example";

          instance.crmTasksIdDelete(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmTasksIdGet', function() {
        it('should call crmTasksIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksIdGet call and complete the assertions
          /*
          var id = "id_example";

          instance.crmTasksIdGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.Task);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad06");
            expect(data.taskTypeId).to.be.a('string');
            expect(data.taskTypeId).to.be("61a5cd07ca1347c82306ad09");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Task: Connect with client");
            {
              let dataCtr = data.contactsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.dealsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.companiesIds;
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
      describe('crmTasksIdPatch', function() {
        it('should call crmTasksIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksIdPatch call
          /*
          var id = "id_example";
          var body = new Brevo.Body7();
          body.name = "Task: Connect with client";
          body.duration = 600000;
          body.taskTypeId = "61a5cd07ca1347c82306ad09";
          body._date = 2021-11-01T17:44:54.668Z;
          body.notes = "In communication with client for resolution of queries.";
          body.done = false;
          body.assignToId = "5faab4b7f195bb3c4c31e62a";
          body.contactsIds = [1,2,3];
          body.dealsIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.companiesIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];

          instance.crmTasksIdPatch(id, body).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmTasksPost', function() {
        it('should call crmTasksPost successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksPost call and complete the assertions
          /*
          var body = new Brevo.Body6();
          body.name = "Task: Connect with client";
          body.duration = 600000;
          body.taskTypeId = "61a5cd07ca1347c82306ad09";
          body._date = 2021-11-01T17:44:54.668Z;
          body.notes = "In communication with client for resolution of queries.";
          body.done = false;
          body.assignToId = "5faab4b7f195bb3c4c31e62a";
          body.contactsIds = [1,2,3];
          body.dealsIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.companiesIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.reminder = new Brevo.TaskReminder();
          body.reminder.value = 10;
          body.reminder.unit = "minutes";
          body.reminder.types = ["email"];

          instance.crmTasksPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.InlineResponse2011);
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
      describe('crmTasktypesGet', function() {
        it('should call crmTasktypesGet successfully', function(done) {
          // TODO: uncomment crmTasktypesGet call and complete the assertions
          /*

          instance.crmTasktypesGet().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Brevo.TaskTypes);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a88a2eb7a574180261234");
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("Email");

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
