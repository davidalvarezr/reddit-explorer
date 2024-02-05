import { SubredditData } from "../../types/api/responses/GetSubredditResponse"

export const isRedGifsMedia = (post: SubredditData): boolean => post.media?.oembed?.provider_name === "RedGIFs"
