import { PostFilter } from "../post_filter/PostFilter"

export type RedditClientConfiguration = {
    clientId: string
    secret: string
    userAgent?: string
    grantType?: string
    deviceId?: string
    debug?: {
        logToken: boolean
    }
    matureContent?: boolean
    postFilters?: PostFilter[] // the logical operator between each condition is a AND (&&)
}
