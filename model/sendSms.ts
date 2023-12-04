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

export class SendSms {
    'reference': string;
    'messageId': number;
    /**
    * Count of SMS\'s to send multiple text messages
    */
    'smsCount'?: number;
    /**
    * SMS credits used per text message
    */
    'usedCredits'?: number;
    /**
    * Remaining SMS credits of the user
    */
    'remainingCredits'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "number"
        },
        {
            "name": "smsCount",
            "baseName": "smsCount",
            "type": "number"
        },
        {
            "name": "usedCredits",
            "baseName": "usedCredits",
            "type": "number"
        },
        {
            "name": "remainingCredits",
            "baseName": "remainingCredits",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SendSms.attributeTypeMap;
    }
}

