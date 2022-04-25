import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { PostFilter } from "../PostFilter"
import { PostFilterCreator } from "../PostFilterCreator"

export const same =
    (attribute: keyof SubredditData): PostFilterCreator<number> =>
    (n): PostFilter =>
    (post) =>
        post[attribute] === n
