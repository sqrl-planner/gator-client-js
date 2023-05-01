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
import type { Nested } from './Nested';
import {
    NestedFromJSON,
    NestedFromJSONTyped,
    NestedToJSON,
} from './Nested';
import type { Section } from './Section';
import {
    SectionFromJSON,
    SectionFromJSONTyped,
    SectionToJSON,
} from './Section';

/**
 * 
 * @export
 * @interface Course
 */
export interface Course {
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    institution?: string;
    /**
     * 
     * @type {number}
     * @memberof Course
     */
    credits?: number;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    corequisites?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Course
     */
    notes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    code?: string;
    /**
     * 
     * @type {Array<Nested>}
     * @memberof Course
     */
    categoricalRequirements?: Array<Nested>;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    instructionLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    term?: string;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    exclusions?: string;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Course
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Course
     */
    cancelled?: boolean;
    /**
     * 
     * @type {Array<Nested>}
     * @memberof Course
     */
    sessions?: Array<Nested>;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    uuid: string;
    /**
     * 
     * @type {Array<Section>}
     * @memberof Course
     */
    sections?: Array<Section>;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    recommendedPreparation?: string;
    /**
     * 
     * @type {string}
     * @memberof Course
     */
    prerequisites?: string;
}

/**
 * Check if a given object implements the Course interface.
 */
export function instanceOfCourse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;

    return isInstance;
}

export function CourseFromJSON(json: any): Course {
    return CourseFromJSONTyped(json, false);
}

export function CourseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Course {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'institution': !exists(json, 'institution') ? undefined : json['institution'],
        'credits': !exists(json, 'credits') ? undefined : json['credits'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'corequisites': !exists(json, 'corequisites') ? undefined : json['corequisites'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'categoricalRequirements': !exists(json, 'categorical_requirements') ? undefined : ((json['categorical_requirements'] as Array<any>).map(NestedFromJSON)),
        'instructionLevel': !exists(json, 'instruction_level') ? undefined : json['instruction_level'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'term': !exists(json, 'term') ? undefined : json['term'],
        'exclusions': !exists(json, 'exclusions') ? undefined : json['exclusions'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'cancelled': !exists(json, 'cancelled') ? undefined : json['cancelled'],
        'sessions': !exists(json, 'sessions') ? undefined : ((json['sessions'] as Array<any>).map(NestedFromJSON)),
        'uuid': json['uuid'],
        'sections': !exists(json, 'sections') ? undefined : ((json['sections'] as Array<any>).map(SectionFromJSON)),
        'recommendedPreparation': !exists(json, 'recommended_preparation') ? undefined : json['recommended_preparation'],
        'prerequisites': !exists(json, 'prerequisites') ? undefined : json['prerequisites'],
    };
}

export function CourseToJSON(value?: Course | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'institution': value.institution,
        'credits': value.credits,
        'title': value.title,
        'corequisites': value.corequisites,
        'notes': value.notes,
        'code': value.code,
        'categorical_requirements': value.categoricalRequirements === undefined ? undefined : ((value.categoricalRequirements as Array<any>).map(NestedToJSON)),
        'instruction_level': value.instructionLevel,
        'description': value.description,
        'term': value.term,
        'exclusions': value.exclusions,
        'name': value.name,
        'tags': value.tags,
        'cancelled': value.cancelled,
        'sessions': value.sessions === undefined ? undefined : ((value.sessions as Array<any>).map(NestedToJSON)),
        'uuid': value.uuid,
        'sections': value.sections === undefined ? undefined : ((value.sections as Array<any>).map(SectionToJSON)),
        'recommended_preparation': value.recommendedPreparation,
        'prerequisites': value.prerequisites,
    };
}

