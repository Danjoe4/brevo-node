/**
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GetTransacSmsReportReportsInner {
    /**
    * Date for which statistics are retrieved
    */
    'date'?: string;
    /**
    * Number of requests for the date
    */
    'requests'?: number;
    /**
    * Number of delivered SMS for the date
    */
    'delivered'?: number;
    /**
    * Number of hardbounces for the date
    */
    'hardBounces'?: number;
    /**
    * Number of softbounces for the date
    */
    'softBounces'?: number;
    /**
    * Number of blocked contact for the date
    */
    'blocked'?: number;
    /**
    * Number of unsubscription for the date
    */
    'unsubscribed'?: number;
    /**
    * Number of answered SMS for the date
    */
    'replied'?: number;
    /**
    * Number of accepted for the date
    */
    'accepted'?: number;
    /**
    * Number of rejected for the date
    */
    'rejected'?: number;

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
            "name": "blocked",
            "baseName": "blocked",
            "type": "number"
        },
        {
            "name": "unsubscribed",
            "baseName": "unsubscribed",
            "type": "number"
        },
        {
            "name": "replied",
            "baseName": "replied",
            "type": "number"
        },
        {
            "name": "accepted",
            "baseName": "accepted",
            "type": "number"
        },
        {
            "name": "rejected",
            "baseName": "rejected",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetTransacSmsReportReportsInner.attributeTypeMap;
    }
}

