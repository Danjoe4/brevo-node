/**
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  |   | 422  | Error. Unprocessable Entity | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GetReportsReportsInner {
    /**
    * Date of the statistics
    */
    'date': string;
    /**
    * Number of requests for the date
    */
    'requests': number;
    /**
    * Number of delivered emails for the date
    */
    'delivered': number;
    /**
    * Number of hardbounces for the date
    */
    'hardBounces': number;
    /**
    * Number of softbounces for the date
    */
    'softBounces': number;
    /**
    * Number of clicks for the date
    */
    'clicks': number;
    /**
    * Number of unique clicks for the date
    */
    'uniqueClicks': number;
    /**
    * Number of openings for the date
    */
    'opens': number;
    /**
    * Number of unique openings for the date
    */
    'uniqueOpens': number;
    /**
    * Number of complaints (spam reports) for the date
    */
    'spamReports': number;
    /**
    * Number of blocked emails for the date
    */
    'blocked': number;
    /**
    * Number of invalid emails for the date
    */
    'invalid': number;
    /**
    * Number of unsubscribed emails for the date
    */
    'unsubscribed': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "number"
        },
        {
            "name": "delivered",
            "baseName": "delivered",
            "type": "number"
        },
        {
            "name": "hardBounces",
            "baseName": "hardBounces",
            "type": "number"
        },
        {
            "name": "softBounces",
            "baseName": "softBounces",
            "type": "number"
        },
        {
            "name": "clicks",
            "baseName": "clicks",
            "type": "number"
        },
        {
            "name": "uniqueClicks",
            "baseName": "uniqueClicks",
            "type": "number"
        },
        {
            "name": "opens",
            "baseName": "opens",
            "type": "number"
        },
        {
            "name": "uniqueOpens",
            "baseName": "uniqueOpens",
            "type": "number"
        },
        {
            "name": "spamReports",
            "baseName": "spamReports",
            "type": "number"
        },
        {
            "name": "blocked",
            "baseName": "blocked",
            "type": "number"
        },
        {
            "name": "invalid",
            "baseName": "invalid",
            "type": "number"
        },
        {
            "name": "unsubscribed",
            "baseName": "unsubscribed",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetReportsReportsInner.attributeTypeMap;
    }
}

