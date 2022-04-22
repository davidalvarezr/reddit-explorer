import { IMediaParser } from "../IMediaParser"
import { SubredditData } from "../../types/api/responses/GetSubreddit"
import { Extension } from "../Extension"
import { MediaType } from "../MediaType"

export const parseImgurPost = (subredditData: SubredditData): IMediaParser => {
    const { thumbnail, url } = subredditData

    const getThumbnail = (): string => {
        return thumbnail
    }

    const getMedia = (): string => {
        return url.replace(Extension.GifV, Extension.Mp4)
    }

    const getMediaType = (): MediaType => MediaType.Video

    return {
        getThumbnail,
        getMedia,
        getMediaType,
    }
}
