import { Listing } from "./Listing"
import { SortingMethod } from "../SortingMethod"
import { TimeRange } from "../TimeRange"
import { Kind } from "../Kind"
import { Url } from "../../tags/Url"

// todo: create locales enum for "g"

type Base = Listing & {
    name: string // the name of the subreddit
    sortMethod?: SortingMethod // one of hot, new, random, controversial, random, rising or top
}

type WithG = {
    g?: string // the locale
}

type WithTimeRange = {
    t?: TimeRange
}

type Hot = Base &
    WithG & {
        sortMethod: SortingMethod.Hot
    }

type New = Base & {
    sortMethod: SortingMethod.New
}

type Random = Base & {
    sortMethod: SortingMethod.Random
}

type Rising = Base & {
    sortMethod: SortingMethod.Rising
}

type Top = Base &
    WithTimeRange & {
        sortMethod: SortingMethod.Top
    }

type Controversial = Base &
    WithTimeRange & {
        sortMethod: SortingMethod.Controversial
    }

export type GetSubredditArgs = Hot | New | Random | Rising | Top | Controversial

export type SimplePost = {
    kind: Kind
    title: string
    url: Url
    subreddit: string
    thumbnail: Url
    permalink: string
    link: string
    createdAtUtc: Date
    createdAtLocal: Date
}

export type SimpleGetSubredditArgs = GetSubredditArgs & {
    fields?: Array<keyof SimplePost>
}
