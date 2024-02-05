import { SubredditData } from "../types/api/responses/GetSubredditResponse"

export class MediaError extends Error {
    static MEDIA_NOT_FOUND = (post: SubredditData): Error =>
        buildError("MEDIA_NOT_FOUND", `Media not found. Url: ${post.url}`)

    name: string
    message: string

    constructor({ name, message }: MedError) {
        super(message)
        this.name = name
        this.message = message
        Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
    }
}

const buildError = (name: string, message: string): Error => ({ name, message })
type MedError = ReturnType<typeof MediaError.MEDIA_NOT_FOUND>
