import { Quality } from "./Quality"
import { MediaType } from "./MediaType"

export interface IMediaParser {
    getThumbnail(quality?: string): string
    getMedia(quality?: Quality): string
    getMediaType(): MediaType
}
