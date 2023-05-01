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
import type { WeeklyRepetitionScheduleDump } from './WeeklyRepetitionScheduleDump';
import {
    WeeklyRepetitionScheduleDumpFromJSON,
    WeeklyRepetitionScheduleDumpFromJSONTyped,
    WeeklyRepetitionScheduleDumpToJSON,
} from './WeeklyRepetitionScheduleDump';

/**
 * 
 * @export
 * @interface SectionMeeting
 */
export interface SectionMeeting {
    /**
     * 
     * @type {number}
     * @memberof SectionMeeting
     */
    endTime: number;
    /**
     * 
     * @type {number}
     * @memberof SectionMeeting
     */
    day: number;
    /**
     * 
     * @type {Nested}
     * @memberof SectionMeeting
     */
    session: Nested;
    /**
     * 
     * @type {WeeklyRepetitionScheduleDump}
     * @memberof SectionMeeting
     */
    repetitionSchedule?: WeeklyRepetitionScheduleDump;
    /**
     * 
     * @type {Nested}
     * @memberof SectionMeeting
     */
    location?: Nested;
    /**
     * 
     * @type {number}
     * @memberof SectionMeeting
     */
    startTime: number;
}

/**
 * Check if a given object implements the SectionMeeting interface.
 */
export function instanceOfSectionMeeting(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "endTime" in value;
    isInstance = isInstance && "day" in value;
    isInstance = isInstance && "session" in value;
    isInstance = isInstance && "startTime" in value;

    return isInstance;
}

export function SectionMeetingFromJSON(json: any): SectionMeeting {
    return SectionMeetingFromJSONTyped(json, false);
}

export function SectionMeetingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SectionMeeting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endTime': json['end_time'],
        'day': json['day'],
        'session': NestedFromJSON(json['session']),
        'repetitionSchedule': !exists(json, 'repetition_schedule') ? undefined : WeeklyRepetitionScheduleDumpFromJSON(json['repetition_schedule']),
        'location': !exists(json, 'location') ? undefined : NestedFromJSON(json['location']),
        'startTime': json['start_time'],
    };
}

export function SectionMeetingToJSON(value?: SectionMeeting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end_time': value.endTime,
        'day': value.day,
        'session': NestedToJSON(value.session),
        'repetition_schedule': WeeklyRepetitionScheduleDumpToJSON(value.repetitionSchedule),
        'location': NestedToJSON(value.location),
        'start_time': value.startTime,
    };
}
