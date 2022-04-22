import { IMediaParser } from "../IMediaParser"
import { SubredditData } from "../../types/api/responses/GetSubreddit"
import { Extension } from "../Extension"
import { MediaType } from "../MediaType"

export const parseRedditPost = (subredditData: SubredditData): IMediaParser => {
    const { thumbnail, url } = subredditData

    const getThumbnail = (): string => {
        return thumbnail
    }

    const getMedia = (): string => {
        return url
    }

    const getMediaType = (): MediaType => (url.endsWith(Extension.Gif) ? MediaType.Gif : MediaType.Image)

    return {
        getThumbnail,
        getMedia,
        getMediaType,
    }
}
