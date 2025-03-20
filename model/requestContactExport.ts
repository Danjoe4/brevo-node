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
import { RequestContactExportCustomContactFilter } from './requestContactExportCustomContactFilter';

export class RequestContactExport {
    /**
    * List of all the attributes that you want to export. **These attributes must be present in your contact database. It is required if exportMandatoryAttributes is set false. ** For example: **[\'fname\', \'lname\', \'email\']** 
    */
    'exportAttributes'?: Array<string>;
    'customContactFilter': RequestContactExportCustomContactFilter;
    /**
    * Webhook that will be called once the export process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479
    */
    'notifyUrl'?: string;
    /**
    * To avoid generating the email notification upon contact export, pass **true**
    */
    'disableNotification'?: boolean = false;
    /**
    * To export mandatory attributes like EMAIL, ADDED_TIME, MODIFIED_TIME
    */
    'exportMandatoryAttributes'?: boolean = true;
    /**
    * Export subscription status of contacts for email & sms marketting. Pass email_marketing to obtain the marketing email subscription status & sms_marketing to retrieve the marketing SMS status of the contact.
    */
    'exportSubscriptionStatus'?: Array<string>;
    /**
    * Export metadata of contacts such as _listIds, ADDED_TIME, MODIFIED_TIME.
    */
    'exportMetadata'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exportAttributes",
            "baseName": "exportAttributes",
            "type": "Array<string>"
        },
        {
            "name": "customContactFilter",
            "baseName": "customContactFilter",
            "type": "RequestContactExportCustomContactFilter"
        },
        {
            "name": "notifyUrl",
            "baseName": "notifyUrl",
            "type": "string"
        },
        {
            "name": "disableNotification",
            "baseName": "disableNotification",
            "type": "boolean"
        },
        {
            "name": "exportMandatoryAttributes",
            "baseName": "exportMandatoryAttributes",
            "type": "boolean"
        },
        {
            "name": "exportSubscriptionStatus",
            "baseName": "exportSubscriptionStatus",
            "type": "Array<string>"
        },
        {
            "name": "exportMetadata",
            "baseName": "exportMetadata",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return RequestContactExport.attributeTypeMap;
    }
}

