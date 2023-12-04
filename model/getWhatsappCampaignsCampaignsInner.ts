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
import { WhatsappCampStats } from './whatsappCampStats';

export class GetWhatsappCampaignsCampaignsInner {
    /**
    * ID of the WhatsApp Campaign
    */
    'id': number;
    /**
    * Name of the WhatsApp Campaign
    */
    'campaignName': string;
    /**
    * Id of the WhatsApp template
    */
    'templateId': string;
    /**
    * Status of the WhatsApp Campaign
    */
    'campaignStatus': GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum;
    /**
    * UTC date-time on which WhatsApp campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
    */
    'scheduledAt': string;
    /**
    * Error reason in the campaign creation
    */
    'errorReason'?: string;
    /**
    * Count of invalidated contacts
    */
    'invalidatedContacts'?: number;
    /**
    * Read percentage of the the WhatsApp campaign created
    */
    'readPercentage'?: number;
    'stats'?: WhatsappCampStats;
    /**
    * Creation UTC date-time of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'createdAt': string;
    /**
    * UTC date-time of last modification of the whatsapp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'modifiedAt': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "campaignName",
            "baseName": "campaignName",
            "type": "string"
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string"
        },
        {
            "name": "campaignStatus",
            "baseName": "campaignStatus",
            "type": "GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "string"
        },
        {
            "name": "errorReason",
            "baseName": "errorReason",
            "type": "string"
        },
        {
            "name": "invalidatedContacts",
            "baseName": "invalidatedContacts",
            "type": "number"
        },
        {
            "name": "readPercentage",
            "baseName": "readPercentage",
            "type": "number"
        },
        {
            "name": "stats",
            "baseName": "stats",
            "type": "WhatsappCampStats"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetWhatsappCampaignsCampaignsInner.attributeTypeMap;
    }
}

export namespace GetWhatsappCampaignsCampaignsInner {
    export enum CampaignStatusEnum {
        Draft = <any> 'draft',
        Scheduled = <any> 'scheduled',
        Pending = <any> 'pending',
        Approved = <any> 'approved',
        Running = <any> 'running',
        Suspended = <any> 'suspended',
        Rejected = <any> 'rejected',
        Sent = <any> 'sent'
    }
}
