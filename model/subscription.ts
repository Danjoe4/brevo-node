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

export class Subscription {
    /**
    * Unique identifier of the contact.
    */
    'contactId'?: number;
    /**
    * Timestamp when the subscription was created.
    */
    'createdAt'?: string;
    /**
    * Unique identifier of the loyalty program.
    */
    'loyaltyProgramId'?: string;
    /**
    * Unique identifier of the subscription.
    */
    'loyaltySubscriptionId'?: string;
    /**
    * Unique identifier of the organization.
    */
    'organizationId'?: number;
    /**
    * Timestamp when the subscription was last updated.
    */
    'updatedAt'?: string;
    /**
    * Version number of the subscription.
    */
    'versionId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "loyaltyProgramId",
            "baseName": "loyaltyProgramId",
            "type": "string"
        },
        {
            "name": "loyaltySubscriptionId",
            "baseName": "loyaltySubscriptionId",
            "type": "string"
        },
        {
            "name": "organizationId",
            "baseName": "organizationId",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }
}

