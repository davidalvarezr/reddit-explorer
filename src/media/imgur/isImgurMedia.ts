import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { Url } from "../../types/tags/Url"

export const isImgurMedia = (post: SubredditData): boolean => post.domain === ("i.imgur.com" as Url)
