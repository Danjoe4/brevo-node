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
    define(['ApiClient', 'model/CreateApiKeyRequest', 'model/CreateApiKeyResponse', 'model/CreateSubAccount', 'model/CreateSubAccountResponse', 'model/ErrorModel', 'model/GetAccountActivity', 'model/GetSsoToken', 'model/MasterDetailsResponse', 'model/SsoTokenRequest', 'model/SubAccountDetailsResponse', 'model/SubAccountUpdatePlanRequest', 'model/SubAccountsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateApiKeyRequest'), require('../model/CreateApiKeyResponse'), require('../model/CreateSubAccount'), require('../model/CreateSubAccountResponse'), require('../model/ErrorModel'), require('../model/GetAccountActivity'), require('../model/GetSsoToken'), require('../model/MasterDetailsResponse'), require('../model/SsoTokenRequest'), require('../model/SubAccountDetailsResponse'), require('../model/SubAccountUpdatePlanRequest'), require('../model/SubAccountsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.MasterAccountApi = factory(root.Brevo.ApiClient, root.Brevo.CreateApiKeyRequest, root.Brevo.CreateApiKeyResponse, root.Brevo.CreateSubAccount, root.Brevo.CreateSubAccountResponse, root.Brevo.ErrorModel, root.Brevo.GetAccountActivity, root.Brevo.GetSsoToken, root.Brevo.MasterDetailsResponse, root.Brevo.SsoTokenRequest, root.Brevo.SubAccountDetailsResponse, root.Brevo.SubAccountUpdatePlanRequest, root.Brevo.SubAccountsResponse);
  }
}(this, function(ApiClient, CreateApiKeyRequest, CreateApiKeyResponse, CreateSubAccount, CreateSubAccountResponse, ErrorModel, GetAccountActivity, GetSsoToken, MasterDetailsResponse, SsoTokenRequest, SubAccountDetailsResponse, SubAccountUpdatePlanRequest, SubAccountsResponse) {
  'use strict';

  /**
   * MasterAccount service.
   * @module api/MasterAccountApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MasterAccountApi. 
   * @alias module:api/MasterAccountApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get the details of requested master account
     * This endpoint will provide the details of the master account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MasterDetailsResponse} and HTTP response
     */
    this.corporateMasterAccountGetWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MasterDetailsResponse;

      return this.apiClient.callApi(
        '/corporate/masterAccount', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the details of requested master account
     * This endpoint will provide the details of the master account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MasterDetailsResponse}
     */
    this.corporateMasterAccountGet = function() {
      return this.corporateMasterAccountGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of all the sub-accounts of the master account.
     * This endpoint will provide the list all the sub-accounts of the master account.
     * @param {Number} offset Index of the first sub-account in the page
     * @param {Number} limit Number of sub-accounts to be displayed on each page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubAccountsResponse} and HTTP response
     */
    this.corporateSubAccountGetWithHttpInfo = function(offset, limit) {
      var postBody = null;

      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling corporateSubAccountGet");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling corporateSubAccountGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': offset,
        'limit': limit,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SubAccountsResponse;

      return this.apiClient.callApi(
        '/corporate/subAccount', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the list of all the sub-accounts of the master account.
     * This endpoint will provide the list all the sub-accounts of the master account.
     * @param {Number} offset Index of the first sub-account in the page
     * @param {Number} limit Number of sub-accounts to be displayed on each page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubAccountsResponse}
     */
    this.corporateSubAccountGet = function(offset, limit) {
      return this.corporateSubAccountGetWithHttpInfo(offset, limit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a sub-account
     * @param {Number} id Id of the sub-account organization to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.corporateSubAccountIdDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling corporateSubAccountIdDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/corporate/subAccount/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a sub-account
     * @param {Number} id Id of the sub-account organization to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.corporateSubAccountIdDelete = function(id) {
      return this.corporateSubAccountIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get sub-account details
     * This endpoint will provide the details for the specified sub-account company
     * @param {Number} id Id of the sub-account organization
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubAccountDetailsResponse} and HTTP response
     */
    this.corporateSubAccountIdGetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling corporateSubAccountIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SubAccountDetailsResponse;

      return this.apiClient.callApi(
        '/corporate/subAccount/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get sub-account details
     * This endpoint will provide the details for the specified sub-account company
     * @param {Number} id Id of the sub-account organization
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubAccountDetailsResponse}
     */
    this.corporateSubAccountIdGet = function(id) {
      return this.corporateSubAccountIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update sub-account plan
     * This endpoint will update the sub-account plan
     * @param {Number} id Id of the sub-account organization
     * @param {module:model/SubAccountUpdatePlanRequest} updatePlanDetails Values to update a sub-account plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.corporateSubAccountIdPlanPutWithHttpInfo = function(id, updatePlanDetails) {
      var postBody = updatePlanDetails;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling corporateSubAccountIdPlanPut");
      }

      // verify the required parameter 'updatePlanDetails' is set
      if (updatePlanDetails === undefined || updatePlanDetails === null) {
        throw new Error("Missing the required parameter 'updatePlanDetails' when calling corporateSubAccountIdPlanPut");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/corporate/subAccount/{id}/plan', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update sub-account plan
     * This endpoint will update the sub-account plan
     * @param {Number} id Id of the sub-account organization
     * @param {module:model/SubAccountUpdatePlanRequest} updatePlanDetails Values to update a sub-account plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.corporateSubAccountIdPlanPut = function(id, updatePlanDetails) {
      return this.corporateSubAccountIdPlanPutWithHttpInfo(id, updatePlanDetails)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an API key for a sub-account
     * This endpoint will generate an API v3 key for a sub account
     * @param {module:model/CreateApiKeyRequest} createApiKeyRequest Values to generate API key for sub-account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateApiKeyResponse} and HTTP response
     */
    this.corporateSubAccountKeyPostWithHttpInfo = function(createApiKeyRequest) {
      var postBody = createApiKeyRequest;

      // verify the required parameter 'createApiKeyRequest' is set
      if (createApiKeyRequest === undefined || createApiKeyRequest === null) {
        throw new Error("Missing the required parameter 'createApiKeyRequest' when calling corporateSubAccountKeyPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateApiKeyResponse;

      return this.apiClient.callApi(
        '/corporate/subAccount/key', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an API key for a sub-account
     * This endpoint will generate an API v3 key for a sub account
     * @param {module:model/CreateApiKeyRequest} createApiKeyRequest Values to generate API key for sub-account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateApiKeyResponse}
     */
    this.corporateSubAccountKeyPost = function(createApiKeyRequest) {
      return this.corporateSubAccountKeyPostWithHttpInfo(createApiKeyRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new sub-account under a master account.
     * This endpoint will create a new sub-account under a master account
     * @param {module:model/CreateSubAccount} subAccountCreate values to create new sub-account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateSubAccountResponse} and HTTP response
     */
    this.corporateSubAccountPostWithHttpInfo = function(subAccountCreate) {
      var postBody = subAccountCreate;

      // verify the required parameter 'subAccountCreate' is set
      if (subAccountCreate === undefined || subAccountCreate === null) {
        throw new Error("Missing the required parameter 'subAccountCreate' when calling corporateSubAccountPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateSubAccountResponse;

      return this.apiClient.callApi(
        '/corporate/subAccount', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new sub-account under a master account.
     * This endpoint will create a new sub-account under a master account
     * @param {module:model/CreateSubAccount} subAccountCreate values to create new sub-account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateSubAccountResponse}
     */
    this.corporateSubAccountPost = function(subAccountCreate) {
      return this.corporateSubAccountPostWithHttpInfo(subAccountCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generate SSO token to access Brevo
     * This endpoint generates an sso token to authenticate and access a sub-account of the master using the account endpoint https://account-app.brevo.com/account/login/sub-account/sso/[token], where [token] will be replaced by the actual token.
     * @param {module:model/SsoTokenRequest} ssoTokenRequest Values to generate SSO token for sub-account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSsoToken} and HTTP response
     */
    this.corporateSubAccountSsoTokenPostWithHttpInfo = function(ssoTokenRequest) {
      var postBody = ssoTokenRequest;

      // verify the required parameter 'ssoTokenRequest' is set
      if (ssoTokenRequest === undefined || ssoTokenRequest === null) {
        throw new Error("Missing the required parameter 'ssoTokenRequest' when calling corporateSubAccountSsoTokenPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetSsoToken;

      return this.apiClient.callApi(
        '/corporate/subAccount/ssoToken', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Generate SSO token to access Brevo
     * This endpoint generates an sso token to authenticate and access a sub-account of the master using the account endpoint https://account-app.brevo.com/account/login/sub-account/sso/[token], where [token] will be replaced by the actual token.
     * @param {module:model/SsoTokenRequest} ssoTokenRequest Values to generate SSO token for sub-account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSsoToken}
     */
    this.corporateSubAccountSsoTokenPost = function(ssoTokenRequest) {
      return this.corporateSubAccountSsoTokenPostWithHttpInfo(ssoTokenRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user activity logs
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Mandatory if endDate is used. Enter start date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. Additionally, you can retrieve activity logs from the past 12 months from the date of your search.
     * @param {String} opts.endDate Mandatory if startDate is used. Enter end date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month.
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document in the page. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAccountActivity} and HTTP response
     */
    this.getAccountActivityWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAccountActivity;

      return this.apiClient.callApi(
        '/organization/activities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get user activity logs
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Mandatory if endDate is used. Enter start date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. Additionally, you can retrieve activity logs from the past 12 months from the date of your search.
     * @param {String} opts.endDate Mandatory if startDate is used. Enter end date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month.
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document in the page. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAccountActivity}
     */
    this.getAccountActivity = function(opts) {
      return this.getAccountActivityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
