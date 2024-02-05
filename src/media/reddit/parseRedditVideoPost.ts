import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { IMediaParser } from "../IMediaParser"
import { MediaType } from "../MediaType"

export const parseRedditVideoPost = (subredditData: SubredditData): IMediaParser => {
    const reddit_video = subredditData.secure_media!.reddit_video!

    const getThumbnail = (): string => {
        return reddit_video.scrubber_media_url
    }

    const getMedia = (): string => {
        return reddit_video.fallback_url
    }

    const getMediaType = (): MediaType =>
        subredditData.is_video ? MediaType.Video : reddit_video.is_gif ? MediaType.Gif : MediaType.Image

    return {
        getThumbnail,
        getMedia,
        getMediaType,
    }
}
