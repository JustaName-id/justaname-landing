import { EventPayload, EVENTS } from './events'
import posthog from 'posthog-js'

let analyticsInstance: Index | null = null
const analyticsEnabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED
export const getAnalyticsClient = () => {
    if (!analyticsInstance) {
        analyticsInstance = new Index()
    }
    return analyticsInstance
}

class Index {
    constructor() {
        if (typeof window !== 'undefined' && analyticsEnabled) {
            const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
            const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
            if (!key) {
                throw new Error('Analytics key is required')
            }
            posthog.init(key, {
                api_host: host,
                capture_pageview: false,
                capture_pageleave: true,
                autocapture: true,
                loaded: (posthog) => {
                    if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
                },
            })
        }
    }

    identify(id: string) {
        if (!analyticsEnabled) return
        posthog.identify(id)
        posthog.alias(id)
        this.register({ id })
    }

    register(props: Record<string, string>) {
        if (!analyticsEnabled) return
        posthog.register(props)
    }

    track<T extends keyof typeof EVENTS>(
        event: T,
        props: EventPayload[(typeof EVENTS)[T]],
    ) {
        if (!analyticsEnabled) return
        posthog.capture(EVENTS[event], props)
    }

    track_unsafe(
        event: string,
        props: Record<string, string | number | boolean>,
    ) {
        if (!analyticsEnabled) return
        posthog.capture(event, props)
    }

    people_set(props: Record<string, string>) {
        if (!analyticsEnabled) return
        posthog.people.set(props)
    }
    reset() {
        if (!analyticsEnabled) return
        posthog.reset()
    }
}

export default Index
