import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { PostFilter } from "../PostFilter"

export const isTrue =
    (attribute: keyof SubredditData): PostFilter =>
    (post) =>
        post[attribute] === true
