import { PostFilter } from "../post_filters"
import { PostPicker } from "../post_pickers/PostPicker"

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
    defaultLimit?: number // The number of posts retrieved by the getSubreddit() method (default: 25)
    postFilters?: PostFilter[] // the logical operator between each condition is a AND (&&)
    postPickers?: PostPicker[] // methods to take only the fields you want on each SubredditData
}
