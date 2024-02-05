import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { Url } from "../../types/tags/Url"

export const isRedditVideoMedia = (post: SubredditData): boolean => post.domain === ("v.redd.it" as Url)
