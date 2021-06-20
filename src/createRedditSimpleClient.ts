import { RedditClientOptions } from "./types"
import { createRedditClient } from "./createRedditClient"
import { GetSubredditArgs } from "./types/api/requests"
import { GetSubredditNamesArgs } from "./types/api/requests/GetSubredditNamesArgs"

/**
 * Same as RedditClient but returns only essentials infos
 * @param options
 */
export const createRedditSimpleClient = (options: RedditClientOptions) => {
    const api = createRedditClient(options)

    const getSubreddit = async (args: GetSubredditArgs) => {
        const subreddit = await api.getSubreddit(args)

        return subreddit.data.children
            .filter((child) => !(child.data.over_18 && !options.matureContent))
            .map((child) => ({
                title: child.data.title,
                url: child.data.url,
                subreddit: child.data.subreddit,
                thumbnail: child.data.thumbnail,
                permalink: child.data.permalink,
            }))
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
