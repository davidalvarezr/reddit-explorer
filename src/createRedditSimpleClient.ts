import { createRedditClient } from "./client/createRedditClient"
import { GetSubredditNamesArgs } from "./types/api/requests/GetSubredditNamesArgs"
import { RedditClientConfiguration } from "./config/RedditClientConfiguration"
import { SimplePost, SimpleGetSubredditArgs } from "./types/api/requests/GetSubredditArgs"
import { buildLink } from "./helpers/buildLink"
import { filterKeys } from "./helpers/filterKeys"
import { applyLocalTimezoneOffset } from "./helpers/applyLocalTimezoneOffset"

/**
 * Same as RedditClient but returns only essentials infos
 * @param options
 */
export const createRedditSimpleClient = (options: RedditClientConfiguration) => {
    const api = createRedditClient(options)

    const getSubreddit = async (args: SimpleGetSubredditArgs) => {
        const subreddit = await api.getSubreddit(args)
        const { fields } = args

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
            data: !fields?.length ? results : results.map((result) => filterKeys(result, fields)),
        }
    }

    const getSubredditNames = async (args: GetSubredditNamesArgs) => {
        return api.getSubredditNames({
            ...args,
            include_over_18: options.matureContent,
        })
    }

    return {
        getSubreddit,
        getSubredditNames,
    }
}
