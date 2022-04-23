import { IMediaParser } from "../IMediaParser"
import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { Quality } from "../Quality"
import { Extension } from "../Extension"
import { MediaType } from "../MediaType"

export const parseRedGifsPost = (subredditData: SubredditData): IMediaParser => {
    const thumbnail = subredditData.media!.oembed.thumbnail_url

    // private ---------------------------------------------------------------------------------------------------------
    const getStandardDefinitionMedia = () => thumbnail.replace(Extension.Jpg, Extension.Mp4)
    const getHighDefinitionMedia = () => thumbnail.replace(`-mobile.${Extension.Jpg}`, Extension.Mp4)
    // -----------------------------------------------------------------------------------------------------------------

    const getThumbnail = (): string => {
        return thumbnail
    }

    const getMedia = (quality?: Quality): string => {
        switch (quality) {
            case Quality.SD:
                return getStandardDefinitionMedia()
            case Quality.HD:
                return getHighDefinitionMedia()
            default:
                return getStandardDefinitionMedia()
        }
    }

    const getMediaType = (): MediaType => MediaType.Video

    return {
        getThumbnail,
        getMedia,
        getMediaType,
    }
}
