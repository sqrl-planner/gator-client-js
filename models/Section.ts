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
import type { SectionMeeting } from './SectionMeeting';
import {
    SectionMeetingFromJSON,
    SectionMeetingFromJSONTyped,
    SectionMeetingToJSON,
} from './SectionMeeting';

/**
 * 
 * @export
 * @interface Section
 */
export interface Section {
    /**
     * 
     * @type {string}
     * @memberof Section
     */
    sectionNumber: string;
    /**
     * 
     * @type {boolean}
     * @memberof Section
     */
    cancelled?: boolean;
    /**
     * 
     * @type {Nested}
     * @memberof Section
     */
    enrolmentInfo?: Nested;
    /**
     * 
     * @type {Array<SectionMeeting>}
     * @memberof Section
     */
    meetings?: Array<SectionMeeting>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Section
     */
    linkedSections?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Section
     */
    teachingMethod: string;
    /**
     * 
     * @type {Array<Nested>}
     * @memberof Section
     */
    instructors?: Array<Nested>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Section
     */
    notes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Section
     */
    deliveryModes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Section
     */
    subtitle?: string;
}

/**
 * Check if a given object implements the Section interface.
 */
export function instanceOfSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sectionNumber" in value;
    isInstance = isInstance && "teachingMethod" in value;

    return isInstance;
}

export function SectionFromJSON(json: any): Section {
    return SectionFromJSONTyped(json, false);
}

export function SectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Section {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sectionNumber': json['section_number'],
        'cancelled': !exists(json, 'cancelled') ? undefined : json['cancelled'],
        'enrolmentInfo': !exists(json, 'enrolment_info') ? undefined : NestedFromJSON(json['enrolment_info']),
        'meetings': !exists(json, 'meetings') ? undefined : ((json['meetings'] as Array<any>).map(SectionMeetingFromJSON)),
        'linkedSections': !exists(json, 'linked_sections') ? undefined : json['linked_sections'],
        'teachingMethod': json['teaching_method'],
        'instructors': !exists(json, 'instructors') ? undefined : ((json['instructors'] as Array<any>).map(NestedFromJSON)),
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'deliveryModes': !exists(json, 'delivery_modes') ? undefined : json['delivery_modes'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
    };
}

export function SectionToJSON(value?: Section | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'section_number': value.sectionNumber,
        'cancelled': value.cancelled,
        'enrolment_info': NestedToJSON(value.enrolmentInfo),
        'meetings': value.meetings === undefined ? undefined : ((value.meetings as Array<any>).map(SectionMeetingToJSON)),
        'linked_sections': value.linkedSections,
        'teaching_method': value.teachingMethod,
        'instructors': value.instructors === undefined ? undefined : ((value.instructors as Array<any>).map(NestedToJSON)),
        'notes': value.notes,
        'delivery_modes': value.deliveryModes,
        'subtitle': value.subtitle,
    };
}
