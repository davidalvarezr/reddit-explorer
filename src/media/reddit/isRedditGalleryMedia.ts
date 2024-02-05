import { SubredditData } from "../../types/api/responses/GetSubredditResponse"

export const isRedditGalleryMedia = (post: SubredditData): boolean =>
    post.url.startsWith("https://www.reddit.com/gallery")
