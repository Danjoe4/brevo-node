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
* Privileges given to the user
*/
export class InviteAdminUserPrivilegesInner {
    /**
    * Feature name
    */
    'feature'?: InviteAdminUserPrivilegesInner.FeatureEnum;
    /**
    * Permissions for a given feature
    */
    'permissions'?: Array<InviteAdminUserPrivilegesInner.PermissionsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feature",
            "baseName": "feature",
            "type": "InviteAdminUserPrivilegesInner.FeatureEnum"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<InviteAdminUserPrivilegesInner.PermissionsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return InviteAdminUserPrivilegesInner.attributeTypeMap;
    }
}

export namespace InviteAdminUserPrivilegesInner {
    export enum FeatureEnum {
        MyPlan = <any> 'my_plan',
        Api = <any> 'api',
        UserManagement = <any> 'user_management',
        AppManagement = <any> 'app_management',
        SubOrganizationGroups = <any> 'sub_organization_groups',
        CreateSubOrganizations = <any> 'create_sub_organizations',
        ManageSubOrganizations = <any> 'manage_sub_organizations',
        Analytics = <any> 'analytics',
        Security = <any> 'security'
    }
    export enum PermissionsEnum {
        All = <any> 'all',
        None = <any> 'none',
        Create = <any> 'create',
        EditDelete = <any> 'edit_delete',
        DownloadData = <any> 'download_data',
        CreateAlerts = <any> 'create_alerts'
    }
}
