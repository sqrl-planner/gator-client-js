/* tslint:disable */
/* eslint-disable */
/**
 * Gator API
 * A RESTful API for Gator
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Building } from './Building';
import {
    BuildingFromJSON,
    BuildingFromJSONTyped,
    BuildingToJSON,
} from './Building';

/**
 * 
 * @export
 * @interface BuildingPage
 */
export interface BuildingPage {
    /**
     * 
     * @type {string}
     * @memberof BuildingPage
     */
    lastId?: string;
    /**
     * 
     * @type {Array<Building>}
     * @memberof BuildingPage
     */
    buildings?: Array<Building>;
}

/**
 * Check if a given object implements the BuildingPage interface.
 */
export function instanceOfBuildingPage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildingPageFromJSON(json: any): BuildingPage {
    return BuildingPageFromJSONTyped(json, false);
}

export function BuildingPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingPage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastId': !exists(json, 'last_id') ? undefined : json['last_id'],
        'buildings': !exists(json, 'buildings') ? undefined : ((json['buildings'] as Array<any>).map(BuildingFromJSON)),
    };
}

export function BuildingPageToJSON(value?: BuildingPage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last_id': value.lastId,
        'buildings': value.buildings === undefined ? undefined : ((value.buildings as Array<any>).map(BuildingToJSON)),
    };
}

