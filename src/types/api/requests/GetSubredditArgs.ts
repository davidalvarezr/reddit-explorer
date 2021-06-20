import { Listing } from "./Listing"
import { SortingMethod } from "../SortingMethod"

// todo: create locales enum for "g"

export type GetSubredditArgs = Listing & {
    name: string // the name of the subreddit
    sortMethod: SortingMethod // one of hot, new, random, controversial, random, rising or top
    g?: string // the locale
}
