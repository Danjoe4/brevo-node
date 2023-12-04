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
import { RequestContactImportJsonBodyInner } from './requestContactImportJsonBodyInner';
import { RequestContactImportNewList } from './requestContactImportNewList';

export class RequestContactImport {
    /**
    * Mandatory if fileBody or jsonBody is not defined. URL of the file to be imported (no local file). Possible file formats: .txt, .csv, .json
    */
    'fileUrl'?: string;
    /**
    * Mandatory if fileUrl and jsonBody is not defined. CSV content to be imported. Use semicolon to separate multiple attributes. Maximum allowed file body size is 10MB . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of file body size while parsing. Please use fileUrl instead to import bigger files.
    */
    'fileBody'?: string;
    /**
    * **Mandatory if fileUrl and fileBody is not defined.** JSON content to be imported. **Maximum allowed json body size is 10MB** . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of json body size while parsing. Please use fileUrl instead to import bigger files. 
    */
    'jsonBody'?: Array<RequestContactImportJsonBodyInner>;
    /**
    * Mandatory if newList is not defined. Ids of the lists in which the contacts shall be imported. For example, [2, 4, 7].
    */
    'listIds'?: Array<number>;
    /**
    * URL that will be called once the import process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479
    */
    'notifyUrl'?: string;
    'newList'?: RequestContactImportNewList;
    /**
    * To blacklist all the contacts for email
    */
    'emailBlacklist'?: boolean = false;
    /**
    * To disable email notification
    */
    'disableNotification'?: boolean = false;
    /**
    * To blacklist all the contacts for sms
    */
    'smsBlacklist'?: boolean = false;
    /**
    * To facilitate the choice to update the existing contacts
    */
    'updateExistingContacts'?: boolean = true;
    /**
    * To facilitate the choice to erase any attribute of the existing contacts with empty value. emptyContactsAttributes = true means the empty fields in your import will erase any attribute that currently contain data in Brevo, & emptyContactsAttributes = false means the empty fields will not affect your existing data ( only available if `updateExistingContacts` set to true )
    */
    'emptyContactsAttributes'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileUrl",
            "baseName": "fileUrl",
            "type": "string"
        },
        {
            "name": "fileBody",
            "baseName": "fileBody",
            "type": "string"
        },
        {
            "name": "jsonBody",
            "baseName": "jsonBody",
            "type": "Array<RequestContactImportJsonBodyInner>"
        },
        {
            "name": "listIds",
            "baseName": "listIds",
            "type": "Array<number>"
        },
        {
            "name": "notifyUrl",
            "baseName": "notifyUrl",
            "type": "string"
        },
        {
            "name": "newList",
            "baseName": "newList",
            "type": "RequestContactImportNewList"
        },
        {
            "name": "emailBlacklist",
            "baseName": "emailBlacklist",
            "type": "boolean"
        },
        {
            "name": "disableNotification",
            "baseName": "disableNotification",
            "type": "boolean"
        },
        {
            "name": "smsBlacklist",
            "baseName": "smsBlacklist",
            "type": "boolean"
        },
        {
            "name": "updateExistingContacts",
            "baseName": "updateExistingContacts",
            "type": "boolean"
        },
        {
            "name": "emptyContactsAttributes",
            "baseName": "emptyContactsAttributes",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RequestContactImport.attributeTypeMap;
    }
}

