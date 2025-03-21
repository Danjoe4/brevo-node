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
import { MainGenerator } from './mainGenerator';
import { MainLimit } from './mainLimit';
import { MainProduct } from './mainProduct';
import { MainRewardConfigurations } from './mainRewardConfigurations';
import { MainRule } from './mainRule';

export class MainReward {
    /**
    * Maximum number of times a consumer can be attributed this reward
    */
    'attributionPerConsumer'?: number;
    /**
    * Unique identifier for the balance definition
    */
    'balanceDefinitionId'?: string;
    /**
    * Unique code for the reward
    */
    'code'?: string;
    /**
    * Total number of codes generated
    */
    'codeCount'?: number;
    /**
    * Unique identifier for the code generator
    */
    'codeGeneratorId'?: string;
    /**
    * Unique identifier for the code pool
    */
    'codePoolId'?: string;
    /**
    * Configuration settings for the reward
    */
    'config'?: string;
    /**
    * Timestamp when the reward was created
    */
    'createdAt'?: Date;
    /**
    * Disabled date of the reward
    */
    'disabledAt'?: Date;
    /**
    * End date of the reward validity
    */
    'endDate'?: Date;
    /**
    * Expiration date of the reward
    */
    'expirationDate'?: Date;
    /**
    * Select startOfPeriod to configure rewards expiry on start of day/week/month/year. Select endOfPeriod to configure reward expiry on end of day/week/month/year, else select noModification
    */
    'expirationModifier'?: MainReward.ExpirationModifierEnum = MainReward.ExpirationModifierEnum.NoModification;
    /**
    * Unit of time for the rewards\'s availability (e.g., day/week/month/year).
    */
    'expirationUnit'?: string;
    /**
    * Number of days/weeks/month/year for reward expiry
    */
    'expirationValue'?: number;
    /**
    * object
    */
    'generator'?: MainGenerator;
    /**
    * Unique identifier for the reward
    */
    'id'?: string;
    /**
    * Attribution / Redeem Limits for the reward
    */
    'limits'?: Array<MainLimit>;
    /**
    * Id of the loyalty program to which the current reward belongs to
    */
    'loyaltyProgramId'?: string;
    /**
    * Additional data for reward definition
    */
    'meta'?: { [key: string]: any; };
    /**
    * Name of the reward
    */
    'name'?: string;
    /**
    * Selected products for reward definition
    */
    'products'?: Array<MainProduct>;
    /**
    * Public description for the reward
    */
    'publicDescription'?: string;
    /**
    * Public Image for the reward
    */
    'publicImage'?: string;
    /**
    * Public name for the reward
    */
    'publicName'?: string;
    /**
    * Defines the redeem limit for the consumer
    */
    'redeemPerConsumer'?: number;
    /**
    * Rules defined to redeem a reward
    */
    'redeemRules'?: Array<string>;
    /**
    * object
    */
    'rewardConfigs'?: MainRewardConfigurations;
    /**
    * Rule to define the reward
    */
    'rule'?: MainRule;
    /**
    * Start date of attribution of the reward
    */
    'startDate'?: Date;
    /**
    * Id of the selected balance while redeeming / attributing a reward
    */
    'subtractBalanceDefinitionId'?: string;
    /**
    * Strategy of the Balance while redeeming / attributing a reward
    */
    'subtractBalanceStrategy'?: string;
    /**
    * Amount of balance to be selected while redeeming / attributing a reward
    */
    'subtractBalanceValue'?: number;
    /**
    * Value to indicate to subtract full balance or not
    */
    'subtractTotalBalance'?: boolean;
    /**
    * Defines the limit to which a consumer can attribute a reward
    */
    'totalAttribution'?: number;
    /**
    * Defines the limit to which a consumer can redeem a reward
    */
    'totalRedeem'?: number;
    /**
    * Id of the Rule to be updated for that reward
    */
    'triggerId'?: string;
    /**
    * Selected unit of the balance
    */
    'unit'?: string;
    /**
    * Timestamp for when this reward was last updated.
    */
    'updatedAt'?: string;
    /**
    * Value of metric in selected config for reward definition
    */
    'value'?: number;
    /**
    * Type of config selected for reward definition
    */
    'valueType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributionPerConsumer",
            "baseName": "attributionPerConsumer",
            "type": "number"
        },
        {
            "name": "balanceDefinitionId",
            "baseName": "balanceDefinitionId",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "codeCount",
            "baseName": "codeCount",
            "type": "number"
        },
        {
            "name": "codeGeneratorId",
            "baseName": "codeGeneratorId",
            "type": "string"
        },
        {
            "name": "codePoolId",
            "baseName": "codePoolId",
            "type": "string"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "disabledAt",
            "baseName": "disabledAt",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date"
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "Date"
        },
        {
            "name": "expirationModifier",
            "baseName": "expirationModifier",
            "type": "MainReward.ExpirationModifierEnum"
        },
        {
            "name": "expirationUnit",
            "baseName": "expirationUnit",
            "type": "string"
        },
        {
            "name": "expirationValue",
            "baseName": "expirationValue",
            "type": "number"
        },
        {
            "name": "generator",
            "baseName": "generator",
            "type": "MainGenerator"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Array<MainLimit>"
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<MainProduct>"
        },
        {
            "name": "publicDescription",
            "baseName": "publicDescription",
            "type": "string"
        },
        {
            "name": "publicImage",
            "baseName": "publicImage",
            "type": "string"
        },
        {
            "name": "publicName",
            "baseName": "publicName",
            "type": "string"
        },
        {
            "name": "redeemPerConsumer",
            "baseName": "redeemPerConsumer",
            "type": "number"
        },
        {
            "name": "redeemRules",
            "baseName": "redeemRules",
            "type": "Array<string>"
        },
        {
            "name": "rewardConfigs",
            "baseName": "rewardConfigs",
            "type": "MainRewardConfigurations"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "MainRule"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "subtractBalanceDefinitionId",
            "baseName": "subtractBalanceDefinitionId",
            "type": "string"
        },
        {
            "name": "subtractBalanceStrategy",
            "baseName": "subtractBalanceStrategy",
            "type": "string"
        },
        {
            "name": "subtractBalanceValue",
            "baseName": "subtractBalanceValue",
            "type": "number"
        },
        {
            "name": "subtractTotalBalance",
            "baseName": "subtractTotalBalance",
            "type": "boolean"
        },
        {
            "name": "totalAttribution",
            "baseName": "totalAttribution",
            "type": "number"
        },
        {
            "name": "totalRedeem",
            "baseName": "totalRedeem",
            "type": "number"
        },
        {
            "name": "triggerId",
            "baseName": "triggerId",
            "type": "string"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MainReward.attributeTypeMap;
    }
}

export namespace MainReward {
    export enum ExpirationModifierEnum {
        StartOfPeriod = <any> 'startOfPeriod',
        EndOfPeriod = <any> 'endOfPeriod',
        NoModification = <any> 'noModification'
    }
}
