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
import { SubAccountDetailsResponsePlanInfoCreditsEmails } from './subAccountDetailsResponsePlanInfoCreditsEmails';
import { SubAccountDetailsResponsePlanInfoCreditsExternalFeeds } from './subAccountDetailsResponsePlanInfoCreditsExternalFeeds';
import { SubAccountDetailsResponsePlanInfoCreditsSms } from './subAccountDetailsResponsePlanInfoCreditsSms';
import { SubAccountDetailsResponsePlanInfoCreditsWhatsapp } from './subAccountDetailsResponsePlanInfoCreditsWhatsapp';
import { SubAccountDetailsResponsePlanInfoCreditsWpSubscribers } from './subAccountDetailsResponsePlanInfoCreditsWpSubscribers';

/**
* Credits quota and remaining credits on the sub-account
*/
export class SubAccountDetailsResponsePlanInfoCredits {
    'emails'?: SubAccountDetailsResponsePlanInfoCreditsEmails;
    'sms'?: SubAccountDetailsResponsePlanInfoCreditsSms;
    'wpSubscribers'?: SubAccountDetailsResponsePlanInfoCreditsWpSubscribers;
    'whatsapp'?: SubAccountDetailsResponsePlanInfoCreditsWhatsapp;
    'externalFeeds'?: SubAccountDetailsResponsePlanInfoCreditsExternalFeeds;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "emails",
            "baseName": "emails",
            "type": "SubAccountDetailsResponsePlanInfoCreditsEmails"
        },
        {
            "name": "sms",
            "baseName": "sms",
            "type": "SubAccountDetailsResponsePlanInfoCreditsSms"
        },
        {
            "name": "wpSubscribers",
            "baseName": "wpSubscribers",
            "type": "SubAccountDetailsResponsePlanInfoCreditsWpSubscribers"
        },
        {
            "name": "whatsapp",
            "baseName": "whatsapp",
            "type": "SubAccountDetailsResponsePlanInfoCreditsWhatsapp"
        },
        {
            "name": "externalFeeds",
            "baseName": "externalFeeds",
            "type": "SubAccountDetailsResponsePlanInfoCreditsExternalFeeds"
        }    ];

    static getAttributeTypeMap() {
        return SubAccountDetailsResponsePlanInfoCredits.attributeTypeMap;
    }
}

