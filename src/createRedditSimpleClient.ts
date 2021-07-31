import { createRedditClient } from "./createRedditClient"
import { GetSubredditNamesArgs } from "./types/api/requests/GetSubredditNamesArgs"
import { RedditClientOptions } from "./types/RedditClientOptions"
import { SimpleGetSubredditArgs } from "./types/api/requests/GetSubredditArgs"
import { buildLink } from "./helpers/buildLink"
import { filterKeys } from "./helpers/filterKeys"

/**
 * Same as RedditClient but returns only essentials infos
 * @param options
 */
export const createRedditSimpleClient = (options: RedditClientOptions) => {
    const api = createRedditClient(options)

    const getSubreddit = async (args: SimpleGetSubredditArgs) => {
        const subreddit = await api.getSubreddit(args)
        const { fields } = args

        const results = subreddit.data.children
            .filter((child) => !(child.data.over_18 && !options.matureContent))
            .map((child) => ({
                kind: child.kind,
                title: child.data.title,
                url: child.data.url,
                subreddit: child.data.subreddit,
                thumbnail: child.data.thumbnail,
                permalink: child.data.permalink,
                link: buildLink(child.data.permalink),
            }))

        if (!fields?.length) return results

        return results.map((result) => filterKeys(result, fields))
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
