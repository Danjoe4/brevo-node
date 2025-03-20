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

export class MainRewardAttribution {
    /**
    * Value of the selected reward config
    */
    'value'?: number;
    /**
    * Generated code
    */
    'code'?: string;
    /**
    * Timestamp for when this reward was consumed
    */
    'consumedAt'?: string;
    /**
    * Id of the contact that attributed the reward
    */
    'contactId'?: number;
    /**
    * Timestamp for when this reward was created
    */
    'createdAt'?: Date;
    /**
    * Expiration date of the reward
    */
    'expirationDate'?: Date;
    /**
    * Unique identifier
    */
    'id'?: string;
    /**
    * Loyalty Program Id to which attributed reward belongs
    */
    'loyaltyProgramId'?: string;
    /**
    * Additional data to define the reward
    */
    'meta'?: { [key: string]: any; };
    /**
    * Unique identifier for the reward
    */
    'rewardId'?: string;
    /**
    * Timestamp for when this reward was updated
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "consumedAt",
            "baseName": "consumedAt",
            "type": "string"
        },
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "loyaltyProgramId",
            "baseName": "loyaltyProgramId",
            "type": "string"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "rewardId",
            "baseName": "rewardId",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return MainRewardAttribution.attributeTypeMap;
    }
}

