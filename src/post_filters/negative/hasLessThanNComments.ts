import { less } from "../helpers/less"
import { PostFilterCreator } from "../PostFilterCreator"

export const hasLessThanNComments: PostFilterCreator<number> = less("num_comments")
