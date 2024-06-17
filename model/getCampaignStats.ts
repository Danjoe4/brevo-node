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

export class GetCampaignStats {
    /**
    * List Id of email campaign (only in case of get email campaign(s)(not for global stats))
    */
    'listId'?: number;
    /**
    * Number of unique clicks for the campaign
    */
    'uniqueClicks': number;
    /**
    * Number of total clicks for the campaign
    */
    'clickers': number;
    /**
    * Number of complaints (Spam reports) for the campaign
    */
    'complaints': number;
    /**
    * Number of delivered emails for the campaign
    */
    'delivered': number;
    /**
    * Number of sent emails for the campaign
    */
    'sent': number;
    /**
    * Number of softbounce for the campaign
    */
    'softBounces': number;
    /**
    * Number of harbounce for the campaign
    */
    'hardBounces': number;
    /**
    * Number of unique openings for the campaign
    */
    'uniqueViews': number;
    /**
    * Recipients without any privacy protection option enabled in their email client
    */
    'trackableViews': number;
    /**
    * Rate of recipients without any privacy protection option enabled in their email client
    */
    'trackableViewsRate'?: number;
    /**
    * Rate of recipients without any privacy protection option enabled in their email client, applied to all delivered emails
    */
    'estimatedViews'?: number;
    /**
    * Number of unsubscription for the campaign
    */
    'unsubscriptions': number;
    /**
    * Number of openings for the campaign
    */
    'viewed': number;
    /**
    * Number of deferred emails for the campaign
    */
    'deferred'?: number;
    /**
    * Total number of non-delivered campaigns for a particular campaign id.
    */
    'returnBounce'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "listId",
            "baseName": "listId",
            "type": "number"
        },
        {
            "name": "uniqueClicks",
            "baseName": "uniqueClicks",
            "type": "number"
        },
        {
            "name": "clickers",
            "baseName": "clickers",
            "type": "number"
        },
        {
            "name": "complaints",
            "baseName": "complaints",
            "type": "number"
        },
        {
            "name": "delivered",
            "baseName": "delivered",
            "type": "number"
        },
        {
            "name": "sent",
            "baseName": "sent",
            "type": "number"
        },
        {
            "name": "softBounces",
            "baseName": "softBounces",
            "type": "number"
        },
        {
            "name": "hardBounces",
            "baseName": "hardBounces",
            "type": "number"
        },
        {
            "name": "uniqueViews",
            "baseName": "uniqueViews",
            "type": "number"
        },
        {
            "name": "trackableViews",
            "baseName": "trackableViews",
            "type": "number"
        },
        {
            "name": "trackableViewsRate",
            "baseName": "trackableViewsRate",
            "type": "number"
        },
        {
            "name": "estimatedViews",
            "baseName": "estimatedViews",
            "type": "number"
        },
        {
            "name": "unsubscriptions",
            "baseName": "unsubscriptions",
            "type": "number"
        },
        {
            "name": "viewed",
            "baseName": "viewed",
            "type": "number"
        },
        {
            "name": "deferred",
            "baseName": "deferred",
            "type": "number"
        },
        {
            "name": "returnBounce",
            "baseName": "returnBounce",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetCampaignStats.attributeTypeMap;
    }
}

