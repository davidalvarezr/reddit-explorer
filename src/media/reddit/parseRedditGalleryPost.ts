import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { IMediaParser } from "../IMediaParser"
import { MediaType } from "../MediaType"

export const parseRedditGalleryPost = (subredditData: SubredditData): IMediaParser => {
    const { thumbnail, url } = subredditData

    const getThumbnail = (): string => {
        return thumbnail
    }

    const getMedia = (): string => {
        return url
    }

    const getMediaType = (): MediaType => MediaType.Image

    return {
        getThumbnail,
        getMedia,
        getMediaType,
    }
}
