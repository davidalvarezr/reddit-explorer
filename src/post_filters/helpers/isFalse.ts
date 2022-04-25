import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { PostFilter } from "../PostFilter"

export const isFalse =
    (attribute: keyof SubredditData): PostFilter =>
    (post) =>
        post[attribute] === false
