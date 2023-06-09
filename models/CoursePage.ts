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
import type { Course } from './Course';
import {
    CourseFromJSON,
    CourseFromJSONTyped,
    CourseToJSON,
} from './Course';

/**
 * 
 * @export
 * @interface CoursePage
 */
export interface CoursePage {
    /**
     * 
     * @type {string}
     * @memberof CoursePage
     */
    lastId?: string;
    /**
     * 
     * @type {Array<Course>}
     * @memberof CoursePage
     */
    courses?: Array<Course>;
}

/**
 * Check if a given object implements the CoursePage interface.
 */
export function instanceOfCoursePage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoursePageFromJSON(json: any): CoursePage {
    return CoursePageFromJSONTyped(json, false);
}

export function CoursePageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoursePage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastId': !exists(json, 'last_id') ? undefined : json['last_id'],
        'courses': !exists(json, 'courses') ? undefined : ((json['courses'] as Array<any>).map(CourseFromJSON)),
    };
}

export function CoursePageToJSON(value?: CoursePage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last_id': value.lastId,
        'courses': value.courses === undefined ? undefined : ((value.courses as Array<any>).map(CourseToJSON)),
    };
}

