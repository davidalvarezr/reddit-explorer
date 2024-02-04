import { createRedditClient } from "./createRedditClient"
import { GetSubredditNamesArgs } from "../types/api/requests/GetSubredditNamesArgs"
import { RedditClientConfiguration } from "../config/RedditClientConfiguration"
import { buildLink } from "../helpers/buildLink"
import { filterKeys } from "../helpers/filterKeys"
import { applyLocalTimezoneOffset } from "../helpers/applyLocalTimezoneOffset"
import { SimpleGetSubredditArgs, SimplePost } from "../types/api/reddit-simple-client/requests/SimpleGetSubredditArgs"
import { SimpleGetSubredditResponse } from "../types/api/reddit-simple-client/response/SimpleGetSubredditResponse"
import { Optional } from "../types/Optional"
import { GetSubredditNamesResponse } from "../types/api/responses/GetSubredditNamesResponse"
import { defaultConfig } from "../config/defaultConfig"

/**
 * Same as RedditClient but returns only essentials infos
 * @param options
 */
export const createRedditSimpleClient = (options: RedditClientConfiguration) => {
    const finalConfig = { ...defaultConfig, ...options }
    const api = createRedditClient(finalConfig)

    // TODO: create an type with "optional" fields for the use and non-optional for internal logic
    const getSubreddit = async <T extends SimpleGetSubredditArgs>(
        args: Optional<T, "fields">
    ): Promise<SimpleGetSubredditResponse<T>> => {
        const { fields = [] as Partial<T>["fields"] } = args
        const subreddit = await api.getSubreddit({ ...args, fields } as T)

        const results: SimplePost[] = subreddit.data.children
            .filter((child) => !(child.data.over_18 && !options.matureContent))
            .map((child) => ({
                kind: child.kind,
                title: child.data.title,
                url: child.data.url,
                subreddit: child.data.subreddit,
                thumbnail: child.data.thumbnail,
                permalink: child.data.permalink,
                link: buildLink(child.data.permalink),
                createdAtUtc: new Date(child.data.created_utc * 1000),
                createdAtLocal: applyLocalTimezoneOffset(new Date(child.data.created_utc * 1000)),
            }))

        return {
            before: subreddit.data.before,
            after: subreddit.data.after,
            // TODO: fix typing
            data: !fields?.length ? results : (results.map((result) => filterKeys(result, fields)) as SimplePost[]),
        }
    }

    const getSubredditNames = async (args: GetSubredditNamesArgs): Promise<GetSubredditNamesResponse> => {
        return api.getSubredditNames({
            ...args,
            include_over_18: finalConfig.matureContent,
        })
    }

    return {
        getSubreddit,
        getSubredditNames,
    }
}
