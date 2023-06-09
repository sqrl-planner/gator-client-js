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
 * @interface Nested
 */
export interface Nested {
    /**
     * 
     * @type {string}
     * @memberof Nested
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Nested
     */
    lastName: string;
}

/**
 * Check if a given object implements the Nested interface.
 */
export function instanceOfNested(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;

    return isInstance;
}

export function NestedFromJSON(json: any): Nested {
    return NestedFromJSONTyped(json, false);
}

export function NestedFromJSONTyped(json: any, ignoreDiscriminator: boolean): Nested {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
    };
}

export function NestedToJSON(value?: Nested | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
    };
}

