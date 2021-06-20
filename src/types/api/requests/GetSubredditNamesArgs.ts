/**
 * List subreddit names that begin with a query string.
 * Subreddits whose names begin with query will be returned. If include_over_18 is false, subreddits with over-18 content restrictions will be filtered from the results.
 * If include_unadvertisable is False, subreddits that have hide_ads set to True or are on the anti_ads_subreddits list will be filtered.
 * If exact is true, only an exact match will be returned. Exact matches are inclusive of over_18 subreddits, but not hide_ad subreddits when include_unadvertisable is False.
 */
export type GetSubredditNamesArgs = {
    exact?: boolean
    include_over_18?: boolean
    include_unadvertisable?: boolean
    query: string // a string up to 50 characters long, consisting of printable characters.
    search_query_id?: string // a uuid
    typeahead_active?: boolean
}
