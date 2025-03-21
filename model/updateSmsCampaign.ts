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
import { CreateSmsCampaignRecipients } from './createSmsCampaignRecipients';

export class UpdateSmsCampaign {
    /**
    * Name of the campaign
    */
    'name'?: string;
    /**
    * Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters** 
    */
    'sender'?: string;
    /**
    * Content of the message. The **maximum characters used per SMS is 160**, if used more than that, it will be counted as more than one SMS 
    */
    'content'?: string;
    'recipients'?: CreateSmsCampaignRecipients;
    /**
    * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** 
    */
    'scheduledAt'?: string;
    /**
    * Format of the message. It indicates whether the content should be treated as unicode or not. 
    */
    'unicodeEnabled'?: boolean = false;
    /**
    * A recognizable prefix will ensure your audience knows who you are. Recommended by U.S. carriers. This will be added as your Brand Name before the message content. **Prefer verifying maximum length of 160 characters including this prefix in message content to avoid multiple sending of same sms.**
    */
    'organisationPrefix'?: string;
    /**
    * Instructions to unsubscribe from future communications. Recommended by U.S. carriers. Must include **STOP** keyword. This will be added as instructions after the end of message content. **Prefer verifying maximum length of 160 characters including this instructions in message content to avoid multiple sending of same sms.**
    */
    'unsubscribeInstruction'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "CreateSmsCampaignRecipients"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "string"
        },
        {
            "name": "unicodeEnabled",
            "baseName": "unicodeEnabled",
            "type": "boolean"
        },
        {
            "name": "organisationPrefix",
            "baseName": "organisationPrefix",
            "type": "string"
        },
        {
            "name": "unsubscribeInstruction",
            "baseName": "unsubscribeInstruction",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSmsCampaign.attributeTypeMap;
    }
}

