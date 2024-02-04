import { Kind } from "../../Kind.js"
import { Url } from "../../../tags/Url.js"
import { GetSubredditArgs } from "../../requests/GetSubredditArgs.js"

export type SimplePost = {
    kind: Kind
    title: string
    url: Url
    subreddit: string
    thumbnail: Url
    permalink: string
    link: string
    createdAtUtc: Date
    createdAtLocal: Date
}

export type SimpleGetSubredditArgs = GetSubredditArgs & {
    readonly fields: Array<keyof SimplePost>
}
