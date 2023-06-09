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
/**
 * 
 * @export
 * @interface Building
 */
export interface Building {
    /**
     * 
     * @type {string}
     * @memberof Building
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Building
     */
    institution: string;
    /**
     * 
     * @type {string}
     * @memberof Building
     */
    mapUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof Building
     */
    code: string;
}

/**
 * Check if a given object implements the Building interface.
 */
export function instanceOfBuilding(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "institution" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function BuildingFromJSON(json: any): Building {
    return BuildingFromJSONTyped(json, false);
}

export function BuildingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Building {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'institution': json['institution'],
        'mapUrl': !exists(json, 'map_url') ? undefined : json['map_url'],
        'code': json['code'],
    };
}

export function BuildingToJSON(value?: Building | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'institution': value.institution,
        'map_url': value.mapUrl,
        'code': value.code,
    };
}

