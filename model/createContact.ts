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
import { CreateDoiContactAttributesValue } from './createDoiContactAttributesValue';

export class CreateContact {
    /**
    * Email address of the user. **Mandatory if \"ext_id\"  & \"SMS\" field is not passed.** 
    */
    'email'?: string;
    /**
    * Pass your own Id to create a contact.
    */
    'extId'?: string;
    /**
    * Pass the set of attributes and their values. The attribute\'s parameter should be passed in capital letter while creating a contact. Values that don\'t match the attribute type (e.g. text or string in a date attribute) will be ignored. **These attributes must be present in your Brevo account.**. For eg: **{\"FNAME\":\"Elly\", \"LNAME\":\"Roger\", \"COUNTRIES\":[\"India\",\"China\"]}** 
    */
    'attributes'?: { [key: string]: CreateDoiContactAttributesValue; };
    /**
    * Set this field to blacklist the contact for emails (emailBlacklisted = true)
    */
    'emailBlacklisted'?: boolean;
    /**
    * Set this field to blacklist the contact for SMS (smsBlacklisted = true)
    */
    'smsBlacklisted'?: boolean;
    /**
    * Ids of the lists to add the contact to
    */
    'listIds'?: Array<number>;
    /**
    * Facilitate to update the existing contact in the same request (updateEnabled = true)
    */
    'updateEnabled'?: boolean = false;
    /**
    * transactional email forbidden sender for contact. Use only for email Contact ( only available if updateEnabled = true )
    */
    'smtpBlacklistSender'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "extId",
            "baseName": "ext_id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: CreateDoiContactAttributesValue; }"
        },
        {
            "name": "emailBlacklisted",
            "baseName": "emailBlacklisted",
            "type": "boolean"
        },
        {
            "name": "smsBlacklisted",
            "baseName": "smsBlacklisted",
            "type": "boolean"
        },
        {
            "name": "listIds",
            "baseName": "listIds",
            "type": "Array<number>"
        },
        {
            "name": "updateEnabled",
            "baseName": "updateEnabled",
            "type": "boolean"
        },
        {
            "name": "smtpBlacklistSender",
            "baseName": "smtpBlacklistSender",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CreateContact.attributeTypeMap;
    }
}

