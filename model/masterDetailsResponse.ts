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
import { MasterDetailsResponseBillingInfo } from './masterDetailsResponseBillingInfo';
import { MasterDetailsResponsePlanInfo } from './masterDetailsResponsePlanInfo';

export class MasterDetailsResponse {
    /**
    * Email id of master account
    */
    'email'?: string;
    /**
    * Company name of master account organization
    */
    'companyName'?: string;
    /**
    * Unique identifier of the master account organization
    */
    'id'?: number;
    /**
    * Currency code of the master account organization
    */
    'currencyCode'?: string;
    /**
    * Timezone of the master account organization
    */
    'timezone'?: string;
    'billingInfo'?: MasterDetailsResponseBillingInfo;
    'planInfo'?: MasterDetailsResponsePlanInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "billingInfo",
            "baseName": "billingInfo",
            "type": "MasterDetailsResponseBillingInfo"
        },
        {
            "name": "planInfo",
            "baseName": "planInfo",
            "type": "MasterDetailsResponsePlanInfo"
        }    ];

    static getAttributeTypeMap() {
        return MasterDetailsResponse.attributeTypeMap;
    }
}

