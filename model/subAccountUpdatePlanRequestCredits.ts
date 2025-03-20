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

/**
* Credit details to update
*/
export class SubAccountUpdatePlanRequestCredits {
    /**
    * Number of email credits | Pass the value -1 for unlimited emails in ENTv2 only
    */
    'email'?: number;
    /**
    * Number of SMS credits | Pass the value -1 for unlimited SMS in ENTv2 only
    */
    'sms'?: number;
    /**
    * Number of Push credits, possible value is 0 and -1 | available in ENT-v2 only
    */
    'wpSubscribers'?: number;
    /**
    * Number of externalFeeds credits, possible values are 0 or 1 |available in ENTv2 only
    */
    'externalFeeds'?: number;
    /**
    * Number of whatsapp credits | Pass the value -1 for unlimited whatsapp in ENTv2 only
    */
    'whatsapp'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "number"
        },
        {
            "name": "sms",
            "baseName": "sms",
            "type": "number"
        },
        {
            "name": "wpSubscribers",
            "baseName": "wpSubscribers",
            "type": "number"
        },
        {
            "name": "externalFeeds",
            "baseName": "externalFeeds",
            "type": "number"
        },
        {
            "name": "whatsapp",
            "baseName": "whatsapp",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubAccountUpdatePlanRequestCredits.attributeTypeMap;
    }
}

