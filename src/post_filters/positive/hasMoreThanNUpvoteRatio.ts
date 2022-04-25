import { more } from "../helpers/more"
import { PostFilterCreator } from "../PostFilterCreator"

export const hasMoreThanNUpvoteRatio: PostFilterCreator<number> = more("upvote_ratio")
