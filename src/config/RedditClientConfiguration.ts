import { PostFilter } from "../post_filters/PostFilter"

export type RedditClientConfiguration = {
    clientId: string
    secret: string
    grantType?: string
    userAgent?: string
    deviceId?: string
    debug?: {
        logToken: boolean
    }

    // request config
    matureContent?: boolean
    limit?: number
    postFilters?: PostFilter[] // the logical operator between each condition is a AND (&&)
}
