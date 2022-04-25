import { SubredditData } from "../types/api/responses/GetSubredditResponse"

export type PostFilter = (subredditData: SubredditData) => boolean
