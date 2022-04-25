import { PostFilter } from "../PostFilter"
import { SubredditData } from "../../types/api/responses/GetSubredditResponse"
import { PostFilterCreator } from "../PostFilterCreator"

export const more =
    (attribute: keyof SubredditData): PostFilterCreator<number> =>
    (n): PostFilter =>
    (post) =>
        post[attribute] > n
