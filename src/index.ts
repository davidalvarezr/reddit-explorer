// Main & config

import { createRedditClient } from "./client/createRedditClient"
import { RedditClientConfiguration } from "./config/RedditClientConfiguration"

// Requests
import { GetSubredditArgs } from "./types/api/requests/GetSubredditArgs"
import { GetSubredditNamesArgs } from "./types/api/requests/GetSubredditNamesArgs"
import { SortingMethod } from "./types/api/SortingMethod"
import { TimeRange } from "./types/api/TimeRange"

// Responses
import { GetSubredditResponse, SubredditData } from "./types/api/responses/GetSubredditResponse"
import { GetSubredditNamesResponse } from "./types/api/responses/GetSubredditNamesResponse"
import {
    hasLessOrSameThanNComments,
    hasLessThanNComments,
    hasMoreOrSameThanNComments,
    hasMoreThanNComments,
    hasMoreThanNCrossposts,
    hasMoreThanNUpvoteRatio,
    hasNComments,
    isFalse,
    isMatureContent,
    isNotMatureContent,
    isTrue,
    less,
    more,
    same,
    sameOrLess,
    sameOrMore,
} from "./post_filters/"

export {
    // Main & config
    createRedditClient,
    RedditClientConfiguration,
    // Requests
    GetSubredditArgs,
    GetSubredditNamesArgs,
    SortingMethod,
    TimeRange,
    // Responses
    GetSubredditResponse,
    SubredditData,
    GetSubredditNamesResponse,
    // Post filters
    hasNComments,
    isFalse,
    isTrue,
    less,
    more,
    same,
    sameOrLess,
    sameOrMore,
    hasLessOrSameThanNComments,
    hasLessThanNComments,
    isNotMatureContent,
    hasMoreOrSameThanNComments,
    hasMoreThanNComments,
    hasMoreThanNCrossposts,
    hasMoreThanNUpvoteRatio,
    isMatureContent,
}
