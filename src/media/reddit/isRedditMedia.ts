import { SubredditData } from "../../types/api/responses/GetSubredditResponse"

export const isRedditMedia = (post: SubredditData): boolean => post.url.startsWith("https://i.redd.it")
