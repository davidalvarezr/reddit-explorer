import { Listing } from "./Listing"
import { SortingMethod } from "../SortingMethod"
import { TimeRange } from "../TimeRange"

type Base = Listing & {
    name: string | string[] // the name or the names of the subreddit(s)
    sortMethod: SortingMethod // one of hot, new, random, controversial, random, rising or top
}

type Locale =
    | "GLOBAL"
    | "US"
    | "AR"
    | "AU"
    | "BG"
    | "CA"
    | "CL"
    | "CO"
    | "HR"
    | "CZ"
    | "FI"
    | "FR"
    | "DE"
    | "GR"
    | "HU"
    | "IS"
    | "IN"
    | "IE"
    | "IT"
    | "JP"
    | "MY"
    | "MX"
    | "NZ"
    | "PH"
    | "PL"
    | "PT"
    | "PR"
    | "RO"
    | "RS"
    | "SG"
    | "ES"
    | "SE"
    | "TW"
    | "TH"
    | "TR"
    | "GB"
    | "US_WA"
    | "US_DE"
    | "US_DC"
    | "US_WI"
    | "US_WV"
    | "US_HI"
    | "US_FL"
    | "US_WY"
    | "US_NH"
    | "US_NJ"
    | "US_NM"
    | "US_TX"
    | "US_LA"
    | "US_NC"
    | "US_ND"
    | "US_NE"
    | "US_TN"
    | "US_NY"
    | "US_PA"
    | "US_CA"
    | "US_NV"
    | "US_VA"
    | "US_CO"
    | "US_AK"
    | "US_AL"
    | "US_AR"
    | "US_VT"
    | "US_IL"
    | "US_GA"
    | "US_IN"
    | "US_IA"
    | "US_OK"
    | "US_AZ"
    | "US_ID"
    | "US_CT"
    | "US_ME"
    | "US_MD"
    | "US_MA"
    | "US_OH"
    | "US_UT"
    | "US_MO"
    | "US_MN"
    | "US_MI"
    | "US_RI"
    | "US_KS"
    | "US_MT"
    | "US_MS"
    | "US_SC"
    | "US_KY"
    | "US_OR"
    | "US_SD"

type WithLocale = {
    g?: Locale
}

type WithTimeRange = {
    t?: TimeRange
}

type Hot = Base &
    WithLocale & {
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
