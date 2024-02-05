import { Media } from "./Media"

export type MediaGetSubredditResponse = {
    before: string | null
    after: string | null
    data: Media[]
}
