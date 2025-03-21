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
import { UpdateEmailCampaignEmailExpirationDate } from './updateEmailCampaignEmailExpirationDate';
import { UpdateEmailCampaignRecipients } from './updateEmailCampaignRecipients';
import { UpdateEmailCampaignSender } from './updateEmailCampaignSender';

export class UpdateEmailCampaign {
    /**
    * Tag of the campaign
    */
    'tag'?: string;
    'sender'?: UpdateEmailCampaignSender;
    /**
    * Name of the campaign
    */
    'name'?: string;
    /**
    * Body of the message (HTML version). If the campaign is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that campaign. **REQUIRED if htmlUrl is empty** 
    */
    'htmlContent'?: string;
    /**
    * Url which contents the body of the email message. **REQUIRED if htmlContent is empty** 
    */
    'htmlUrl'?: string;
    /**
    * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part). 
    */
    'scheduledAt'?: string;
    /**
    * Subject of the campaign
    */
    'subject'?: string;
    /**
    * Preview text or preheader of the email campaign
    */
    'previewText'?: string;
    /**
    * Email on which campaign recipients will be able to reply to
    */
    'replyTo'?: string;
    /**
    * To personalize the **To** Field. If you want to include the first name and last name of your recipient, add **{FNAME} {LNAME}**. These contact attributes must already exist in your Brevo account. If input parameter **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization 
    */
    'toField'?: string;
    'recipients'?: UpdateEmailCampaignRecipients;
    /**
    * Absolute url of the attachment (no local file). Extension allowed: #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps\' 
    */
    'attachmentUrl'?: string;
    /**
    * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email. You cannot send a campaign of more than **4MB** with images embedded in the email. Campaigns with the images embedded in the email _must be sent to less than 5000 contacts_. 
    */
    'inlineImageActivation'?: boolean = false;
    /**
    * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
    */
    'mirrorActive'?: boolean;
    /**
    * **FOR TRIGGER ONLY !** Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times 
    */
    'recurring'?: boolean = false;
    /**
    * Footer of the email campaign
    */
    'footer'?: string;
    /**
    * Header of the email campaign
    */
    'header'?: string;
    /**
    * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
    */
    'utmCampaign'?: string;
    /**
    * Pass the set of attributes to customize the type classic campaign. For example: **{\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}**. Only available if **type** is **classic**. It\'s considered only if campaign is in _New Template Language format_. The New Template Language is dependent on the values of **subject, htmlContent/htmlUrl, sender.name & toField** 
    */
    'params'?: { [key: string]: any; };
    /**
    * Set this to true if you want to send your campaign at best time. Note:- **if true, warmup ip will be disabled.** 
    */
    'sendAtBestTime'?: boolean;
    /**
    * Status of A/B Test. abTesting = false means it is disabled & abTesting = true means it is enabled. **subjectA, subjectB, splitRule, winnerCriteria & winnerDelay** will be considered when abTesting is set to true. subjectA & subjectB are mandatory together & subject if passed is ignored. **Can be set to true only if sendAtBestTime is false**. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B 
    */
    'abTesting'?: boolean = false;
    /**
    * Subject A of the campaign. **Mandatory if abTesting = true**. subjectA & subjectB should have unique value 
    */
    'subjectA'?: string;
    /**
    * Subject B of the campaign. **Mandatory if abTesting = true**. subjectA & subjectB should have unique value 
    */
    'subjectB'?: string;
    /**
    * Add the size of your test groups. **Mandatory if abTesting = true & \'recipients\' is passed**. We\'ll send version A and B to a random sample of recipients, and then the winning version to everyone else 
    */
    'splitRule'?: number;
    /**
    * Choose the metrics that will determinate the winning version. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerCriteria` is ignored if passed 
    */
    'winnerCriteria'?: UpdateEmailCampaign.WinnerCriteriaEnum;
    /**
    * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerDelay` is ignored if passed 
    */
    'winnerDelay'?: number;
    /**
    * **Available for dedicated ip clients**. Set this to true if you wish to warm up your ip. 
    */
    'ipWarmupEnable'?: boolean = false;
    /**
    * Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000. 
    */
    'initialQuota'?: number;
    /**
    * Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%. 
    */
    'increaseRate'?: number;
    /**
    * Enter an unsubscription page id. The page id is a 24 digit alphanumeric id that can be found in the URL when editing the page. 
    */
    'unsubscriptionPageId'?: string;
    /**
    * **Mandatory if templateId is used containing the {{ update_profile }} tag**. Enter an update profile form id. The form id is a 24 digit alphanumeric id that can be found in the URL when editing the form. 
    */
    'updateFormId'?: string;
    'emailExpirationDate'?: UpdateEmailCampaignEmailExpirationDate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "UpdateEmailCampaignSender"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "htmlContent",
            "baseName": "htmlContent",
            "type": "string"
        },
        {
            "name": "htmlUrl",
            "baseName": "htmlUrl",
            "type": "string"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "previewText",
            "baseName": "previewText",
            "type": "string"
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string"
        },
        {
            "name": "toField",
            "baseName": "toField",
            "type": "string"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "UpdateEmailCampaignRecipients"
        },
        {
            "name": "attachmentUrl",
            "baseName": "attachmentUrl",
            "type": "string"
        },
        {
            "name": "inlineImageActivation",
            "baseName": "inlineImageActivation",
            "type": "boolean"
        },
        {
            "name": "mirrorActive",
            "baseName": "mirrorActive",
            "type": "boolean"
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "boolean"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "utmCampaign",
            "baseName": "utmCampaign",
            "type": "string"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "sendAtBestTime",
            "baseName": "sendAtBestTime",
            "type": "boolean"
        },
        {
            "name": "abTesting",
            "baseName": "abTesting",
            "type": "boolean"
        },
        {
            "name": "subjectA",
            "baseName": "subjectA",
            "type": "string"
        },
        {
            "name": "subjectB",
            "baseName": "subjectB",
            "type": "string"
        },
        {
            "name": "splitRule",
            "baseName": "splitRule",
            "type": "number"
        },
        {
            "name": "winnerCriteria",
            "baseName": "winnerCriteria",
            "type": "UpdateEmailCampaign.WinnerCriteriaEnum"
        },
        {
            "name": "winnerDelay",
            "baseName": "winnerDelay",
            "type": "number"
        },
        {
            "name": "ipWarmupEnable",
            "baseName": "ipWarmupEnable",
            "type": "boolean"
        },
        {
            "name": "initialQuota",
            "baseName": "initialQuota",
            "type": "number"
        },
        {
            "name": "increaseRate",
            "baseName": "increaseRate",
            "type": "number"
        },
        {
            "name": "unsubscriptionPageId",
            "baseName": "unsubscriptionPageId",
            "type": "string"
        },
        {
            "name": "updateFormId",
            "baseName": "updateFormId",
            "type": "string"
        },
        {
            "name": "emailExpirationDate",
            "baseName": "emailExpirationDate",
            "type": "UpdateEmailCampaignEmailExpirationDate"
        }    ];

    static getAttributeTypeMap() {
        return UpdateEmailCampaign.attributeTypeMap;
    }
}

export namespace UpdateEmailCampaign {
    export enum WinnerCriteriaEnum {
        Open = <any> 'open',
        Click = <any> 'click'
    }
}
