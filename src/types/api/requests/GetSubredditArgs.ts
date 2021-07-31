import { Listing } from "./Listing"
import { SortingMethod } from "../SortingMethod"
import { TimeRange } from "../TimeRange"

// todo: create locales enum for "g"

type Base = Listing & {
    name: string // the name of the subreddit
    sortMethod?: SortingMethod // one of hot, new, random, controversial, random, rising or top
}

type WithG = {
    g?: string // the locale
}

type WithT = {
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
    WithT & {
        sortMethod: SortingMethod.Top
    }

type Controversial = Base &
    WithT & {
        sortMethod: SortingMethod.Controversial
    }

export type GetSubredditArgs = Hot | New | Random | Rising | Top | Controversial

export type SimpleGetSubredditArgs = GetSubredditArgs & {
    fields?: string[]
}
