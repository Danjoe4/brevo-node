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
* Payload for creating an order linked to a balance definition.
*/
export class CreateOrderPayload {
    /**
    * Order amount (must be non-zero).
    */
    'amount': number;
    /**
    * Unique identifier (UUID) of the associated balance definition.
    */
    'balanceDefinitionId': string;
    /**
    * Unique identifier of the contact placing the order (must be ≥ 1).
    */
    'contactId': number;
    /**
    * RFC3339 timestamp specifying when the order is due.
    */
    'dueAt': string;
    /**
    * Optional RFC3339 timestamp defining order expiration.
    */
    'expiresAt'?: string;
    /**
    * Optional metadata associated with the order.
    */
    'meta'?: { [key: string]: any; };
    /**
    * Specifies the origin of the order (`engine` or `user`).
    */
    'source': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "balanceDefinitionId",
            "baseName": "balanceDefinitionId",
            "type": "string"
        },
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "number"
        },
        {
            "name": "dueAt",
            "baseName": "dueAt",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderPayload.attributeTypeMap;
    }
}

