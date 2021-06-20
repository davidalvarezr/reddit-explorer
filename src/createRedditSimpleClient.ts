import { RedditClientOptions } from "./types"
import { createRedditClient } from "./createRedditClient"
import { GetSubredditArgs } from "./types/api/requests"

/**
 * Same as RedditClient but returns only essentials infos
 * @param options
 */
export const createRedditSimpleClient = (options: RedditClientOptions) => {
    const api = createRedditClient(options)

    const getSubreddit = async (args: GetSubredditArgs) => {
        const subreddit = await api.getSubreddit(args)

        return subreddit.data.children.map((child) => ({
            title: child.data.title,
            url: child.data.url,
            subreddit: child.data.subreddit,
            thumbnail: child.data.thumbnail,
            permalink: child.data.permalink,
        }))
    }

    return {
        getSubreddit,
    }
}
