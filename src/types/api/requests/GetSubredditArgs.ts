import { Listing } from "./Listing"
import { SortingMethod } from "../SortingMethod"

// todo: create locales enum for "g"

export type GetSubredditArgs = Listing & {
    name: string
    sortMethod: SortingMethod
    g?: string
}
