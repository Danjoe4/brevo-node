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
* Feature accessiblity given to the user.
*/
export class GetInvitedUsersListUsersInnerFeatureAccess {
    /**
    * Marketing features accessiblity.
    */
    'marketing'?: string;
    /**
    * Conversations features accessiblity.
    */
    'conversations'?: string;
    /**
    * CRM features accessiblity.
    */
    'crm'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "marketing",
            "baseName": "marketing",
            "type": "string"
        },
        {
            "name": "conversations",
            "baseName": "conversations",
            "type": "string"
        },
        {
            "name": "crm",
            "baseName": "crm",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetInvitedUsersListUsersInnerFeatureAccess.attributeTypeMap;
    }
}

