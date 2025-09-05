import { NAVIGATION_EVENTS, NavigationEventPayload } from './navigation'

export const EVENTS = {
    ...NAVIGATION_EVENTS,
} as const

export interface EventPayload extends NavigationEventPayload {}
